import React from 'react'
import styled from 'styled-components';
import {   
    Link,
  } from 'react-router-dom';
import Exercises from './Exercises';
import { ExercisesData } from './ExercisesData';

export default function Category() {
  return (
<>

{ExercisesData.map((item, index)=>{
return <Exercises item={item} key={index}/>
})}
</>
    
    
    
  )
}
