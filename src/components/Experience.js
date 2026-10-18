import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'AI Developer Intern',
        company: 'ABB – Marine Team',
        date: 'Jul 2026 – Oct 2026',
        points: [
            'Added API versioning to backend services (Messaging Web API) in .NET, ensuring seamless client backwards compatibility with clear retirement errors and deprecation warnings.',
            'Debugged a race condition in edge-to-cloud messaging flow (MQTT/AMQP); eliminated incorrect resend logic and implemented automated retries (10 attempts, 10s backoff) with failure notifications.',
            'Integrated end-to-end distributed monitoring using OpenTelemetry and designed Grafana dashboards tracking request volume, latency, and error rates with trace ID correlation.',
            'Authored Python/pytest automated tests simulating Kubernetes pod outages for disaster recovery validation, and scaled Playwright UI test suites across environments.',
        ],
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Trusty Bytes',
        date: 'May 2025 – Jun 2025',
        points: [
            'Engineered 11 production-ready screens in React Native for Android & iOS for a demand-supply workflow application, delivering zero rollback post-deployment across both platforms.',
            'Architected a reusable component library that reduced UI duplication by an estimated 30%, cutting iteration time for the 5-person engineering team.',
            'Operated within an agile sprint cycle, shipping across two consecutive sprints with daily standups and PR-based code reviews.',
        ],
        certificate: '/certificate.pdf',
    },
    {
        role: 'Photojournalist',
        company: 'Ananda Vikatan',
        date: '2024 – 2025',
        points: [
            'Published documentary photo stories in one of India\'s most respected Tamil magazines.',
            'Refined eye for detail, cultural narrative synthesis, and visual storytelling.',
        ],
    },
    {
        role: 'Editor, ASCII Newsletter',
        company: 'Amrita Vishwa Vidyapeetham',
        date: '2024 – Present',
        points: [
            'Curate and edit technical content for a student audience, driving clarity and engagement on CS and AI topics.',
        ],
    },
];

const competitions = [
    {
        name: 'Top 6 Finalist — ABB Accelerator 2026',
        desc: 'Selected among Top 6 teams from 1,600+ teams, 14,000+ participants, and 300+ colleges nationwide. Presented EdgeMind, an AI-powered Kubernetes observability and predictive monitoring solution, at the ABB Innovation Centre, Bengaluru.',
    },
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
