"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[826],{724:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(689),n=a(87),l=a(420),i=a(135),c=a(184);const o=()=>{const e=(0,r.s0)(),s=(0,l.I0)(),a=(0,l.v9)((e=>e.loginSlice));return{loginState:a,isLogin:!!a.userId,doLogin:async e=>(await s((0,i.ft)(e))).payload,doLogout:()=>{s((0,i.kS)())},moveToPath:s=>{e({pathname:s},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,c.jsx)(r.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:s=>{console.log("Exception.........."),console.log(s);const a=s.response.data.error,r=(0,n.createSearchParams)({error:a}).toString();return"REQUIRE_LOGIN"===a?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:r})):"ERROR_ACCESSDENIED"===s.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:r})):void 0}}}},119:(e,s,a)=>{a.d(s,{Z:()=>i});var r=a(420),n=a(724),l=a(184);const i=e=>{let{children:s}=e;const{doLogout:a,moveToPath:i}=(0,n.Z)(),c=(0,r.v9)((e=>e.loginSlice));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,l.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,l.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link",children:"Logout"})}),c.id?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{class:"nav-item",children:(0,l.jsx)("a",{href:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,l.jsxs)("form",{className:"d-flex",role:"search",children:[(0,l.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,l.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,l.jsx)("hr",{})]}),(0,l.jsx)("main",{children:s}),(0,l.jsxs)("footer",{children:[(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"footer-body",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,l.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,l.jsx)("br",{})]})," ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})]})]})}},826:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var r=a(119),n=a(184);const l=()=>(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"us-box",children:[(0,n.jsx)("h1",{className:"title",children:(0,n.jsx)("b",{children:"OnedaySeed"})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"bold",children:(0,n.jsx)("b",{children:"\ud83c\udf31\uc6b0\ub9ac\uac00 \ub2f9\uc2e0\uc758 \uc77c\uc0c1\uc5d0 \uc2e0\uc120\ud55c \uc990\uac70\uc6c0\uc758 \uc528\uc557\uc744 \uc2ec\uc5b4\ub4dc\ub9b4\uac8c\uc694!\ud83c\udf31"})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{children:" \uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \uc6d0\ub370\uc774 \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \uc5ec\ub7ec\ubd84\uc774 \uc790\uc2e0\ub9cc\uc758 \ucde8\ubbf8\uc640 \uc5f4\uc815\uc744 \ubc1c\uacac\ud558\uace0 \ud0a4\uc6b0\ub294\ub370 \ud568\uaed8 \ud558\uace0 \uc788\uc5b4\uc694! \uc6b0\ub9ac\ub294 \ub2f9\uc2e0\uc774 \ud3c9\uc18c\uc5d0 \uafc8\uafd4\uc654\ub358 \ucde8\ubbf8\ub97c \uc2dc\uc791\ud560 \uc218 \uc788\ub294 \ubc1c\ud310\uc774 \ub418\uc5b4\uc8fc\uace0, \uc5ec\ub7ec\ubd84\uc774 \uc880 \ub354 \ubd80\ub2f4\uc5c6\uc774 \uc990\uae30\uace0, \ubc30\uc6b0\uba70 \uc131\uc7a5\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc6b8\uac8c\uc694!"}),(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"\ud83c\udf1f \ud2b9\ubcc4\ud55c \uacbd\ud5d8 , "})," \uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \uc6d0\ub370\uc774 \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \uc5ec\ub7ec\ubd84\uc5d0\uac8c \ub3c5\ud2b9\ud558\uace0 \ub2e4\uc591\ud55c \uacbd\ud5d8\uc744 \uc81c\uacf5\ud574\uc694. \uc0c8\ub85c\uc6b4 \ucde8\ubbf8\ub97c \uc2dc\uc791\ud560 \ub54c, \ucc98\uc74c\ud574\ubcf4\ub294 \ucde8\ubbf8\uac00 \ub098\uc640 \ub9de\uc744\uae4c \uace0\ubbfc\uc774 \ub418\uace4\ud574\uc694. \uadf8\ub7f0 \uc5ec\ub7ec\ubd84\uc5d0\uac8c \uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ub2e8\uae30\uac04\uc758 \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \uc5ec\ub7ec\ubd84\uc774 \uc0c8\ub85c\uc6b4 \ubd84\uc57c\ub97c \uccb4\ud5d8\ud558\uace0, \uc790\uc2e0\uc5d0\uac8c \ub9de\ub294 \ucde8\ubbf8\ub97c \ubc1c\uacac\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc6b8 \uc218 \uc788\uc5b4\uc694."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"\ud83c\udf1f \ube44\uc6a9 \ubd80\ub2f4 \ud574\uc18c , "}),"\ucc98\uc74c\uc5d0 \ud544\uc694\ud55c \uc7a5\ube44\ub97c \ubaa8\ub450 \uad6c\ub9e4\ud558\ub294 \uac83\uc774 \ubd80\ub2f4 \ub420\uc218 \uc788\uc8e0. \uc6d0\ub370\uc774\uc528\ub4dc\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4 \ucc38\uc5ec \uc2dc \ud544\uc694\ud55c \uc7a5\ube44\uc640 \uc7a5\uc18c\ub97c \ub300\ubd80\ubd84 \uc81c\uacf5\ud558\ubbc0\ub85c, \ub2e8\uae30\uac04\uc5d0 \uc800\ub834\ud558\uac8c \ucde8\ubbf8\ub97c \uacbd\ud5d8\ud560 \uc218 \uc788\uc5b4\uc694."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"\ud83c\udf1f\ub9dd\uc124\uc774\ub294 \uc5ec\ub7ec\ubd84\uc5d0\uac8c , "})," \ucc98\uc74c\uc73c\ub85c \ucde8\ubbf8\ub97c \uc2dc\uc791\ud558\uace0\uc790 \ud558\ub294 \ubd84\ub4e4\uc5d0\uac8c\ub294 \ud55c \ubc88 \uccb4\ud5d8\ud574\ubcf4\uace0 \uacb0\uc815\ud560 \uc218 \uc788\ub294 \uae30\ud68c\uac00 \uc911\uc694\ud558\uc8e0! \uc6d0\ub370\uc774\uc528\ub4dc\ub294 \uc0c8\ub85c\uc6b4 \ucde8\ubbf8\ub97c \uacbd\ud5d8\ud558\uace0\uc790 \ud558\ub294 \ubd84\ub4e4\uc774 \uc9c1\uc811 \uccb4\ud5d8\ud558\uace0, \uc5ec\ub7ec\ubd84\uc5d0\uac8c \ub9de\ub294 \ucde8\ubbf8\ub97c \ucc3e\uc544\uac08\uc218 \uc788\ub3c4\ub85d \ub3c4\uc6b8\uac8c\uc694."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"bold",children:(0,n.jsx)("b",{children:"\ud83c\udf31\ud83c\udf1f\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ub2f9\uc2e0\uc758 \uc77c\uc0c1\uc5d0 \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\ub4dc\ub9b4\uac8c\uc694! \uc774\uc81c \uc0c8\ub85c\uc6b4 \uacbd\ud5d8\uacfc \uc990\uac70\uc6c0\uc744 \ucc3e\uc544\ubcf4\uc138\uc694!\ud83c\udf31\ud83c\udf1f"})})]})})}}]);
//# sourceMappingURL=826.0ef4c312.chunk.js.map