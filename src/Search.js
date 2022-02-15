import "./styles.css";
import React, { useState } from "react";
import { bookData } from "./Data";
import { searchByKeyword } from "./utl";

// main component
// calls child componets
export default function Search() {
  //const [selection, setSelection] = useState("Keyword");
  //const [input, setInput] = useState("");

  const [valueSearch, setValueSerach] = useState("");
  const [valueDrop, setValueDrop] = useState("");
  console.log("PARENT VALUE DROPDOWN=", { valueDrop });
  console.log("PARENT VALUE SEARCH INPUT=", { valueSearch });

  return (
    <div className="Home">
      <br />
      <h1>LibrarySearch </h1>
      <br />
      {/*
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
      */}
      {/* TODO: Make so when clicked it calls search function*/}
      {/*
      <button onClick={() => {}} className="mGlass">
        <span role="img" aria-label="search glass">
          {" "}
          &#x1F50E;
        </span>
      </button>
      */}
      {/* calls the search function. 
    TODO: make so when it prints it looks better
      {JSON.stringify(searchByKeyword(bookData, selection, input))}
*/}

      <Inputs setValueSerach={setValueSerach} setValueDrop={setValueDrop} />
      <SearchResults valueSearch={valueSearch} valueDrop={valueDrop} />
      <div className="UO">
        <img src="UO.png" alt="UO" />
      </div>
    </div>
  );
}

// holds the input buttons and forms
//sets state
//lifts state to parent
//clears local state
function Inputs(props) {
  const { setValueSerach } = props;
  const { setValueDrop } = props;
  const [selection, setSelection] = useState("Keyword");
  const [input, setInput] = useState("");

  function submit() {
    //if empty do help statement
    //else lift the state
    setValueSerach(input);
    setValueDrop(selection);
  }

  return (
    <div>
      <div className="dropdown">
        <button className="dropbutton">{selection}</button>
        <div className="dropdown-content">
          <button onClick={() => setSelection("keyword")}>Keyword</button>
          <button onClick={() => setSelection("title")}>Title</button>
          <button onClick={() => setSelection("author")}>Author</button>
        </div>
      </div>
      &nbsp;
      <input
        type="text"
        id="test"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      &nbsp;
      <button
        onClick={() => {
          submit();
        }}
        className="mGlass"
      >
        <span role="img" aria-label="search glass">
          {" "}
          &#x1F50E;
        </span>
      </button>
    </div>
  );
}

//search componet
//use filtering to remove any objects from
// data array that do not match input value
// return any left over data
/*
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
*/

// gets state from parent
//uses state value to call search function
//gets returned array
//loops through array desplaying the results
function SearchResults(props) {
  const { valueDrop = "keyword" } = props;
  const { valueSearch = "" } = props;
  let data = searchByKeyword(bookData, valueDrop, valueSearch);
  console.log("DATA=", data);

  return data.map((book, index) => (
    <div key={index}>
      <li>
        {book.title}, {book.author}
      </li>
    </div>
  ));
}

//when typing in search bar, find matching results without showing user
//when button clicked, take input put as parameter in
//search function
//for each match, display results in a list where that O is
//EXTRA: option picked in dropdown chooses which key to search with
