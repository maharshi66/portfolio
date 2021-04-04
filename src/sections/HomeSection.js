import React from 'react'
import Brand from '../components/Brand/Brand'
import { Row, Col, Container } from 'react-bootstrap';

const HomeSection = () => {
    return (
        <div 
            data-aos="zoom-in-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-linear">

        <Container className="px-5 my-5" fluid>
            <Row className="align-items-center text-center">
                <Col className="text-justify" xs={12} md={4}>
                    <Brand text='Maharshi Shah.'/>
                </Col>
                <Col xs={12} md={4}>
                    <h1>
                        IMAGE
                    </h1>
                </Col >
                <Col xs={12} md={4}>
                    <p>
                        Lorem Ipsum dolores kandf asfb aisfb aoisbfh asuibdf
                        asdkjbsdf ajusbfsdf aoisfbasf aiosbfasdf a;soibnff
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
    
}

export default HomeSection
