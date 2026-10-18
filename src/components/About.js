import React from 'react';
import { motion } from 'framer-motion';

function About() {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="section" id="about">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Who I Am</p>
                    <h2 className="section-title">About Me</h2>

                    <div className="about-text">
                        <motion.p variants={childVariants} className="about-intro">
                            Hello, I'm <strong>Aadhithya Bharathi</strong> — a final-year Computer Science undergraduate
                            at Amrita Vishwa Vidyapeetham (CGPA 9.01/10) pursuing a parallel Diploma in Data Science from IIT Madras.
                        </motion.p>
                        <motion.p variants={childVariants} className="about-body">
                            I have hands-on experience building production-grade full-stack, machine learning, and distributed systems.
                            Proficient in end-to-end ML pipelines, Kubernetes-based observability, REST microservices, and GenAI tooling.
                            I have published applied AI research and delivered cross-platform mobile applications in live agile environments.
                        </motion.p>
                        <motion.p variants={childVariants} className="about-body">
                            Beyond engineering, I am a visual storyteller. As a photojournalist published in <strong>Ananda Vikatan</strong>,
                            I've captured stories blending culture and narrative. This creative background informs my engineering philosophy —
                            where robust architecture, intuitive user experience, and purposeful design intersect.
                        </motion.p>
                        <motion.p variants={childVariants} className="about-body">
                            Seeking roles in Software Engineering, AI/ML Engineering, or Data Analytics where I can contribute technical depth from day one.
                        </motion.p>

                        <div className="about-details" style={{ marginTop: '32px' }}>
                            {[
                                { label: 'Education', value: 'B.Tech CSE, Amrita Vishwa Vidyapeetham (CGPA 9.01) | IIT Madras Data Science' },
                                { label: 'Focus Areas', value: 'Distributed Systems, Kubernetes Observability, End-to-End ML, Microservices' },
                                { label: 'Key Strengths', value: 'System Design, Problem Solving, Agile Delivery, Collaborative Leadership' }
                            ].map((detail, index) => (
                                <motion.div
                                    className="about-detail"
                                    key={index}
                                    variants={childVariants}
                                    style={{ opacity: 1, transform: 'none' }}
                                >
                                    <span className="about-detail-label">{detail.label}</span>
                                    <span className="about-detail-value">{detail.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.blockquote
                        variants={childVariants}
                        className="about-quote"
                        whileHover={{ scale: 1.02, x: 10, borderColor: 'var(--secondary)' }}
                        style={{ display: 'inline-block' }}
                    >
                        "The best way to predict the future is to invent it." — Alan Kay
                    </motion.blockquote>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
