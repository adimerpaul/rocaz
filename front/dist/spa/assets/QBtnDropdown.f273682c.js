import{c as B,a as i,h as r,d as m,aR as q,W as H,r as h,aS as I,aT as V,w as v,x as M,K as O,Q as d,g as P,ai as _}from"./index.62fbec38.js";import{b as j}from"./QMarkupTable.685dae0c.js";var R=B({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const a=i(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>r("div",{class:a.value},m(t.default))}});const $=Object.keys(q),L=e=>$.reduce((t,a)=>{const o=e[a];return o!==void 0&&(t[a]=o),t},{});var G=B({name:"QBtnDropdown",props:{...q,...H,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:a}){const{proxy:o}=P(),l=h(e.modelValue),u=h(null),c=I(),f=i(()=>{const n={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c.value,"aria-label":e.toggleAriaLabel||o.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),S=i(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=i(()=>V(e)),w=i(()=>L(e));v(()=>e.modelValue,n=>{u.value!==null&&u.value[n?"show":"hide"]()}),v(()=>e.split,s);function C(n){l.value=!0,a("beforeShow",n)}function y(n){a("show",n),a("update:modelValue",!0)}function A(n){l.value=!1,a("beforeHide",n)}function D(n){a("hide",n),a("update:modelValue",!1)}function Q(n){a("click",n)}function k(n){_(n),s(),a("click",n)}function x(n){u.value!==null&&u.value.toggle(n)}function g(n){u.value!==null&&u.value.show(n)}function s(n){u.value!==null&&u.value.hide(n)}return Object.assign(o,{show:g,hide:s,toggle:x}),M(()=>{e.modelValue===!0&&g()}),()=>{const n=[r(O,{class:S.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(r(j,{ref:u,id:c.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:C,onShow:y,onBeforeHide:A,onHide:D},t.default)),e.split===!1?r(d,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:Q},{default:()=>m(t.label,[]).concat(n),loading:t.loading}):r(R,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[r(d,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:t.label,loading:t.loading}),r(d,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{G as Q};
