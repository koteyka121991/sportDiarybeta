import Categories from './components/Categories';
import Diary from './components/Diary';
import React from "react";
import DiaryTest from './components/DiaryTest';
import Header from './components/Header';
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom';
import TrainingLog from './pages/TrainingLog';
import CatalogExercises from './pages/CatalogExercises';

function App() {
  return (
    <div className="wrapper">
      <div className='container'>
        <Header />
        {/* <Diary/> */}
        {/* <DiaryTest /> */}
        <Routes>
          <Route path='/training' element={<TrainingLog />}></Route>
          <Route path='/exercises' element={<CatalogExercises />}></Route>
          <Route path="*" element={<TrainingLog  />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
