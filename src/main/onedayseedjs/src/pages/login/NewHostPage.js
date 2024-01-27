
import BasicLaylout from "../../layouts/BasicLayout";
import React, {useEffect, useState} from "react";
import "./LoginForm.css"
import axios from "axios";
import Form from "react-bootstrap/Form";

const NewHostPage = () =>{

    const [newMember,setNewMember] = useState({});

    const fetchData = async ()=> {
        try{
            const response = await axios.get("/api/hostNew");
            setNewMember(response.data)
        }catch(error){
            console.log("Error fetching new host info : ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember((prevNewMember) => ({
            ...prevNewMember,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 방지

        try {
            const response = await axios.post("/api/hostNew", {
                hostNum: newMember.hostNum,
                password: newMember.password,
                name: newMember.name,
                phoneNum: newMember.phoneNum,
                // userRole:newMember.userRole
            });

            if (response.data.alertMessage) {
                alert(response.data.alertMessage);
            }
            if (response.data.successMsg) {
                console.log("'Form submitted successfully:', response.data.successMessage");
                fetchData();
                setNewMember({});
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
      <>
      <BasicLaylout>
      <div class="loginBox">
        <h1>회원가입</h1>
        <Form onSubmit={handleSubmit}>
            <span className="formName">사업자번호</span>
            <input className="formInfo" type="text" onChange={handleInputChange} value={newMember.hostNum} />
       
            <span className="formName">비밀번호</span>
            <input className="formInfo" type="text" onChange={handleInputChange} value={newMember.password}/>

            <span className="formName">상호명</span>
            <input className="formInfo" type="text" onChange={handleInputChange} value={newMember.name}/>

            <span className="formName">전화번호</span>
            <input className="formInfo" type="text" onChange={handleInputChange} value={newMember.phoneNum}/>
        
        <div className="loginBtn">
          <button type="submit" >회원가입</button>
        </div> 
      </Form>
      
      </div>
      </BasicLaylout>
      </>
    )
  }

export default NewHostPage;