import React from 'react';

import Hero from '../Components/Hero';
import Content from '../Components/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Hi, I'm a junior web developer, currently enrolled in <a href="https://www.becode.org/">
            Becodes</a> web developer program. Becodes philosophy is to teach you how to learn
            - Seeing that the industry is constantly changing, and new technology is developed daily. 
            </p>
            <p>The skills that I have gained during this course are HTML, CSS, Javascript, PHP, React and NodeJS.</p>
            <p>My goal, for now, is to become a javascript ninja. At the moment I'm trying to master React, but I also want to learn Angular and Vue.</p>
            <p>My end goal is to become an all-rounded developer with the ability to solve problems in an efficient and clean manner. I am motivated and eager to start my career as a developer and gain more experience working on real-life projects. </p>
            <p>The course ends in November and I'm looking for interesting internships. Don't hesitate to send me a message with your inquiries</p>

            </Content>
        </div>
    );

}

export default AboutPage;