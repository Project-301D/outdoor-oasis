import React from "react";
import luke from '../../img/Luke.jpg'

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h1>About Us</h1>

        <p>Hello! My name is Emma (she/her), and I live in North Liberty, IA. My previous background is in science. I majored in biology and chemistry in college, and have been working in lab with the University of Iowa for the last several years prior to joining DeltaV.</p>
        <img src="../img/Emma.jpg" alt="Emma Picture"/>


        <p>Hey everyone! My name is Luke, I am 20 years old and do not have any previous experience besides Code 101 and 102. I am excited for this class because coding is very enjoyable for me and feels more like a hobby rather than a chore. Im also excited to work towards expanding my knowledge in coding and for it to hopefully help me towards my future career.</p>
        <img src={luke} alt="Luke Picture"/>


        <p>Hello! My name is Ava, Im from Cedar Rapids, IA, born and raised. Im 19 years old and I have a background in music, with a little bit of programming experience in robotics. I use Windows 11, but
          style it to look like Windows 95 because I am into retro computing.</p>
        <img src="../img/Ava.jpg" alt="Ava Picture"/>

      </>
    );
  }
}

export default AboutUs;