import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Full Stack Developer Intern',
        company: 'Trusty Bytes',
        date: 'May 2025 – June 2025',
        points: [
            'Developed the front-end of a demand-supply mobile application using React Native.',
            'Built responsive and user-friendly interfaces optimized for both Android and iOS.',
            'Strengthened skills in mobile UI development, component-based architecture, and cross-platform design.',
        ],
        certificate: '/certificate.pdf',
    },
    {
        role: 'Photo Journalist',
        company: 'Ananda Vikatan',
        date: 'Aug 2024 – Aug 2025',
        points: [
            'Published photo stories in one of India\'s most respected Tamil magazines.',
            'Refined eye for detail and ability to communicate ideas through visual storytelling.',
        ],
    },
    {
        role: 'Editor, ASCII Newsletter',
        company: 'Amrita Vishwa Vidyapeetham',
        date: 'Jan 2024 – Present',
        points: [
            'Contributed to content curation and editing of the technical newsletter, improving readability and engagement among student readers.',
        ],
    },
];

const competitions = [
    {
        name: 'Smart India Hackathon (SIH)',
        desc: 'Participated in SIH, contributing innovative solutions as part of a team.',
    },
    {
        name: 'Amrita Value-Based Health Hackathon',
        desc: 'Advanced to the final round, working on impactful healthcare solutions.',
    },
];

function Experience() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="section" id="experience">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Career</p>
                    <h2 className="section-title">Experience</h2>

                    {experiences.map((exp, i) => (
                        <motion.div
                            className="card experience-item"
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -4, borderColor: 'var(--primary)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12)' }}
                        >
                            <p className="experience-role">
                                {exp.role} · <span className="experience-company">{exp.company}</span>
                            </p>
                            <p className="experience-date">{exp.date}</p>
                            <ul className="experience-desc">
                                {exp.points.map((p, j) => (
                                    <li key={j} style={{ opacity: 1, transform: 'none' }}>{p}</li>
                                ))}
                            </ul>
                            {exp.certificate && (
                                <motion.a
                                    href={exp.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="experience-cert-link"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    📄 View Certificate
                                </motion.a>
                            )}
                        </motion.div>
                    ))}

                    <h3 className="subsection-title">Competitions</h3>
                    <div className="competitions-grid">
                        {competitions.map((c, i) => (
                            <motion.div
                                className="card competition-card"
                                key={i}
                                variants={cardVariants}
                                whileHover={{ y: -4, borderColor: 'var(--secondary)' }}
                            >
                                <p className="competition-name">{c.name}</p>
                                <p className="competition-desc">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
