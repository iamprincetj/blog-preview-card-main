import "./App.css";

const App = () => {
  return (
    <main className='card'>
      <img
        className='img'
        src='/images/illustration-article.svg'
        alt='main image'
      />
      <button>Learning</button>
      <p className='date'>Published 21 Dec 2023</p>
      <h1 className='title'>HTML & CSS foundations</h1>

      <p className='main-text'>
        {" "}
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className='avatar-container'>
        <img
          className='avatar'
          src='/images/image-avatar.webp'
          alt='avatar image'
        />
        <span className='avatar-name'>Greg Hooper</span>
      </div>
    </main>
  );
};

export default App;
