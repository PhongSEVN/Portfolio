import { useState } from 'react';
import { GithubOutlined, LinkOutlined, CodeOutlined } from '@ant-design/icons';
import './projects.css';

// JSON chứa thông tin projects - Dễ dàng thêm mới
const projectsData = [
    {
        id: 1,
        name: "Bitcoin Price Prediction",
        description: "Machine learning model to predict Bitcoin prices using historical data and technical indicators. Built with Python, TensorFlow, and data analysis libraries.",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
        github: "https://github.com/PhongSEVN/Bitcoin-Price-Prediction",
        tags: ["Python", "Machine Learning", "TensorFlow", "Data Science"]
    },
    {
        id: 2,
        name: "X-ray Pneumonia Classification",
        description: "Deep learning model for detecting pneumonia from chest X-ray images using CNN. Helps medical professionals with diagnosis accuracy.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        github: "https://github.com/PhongSEVN/Xray-Pneumonia-Classification",
        tags: ["Python", "Deep Learning", "CNN", "Medical AI"]
    },
    {
        id: 3,
        name: "Student Management System",
        description: "Comprehensive system for managing student records, grades, and academic information. Features include student profiles, course management, and reporting.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        github: "https://github.com/PhongSEVN/Student-Management",
        tags: ["Java", "Database", "Management System"]
    },
    {
        id: 4,
        name: "Computer Graphics Project",
        description: "Interactive 3D graphics application demonstrating various computer graphics techniques including rendering, lighting, and transformations.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        github: "https://github.com/PhongSEVN/Project-Computer-Graphics",
        tags: ["OpenGL", "C++", "3D Graphics", "Rendering"]
    },
    {
        id: 5,
        name: "TLU Schedule",
        description: "Schedule management application for Thuy Loi University students. View timetables, set reminders, and manage academic calendar efficiently.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        github: "https://github.com/PhongSEVN/TLU-Schedule",
        tags: ["Web App", "Schedule", "Student Tool"]
    }
];

function ProjectsPage() {
    const [filter, setFilter] = useState('all');

    // Lấy tất cả tags unique
    const allTags = ['all', ...new Set(projectsData.flatMap(project => project.tags))];

    // Filter projects theo tag
    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.tags.includes(filter));

    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="projects-header">
                    <h1>My Projects</h1>
                    <p>A collection of my work and side projects</p>
                </div>

                <div className="projects-filter">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            className={`filter-btn ${filter === tag ? 'active' : ''}`}
                            onClick={() => setFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                                <div className="project-overlay">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="overlay-btn"
                                    >
                                        <GithubOutlined /> View Code
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">
                                            <CodeOutlined /> {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                >
                                    <GithubOutlined /> View on GitHub
                                    <LinkOutlined />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>No projects found with this filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectsPage;
