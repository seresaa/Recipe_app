import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MealItem from './components/mealItem';
import RecipeIndex from './components/recipeIndex';
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
import LandingImage from './images/pasta.png';
import SearchResultList from './components/searchResultList'

interface SearchResult {
  idMeal: string;
  strMeal: string;
}

const ExploreButton = () => (
  <button
    type='submit'
    className="text-[#FFFF] bg-primary right-2 py-2 px-4 rounded-lg text-md mt-6"
  >
    Explore
  </button>
);

const Meals = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [results, setResults] = useState<SearchResult[]>([]);
  
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
  <div className="flex flex-col items-center justify-center p-6">
  <NavBar />

  <div className="mt-2">
    
  <SearchBar placeholder={'Search Recipe'} setResults={setResults} />
  <SearchResultList results={results} />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 md:gap-20">
  <div className="md:col-span-1">
    <h2 className="text-4xl font-bold text-primary">Find Recipes</h2>
    <h3 className="text-1xl p-2">
      Find your Best Cooking Recipes, Search, Save and Prepare! <br />
      Enjoy Your Special Delicious Meal.
    </h3>
    <ExploreButton />
  </div>

  <div className="md:col-span-1">
    <img src={LandingImage} alt='landingimage' className="w-full h-auto" />
  </div>
</div>

  <div className="flex-cols justify-start">
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


  </div>

  
)
}

export default Meals;