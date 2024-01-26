import React,{Component} from "react";
import './login.css';

class UserNewMemberPage extends Component{

//   constructor (props) {
//     super(props);
//     this.state = {
//     }
// }
//
// submitClick =async(type,e) => {
//   this.id_val_ckeck = $('#id_val').val();
//   this.password_val_check = $('#password_val').val();
//   this.name_val_check =$('#name_val').val();
//   this.phone1_val_checker = $('#phone1_val').val();
//   this.phone2_val_checker = $('#phone2_val').val();
//   this.phone3_val_checker = $('#phone3_val').val();
//
//   this.fnValidate = (e) => {
//     var pattern1 = /[0-9]/; //숫자
//     var pattern2 = /[a-zA-Z]/; //영문자 대소문자, 숫자로만 구성
//     var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;
//
//     if(this.id_val_ckeck === ''){
//       this.sweetalert('아이디를 입력해주세요.','','info','닫기')
//       return false;
//     }
//     if(this.password_val_check === ''){
//       this.sweetalert('비밀번호를 입력해주세요.','','info','닫기')
//       return false;
//     }
//     if(this.password_val_checker !=='') {
//       var str = this.password_val_checker;
//       if(str.search(/\s/) !== -1) {
//           $('#password_val').addClass('border_validate_err');
//           this.sweetalert('비밀번호 공백을 제거해 주세요.', '', 'info', '닫기')
//           return false;
//       }
//       if(!pattern1.test(str) || !pattern2.test(str) || !pattern3.test(str)
//       || str.length < 8 || str.length > 16) {
//           $('#password_val').addClass('border_validate_err');
//           this.sweetalert('8~16자 영문 대 소문자\n숫자, 특수문자를 사용하세요.', '', 'info', '닫기')
//           return false;
//       }
//     }
//   $('#password_val').removeClass('border_validate_err');
//
//    if(this.name_val_checker ==='') {
//     $('#name_val').addClass('border_validate_err');
//     this.sweetalert('성명을 입력해주세요.', '', 'info', '닫기')
//     return false;
//     }
//     if(this.name_val_checker.search(/\s/) !== -1) {
//         $('#name_val').addClass('border_validate_err');
//         this.sweetalert('성명에 공백을 제거해 주세요.', '', 'info', '닫기')
//         return false;
//     }
//     $('#name_val').removeClass('border_validate_err');
//
//
//     };



  render(){
    return(
      
      <div className="loginBox">
        <h1>회원가입</h1>
        
            <span className="formName">아이디</span>
            <input className="formInfo" type="text" id="id_val" placeholder="아이디를 입력해주세요"
            onKeyPress={this.idKeyPress}/>
       
            <span className="formName">비밀번호</span>
            <input className="formInfo" type="text" id="password_val" placeholder="비밀번호를 입력해주세요"
            onKeyPress={this.passwordKeyPress}/>

            <span className="formName" >이름</span>
            <input className="formInfo" type="text" id="name_val" placeholder="이름을 입력해주세요" onKeyPress={this.nameKeyPress} />

            <span className="formName">전화번호</span>
            <select id="phone1_val" name="is_Userphone1" className="select_ty1">
                <option value="">선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
            </select>
            <span className="tel_dot">-</span>
             <input id="phone2_val" name="is_Userphone2" max="9999" maxlength="4" onChange={(e) => this.mustNumber("phone2_val")}/>
            <span className="tel_dot">-</span>
            <input id="phone3_val" name="is_Userphone3" max="9999" maxlength="4" onChange={(e) => this.mustNumber("phone3_val")}/>

        <div className="loginBtn">
          <button type="submit" >회원가입</button>
        </div> 
      
      
      </div>

      
    );
  }
}
export default UserNewMemberPage;