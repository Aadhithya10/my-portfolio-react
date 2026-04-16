import React from 'react';
import { motion } from 'framer-motion';

function Research() {
    return (
        <section className="section" id="research">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Academic</p>
                    <h2 className="section-title">Research</h2>
                    <motion.div
                        className="card research-card"
                        whileHover={{ y: -8, borderColor: 'var(--secondary)', boxShadow: '0 12px 40px rgba(34, 211, 238, 0.15)' }}
                    >
                        <p className="research-venue">
                            Invente'25 — SSN College of Engineering, Chennai · Sep 2025
                        </p>
                        <h3 className="research-title">
                            A Multimodal AI Framework for Early Diagnosis of Fibromyalgia using
                            WPI and SSI Scales
                        </h3>
                        <p className="research-abstract">
                            Presented research at a National Level Tech Symposium jointly
                            organized by Shiv Nadar University &amp; SSN College of Engineering.
                            The work proposes a multimodal AI approach combining clinical scale
                            data for early and accurate diagnosis of fibromyalgia.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Research;
