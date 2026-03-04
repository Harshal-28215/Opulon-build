import{c as o,r as t}from"./index-BbjRzWUa.js";/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],l=o("pen-line",i),u=()=>{const[a,e]=t.useState(null),s=void 0;return t.useEffect(()=>{(async()=>{try{const c=await fetch(`${s}/admin/check`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json"}});if(c.ok){const n=await c.json();n&&n.success!==!1?e(!0):e(!1)}else e(!1)}catch(c){console.error("Admin check failed:",c),e(!1)}})()},[s]),a};export{l as P,u};
