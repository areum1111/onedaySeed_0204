import React,{Component} from "react";
import './purchaseHistory.css'

class PurchaseHistoryPage extends Component{

  render() {
    return (
      <>
       
      <div className="purchaseBox">
         <h1>구매내역</h1>
        <hr/>
        <div className="class-img class-info"></div>
        <h3 className="class-name">유산소 끝판왕! 너도 할 수 있어, 스쿼시! </h3>
        <span className="class-date">2024년 1월 15일 19:00</span>
        <span className="class-count">구매 수량 : 2</span>
        <button className="class-status">구매 취소</button>
      </div>
      </>
    )
  }

}
export default PurchaseHistoryPage;