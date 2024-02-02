import { Suspense,lazy} from "react";
const { createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading...</div>
const Main =  lazy(() => import("../main/MainPage"))
const About =  lazy(() => import("../main/AboutPage"))
const UserLogin = lazy(() => import("../pages/login/UserLoginPage"))
const NewUser = lazy(() => import("../pages/login/NewUserPage"))
// const LoginIndex = lazy(() => import("../pages/login/IndexPage"))
const HostLogin = lazy(() => import("../pages/login/HostLoginPage"))
const NewHost = lazy(() => import("../pages/login/NewHostPage"))
const UserProfile = lazy(() => import("../pages/profile/UserProfile"))
const HostProfile = lazy(() => import("../pages/profile/HostProfile"))
const Cart = lazy(() => import("../pages/cart/Cart"))
const Cart1 = lazy(() => import("../pages/cart/Cart1")) // css 테스트용

const Order =lazy(() => import("../pages/order/Order"))
const My = lazy(() => import("../pages/profile/MyPage"))
const MyHost = lazy(() => import("../pages/profile/HostMyPage"))

const LessonMain = lazy(() => import("../pages/lesson/LessonMain"))
const LessonForm = lazy(() => import("../pages/lesson/LessonForm"))
const LessonList = lazy(() => import("../pages/lesson/LessonList"))
const LessonDetail = lazy(() => import("../pages/lesson/LessonDetail"))

const ApiTest = lazy(()=>import("../pages/login/ApiTest"))


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
    element: <Suspense fallback={Loading}><UserLogin/></Suspense>
  },
  {
    path: "/user/new",
    element: <Suspense fallback={Loading}><NewUser/></Suspense>
  },
  {
    path: "/host/login",
    element: <Suspense fallback={Loading}><HostLogin/></Suspense>
  },
  {
    path: "/host/new",
    element: <Suspense fallback={Loading}><NewHost/></Suspense>
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
    path:"/host/myPage",
    element: <Suspense fallback={Loading}><MyHost /></Suspense>
  },

  {
    path:"/cart",
    element: <Suspense fallback={Loading}><Cart /></Suspense>
  },
  {
    path:"/order",
    element: <Suspense fallback={Loading}><Order /></Suspense>
  },
 {
   path:"/lesson/main",
   element:<Suspense fallback={Loading}><LessonMain/></Suspense>
 },
 {
   path:"/lesson/list",
   element: <Suspense fallback={Loading}><LessonList /></Suspense>
 },
 {
   path:"/lesson/form",
   element: <Suspense fallback={Loading}><LessonForm /></Suspense>
 },
 {
   path:"/lesson/detail",
   element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
 },
  {
    // css 테스트용
    path:"/cart1",
    element: <Suspense fallback={Loading}><Cart1 /></Suspense>
  },
  {
    // api 테스트용
    path:"/apiTest",
    element: <Suspense fallback={Loading}><ApiTest /></Suspense>
  },
])
export default root;