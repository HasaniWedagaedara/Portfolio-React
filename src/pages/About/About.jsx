
import './About.css'

const About = () => {
  return (
    <div id="about">
    <div className="row about-container">
      <h1 className="subtitle">About <span className="highlight">Me</span></h1>
      <div className="about-text">
        <h2>Hello! I'm <span className="name">Hasani Madhumali</span></h2>
        <p className="para">
          A <strong>Compute Engineering  Recent Graduate</strong> passionate about <strong>Full-Stack Development</strong>. Experienced with
          <strong>React</strong> with hands-on experience in backend development using
          <strong>Node.js, Express, and SQL-based databases</strong>. Always eager to learn new technologies and build
          meaningful, real-world solutions.
        </p>
        <p className="para">
          I’m currently working on <strong>Full-Stack Web Applications</strong> building scalable web apps
          with React and contributing to backend features and APIs.
        </p>
        <p className="para">
          I’m currently learning <strong>Backend Development & API Design</strong> and <strong>DevOps
            fundamentals</strong>
          (Docker, CI/CD).
        </p>
        <p className="para">
          I’m passionate about applying engineering principles to build reliable, secure, and scalable software solutions.
          <br></br>
        </p>
      </div>
    </div>
    </div>
  )
}

export default About
