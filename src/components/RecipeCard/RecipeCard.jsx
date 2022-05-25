import React from "react";

const RecipeCard = ({ item }) => {
  return (
    <li key={item.id} className="ingredient_item">
      <input
        type="checkbox"
        name="ingredient_checkbox"
        className="ingredient_checkbox"
        defaultChecked
      />
      <input
        type="number"
        name="quantity"
        min="1"
        value={1}
        readOnly
        className="ingredient_quantity ingredient_quantity_{index}"
      />
      <div className="ingredient_details">
        <h2 className="ingredient_name">{item.name} </h2>
        <p className="ingredient_brand">${item.brand ? item.brand : "N/A"}</p>
        <p className="ingredient_price ingredient_price_{index}">
          ${item.price}/kg
        </p>
      </div>
      <p className="ingredient_price_final ingredient_price_final_{index}">
        ${item.price}€
      </p>
    </li>
  );
};

export default RecipeCard;
