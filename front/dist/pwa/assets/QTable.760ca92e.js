import{c as H,a as c,h as r,d as te,g as z,f as bt,K as Le,r as A,w as V,au as Ve,x as De,av as mt,aw as St,o as Me,a0 as yt,a7 as xe,k as Ee,n as je,ax as ht,q as Ae,ay as wt,az as _t,aA as Te,aB as be,aC as Be,aD as Pt,y as Ne,aE as qt,aF as ge,aG as N,Q as Z,aH as Ct}from"./index.f770a39e.js";import{Q as kt}from"./QList.44228d74.js";import{u as Rt,c as xt,d as Tt,e as Qe,Q as Bt}from"./QSelect.429dffeb.js";var rl=H({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const n=z(),v=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:v.value},te(a.default));const o=n.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(f===void 0)return;const{row:u}=e.props;return r("td",{class:v.value+f.__tdClass(u),style:f.__tdStyle(u)},te(a.default))}}}),Ot=H({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:n}){const v=z(),{proxy:{$q:o}}=v,f=u=>{n("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},te(a.default));let u,s;const d=v.vnode.key;if(d){if(u=e.props.colsMap[d],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const l=u.align==="right"?"unshift":"push";s=bt(a.default,[]),s[l](r(Le,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else s=te(a.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:l=>{u.sortable===!0&&e.props.sort(u),f(l)}};return r("th",S,s)}}});function He(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const Ft={list:kt,table:Tt},$t=["list","table","__qtable"];var Lt=H({name:"QVirtualScroll",props:{...Rt,type:{type:String,default:"list",validator:e=>$t.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:n}){let v;const o=A(null),f=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:d,onVirtualScrollEvt:S}=xt({virtualScrollLength:f,getVirtualScrollTarget:q,getVirtualScrollEl:P}),l=c(()=>{if(f.value===0)return[];const O=(F,R)=>({index:u.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),b=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(f,()=>{s()}),V(()=>e.scrollTarget,()=>{y(),w()});function P(){return o.value.$el||o.value}function q(){return v}function w(){v=yt(P(),e.scrollTarget),v.addEventListener("scroll",S,xe.passive)}function y(){v!==void 0&&(v.removeEventListener("scroll",S,xe.passive),v=void 0)}function B(){let O=d(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),Ee(a.after,O)}return Ve(()=>{s()}),De(()=>{w()}),mt(()=>{w()}),St(()=>{y()}),Me(()=>{y()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+b.value},B()):r(Ft[e.type],{...n,ref:o,class:[n.class,b.value],..._.value},B)}}});const Vt={xs:2,sm:4,md:6,lg:10,xl:14};function Oe(e,a,n){return{transform:a===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Dt=H({name:"QLinearProgress",props:{...je,...ht,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:n}=z(),v=Ae(e,n.$q),o=wt(e,Vt),f=c(()=>e.indeterminate===!0||e.query===!0),u=c(()=>e.reverse!==e.query),s=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>Oe(e.buffer!==void 0?e.buffer:1,u.value,n.$q)),l=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${l.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),_=c(()=>Oe(f.value===!0?1:e.value,u.value,n.$q)),P=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${l.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),q=c(()=>({width:`${e.value*100}%`})),w=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${l.value}`);return()=>{const y=[r("div",{class:b.value,style:S.value}),r("div",{class:P.value,style:_.value})];return e.stripe===!0&&f.value===!1&&y.push(r("div",{class:w.value,style:q.value})),r("div",{class:d.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ee(a.default,y))}}});let Q=0;const Mt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Et=["update:fullscreen","fullscreen"];function jt(){const e=z(),{props:a,emit:n,proxy:v}=e;let o,f,u;const s=A(!1);_t(e)===!0&&V(()=>v.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),V(()=>a.fullscreen,b=>{s.value!==b&&d()}),V(s,b=>{n("update:fullscreen",b),n("fullscreen",b)});function d(){s.value===!0?l():S()}function S(){s.value!==!0&&(s.value=!0,u=v.$el.parentNode,u.replaceChild(f,v.$el),document.body.appendChild(v.$el),Q++,Q===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:l},Te.add(o))}function l(){s.value===!0&&(o!==void 0&&(Te.remove(o),o=void 0),u.replaceChild(v.$el,f),s.value=!1,Q=Math.max(0,Q-1),Q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return Ve(()=>{f=document.createElement("span")}),De(()=>{a.fullscreen===!0&&S()}),Me(l),Object.assign(v,{toggleFullscreen:d,setFullscreen:S,exitFullscreen:l}),{inFullscreen:s,toggleFullscreen:d}}function At(e,a){return new Date(e)-new Date(a)}const Nt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Qt(e,a,n,v){const o=c(()=>{const{sortBy:s}=a.value;return s&&n.value.find(d=>d.name===s)||null}),f=c(()=>e.sortMethod!==void 0?e.sortMethod:(s,d,S)=>{const l=n.value.find(P=>P.name===d);if(l===void 0||l.field===void 0)return s;const b=S===!0?-1:1,_=typeof l.field=="function"?P=>l.field(P):P=>P[l.field];return s.sort((P,q)=>{let w=_(P),y=_(q);return l.rawSort!==void 0?l.rawSort(w,y,P,q)*b:w==null?-1*b:y==null?1*b:l.sort!==void 0?l.sort(w,y,P,q)*b:be(w)===!0&&be(y)===!0?(w-y)*b:Be(w)===!0&&Be(y)===!0?At(w,y)*b:typeof w=="boolean"&&typeof y=="boolean"?(w-y)*b:([w,y]=[w,y].map(B=>(B+"").toLocaleString().toLowerCase()),w<y?-1*b:w===y?0:b)})});function u(s){let d=e.columnSortOrder;if(Pt(s)===!0)s.sortOrder&&(d=s.sortOrder),s=s.name;else{const b=n.value.find(_=>_.name===s);b!==void 0&&b.sortOrder&&(d=b.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==s?(S=s,l=d==="da"):e.binaryStateSort===!0?l=!l:l===!0?d==="ad"?S=null:l=!1:d==="ad"?l=!0:S=null,v({sortBy:S,descending:l,page:1})}return{columnToSort:o,computedSortMethod:f,sort:u}}const Ht={filter:[String,Object],filterMethod:Function};function zt(e,a){const n=c(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,f,u)=>{const s=o?o.toLowerCase():"";return v.filter(d=>f.some(S=>{const l=u(S,d)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(s)!==-1}))});return V(()=>e.filter,()=>{Ne(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function pt(e,a){for(const n in a)if(a[n]!==e[n])return!1;return!0}function Fe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Ut={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function It(e,a){const{props:n,emit:v}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),f=c(()=>{const l=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Fe(l)}),u=c(()=>f.value.rowsNumber!==void 0);function s(l){d({pagination:l,filter:n.filter})}function d(l={}){Ne(()=>{v("request",{pagination:l.pagination||f.value,filter:l.filter||n.filter,getCellValue:a})})}function S(l,b){const _=Fe({...f.value,...l});if(pt(f.value,_)===!0){u.value===!0&&b===!0&&s(_);return}if(u.value===!0){s(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?v("update:pagination",_):o.value=_}return{innerPagination:o,computedPagination:f,isServerSide:u,requestServerInteraction:d,setPagination:S}}function Wt(e,a,n,v,o,f){const{props:u,emit:s,proxy:{$q:d}}=e,S=c(()=>v.value===!0?n.value.rowsNumber||0:f.value),l=c(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),b=c(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),_=c(()=>n.value.page===1),P=c(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),q=c(()=>b.value===0?!0:n.value.page>=P.value),w=c(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(x=>({label:x===0?d.lang.table.allRows:""+x,value:x})));V(P,(R,x)=>{if(R===x)return;const p=n.value.page;R&&!p?o({page:1}):R<p&&o({page:R})});function y(){o({page:1})}function B(){const{page:R}=n.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:x}=n.value;b.value>0&&R*x<S.value&&o({page:R+1})}function F(){o({page:P.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...n.value}),{firstRowIndex:l,lastRowIndex:b,isFirstPage:_,isLastPage:q,pagesNumber:P,computedRowsPerPageOptions:w,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const Kt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Gt=["update:selected","selection"];function Xt(e,a,n,v){const o=c(()=>{const q={};return e.selected.map(v.value).forEach(w=>{q[w]=!0}),q}),f=c(()=>e.selection!=="none"),u=c(()=>e.selection==="single"),s=c(()=>e.selection==="multiple"),d=c(()=>n.value.length!==0&&n.value.every(q=>o.value[v.value(q)]===!0)),S=c(()=>d.value!==!0&&n.value.some(q=>o.value[v.value(q)]===!0)),l=c(()=>e.selected.length);function b(q){return o.value[q]===!0}function _(){a("update:selected",[])}function P(q,w,y,B){a("selection",{rows:w,added:y,keys:q,evt:B});const O=u.value===!0?y===!0?w:[]:y===!0?e.selected.concat(w):e.selected.filter(F=>q.includes(v.value(F))===!1);a("update:selected",O)}return{hasSelectionMode:f,singleSelection:u,multipleSelection:s,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:b,clearSelection:_,updateSelection:P}}function $e(e){return Array.isArray(e)?e.slice():[]}const Jt={expanded:Array},Yt=["update:expanded"];function Zt(e,a){const n=A($e(e.expanded));V(()=>e.expanded,u=>{n.value=$e(u)});function v(u){return n.value.includes(u)}function o(u){e.expanded!==void 0?a("update:expanded",u):n.value=u}function f(u,s){const d=n.value.slice(),S=d.indexOf(u);s===!0?S===-1&&(d.push(u),o(d)):S!==-1&&(d.splice(S,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:f}}const el={visibleColumns:Array};function tl(e,a,n){const v=c(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(d=>({name:d,label:d.toUpperCase(),field:d,align:be(s[d])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:s,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):v.value).map(l=>{const b=l.align||"right",_=`text-${b}`;return{...l,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:_+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===s?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>_+" "+l.classes:P=>_+" "+l.classes(P):()=>_}})}),f=c(()=>{const s={};return o.value.forEach(d=>{s[d.name]=d}),s}),u=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:f,computedColspan:u}}const ee="q-table__bottom row items-center",ze={};Qe.forEach(e=>{ze[e]={}});var ol=H({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...je,...Mt,...el,...Ht,...Ut,...Jt,...Kt,...Nt},emits:["request","virtualScroll",...Et,...Yt,...Gt],setup(e,{slots:a,emit:n}){const v=z(),{proxy:{$q:o}}=v,f=Ae(e,o),{inFullscreen:u,toggleFullscreen:s}=jt(),d=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),l=A(null),b=c(()=>e.grid!==!0&&e.virtualScroll===!0),_=c(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),q=c(()=>P.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{b.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:w,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=It(v,E),{computedFilterMethod:R}=zt(e,F),{isRowExpanded:x,setExpanded:p,updateExpanded:pe}=Zt(e,n),le=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:g}=y.value;return e.filter&&(t=R.value(t,e.filter,$.value,E)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,i,g)),t}),me=c(()=>le.value.length),D=c(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(I.value===0&&e.rows!==t?t.length>W.value&&(t=t.slice(0,W.value)):t=t.slice(I.value,W.value)),t}),{hasSelectionMode:M,singleSelection:Ue,multipleSelection:Se,allRowsSelected:Ie,someRowsSelected:ye,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:U}=Xt(e,n,D,d),{colList:Ke,computedCols:$,computedColsMap:he,computedColspan:we}=tl(e,y,M),{columnToSort:Ge,computedSortMethod:Xe,sort:re}=Qt(e,y,Ke,F),{firstRowIndex:I,lastRowIndex:W,isFirstPage:oe,isLastPage:ie,pagesNumber:K,computedRowsPerPageOptions:Je,computedRowsNumber:G,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de}=Wt(v,w,y,B,F,me),Ye=c(()=>D.value.length===0),Ze=c(()=>{const t={};return Qe.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){b.value===!0&&l.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?ke:null;if(b.value===!0){const g=a["top-row"],m=a["bottom-row"],h={default:k=>Pe(k.item,a.body,k.index)};if(g!==void 0){const k=r("tbody",g({cols:$.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return m!==void 0&&(h.after=()=>r("tbody",m({cols:$.value}))),r(Lt,{ref:l,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:D.value,type:"__qtable",tableColspan:we.value,onVirtualScroll:at},h)}const i=[nt()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(l.value!==null){l.value.scrollTo(t,i);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const m=S.value.querySelector(".q-table__middle.scroll"),h=g.offsetTop-e.virtualScrollStickySizeStart,k=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,n("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:k})}}function at(t){n("virtualScroll",t)}function _e(){return[r(Dt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,i,g){const m=d.value(t),h=ne(m);if(i!==void 0)return i(qe({key:m,row:t,pageIndex:g,__trClass:h?"selected":""}));const k=a["body-cell"],C=$.value.map(T=>{const J=a[`body-cell-${T.name}`],Y=J!==void 0?J:k;return Y!==void 0?Y(rt({key:m,row:t,pageIndex:g,col:T})):r("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},E(T,t))});if(M.value===!0){const T=a["body-selection"],J=T!==void 0?T(ot({key:m,row:t,pageIndex:g})):[r(ge,{modelValue:h,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Y,gt)=>{U([m],[t],Y,gt)}})];C.unshift(r("td",{class:"q-table--col-auto-width"},J))}const L={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{n("RowClick",T,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{n("RowDblclick",T,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{n("RowContextmenu",T,t,g)}),r("tr",L,C)}function nt(){const t=a.body,i=a["top-row"],g=a["bottom-row"];let m=D.value.map((h,k)=>Pe(h,t,k));return i!==void 0&&(m=i({cols:$.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:$.value}))),r("tbody",m)}function qe(t){return ve(t),t.cols=t.cols.map(i=>N({...i},"value",()=>E(i,t.row))),t}function rt(t){return ve(t),N(t,"value",()=>E(t.col,t.row)),t}function ot(t){return ve(t),t}function ve(t){Object.assign(t,{cols:$.value,colsMap:he.value,sort:re,rowIndex:I.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),M.value===!0&&N(t,"selected",()=>ne(t.key),(i,g)=>{U([t.key],[t.row],i,g)}),N(t,"expand",()=>x(t.key),i=>{pe(t.key,i)})}function E(t,i){const g=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(g,i):g}const j=c(()=>({pagination:y.value,pagesNumber:K.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,inFullscreen:u.value,toggleFullscreen:s}));function it(){const t=a.top,i=a["top-left"],g=a["top-right"],m=a["top-selection"],h=M.value===!0&&m!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(j.value)]);let C;if(h===!0?C=m(j.value).slice():(C=[],i!==void 0?C.push(r("div",{class:"q-table__control"},[i(j.value)])):e.title&&C.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(C.push(r("div",{class:"q-table__separator col"})),C.push(r("div",{class:"q-table__control"},[g(j.value)]))),C.length!==0)return r("div",{class:k},C)}const Ce=c(()=>ye.value===!0?null:Ie.value);function ke(){const t=ut();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:we.value},_e())])),r("thead",t)}function ut(){const t=a.header,i=a["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const g=$.value.map(m=>{const h=a[`header-cell-${m.name}`],k=h!==void 0?h:i,C=fe({col:m});return k!==void 0?k(C):r(Ot,{key:m.name,props:C},()=>m.label)});if(Ue.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(Se.value===!0){const m=a["header-selection"],h=m!==void 0?m(fe({})):[r(ge,{color:e.color,modelValue:Ce.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Re})];g.unshift(r("th",{class:"q-table--col-auto-width"},h))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function fe(t){return Object.assign(t,{cols:$.value,sort:re,colsMap:he.value,color:e.color,dark:f.value,dense:e.dense}),Se.value===!0&&N(t,"selected",()=>Ce.value,Re),t}function Re(t){ye.value===!0&&(t=!1),U(D.value.map(d.value),D.value,t)}const X=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=a["no-data"],h=m!==void 0?[m({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Le,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:ee+" q-table__bottom--nodata"},h)}const t=a.bottom;if(t!==void 0)return r("div",{class:ee},[t(j.value)]);const i=e.hideSelectedBanner!==!0&&M.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ee+" justify-end"},dt(i));if(i.length!==0)return r("div",{class:ee},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:g}=y.value,m=e.paginationLabel||o.lang.table.pagination,h=a.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Bt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Je.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),h!==void 0)i=h(j.value);else if(i=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(I.value+1,Math.min(W.value,G.value),G.value):m(1,me.value,G.value)])],g!==0&&K.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),K.value>2&&i.push(r(Z,{key:"pgFirst",...C,icon:X.value[0],disable:oe.value,onClick:ue})),i.push(r(Z,{key:"pgPrev",...C,icon:X.value[1],disable:oe.value,onClick:se}),r(Z,{key:"pgNext",...C,icon:X.value[2],disable:ie.value,onClick:ce})),K.value>2&&i.push(r(Z,{key:"pgLast",...C,icon:X.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[ke()])]:e.loading===!0&&a.loading===void 0?_e():void 0;return r("div",{class:"q-table__middle"},t)}function ft(){const t=a.item!==void 0?a.item:i=>{const g=i.cols.map(h=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[h.label]),r("div",{class:"q-table__grid-item-value"},[h.value])]));if(M.value===!0){const h=a["body-selection"],k=h!==void 0?h(i):[r(ge,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{U([i.key],[i.row],C,L)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},k),r(Ct,{dark:f.value}))}const m={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{n("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{n("RowDblclick",h,i.row,i.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[r("div",m,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},D.value.map((i,g)=>t(qe({key:d.value(i),row:i,pageIndex:g}))))}return Object.assign(v.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:x,setExpanded:p,sort:re,resetVirtualScroll:et,scrollTo:lt,getCellValue:E}),qt(v.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>D.value,computedRowsNumber:()=>G.value}),()=>{const t=[it()],i={ref:S,class:q.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),st()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",i,t)}}});export{ol as Q,rl as a};
