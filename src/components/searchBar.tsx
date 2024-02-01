import React, { ChangeEvent, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  idMeal: string;
  strMeal: string;
 
}

interface SearchBarProps {
  placeholder: string;
  setResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}


const SearchBar: React.FC<SearchBarProps> = ({ placeholder, setResults }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const fetchData = (value: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        if (json.meals) {
          const results: SearchResult[] = json.meals.map((meal: any) => {
            return {
              idMeal: meal.idMeal,
              strMeal: meal.strMeal,
            };
          });
          setResults(results);
         
        } else {
          console.log('No meals found');
       
          setResults([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  const handleBackspace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && input.length === 1) {
   
      setResults([]);
    }
  };

  return (
    <div className="relative flex-grow">
      <div className="flex items-center bg-[#F4F4F4] pl-3 rounded-md"> 
        <FaSearch className="mr-2 text-primary " /> 
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleBackspace}
          className="sm:min-w-[200px] sm:max-w-[700px] w-full md:w-1/3 pl-4 py-2 rounded-lg focus:outline-none bg-[#F4F4F4]"
        />
      </div>
    </div>
  );
  
};

export default SearchBar;
