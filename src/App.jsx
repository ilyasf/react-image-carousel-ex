// src/App.jsx
import React from "react";
import ReactImageCarousel from "./components/image-carousel";
import "./App.css";

const images = [
  "https://placekitten.com/300/200",
  "https://placekitten.com/301/200",
  "https://placekitten.com/302/200",
  // Add more image URLs as needed
];

function App() {
  return (
    <div className="App">
      <ReactImageCarousel images={images} />
    </div>
  );
}

export default App;
