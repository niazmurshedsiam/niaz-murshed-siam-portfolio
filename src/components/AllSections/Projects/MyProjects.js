
import React from 'react';
import './Projects.css';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
  } from '@merc/react-timeline';
import { Accordion, Card, Image } from 'react-bootstrap';
import project2 from '../../../images/projects/project2.PNG';
import project3 from '../../../images/projects/project3.png';
import project4 from '../../../images/projects/Project4.png';
import project5 from '../../../images/projects/project5.png';
import project6 from '../../../images/projects/project6.PNG';
import project7 from '../../../images/projects/project7.PNG';
import project8 from '../../../images/projects/project8.png';
import project9 from '../../../images/projects/project9.png';

import L_REACT from "../../../images/skills/react.svg";
import L_NODE_JS from "../../../images/skills/nodejs.svg";
import L_EXPRESS from "../../../images/skills/express.svg";
import L_JAVASCRPT from "../../../images/skills/javascript.svg";
import L_MONGODB from "../../../images/skills/mongodb.svg";
import L_REDUX from "../../../images/skills/redux.svg";
import L_HTML5 from "../../../images/skills/html-5.svg";
import L_CSS3 from "../../../images/skills/css3.svg";
import L_BOOTSTRAP4 from "../../../images/skills/bootstrap-4.svg";
import L_DJANGO from "../../../images/skills/django.svg";
import L_DIGITAL_OCEAN from "../../../images/skills/digital-ocean.svg";
import L_GIT from "../../../images/skills/github-api.svg";
import L_MATERIALUI from "../../../images/skills/material-ui-1.svg";

const MyProjects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: MERN Tip Calculator */}
        <ImageEvent
                    date="Apr 1, 2021"
                    className="text-center"
                    text="Hello Food"
                    src={project2}
                    alt="Online Restaurant Application"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is an Online Restaurant management System. Which is build by React
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Customers can order foods based on the given categories.</li>
                                <li>In order to order foods, customer must login to the app</li>
                                <li>In the authentication, firebase authentication is used</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_EXPRESS}
                                        alt="Express"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MONGODB}
                                        alt="MongoDB"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    MongoDB
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Material-UI
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://hellofood-79643.web.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/Hello-Food-Client"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://hellofood-79643.web.app/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Get GitHub Info */}
                <ImageEvent
                    date="Aug 25, 2020"
                    className="text-center"
                    text="Budget"
                    src={project3}
                    alt="Budget"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> A simple app to manage your monthly budget. You can insert your income, and also your expenses, and it will calculate how much budget you have left for the month, and also shows the percentage that each expense took from your budget.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>user can add income with description</li>
                                <li>can add EXPENSES</li>
                                <li>also can see percentage of expenses</li>
                                
                                </ul>
                                <hr />
            
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_JAVASCRPT}
                                        alt="JavaScript"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    JavaScript
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_GIT}
                                        alt="Github API"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    GitHub API
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://niazmurshedsiam.github.io/Budget/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/Budget"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://niazmurshedsiam.github.io/Budget/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Cooking Master */}
                <ImageEvent
                    date="Feb 7, 2021"
                    className="text-center"
                    text="Cooking-Master"
                    src={project4}
                    alt="Cooking-Master"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app that detects face
                                in a picture.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Click Image</li>
                                <li>Food Information Detail</li>
                                
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_JAVASCRPT}
                                        alt="JavaScript"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    JavaScript
                                    </span>
                                </li>
                                </ul>
                                <hr />
                                
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://niazmurshedsiam.github.io/Cooking-Master/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/Cooking-Master"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://niazmurshedsiam.github.io/Cooking-Master/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: RoboFriends */}

                <ImageEvent
                    date="Mar 20, 2021"
                    className="Hello Rider"
                    text="Rider"
                    src={project5}
                    alt="Hello Rider"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is an Ride Shareing app . Which is build by React
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Register as new user</li>
                                <li>Signin as existing user</li>
                                <li>Search through Robots</li>
                                <li>Use map</li>
                                <li>Usage of Cart store</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                
                               
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://cocky-khorana-fc9deb.netlify.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/Rider"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Pig Game */}

                <ImageEvent
                    date="Dec 10, 2020"
                    className="text-center"
                    text="Pig Game"
                    src={project6}
                    alt="Pig Game"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is a simple web version of the Pig game which was first described in print by John Scarne in 1945. Pig is a simple dice game in which, each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". The first player to score 100 points wins the game.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>The game has 2 players, playing in rounds</li>
                                <li>In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score</li>
                                <li>BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn</li>
                                <li>The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn</li>
                                <li>he first player to reach [FINAL SCORE] points on GLOBAL score wins the game!</li>
                                <li>Good Luck ✌🙂</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_JAVASCRPT}
                                        alt="JavaScript"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    JavaScript
                                    </span>
                                </li>
                            
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/Pig-Game"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://niazmurshedsiam.github.io/Pig-Game/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Fancy Slider */}
                <ImageEvent
                    date="Feb 14, 2021"
                    className="text-center"
                    text="FancySlider"
                    src={project7}
                    alt="FancySlider"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is my website built JavaScript.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Search any word then word some picture show</li>
                                <li>Then Picture click  minimum 3 picture create sidle</li>
                                <li>Then slide pic show down the slide</li>
                                
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_JAVASCRPT}
                                        alt="JavaScript"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    JavaScript
                                    </span>
                                </li>
                                
                                </ul>
                                <hr />
                                
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/niazmurshedsiam/FancySlider" target="_blank">
                        SOURCE CODE
                        </UrlButton>

                        <UrlButton href="https://niazmurshedsiam.github.io/FancySlider/" target="_blank">
                        LIVE SITE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>


                <ImageEvent
                    date="Jan 12, 2021"
                    className="text-center"
                    text="Panda Ecommerce"
                    src={project8}
                    alt="Panda Ecommerce"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                            <strong>Description:</strong> This is a simple e-commerce app where user can add products to their cart from the shop, then review their cart. User can remove product from review. For shipment user must logged in.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Customers can order product based on the given categories.</li>
                                <li>In order to order product, customer must login to the app</li>
                                <li>In the authentication, firebase authentication is used</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href=" https://niazmurshedsiam.github.io/Panda-commerce-bootstrap/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/Panda-commerce-bootstrap"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href=" https://niazmurshedsiam.github.io/Panda-commerce-bootstrap/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                <ImageEvent
                    date="Mar 30, 2021"
                    className="text-center"
                    text="Ema John"
                    src={project9}
                    alt="Ema John"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is a simple e-commerce app where user can add products to their cart from the shop, then review their cart. User can remove product from review. For shipment user must logged in.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Customers can order product based on the given categories.</li>
                                <li>In order to order product, customer must login to the app</li>
                                <li>In the authentication, firebase authentication is used</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_EXPRESS}
                                        alt="Express"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MONGODB}
                                        alt="MongoDB"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    MongoDB
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Material-UI
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://ema-john-simple-e5f2d.web.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/niazmurshedsiam/ema-john-client"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href=""
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                </Events>
            </Timeline>
            </div>
    );
};

export default MyProjects;