
import BasicLaylout from "../../layouts/BasicLayout";
import React from "react";
import "./LoginForm.css"

const NewHostPage = () =>{


    
    return(
      <>
      <BasicLaylout>
      <div class="loginBox">
        <h1>회원가입</h1>
        <form>
            <span className="formName">사업자번호</span>
            <input className="formInfo" type="text" />
       
            <span className="formName">비밀번호</span>
            <input className="formInfo" type="text" />

            <span className="formName">상호명</span>
            <input className="formInfo" type="text" />

            <span className="formName">전화번호</span>
            <input className="formInfo" type="text" />
        
        <div className="loginBtn">
          <button type="submit" >회원가입</button>
        </div> 
      </form>
      
      </div>
      </BasicLaylout>
      </>
    )
  }

export default NewHostPage;