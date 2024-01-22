// App.tsx

import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
import LandingImage from './images/pasta.png';
import RecipeInfo from './components/recipeInfo';
import Meals from './meals'

const ExploreButton = () => (
  <button
    type='submit'
    className="text-[#FFFF] bg-primary right-2 py-2 px-4 rounded-lg text-md mt-6"
  >
    Explore
  </button>
);

export default function App() {
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

  return (
   <>
 
      <div className="flex flex-col items-center justify-center">
        <NavBar />

        <div className="mt-2">
          <SearchBar placeholder={'Search Recipe'} />
        </div>

        <div className="grid grid-cols-2 pt-8 gap-20">
          <div className="col-span-1">
            <h2 className="text-4xl font-bold text-primary">Find Recipes</h2>
            <h3 className="text-1xl p-2">
              Find your Best Cooking Recipes, Search, Save and Prepare! <br />
              Enjoy Your Special Delicious Meal.
            </h3>
            <ExploreButton />
          </div>

          <div className="col-span-1">
            <img src={LandingImage} alt='landingimage' />
          </div>
        </div>

          <Routes>
              <Route path="/" element={<Meals />} />
              <Route path="/:MealId" element={<RecipeInfo />} />
          </Routes>
      </div>
    </>
  );
}
