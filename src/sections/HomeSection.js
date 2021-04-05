import React from 'react'
import Brand from '../components/Brand/Brand'
import { Row, Col, Container } from 'react-bootstrap';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import './HomeSection.scss';
import SocialMediaLinks from '../components/SocialMediaLinks/SocialMediaLinks';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomParagraph from '../components/CustomPararaph/CustomParagraph';
import CustomTitle from '../components/CustomTitle/CustomTitle';

const HomeSection = () => {
    return (
        <div 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear">

        <Container className="my-5" fluid>
            <Row className="align-items-center">
                <Col
                    data-aos="fade-right"
                    data-aos-delay="800" 
                    className="py-3" xs={12} md={4}>
                    <Row className='justify-content-center justify-content-md-start'>
                        <Brand text='Maharshi Shah.'/>
                    </Row>
                    <Row className='justify-content-center justify-content-md-start'>
                        <CustomTitle type='title-home-section' title='Full Stack Developer' /> 
                    </Row> 
                    <Row className='justify-content-center justify-content-md-start'>
                        <SocialMediaLinks />
                    </Row> 
                </Col>
                <Col className="py-3" xs={12} md={4}>
                    <ProfileImage />
                </Col >
                <Col className="py-3" xs={12} md={4} >
                    <Row>
                    <CustomParagraph 
                        type='introduction' 
                        text="I'm a Mumbai based software engineer who loves 
                        to build seamlessly integrated applications for 
                        the web and mobile platforms." />
                    </Row>
                    <Row  className='justify-content-center justify-content-md-start'>
                        <CustomButton text='Learn More' icon='fas fa-arrow-down' isAnchor={true} />
                    </Row>  
                </Col>
            </Row>
        </Container>
        </div>
    )    
}

export default HomeSection
