import React from 'react';
import exercises from '../assets/exercises.json'

const Exercises = () => {  
    return (
        <>  
        {exercises.map((obj) => (
           <li>{obj.title}</li>  
           ))}  
        </>
    );
}

export default Exercises;
