"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[930],{724:(e,a,s)=>{s.d(a,{Z:()=>i});var r=s(689),n=s(87),t=s(420),o=s(135),l=s(184);const i=()=>{const e=(0,r.s0)(),a=(0,t.I0)(),s=(0,t.v9)((e=>e.loginSlice));return{loginState:s,isLogin:!!s.userId,doLogin:async e=>(await a((0,o.ft)(e))).payload,doLogout:()=>{a((0,o.kS)())},moveToPath:a=>{e({pathname:a},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,l.jsx)(r.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:a=>{console.log("Exception.........."),console.log(a);const s=a.response.data.error,r=(0,n.createSearchParams)({error:s}).toString();return"REQUIRE_LOGIN"===s?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:r})):"ERROR_ACCESSDENIED"===a.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:r})):void 0}}}},119:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(420),n=s(724),t=s(184);const o=e=>{let{children:a}=e;const{doLogout:s,moveToPath:o}=(0,n.Z)(),l=(0,r.v9)((e=>e.loginSlice));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("header",{children:[(0,t.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,t.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,t.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"navbar-toggler-icon"})}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,t.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link",children:"Logout"})}),l.id?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("li",{class:"nav-item",children:(0,t.jsx)("a",{href:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,t.jsxs)("form",{className:"d-flex",role:"search",children:[(0,t.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,t.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,t.jsx)("hr",{})]}),(0,t.jsx)("main",{children:a}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"footer-body",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,t.jsx)("br",{}),(0,t.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,t.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,t.jsx)("br",{})]})," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})]})]})}},930:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var r=s(791),n=s(157),t=s(855),o=(s(17),s(119)),l=s(294),i=s(184);const c=function(){const[e,a]=(0,r.useState)({}),s=async()=>{try{const e=await l.Z.get("/api/user");a(e.data)}catch(e){console.error("Error fetching user details:",e)}};(0,r.useEffect)((()=>{s()}),[]);const c=e=>{const{name:s,value:r}=e.target;a((e=>({...e,[s]:r})))};return(0,i.jsx)("div",{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)("h1",{id:"title",children:"\ud504\ub85c\ud544 \uad00\ub9ac"}),(0,i.jsxs)(t.Z,{onSubmit:async a=>{a.preventDefault();try{const a=await l.Z.post("/api/user",{userId:e.userId,userName:e.userName,password:e.password,phoneNum:e.phoneNum});a.data.alertMessage&&alert(a.data.alertMessage),a.data.successMessage&&(console.log("Form submitted successfully:",a.data.successMessage),s())}catch(r){r.response?console.error("Error submitting form:",r.response.data):r.request?console.error("Request error:",r.request):console.error("Unexpected error:",r.message)}},children:[(0,i.jsx)("img",{src:"/profile.jpg",width:"200px",height:"200px",alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),(0,i.jsxs)(t.Z.Group,{controlId:"formFileSm",className:"mb-3",children:[(0,i.jsx)(t.Z.Label,{children:"\uc0ac\uc9c4 \uc218\uc815"}),(0,i.jsx)(t.Z.Control,{type:"file",size:"sm"})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupEmail",children:[(0,i.jsx)(t.Z.Label,{children:"\uc544\uc774\ub514"}),(0,i.jsx)(t.Z.Control,{type:"text",name:"userId",value:e.userId,disabled:!0})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupPassword",children:[(0,i.jsx)(t.Z.Label,{children:"\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)(t.Z.Control,{type:"password",name:"password",value:e.password||"",placeholder:"Enter New Password",onChange:c})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupName",children:[(0,i.jsx)(t.Z.Label,{children:"\uc774\ub984"}),(0,i.jsx)(t.Z.Control,{type:"text",name:"userName",value:e.userName||"",placeholder:"Name",onChange:c})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupPhone",children:[(0,i.jsx)(t.Z.Label,{children:"\ud578\ub4dc\ud3f0\ubc88\ud638"}),(0,i.jsx)(t.Z.Control,{type:"text",name:"phoneNum",value:e.phoneNum||"",placeholder:"- \uc5c6\uc774 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:c})]}),(0,i.jsx)(n.Z,{id:"modify",variant:"primary",type:"submit",children:"\uc218\uc815\uc644\ub8cc"})]})]})})}},157:(e,a,s)=>{s.d(a,{Z:()=>m});var r=s(418),n=s.n(r),t=s(791),o=s(184);const l=["as","disabled"];function i(e){let{tagName:a,disabled:s,href:r,target:n,rel:t,role:o,onClick:l,tabIndex:i=0,type:c}=e;a||(a=null!=r||null!=n||null!=t?"a":"button");const d={tagName:a};if("button"===a)return[{type:c||"button",disabled:s},d];const u=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),s?e.stopPropagation():null==l||l(e)};return"a"===a&&(r||(r="#"),s&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:s?void 0:i,href:r,target:"a"===a?n:void 0,"aria-disabled":s||void 0,rel:"a"===a?t:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const c=t.forwardRef(((e,a)=>{let{as:s,disabled:r}=e,n=function(e,a){if(null==e)return{};var s,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)s=t[r],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,l);const[t,{tagName:c}]=i(Object.assign({tagName:s,disabled:r},n));return(0,o.jsx)(c,Object.assign({},n,t,{ref:a}))}));c.displayName="Button";var d=s(162);const u=t.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:t="primary",size:l,active:c=!1,disabled:u=!1,className:m,...h}=e;const p=(0,d.vE)(r,"btn"),[x,{tagName:b}]=i({tagName:s,disabled:u,...h}),j=b;return(0,o.jsx)(j,{...x,...h,ref:a,disabled:u,className:n()(m,p,c&&"active",t&&"".concat(p,"-").concat(t),l&&"".concat(p,"-").concat(l),h.href&&u&&"disabled")})}));u.displayName="Button";const m=u},17:()=>{}}]);
//# sourceMappingURL=930.214d4ff9.chunk.js.map