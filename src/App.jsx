import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <img src={logo} alt="logo" />
      </header>
      <nav className="app-nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="app-content">
        <img
          src="https://klike.net/uploads/posts/2019-11/1574605225_2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
