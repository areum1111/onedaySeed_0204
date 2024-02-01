import React, { useState, useEffect } from 'react';
import CartList1 from './CartList1';
import './cartList.css';
import axios from "axios";
import BasicLayout from "../../layouts/BasicLayout"

function Cart() {

    return (
        <div>
            <BasicLayout>
            <h1 id="title">장바구니</h1>
              <CartList1 />
            </BasicLayout>
        </div>
    );
}

export default Cart;