import React from "react";

import { categories } from "../utils/content"

const Category = ({selectCategory, setSelectCategory}) => {

  const buttonActive = document.querySelectorAll(".categoryBtn button");
  buttonActive.forEach((e)=>{
    e.addEventListener("click", () => {
      buttonActive.forEach((a) => {
        a.classList.remove("active")
        e.classList.add("active")
      })
    });
  });

  return (
    <div className="categoryBtn">
      {categories.map((category)=>(
          <button 
          //   style={{textDecoration:
          //     category.name === selectCategory ? 'underline' : 'none',
          // }}
            key = {category.name} 
            onClick={() => setSelectCategory(category.name)}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
      ))}
    </div>
  );
};

export default Category;
