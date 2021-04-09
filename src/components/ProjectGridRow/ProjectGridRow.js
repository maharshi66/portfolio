import React from 'react'
import { Row } from 'react-bootstrap';
import CustomTitle from '../CustomTitle/CustomTitle';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import './ProjectGridRow.css';

const ProjectGridRow = ({title, description, image, elements}) => {
    return (
        <>
            <Row xs={1} md={2} className='justify-content-space-around'>
                <div> 
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        className='div1'>
                            Image
                    </div>
                    <div 
                        data-aos="zoom-in"
                        data-aos-delay="300"                
                        className='div2'>
                        <CustomTitle title={title} type='project-title' />
                        <CustomParagraph text={description} type='project-description' />
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300"   
                    className='div3'>
                    Mongo Express React Node
                </div>
            </Row>    
        </>
    )
}

export default ProjectGridRow
