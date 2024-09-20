import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, ) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rp{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rp{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>SubTotal</p>
              <p>Rp.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Tax</p>
              <p>Rp.{getTotalCartAmount()===0?0:1000}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <p>Rp.{getTotalCartAmount()===0?0:getTotalCartAmount()+1000}</p>
            </div>           
          </div>
          <button onClick={()=>navigate('/order')}>Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Masukan Promocode</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
