import BasicLaylout from "../layouts/BasicLayout";
import { Link } from 'react-router-dom';
import '../basic/video/cupcakes.mp4';
import './Main.css'

const MainPage = ()=>{
  return (

    <>
        <BasicLaylout>
      <div className="video-box">
        <video muted autoPlay loop>  
          <source src={require('../basic/video/cupcakes.mp4')} type="video/mp4"/>
        </video>
        <div className='logo'>


 {/*       <nav class="navbar navbar-expand-lg" id="nav" >*/}
 {/*   <div class="container-fluid" id="nav-form">*/}
 {/*     <Link to = {'/'} className="navbar-brand" id='logo'>OnedaySeed</Link>*/}
 {/*     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
 {/*     <span class="navbar-toggler-icon"></span>*/}
 {/*   </button>*/}
 {/*   <div class="collapse navbar-collapse" id="navbarSupportedContent">*/}
 {/*     <ul class="navbar-nav me-auto mb-2 mb-lg-0">*/}
 {/*       <li class="nav-item">*/}
 {/*         <Link to={'/about'} class="nav-link active" aria-current="page" >About Us</Link>*/}
 {/*       </li>*/}
 {/*       <li class="nav-item">*/}
 {/*         <Link to={'/mypage'} class="nav-link">My Page</Link>*/}
 {/*       </li>*/}
 {/*       <li class="nav-item">*/}
 {/*         <Link to={'/login'} class="nav-link disabled" aria-disabled="true">Login</Link>*/}
 {/*       </li>*/}
 {/*     </ul>*/}
 {/*     <form class="d-flex" role="search">*/}
 {/*       <input className="form-control me-2 " id="search-input" type="search" placeholder="Search" aria-label="Search" />*/}
 {/*       <button className="btn btn-outline-success " id='search-btn' type="submit">Search</button>*/}
 {/*     </form>*/}
 {/*   </div>*/}
 {/* </div>*/}
 {/*</nav>*/}




          <h1 className="logo-title">OnedaySeed,<br/>일상에 '즐거움'의 <br/>씨앗을 심다</h1>
             </div >
      </div>      
     <div className="body-box">
      <div className="category-box">
       <button type="button" className="category-header">카테고리</button>
          <br/> 
          <button type="button" className="btn btn-success">요리</button>
          <button type="button" className="btn btn-success">미술</button>
          <button type="button" className="btn btn-success">음악</button>
          <br/>
          <button type="button" className="btn btn-success">베이킹</button>
          <button type="button" className="btn btn-success">운동</button>
          <button type="button" className="btn btn-success"><b>전체보기</b></button>
      </div>

      <div className="mbti-box">
          <a href="https://silverzero2.github.io/MBTI_Test_job/"><div className="mbti mbti-img">나에게 찰떡인 클래스 찾으러 가기!</div></a>
      </div>
     </div>
        </BasicLaylout>
      </>

  );
}

export default MainPage;