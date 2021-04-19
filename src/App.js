import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        <p>Code by Jordan Renaud</p>
        <a
          href="https://github.com/Jordan-Renaud/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          Check out the github
        </a>
      </footer>
    </div>
  );
}

export default App;
