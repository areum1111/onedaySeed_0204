import {Link, useNavigate} from "react-router-dom";
import BasicLaylout from "../../layouts/BasicLayout";
import "./LoginForm.css"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {login as loginAction} from "../../slices/loginSlice";
import {Form} from "react-bootstrap";
import axios from "axios";
import useCustomLogin from "../../hooks/useCustomLogin";


const initState={
    userId:"",
    password:""
}
const UserLoginPage =()=>{

    const [login,setLogin] = useState({...initState});
    // const { doLogin } = useCustomLogin();

    const dispatch = useDispatch()

    const fetchData = async()=>{
        try{
            const response = await axios.get("/api/userLogin");
            setLogin(response.data);
        }catch (error){
            console.log('ERROR FETCHING USER LOGIN : ', error);
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

    const handleSubmit = async (e) => {

        // 새로고침 방지
        e.preventDefault();

        console.log(login.userId);
        console.log(login.password);

        try {
            const response = await axios.post("/api/userLogin", {
                userId: login.userId,
                password: login.password

            });
            // await doLogin(login);
            if (response.data.alertMessage) {
                // 에러 또는 성공 메시지가 있으면 alert 창 띄우기
                alert(response.data.alertMessage);
            }

            if (response.data.successMessage) {
                console.log('Form submitted successfully:', response.data.successMessage);
                // localStorage.setItem("isLoggedIn", JSON.stringify(response.data.isLoggedIn));

                dispatch(loginAction(response.data.isLoggedIn));
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
            <span className="formName">아이디</span>
            <input className="formInfo" type="text" id="id_val" placeholder="아이디를 입력해주세요" name="userId" value={login.userId} onChange={handleInputChange}></input>

            <span className="formName">비밀번호</span>
            <input className="formInfo" type="password" id="password_val" placeholder="비밀번호를 입력해주세요" name="password" value={login.password} onChange={handleInputChange}></input>



          <div className="loginBtn">
           <button className="s_bt" type="submit" >로그인</button>
            </div>
            {/*<input type="hidden" className="${_csrf.parameterName}" value="${_csrf.token}" />*/}
            {/*  토큰값 가져갈수있나..?  */}
            </Form>

        <Link to={"/host/login"} className="another-login">호스트로 로그인하기</Link>

      <span className="choiceNewmember">아직 회원이 아니신가요?</span>
      <div className="newmember">
          <button className="another-btn"><Link to={"/host/new"} >호스트 회원가입</Link></button>
          <button className="another-btn"><Link to={"/user/new"} >게스트 회원가입</Link></button>
      </div>

      </div>
      </BasicLaylout>
      </>
    )

}
export default UserLoginPage;




//    // const [loginParam, setLoginParam] = useState({})
//     // const {doLogin,moveToPath} = useCustomLogin()
//     //
//     //
//     // const dispatch = useDispatch()
//     // const navigate= useNavigate()
//     //
//     //     //동기화 호출
//     //     //dispatch(login(loginParam))
//     //
//     //     //비동기 호출
//     //     // dispatch(loginPostAsync(loginParam))//loginSlice의 비동기 호출
//     //     //     .unwrap()
//     //     //     .then(data => {
//     //     //         console.log("after unwrap")
//     //     //         console.log(data)
//     //     //         if(data.error){
//     //     //             alert("아이디와 비밀번호를 다시 확인해주세요!")
//     //     //         }else{
//     //     //             alert("로그인 성공")
//     //     //             navigate({pathname:"/"},{replace:true}) //뒤로 가기 했을때 로그인 화면 볼 수 없게
//     //     //         }
//     //     //     })
//     //
//     // const handleClickLogin = () =>{
//     //     //useCustomLogin 이용
//     //     doLogin(loginParam) //loginSlice의 비동기 호출
//     //         .then(data=>{
//     //             console.log(data)
//     //
//     //             if(data.error){
//     //                 alert("아이디와 비밀번호를 다시 확인해주세요!")
//     //             }else{
//     //                 alert("로그인 성공")
//     //                 moveToPath('/')
//     //             }
//     //         })
//     //
//     //         }