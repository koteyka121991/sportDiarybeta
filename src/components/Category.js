import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../redux/slices/isLoadingSlice';
import Exercises from './Exercises';
import Preloader from './preloader/Preloader';


export default function Category() {
  // const dispatch = useDispatch();
  // const {isLoading}= useSelector((state)=>state.isLoading);
  const [exercises, setExercises] = React.useState([]);
  // const [categoryId, setCategoryId] = React.useState([]);
  const categories = [
    'Ноги',
    'Руки',
    'Грудь',
    'Плечи'
  ]
  // const[isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://639098ef65ff41831118e35d.mockapi.io/Exercisesa')
      .then((response) => response.json())
      .then((json) => {
        setExercises(json);
        // dispatch(setIsLoading(false));
      })
  }, [])
  return (
    <>
 <ul>

  
     {categories.map((cat, i) => (
          <li key={cat}  onClick={() => onClickCat(i)} className={value === i ? 'active' : ''}>{cat}</li>
        ))}
 </ul>

 
    
      
  
    </>



  )
}
