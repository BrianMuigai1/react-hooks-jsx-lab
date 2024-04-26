import React from "react";
import imageVariable from "./pexels-valeriiamiller-20801061.jpg"; 

function About() {
  return (
    <div id="about">
      About
      <h2>Content of About Me</h2>
      <p>I am a small footed short luo darkskin man</p>
      <img src={imageVariable} alt="I made this" />
    </div>
  );
}

export default About;
