"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[22],{724:(e,a,s)=>{s.d(a,{Z:()=>i});var r=s(689),n=s(87),t=s(420),o=s(135),l=s(184);const i=()=>{const e=(0,r.s0)(),a=(0,t.I0)(),s=(0,t.v9)((e=>e.loginSlice));return{loginState:s,isLogin:!!s.userId,doLogin:async e=>(await a((0,o.ft)(e))).payload,doLogout:()=>{a((0,o.kS)())},moveToPath:a=>{e({pathname:a},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,l.jsx)(r.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:a=>{console.log("Exception.........."),console.log(a);const s=a.response.data.error,r=(0,n.createSearchParams)({error:s}).toString();return"REQUIRE_LOGIN"===s?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:r})):"ERROR_ACCESSDENIED"===a.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:r})):void 0}}}},568:(e,a,s)=>{s.d(a,{Z:()=>l});var r=s(87),n=s(184);var t=s(420),o=s(724);const l=e=>{let{children:a}=e;const{doLogout:s,moveToPath:l}=(0,o.Z)(),i=(0,t.v9)((e=>e.loginSlice));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,n.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,n.jsx)(r.Link,{to:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Link,{to:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),i.id?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Link,{to:"/mypage",className:"nav-link",children:"My Page"})})}):(0,n.jsx)(n.Fragment,{}),i.id?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{onClick:()=>{s(),alert("\ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),l("/")},className:"nav-link",children:"Logout"})})}):(0,n.jsx)(n.Fragment,{}),i.id?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Link,{to:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,n.jsxs)("form",{class:"d-flex",role:"search",children:[(0,n.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,n.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,n.jsx)("hr",{})]}),(0,n.jsx)("main",{children:a}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"footer-body",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,n.jsx)("br",{}),(0,n.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,n.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,n.jsx)("br",{})]})," ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})]})]})}},22:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var r=s(791),n=s(157),t=s(855),o=(s(17),s(568)),l=s(294),i=s(184);const c=function(){const[e,a]=(0,r.useState)({}),s=async()=>{try{const e=await l.Z.get("/api/host");a(e.data)}catch(e){console.error("Error fetching user details:",e)}};(0,r.useEffect)((()=>{s()}),[]);const c=e=>{const{name:s,value:r}=e.target;a((e=>({...e,[s]:r})))};return(0,i.jsx)("div",{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)("h1",{id:"title",children:"\ud504\ub85c\ud544 \uad00\ub9ac"}),(0,i.jsxs)(t.Z,{onSubmit:async a=>{a.preventDefault();try{const a=await l.Z.post("/api/host",{hostNum:e.hostNum,hostName:e.hostName,password:e.password,phoneNum:e.phoneNum});a.data.alertMessage&&alert(a.data.alertMessage),a.data.successMessage&&(console.log("Form submitted successfully:",a.data.successMessage),s())}catch(r){r.response?console.error("Error submitting form:",r.response.data):r.request?console.error("Request error:",r.request):console.error("Unexpected error:",r.message)}},children:[(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupEmail",children:[(0,i.jsx)(t.Z.Label,{children:"\uc0ac\uc5c5\uc790\ubc88\ud638"}),(0,i.jsx)(t.Z.Control,{type:"text",name:"userId",value:e.hostNum,disabled:!0})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupPassword",children:[(0,i.jsx)(t.Z.Label,{children:"\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)(t.Z.Control,{type:"password",name:"password",value:e.password||"",placeholder:"Enter New Password",onChange:c})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupName",children:[(0,i.jsx)(t.Z.Label,{children:"\uc774\ub984"}),(0,i.jsx)(t.Z.Control,{type:"text",name:"userName",value:e.hostName||"",placeholder:"Name",onChange:c})]}),(0,i.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupPhone",children:[(0,i.jsx)(t.Z.Label,{children:"\ud578\ub4dc\ud3f0\ubc88\ud638"}),(0,i.jsx)(t.Z.Control,{type:"text",name:"phoneNum",value:e.phoneNum||"",placeholder:"- \uc5c6\uc774 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:c})]}),(0,i.jsx)(n.Z,{id:"modify",variant:"primary",type:"submit",children:"\uc218\uc815"})]})]})})}},157:(e,a,s)=>{s.d(a,{Z:()=>u});var r=s(418),n=s.n(r),t=s(791),o=s(184);const l=["as","disabled"];function i(e){let{tagName:a,disabled:s,href:r,target:n,rel:t,role:o,onClick:l,tabIndex:i=0,type:c}=e;a||(a=null!=r||null!=n||null!=t?"a":"button");const d={tagName:a};if("button"===a)return[{type:c||"button",disabled:s},d];const m=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),s?e.stopPropagation():null==l||l(e)};return"a"===a&&(r||(r="#"),s&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:s?void 0:i,href:r,target:"a"===a?n:void 0,"aria-disabled":s||void 0,rel:"a"===a?t:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const c=t.forwardRef(((e,a)=>{let{as:s,disabled:r}=e,n=function(e,a){if(null==e)return{};var s,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)s=t[r],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,l);const[t,{tagName:c}]=i(Object.assign({tagName:s,disabled:r},n));return(0,o.jsx)(c,Object.assign({},n,t,{ref:a}))}));c.displayName="Button";var d=s(162);const m=t.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:t="primary",size:l,active:c=!1,disabled:m=!1,className:u,...h}=e;const p=(0,d.vE)(r,"btn"),[x,{tagName:b}]=i({tagName:s,disabled:m,...h}),g=b;return(0,o.jsx)(g,{...x,...h,ref:a,disabled:m,className:n()(u,p,c&&"active",t&&"".concat(p,"-").concat(t),l&&"".concat(p,"-").concat(l),h.href&&m&&"disabled")})}));m.displayName="Button";const u=m},17:()=>{}}]);
//# sourceMappingURL=22.81258d87.chunk.js.map