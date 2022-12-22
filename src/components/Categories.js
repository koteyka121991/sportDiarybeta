import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../redux/slices/isLoadingSlice';
import Exercises from './Exercises';
import Preloader from './preloader/Preloader';
import axios from 'axios';
import { setExercises } from '../redux/slices/filterSlice';


export default function Categories() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.isLoading);
  const { exercises } = useSelector((state) => state.filter);

  React.useEffect(() => {
    axios.get('https://6392d088ab513e12c5fa0427.mockapi.io/ExercisesData')
      .then(response => {
        dispatch(setExercises(response.data));
        dispatch(setIsLoading(false));
      })
  }, [])



  return (
    <>
      <ul>
        {isLoading ? <Preloader />
          : exercises.map((item, index) => {
            return <Exercises item={item} key={index} />
          })
        }
      </ul>
    </>
  )
}
