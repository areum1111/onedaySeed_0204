"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[930],{119:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(689),n=s(420),t=s(135),l=s(184);const o=e=>{let{children:a}=e;const s=(0,r.s0)(),o=(0,n.I0)(),c=(0,n.v9)((e=>e.loginSlice)),i=c&&c.userId?"Welcome, ".concat(c.userId):"Welcome";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,l.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,l.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),c.userId?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})})}):(0,l.jsx)(l.Fragment,{}),c.userId?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link active","aria-current":"page",onClick:()=>{localStorage.removeItem("isLoggedIn"),o((0,t.kS)()),s("/user/login")},children:"Logout"})})}):(0,l.jsx)(l.Fragment,{}),c.userId?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/user/login",className:"nav-link active","aria-current":"page",children:i})})}):(0,l.jsx)(l.Fragment,{}),c.userId?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/user/login",className:"nav-link active","aria-current":"page",children:"Login"})})})]}),(0,l.jsxs)("form",{className:"d-flex",role:"search",children:[(0,l.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,l.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,l.jsx)("hr",{})]}),(0,l.jsx)("main",{children:a}),(0,l.jsxs)("footer",{children:[(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"footer-body",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,l.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,l.jsx)("br",{})]})," ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})]})]})}},930:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var r=s(791),n=s(157),t=s(855),l=(s(17),s(119)),o=s(294),c=s(184);const i=function(){const[e,a]=(0,r.useState)({}),s=async()=>{try{const e=await o.Z.get("/api/user");a(e.data)}catch(e){console.error("Error fetching user details:",e)}};(0,r.useEffect)((()=>{s()}),[]);const i=e=>{const{name:s,value:r}=e.target;a((e=>({...e,[s]:r})))};return(0,c.jsx)("div",{children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("h1",{id:"title",children:"\ud504\ub85c\ud544 \uad00\ub9ac"}),(0,c.jsxs)(t.Z,{onSubmit:async a=>{a.preventDefault();try{const a=await o.Z.post("/api/user",{userId:e.userId,userName:e.userName,password:e.password,phoneNum:e.phoneNum});a.data.alertMessage&&alert(a.data.alertMessage),a.data.successMessage&&(console.log("Form submitted successfully:",a.data.successMessage),s())}catch(r){r.response?console.error("Error submitting form:",r.response.data):r.request?console.error("Request error:",r.request):console.error("Unexpected error:",r.message)}},children:[(0,c.jsx)("img",{src:"/profile.jpg",width:"200px",height:"200px",alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),(0,c.jsxs)(t.Z.Group,{controlId:"formFileSm",className:"mb-3",children:[(0,c.jsx)(t.Z.Label,{children:"\uc0ac\uc9c4 \uc218\uc815"}),(0,c.jsx)(t.Z.Control,{type:"file",size:"sm"})]}),(0,c.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupEmail",children:[(0,c.jsx)(t.Z.Label,{children:"\uc544\uc774\ub514"}),(0,c.jsx)(t.Z.Control,{type:"text",name:"userId",value:e.userId,disabled:!0})]}),(0,c.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupPassword",children:[(0,c.jsx)(t.Z.Label,{children:"\ube44\ubc00\ubc88\ud638"}),(0,c.jsx)(t.Z.Control,{type:"password",name:"password",value:e.password||"",placeholder:"Enter New Password",onChange:i})]}),(0,c.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupName",children:[(0,c.jsx)(t.Z.Label,{children:"\uc774\ub984"}),(0,c.jsx)(t.Z.Control,{type:"text",name:"userName",value:e.userName||"",placeholder:"Name",onChange:i})]}),(0,c.jsxs)(t.Z.Group,{className:"mb-3",controlId:"formGroupPhone",children:[(0,c.jsx)(t.Z.Label,{children:"\ud578\ub4dc\ud3f0\ubc88\ud638"}),(0,c.jsx)(t.Z.Control,{type:"text",name:"phoneNum",value:e.phoneNum||"",placeholder:"- \uc5c6\uc774 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:i})]}),(0,c.jsx)(n.Z,{id:"modify",variant:"primary",type:"submit",children:"\uc218\uc815\uc644\ub8cc"})]})]})})}},157:(e,a,s)=>{s.d(a,{Z:()=>u});var r=s(418),n=s.n(r),t=s(791),l=s(184);const o=["as","disabled"];function c(e){let{tagName:a,disabled:s,href:r,target:n,rel:t,role:l,onClick:o,tabIndex:c=0,type:i}=e;a||(a=null!=r||null!=n||null!=t?"a":"button");const d={tagName:a};if("button"===a)return[{type:i||"button",disabled:s},d];const m=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),s?e.stopPropagation():null==o||o(e)};return"a"===a&&(r||(r="#"),s&&(r=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:s?void 0:c,href:r,target:"a"===a?n:void 0,"aria-disabled":s||void 0,rel:"a"===a?t:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const i=t.forwardRef(((e,a)=>{let{as:s,disabled:r}=e,n=function(e,a){if(null==e)return{};var s,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)s=t[r],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,o);const[t,{tagName:i}]=c(Object.assign({tagName:s,disabled:r},n));return(0,l.jsx)(i,Object.assign({},n,t,{ref:a}))}));i.displayName="Button";var d=s(162);const m=t.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:t="primary",size:o,active:i=!1,disabled:m=!1,className:u,...h}=e;const x=(0,d.vE)(r,"btn"),[p,{tagName:j}]=c({tagName:s,disabled:m,...h}),b=j;return(0,l.jsx)(b,{...p,...h,ref:a,disabled:m,className:n()(u,x,i&&"active",t&&"".concat(x,"-").concat(t),o&&"".concat(x,"-").concat(o),h.href&&m&&"disabled")})}));m.displayName="Button";const u=m},17:()=>{}}]);
//# sourceMappingURL=930.6ae696b0.chunk.js.map