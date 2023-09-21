import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import SapanaArtProject from "../../Assets/Projects/SapanaArtProject.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import TicTacToe from "../../Assets/Projects/TicTacToe.png";
import Scamazon from "../../Assets/Projects/Scamazon.png";
//import Todo from "../../Assets/Projects/Todo.png";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
         <strong className="Fluorescent-Blue">Recent Projects from General Assembly's SEI Bootcamp</strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              title="Tic Tac Toe Game "
              description="Tic-Tac-Toe is a classic two-player game where the objective is to form a line of three of your symbols (either 'X' or 'O') on a 3x3 grid, and it is often used as a beginners project to learn programming fundamentals."
              ghLink="https://github.com/SapnaPalkhade/unit-1-project"
              demoLink="https://tic-tac-toe.sapanapalkhade.me"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Scamazon}
              title="Scamazon Project"
              description="Delivering imaginary solutions to your imaginary needs, This is a basic e-commerce application using the MERN stack. Its main usage is to show the world our newfound programming skills.
              This was capstone a MERN stack web application similar in style and function to multinational e-commerce platform, Amazon, for General Assembly coding bootcamp."
              ghLink="https://github.com/SapnaPalkhade/amazon-project-saps.git"
              demoLink="https://amazon.sapanapalkhade.me"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SapanaArtProject}
              title="Sapana's Arts Gallery"
              description="Discover a world of creativity at our art gallery, where exquisite artworks and captivating exhibitions come to life. Immerse yourself in the beauty of art and unlock a journey of inspiration and cultural enrichment."
              ghLink="https://github.com/SapnaPalkhade/unit-3-project.git"
              demoLink="https://sa.sapanapalkhade.me/"
            />
          </Col>

          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              title="Todo List"
              description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
              ghLink="https://github.com/SapnaPalkhade/todo-example-deploy.git"
              demoLink="https://todolist.sapanapalkhade.me/"
            />
          </Col> */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Project"
              description="I have created a portfolio website leveraging React and Bootstrap, showcasing a seamless user experience through full responsiveness and versatile dark and light mode themes."
              ghLink="https://github.com/portfolio-final.git"
              demoLink="https://portfolio.sapanapalkhade.me/"
            />
          </Col>
          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Scamazon}
              title="Movie Search Tool"
              description="A movie search tool is a digital platform or application that allows users to find information about movies, such as titles, cast, release dates, and reviews, often facilitating the discovery of new films based on user preferences and criteria. These tools streamline the process of exploring and selecting movies for viewing. "
              ghLink="https://github.com/SapnaPalkhade/movie-app.git"
              demoLink="https://movie.sapanapalkhade.me"
            />
          </Col> */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
