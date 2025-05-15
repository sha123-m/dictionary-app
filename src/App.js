
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by{" "}
          
            Sha123-m
          {" "}
          and is{" "}
         
            open-sourced on GitHub
          {" "}
          and{" "}
          
            hosted on Netlify
          
        </footer>
      </div>
    </div>
  );
}

export default App;