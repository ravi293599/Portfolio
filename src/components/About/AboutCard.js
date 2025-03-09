import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravi Sharma </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I'm a front end developer with seven years of hands-on experience in crafting web applications that not only look visually stunning but also deliver exceptional user experiences. Throughout my career, I've had the privilege of working on a wide range of projects, honing my skills, and staying at the forefront of web development technologies.
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
