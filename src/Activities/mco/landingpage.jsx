	import React, { useState, useEffect, useRef, useCallback } from 'react';
	import './landingpage.css';

	/* ── Import founder images from public/images ── */
	import jeremyImg from '/images/Jeremy.png';
	import glennImg from '/images/Glenn.png';
	import mharjonImg from '/images/Mharjon.png';
	import vinceImg from '/images/Vince.png';
	import eranImg from '/images/Eran.png';

	/* ── SVG Icons (Gold) ── */
	const IconReact = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<circle cx="12" cy="12" r="2" />
		<path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20" />
		<path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20" transform="rotate(60 12 12)" />
		<path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20" transform="rotate(120 12 12)" />
	</svg>
	);

	const IconVite = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
	</svg>
	);

	const IconCSS = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<path d="M12 2L2 7l1.5 12L12 22l8.5-3L22 7z" />
		<path d="M12 2v20" />
		<path d="M7.5 7.5l1-3h7l1 3" />
	</svg>
	);

	const IconGitBranch = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<line x1="6" y1="3" x2="6" y2="15" />
		<circle cx="6" cy="18" r="3" />
		<path d="M6 15a9 9 0 0 0 9-9" />
		<circle cx="18" cy="6" r="3" />
	</svg>
	);

	const IconESLint = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
		<path d="M7 9l5-3 5 3v6l-5 3-5-3z" />
		<path d="M9 10l3 4 3-4" />
	</svg>
	);

	const IconOpenSource = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
		<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
		<line x1="12" y1="22.08" x2="12" y2="12" />
	</svg>
	);

	const IconGitHub = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pitik-feature-icon-svg">
		<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
	</svg>
	);

	const PitikShessLanding = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const cursorRef = useRef(null);
	const ringRef = useRef(null);
	const animationFrameRef = useRef(null);
	const mouseRef = useRef({ x: 0, y: 0 });
	const ringPosRef = useRef({ x: 0, y: 0 });

	const animateCursor = useCallback(() => {
		const ring = ringPosRef.current;
		ring.x += (mouseRef.current.x - ring.x) * 0.1;
		ring.y += (mouseRef.current.y - ring.y) * 0.1;

		if (cursorRef.current) {
		cursorRef.current.style.transform = `translate(${mouseRef.current.x - 6}px, ${mouseRef.current.y - 6}px)`;
		}
		if (ringRef.current) {
		ringRef.current.style.transform = `translate(${ring.x - 18}px, ${ring.y - 18}px)`;
		}
		animationFrameRef.current = requestAnimationFrame(animateCursor);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
		mouseRef.current = { x: e.clientX, y: e.clientY };
		};
		const handleScroll = () => setScrolled(window.scrollY > 60);

		document.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('scroll', handleScroll);
		animationFrameRef.current = requestAnimationFrame(animateCursor);

		return () => {
		document.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('scroll', handleScroll);
		if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
		};
	}, [animateCursor]);

	useEffect(() => {
		const reveals = document.querySelectorAll('.pitik-reveal');
		const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				setTimeout(() => entry.target.classList.add('pitik-visible'), i * 80);
				observer.unobserve(entry.target);
			}
			});
		},
		{ threshold: 0.12 }
		);

		reveals.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const closeMobileMenu = () => setMobileMenuOpen(false);

	const founders = [
		{ name: 'Jeremy Lobos', role: 'CEO | Lead Dev', github: 'kyutaneov2-software', photo: jeremyImg },
		{ name: 'Glenn Ballon', role: 'UI/UX Designer', github: 'glennballon123-cell', photo: glennImg },
		{ name: 'Mharjon Merencillo', role: 'Frontend Developer', github: '', photo: mharjonImg },
		{ name: 'Vince Rontos', role: 'Tester', github: '', photo: vinceImg },
		{ name: 'Eran Cahutay', role: 'Project Manager', github: '', photo: eranImg },
	];

	const pitikFeatures = [
		{ Icon: IconReact, title: 'React Components', desc: 'Built with reusable, composable React components for a clean and maintainable codebase.' },
		{ Icon: IconVite, title: 'Vite-Powered', desc: 'Lightning-fast HMR and build times with Vite, making development smooth and efficient.' },
		{ Icon: IconCSS, title: 'Custom Styling', desc: 'CSS-first styling approach with 39.5% of the codebase dedicated to visual design and layout.' },
		{ Icon: IconGitBranch, title: 'Git Collaboration', desc: 'Proper version control with pull/push workflows, allowing the team to work together seamlessly.' },
		{ Icon: IconESLint, title: 'ESLint Configured', desc: 'Code quality enforced with ESLint rules to keep the codebase clean and consistent.' },
		{ Icon: IconOpenSource, title: 'Open Source', desc: 'Fully public repository — anyone can fork, learn from, and build upon the PitikShess codebase.' },
	];

	const activityTimeline = [
		{ date: 'April 21, 2026', event: 'Project Initialization', desc: 'Initial commit with Vite + React setup' },
		{ date: 'April 22-30, 2026', event: 'Core Development', desc: 'Component architecture and routing implementation' },
		{ date: 'May 1-3, 2026', event: 'Styling Phase', desc: 'CSS modules and responsive design implementation' },
		{ date: 'May 4, 2026', event: 'Polish & Deploy', desc: 'PhotoCard CSS fixes and README documentation' },
	];

	return (
		<div className="pitik-root">
		{/* Cursor */}
		<div className="pitik-cursor" ref={cursorRef} />
		<div className="pitik-cursor-ring" ref={ringRef} />

		{/* Navigation */}
		<nav className={`pitik-nav ${scrolled ? 'pitik-nav-scrolled' : ''}`}>
			<div className="pitik-nav-brand">PitikShess</div>

			{/* Desktop menu (hidden on mobile) */}
			<ul className="pitik-nav-menu">
			<li><a href="#pitik-about">About</a></li>
			<li><a href="#pitik-features">Features</a></li>
			<li><a href="#pitik-timeline">Timeline</a></li>
			<li><a href="#pitik-crew">Team</a></li>
			<li>
				<a
				href="https://github.com/kyutaneov2-software/React-Act-by-PitikShess"
				target="_blank"
				rel="noopener noreferrer"
				className="pitik-nav-action"
				>
				GitHub →
				</a>
			</li>
			</ul>

			{/* Mobile hamburger button */}
			<button
			className={`pitik-nav-hamburger ${mobileMenuOpen ? 'active' : ''}`}
			onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
			aria-label="Toggle menu"
			>
			<span className="pitik-nav-hamburger-line" />
			<span className="pitik-nav-hamburger-line" />
			<span className="pitik-nav-hamburger-line" />
			</button>

			{/* Mobile menu overlay */}
			<div className={`pitik-nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
			<ul className="pitik-nav-mobile-list">
				<li><a href="#pitik-about" onClick={closeMobileMenu}>About</a></li>
				<li><a href="#pitik-features" onClick={closeMobileMenu}>Features</a></li>
				<li><a href="#pitik-timeline" onClick={closeMobileMenu}>Timeline</a></li>
				<li><a href="#pitik-crew" onClick={closeMobileMenu}>Team</a></li>
				<li>
				<a
					href="https://github.com/kyutaneov2-software/React-Act-by-PitikShess"
					target="_blank"
					rel="noopener noreferrer"
					className="pitik-nav-action"
					onClick={closeMobileMenu}
				>
					GitHub →
				</a>
				</li>
			</ul>
			</div>
		</nav>

		{/* Showcase (Hero) */}
		<section className="pitik-showcase">
			<div className="pitik-glow pitik-glow-primary" />
			<div className="pitik-glow pitik-glow-secondary" />

			<div className="pitik-showcase-content">
			<div className="pitik-badge">
				<span className="pitik-badge-dot" />
				School Project · React + Vite
			</div>

			<h1 className="pitik-maintitle">
				Pitik<em>Shess</em>
				<span>Multi-Site Project</span>
			</h1>

			<p className="pitik-tagline">
				A collaborative web activity crafted by the PitikShess group —
				built for learning, designed to impress. Five founders, one vision.
			</p>

			<div className="pitik-showcase-actions">
				<a
				className="pitik-btn pitik-btn-fill"
				href="https://github.com/kyutaneov2-software/React-Act-by-PitikShess"
				target="_blank"
				rel="noopener noreferrer"
				>
				View on GitHub
				<IconGitHub />
				</a>
				<a className="pitik-btn pitik-btn-outline" href="#pitik-about">Learn More</a>
			</div>
			</div>

			<div className="pitik-scroll-hint">
			<div className="pitik-scroll-line" />
			Scroll
			</div>
		</section>

		{/* About */}
		<section id="pitik-about">
			<div className="pitik-about-grid">
			<div className="pitik-reveal">
				<p className="pitik-section-eyebrow">About the Project</p>
				<h2 className="pitik-section-heading">Built to Learn.<br />Made to Last.</h2>
				<p className="pitik-section-text">
				React-Act-by-PitikShess is a school activity project developed by the PitikShess group
				using React and Vite. It explores modern web development practices —
				component architecture, state management, and collaborative coding workflows
				through real hands-on experience.
				</p>
				<p className="pitik-section-text" style={{ marginTop: '1rem' }}>
				The project is open-source and managed with Git, reflecting industry-standard
				version control practices that the team learned together.
				</p>
			</div>

			<div className="pitik-stats-grid pitik-reveal">
				<div className="pitik-stat-card">
				<div className="pitik-stat-number">5</div>
				<div className="pitik-stat-label">Founders</div>
				</div>
				<div className="pitik-stat-card">
				<div className="pitik-stat-number">14</div>
				<div className="pitik-stat-label">Commits</div>
				</div>
				<div className="pitik-stat-card">
				<div className="pitik-stat-number">React</div>
				<div className="pitik-stat-label">Framework</div>
				</div>
				<div className="pitik-stat-card">
				<div className="pitik-stat-number">Vite</div>
				<div className="pitik-stat-label">Build Tool</div>
				</div>
			</div>
			</div>
		</section>

		{/* Features */}
		<section className="pitik-features-section" id="pitik-features">
			<div className="pitik-features-container">
			<div className="pitik-features-header">
				<div className="pitik-reveal">
				<p className="pitik-section-eyebrow">What We Built</p>
				<h2 className="pitik-section-heading">Tech Stack &amp;<br />Highlights</h2>
				</div>
				<p className="pitik-section-text pitik-reveal" style={{ maxWidth: '320px' }}>
				A modern, fast, and collaborative setup that reflects current industry standards.
				</p>
			</div>

			<div className="pitik-features-grid">
				{pitikFeatures.map((feat, idx) => (
				<div className="pitik-feature-card pitik-reveal" key={idx}>
					<div className="pitik-feature-icon">
					<feat.Icon />
					</div>
					<h3 className="pitik-feature-title">{feat.title}</h3>
					<p className="pitik-feature-desc">{feat.desc}</p>
				</div>
				))}
			</div>
			</div>
		</section>

		{/* Timeline */}
		<section id="pitik-timeline">
			<div className="pitik-timeline-section">
			<div className="pitik-reveal">
				<p className="pitik-section-eyebrow">Our Journey</p>
				<h2 className="pitik-section-heading">Activity Timeline</h2>
				<p className="pitik-section-text">
				From first commit to final polish — our development journey in 14 commits.
				</p>
			</div>

			<div className="pitik-timeline-track">
				{activityTimeline.map((item, idx) => (
				<div className="pitik-timeline-node pitik-reveal" key={idx}>
					<div className="pitik-timeline-marker" />
					<div className="pitik-timeline-content">
					<span className="pitik-timeline-date">{item.date}</span>
					<h3 className="pitik-timeline-event">{item.event}</h3>
					<p className="pitik-timeline-desc">{item.desc}</p>
					</div>
				</div>
				))}
			</div>
			</div>
		</section>

		{/* Team / Founders */}
		<section id="pitik-crew">
			<div className="pitik-crew-section">
			<div className="pitik-reveal">
				<p className="pitik-section-eyebrow">The People</p>
				<h2 className="pitik-section-heading">Meet PitikShess Founders</h2>
				<p className="pitik-section-text">
				A team of five student developers, building real projects and learning together.
				</p>
			</div>

			<div className="pitik-crew-grid pitik-reveal">
				{founders.map((founder, idx) => (
				<div className="pitik-crew-card" key={idx}>
					<div className="pitik-crew-avatar">
					{founder.photo ? (
						<img src={founder.photo} alt={founder.name} className="pitik-crew-photo" />
					) : (
						<span className="pitik-crew-initial">{founder.name.charAt(0)}</span>
					)}
					</div>
					<div className="pitik-crew-info">
					<div className="pitik-crew-name">{founder.name}</div>
					<div className="pitik-crew-role">{founder.role}</div>
					{founder.github && (
						<a
						href={`https://github.com/${founder.github}`}
						target="_blank"
						rel="noopener noreferrer"
						className="pitik-crew-github"
						>
						@{founder.github}
						</a>
					)}
					</div>
				</div>
				))}
			</div>
			</div>
		</section>

		{/* CTA */}
		<section className="pitik-cta-section">
			<h2 className="pitik-cta-heading pitik-reveal">
			Ready to<br /><span>Explore</span> the Code?
			</h2>
			<div className="pitik-cta-actions pitik-reveal">
			<a
				className="pitik-btn pitik-btn-fill"
				href="https://github.com/kyutaneov2-software/React-Act-by-PitikShess"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub Repository →
			</a>
			<a
				className="pitik-btn pitik-btn-outline"
				href="https://github.com/kyutaneov2-software/React-Act-by-PitikShess/fork"
				target="_blank"
				rel="noopener noreferrer"
			>
				Fork Project
			</a>
			</div>
		</section>

		{/* Footer */}
		<footer className="pitik-footer">
			<div className="pitik-footer-brand">PitikShess</div>
			<p className="pitik-footer-text">© 2026 PitikShess Group · School Project · Educational Purpose Only</p>
			<ul className="pitik-footer-links">
			<li>
				<a href="https://github.com/kyutaneov2-software/React-Act-by-PitikShess" target="_blank" rel="noopener noreferrer">
				GitHub
				</a>
			</li>
			<li>
				<a href="https://github.com/kyutaneov2-software" target="_blank" rel="noopener noreferrer">
				Organization
				</a>
			</li>
			</ul>
		</footer>
		</div>
	);
	};

	export default PitikShessLanding;