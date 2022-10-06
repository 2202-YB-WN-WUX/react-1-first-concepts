// <> these are called react fragments 
// They sit in as parent elements, which are required to be around JSX
const name = "Tim";

function Hero() {
  return (
    <div id="hero" className="section">
      <h1 className="main-header">First react app</h1>
      <p>This is the hero component.</p>
      <p>Welcome back, {name}</p>
    </div>
  );
}

export default Hero;
