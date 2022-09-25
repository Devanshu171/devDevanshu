import "./App.css";
import About from "./components/About";
import Getintouch from "./components/Getintouch";
import Home from "./components/Home";
import Project from "./components/Project";
function App() {
  return (
    <div
      className="App"
      data-spy="scroll"
      data-target="#navbar-example2"
      data-offset="0"
    >
      <Home />
      <About />
      <Project />
      <Getintouch />
    </div>
  );
}

export default App;
