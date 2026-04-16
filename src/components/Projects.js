import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'Smart Cafeteria Management System',
        tag: 'Full Stack · ML',
        points: [
            'Built a microservices-based platform using Go (Gin), React.js, and Python (Flask), deployed with Docker.',
            'Developed a Random Forest model (81.5% accuracy) for demand forecasting using real-time data.',
            'Implemented queue management, secure authentication (JWT + 2FA), and role-based dashboards.',
            'Added analytics for food waste tracking and booking optimization.',
        ],
        tools: ['Go', 'React.js', 'Python', 'PostgreSQL', 'Docker'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'FX Decision Recommendation System',
        tag: 'Analytics · Forecasting',
        points: [
            'Built a full-stack FX decision system to analyze currency exposure and generate hedge/spot recommendations.',
            'Developed forecasting models using Facebook Prophet for short-term exchange rate prediction.',
            'Implemented risk analytics using volatility, Z-score anomaly detection, and Value-at-Risk (VaR).',
            'Designed a React dashboard for real-time risk visualization and decision support.',
        ],
        tools: ['Python', 'Flask', 'Pandas', 'NumPy', 'Prophet', 'React'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'AI-Driven Multi-Hazard Disaster Monitoring',
        tag: 'IoT · ML',
        points: [
            'Built an STM32-based system integrating gas, flame, and vibration sensors for real-time hazard detection.',
            'Implemented communication protocols (ADC, I2C, UART) with Bluetooth alerts using embedded C.',
            'Developed a Random Forest model and deployed inference via FastAPI.',
            'Created a React dashboard for live alerts and hazard visualization.',
        ],
        tools: ['STM32', 'Embedded C', 'Python', 'scikit-learn', 'FastAPI', 'React'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'Innovora — Collaboration Platform',
        tag: 'MERN',
        points: [
            'Developed a platform enabling students and mentors to collaborate, share projects, and publish research.',
        ],
        tools: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'Tamil Sentence Compiler',
        tag: 'Compiler Design',
        points: [
            'Built a compiler front-end for Tamil sentences implementing lexical, syntax, and semantic analysis using ANTLR4.',
            'Developed both a Java-based compiler pipeline and a browser-based JavaScript implementation with real-time validation.',
        ],
        tools: ['Java', 'ANTLR4', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'Cinema Audience Forecasting',
        tag: 'Kaggle · IIT Madras',
        points: [
            'Built a forecasting system to predict daily cinema audience using POS and booking data.',
            'Performed feature engineering and trained regression-based time-series models.',
        ],
        tools: ['Python', 'pandas', 'NumPy', 'scikit-learn'],
    },
];

function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 50, damping: 15 }
        }
    };

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Work</p>
                    <h2 className="section-title">Projects</h2>

                    <motion.div className="projects-grid" variants={containerVariants}>
                        {projects.map((p, i) => (
                            <motion.div
                                className="card project-card"
                                key={i}
                                variants={cardVariants}
                                style={{ opacity: 1, transform: 'none' }}
                                whileHover={{
                                    y: -8,
                                    borderColor: 'var(--primary)',
                                    boxShadow: '0 12px 40px rgba(139, 92, 246, 0.15)'
                                }}
                            >
                                <div className="project-header">
                                    <span className="project-name">
                                        {p.link ? (
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: 'inherit' }}
                                            >
                                                {p.name} ↗
                                            </a>
                                        ) : (
                                            p.name
                                        )}
                                    </span>
                                    <span className="project-tag">{p.tag}</span>
                                </div>
                                <ul className="project-description">
                                    {p.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
                                <div className="project-tools">
                                    {p.tools.map((t, j) => (
                                        <motion.span
                                            className="project-tool"
                                            key={j}
                                            whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-soft)', color: 'var(--text)' }}
                                        >
                                            {t}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
