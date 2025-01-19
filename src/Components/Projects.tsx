// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";

import "../Styling/Projects.css";

function Projects() {
  return (
    <>
      <div className="projectContainer">
        <div className="title">Projects</div>
        <div className="projectGrid">
          <div className="card">
            <img src="/assets/LaLigaLogo.png"></img>
            <div className="card-content">
              <h2>LaLiga Insights</h2>
              <p className="description">
                A web application tracking player statistics in LaLiga for the
                2023-2024 season, using Streamlit for the frontend and Pandas &
                NumPy for data parsing.
              </p>
              <p className="skills">
                <b>Skills Used: {""}</b>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/assets/lung.png"></img>
            <div className="card-content">
              <h2>Lung Cancer Classifier</h2>
              <p>
                A Web Application using YOLOv8 to detect the proportion of lung
                cancer present in chest x-ray images. Utilizes PyTorch &
                TensorFlow for model development.
              </p>
              <p className="skills">
                <b>Skills Used: {""}</b>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/assets/EggsByTheDozen.jpeg"></img>
            <div className="card-content">
              <h2>Eggs By The Dozen</h2>
              <p>
                Led a team of 5 in developing a a web application to count
                parasite eggs in McMaster Slide samples for a client. Enabled
                real-time image processing and model interaction through Flask,
                serving dynamic responses.
              </p>
              <p className="skills">
                <b>Skills Used: {""}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
