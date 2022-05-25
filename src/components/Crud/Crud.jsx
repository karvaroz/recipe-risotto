import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../redux/actions/authActions";
import RecipeCard from "../RecipeCard/RecipeCard";

const Crud = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://recipe-rissoto.vercel.app/recipe");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const recipeName = data.name;
  const shippint = data["shipping-cost"];

  return (
    <main>
      <div className="buy_container">
        <button className="buyBtn" onClick={() => dispatch(startLogout())}>
          Cerrar
        </button>
      </div>
      <div className="main_container">
        <div className="main_header">
          <h3>INGREDIENTES</h3>
          <h1>{recipeName} </h1>
        </div>
        <div className="main_selection">
          <a href="/#" className="checkAll">
            Seleccionar todo |
          </a>
          <a href="/#" className="uncheckAll">
            Deseleccionar todo
          </a>
        </div>
        <ul className="ingredients_list"></ul>
        <div className="main_bottom">
          <p className="items_count">Items:</p>
          <div className="subtotal_container">
            <p className="items_subtotal_text">subtotal</p>
            <p className="items_subtotal"></p>
            <p className="items_subtotal_2"></p>
          </div>
          <div className="shipping_container">
            <p className="shipping_text">Gastos de envío</p>
            <p className="shipping_cost">{shippint}</p>
          </div>
          <div className="total_container">
            <p className="total_text">Total</p>
            <p className="total_cost"></p>
          </div>
          <div className="buy_container">
            <button type="button" name="buyBtn" className="buyBtn">
              Comprar ingredientes{" "}
            </button>
          </div>
          <div className="prueba">
            {data.ingredients?.map((item, index) => (
              <RecipeCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crud;
