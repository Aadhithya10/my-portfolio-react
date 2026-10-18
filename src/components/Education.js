import React from 'react';
import { motion } from 'framer-motion';

const education = [
    {
        school: 'Amrita Vishwa Vidyapeetham',
        degree: 'B.Tech in Computer Science Engineering',
        date: '2023 – 2027',
        gpa: 'CGPA: 9.01 / 10',
    },
    {
        school: 'Indian Institute of Technology (IIT) Madras',
        degree: 'Diploma in Data Science',
        date: '2023 – 2026',
    },
    {
        school: 'Velammal Bodhi Campus',
        degree: 'Higher Secondary',
        date: '2021 – 2023',
    },
    {
        school: 'Edison G. Agoram Memorial School',
        degree: 'Secondary',
        date: '2020 – 2021',
    },
];

function Education() {
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
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="section" id="education">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Background</p>
                    <h2 className="section-title">Education</h2>

                    <motion.div className="card" variants={containerVariants}>
                        {education.map((e, i) => (
                            <motion.div
                                className="education-item"
                                key={i}
                                variants={itemVariants}
                                style={{ opacity: 1, transform: 'none' }}
                                whileHover={{ x: 8, backgroundColor: 'rgba(139, 92, 246, 0.02)', paddingLeft: '12px', borderRadius: '8px' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div>
                                    <p className="education-school">{e.school}</p>
                                    <p className="education-degree">{e.degree}</p>
                                </div>
                                <div className="education-meta">
                                    <p className="education-date">{e.date}</p>
                                    {e.gpa && <p className="education-gpa">{e.gpa}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Education;
