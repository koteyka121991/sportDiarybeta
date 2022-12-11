import React from "react";
import Exercises from "./Exercises";

const Categories = () => {
  const [cat, setCat] = React.useState();
  const [openPopup, setOpenPopup] = React.useState(false);

  const categories = ["Руки", "Спина", "Ноги", "Плечи", "Корпус"];
  let children = null;

  return (
    <>
      {categories.map((obj, i) => (
        <li key={obj.id} onClick={() => setCat(i)}>
          {obj}
         
            <ul className={cat === i ? 'active' : ''}>
              <li >                
                <Exercises />
              </li>
            </ul>
        
        </li>
      ))}
    </>
  );
};

export default Categories;
