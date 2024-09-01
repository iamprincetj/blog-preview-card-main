import "./App.css";

const App = () => {
  return (
    <div className='card'>
      <img className='img' src='/images/illustration-article.svg' alt='' />
      <button>Learning</button>
      <p style={{ fontSize: "12px", fontWeight: "500" }}>
        Published 21 Dec 2023
      </p>
      <h3 className='title'>HTML & CSS foundations</h3>

      <p style={{ color: "#aaa", fontSize: "14px" }}>
        {" "}
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div
        style={{
          display: "flex",
          height: "5rem",
          alignItems: "center",
        }}
      >
        <img
          src='/images/image-avatar.webp'
          alt=''
          style={{ width: "50px", height: "50px", marginRight: "1rem" }}
        />
        <span
          style={{ textAlign: "center", lineHeight: "5rem", fontWeight: "800" }}
        >
          Greg Hooper
        </span>
      </div>
    </div>
  );
};

export default App;
