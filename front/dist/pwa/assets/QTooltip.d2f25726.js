import{c as ee,m as te,V as oe,p as ae,r as O,a as f,W as ne,s as ie,X as le,t as se,Y as re,w as C,o as E,Z as k,$ as x,a0 as ue,h as H,T as ce,g as de,d as fe,U as ve}from"./index.f770a39e.js";import{u as he,v as A,a as ge,p as q,c as me,d as Te,r as D,s as ye,e as M,f as pe}from"./format.c4090fb0.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ae],setup(e,{slots:j,emit:T,attrs:v}){let i,l;const h=de(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>q(e.anchor,o.lang.rtl)),W=f(()=>q(e.self,o.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:B,removeTick:N}=ne(),{registerTimeout:d}=ie(),{transitionProps:R,transitionStyle:U}=le(e),{localScrollTarget:y,changeScrollEvent:V,unconfigureScrollTarget:_}=me(e,P),{anchorEl:a,canShow:$,anchorEvents:r}=Te({showing:c,configureAnchorEl:G}),{show:I,hide:g}=se({showing:c,canShow:$,handleShow:Y,handleHide:Z,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:z,delayHide:F});const{showPortal:p,hidePortal:b,renderPortal:X}=re(h,s,K,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(m,n=>{(n===!0?pe:D)(t)}),E(()=>{D(t)})}function Y(t){p(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{p(!0),T("show",t)},e.transitionDuration)}function Z(t){N(),b(),S(),d(()=>{b(!0),T("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),_(),k(r,"tooltipTemp")}function u(){ye({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function z(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{I(t)},e.delay)}function F(t){o.platform.is.mobile===!0&&(k(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function G(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){y.value=ue(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;V(y.value,t)}}function J(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,U.value],role:"tooltip"},fe(j.default)):null}function K(){return H(ce,R.value,J)}return E(S),Object.assign(h.proxy,{updatePosition:u}),X}});export{Pe as Q};
