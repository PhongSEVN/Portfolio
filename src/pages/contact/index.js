import { useState } from 'react';
import { GithubOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons';
import { message } from 'antd';
import emailjs from '@emailjs/browser';
import './contact.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const contactInfo = [
        {
            icon: <GithubOutlined />,
            label: 'GitHub',
            value: 'PhongSEVN',
            link: 'https://github.com/PhongSEVN',
            color: '#333'
        },
        {
            icon: <MailOutlined />,
            label: 'Email',
            value: 'phonginformationtechnology@gmail.com',
            link: 'mailto:phonginformationtechnology@gmail.com',
            color: '#ea4335'
        },
        {
            icon: <PhoneOutlined />,
            label: 'Phone',
            value: '0393341664',
            link: 'tel:0393341664',
            color: '#34a853'
        },
        {
            icon: <LinkedinOutlined />,
            label: 'LinkedIn',
            value: 'Phong Nguyen',
            link: 'https://www.linkedin.com/in/phong-nguyen-b61b64312/',
            color: '#0077b5'
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            message.error('Please fill in all required fields!');
            return;
        }

        setLoading(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        // Thay thế bằng ID thật của bạn từ EmailJS Dashboard
        const SERVICE_ID = ''; 
        const TEMPLATE_ID = '';
        const PUBLIC_KEY = '';

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                message.success('Message sent successfully! I will get back to you soon.');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                message.error('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                    <p>Feel free to reach out for collaborations, questions, or just to say hi!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <h2>Contact Information</h2>
                        <div className="contact-cards">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-card"
                                    style={{ '--card-color': item.color }}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="card-icon">{item.icon}</div>
                                    <div className="card-content">
                                        <span className="card-label">{item.label}</span>
                                        <span className="card-value">{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <h2>Send Me a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    rows="6"
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                <SendOutlined spin={loading} />
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
