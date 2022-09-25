import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import Typewriter from "typewriter-effect";
import $ from "jquery";
import "./hamtoggle";
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});
{
}
function toogleham() {
  document.getElementById("ham").classList.toggle("activate");
  document.querySelector(".navigation-mob").classList.toggle("activate");
  document.querySelector(".header").classList.toggle("activate");
}
export default function Home() {
  return (
    <div id="HOME ">
      <div className="home__bg">
        <div className=" header  ">
          <div className="header_sec1 d__flex align__items__center  pxy__30">
            <div className="logo">
              <a href="#">My Profile</a>
            </div>
            {
              <div className="navigation">
                <ul className="navbar d__flex">
                  <li className=" nav__items mx__15 homee ">
                    <a href="#">HOME</a>
                  </li>
                  <li className="nav__items mx__15 aboutt ">
                    {" "}
                    <a href="#ABOUT">ABOUT</a>
                  </li>
                  <li className=" nav__items mx__15 projectss ">
                    {" "}
                    <a href="#PROJECTS">PROJECTS</a>
                  </li>
                  <li className=" nav__items mx__15 contactt ">
                    {" "}
                    <a href="#CONTACT">CONTACT</a>
                  </li>
                </ul>
              </div>
            }

            <div className="hamburgur" id="ham" onClick={toogleham}>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="navigation-mob">
            <ul className="">
              <li className=" nav__items mx__15 homee ">
                <a href="#">HOME</a>
              </li>
              <li className="nav__items mx__15 aboutt ">
                {" "}
                <a href="#ABOUT">ABOUT</a>
              </li>
              <li className=" nav__items mx__15 projectss ">
                {" "}
                <a href="#PROJECTS">PROJECTS</a>
              </li>
              <li className=" nav__items mx__15 contactt ">
                {" "}
                <a href="#CONTACT">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="home__content">
            <h2 className="home__text pz__10">I am Devanshu Sharma</h2>
            <div className="typewriter">
              <Typewriter
                options={{
                  delay: 100,
                  deleteSpeed: 60,
                  pauseFor: 1500,

                  strings: [
                    "Full Stack Developer",
                    "Student",
                    "Data Stractures And Algorithms",
                    "Reactjs",
                    "Nodejs",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
