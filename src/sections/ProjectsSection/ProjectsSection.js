import React from 'react'
import {Container, Row } from 'react-bootstrap';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import ProjectGridRow from '../../components/ProjectGridRow/ProjectGridRow';
import './ProjectsSection.css';

const ProjectsSection = () => {
    return (
        <Container id='projects'>
            <CustomTitle title='Projects' type='title' />
            <ProjectGridRow 
                title="Sample Title" 
                description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Duis aliquet aliquam porttitor." />
            <ProjectGridRow 
                title="Sample Title" 
                description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Duis aliquet aliquam porttitor." />                            
            <ProjectGridRow 
                title="Sample Title" 
                description="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Duis aliquet aliquam porttitor." />                            
        </Container>
    )
}

export default ProjectsSection;
