import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <footer>
        This project was coded by Olha Kolodiazhna and is{" "}
        <a
          href="https://github.com/Revontulten/final-react-app.git"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
