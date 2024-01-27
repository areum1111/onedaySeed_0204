import React,{Component} from "react";
//import ReactPlayer from 'react-player/lazy';
import './main.css';
import '../img/painting.jpg';

class Main extends Component{

  render(){
    return(
      <>
      
      <div className="video-box">
        <video muted autoPlay loop>  
          <source src={require('../video/cupcakes.mp4')} type="video/mp4"/>
        </video>
        <div className='logo'>


        <nav class="navbar navbar-expand-lg" >
      <div class="container-fluid" id="nav-form">
        <a className="navbar-brand" id='logo' href="#!">OnedaySeed</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" id="nav-a1" aria-current="page" href="#!">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-a2" href="#!">My Page</a>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
          
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
          <li class="nav-item">
            <a class="nav-link disabled" id="nav-a3" aria-disabled="true">Login</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input className="form-control me-2 " id="search-input" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline" id='search-btn' type="submit">Search</button>
        </form>
      </div>
    </div>
   </nav> 











        
          <h1 className="logo-title">OnedaySeed,<br/>일상에 '즐거움'의 <br/>씨앗을 심다</h1>
             </div >
      </div> 
      {/* <ReactPlayer
                    className='react-player'
                    url={'../img/cookies.mp4'}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='500px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                /> */}
      
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

      {/* <div className="review-box">
        <div className="review-header">
          <h3>찐후기가 증명하는 <br/>
          실패 확률 0% 클래스!</h3>
        </div>
        <div className="review-cover review1"></div>    
        <div className="review-cover review2"></div> 
      </div> */}

      <div className="mbti-box">
          <a href="https://silverzero2.github.io/MBTI_Test_job/"><div className="mbti mbti-img">나에게 찰떡인 클래스 찾으러 가기!</div></a>
      </div>

     </div>


     {/* <div class="container text-center">

  <div class="row">
    <div class="col-8">

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

    </div>
    <div class="col-4">

    <div className="mbti-box">
          <a href="https://silverzero2.github.io/MBTI_Test_job/"><div className="mbti mbti-img">나에게 찰떡인 클래스 찾으러 가기!</div></a>
      </div>

    </div>
    
  </div>
</div> */}
      </>
    )
  }
}
export default Main;