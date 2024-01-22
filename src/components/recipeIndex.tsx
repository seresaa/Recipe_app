// RecipeIndex.tsx
import React from "react";

interface RecipeIndexProps {
  alphaIndex: (alpha: string) => void;
}

const RecipeIndex: React.FC<RecipeIndexProps> = ({ alphaIndex }) => {
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  return (
    <>
      {alpha.map(item => (
        <div className="numBox" key={item} onClick={() => alphaIndex(item)}>
          <h3 className="bg-primary p-3 rounded-lg text-[#FFFF] font-bold hover:bg-[#146C3C]">
            {item}
          </h3>
        </div>
      ))}
    </>
  );
};

export default RecipeIndex;
