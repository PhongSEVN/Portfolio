import { CodeOutlined, RocketOutlined, HeartOutlined, TrophyOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './about.css';
import avatar from "../../assets/avatar.jpg";

export function AboutPage() {
    const skills = [
        { name: 'Python', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Deep Learning', level: 80 },
        { name: 'Web Development', level: 85 }
    ];

    const interests = [
        {
            icon: <CodeOutlined />,
            title: 'Clean Code',
            description: 'Passionate about writing maintainable and efficient code'
        },
        {
            icon: <RocketOutlined />,
            title: 'Innovation',
            description: 'Always exploring new technologies and frameworks'
        },
        {
            icon: <HeartOutlined />,
            title: 'Problem Solving',
            description: 'Love tackling complex challenges with creative solutions'
        },
        {
            icon: <TrophyOutlined />,
            title: 'Continuous Learning',
            description: 'Committed to growth and mastering new skills'
        }
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
                    <p className="subtitle">Software Developer & AI Enthusiast</p>
                </div>

                {/* About Content */}
                <div className="about-content">
                    <section className="about-section">
                        <h2>About Me</h2>
                        <p>
                            I'm a passionate software developer with a strong focus on artificial intelligence
                            and machine learning. Currently studying at Thuy Loi University, I love building
                            innovative solutions that make a real impact.
                        </p>
                        <p>
                            My journey in tech started with curiosity about how things work, and has evolved
                            into a dedication to creating intelligent systems that solve real-world problems.
                            From predicting Bitcoin prices to classifying medical images, I enjoy working on
                            projects that push the boundaries of what's possible.
                        </p>
                    </section>

                    {/* Skills Section */}
                    <section className="about-section skills-section">
                        <h2>Skills & Technologies</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Interests Section */}
                    <section className="about-section interests-section">
                        <h2>What Drives Me</h2>
                        <div className="interests-grid">
                            {interests.map((interest, index) => (
                                <div key={index} className="interest-card">
                                    <div className="interest-icon">{interest.icon}</div>
                                    <h3>{interest.title}</h3>
                                    <p>{interest.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Fun Facts */}
                    <section className="about-section fun-facts">
                        <h2>Fun Facts</h2>
                        <div className="facts-grid">
                            <div className="fact-item">
                                <span className="fact-number">5+</span>
                                <span className="fact-label">Projects Completed</span>
                            </div>
                            <div className="fact-item">
                                <span className="fact-number">∞</span>
                                <span className="fact-label">Cups of Coffee</span>
                            </div>
                            <div className="fact-item">
                                <span className="fact-number">24/7</span>
                                <span className="fact-label">Learning Mode</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
