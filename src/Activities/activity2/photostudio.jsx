import React, { useState, useEffect, useRef } from 'react';
import './photostudio.css';

function PhotoStudio() {
    // useState hooks
    const [selectedPackage, setSelectedPackage] = useState('basic');
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    
    // useRef hook
    const nameInputRef = useRef(null);

    // Package data
    const packages = {
        basic: { name: 'Basic', price: 299 },
        premium: { name: 'Premium', price: 499 },
        ultimate: { name: 'Ultimate', price: 799 }
    };

    // useEffect - Focus on name input when component mounts
    useEffect(() => {
        nameInputRef.current?.focus();
        console.log('Shess gin pitik an studio');
    }, []);

    // useEffect - Validate form whenever inputs change
    useEffect(() => {
        const isValid = clientName.trim().length >= 3 && 
                       clientEmail.includes('@') && 
                       clientEmail.includes('.');
        setIsFormValid(isValid);
    }, [clientName, clientEmail]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        isFormValid && setIsSubmitted(true);
        isFormValid && console.log('Shess gin pitik an booking');
    };

    // Reset form
    const handleReset = () => {
        setIsSubmitted(false);
        setClientName('');
        setClientEmail('');
        setSelectedPackage('basic');
        setTimeout(() => nameInputRef.current?.focus(), 100);
    };

    return (
        <div className="pitikshess">
            <header className="pitikshess-header">
                <div className="pitikshess-brand">
                    <h1 className="pitikshess-logo">
                        Pitik<span className="pitikshess-gold">Shess</span>
                    </h1>
                    <p className="pitikshess-brand-tag">studio booking</p>
                </div>
            </header>

            <main className="pitikshess-main">
                <div className="pitikshess-container">
                    {/* Conditional Rendering - Ternary Operator */}
                    {!isSubmitted ? (
                        <form className="studio-form" onSubmit={handleSubmit}>
                            <span className="pitikshess-badge">Book Your Session</span>
                            
                            <div className="studio-field">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    ref={nameInputRef}
                                    type="text"
                                    id="name"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="studio-input"
                                />
                                {/* Logical AND operator */}
                                {clientName && clientName.length < 3 && (
                                    <span className="studio-error">Minimum 3 characters required</span>
                                )}
                            </div>

                            <div className="studio-field">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={clientEmail}
                                    onChange={(e) => setClientEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="studio-input"
                                />
                                {/* Logical AND operator */}
                                {clientEmail && !clientEmail.includes('@') && (
                                    <span className="studio-error">Please enter a valid email</span>
                                )}
                            </div>

                            <div className="studio-field">
                                <label>Select Package</label>
                                <div className="studio-packages">
                                    {Object.keys(packages).map((key) => (
                                        <div 
                                            key={key}
                                            className={`studio-package ${selectedPackage === key ? 'selected' : ''}`}
                                            onClick={() => setSelectedPackage(key)}
                                        >
                                            <h4>{packages[key].name}</h4>
                                            <div className="studio-price">₱{packages[key].price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="studio-summary">
                                <p>
                                    <span>Selected Package:</span>
                                    {/* Ternary operator */}
                                    <strong>{selectedPackage ? packages[selectedPackage].name : 'None'}</strong>
                                </p>
                                <p>
                                    <span>Total Price:</span>
                                    <strong className="pitikshess-gold">₱{packages[selectedPackage].price}</strong>
                                </p>
                            </div>

                            <div className="pitikshess-buttons">
                                <button 
                                    type="submit" 
                                    className="pitikshess-btn-primary"
                                    disabled={!isFormValid}
                                >
                                    {/* Ternary operator */}
                                    {isFormValid ? 'Confirm Booking' : 'Complete Form'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="studio-confirmation">
                            <span className="pitikshess-badge">Booking Confirmed</span>
                            
                            <h2 className="pitikshess-title">
                                Thank You
                                <br />
                                <span className="pitikshess-gold">{clientName}</span>
                            </h2>
                            
                            <p className="pitikshess-description">
                                Your {packages[selectedPackage].name} package has been booked.
                                <br />
                                Total: ₱{packages[selectedPackage].price}
                                <br />
                                Confirmation sent to: {clientEmail}
                            </p>
                            
                            <div className="pitikshess-buttons">
                                <button 
                                    className="pitikshess-btn-secondary"
                                    onClick={handleReset}
                                >
                                    Book Another Session
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default PhotoStudio;