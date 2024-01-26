import BasicLaylout from "../../layouts/BasicLayout";
import React, {useEffect, useState} from "react";
import "./loginForm.css"
import axios from "axios";

const NewUserPage=()=>{

    const [newMember,setNewMember] = useState({});

    const fetchData = async ()=> {
        try{
            const response = await axios.get("/api/new");
            setNewMember(response.data)
        }catch(error){
            console.log("Error fetching new user info : ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 방지

        try {
            const response = await axios.post("/api/new", {
                userId: newMember.userId,
                userPassword: newMember.userPassword,
                userName: newMember.userName,
                userPhoneNum: newMember.userPhoneNum
            });

            if (response.data.alertMessage) {
                alert(response.data.alertMessage);
            }
            if (response.data.successMsg) {
                console.log("'Form submitted successfully:', response.data.successMessage");
                fetchData();
            }
        }catch (error){
            if(error.response){
                // 서버 응답이 에러인 경우
                console.error('Error submitting form:', error.response.data);
            }else if (error.request) {
                // 요청이 전혀 이루어지지 않은 경우
                console.error('Request error:', error.request);
            } else {
                // 기타 에러
                console.error('Unexpected error:', error.message);
            }
        }
    };




    return(
      <BasicLaylout>
      <div class="loginBox">
        <h1>회원가입</h1>
        
            <span className="formName">아이디</span>
            <input className="formInfo" type="text" id="id_val" placeholder="아이디를 입력해주세요" value={newMember.userId}/>
       
            <span className="formName">비밀번호</span>
            <input className="formInfo" type="text" id="password_val" placeholder="비밀번호를 입력해주세요" value={newMember.userPassword}/>

            <span className="formName" >이름</span>
            <input className="formInfo" type="text" id="name_val" placeholder="이름을 입력해주세요" value={newMember.userName} />

            <span className="formName">전화번호</span>
          <input className="formInfo" type="text" id="phoneNum_val" placeholder="전화번호를 입력해주세요" value={newMember.userPhoneNum} />

        <div className="loginBtn">
          <button type="submit" >회원가입</button>
        </div> 

      </div>
</BasicLaylout>
      
    );
    }
export default NewUserPage;