import{e as ee,s as te,a9 as ae,x as oe,r as O,f,aa as ne,z as ie,ab as le,A as se,ac as re,w as C,b as E,a2 as k,a1 as x,ad as ue,h as H,T as ce,g as de,i as fe,Y as ve}from"./index.dd2f74c0.js";import{u as he,v as A,a as ge,p as q,c as me,d as Te,r as D,s as ye,e as M,f as pe}from"./format.441614fa.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...oe],setup(e,{slots:j,emit:T,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>q(e.anchor,a.lang.rtl)),Q=f(()=>q(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:N}=ne(),{registerTimeout:d}=ie(),{transitionProps:R,transitionStyle:_}=le(e),{localScrollTarget:y,changeScrollEvent:z,unconfigureScrollTarget:I}=me(e,P),{anchorEl:o,canShow:U,anchorEvents:r}=Te({showing:c,configureAnchorEl:K}),{show:V,hide:g}=se({showing:c,canShow:U,handleShow:$,handleHide:F,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:p,hidePortal:b,renderPortal:Y}=re(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(m,n=>{(n===!0?pe:D)(t)}),E(()=>{D(t)})}function $(t){p(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),T("show",t)},e.transitionDuration)}function F(t){N(),b(),S(),d(()=>{b(!0),T("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),k(r,"tooltipTemp")}function u(){ye({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function J(t){a.platform.is.mobile===!0&&(k(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){y.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;z(y.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,_.value],role:"tooltip"},fe(j.default)):null}function Z(){return H(ce,R.value,X)}return E(S),Object.assign(h.proxy,{updatePosition:u}),Y}});export{Pe as Q};
