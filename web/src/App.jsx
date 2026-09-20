import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ReturnPolicy from './pages/ReturnPolicy';

function App() {
    useEffect(() => {
        // Microsoft Clarity Tracking Script
        (function(c, l, a, r, i, t, y){
            c[a] = c[a] || function(){(c[a].q = c[a].q ||[]).push(arguments)};
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "yb2hm66o1z");
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* பிரைவசி பாலிசி பக்கத்திற்கான புதிய ரூட் */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
            </Routes>
        </Router>
    );
}

export default App;