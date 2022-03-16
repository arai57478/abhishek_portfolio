import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import afrd from "../../Assets/Projects/afrd.png";
import chatify from "../../Assets/Projects/chatify.png";
import  railway from "../../Assets/Projects/railway.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Last-value"
              description="Collections of moments  or Workspace to share resources and share notes with friends build with react.js,redux, Material-UI,  Javascript and backend using Node.js,Mongodb,express, . Have features which allows user for realtime Liking, image sharing as well as supports comments on Clipboard."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Farmer Hub"
              description="Farmer-Hub website was a full stack web project for online buying and selling farmer based items aimed for helping farmers by making easy availability of tools,crops,pesticides and also aims to provide weather updates and about new technologies . Frontend was based on HTML, CSS and JS and backend was based on firebase."
              link="https://github.com/arai57478/g6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afrd}
              isBlog={false}
              title="Fakecomment-detector"
              description="Amazon Fake Review detector is a full stack project to determine the percentage of fake reviews associated with any amazon product. It was build with HTML, CSS, Bootstrap, Express, Node JS and machine learning API was used."
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Railway-Ticket-Reservation"
              description="Using 'C' i have created a railway-ticket reservation and user can book a ticket ,check status ,check seat availability ,cancel ticket and can also check train schedule  ."
              link="https://github.com/arai57478/Ticket-reservation-Railway-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Number of Fingers Detection and telling emotions"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the vaulesof finger shown by user and pedicts emoition on basis sign langugage  . And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the number of fingers adn returns emotion of a person."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
