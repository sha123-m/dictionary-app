import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
  
    function handleResponse(response) {
      console.log(response.data[0]);
      setResults(response.data[0]);
    }
  
    function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }
  
    function search(event) {
      event.preventDefault();
  
      if (!keyword.trim()) {
        alert("Please enter a word.");
        return;
      }
  
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl)
        .then(handleResponse)
        .catch((error) => {
          console.error("API Error:", error.response?.status);
          alert("Word not found. Please try another.");
        });
    }
  
    return (
      <div className="Dictionary">
        <section>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange}/>
        </form>
        </section>
        <Results results={results} />
      </div>
    );
  }