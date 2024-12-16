import "./App.css";
import ReactLogo from "./assets/react-logo.png";

function App() {
  return (
    <>
      <article>
        <div className="logo-container">
          <img src={ReactLogo} alt="" />
        </div>
        <main>
          <h1 className="title">Some facts about React</h1>
          <ul className="list">
            <li>
              <a href="https://en.wikipedia.org/wiki/React_(software)#:~:text=The%20initial%20public%20release%20of,used%20the%20Apache%20License%202.0.">
                Was first released in 2013
              </a>
            </li>
            <li>
              <a href="https://x.com/jordwalke">
                Was originally created by Jordan Walke
              </a>
            </li>
            <li>
              <a href="https://github.com/facebook/react">
                Has well over 100k stars on GitHub
              </a>
            </li>
            <li>
              <a href="https://about.meta.com/">Is maintained by Meta</a>
            </li>
            <li>
              <a href="https://brainhub.eu/library/famous-apps-using-reactjs">
                Powers thousands of enterprise apps, including mobile apps
              </a>
            </li>
          </ul>
        </main>
      </article>
    </>
  );
}

export default App;
