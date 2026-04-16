import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    { src: '/p1.jpg', alt: 'Butterfly', caption: 'Nature Close-up: Capturing the delicate beauty of a butterfly at the park' },
    { src: '/p2.jpg', alt: 'Street Portrait', caption: 'Street Portrait: A joyful moment of a little girl' },
    { src: '/p3.jpg', alt: 'Cityscape', caption: 'Photography: Vibrant city nightscape' },
    { src: '/p4.jpg', alt: 'Family', caption: 'Street Photography: A dad and his daughter' },
];

function Photography() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -2 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { type: 'spring', stiffness: 60, damping: 12 }
        }
    };

    return (
        <section className="section" id="photography">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label" style={{ opacity: 1, transform: 'none' }}>Visual Stories</p>
                    <h2 className="section-title">Photography</h2>
                    <p className="photography-intro">
                        As a Student Journalist with <strong>Ananda Vikatan</strong>, one of India's most respected
                        Tamil magazines, I've published stories that blend culture, emotion, and visual storytelling.
                    </p>

                    <motion.div className="photo-grid" variants={containerVariants}>
                        {photos.map((photo, i) => (
                            <motion.div
                                className="photo-card"
                                key={i}
                                variants={photoVariants}
                                style={{ opacity: 1, transform: 'none' }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    borderColor: 'var(--primary)',
                                    boxShadow: '0 15px 40px rgba(139, 92, 246, 0.2)'
                                }}
                            >
                                <div className="photo-image-wrapper">
                                    <motion.img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="photo-image"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </div>
                                <p className="photo-caption">{photo.caption}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="photography-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href="https://www.vikatan.com/author/aadhithya-bharathi-a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Published Stories on Vikatan ↗
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Photography;
