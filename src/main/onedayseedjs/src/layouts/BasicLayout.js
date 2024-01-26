import { Link } from "react-router-dom";
import "./basicLayout.css"
import BasicMenu from "../components/menus/BasicMenu.js";
import {useSelector} from "react-redux";
import useCustomLogin from "../hooks/useCustomLogin";

const BasicLayout = ({children}) => {

    const {doLogout, moveToPath} =useCustomLogin()

 const handleClickLogout =()=>{
        doLogout()
     alert("로그아웃되었습니다.")
     moveToPath("/")
 }

    const loginState = useSelector(state => state.loginSlice)
  return(
    <>
    
    <header>
    <nav className="navbar navbar-expand-lg" id="nav" >
    <div className="container-fluid" id="nav-form">
      <Link to = {'/'} className="navbar-brand" id='logo'>OnedaySeed</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      < ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/about'} className="nav-link active" aria-current="page" >About Us</Link>
        </li>

          {/*로그인한 사용자에게만 보이게*/}
          {loginState.id ?
          <>
        <li className="nav-item">
          <Link to={'/mypage'} className="nav-link">My Page</Link>
        </li>
      </>
        :<></>}

          {/*로그인한 사용자에게만 보이게*/}
          {loginState.id ?
              <>
                  <li className="nav-item">
                      <a onClick={handleClickLogout} className="nav-link">Logout</a>
                  </li>
              </>
              :<></>}



        {/* 로그인 전 사용자에게 '로그인' 보이게 */}
          { ! loginState.id?
              <>
        <li className="nav-item">
          <Link to={"/user/login"} className="nav-link disabled" aria-disabled="true" >Login</Link>
        </li>
              </>: <></> }

          
      </ul>
      <form class="d-flex" role="search">
        <input className="form-control me-2 " id="search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success " id='search-btn' type="submit">Search</button>
      </form>
    </div>
  </div>
 </nav>
 <hr/>
    </header>


          <main>
            {children}
          </main>

    <footer>
    <hr/>
      <div className="footer-body">
        <span><b>(주)원데이씨드</b> <br/>
        <span className="our-info">서울시 종로구 인사동길 12 15층 <br/>
         사업자등록번호 : 135-87-***** | 통신판매업 : 신고번호 제2024-서울종로-987**호  <br/>
         </span> <br/>
         <span className="not-host">(주)원데이씨드는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.</span>
        </span>
        <br/><br/><br/><br/>
      </div>   
    </footer>


    </>

  )
}
export default BasicLayout;