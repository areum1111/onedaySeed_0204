import { RouterProvider} from "react-router-dom";
import React,{Component} from "react";
import root from "./router/root";


class App extends Component{
  render(){
    return (
        <>
        <RouterProvider router={root}/>
        </>
    );
  }
}

export default App;
