import{e as L,r as u,p as E,a6 as w,f as a,ae as g,af as R,w as K,ag as O,q as k,h as r,g as q,m as P,j as I,k as z,i as M,ah as U}from"./index.b07986f1.js";import{a as _,Q as x}from"./QScrollObserver.455bc73a.js";var G=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:c}){const{proxy:{$q:n}}=q(),d=u(null),i=u(n.screen.height),y=u(t.container===!0?0:n.screen.width),S=u({position:0,direction:"down",inflectionPoint:0}),h=u(0),l=u(E.value===!0?0:w()),Q=a(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=a(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),T=a(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),W=a(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function F(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=o,t.onScroll!==void 0&&c("scroll",o)}}function j(e){const{height:o,width:s}=e;let f=!1;i.value!==o&&(f=!0,i.value=o,t.onScrollHeight!==void 0&&c("scrollHeight",o),b()),y.value!==s&&(f=!0,y.value=s),f===!0&&t.onResize!==void 0&&c("resize",e)}function B({height:e}){h.value!==e&&(h.value=e,b())}function b(){if(t.container===!0){const e=i.value>h.value?w():0;l.value!==e&&(l.value=e)}}let v=null;const $={instances:{},view:a(()=>t.view),isContainer:a(()=>t.container),rootRef:d,height:i,containerHeight:h,scrollbarWidth:l,totalWidth:a(()=>y.value+l.value),rows:a(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:g({size:0,offset:0,space:!1}),right:g({size:300,offset:0,space:!1}),footer:g({size:0,offset:0,space:!1}),left:g({size:300,offset:0,space:!1}),scroll:S,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,s){$[e][o]=s}};if(R(P,$),w()>0){let s=function(){e=null,o.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(s,300)},p=function(C){e!==null&&C==="remove"&&(clearTimeout(e),s()),window[`${C}EventListener`]("resize",f)},e=null;const o=document.body;K(()=>t.container!==!0?"add":"remove",p),t.container!==!0&&p("add"),O(()=>{p("remove")})}return()=>{const e=k(m.default,[r(_,{onScroll:F}),r(x,{onResize:j})]),o=r("div",{class:Q.value,style:H.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?r("div",{class:"q-layout-container overflow-hidden",ref:d},[r(x,{onResize:B}),r("div",{class:"absolute-full",style:T.value},[r("div",{class:"scroll",style:W.value},[o])])]):o}}}),J=L({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:c}}=q(),n=I(P,z);if(n===z)return console.error("QPageContainer needs to be child of QLayout"),z;R(U,!0);const d=a(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>r("div",{class:"q-page-container",style:d.value},M(m.default))}});export{G as Q,J as a};
