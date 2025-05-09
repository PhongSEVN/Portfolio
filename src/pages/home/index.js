import "./style.css";

function Home() {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src="avatar.jpg" alt="Nguyễn Văn Phong" />
      </div>
      <div className="hero-content">
        <h1>
          <span>My name is</span>
          <br />
          Nguyễn Văn Phong
        </h1>
        <p>Software Engineer</p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore my products</button>
          <button className="btn-secondary">My technologies</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
