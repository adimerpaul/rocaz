import{e as $e,aA as je,aB as gt,aC as ht,aD as yt,s as Rt,v as Ht,a9 as _t,x as Dt,r as B,f as m,y as Lt,aa as Kt,z as Nt,ab as $t,A as jt,ac as Qt,w as oe,aE as Ut,ap as Wt,aF as Xt,aG as rt,ad as Yt,aH as Gt,h as C,i as Jt,T as Zt,b as Qe,g as Ue,aI as el,aJ as tl,aK as ll,Y as ve,ai as ul,n as ne,aL as nl,o as ol,aM as al,aN as il,aO as rl,aP as sl,aQ as st,aR as Fe,aS as cl,aT as dl,a0 as Ke,O as fl,aU as vl,ao as Ve,$ as ml,aV as Sl,au as gl,q as hl}from"./index.dd2f74c0.js";import{u as yl,v as ct,a as bl,c as wl,d as Cl,p as dt,r as ft,s as Vl,f as xl,n as vt,Q as kl}from"./format.441614fa.js";import{a as Al,b as pl,Q as Ol}from"./QItem.a8a62a25.js";var Fl=$e({name:"QField",inheritAttrs:!1,props:{...je,tag:{type:String,default:"label"}},emits:gt,setup(){return ht(yt({requiredForAttr:!1,tagProp:!0}))}}),ql=$e({name:"QMenu",inheritAttrs:!1,props:{...yl,...Rt,...Ht,..._t,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ct},self:{type:String,validator:ct},offset:{type:Array,validator:bl},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Dt,"click","escapeKey"],setup(e,{slots:c,emit:r,attrs:w}){let p=null,i,O,h;const y=Ue(),{proxy:T}=y,{$q:s}=T,S=B(null),b=B(!1),k=m(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),z=Lt(e,s),{registerTick:K,removeTick:P}=Kt(),{registerTimeout:$}=Nt(),{transitionProps:U,transitionStyle:R}=$t(e),{localScrollTarget:F,changeScrollEvent:me,unconfigureScrollTarget:q}=wl(e,v),{anchorEl:L,canShow:Z}=Cl({showing:b}),{hide:te}=jt({showing:b,canShow:Z,handleShow:re,handleHide:l,hideOnRouteChange:k,processOnMount:!0}),{showPortal:W,hidePortal:ae,renderPortal:D}=Qt(y,S,E,"menu"),ee={anchorEl:L,innerRef:S,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return te(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&ve(u),!0}},ie=m(()=>dt(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),le=m(()=>e.cover===!0?ie.value:dt(e.self||"top start",s.lang.rtl)),j=m(()=>(e.square===!0?" q-menu--square":"")+(z.value===!0?" q-menu--dark q-dark":"")),ke=m(()=>e.autoClose===!0?{onClick:V}:{}),ue=m(()=>b.value===!0&&e.persistent!==!0);oe(ue,u=>{u===!0?(el(g),xl(ee)):(rt(g),ft(ee))});function X(){tl(()=>{let u=S.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function re(u){if(p=e.noRefocus===!1?document.activeElement:null,Ut(M),W(),v(),i=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const H=Wt(u);if(H.left!==void 0){const{top:Y,left:Se}=L.value.getBoundingClientRect();i={left:H.left-Se,top:H.top-Y}}}O===void 0&&(O=oe(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,f)),e.noFocus!==!0&&document.activeElement.blur(),K(()=>{f(),e.noFocus!==!0&&X()}),$(()=>{s.platform.is.ios===!0&&(h=e.autoClose,S.value.click()),f(),W(!0),r("show",u)},e.transitionDuration)}function l(u){P(),ae(),o(!0),p!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?p.closest('[tabindex]:not([tabindex^="-"])'):void 0)||p).focus(),p=null),$(()=>{ae(!0),r("hide",u)},e.transitionDuration)}function o(u){i=void 0,O!==void 0&&(O(),O=void 0),(u===!0||b.value===!0)&&(Xt(M),q(),ft(ee),rt(g)),u!==!0&&(p=null)}function v(){(L.value!==null||e.scrollTarget!==void 0)&&(F.value=Yt(L.value,e.scrollTarget),me(F.value,f))}function V(u){h!==!0?(Gt(T,u),r("click",u)):h=!1}function M(u){ue.value===!0&&e.noFocus!==!0&&ll(S.value,u.target)!==!0&&X()}function g(u){r("escapeKey"),te(u)}function f(){Vl({targetEl:S.value,offset:e.offset,anchorEl:L.value,anchorOrigin:ie.value,selfOrigin:le.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function E(){return C(Zt,U.value,()=>b.value===!0?C("div",{role:"menu",...w,ref:S,tabindex:-1,class:["q-menu q-position-engine scroll"+j.value,w.class],style:[w.style,R.value],...ke.value},Jt(c.default)):null)}return Qe(o),Object.assign(T,{focus:X,updatePosition:f}),D}});let Be=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,Be=e.scrollLeft>=0,e.remove()}const Q=1e3,Ml=["start","center","end","start-force","center-force","end-force"],bt=Array.prototype.filter,Tl=window.getComputedStyle(document.body).overflowAnchor===void 0?ul:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];bt.call(r,p=>p.dataset&&p.dataset.qVsAnchor!==void 0).forEach(p=>{delete p.dataset.qVsAnchor});const w=r[c];w&&w.dataset&&(w.dataset.qVsAnchor="")}))};function xe(e,c){return e+c}function Ne(e,c,r,w,p,i,O,h){const y=e===window?document.scrollingElement||document.documentElement:e,T=p===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-O-h,scrollMaxSize:0,offsetStart:-O,offsetEnd:-h};if(p===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=y.scrollLeft,s.scrollViewSize+=y.clientWidth),s.scrollMaxSize=y.scrollWidth,i===!0&&(s.scrollStart=(Be===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=y.scrollTop,s.scrollViewSize+=y.clientHeight),s.scrollMaxSize=y.scrollHeight),r!==null)for(let S=r.previousElementSibling;S!==null;S=S.previousElementSibling)S.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=S[T]);if(w!==null)for(let S=w.nextElementSibling;S!==null;S=S.nextElementSibling)S.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=S[T]);if(c!==e){const S=y.getBoundingClientRect(),b=c.getBoundingClientRect();p===!0?(s.offsetStart+=b.left-S.left,s.offsetEnd-=b.width):(s.offsetStart+=b.top-S.top,s.offsetEnd-=b.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function mt(e,c,r,w){c==="end"&&(c=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(w===!0&&(c=(Be===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):r===!0?(w===!0&&(c=(Be===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function qe(e,c,r,w){if(r>=w)return 0;const p=c.length,i=Math.floor(r/Q),O=Math.floor((w-1)/Q)+1;let h=e.slice(i,O).reduce(xe,0);return r%Q!==0&&(h-=c.slice(i*Q,r).reduce(xe,0)),w%Q!==0&&w!==p&&(h-=c.slice(w,O*Q).reduce(xe,0)),h}const wt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},_l=Object.keys(wt),zl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...wt};function El({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:r,virtualScrollItemSizeComputed:w}){const p=Ue(),{props:i,emit:O,proxy:h}=p,{$q:y}=h;let T,s,S,b=[],k;const z=B(0),K=B(0),P=B({}),$=B(null),U=B(null),R=B(null),F=B({from:0,to:0}),me=m(()=>i.tableColspan!==void 0?i.tableColspan:100);w===void 0&&(w=m(()=>i.virtualScrollItemSize));const q=m(()=>w.value+";"+i.virtualScrollHorizontal),L=m(()=>q.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);oe(L,()=>{j()}),oe(q,Z);function Z(){le(s,!0)}function te(l){le(l===void 0?s:l)}function W(l,o){const v=c();if(v==null||v.nodeType===8)return;const V=Ne(v,r(),$.value,U.value,i.virtualScrollHorizontal,y.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);S!==V.scrollViewSize&&j(V.scrollViewSize),D(v,V,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Ml.indexOf(o)!==-1?o:s!==-1&&l>s?"end":"start")}function ae(){const l=c();if(l==null||l.nodeType===8)return;const o=Ne(l,r(),$.value,U.value,i.virtualScrollHorizontal,y.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),v=e.value-1,V=o.scrollMaxSize-o.offsetStart-o.offsetEnd-K.value;if(T===o.scrollStart)return;if(o.scrollMaxSize<=0){D(l,o,0,0);return}S!==o.scrollViewSize&&j(o.scrollViewSize),ee(F.value.from);const M=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(k[v],o.scrollViewSize/2));if(M>0&&Math.ceil(o.scrollStart)>=M){D(l,o,v,o.scrollMaxSize-o.offsetEnd-b.reduce(xe,0));return}let g=0,f=o.scrollStart-o.offsetStart,E=f;if(f<=V&&f+o.scrollViewSize>=z.value)f-=z.value,g=F.value.from,E=f;else for(let u=0;f>=b[u]&&g<v;u++)f-=b[u],g+=Q;for(;f>0&&g<v;)f-=k[g],f>-o.scrollViewSize?(g++,E=f):E=k[g]+f;D(l,o,g,E)}function D(l,o,v,V,M){const g=typeof M=="string"&&M.indexOf("-force")!==-1,f=g===!0?M.replace("-force",""):M,E=f!==void 0?f:"start";let u=Math.max(0,v-P.value[E]),H=u+P.value.total;H>e.value&&(H=e.value,u=Math.max(0,H-P.value.total)),T=o.scrollStart;const Y=u!==F.value.from||H!==F.value.to;if(Y===!1&&f===void 0){ue(v);return}const{activeElement:Se}=document,G=R.value;Y===!0&&G!==null&&G!==Se&&G.contains(Se)===!0&&(G.addEventListener("focusout",ie),setTimeout(()=>{G!==null&&G.removeEventListener("focusout",ie)})),Tl(G,v-u);const Me=f!==void 0?k.slice(u,v).reduce(xe,0):0;if(Y===!0){const se=H>=F.value.from&&u<=F.value.to?F.value.to:H;F.value={from:u,to:se},z.value=qe(b,k,0,u),K.value=qe(b,k,H,e.value),requestAnimationFrame(()=>{F.value.to!==H&&T===o.scrollStart&&(F.value={from:F.value.from,to:H},K.value=qe(b,k,H,e.value))})}requestAnimationFrame(()=>{if(T!==o.scrollStart)return;Y===!0&&ee(u);const se=k.slice(u,v).reduce(xe,0),ce=se+o.offsetStart+z.value,Te=ce+k[v];let Ae=ce+V;if(f!==void 0){const Pe=se-Me,pe=o.scrollStart+Pe;Ae=g!==!0&&pe<ce&&Te<pe+o.scrollViewSize?pe:f==="end"?Te-o.scrollViewSize:ce-(f==="start"?0:Math.round((o.scrollViewSize-k[v])/2))}T=Ae,mt(l,Ae,i.virtualScrollHorizontal,y.lang.rtl),ue(v)})}function ee(l){const o=R.value;if(o){const v=bt.call(o.children,u=>u.classList&&u.classList.contains("q-virtual-scroll--skip")===!1),V=v.length,M=i.virtualScrollHorizontal===!0?u=>u.getBoundingClientRect().width:u=>u.offsetHeight;let g=l,f,E;for(let u=0;u<V;){for(f=M(v[u]),u++;u<V&&v[u].classList.contains("q-virtual-scroll--with-prev")===!0;)f+=M(v[u]),u++;E=f-k[g],E!==0&&(k[g]+=E,b[Math.floor(g/Q)]+=E),g++}}}function ie(){R.value!==null&&R.value!==void 0&&R.value.focus()}function le(l,o){const v=1*w.value;(o===!0||Array.isArray(k)===!1)&&(k=[]);const V=k.length;k.length=e.value;for(let g=e.value-1;g>=V;g--)k[g]=v;const M=Math.floor((e.value-1)/Q);b=[];for(let g=0;g<=M;g++){let f=0;const E=Math.min((g+1)*Q,e.value);for(let u=g*Q;u<E;u++)f+=k[u];b.push(f)}s=-1,T=void 0,z.value=qe(b,k,0,F.value.from),K.value=qe(b,k,F.value.to,e.value),l>=0?(ee(F.value.from),ne(()=>{W(l)})):X()}function j(l){if(l===void 0&&typeof window!="undefined"){const f=c();f!=null&&f.nodeType!==8&&(l=Ne(f,r(),$.value,U.value,i.virtualScrollHorizontal,y.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}S=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,v=parseFloat(i.virtualScrollSliceRatioAfter)||0,V=1+o+v,M=l===void 0||l<=0?1:Math.ceil(l/w.value),g=Math.max(1,M,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/V));P.value={total:Math.ceil(g*V),start:Math.ceil(g*o),center:Math.ceil(g*(.5+o)),end:Math.ceil(g*(1+o)),view:M}}function ke(l,o){const v=i.virtualScrollHorizontal===!0?"width":"height",V={["--q-virtual-scroll-item-"+v]:w.value+"px"};return[l==="tbody"?C(l,{class:"q-virtual-scroll__padding",key:"before",ref:$},[C("tr",[C("td",{style:{[v]:`${z.value}px`,...V},colspan:me.value})])]):C(l,{class:"q-virtual-scroll__padding",key:"before",ref:$,style:{[v]:`${z.value}px`,...V}}),C(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},o.flat()),l==="tbody"?C(l,{class:"q-virtual-scroll__padding",key:"after",ref:U},[C("tr",[C("td",{style:{[v]:`${K.value}px`,...V},colspan:me.value})])]):C(l,{class:"q-virtual-scroll__padding",key:"after",ref:U,style:{[v]:`${K.value}px`,...V}})]}function ue(l){s!==l&&(i.onVirtualScroll!==void 0&&O("virtualScroll",{index:l,from:F.value.from,to:F.value.to-1,direction:l<s?"decrease":"increase",ref:h}),s=l)}j();const X=nl(ae,y.platform.is.ios===!0?120:35);ol(()=>{j()});let re=!1;return al(()=>{re=!0}),il(()=>{if(re!==!0)return;const l=c();T!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?mt(l,T,i.virtualScrollHorizontal,y.lang.rtl):W(s)}),Qe(()=>{X.cancel()}),Object.assign(h,{scrollTo:W,reset:Z,refresh:te}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:P,setVirtualScrollSize:j,onVirtualScrollEvt:X,localResetVirtualScroll:le,padVirtualScroll:ke,scrollTo:W,reset:Z,refresh:te}}const St=e=>["add","add-unique","toggle"].includes(e),Il=".*+?^${}()|[]\\",Bl=Object.keys(je);var Dl=$e({name:"QSelect",inheritAttrs:!1,props:{...zl,...rl,...je,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:St},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:r}){const{proxy:w}=Ue(),{$q:p}=w,i=B(!1),O=B(!1),h=B(-1),y=B(""),T=B(!1),s=B(!1);let S=null,b=null,k,z,K,P=null,$,U,R,F;const me=B(null),q=B(null),L=B(null),Z=B(null),te=B(null),W=sl(e),ae=vl(ut),D=m(()=>Array.isArray(e.options)?e.options.length:0),ee=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ie,virtualScrollSliceSizeComputed:le,localResetVirtualScroll:j,padVirtualScroll:ke,onVirtualScrollEvt:ue,scrollTo:X,setVirtualScrollSize:re}=El({virtualScrollLength:D,getVirtualScrollTarget:kt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:ee}),l=yt(),o=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&k!==void 0?k:[],d=a.map(A=>xt(A,n));return e.modelValue===null&&t===!0?d.filter(A=>A!==null):d}return a}),v=m(()=>{const t={};return Bl.forEach(a=>{const n=e[a];n!==void 0&&(t[a]=n)}),t}),V=m(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),M=m(()=>st(o.value)),g=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),f=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=m(()=>D.value===0),u=m(()=>o.value.map(t=>N.value(t)).join(", ")),H=m(()=>e.displayValue!==void 0?e.displayValue:u.value),Y=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Se=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),G=m(()=>l.focused.value===!0?e.tabindex:-1),Me=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),se=m(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ce=m(()=>o.value.map((t,a)=>({index:a,opt:t,html:Y.value(t),selected:!0,removeAtIndex:Vt,toggleOption:de,tabindex:G.value}))),Te=m(()=>{if(D.value===0)return[];const{from:t,to:a}=ie.value;return e.options.slice(t,a).map((n,d)=>{const A=ge.value(n)===!0,x=_e(n)===!0,_=t+d,I={clickable:!0,active:x,activeClass:pe.value,manualFocus:!0,focused:!1,disable:A,tabindex:-1,dense:e.optionsDense,dark:V.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${_}`,onClick:()=>{de(n)}};return A!==!0&&(h.value===_&&(I.focused=!0),p.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&he(_)})),{index:_,opt:n,html:Y.value(n),label:N.value(n),selected:I.active,focused:I.focused,toggleOption:de,setOptionIndex:he,itemProps:I}})}),Ae=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:p.iconSet.arrow.dropdown),Pe=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),pe=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),J=m(()=>He(e.optionValue,"value")),N=m(()=>He(e.optionLabel,"label")),ge=m(()=>He(e.optionDisable,"disable")),ze=m(()=>o.value.map(t=>J.value(t))),Ct=m(()=>{const t={onInput:ut,onChange:ae,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(a){z===!0&&Ve(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ae,t});oe(o,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(O.value!==!0&&i.value!==!0||M.value!==!0)&&(K!==!0&&Ce(),(O.value===!0||i.value===!0)&&ye(""))},{immediate:!0}),oe(()=>e.fillInput,Ce),oe(i,De),oe(D,Pt);function We(t){return e.emitValue===!0?J.value(t):t}function Re(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const a=e.modelValue.slice();r("remove",{index:t,value:a.splice(t,1)[0]}),r("update:modelValue",a)}else r("update:modelValue",null)}function Vt(t){Re(t),l.focus()}function Xe(t,a){const n=We(t);if(e.multiple!==!0){e.fillInput===!0&&Oe(N.value(t),!0,!0),r("update:modelValue",n);return}if(o.value.length===0){r("add",{index:0,value:n}),r("update:modelValue",e.multiple===!0?[n]:n);return}if(a===!0&&_e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();r("add",{index:d.length,value:n}),d.push(n),r("update:modelValue",d)}function de(t,a){if(l.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const n=J.value(t);if(e.multiple!==!0){a!==!0&&(Oe(e.fillInput===!0?N.value(t):"",!0,!0),fe()),q.value!==null&&q.value.focus(),(o.value.length===0||Fe(J.value(o.value[0]),n)!==!0)&&r("update:modelValue",e.emitValue===!0?n:t);return}if((z!==!0||T.value===!0)&&l.focus(),Ye(),o.value.length===0){const x=e.emitValue===!0?n:t;r("add",{index:0,value:x}),r("update:modelValue",e.multiple===!0?[x]:x);return}const d=e.modelValue.slice(),A=ze.value.findIndex(x=>Fe(x,n));if(A!==-1)r("remove",{index:A,value:d.splice(A,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const x=e.emitValue===!0?n:t;r("add",{index:d.length,value:x}),d.push(x)}r("update:modelValue",d)}function he(t){if(p.platform.is.desktop!==!0)return;const a=t!==-1&&t<D.value?t:-1;h.value!==a&&(h.value=a)}function Ee(t=1,a){if(i.value===!0){let n=h.value;do n=vt(n+t,-1,D.value-1);while(n!==-1&&n!==h.value&&ge.value(e.options[n])===!0);h.value!==n&&(he(n),X(n),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Ie(n>=0?N.value(e.options[n]):$,!0))}}function xt(t,a){const n=d=>Fe(J.value(d),t);return e.options.find(n)||a.find(n)||t}function He(t,a){const n=t!==void 0?t:a;return typeof n=="function"?n:d=>d!==null&&typeof d=="object"&&n in d?d[n]:d}function _e(t){const a=J.value(t);return ze.value.find(n=>Fe(n,a))!==void 0}function Ye(t){e.useInput===!0&&q.value!==null&&(t===void 0||q.value===t.target&&t.target.value===u.value)&&q.value.select()}function Ge(t){ml(t,27)===!0&&i.value===!0&&(Ve(t),fe(),Ce()),r("keyup",t)}function Je(t){const{value:a}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",S!==null&&(clearTimeout(S),S=null),b!==null&&(clearTimeout(b),b=null),Ce(),typeof a=="string"&&a.length!==0){const n=a.toLocaleLowerCase(),d=x=>{const _=e.options.find(I=>x.value(I).toLocaleLowerCase()===n);return _===void 0?!1:(o.value.indexOf(_)===-1?de(_):fe(),!0)},A=x=>{d(J)!==!0&&(d(N)===!0||x===!0||ye(a,!0,()=>A(!0)))};A()}else l.clearValue(t)}function Ze(t){r("keypress",t)}function et(t){if(r("keydown",t),Sl(t)===!0)return;const a=y.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.multiple!==!0&&(h.value!==-1||a===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&n===!1){be();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ve(t),we();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Re(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(ve(t),h.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&le.value!==void 0&&(ve(t),h.value=Math.max(-1,Math.min(D.value,h.value+(t.keyCode===33?-1:1)*le.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),Ee(t.keyCode===38?-1:1,e.multiple));const d=D.value;if((R===void 0||F<Date.now())&&(R=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){i.value!==!0&&we(t);const A=t.key.toLocaleLowerCase(),x=R.length===1&&R[0]===A;F=Date.now()+1500,x===!1&&(ve(t),R+=A);const _=new RegExp("^"+R.split("").map(Le=>Il.indexOf(Le)!==-1?"\\"+Le:Le).join(".*"),"i");let I=h.value;if(x===!0||I<0||_.test(N.value(e.options[I]))!==!0)do I=vt(I+1,-1,d-1);while(I!==h.value&&(ge.value(e.options[I])===!0||_.test(N.value(e.options[I]))!==!0));h.value!==I&&ne(()=>{he(I),X(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Ie(N.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&ve(t),h.value!==-1&&h.value<d){de(e.options[h.value]);return}if(a===!0){const A=(x,_)=>{if(_){if(St(_)!==!0)return}else _=e.newValueMode;if(Oe("",e.multiple!==!0,!0),x==null)return;(_==="toggle"?de:Xe)(x,_==="add-unique"),e.multiple!==!0&&(q.value!==null&&q.value.focus(),fe())};if(e.onNewValue!==void 0?r("newValue",y.value,A):A(y.value),e.multiple!==!0)return}i.value===!0?be():l.innerLoading.value!==!0&&we()}}function tt(){return z===!0?te.value:L.value!==null&&L.value.contentEl!==null?L.value.contentEl:void 0}function kt(){return tt()}function At(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?ce.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?ce.value.map((t,a)=>C(kl,{key:"option-"+a,removable:l.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:G.value,onRemove(){t.removeAtIndex(a)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[C("span",{[Se.value===!0?"innerHTML":"textContent"]:H.value})]}function lt(){if(E.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:y.value}):void 0;const t=c.option!==void 0?c.option:n=>C(Ol,{key:n.index,...n.itemProps},()=>C(Al,()=>C(pl,()=>C("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let a=ke("div",Te.value.map(t));return c["before-options"]!==void 0&&(a=c["before-options"]().concat(a)),hl(c["after-options"],a)}function pt(t,a){const n=a===!0?{...Me.value,...l.splitAttrs.attributes.value}:void 0,d={ref:a===!0?q:void 0,key:"i_t",class:g.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...n,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ct.value};return t!==!0&&z===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),C("input",d)}function ut(t){S!==null&&(clearTimeout(S),S=null),b!==null&&(clearTimeout(b),b=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ie(t.target.value||""),K=!0,$=y.value,l.focused.value!==!0&&(z!==!0||T.value===!0)&&l.focus(),e.onFilter!==void 0&&(S=setTimeout(()=>{S=null,ye(y.value)},e.inputDebounce)))}function Ie(t,a){y.value!==t&&(y.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?r("inputValue",t):b=setTimeout(()=>{b=null,r("inputValue",t)},e.inputDebounce))}function Oe(t,a,n){K=n!==!0,e.useInput===!0&&(Ie(t,!0),(a===!0||n!==!0)&&($=t),a!==!0&&ye(t))}function ye(t,a,n){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?r("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&K!==!0&&t===N.value(o.value[0])&&(t="");const d=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);P!==null&&clearTimeout(P),P=d,r("filter",t,(A,x)=>{(a===!0||l.focused.value===!0)&&P===d&&(clearTimeout(P),typeof A=="function"&&A(),s.value=!1,ne(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?i.value===!0&&fe():i.value===!0?De(!0):i.value=!0),typeof x=="function"&&ne(()=>{x(w)}),typeof n=="function"&&ne(()=>{n(w)})}))},()=>{l.focused.value===!0&&P===d&&(clearTimeout(P),l.innerLoading.value=!1,s.value=!1),i.value===!0&&(i.value=!1)})}function Ot(){return C(ql,{ref:L,class:f.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:V.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Pe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...se.value,onScrollPassive:ue,onBeforeShow:ot,onBeforeHide:Ft,onShow:qt},lt)}function Ft(t){at(t),be()}function qt(){re()}function Mt(t){Ve(t),q.value!==null&&q.value.focus(),T.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Tt(t){Ve(t),ne(()=>{T.value=!1})}function zt(){const t=[C(Fl,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:V.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:y.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Mt,onBlur:Tt},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(C("div",{ref:te,class:f.value+" scroll",style:e.popupContentStyle,...se.value,onClick:Ke,onScrollPassive:ue},lt())),C(gl,{ref:Z,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:U,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Et,onHide:It,onShow:Bt},()=>C("div",{class:"q-select__dialog"+(V.value===!0?" q-select__dialog--dark q-dark":"")+(T.value===!0?" q-select__dialog--focused":"")},t))}function Et(t){at(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function It(t){fe(),l.focused.value===!1&&r("blur",t),Ce()}function Bt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&q.value!==null&&q.value!==t&&q.value.focus(),re()}function be(){O.value!==!0&&(h.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(P!==null&&(clearTimeout(P),P=null),l.innerLoading.value===!0&&(r("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function we(t){l.editable.value===!0&&(z===!0?(l.onControlFocusin(t),O.value=!0,ne(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ye(y.value):(E.value!==!0||c["no-option"]!==void 0)&&(i.value=!0))}function fe(){O.value=!1,be()}function Ce(){e.useInput===!0&&Oe(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&N.value(o.value[0])||"",!0,!0)}function De(t){let a=-1;if(t===!0){if(o.value.length!==0){const n=J.value(o.value[0]);a=e.options.findIndex(d=>Fe(J.value(d),n))}j(a)}he(a)}function Pt(t,a){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),ne(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>a?j():De(!0))}))}function nt(){O.value===!1&&L.value!==null&&L.value.updatePosition()}function ot(t){t!==void 0&&Ve(t),r("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function at(t){t!==void 0&&Ve(t),r("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function it(){z=p.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),U=p.platform.is.ios===!0&&z===!0&&e.useInput===!0?"fade":e.transitionShow}return cl(it),dl(nt),it(),Qe(()=>{S!==null&&clearTimeout(S),b!==null&&clearTimeout(b)}),Object.assign(w,{showPopup:we,hidePopup:fe,removeAtIndex:Re,add:Xe,toggleOption:de,getOptionIndex:()=>h.value,setOptionIndex:he,moveOptionSelection:Ee,filter:ye,updateMenuPosition:nt,updateInputValue:Oe,isOptionSelected:_e,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>J.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:me,targetRef:q,hasValue:M,showPopup:we,floatingLabel:m(()=>e.hideSelected!==!0&&M.value===!0||typeof y.value=="number"||y.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(O.value===!0||E.value!==!0||c["no-option"]!==void 0))return z===!0?zt():Ot();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{Ce(),be()})},onClick(t){if(Ke(t),z!==!0&&i.value===!0){be(),q.value!==null&&q.value.focus();return}we(t)}},getControl:t=>{const a=At(),n=t===!0||O.value!==!0||z!==!0;if(e.useInput===!0)a.push(pt(t,n));else if(l.editable.value===!0){const A=n===!0?Me.value:void 0;a.push(C("input",{ref:n===!0?q:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:H.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...A,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(W.value!==void 0&&e.disable!==!0&&ze.value.length!==0){const A=ze.value.map(x=>C("option",{value:x,selected:!0}));a.push(C("select",{class:"hidden",name:W.value,multiple:e.multiple},A))}const d=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...d,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[C(fl,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Ae.value})]:null}),ht(l)}});export{Dl as Q,ql as a,El as b,_l as c,Be as r,zl as u};
