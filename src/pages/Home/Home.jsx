import './Home.css'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homecontent">
        <h2>Hello! It's Me</h2>
        <h1>
          <span className="text">Hasani Madhumali</span>
        </h1>
        <p>
          Fresh Graduate in Computer Engineering,
          <br />
          University of Ruhuna
        </p>

        <div className="icons">
          <a href="https://github.com/HasaniWedagaedara">
            <i className="bx bxl-github" title="GitHub"></i>
          </a>
          <a href="https://www.linkedin.com/in/hasanimadhumali">
            <i className="bx bxl-linkedin" title="linkedin"></i>
          </a>
          <a href="mailto:hasanimadhumali@gmail.com">
            <i className="bx bxl-gmail" title="gmail"></i>
          </a>
          <a href="https://wa.me/94778592125">
            <i className="bx bxl-whatsapp" title="whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={assets.me} alt="picture of me" />
      </div>
    </div>
  );
}

export default Home
