import React from 'react';
import fakeData from '../../fakedata';
import { useState } from 'react';
import './Purchage.css';
import Course from '../Course/Course';
import Inventory from '../Inventory/Inventory';

const Purchage = () => {
    //console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [inventory, setInventory] = useState([]);
    const handleAddCourse = (course) =>{
        console.log("clicked" ,course);
        const newInventory = [...inventory, course];
        setInventory(newInventory);
    }
    
    return (
        <div className='purchage-container'>
            <div className='course-container'>
                {
                    courses.map(crs => <Course handleAddCourse={handleAddCourse} course={crs}></Course>)
                }
            </div>
            <div className='inventory-container'>
                    <Inventory inventory={inventory}></Inventory>
            </div>
            
            
        </div>
    );
};

export default Purchage;