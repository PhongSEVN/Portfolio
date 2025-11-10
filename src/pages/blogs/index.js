import { EditOutlined, RocketOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './blog.css';

function BlogsPage() {
    return (
        <div className="blog-page">
            <div className="blog-container">
                <div className="coming-soon-content">
                    <div className="icon-wrapper">
                        <EditOutlined className="main-icon" />
                    </div>

                    <h1>Blog Coming Soon</h1>
                    <p className="subtitle">
                        I'm currently working on creating awesome content for you.
                        Stay tuned for articles about tech, coding, and AI!
                    </p>

                    <div className="features-grid">
                        <div className="feature-item">
                            <RocketOutlined />
                            <h3>Tech Insights</h3>
                            <p>Deep dives into latest technologies and frameworks</p>
                        </div>
                        <div className="feature-item">
                            <EditOutlined />
                            <h3>Tutorials</h3>
                            <p>Step-by-step guides and coding tutorials</p>
                        </div>
                        <div className="feature-item">
                            <ClockCircleOutlined />
                            <h3>Project Updates</h3>
                            <p>Behind-the-scenes of my latest projects</p>
                        </div>
                    </div>

                    <div className="cta-section">
                        <p>Want to be notified when I publish new content?</p>
                        <a href="/contact" className="notify-btn">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsPage;
