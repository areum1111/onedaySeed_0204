import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");



const Loading = <div>Loading...</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const UserLogin = lazy(() => import("../pages/login/UserLoginPage"))
const NewUser = lazy(() => import("../pages/login/NewUserPage"))
// const LoginIndex = lazy(() => import("../pages/login/IndexPage"))
const HostLogin = lazy(() => import("../pages/login/HostLoginPage"))
const NewHost = lazy(() => import("../pages/login/NewHostPage"))
const Profile = lazy(() => import("../pages/profile/Profile"))
const Cart = lazy(() => import("../pages/cart/Cart"))
const LessonForm = lazy(() => import("../pages/lesson/LessonForm"))
const LessonMain = lazy(() => import("../pages/lesson/LessonMain"))
const LessonDetail = lazy(() => import("../pages/lesson/LessonDetail"))
const LessonList = lazy(() => import("../pages/lesson/LessonList"))
const LessonModify = lazy(() => import("../pages/lesson/LessonModify"))

const lessonId1 = 1;
const lessonId2 = 2;
const lessonId3 = 3;
const lessonId4 = 4;
const lessonId5 = 5;
const lessonId6 = 6;
const lessonId7 = 7;
const lessonId8 = 8;
const lessonId9 = 9;
const lessonId10 = 10;

const lessonNew1 = 1;
const lessonNew2 = 2;
const lessonNew3 = 3;
const lessonNew4 = 4;
const lessonNew5 = 5;
const lessonNew6 = 6;
const lessonNew7 = 7;
const lessonNew8 = 8;
const lessonNew9 = 9;
const lessonNew10 = 10;

const My = lazy(() => import("../pages/MyPage"))
const root = createBrowserRouter([


  {
    path: "",
    element: <Suspense fallback={Loading}><Main /></Suspense>
  },
  {
    path: "about",
    element: <Suspense fallback={Loading}><About /></Suspense>
  },
  {
    path: "/user/login",
    element: <Suspense fallback={Loading}><UserLogin /></Suspense>,

  },
  {
    path: "newUser",
    element: <Suspense fallback={Loading}><NewUser /></Suspense>
  },
  {
    path: "host/login",
    element: <Suspense fallback={Loading}><HostLogin /></Suspense>
  },
  {
    path: "newHost",
    element: <Suspense fallback={Loading}><NewHost /></Suspense>
  },
  {
    path: "myPage",
    element: <Suspense fallback={Loading}><My /></Suspense>
  },
  {
    path: "/user",
    element: <Suspense fallback={Loading}><Profile /></Suspense>
  },
  {
    path: "/cart",
    element: <Suspense fallback={Loading}><Cart /></Suspense>
  },
  {
    path: "/lesson/new",
    element: <Suspense fallback={Loading}><LessonForm /></Suspense>
  },
  {
    path: "/lesson/main",
    element: <Suspense fallback={Loading}><LessonMain /></Suspense>
  },
  {
    path: "/lesson/detail",
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: "lesson/list",
    element: <Suspense fallback={Loading}><LessonList /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId1}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId10}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId9}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId2}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId3}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId4}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId5}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId6}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId7}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/detail/${lessonId8}`,
    element: <Suspense fallback={Loading}><LessonDetail /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId1}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId2}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId3}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId4}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId5}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId6}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId7}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId8}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId9}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },
  {
    path: `/lesson/new/${lessonId10}`,
    element: <Suspense fallback={Loading}><LessonModify /></Suspense>
  },

])
export default root;