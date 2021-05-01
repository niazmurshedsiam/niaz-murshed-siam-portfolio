import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './AboutMe.css';
import profile from '../../../images/profile.jpg'

const AboutMeDetails = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3 mt-4">ABOUT ME</h1>
                <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={profile} thumbnail fluid />
                    </Row>
                    </Col>
                    <Col xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                        Hi Dear ! I am <strong>&nbsp;Niaz Murshed Siam</strong>
                        Since beginning my journey as a frontend developer, I've done some projects using HTML, CSS, React, Node, Express, Mongodb.
                        <br/>
                        I am an enthusiastic and diligent full stack web developer with excellent knowledge and experience. I can take on challenges in new environments to develop new skills.
                        <br/>
                        I have already developed 10+ projects. Most of that are developed using JavaScript. I have used react the most commonly used JavaScript library for front-end development and for backend I've used express - a Nodejs framework. And most of the projects I've used Mongo dB as a database. I have a clear knowledge of how to deploy a project on both the server side and the client side in Netlify, Firebase and Heroku. I can take the level of accuracy concerning about the quality of the work and the presentation of the work and attention to detail.
                        <br/>
                        Now, I am exploring Algorithm and Solving problems from various online judge.
                        <br /> <br />
                        <Col className="d-flex justify-content-center flex-wrap">
                        <div>
                            <a href="#contact">
                            <Button className="m-2" variant="outline-primary">
                                Let's talk
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://drive.google.com/file/d/1oaZG5H-YFlgSHaMwqNmnH8DzCgjiRSkr/view?usp=sharing">
                            <Button className="m-2" variant="outline-success">
                                My Resume
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/niazmurshedsiam" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-dark">
                                GitHub
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/niaz-murshed-41527a141/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-info">
                                LinkedIn
                            </Button>
                            </a>
                        </div>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
};

export default AboutMeDetails;