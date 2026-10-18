import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'EdgeMind — Multi-Agent AI for Industrial Infrastructure Monitoring',
        tag: 'Multi-Agent AI · Kubernetes',
        points: [
            'Built for the ABB Hackathon (Top 6 Finalist out of 1,600+ teams nationwide). Developed a multi-agent AI system monitoring industrial Kubernetes workloads using Prometheus, detecting cascading failures, and performing root cause analysis with DMD predictive analytics.',
            'Designed and developed the mobile application in React Native, converting a six-page real-time dashboard into a mobile-first experience with live WebSocket updates, AI-generated root cause analysis, and predictive failure alerts.',
        ],
        tools: ['React Native', 'Kubernetes', 'Prometheus', 'LLMs', 'WebSocket', 'Python'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'Smart Cafeteria Management System',
        tag: 'Full Stack · Microservices',
        points: [
            'Designed and deployed a containerized microservices architecture for real-time cafeteria demand forecasting with JWT authentication and two-factor authentication (2FA).',
            'Trained a Random Forest model on 1,800+ records, achieving ~81.5% forecasting accuracy while maintaining uninterrupted service through a rule-based fallback engine.',
            'Implemented queue management, role-based dashboards, and analytics for food waste tracking and booking optimization.',
        ],
        tools: ['Go', 'Flask', 'React', 'Docker', 'JWT', 'PostgreSQL'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'FX Decision Recommendation System',
        tag: 'Analytics · FinTech',
        points: [
            'Developed an FX analytics platform processing over 2,500 data points per currency across 10 years to generate accurate 30-day exchange-rate forecasts.',
            'Implemented a Value-at-Risk (VaR) engine recommending hold, partial conversion, or full conversion strategies for corporate treasury risk management.',
            'Designed a React dashboard for real-time risk visualization and exposure management.',
        ],
        tools: ['Python', 'Prophet', 'Pandas', 'Flask', 'React', 'REST API'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'Pharmacy Inventory Optimization & Demand Forecasting',
        tag: 'Time-Series · IIT Madras Capstone',
        points: [
            'Applied ABC and XYZ inventory classification to develop a nine-cell procurement control matrix for a live pharmacy.',
            'Compared multiple forecasting models, with a two-month Simple Moving Average achieving a MAPE of 2.2% on the highest-selling product.',
            'Identified approximately ₹52,838 in expiry losses and ₹2,695 in stock-out losses, proposing an EOQ/JIT procurement strategy to optimize inventory costs.',
        ],
        tools: ['Python', 'Pandas', 'NumPy', 'Time-Series', 'Optimization'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'AI-Driven Multi-Hazard Disaster Monitoring',
        tag: 'IoT · Edge ML',
        points: [
            'Built an STM32-based system integrating gas, flame, and vibration sensors for real-time hazard detection.',
            'Implemented communication protocols (ADC, I2C, UART) with Bluetooth alerts using embedded C.',
            'Developed a Random Forest model and deployed inference via FastAPI with a React live dashboard.',
        ],
        tools: ['STM32', 'Embedded C', 'Python', 'FastAPI', 'React'],
        link: 'https://github.com/Aadhithya10',
    },
    {
        name: 'Tamil Sentence Compiler',
        tag: 'Compiler Design',
        points: [
            'Built a compiler front-end for Tamil sentences implementing lexical, syntax, and semantic analysis using ANTLR4.',
            'Developed both a Java-based compiler pipeline and a browser-based JavaScript implementation with real-time grammar validation.',
        ],
        tools: ['Java', 'ANTLR4', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/Aadhithya10',
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
