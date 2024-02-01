import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecipeInfo from './components/recipeInfo';
import Meals from './meals'

export default function App() {

  return (
   <>
 
     
          <Routes>
            <Route path="/" element={<Meals />} />
             <Route path="/RecipeInfo/:MealId" element={<RecipeInfo />} />
          </Routes>
    
    </>
  );
}
