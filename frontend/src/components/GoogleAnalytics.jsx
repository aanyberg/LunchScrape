import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const GoogleAnalytics = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes('localhost')) {
            ReactGA.initialize('G-DPL7R4VGSH');
            setInitialized(true);
            console.log("GA Initialized");
        }
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [initialized]);
};

export default GoogleAnalytics;
