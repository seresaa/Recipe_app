import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

interface MealItemProps {
  data: { 
    strMealThumb: string;
    strMeal: string;
    idMeal: string;
 
  }[] | null;
}

const MealItem: React.FC<MealItemProps> = ({ data}) => {
  console.log(data);
  const navigate = useNavigate();

  const handleItemClick = (idMeal: string) => {
    navigate(`/RecipeInfo/${idMeal}`);
  };
  return (
    <>
      {!data
        ? "Not Found "
        : data.map((item) => {
            return (
              <div className="p-8 gap-4 h-70 rounded-md" key={item.strMeal}>
                <div className="h-70" key={item.idMeal} onClick={() => handleItemClick(item.idMeal)}>

                 
                  <img
                    className="rounded-md"
                    src={item.strMealThumb}
                    alt="Meal"
                  />
                  <h3 className="font-bold pt-6">{item.strMeal}</h3>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default MealItem;
