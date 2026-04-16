import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    {
        title: 'Deloitte Australia — Data Analytics Job Simulation',
        desc: 'Completed a Forage simulation focused on business insights and forensic technology. Built an interactive Tableau dashboard to visualize downtime by factory and device type. Used Excel to classify data and derive actionable insights.',
    },
];

const courses = [
    { name: 'Web Developer Bootcamp 2025', provider: 'Udemy' },
    { name: 'Learn Figma 2025: From Basics to Your First Design Project', provider: 'Udemy' },
    { name: '50 Days of DSA — Python Data Structures & Algorithms (LeetCode)', provider: 'Udemy' },
];

function Certifications() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 50 }
        }
    };

    return (
        <section className="section" id="certifications">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Credentials</p>
                    <h2 className="section-title">Certifications & Courses</h2>

                    <motion.div variants={containerVariants}>
                        {certifications.map((cert, i) => (
                            <motion.div
                                className="card cert-item"
                                key={i}
                                variants={itemVariants}
                                whileHover={{ x: 8, borderColor: 'var(--primary)' }}
                            >
                                <p className="cert-title">{cert.title}</p>
                                <p className="cert-desc">{cert.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.h3
                        className="subsection-title"
                        variants={itemVariants}
                    >
                        Courses
                    </motion.h3>
                    <motion.div className="courses-grid" variants={containerVariants}>
                        {courses.map((course, i) => (
                            <motion.div
                                className="card course-card"
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -4, borderColor: 'var(--secondary)' }}
                            >
                                <p className="course-name">{course.name}</p>
                                <p className="course-provider">{course.provider}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Certifications;
