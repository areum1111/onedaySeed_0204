import React,{Component} from "react";
import './login.css';
import axios from "axios";
import cookie from 'react-cookies';
import Swal from 'sweetalert2';
import $ from 'jquery';
import { useState } from "react";


class HostLogin extends Component{

  // const [id,setId] = useState();
  // const [password,setPassword] = useState("");





    // submitClick = (e) => {
    //     this.id_val = $('#id_val').val();
    //     this.password_val = $("#password_val").val();
    //     if(this.id_val === '' || this.password_val === ''){
    //         this.sweetalert('아이디와 비밀번호를 확인해주세요','','info','닫기')
    //     }else{
    //       axios.post('/api/Loginform?type=signin',{
    //         is_id: this.id_val,
    //         is_password: this.password_val
    //       })
    //       .then(res => {
    //         var userid = res.data.json[0].userId
    //         var username = res.data.json[0].userName
    //         var userpassword = res.data.json[0].userPassword

    //         if(userid != null && userid != ''){
    //           this.sweetalert('로그인이 되었습니다.','','info','닫기')
    //         }else{
    //           this.sweetalert('이메일과 비밀번호를 확인해주세요.','','info','닫기')
    //         }
    //       })
    //       .catch(error => {this.sweetalert('이메일과 비밀번호를 확인해주세요.','','info','닫기')});
    //     }
    // }


    // sweetalert =(title, contents, icon, confirmButtonText) => {
    //   Swal.fire({
    //     title: title,
    //     text: contents,
    //     icon: icon,
    //     confirmButtonText: confirmButtonText
    //   })
    // }


  render(){
    return(
      <>
      
      <div className="loginBox">
        <h1>로그인</h1>


            <span className="formName">ID</span>
            <input className="formInfo" type="text" id="id_val" placeholder="사업자번호를 입력해주세요" />
       
            <span className="formName">Password</span>
            <input className="formInfo" type="password" id="password_val" placeholder="비밀번호를 입력해주세요"/>

        <div className="loginBtn">
            <button className="s_bt" type="" onClick={(e) => this.submitClick(e)}>로그인</button>
        </div>
        <a href="#!" className="host-login">게스트로 로그인하기</a>



      <span className="choiceNewmember">아직 회원이 아니신가요?</span>
      <div className="newmember">
          <button><a href="#" >호스트 회원가입</a></button>
          <button><a href="#">게스트 회원가입</a></button>
      </div>

      </div>

      </>
    )
  }
}
export default HostLogin;