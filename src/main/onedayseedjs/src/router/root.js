import { Suspense,lazy} from "react";
import CartList from "../pages/cart/CartList1";
const { createBrowserRouter} = require("react-router-dom");


const Loading = <div>Loading...</div>
const Main =  lazy(() => import("../pages/MainPage"))
const About =  lazy(() => import("../pages/AboutPage"))
const UserLogin = lazy(() => import("../pages/login/UserLoginPage"))
const NewUser = lazy(() => import("../pages/login/NewUserPage"))
const Order = lazy(() => import ("../pages/order/OrderPage"))
const HostLogin = lazy(() => import("../pages/login/HostLoginPage"))
const NewHost = lazy(() => import("../pages/login/NewHostPage"))
const UserProfile = lazy(() => import("../pages/profile/UserProfile"))
const HostProfile = lazy(() => import("../pages/profile/HostProfile"))
const Cart = lazy(() => import("../pages/cart/Cart"))
const LessonForm = lazy(() => import("../pages/lesson/LessonForm"))
const Cart1 = lazy(() => import("../pages/cart/Cart1"))

const My = lazy(() => import("../pages/MyPage"))
const root = createBrowserRouter([

  {
    path: "/",
    element: <Suspense fallback={Loading}><Main/></Suspense>
  },
  {
    path: "/about",
    element: <Suspense fallback={Loading}><About/></Suspense> 
  },
  {
    path:"/user/login",
    element: <Suspense fallback={Loading}><UserLogin/></Suspense>,

  },
  {
    path: "/newUser",
    element: <Suspense fallback={Loading}><NewUser/></Suspense>
  },
  {
    path: "/host/login",
    element: <Suspense fallback={Loading}><HostLogin/></Suspense>
  },
  {
    path: "/newHost",
    element: <Suspense fallback={Loading}><NewHost/></Suspense>
  },
  {
    path:"/order",
    element: <Suspense fallback={Loading}><Order /></Suspense>
  },
  {
    path:"/myPage",
    element: <Suspense fallback={Loading}><My/></Suspense> 
  },
  {
    path:"/user",
    element: <Suspense fallback={Loading}><UserProfile /></Suspense> 
  },
  {
    path:"/host",
    element: <Suspense fallback={Loading}><HostProfile /></Suspense> 
  },
  {
    path:"/cart",
    element: <Suspense fallback={Loading}><Cart /></Suspense> 
  },
  {
    path:"/lesson/new",
    element: <Suspense fallback={Loading}><LessonForm /></Suspense> 
  },
  {
    // css 테스트용
    path:"/cart1",
    element: <Suspense fallback={Loading}><Cart1 /></Suspense> 
  },

])
export default root;