import React from "react";
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  idMeal: string;
  strMeal: string;

}

interface SearchResultListProps {
  results: SearchResult[];
}

const SearchResultList: React.FC<SearchResultListProps> = ({ results }) => {
  console.log(results); 

  const navigate = useNavigate();
  const handleSearchedMealClick = (idMeal: string) =>{
      navigate(`/RecipeInfo/${idMeal}`);
  }

  return (
    <div className="div bg-[#FFFFF] shadow-lg rounded-sm pl-2 max-h-60 overflow-y-auto">
      {results && results.length > 0 ? (
        results.map((result: SearchResult, id: number) => (
          <div 
          key={id} 
          style={{cursor: 'pointer'}} 
          onClick={() => handleSearchedMealClick(result.idMeal)}>{result.strMeal}</div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchResultList;
