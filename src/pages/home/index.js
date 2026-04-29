import "./style.css";
import Avatar from "../../assets/avatar.jpg";
import CVFile from "../../assets/NguyenVanPhong_CV.pdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isOpenCV, setIsOpenCV] = useState(false);

  const viewProduct = () => {
    navigate("/projects");
  }

  const viewTech = () => {
    navigate("/about#tech-stack");
  }

  const viewCV = () => {
    setIsOpenCV(true);
  }

  const closeCV = () => {
    setIsOpenCV(false);
  }

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CVFile;
    link.download = "NguyenVanPhong_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div className="hero">
      <div className="hero-image">
        <img src={Avatar} alt="Nguyễn Văn Phong" />
      </div>
      <div className="hero-content">
        <h1>
          <span>My name is</span>
          <br />
          Nguyễn Văn Phong
        </h1>
        <p>AI Engineer</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={viewProduct}>Explore my products</button>
          <button className="btn-secondary" onClick={viewTech}>My technologies</button>
          <button className="btn-third" onClick={viewCV}>View My CV</button>
        </div>
      </div>
    </div>

    {isOpenCV && (
      <div className="cv-modal-overlay" onClick={closeCV}>
        <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="cv-modal-header">
            <h2>Nguyễn Văn Phong - CV</h2>
            <div className="cv-modal-actions">
              <button className="cv-download-btn" onClick={downloadCV}>
                <span>⬇</span> Download
              </button>
              <button className="cv-close-btn" onClick={closeCV}>✕</button>
            </div>
          </div>
          <iframe 
            src={CVFile} 
            title="CV"
          ></iframe>
        </div>
      </div>
    )}
    </>
  );
}

export default Home;
