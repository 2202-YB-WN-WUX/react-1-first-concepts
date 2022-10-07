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
