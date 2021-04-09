import React from 'react'
import {Col, Row} from 'react-bootstrap';
import usfSVG from '../assets/usflogo.svg';
import qtSVG from '../assets/qtlogo.svg';
import motherboardSVG from '../assets/motherboard.svg'
import CustomTitle from '../components/CustomTitle/CustomTitle';
import CustomParagraph from '../components/CustomParagraph/CustomParagraph';
import ImageLinkContainer from '../components/ImageLinkContainer/ImageLinkContainer';

const AboutBackground = () => {
    return (
    <React.Fragment>
        <Col xs={12} md={6} 
                        data-aos="fade-right"
                        data-aos-delay="800">
            <Row xs={2} md={2} className="justify-content-center align-items-center">
                <ImageLinkContainer 
                    href='https://www.usf.edu/' 
                    imgSrc={usfSVG} 
                    alt='usflogo' 
                    width='190'
                    height='200'/>
            </Row>
            <Row xs={3} md={3} className="justify-content-center align-items-center" >
                <ImageLinkContainer 
                    href='https://www.qt.io/' 
                    imgSrc={qtSVG} 
                    alt='qtlogo'
                    width='120'
                    height='180' />
                <ImageLinkContainer 
                    href='https://en.wikipedia.org/wiki/Embedded_software' 
                    imgSrc={motherboardSVG} 
                    alt='motherboardlogo' 
                    width='80'
                    height='180'/>
            </Row>
        </Col>
        <Col className='mt-3' xs={12} md={6}>
                <CustomTitle icon='fas fa-play' title=' Background' type='subtitle' />
                    <div className='breif-background'>    
                        <CustomParagraph 
                            text="I'm a software engineer based in Mumbai, India. I earned my Bachelor's degree in Computer Engineering from the 
                            University of South Florida."
                            type='simple-paragraph-sm' 
                        />
                        <CustomParagraph 
                            text="After graduating, I joined the team at Electropneumatics & Hydraulics to
                            build embedded system software and graphical user interfaces using C, C++, and the Qt framework."
                            type='simple-paragraph-sm' 
                        />
                        <CustomParagraph 
                            text="My interest in web-development piqued during the early stages of the COVID-19 pandemic. 
                            From what started with learning the basics of HTML, CSS, and JavaScript 
                            has now spiraled into building full-stack web applications with cutting-edge libraries and frameworks."
                            type='simple-paragraph-sm' 
                        />
                    </div>
            </Col>
        </React.Fragment>
    )
}

export default AboutBackground
