// RecipeInfo.tsx

import React from 'react';
import NavBar from './navBar';
import { useParams } from 'react-router-dom';


const RecipeInfo = () => {
    const {MealId} = useParams();
  return (
    <>
        <div>
          
            <h1>RecipeInfo {MealId}</h1>
        </div>
    </>
   
  )
}

export default RecipeInfo;
