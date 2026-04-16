import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <a href="mailto:aadhithyabharathi10@gmail.com">Email</a>
                    <a
                        href="https://github.com/Aadhithya10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/aadhithya-bharathi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
                <p className="footer-text">
                    © {new Date().getFullYear()} Aadhithya Bharathi A. Built with React.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
