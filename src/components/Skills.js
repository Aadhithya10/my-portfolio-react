import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        title: 'Languages',
        items: ['Python', 'C#', 'JavaScript', 'Java', 'Go', 'C', 'SQL'],
    },
    {
        title: 'Backend & APIs',
        items: ['.NET (ASP.NET Core)', 'REST APIs', 'FastAPI', 'Flask', 'WebSockets', 'Microservices', 'JWT', '2FA'],
    },
    {
        title: 'Messaging & Observability',
        items: ['MQTT', 'AMQP', 'OpenTelemetry', 'Grafana', 'Prometheus'],
    },
    {
        title: 'Cloud & DevOps',
        items: ['Kubernetes (k3s/k3d)', 'Docker', 'Helm', 'Azure DevOps', 'Azure Pipelines', 'Git', 'Redis'],
    },
    {
        title: 'Testing & QA',
        items: ['pytest', 'Playwright', 'Allure', 'Integration Testing', 'Test Automation'],
    },
    {
        title: 'AI / ML',
        items: ['Scikit-learn', 'Pandas', 'NumPy', 'Prophet', 'LSTM', 'CNN', 'YOLO', 'LLM APIs', 'Agentic Workflows'],
    },
    {
        title: 'Web & Mobile',
        items: ['React', 'React Native (Expo)', 'Node.js', 'Express.js', 'HTML5', 'CSS3'],
    },
    {
        title: 'Databases & Viz',
        items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Tableau', 'Matplotlib', 'Seaborn'],
    },
    {
        title: 'Professional',
        items: ['System Design', 'Agile / Scrum', 'Team Leadership', 'Technical Writing'],
    },
];

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50 }
        }
    };

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section className="section" id="skills">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Toolkit</p>
                    <h2 className="section-title">Skills</h2>

                    <motion.div className="skills-grid" variants={containerVariants}>
                        {categories.map((cat, i) => (
                            <motion.div
                                className="card"
                                key={i}
                                variants={cardVariants}
                                whileHover={{ y: -5, borderColor: 'var(--primary)', boxShadow: '0 8px 30px rgba(139, 92, 246, 0.1)' }}
                            >
                                <p className="skill-category-title">{cat.title}</p>
                                <motion.div
                                    className="skill-tags"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
                                >
                                    {cat.items.map((item, j) => (
                                        <motion.span
                                            className="skill-tag"
                                            key={j}
                                            variants={tagVariants}
                                            style={{ opacity: 1, transform: 'none' }}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -3,
                                                backgroundColor: 'var(--primary-soft)',
                                                borderColor: 'var(--primary)',
                                                color: 'var(--text)'
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
