import { Component } from "react";
import addTwoNumbers from ".././utilities/add"
// <> these are called react fragments 
// They sit in as parent elements, which are required to be around JSX
const name = "Tim";

// here's a component of the hero, which goes on the bottom
// scrolling text
const BottomText = () => {
  return (
    <div id="scroll-container">
      <p id="scroll-text">COOL TEXT /// COOL TEXT /// COOL TEXT</p>
    </div>
  )
}

const RandomImage = () => {
  return (
    <img src="https://picsum.photos/200/300" alt="random" />
  )
}

const Hero = () => {

  return (
    <div id="hero" className="section">
      <h1 className="main-header">First react app</h1>
      <p>This is the hero component.</p>
      <p>Welcome back, {name}</p>
      <BottomText />
      <RandomImage />
      <RandomImage />
      <RandomImage />
    </div>
  );
}

export default Hero;

// *** Activity ***:

// - Create a Gallery Component. 
// - Insert it into the main app.
// - It should display 3 different images.
// Break your gallery component up so it contains 3 different components. Title, GalleryImages, and ContactInfo.
// - Contact info should show some placeholder text.