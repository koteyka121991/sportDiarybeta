import React from 'react';
import exercises from '../assets/exercises.json'

const Exercises = () => {  
    return (
        <>  
        {exercises.map((obj) => (
           <li key={obj.id}>{obj.title}</li>  
           ))}  
        </>
    );
}

export default Exercises;
