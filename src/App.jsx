import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import mcoLandingPage from './Activities/mco/landingpage.jsx';
import pitikshess from './Activities/activity1/pitikshess.jsx';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/mco">MCO Landing</Link> |{' '}
        <Link to="/pitikshess">Pitikshess</Link>
      </nav>

      <Routes>
        <Route path="/mco" element={<mcoLandingPage />} />
        <Route path="/pitikshess" element={<pitikshess />} />
        <Route path="/" element={<h1>Welcome! Choose a site above.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;