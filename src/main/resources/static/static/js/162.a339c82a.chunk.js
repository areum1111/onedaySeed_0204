"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[162],{724:(e,a,s)=>{s.d(a,{Z:()=>c});var n=s(689),r=s(87),l=s(420),i=s(135),o=s(184);const c=()=>{const e=(0,n.s0)(),a=(0,l.I0)(),s=(0,l.v9)((e=>e.loginSlice));return{loginState:s,isLogin:!!s.userId,doLogin:async e=>(await a((0,i.ft)(e))).payload,doLogout:()=>{a((0,i.kS)())},moveToPath:a=>{e({pathname:a},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,o.jsx)(n.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:a=>{console.log("Exception.........."),console.log(a);const s=a.response.data.error,n=(0,r.createSearchParams)({error:s}).toString();return"REQUIRE_LOGIN"===s?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:n})):"ERROR_ACCESSDENIED"===a.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:n})):void 0}}}},568:(e,a,s)=>{s.d(a,{Z:()=>o});var n=s(87),r=s(184);var l=s(420),i=s(724);const o=e=>{let{children:a}=e;const{doLogout:s,moveToPath:o}=(0,i.Z)(),c=(0,l.v9)((e=>e.loginSlice));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,r.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,r.jsx)(n.Link,{to:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(n.Link,{to:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),c.id?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(n.Link,{to:"/mypage",className:"nav-link",children:"My Page"})})}):(0,r.jsx)(r.Fragment,{}),c.id?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{onClick:()=>{s(),alert("\ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),o("/")},className:"nav-link",children:"Logout"})})}):(0,r.jsx)(r.Fragment,{}),c.id?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(n.Link,{to:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,r.jsxs)("form",{class:"d-flex",role:"search",children:[(0,r.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,r.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("main",{children:a}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"footer-body",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,r.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,r.jsx)("br",{})]})," ",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]})]})}},437:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var n=s(87),r=s(568),l=(s(919),s(184));const i=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{children:(0,l.jsxs)("div",{className:"loginBox",children:[(0,l.jsx)("h1",{children:"\ub85c\uadf8\uc778"}),(0,l.jsx)("span",{className:"formName",children:"\uc0ac\uc5c5\uc790\ubc88\ud638"}),(0,l.jsx)("input",{className:"formInfo",type:"text",id:"id_val",placeholder:"\uc0ac\uc5c5\uc790\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),(0,l.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,l.jsx)("input",{className:"formInfo",type:"password",id:"password_val",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),(0,l.jsx)("div",{className:"loginBtn",children:(0,l.jsx)("button",{className:"s_bt",type:"",onClick:e=>(void 0).submitClick(e),children:"\ub85c\uadf8\uc778"})}),(0,l.jsx)(n.Link,{to:"/login",className:"another-login",children:"\uac8c\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778\ud558\uae30"}),(0,l.jsx)("span",{className:"choiceNewmember",children:"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc2e0\uac00\uc694?"}),(0,l.jsxs)("div",{className:"newmember",children:[(0,l.jsx)("button",{children:(0,l.jsx)(n.Link,{to:"/newHost",children:"\ud638\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})}),(0,l.jsx)("button",{children:(0,l.jsx)(n.Link,{to:"/newUser",children:"\uac8c\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})})]})]})})})},919:()=>{}}]);
//# sourceMappingURL=162.a339c82a.chunk.js.map