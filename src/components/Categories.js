import React from 'react'
import Exercises from './Exercises';
import Preloader from './preloader/Preloader';


export default function Categories() {
  const [exercises, setExercises] = React.useState([]);
  const[isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://6392d088ab513e12c5fa0427.mockapi.io/ExercisesData')
      .then((response) => response.json())
      .then((json) => {
        setExercises(json);
        setIsLoading(false);
      })
  }, [])
  return (
    <>
    
    {isLoading ?<Preloader/>
    :exercises.map((item, index) => {
      return <Exercises item={item} key={index} />
    })

    }
      
  
    </>



  )
}
