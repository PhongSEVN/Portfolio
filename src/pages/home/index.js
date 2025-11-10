import "./style.css";
import Avatar from "../../assets/avatar.jpg";

function Home() {

    const viewProduct = () => {
        window.location.href = "/projects";
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
        <p>Software Engineer</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={viewProduct}>Explore my products</button>
          <button className="btn-secondary">My technologies</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
