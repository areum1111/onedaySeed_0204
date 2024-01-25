import { Link } from "react-router-dom";
import BasicLaylout from "../../layouts/BasicLayout";
import "./LoginForm.css"

const HostLoginPage = () => {

  return(
    <>

<BasicLaylout>
<div className="loginBox">
        <h1>로그인</h1>

            <span className="formName">사업자번호</span>
            <input className="formInfo" type="text" id="id_val" placeholder="사업자번호를 입력해주세요" />
       
            <span className="formName">비밀번호</span>
            <input className="formInfo" type="password" id="password_val" placeholder="비밀번호를 입력해주세요"/>

        <div className="loginBtn">
            <button className="s_bt" type="" onClick={(e) => this.submitClick(e)}>로그인</button>
        </div>
        <Link to={"/login"} className="another-login">게스트로 로그인하기</Link>



      <span className="choiceNewmember">아직 회원이 아니신가요?</span>
      <div className="newmember">
          <button><Link to={"/newHost"}>호스트 회원가입</Link></button>
          <button><Link to={"/newUser"}>게스트 회원가입</Link></button>
      </div>

      </div>
 </BasicLaylout>
    </>
  )
}
export default HostLoginPage;