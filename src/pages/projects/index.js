import { useState } from 'react';
import { GithubOutlined, LinkOutlined, CodeOutlined } from '@ant-design/icons';
import './projects.css';

// JSON chứa thông tin projects - Dễ dàng thêm mới
const projectsData = [
    {
        id: 1,
        name: "Human Detect",
        description: "Machine learning model to predict Bitcoin prices using historical data and technical indicators. Built with Python, TensorFlow, and data analysis libraries.",
        image: "https://visailabs.com/wp-content/uploads/elementor/thumbs/People-detection-with-bounding-box-rd8d5b1t1dvk9ppflqkmw819b7f5cihcaty06sf664.jpg",
        github: "https://github.com/PhongSEVN/Human-Detect",
        tags: ["Python", "YOLO"]
    },
    {
        id: 2,
        name: "X-ray Pneumonia Classification",
        description: "Deep learning model for detecting pneumonia from chest X-ray images using CNN. Helps medical professionals with diagnosis accuracy.",
        image: "https://www.e7health.com/files/blogs/chest-x-ray-29.jpg",
        github: "https://github.com/PhongSEVN/Xray-Pneumonia-Classification",
        tags: ["Python", "Deep Learning", "CNN"]
    },
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
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
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
