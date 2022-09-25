import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Project.css";
import onlineShop from "../images/onlineShop.png";
import movie from "../images/movie.png";
import portfiliotemp from "../images/portfiliotemp.png";
import snakegame from "../images/snakegame.png";
import textutils from "../images/textutils.png";
import blog from "../images/blog.png";
import gallery from "../images/gallery.png";
import ticktaktoe from "../images/ticktaktoe.png";
import todolist from "../images/todolist.png";
import ProjectItem from "./ProjectItem";
const projects = [
  {
    photo: onlineShop,
    title: "Online Shop",
    des: "An Online Shopping app. Techstack used HTML, css, js,MongoDb and NodeJs. With features like authentication, authorization, saving product in  cart without logging in with the help of sessions and cookies, Different dashboard for Admin etc.",
    liveLink: "#",
    githubLink: "https://github.com/Devanshu171/Online-Shop",
  },
  {
    photo: movie,
    title: "Movies",
    des: "A Reactjs App  through which you can read about your favourite Movies with just one Searc. Which uses Omdb API. ",
    liveLink: "https://adorable-sprinkles-658063.netlify.app/",
    githubLink: "https://github.com/Devanshu171/MoviesApp",
  },
  {
    photo: textutils,
    title: "TextUtiles",
    des: "Free  utility app which allows you to Convert any text to UpperCase or LowerCase, Remove Extra spaces, Copy Text, Show Preview and Shows  frequencies of words. Non-English language texts are supported.",
    liveLink: "#",
    githubLink: "https://github.com/Devanshu171/TextUtils",
  },
  {
    photo: snakegame,
    title: "Snake Game",
    des: "Old School Snake Game. Made with the help of CANVAS ,HTML, CSS, JavaScript",
    liveLink: "https://devanshu171.github.io/Snake-Game/",
    githubLink: "https://github.com/Devanshu171/Snake-Game",
  },
  {
    photo: portfiliotemp,
    title: "Portfolio Template",
    des: "Responsive Portfolio Template for Your new Portfolio. Made with pure HTML and CSS",
    liveLink: "https://devanshu171.github.io/Portfolio-Template/",
    githubLink: "https://github.com/Devanshu171/Portfolio-Template",
  },
  {
    photo: todolist,
    title: "Todo List",
    des: "Simple Todo List with bueatiful UI and provies features like Add task , Remove task and Move Taks Up and Down. Techstack used HTML, CSS and JavaScritp ",
    liveLink: "devanshu171.github.io/todolist/",
    githubLink: "https://github.com/Devanshu171/TodoList",
  },
  {
    photo: blog,
    title: "Blog",
    des: "Blog app which Provies features like ADD  ,DELETE and EDIT  post. Techstack used HTML, CSS, JavaScript, Nodejs ,ejs and MongoDb database",
    liveLink: "",
    githubLink: "https://github.com/Devanshu171/Blog",
  },
  {
    photo: ticktaktoe,
    title: "TickTakToe",
    des: "TickTakToe game with bueatiful UI. You can play with your friend. made with HTML, CSS, JavaScript",
    liveLink: "devanshu171.github.io/tictactoe/",
    githubLink: "https://github.com/Devanshu171/TicTacToe",
  },
  {
    photo: gallery,
    title: "Image Gallery",
    des: "Image Gallery app where you can View, upload and Delete  Your Fav Images. TechStack Used HTML, CSS, JavaScript,Nodejs , multter middleware for file handling and mongoDb database ",
    liveLink: "",
    githubLink: "https://github.com/Devanshu171/Image-Gallery",
  },
];
export default function Project() {
  const [items, setItems] = useState([]);
  const [visible, setVisibe] = useState(3);

  const showMoreItems = () => {
    setVisibe((prevValue) => prevValue + 3);
  };
  const showLessItems = () => {
    if (visible === 3) return;

    if (visible >= 4 && visible <= 6) {
      setVisibe(3);
      return;
    }
    setVisibe(6);
  };
  useEffect(() => {
    setItems(projects);
  });
  // console.log(items);
  return (
    <div>
      <div className="Project ">
        <h1>PROJECTS</h1>
        <div className="project_container">
          {items.slice(0, visible).map((items) => (
            // console.log(items);
            <ProjectItem item={items} />
          ))}
        </div>
        <div className="showbtn">
          <button onClick={showMoreItems}>Load More </button>
          <button onClick={showLessItems}>show Less</button>
        </div>
      </div>
    </div>
  );
}
