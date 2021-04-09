import React from 'react'
import { Col} from 'react-bootstrap';
import CustomTitle from '../components/CustomTitle/CustomTitle';
import CustomParagraph from '../components/CustomParagraph/CustomParagraph';
import SkillsBar from '../components/SkillsBar/SkillsBar';

const AboutTechnologies = () => {
    return (
        <React.Fragment>
         <Col className='my-2 my-md-5' md={6} xs={12}>
            <CustomTitle icon='fas fa-play' title=' Technologies' type='subtitle' />
                <div className='breif-background'>    
                    <CustomParagraph 
                        text="I have had the opportunity to work with a number of programming languages, frameworks, and libraries as a professional."
                        type='simple-paragraph-sm' 
                    />
                    <CustomParagraph 
                        text="Here are few that I have been working with recently:"
                        type='simple-paragraph-sm' 
                    />
                </div>
         </Col>   
         <Col className='my-3 my-md-5' md={6} xs={12}>
            <div             
                data-aos="zoom-in"
                data-aos-delay="300">
            <SkillsBar />
            </div>
         </Col>
        </React.Fragment>
    )
}

export default AboutTechnologies
