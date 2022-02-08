import "./styles.css";
import React, { useState } from "react";
import { bookData } from "./Data";
import { searchByKeyword } from "./utl";

// main component
// has contains assgined state for button selection
//contains input state
export default function Search() {
  const [selection, setSelection] = useState("Keyword");
  const [input, setInput] = useState("");

  return (
    <div className="Home">
      <br />
      <h1>LibrarySearch </h1>
      <br />
      <div className="dropdown">
        <button className="dropbutton">{selection}</button>
        <div className="dropdown-content">
          <button onClick={() => setSelection("keyword")}>Keyword</button>
          <button onClick={() => setSelection("title")}>Title</button>
          <button onClick={() => setSelection("author")}>Author</button>
        </div>
      </div>
      <input
        type="text"
        id="test"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => {}} className="mGlass">
        <span role="img" aria-label="search glass">
          {" "}
          &#x1F50E;
        </span>
      </button>

      {JSON.stringify(searchByKeyword(bookData, selection, input))}

      <div className="UO">
        <img src="UO.png" alt="UO" />
      </div>
    </div>
  );
}

//search componet
//use filtering to remove any objects from
// data array that do not match input value
// return any left over data
function Filter(input, props) {
  let filter = input.toUpperCase();

  switch (props) {
    case "title":
      console.log("title " + filter);
      break;
    case "keyword":
      console.log("keyword " + filter);
      break;
    case "author":
      console.log("author " + filter);
      break;
    default:
      return;
  }
}

// display componet displays all data left over from SearchData
function SearchResults() {
  let data = [];
  for (let i = 0; i < bookData.length; i++) {
    data = [...data, bookData[i].Title];
  }
  const vars = bookData.map((book, index) => {
    const { Title, Author } = book;
    return <li>{(Title, Author)}</li>;
  });
  return (
    <div>
      {data}
      <hr />
      {vars}
    </div>
  );
}

//when typing in search bar, find matching results without showing user
//when button clicked, take input put as parameter in
//search function
//for each match, display results in a list where that O is
//EXTRA: option picked in dropdown chooses which key to search with
