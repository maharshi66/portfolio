import React from 'react'
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import './AboutSection.css';
import { Container, Row } from 'react-bootstrap';
import AboutBackground from '../../subsections/AboutBackground';
import AboutTechnologies from '../../subsections/AboutTechUsed';

const AboutSection = () => {
    return (
        <div id="about">
        <CustomTitle title='About' type='title' />
        <Container className='about'>
            <Row >
                <AboutBackground />
            </Row>
            <Row>
                <AboutTechnologies/>
            </Row>
        </Container>
        </div>
    )
}

export default AboutSection