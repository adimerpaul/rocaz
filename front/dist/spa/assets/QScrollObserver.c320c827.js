import{r as E,j as L,x as v,c as x,o as b,a7 as w,y as p,h as P,g as S,a8 as m,w as y,a1 as H,a9 as C,aa as Q}from"./index.62fbec38.js";function R(){const i=E(!L.value);return i.value===!1&&v(()=>{i.value=!0}),{isHydrated:i}}const O=typeof ResizeObserver!="undefined",T=O===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var M=x({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(i,{emit:g}){let e=null,t,r={width:-1,height:-1};function c(o){o===!0||i.debounce===0||i.debounce==="0"?l():e===null&&(e=setTimeout(l,i.debounce))}function l(){if(e!==null&&(clearTimeout(e),e=null),t){const{offsetWidth:o,offsetHeight:n}=t;(o!==r.width||n!==r.height)&&(r={width:o,height:n},g("resize",r))}}const{proxy:d}=S();if(d.trigger=c,O===!0){let o;const n=a=>{t=d.$el.parentNode,t?(o=new ResizeObserver(c),o.observe(t),l()):a!==!0&&p(()=>{n(!0)})};return v(()=>{n()}),b(()=>{e!==null&&clearTimeout(e),o!==void 0&&(o.disconnect!==void 0?o.disconnect():t&&o.unobserve(t))}),w}else{let a=function(){e!==null&&(clearTimeout(e),e=null),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",c,m.passive),n=void 0)},u=function(){a(),t&&t.contentDocument&&(n=t.contentDocument.defaultView,n.addEventListener("resize",c,m.passive),l())};const{isHydrated:o}=R();let n;return v(()=>{p(()=>{t=d.$el,t&&u()})}),b(a),()=>{if(o.value===!0)return P("object",{class:"q--avoid-card-border",style:T.style,tabindex:-1,type:"text/html",data:T.url,"aria-hidden":"true",onLoad:u})}}}});const{passive:z}=m,j=["both","horizontal","vertical"];var N=x({name:"QScrollObserver",props:{axis:{type:String,validator:i=>j.includes(i),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(i,{emit:g}){const e={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,c;y(()=>i.scrollTarget,()=>{o(),d()});function l(){t!==null&&t();const u=Math.max(0,C(r)),f=Q(r),s={top:u-e.position.top,left:f-e.position.left};if(i.axis==="vertical"&&s.top===0||i.axis==="horizontal"&&s.left===0)return;const h=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";e.position={top:u,left:f},e.directionChanged=e.direction!==h,e.delta=s,e.directionChanged===!0&&(e.direction=h,e.inflectionPoint=e.position),g("scroll",{...e})}function d(){r=H(c,i.scrollTarget),r.addEventListener("scroll",n,z),n(!0)}function o(){r!==void 0&&(r.removeEventListener("scroll",n,z),r=void 0)}function n(u){if(u===!0||i.debounce===0||i.debounce==="0")l();else if(t===null){const[f,s]=i.debounce?[setTimeout(l,i.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];t=()=>{s(f),t=null}}}const{proxy:a}=S();return y(()=>a.$q.lang.rtl,l),v(()=>{c=a.$el.parentNode,d()}),b(()=>{t!==null&&t(),o()}),Object.assign(a,{trigger:n,getPosition:()=>e}),w}});export{M as Q,N as a};
