import React, { useEffect, useState } from 'react';
import NavBar from './navBar';
import { useParams } from 'react-router-dom';


interface Meal {
  strMealThumb: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;

}

const RecipeInfo = () => {
  const [item, setItem] = useState<Meal | null>(null);
  const { MealId } = useParams(); 

    useEffect(() => {
      async function getData() {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
      
          const data = await response.json();
          console.log('API Response:', data);
      
         
          setItem(data.meals && data.meals.length > 0 ? data.meals[0] : null);
        } catch (error) {
          console.error('Error fetching data:', error);
          setItem(null);
        }
      }

    getData();
  }, [MealId]);


  return (
    <>
      <div>
       
        {item ? (
          <>
           <NavBar />

           <div className="m-10">
              <div className="grid grid-cols-3">
                  
                  <img
                    className="rounded-md pr-6 flex"
                    src={item.strMealThumb}
                    alt="Meal"
                  />

                  <div className="div">
                    <h1 className="font-bold text-3xl text-primary">{item.strMeal}</h1>
                    <h3 className="text-2xl pb-4">{item.strCategory}, {item.strArea}</h3>
                    <h4 className="text-black">{item.strTags}</h4>
                    
                    <h4 className='pt-10 text-primary font-bold'>Instructions:</h4>
                    <h4 className='pt-10'>{item.strInstructions}</h4>

                  </div>

                  

                  <div className="pl-20">
                    <h3 className='font-bold text-primary text-2xl'>Ingridients</h3>
                    <ul>
                        {Array.from({ length: 20 }, (_, index) => index + 1).map((index) => {
                          const ingredient = item[`strIngredient${index}` as keyof Meal];
                          const measurement = item[`strMeasure${index}` as keyof Meal];

                          if (ingredient) {
                            return (
                              <li key={index}>
                                {ingredient}
                                {measurement && ` - ${measurement}`}
                              </li>
                            );
                          }
                          return null;
                        })}
                    </ul>
                    
                  </div>
              
       
                </div>
                
                <h4 className='pt-10 pb-10 text-primary font-bold'>Youtube Instruction</h4>
                    {item.strYoutube && (
                  <iframe
                    width="1000"
                    height="500"
                    src={`https://www.youtube.com/embed/${item.strYoutube.split('v=')[1]}`}
                    title="YouTube Video Preview"
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
           </div>
           
          </>
        ) : (
          <p>No meal data found for the provided MealId.</p>
        )}
      </div>
    </>
  );
}

export default RecipeInfo;
