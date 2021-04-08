import React from 'react'
import {Container} from 'react-bootstrap';
import CustomTitle from '../CustomTitle/CustomTitle';
import './SkillsBar.css';
import skillItems from '../../data/skillItems';

const SkillsBar = () => {
    return (
        <>
        {
            skillItems.map((skill, idx) => (
                    <Container key={idx} className='py-2'>
                        <CustomTitle icon={skill.icon} type='subtitle' title={skill.skillName} />
                        <div className='skills'>
                            <div className='skill' style={{width: `${skill.skillLevel}%`}}>
                            </div>
                        </div>
                    </Container>
            ))
        }
        </>  
    )
}

export default SkillsBar
