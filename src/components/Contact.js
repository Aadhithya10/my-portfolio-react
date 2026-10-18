import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    const contacts = [
        { icon: '✉', label: 'Email', value: 'aadhithyabharathi10@gmail.com', href: 'mailto:aadhithyabharathi10@gmail.com' },
        { icon: 'in', label: 'LinkedIn', value: 'View My Profile', href: 'https://www.linkedin.com/in/aadhithya-bharathi-86a9aa290/', external: true },
        { icon: '⌘', label: 'GitHub', value: 'Aadhithya10', href: 'https://github.com/Aadhithya10', external: true },
        { icon: '⟨/⟩', label: 'HackerRank', value: 'View My Profile', href: 'https://www.hackerrank.com/profile/aadhithyabharat1', external: true },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80 }
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Get in Touch</p>
                        <h2 className="section-title">Contact Me</h2>
                        <p className="contact-intro">
                            If you have any questions or would like to get in touch, feel free to reach out via
                            email or connect with me on any of these platforms.
                        </p>
                    </motion.div>

                    <motion.div className="contact-grid" variants={containerVariants}>
                        {contacts.map((c, i) => (
                            <motion.a
                                key={i}
                                href={c.href}
                                target={c.external ? '_blank' : undefined}
                                rel={c.external ? 'noopener noreferrer' : undefined}
                                className="contact-card card"
                                variants={cardVariants}
                                style={{ opacity: 1, transform: 'none' }}
                                whileHover={{
                                    borderColor: 'var(--primary)',
                                    boxShadow: '0 15px 35px rgba(139, 92, 246, 0.1)'
                                }}
                            >
                                <span className="contact-icon" style={{ color: 'var(--primary)' }}>
                                    {c.icon}
                                </span>
                                <span className="contact-label">{c.label}</span>
                                <span className="contact-value">{c.value}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="contact-resume"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href={`${process.env.PUBLIC_URL}/Dithu_Tech.pdf`}
                            download="Dithu_Tech.pdf"
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📄 Download Resume
                        </motion.a>
                    </motion.div>

                    <motion.blockquote
                        className="about-quote"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        "The only way to do great work is to love what you do." — Steve Jobs
                    </motion.blockquote>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
