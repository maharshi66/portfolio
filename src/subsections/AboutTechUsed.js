import React from 'react'
import { Col, Row} from 'react-bootstrap';
import CustomTitle from '../components/CustomTitle/CustomTitle';
import CustomParagraph from '../components/CustomPararaph/CustomParagraph';
import SkillsBar from '../components/SkillsBar/SkillsBar';

const AboutTechnologies = () => {
    return (
        <React.Fragment className='mt-4 mt-md-5'>
         <Col md={6} xs={12}>
            <CustomTitle icon='fas fa-play' title=' Technologies' type='subtitle' />
                <div className='breif-background'>    
                    <CustomParagraph 
                        text="I have had the opportunity to work with a number of programming languages, frameworks, and libraries as a professional."
                        type='simple-paragraph-sm' 
                    />
                    <CustomParagraph 
                        text="Here are few that I have been working with"
                        type='simple-paragraph-sm' 
                    />
                </div>
         </Col>   
         <Col md={6} xs={12}>
            <SkillsBar />
         </Col>
        </React.Fragment>
    )
}

export default AboutTechnologies
