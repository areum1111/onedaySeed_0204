"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[365],{724:(s,a,e)=>{e.d(a,{Z:()=>i});var n=e(689),r=e(87),l=e(420),c=e(135),t=e(184);const i=()=>{const s=(0,n.s0)(),a=(0,l.I0)(),e=(0,l.v9)((s=>s.loginSlice));return{loginState:e,isLogin:!!e.userId,doLogin:async s=>(await a((0,c.ft)(s))).payload,doLogout:()=>{a((0,c.kS)())},moveToPath:a=>{s({pathname:a},{replace:!0})},moveToLogin:()=>{s({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,t.jsx)(n.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:a=>{console.log("Exception.........."),console.log(a);const e=a.response.data.error,n=(0,r.createSearchParams)({error:e}).toString();return"REQUIRE_LOGIN"===e?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void s({pathname:"/user/login",search:n})):"ERROR_ACCESSDENIED"===a.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void s({pathname:"/user/login",search:n})):void 0}}}},732:(s,a,e)=>{e.d(a,{Z:()=>t});var n=e(87),r=e(184);var l=e(420),c=e(724);const t=s=>{let{children:a}=s;const{doLogout:e,moveToPath:t}=(0,c.Z)(),i=(0,l.v9)((s=>s.loginSlice));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("nav",{class:"navbar navbar-expand-lg",id:"nav",children:(0,r.jsxs)("div",{class:"container-fluid",id:"nav-form",children:[(0,r.jsx)(n.Link,{to:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,r.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{class:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,r.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)(n.Link,{to:"/about",class:"nav-link active","aria-current":"page",children:"About Us"})}),i.id?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)(n.Link,{to:"/mypage",class:"nav-link",children:"My Page"})})}):(0,r.jsx)(r.Fragment,{}),i.id?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)("a",{onClick:()=>{e(),alert("\ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t("/")},className:"nav-link",children:"Logout"})})}):(0,r.jsx)(r.Fragment,{}),i.id?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)(n.Link,{to:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,r.jsxs)("form",{class:"d-flex",role:"search",children:[(0,r.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,r.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("main",{children:a}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"footer-body",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,r.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,r.jsx)("br",{})]})," ",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]})]})}},365:(s,a,e)=>{e.r(a),e.d(a,{default:()=>t});var n=e(791),r=e(732),l=e(294),c=e(184);const t=()=>{const[s,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{(async()=>{try{const s=await l.Z.get("/api/order");a(s.data)}catch(s){console.error("Error fetching cart details:",s)}})()}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.Z,{children:(0,c.jsxs)("div",{className:"purchaseBox",children:[(0,c.jsx)("h1",{children:"\uad6c\ub9e4\ub0b4\uc5ed"}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"class-img class-info"}),(0,c.jsx)("h3",{className:"class-name",children:"\uc720\uc0b0\uc18c \ub05d\ud310\uc655! \ub108\ub3c4 \ud560 \uc218 \uc788\uc5b4, \uc2a4\ucffc\uc2dc! "}),(0,c.jsx)("span",{className:"class-date",children:"2024\ub144 1\uc6d4 15\uc77c 19:00"}),(0,c.jsx)("span",{className:"class-count",children:"\uad6c\ub9e4 \uc218\ub7c9 : 2"}),(0,c.jsx)("button",{className:"class-status",children:"\uad6c\ub9e4 \ucde8\uc18c"})]})})})}}}]);
//# sourceMappingURL=365.ab364c23.chunk.js.map