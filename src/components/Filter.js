import React from "react";
import Item from "./Item";

function Filter({ onCategoryChange, displayedItems }) {
  return (
    <>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </>
  );
}

export default Filter;
