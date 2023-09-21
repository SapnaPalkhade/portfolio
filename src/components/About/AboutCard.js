import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
           <span className="primary-header">Greetings, I am Sapana a full-stack developer.</span> 
            <br />
            <br />
           Besides coding, here are a few other things I love!
          </p>
          <ul>
            <li className="about-activity">
             # Creative DIY Home Decoration 
            </li>
            <li className="about-activity">
             # The World of Fashion
            </li>
            <li className="about-activity">
             # Exploring the Joys of Travel
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
