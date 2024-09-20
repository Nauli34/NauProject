import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  const [selectedDay, setSelectedDay] = useState("");

  const handleSelectChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const resetForm = () => {
    setSelectedDay("");
  };

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Detail Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Kelas(Contoh X TJKT 1)' />

        <select value={selectedDay} onChange={handleSelectChange}>
          <option value="" disabled required>
             <b>Pilih Hari Pengantaran</b> 
          </option>
          <option value="Senin">+1(1 hari setelah dipesan)</option>
          <option value="Selasa">+2(2 hari setelah dipesan)</option>
          <option value="Rabu">+3(3 hari setelah dipesan)</option>
          <option value="Kamis">+4(4 hari setelah dipesan)</option>
          <option value="Jumat">+5(5 hari setelah dipesan)</option>
          <option value="Sabtu">+6(6 hari setelah dipesan)</option>
          <option value="Minggu">+7(7 hari setelah dipesan)</option>
        </select> 

        <button type="button" onClick={resetForm}>
          Reset Pilihan
        </button>
        <input type="text" placeholder='No Hp' />
      </div>
      <div className="place-order-right">
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
          <button>Checkout</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
