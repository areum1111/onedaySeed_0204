"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[469],{724:(e,s,a)=>{a.d(s,{Z:()=>c});var n=a(689),o=a(87),r=a(420),l=a(135),t=a(184);const c=()=>{const e=(0,n.s0)(),s=(0,r.I0)(),a=(0,r.v9)((e=>e.loginSlice));return{loginState:a,isLogin:!!a.userId,doLogin:async e=>(await s((0,l.ft)(e))).payload,doLogout:()=>{s((0,l.kS)())},moveToPath:s=>{e({pathname:s},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,t.jsx)(n.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:s=>{console.log("Exception.........."),console.log(s);const a=s.response.data.error,n=(0,o.createSearchParams)({error:a}).toString();return"REQUIRE_LOGIN"===a?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:n})):"ERROR_ACCESSDENIED"===s.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:n})):void 0}}}},119:(e,s,a)=>{a.d(s,{Z:()=>l});var n=a(420),o=a(724),r=a(184);const l=e=>{let{children:s}=e;const{doLogout:a,moveToPath:l}=(0,o.Z)(),t=(0,n.v9)((e=>e.loginSlice));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,r.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,r.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",children:"Logout"})}),t.id?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)("a",{href:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,r.jsxs)("form",{className:"d-flex",role:"search",children:[(0,r.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,r.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("main",{children:s}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"footer-body",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,r.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,r.jsx)("br",{})]})," ",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]})]})}},469:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var n=a(119),o=a(791),r=(a(979),a(294)),l=a(855),t=a(689),c=a(184);const i=()=>{const[e,s]=(0,o.useState)({}),a=async()=>{try{const e=await r.Z.get("/api/hostNew");s(e.data)}catch(e){console.log("Error fetching new host info : ",e)}};(0,o.useEffect)((()=>{a()}),[]);const i=(0,t.s0)(),d=e=>{const{name:a,value:n}=e.target;s((e=>({...e,[a]:n})))};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.Z,{children:(0,c.jsxs)("div",{class:"loginBox",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("b",{children:"\ud68c\uc6d0\uac00\uc785"})}),(0,c.jsxs)(l.Z,{onSubmit:async s=>{if(s.preventDefault(),null!=e.hostNum)if(null!=e.password)if(null!=e.hostName)if(null!=e.phoneNum){console.log(e.hostNum),console.log(e.password),console.log(e.hostName),console.log(e.phoneNum);try{const s=await r.Z.post("/api/hostNew",{hostNum:e.hostNum,password:e.password,hostName:e.hostName,phoneNum:e.phoneNum});s.data.alertMessage&&alert(s.data.alertMessage),s.data.successMessage&&(console.log("Form submitted successfully:",s.data.successMessage),a(),i("/host/login"))}catch(n){n.response?(console.error("Error submitting form:",n.response.data),console.log("\uc5d0\ub7ec")):n.request?(console.error("Request error:",n.request),console.log("\uc5d0\ub7ec")):(console.error("Unexpected error:",n.message),console.log("\uc5d0\ub7ec"))}}else alert("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\uc0c1\ud638\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");else alert("\uc0ac\uc5c5\uc790\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")},children:[(0,c.jsx)("span",{className:"formName",children:"\uc0ac\uc5c5\uc790\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"text",placeholder:"\uc0ac\uc5c5\uc790\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"hostNum",onChange:d,value:e.hostNum}),(0,c.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"password",onChange:d,value:e.password}),(0,c.jsx)("span",{className:"formName",children:"\uc0c1\ud638\uba85"}),(0,c.jsx)("input",{className:"formInfo",type:"text",placeholder:"\uc0c1\ud638\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"hostName",onChange:d,value:e.hostName}),(0,c.jsx)("span",{className:"formName",children:"\uc804\ud654\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"text",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"phoneNum",onChange:d,value:e.phoneNum}),(0,c.jsx)("div",{className:"loginBtn",children:(0,c.jsx)("button",{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})})]})]})})})}},979:()=>{}}]);
//# sourceMappingURL=469.056c7fdb.chunk.js.map