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
                            Hello, I'm <strong>Aadhithya Bharathi</strong> — a Computer Science undergraduate
                            with a passion for building web experiences and telling stories through code and creativity.
                        </motion.p>
                        <motion.p variants={childVariants} className="about-body">
                            I specialize in full-stack web development, with a strong interest in designing intuitive,
                            scalable, and responsive web applications. I enjoy working across both frontend and backend
                            stacks — turning ideas into interactive digital products that serve real-world users.
                        </motion.p>
                        <motion.p variants={childVariants} className="about-body">
                            Beyond programming, I'm also a visual storyteller. My interest in photography has led me
                            to publish work in <strong>Ananda Vikatan</strong>, where I've captured moments that blend
                            culture, emotion, and narrative. This creative background complements my approach to
                            development — where user experience, design, and functionality go hand in hand.
                        </motion.p>
                        <motion.p variants={childVariants} className="about-body">
                            I believe in continuous learning, collaborative growth, and using technology as a tool
                            for positive impact.
                        </motion.p>

                        <div className="about-details" style={{ marginTop: '32px' }}>
                            {[
                                { label: 'Education', value: 'CS Undergrad, Amrita Vishwa Vidyapeetham' },
                                { label: 'Interests', value: 'Blending tech & creativity; building user-friendly digital experiences' },
                                { label: 'Skills', value: 'Problem solving, fast learner, effective communication' }
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
