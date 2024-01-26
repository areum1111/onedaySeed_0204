import React,{ Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import UserLogin from './login/UserLogin';
import HostLogin from './login/HostLogin';
// import UserNewMemberPage from './login/UserNewMemberPage';
import HostNewMemberPage from './login/HostNewMemberPage';
import PurchaseHistoryPage from '../pages/Order/PurchaseHistoryPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route,Routes } from 'react-router-dom';

class App extends Component{

  render(){
    return(
      <>
        <Header />
        {/* <Main /> */}
          {/* <UserLogin /> */}
          <HostLogin />
        {/*<UserNewMemberPage />*/}
        {/* <HostNewMemberPage /> */}
        {/* <PurchaseHistoryPage /> */}
        <Footer />
      </>
    )
  }

  // render(){
  //   return(
  //     <>
  //     <Routes>
  //       <Route path="/login" element={<Login/>}></Route>
  //     </Routes>
  //     </>
  //   )
  // }
  }


export default App;
