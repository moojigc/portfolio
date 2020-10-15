import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery, Link } from '@material-ui/core';

const Footer = ({ mounted = false, repos = [] }) => {
    const isMobile = useMediaQuery('(max-width: 960px)');
    const location = useLocation();
    const [isDocScrollable, setScrollable] = useState(false);
    const footerPosition = isDocScrollable ? 'static' : 'fixed';
    useEffect(() => {
        setScrollable(document.body.scrollHeight > window.innerHeight);
    }, [location.pathname, mounted, repos.length]);
    return (
        <footer
            style={{
                fontSize: isMobile ? '0.8rem' : 'inherit',
                width: '100%',
                padding: '0.5rem',
                color: 'whitesmoke',
                display: 'flex',
                justifyContent: 'space-between',
                background: 'var(--dark)',
                // position: footerPosition,
                bottom: 0,
                marginTop: '2rem'
            }}>
            <div>© 2020 M. Moojig Battsogt</div>
            <Link href="https://github.com/moojigc/portfolio">Built with React & TypeScript</Link>
        </footer>
    );
};

export default Footer;
