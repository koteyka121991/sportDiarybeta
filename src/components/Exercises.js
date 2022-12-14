import React from 'react';
import exercises from '../assets/exercises.json'

const Exercises = ({ item}) => {
    const [subExercises, setSubExercises] = React.useState(false);
    const showExercises = () => setSubExercises(!subExercises);
  return (
    <>
      <div onClick={showExercises}>{item.name}</div>
      <div>{subExercises &&
       item.exercises.map((item, index)=>{
        return (
        <div>{item.name}</div>
        )
        
      })
      }   
      </div>
     
     
    </>
  );
};

export default Exercises;
