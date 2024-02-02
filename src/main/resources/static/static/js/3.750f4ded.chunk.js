"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[3],{119:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(689),n=a(420),l=a(135),t=a(184);const o=e=>{let{children:s}=e;const a=(0,r.s0)(),o=(0,n.I0)(),c=(0,n.v9)((e=>e.loginSlice));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("header",{children:[(0,t.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,t.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,t.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"navbar-toggler-icon"})}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,t.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),c.userId?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})})}):(0,t.jsx)(t.Fragment,{}),c.userId?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link active","aria-current":"page",onClick:()=>{localStorage.removeItem("isLoggedIn"),o((0,l.kS)()),a("/user/login")},children:"Logout"})})}):(0,t.jsx)(t.Fragment,{}),c.userId?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("li",{className:"nav-item"})}):(0,t.jsx)(t.Fragment,{}),c.userId?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"/user/login",className:"nav-link active","aria-current":"page",children:"Login"})})})]}),(0,t.jsxs)("form",{className:"d-flex",role:"search",children:[(0,t.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,t.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,t.jsx)("hr",{})]}),(0,t.jsx)("main",{children:s}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"footer-body",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,t.jsx)("br",{}),(0,t.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,t.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,t.jsx)("br",{})]})," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})]})]})}},3:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var r=a(119),n=a(791),l=(a(979),a(294)),t=a(855),o=a(689),c=a(184);const i=()=>{const[e,s]=(0,n.useState)({}),a=async()=>{try{const e=await l.Z.get("/api/userNew");s(e.data)}catch(e){console.log("Error fetching new user info : ",e)}};(0,n.useEffect)((()=>{a()}),[]);const i=(0,o.s0)(),d=e=>{const{name:a,value:r}=e.target;s((e=>({...e,[a]:r})))};return(0,c.jsx)(r.Z,{children:(0,c.jsxs)("div",{className:"loginBox",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("b",{children:"\ud68c\uc6d0\uac00\uc785"})}),(0,c.jsxs)(t.Z,{onSubmit:async s=>{if(s.preventDefault(),null!=e.userId)if(e.userId.length<6||e.userId.length>12)alert("\uc544\uc774\ub514\ub294 6\uc790\ub9ac \uc774\uc0c1 12\uc790\ub9ac \uc774\ud558\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.");else if(null!=e.password)if(e.password.length<6||e.password.length>12)alert("\ube44\ubc00\ubc88\ud638\ub294 6\uc790\ub9ac \uc774\uc0c1 12\uc790\ub9ac \uc774\ud558\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.");else if(null!=e.userName)if(null!=e.phoneNum)if(/^\d+$/.test(e.phoneNum)){console.log(e.userId),console.log(e.password),console.log(e.userName),console.log(e.phoneNum);try{const s=await l.Z.post("/api/userNew",{userId:e.userId,password:e.password,userName:e.userName,phoneNum:e.phoneNum});s.data.alertMessage&&alert(s.data.alertMessage),s.data.successMessage&&(console.log("Form submitted successfully:",s.data.successMessage),a(),i("/user/login"))}catch(r){r.response?console.error("Error submitting form:",r.response.data):r.request?console.error("Request error:",r.request):console.error("Unexpected error:",r.message)}}else alert("\uc804\ud654\ubc88\ud638\ub294 \uc22b\uc790\ub9cc \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")},children:[(0,c.jsx)("span",{className:"formName",children:"\uc544\uc774\ub514"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"id_val",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userId",onChange:d,value:e.userId}),(0,c.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"password",id:"password_val",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"password",onChange:d,value:e.password}),(0,c.jsx)("span",{className:"formName",children:"\uc774\ub984"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"name_val",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userName",onChange:d,value:e.userName}),(0,c.jsx)("span",{className:"formName",children:"\uc804\ud654\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"phoneNum_val",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"phoneNum",onChange:d,value:e.phoneNum}),(0,c.jsx)("div",{className:"loginBtn",children:(0,c.jsx)("button",{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})})]})]})})}},979:()=>{}}]);
//# sourceMappingURL=3.750f4ded.chunk.js.map