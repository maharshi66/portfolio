import React from 'react'
import Brand from '../../components/Brand/Brand'
import { Row, Col, Container } from 'react-bootstrap';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import './HomeSection.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomParagraph from '../../components/CustomParagraph/CustomParagraph';
import CustomTitle from '../../components/CustomTitle/CustomTitle';

const HomeSection = () => {
    return (
        <div id="home"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear">

        <Container fluid>
            <Row className="align-items-center">
                <Col className="py-3" xs={12} md={4}>
                    <ProfileImage />
                </Col >
                <Col className="py-3" xs={12} md={8} >
                    <Row className='justify-content-center justify-content-md-start'>
                        <Brand text='Maharshi Shah.'/>
                    </Row>
                    <Row className='justify-content-center justify-content-md-start'>
                        <CustomTitle type='subtitle' title='Full Stack Developer' /> 
                    </Row> 
                    <Row className='justify-content-center justify-content-md-start'>
                        <CustomParagraph 
                            type='introduction' 
                            text="I'm a software engineer who loves 
                            to build seamlessly integrated applications for 
                            the web and mobile platforms." />
                    </Row>
                    <Row className='justify-content-center justify-content-md-start'>
                        <CustomButton text='Learn More' icon='fas fa-arrow-down' isAnchor={true} href='#about' />
                    </Row>  
                </Col>
            </Row>
        </Container>
        </div>
    )    
}

export default HomeSection
