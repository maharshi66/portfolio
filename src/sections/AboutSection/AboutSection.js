import React from 'react'
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import CustomParagraph from '../../components/CustomPararaph/CustomParagraph'
import './AboutSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImageLinkContainer from '../../components/ImageLinkContainer/ImageLinkContainer';
import usfSVG from '../../assets/usflogo.svg';
import qtSVG from '../../assets/qtlogo.svg';
import epcncJPG from '../../assets/epcnclogo.jpg'
import embeddedPNG from '../../assets/embeddedPNG.png';

const AboutSection = () => {
    return (
        <div id="about">
        <CustomTitle title='About' type='title' />
        <Container className='about'>
            <Row>
            <Col className='mt-3' xs={12} md={6}>
                <CustomTitle icon='fas fa-play' title=' Background' type='subtitle' />
                    <div className='breif-background'>    
                        <CustomParagraph 
                            text="I'm a software engineer based in Mumbai, India. I earned my Bachelor's degree in Computer Engineering from the 
                            University of South Florida. I love building applications that are accessible to everyone around the world."
                            type='simple-paragraph-sm' 
                        />
                        <CustomParagraph 
                            text="After graduating, I joined the team at Electropneumatics & Hydraulics as a Software Engineer to
                            build embedded system software and graphical user interfaces using C, C++, and the Qt framework."
                            type='simple-paragraph-sm' 
                        />
                        <CustomParagraph 
                            text="My interest in web-development piqued during the early stages of the COVID-19 pandemic. 
                            From what started with learning the basics of HTML, CSS, and JavaScript 
                            has spiraled into learning and building full-stack web applications."
                            type='simple-paragraph-sm' 
                        />
                    </div>
            </Col>
            <Col className='mt-3' xs={12} md={6}>
                <Row >
                    <Col xs={6} md={6}>
                        <ImageLinkContainer href='https://www.usf.edu/' imgSrc={usfSVG} alt='usflogo' />
                    </Col>
                    <Col xs={6} md={6}>
                        <Row xs={3} md={2}>
                            <ImageLinkContainer href='https://www.electropneumatics.com/' imgSrc={epcncJPG} alt='epcnclogo' />
                            <ImageLinkContainer href='https://en.wikipedia.org/wiki/Embedded_software' imgSrc={embeddedPNG} alt='embeddedlogo' />
                        </Row>
                      <Row className='mt-1' xs={2} md={1} >
                        <ImageLinkContainer href='https://www.qt.io/' imgSrc={qtSVG} alt='qtlogo' />
                      </Row>
                    </Col>
                </Row>
            </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AboutSection