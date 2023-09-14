import React from "react";

function CategoryFilter({ categories, setSelectedCat }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(catName => {
        function handleClick() {
          setSelectedCat(catName)
        }

        return <button onClick={handleClick}>{catName}</button>
      })}
    </div>
  );
}

export default CategoryFilter;