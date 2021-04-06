import React from 'react'
import Brand from '../../components/Brand/Brand'
import { Row, Col, Container } from 'react-bootstrap';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import './HomeSection.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomParagraph from '../../components/CustomPararaph/CustomParagraph';
import CustomTitle from '../../components/CustomTitle/CustomTitle';

const HomeSection = () => {
    return (
        <div 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear">

        <Container className="my-5" fluid>
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

                    <Row className='mt-5'>
                        <CustomParagraph 
                            type='simple-paragraph' 
                            text="I'm a software engineer who loves 
                            to build seamlessly integrated software for 
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
