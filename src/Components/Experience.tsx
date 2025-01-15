import "../Styling/Experience.css";

function Experience() {
  return (
    <>
      <div className="experienceContainer">
        <div className="title">Experience</div>
        {/* we want to have a card-like system - each experience fits on cards - to do that we might want a card group inside our container. */}
        <div className="cards">
          <div className="card">
            <img src="/assets/dsLogo.png"></img>
            <div className="material">
              <h3>Undergraduate Research Assistant</h3>
              <ul className="expList">
                <li>
                  Develop a visual analytics platform utilizing React, Node.js
                  and AWS for scalable workloads.
                </li>
                <li>
                  Detect patterns in multi-modal datasets using pandas, NumPy,
                  and scikit-learn to enhance brain research.
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/assets/ML@UVALogo.png"></img>
            <div className="material">
              <h3>Software Developer</h3>
              <ul className="expList">
                <li>
                  Achieved a 10% reduction in page load time, as measured by
                  user feedback, through a react-based front-end.
                </li>
                <li>
                  Increased reliability by 15% through optimizing website
                  performance using AWS and Google Cloud.
                </li>
                <li>
                  Improved proficiency in TensorFlow and PyTorch through
                  collaborative projects and technical lectures.
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/assets/rotundaLogo.png"></img>
            <div className="material">
              <h3>Undergraduate Tutor</h3>
              <ul className="expList">
                <li>
                  Improving students’ understanding of core topics such as C,
                  C++, computer architecture, and x86 assembly.
                </li>
                <li>
                  Contributed to a 10% improvement in average exam scores
                  through homework assistance and test preparation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
