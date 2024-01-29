import {Link, useNavigate} from "react-router-dom";
import BasicLaylout from "../../layouts/BasicLayout";
import "./LoginForm.css"
import {useEffect, useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

const HostLoginPage = () => {
    const [login,setLogin] = useState({});

    const fetchData = async()=>{
        try{
            const response = await axios.get("/api/hostLogin");
            setLogin(response.data);
        }catch (error){
            console.log('ERROR FETCHING HOST LOGIN : ', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);


    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({
            ...prevLogin,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) =>{
        // 새로고침 방지
        e.preventDefault();

        try{
            const response = await axios.post("/api/hostLogin",{

                hostNum: login.hostNum,
                password: login.password
            });

            if (response.data.alertMessage) {
                // 에러 또는 성공 메시지가 있으면 alert 창 띄우기
                alert(response.data.alertMessage);
            }

            if (response.data.successMessage) {
                console.log('Form submitted successfully:', response.data.successMessage);
                fetchData();
                navigate("/");
            }
        } catch (error) {
            if (error.response) {
                // 서버 응답이 에러인 경우
                console.error('Error submitting form:', error.response.data);
                // 클라이언트에서 에러 메시지 처리 로직 추가
            } else if (error.request) {
                // 요청이 전혀 이루어지지 않은 경우
                console.error('Request error:', error.request);
            } else {
                // 기타 에러
                console.error('Unexpected error:', error.message);
            }
        }

    }

  return(
    <>

    <BasicLaylout>
    <div className="loginBox">
            <h1><b>로그인</b></h1>

                <Form onSubmit={handleSubmit}>
                <span className="formName">사업자번호</span>
                <input className="formInfo" type="text" id="id_val" name="hostNum" onChange={handleInputChange} value={login.hostNum} placeholder="사업자번호를 입력해주세요" />

                <span className="formName">비밀번호</span>
                <input className="formInfo" type="password" id="password_val" name="password"  onChange={handleInputChange} value={login.password}placeholder="비밀번호를 입력해주세요"/>

            <div className="loginBtn">
                <button className="s_bt" type="submit" >로그인</button>
            </div>
                </Form>

            <Link to={"/user/login"} className="another-login">게스트로 로그인하기</Link>

          <span className="choiceNewmember">아직 회원이 아니신가요?</span>
          <div className="newmember">
              <button className="another-btn"><Link to={"/host/new"}>호스트 회원가입</Link></button>
              <button className="another-btn"><Link to={"/user/new"}>게스트 회원가입</Link></button>
          </div>

          </div>
     </BasicLaylout>
    </>
  )
}
export default HostLoginPage;