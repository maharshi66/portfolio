import React from 'react'
import {Container, Row } from 'react-bootstrap';
import './ProjectsSection.css';

const ProjectsSection = () => {
    return (
        <Container>
            <Row xs={1} md={2} className='justify-content-space-around'>
                <div className='div1'>
                    Project ImageLinkContainer
                </div>
                <div className='div2'>
                    Project Description
                </div>
            </Row>    
        </Container>
    )
}

export default ProjectsSection;
