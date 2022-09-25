import React from "react";
import "./Getintouch.css";
export default function Getintouch() {
  return (
    <div className="component__space">
      <div className="quote">
        <p>
          "Let's go invent tomorrow instead of worring about what happened
          yesterday."
        </p>
      </div>
      <div className="git__cont component__space">
        <div className="git  " id="CONTACT">
          <div className="maingit">
            <div className="git__inner">
              <h1>Get in Touch</h1>

              <p>You can connect with me on Social Media</p>
              <div className="c_info">
                <i className="fas fa-map-marker-alt">
                  <span>MOHALI, PUNJAB, INDIA</span>
                </i>

                <i className="fas fa-phone">
                  <span>6284048066</span>
                </i>

                <i className="fas fa-envelope-open">
                  <span>abhisim0098@gmail.com</span>
                </i>
              </div>
              <div className="smedia">
                <a
                  href="https://in.linkedin.com/in/devanshu-sharma-7a0bba186"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/Devanshu171" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/___devanshu.171/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
