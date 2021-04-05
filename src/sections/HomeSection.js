import React from 'react'
import Brand from '../components/Brand/Brand'
import { Row, Col, Container } from 'react-bootstrap';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import Introduction from '../components/Introduction/Introduction';
import './HomeSection.scss';
import CustomButton from '../components/CustomButton/CustomButton';

const HomeSection = () => {
    return (
        <div 
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear">

        <Container className="px-5 my-5" fluid>
            <Row className="align-items-center text-center">
                <Col className="text-justify" xs={12} md={4}>
                    <Row>
                        <Brand text='Maharshi Shah.'/>
                    </Row>
                    <Row>
                        <CustomButton />
                    </Row>   
                </Col>
                <Col xs={12} md={4}>
                    <ProfileImage />
                </Col >
                <Col xs={12} md={4}>
                    <Introduction />
                </Col>
            </Row>
        </Container>
        </div>
    )    
}

export default HomeSection
