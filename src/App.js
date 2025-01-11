import "./App.css";
import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Fetty10"> Fetty</a> and{" "}
          <a href="https://github.com/Fetty10/fetty-react-weather-app">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
