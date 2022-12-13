import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Categories from "./Categories";
import Preloader from "./preloader/Preloader";


export default function Diary() {
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [buttonOpen, setButtonOpen] = React.useState(true);
  const onClickCategory = () => {
    setCategoryOpen(!categoryOpen);
    setButtonOpen(!buttonOpen);
  }
  const onClickCategoryButton = () => {
    setButtonOpen(true);
    setCategoryOpen(false)
  }

  return (
    <>
      <div>
    
        {buttonOpen && (
          <div>
            <h1>Тренировка не найдена</h1>
            <AiFillPlusCircle onClick={onClickCategory} />
          </div>
        )
        }
      </div>
      {categoryOpen && (
        <>
          <Categories /> <button onClick={onClickCategoryButton}>Назад</button>
        </>
      )}
    </>
  );
}
