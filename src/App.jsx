// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactImageCarousel from "./components/image-carousel";
import "./App.css";

const getRandomSet = () => {
  const result = new Set();

  while (result.size < 10) {
    result.add(Math.floor(300 + 99 * Math.random()));
  }

  return result;
};

const getFor = () => {
  const st = getRandomSet();
  console.log(st);
  const iter = st.values();
  return () => iter.next().value;
};

const gen = getFor();

const images = Array.from(
  { length: 10 },
  () => `https://placekitten.com/${gen()}/200`
);

function App() {
  return (
    <div className="App">
      <ReactImageCarousel images={images} />
    </div>
  );
}

export default App;
