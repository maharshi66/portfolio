import React from 'react'
import {Container,  Row } from 'react-bootstrap';
import CustomTitle from '../CustomTitle/CustomTitle';
import './SkillsBar.css';
import skillItems from '../../data/skillItems';

const SkillsBar = () => {
    return (
        <>
        {
            skillItems.map(skill => (
                    <Container>
                        <CustomTitle type='subtitle' title={skill.skillName} />
                        <Row className='skills' xs={skill.skillLevel} md={skill.skillLevel}>
                            <div style={{
                                        backgroundColor: 'blue',
                                        color: 'white',
                                        textAlign: 'right'}}>
                                {skill.skillLevel}    
                            </div>
                        </Row>
                    </Container>
                
            ))
        }
        </>  
    )
}

export default SkillsBar
