import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import './about.css';
import avatar from "../../assets/avatar.jpg";

export function AboutPage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        }
    }, [location]);
    const techStack = [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'LaTeX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ];

    return (
        <div className="about-page">
            <div className="about-container">
                {/* Hero Section with Avatar */}
                <div className="about-hero">
                    <div className="avatar-wrapper">
                        <Avatar
                            size={180}
                            src={avatar}
                            alt="Phong Nguyen"
                            className="avatar-circle"
                        />
                    </div>
                    <h1>Hi, I'm Phong Nguyen</h1>
                    <p className="subtitle">AI Engineer</p>
                </div>

                {/* About Content */}
                <div className="about-content">
                    <section className="about-section">
                        <h2>About Me</h2>
                        <p>
                            I'm an AI Engineer specializing in Computer Vision, graduating from
                            Thuy Loi University in 2026. I build deep learning solutions for
                            real-world applications — from object detection systems to medical
                            image classification.
                        </p>
                        <p>
                            With a solid foundation in Python, PyTorch, and modern web technologies,
                            I enjoy bridging the gap between AI research and practical deployment.
                            Always looking for challenging problems where AI can make a difference.
                        </p>
                    </section>

                    {/* Education Section */}
                    <section className="about-section education-section">
                        <h2>Education</h2>
                        <div className="education-card">
                            <div className="edu-icon">🎓</div>
                            <div className="edu-content">
                                <h3>Thuy Loi University</h3>
                                <p className="edu-major">Information Technology — GPA: 3.32</p>
                                <p className="edu-period">2022 - 2026</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="about-section" id="tech-stack">
                        <h2>Tech Stack</h2>
                        <div className="tech-grid">
                            {techStack.map((tech, index) => (
                                <div key={index} className="tech-item" data-aos="fade-up" data-aos-delay={index * 50}>
                                    <img src={tech.icon} alt={tech.name} />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
