import React from 'react';
import './Course.css';

const Course = (props) => {
    console.log(props);
    const {title, image, instructor, price, rating} = props.course;
    return (
        <div className='course'>
            <div className='course-img'>
                <img src={image} alt=""/>
                <h4 style={{color: '#F9A602' }}>{rating}</h4>
               
               
            </div>
            <div className='course-details'>
                <h3 className='course-title'>{title}</h3>
                <p><small>{instructor}</small></p>
                <h4>${price}</h4>
                <button onClick={()=> props.handleAddCourse(props.course)} className='enroll-btn'>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;