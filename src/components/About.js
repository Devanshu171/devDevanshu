import React from "react";
import aboutImage from "../images/about.jpeg";
import SkillBar from "react-skillbars";
import "./About.css";
import $ from "jquery";

const skills = [
  { type: "C++", level: 90 },
  { type: "JavaScript", level: 80 },
  { type: "JAVA", level: 50 },
  { type: "React", level: 70 },
  { type: "Nodejs", level: 80 },
  { type: "MongoDb", level: 75 },
  { type: "SQL", level: 75 },
  { type: "HTML", level: 90 },
  { type: "CSS", level: 85 },
];
const color = {
  bar: "#0078ff",
  title: {
    text: "#111",
    background: "#0052b0",
    fontSize: "18px",
  },
};
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $(".up_to_top_btn").addClass("activebtn");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".up_to_top_btn").removeClass("activebtn");
    }
  });
});
function About() {
  return (
    <div className="about  component__space" id="ABOUT">
      <div className="container about_cont">
        <div className="col1">
          <div className="row1">
            <div className="image__">
              <img src={aboutImage} alt="" className="about__img" />
            </div>
            <div className="about__data">
              <p>
                <strong>Name:</strong> Devanshu Sharma
              </p>
              <p>
                <strong>Profile:</strong> Student, Full Stack Developer
              </p>
              <p>
                <strong>Email:</strong> idevanshu17@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 
              </p>
            </div>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="bars">
              <SkillBar
                skills={skills}
                animationDelay={300}
                animationDuration={2000}
                offset={`25px`}
                animationThreshold={0.8}
                height={25}
                colors={color}
              />
            </div>
          </div>
        </div>
        <div className="col2">
          <h2>About me</h2>
          <div className="me_cont">
            <p>
              I’m Devanshu Sharma; I'm a Student and Web Developer. I'm
              currently pursuing B.E in CS from Chitkara University Punjab.
            </p>
            <p>
              I have experience in HTML, CSS, JavaScript, Reactjs and
              open-source framework Nodejs. In addition to my development work,
              I also have interest in regularly solving Data Stracture And
              Algorithms Problems.
            </p>
            <p>
              I am looking for opportunities learning new things and getting
              involved with new projects.
            </p>
          </div>
        </div>
      </div>
      <div id="PROJECTS"></div>
      {/*UP TO TOP*/}
      <div className="up_to_top_btn">
        <a href="#">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
