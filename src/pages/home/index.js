import "./style.css";
import Avatar from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const viewProduct = () => {
    navigate("/projects");
  }

  const viewTech = () => {
    navigate("/about#tech-stack");
  }

  return (
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
        <p>AI Engineer for Computer Vision</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={viewProduct}>Explore my products</button>
          <button className="btn-secondary" onClick={viewTech}>My technologies</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
