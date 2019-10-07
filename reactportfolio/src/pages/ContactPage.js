import React from 'react';

import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import johnny from '../assets/images/johnny.png';

function ContactPage(props) {

    return(
        <div>
        
            <Hero title={props.title} />
            <Content>
            <Container>
                
            <a id="button" href="tel:322499829854" class="btn btn-accent">Call me</a>
                <a id="button1"href="mailto:johnnycalderondeveloper@gmail.com"class="btn btn-white">Email</a>
                <a id="button2"href="https://goo.gl/maps/B2JuXEHkyys5Ae8u9" class="btn btn-white">Location</a>
                <Row>
                <Col>
                        <Image src={johnny} responsive />
                </Col>
                </Row>
            </Container>
            </Content>
           
                        
   
           
 </div>
        
    );

}

export default ContactPage;