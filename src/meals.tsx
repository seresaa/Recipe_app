import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MealItem from './components/mealItem';
import RecipeIndex from './components/recipeIndex';


const Meals = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.meals);
          setItem(data.meals);
          setShow(true);
        });
    }, [url]);
  
    const setIndex = (alpha: string) => {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
  
return(
    <div className="justify-start">
    <h2 className='pl-10 text-primary font-bold text-xl'>Popular Recipes</h2>
    <div className="grid grid-cols-4 bg-[#F4F4F4] w-100 m-6">
      {
        show ? <MealItem data={item || null} /> : "Not found"
      }
    </div>
    <div className="flex gap-2 text-1xl items-center justify-center m-6">
      <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
    </div>
  </div>
)
}

export default Meals;