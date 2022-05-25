import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogout } from "../../redux/actions/authActions";
import RecipeCard from "../RecipeCard/RecipeCard";

const Crud = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://recipe-rissoto.vercel.app/recipe");
    const data = await response.json();
    return data || [];
  };

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const totalPrice = () => {
    let total = 0;
    data.ingredients?.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const recipeName = data.name;
  const shippint = data["shipping-cost"];

  const handleBuyBtn = () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertir tu compra!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comprarlo!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Comprado!", "Haz comprado tu rissoto de setas.", "success");
      }
    });
  };

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
          <p className="items_count">Items: {7}</p>
          <div className="subtotal_container">
            <p className="items_subtotal_text">subtotal</p>
            <p className="items_subtotal">${totalPrice()}</p>
            <p className="items_subtotal_2"></p>
          </div>
          <div className="shipping_container">
            <p className="shipping_text">Gastos de envío</p>
            <p className="shipping_cost">${shippint}</p>
          </div>
          <div className="total_container">
            <p className="total_text">Total</p>
            <p className="total_cost"> ${totalPrice() + shippint}</p>
          </div>
          <div className="buy_container">
            <button
              type="button"
              name="buyBtn"
              className="buyBtn"
              onClick={handleBuyBtn}
            >
              Comprar ingredientes ${totalPrice() + shippint}
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
