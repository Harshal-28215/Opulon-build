import{c as y,r as l,j as s,I as j,d as w,B as f,h as b}from"./index-CUyXMUtY.js";import{u as v,F as N,a as c,b as m,c as h,d as p,f as u,s as F,o as S,g as x}from"./form-2WGIrNdR.js";import{u as k}from"./useAdminAuth-DFVrMRT9.js";import"./label-DVgHXfPf.js";/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],L=y("eye-off",I);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],E=y("eye",P),g=l.forwardRef(({className:r,...e},a)=>{const[t,i]=l.useState(!1),o=e.value===""||e.value===void 0||e.disabled;return s.jsxs("div",{className:"relative",children:[s.jsx(j,{type:t?"text":"password",className:w("hide-password-toggle pr-10",r),ref:a,...e}),s.jsxs(f,{type:"button",variant:"ghost",size:"sm",className:"absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",onClick:()=>i(d=>!d),disabled:o,children:[t&&!o?s.jsx(E,{className:"h-4 w-4","aria-hidden":"true"}):s.jsx(L,{className:"h-4 w-4","aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:t?"Hide password":"Show password"})]}),s.jsx("style",{children:`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`})]})});g.displayName="PasswordInput";const M=S({email:x(),password:x()});function R(){const r=b(),{isAdmin:e,isLoading:a,error:t,login:i}=k();l.useEffect(()=>{e===!0&&!a&&r("/admin/controll")},[e,a,r]);const o=v({resolver:F(M)});async function d(n){if(a)return;await i(n)?r("/admin/controll"):alert(t||"Login failed. Please try again.")}return s.jsx(N,{...o,children:s.jsxs("form",{onSubmit:o.handleSubmit(d),className:"space-y-8 max-w-3xl mx-auto py-10",children:[s.jsx(c,{control:o.control,name:"email",render:({field:n})=>s.jsxs(m,{children:[s.jsx(h,{children:"email"}),s.jsx(p,{children:s.jsx(j,{placeholder:"",type:"email",...n})}),s.jsx(u,{})]})}),s.jsx(c,{control:o.control,name:"password",render:({field:n})=>s.jsxs(m,{children:[s.jsx(h,{children:"Password"}),s.jsx(p,{children:s.jsx(g,{placeholder:"",...n})}),s.jsx(u,{})]})}),s.jsx(f,{type:"submit",disabled:a,children:a?"Logging in...":"Submit"})]})})}export{R as default};
