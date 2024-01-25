import { Suspense,lazy} from "react";
const { createBrowserRouter} = require("react-router-dom");


const Loading = <div>Loading...</div>
const Main =  lazy(() => import("../pages/MainPage"))
const About =  lazy(() => import("../pages/AboutPage"))
const UserLogin = lazy(() => import("../pages/login/UserLoginPage"))
const NewUser = lazy(() => import("../pages/login/NewUserPage"))
// const LoginIndex = lazy(() => import("../pages/login/IndexPage"))
const HostLogin = lazy(() => import("../pages/login/HostLoginPage"))
const NewHost = lazy(() => import("../pages/login/NewHostPage"))
const Profile = lazy(() => import("../pages/profile/Profile"))
const Cart = lazy(() => import("../pages/cart/Cart"))
const LessonForm = lazy(() => import("../pages/lesson/LessonForm"))

const My = lazy(() => import("../pages/MyPage"))
const root = createBrowserRouter([

  {
    path: "",
    element: <Suspense fallback={Loading}><Main/></Suspense>
  },
  {
    path: "about",
    element: <Suspense fallback={Loading}><About/></Suspense> 
  },
  {
    path:"/user/login",
    element: <Suspense fallback={Loading}><UserLogin/></Suspense>,

  },
  {
    path: "newUser",
    element: <Suspense fallback={Loading}><NewUser/></Suspense>
  },
  {
    path: "host/login",
    element: <Suspense fallback={Loading}><HostLogin/></Suspense>
  },
  {
    path: "newHost",
    element: <Suspense fallback={Loading}><NewHost/></Suspense>
  },
  {
    path:"myPage",
    element: <Suspense fallback={Loading}><My/></Suspense> 
  },
  {
    path:"/user",
    element: <Suspense fallback={Loading}><Profile /></Suspense> 
  },
  {
    path:"/cart",
    element: <Suspense fallback={Loading}><Cart /></Suspense> 
  },
  {
    path:"/lesson/new",
    element: <Suspense fallback={Loading}><LessonForm /></Suspense> 
  },

])
export default root;