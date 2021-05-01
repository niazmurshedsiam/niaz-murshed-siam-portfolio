import React from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import './Experiences.css'
import Tilt from "react-tilt";

const MyAllExperience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                <Tilt options={{ max: 25 }}>
                    <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        {/* <Card.Img variant="top" className="img-resize" src="" alt="Accenture logo" /> */}
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">MERN Developer</Card.Title>
                        </div>
                        <div>
                        <Card.Text className="text-center style">
                            <p className="body-title-style "></p>
                            <br />
                            <strong>Technology:</strong> React JS, Node JS, MongoDb, MySql, Express JS
                            <br />
                            <strong>Duration:</strong>
                            <br/>
                            <strong> Description </strong>
                            <ul className="text-left">
                            <li><strong>Developed &amp; enhanced</strong> </li>
                            <li><strong>Developed</strong> 
                                
                            </li>
                            <li><strong>Provided</strong>  
                            </li>
                            <li><strong>Performed</strong>  
                            </li>
                            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                            </ul>
                            
                            
                        </Card.Text>
                        </div>
                    </Card.Body>
                    </Card>
                </Tilt>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default MyAllExperience;