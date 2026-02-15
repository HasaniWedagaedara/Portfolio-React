import "../Experience/Experience.css";

const Education = () => {
  return (
    <div id="education" className="experience-container">
      <h1 className="subtitle">
        Education <span className="highlight">Details</span>
      </h1>
      <div>
        <div className="experience-content">
          <div className="header-container">
            <div className="header-container-left">
              <h2>BSc(Hons) Computer Engineering</h2>
              <h3>Faculty of Engineering</h3>
              <h3>University of Ruhuna</h3>
            </div>
            <div className="header-container-right">
              <p>2021 - 2026</p>
            </div>
          </div>
          <p></p>
        </div>
        <div className="experience-content">
          <div className="header-container">
            <div className="header-container-left">
              <h2>Secondary Education</h2>
              <h2>Girls' High School Kandy</h2>
            </div>
            <div className="header-container-right">
              <p>2016 - 2019</p>
            </div>
          </div>
          <p>Advanced Level - Physical Science Stream</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
