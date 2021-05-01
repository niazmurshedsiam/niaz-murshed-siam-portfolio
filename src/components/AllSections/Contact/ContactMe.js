import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import './Contact.css'
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            
            <Jumbotron className="contact-jumbotron">
            <ContactForm />
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-danger" title="niazmurshed16@gmail.com">
                        <i className="fas fa-envelope-square"></i> Email Me
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.linkedin.com/in/niaz-murshed-41527a141/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Visit my LinkenIn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                        </Button>
                    </a>
                    </div>
                    
                    <div className="m-2">
                    <a href="https://github.com/niazmurshedsiam" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-dark" title="My other projects">
                        <i className="fab fa-github-square"></i> GitHub
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                        <i class="fab fa-youtube"></i> Youtube
                        </Button>
                    </a>
                    </div>
                    
                    
                </Col>
                </Row>
            </Jumbotron>
            </div>
    );
};

export default ContactMe;