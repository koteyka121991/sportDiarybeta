import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Category from "./Category";
import { ExercisesData } from "./ExercisesData";

export default function Diary() {
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const showCategory = () => setCategoryOpen(!categoryOpen);
  return (
    <>
      <div>
        <AiFillPlusCircle onClick={showCategory} />
      </div>
      {categoryOpen && <Category />}
    </>
  );
}
