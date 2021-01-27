import React from "react";
import "./home.css";
import image from "../assets/Images/me.png";

function home() {
  return (
    <main className="container-body myHome">
      <div id="div-1" className="row card-body">
        <div id="myImage" className="box-s col-md-4 aaa">
          <img src={image} className="card-img" alt="Berhane Beyene" />
          <div className="svgDiv">
            <a
              id="nav-home-tab"
              href="https://github.com/Bbeyenene"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5_logos</title>
                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
              </svg>
              <p className="mytest">Github</p>
            </a>
            <a
              id="nav-home-tab"
              href="https://www.linkedin.com/in/berhane-beyene"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <svg
                className="svgLn"
                height="512pt"
                viewBox="0 0 512 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
              </svg>
              <p className="mytest">linkdIn</p>
            </a>
            <a
              id="nav-home-tab"
              href="https://docs.google.com/document/d/14bYQkEM5-Hq9fU5zvvfSjjPuGyHt57DgNbgdSSjJurE/edit?usp=sharing"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <svg
                className="file"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-file-text"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <p className="mytest">Resume</p>
            </a>
          </div>
        </div>
        <div className="persona col-md-8 card-body">
          <h5 className="card-title">About Me</h5>
          <p className="content card-text">
            Hi My name is Berhane Beyene. I am a Full Stack Developer from North
            Western University Coding Bootcamp. I am comfortable with both front
            and back end programming. I can develop and design front end web
            architecture, ensuring the responsiveness of an applications. I have
            built substantial knowledge in identifying programing errors and
            troubleshooting them accordingly. I have a solid knowledge on
            HTML/CSS, Bootstrap, Git, JavaScript, jQuery, APIs, AJAX, Node
            Express servers, MySQL, Handlebars, Sequelize, Testing, Error
            Handling, Heroku, MongoDB, Progressive Web Apps (PWAs), React,
            Computer Science and Portfolios.
          </p>
        </div>
        <div className="persona col-md-11">
          <p className="content">
            I have a bachelor’s degree in Biology, and minor in Chemistry. I
            worked as a Biology and Chemistry teacher in Senior Secondary
            School, and as a Pedagogical Director of Biology Department for five
            years. I also worked as a salesperson in a gas station, and as a
            taxi and Uber driver. I served as a leader in the Eritrean Eri-Yiakl
            civic organization in Chicago, IL. I have a good communication,
            teamwork, problem solving and leadership skills. I believe in
            continuous education and I strive climbing the ladder of learning
            every day. As everyone ahead of me has done, I want to leave a
            legacy of creativity and build a foundation to satisfy societal
            need. I bunk on my past experience and current education to attain
            my short- and long-term visions of unlocking unbounded potentials.
            If you want to know more about me, you can contact me
            <a href="/contact">here</a>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default home;
