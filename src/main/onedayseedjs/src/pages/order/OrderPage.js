import React, {Component, useEffect, useState} from "react";
import './order.css'
import BasicLaylout from "../../layouts/BasicLayout";
import axios from "axios";

const OrderPage = () =>{

    const [orderItems, setOrderItems] = useState([]);
    const [cancelledOrders, setCancelledOrders] = useState(new Set());

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/order');
            setOrderItems(response.data);
        } catch (error) {
            console.error('Error fetching cart details:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    // 구매 취소

    const cancelHandler= async (orderId)=>{
        try{
            await axios.delete(`/api/order/${orderId}`,{status:"구매 취소"});
            setCancelledOrders(new Set([...cancelledOrders, orderId]));
        }catch (error) {
            console.error('Error canceling order:', error);
        }
    }


        return (
            <>
                <BasicLaylout>
                <div className="purchaseBox">
                    <h1>구매내역</h1>
                    <hr/>
                    <div className="class-img class-info"></div>
                    <h3 className="class-name">유산소 끝판왕! 너도 할 수 있어, 스쿼시! </h3>
                    <span className="class-date">2024년 1월 15일 19:00</span>
                    <span className="class-count">구매 수량 : 2</span>
                    <button className="class-status"
                            disabled={cancelledOrders.has(orderItems)}
                            onClick={() => cancelHandler(orderItems)}>
                        {cancelledOrders.has(orderItems) ? '구매 취소 완료' : '구매 완료'}
                    </button>
                </div>
                </BasicLaylout>
            </>
        )

}
export default OrderPage;