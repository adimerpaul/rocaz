import{Q as g}from"./QImg.01ab78c0.js";import{_ as k,D as n,aq as d,as as b,b7 as w,E as h,F as o,G as c,K as y,ao as C,H as r,I as i,at as m,an as P,ap as _}from"./index.649a13f7.js";import{a as f,Q as x}from"./QTable.1f9a5e19.js";const S={props:{vista:{type:String,default:"lista"},products:{type:Array,default:()=>[]},precio:{type:String,default:""},almacenSelected:{type:String,default:""}},data(){return{search:"",columns:[{name:"codigo",label:"Codigo",align:"left",field:t=>t.codigo},{name:"nombre",label:"Nombre",align:"left",field:t=>t.nombre},{name:"precio1",label:"Precio 1",align:"left",field:t=>t.precio1},{name:"precio2",label:"Precio 2",align:"left",field:t=>t.precio2},{name:"precio3",label:"Precio 3",align:"left",field:t=>t.precio3},{name:"precio4",label:"Precio 4",align:"left",field:t=>t.precio4},{name:"precio5",label:"Precio 5",align:"left",field:t=>t.precio5},{name:"precio6",label:"Precio 6",align:"left",field:t=>t.precio6},{name:"stock",label:"Stock",align:"left",field:t=>t.stock},{name:"category",label:"Category",align:"left",field:t=>{var a;return(a=t.category)==null?void 0:a.name}},{name:"costo",label:"Costo",align:"left",field:t=>t.costo}]}},methods:{onRowClick(t,a){this.$emit("clickDetalleProducto",a)},clickDetalleProducto(t){this.$emit("clickDetalleProducto",t)}}},v={key:0,class:"row q-pt-xs"},p={class:"absolute-bottom text-center text-subtitle2",style:{padding:"0px 0px","line-height":"1"}},I={class:"text-center text-subtitle2"};function Q(t,a,l,R,s,u){return l.vista==="lista"?(n(),d("div",v,[(n(!0),d(b,null,w(l.products,e=>(n(),d("div",{class:"col-4 col-md-2",key:e.id},[c(_,{onClick:D=>u.clickDetalleProducto(e)},{default:o(()=>[c(g,{src:e.image.includes("http")?e.image:`${t.$url}../images/${e.image}`,width:"100%",height:"100px"},{default:o(()=>[r("div",p,i(e.nombre),1)]),_:2},1032,["src"]),c(P,{class:"q-pa-none q-ma-none"},{default:o(()=>[r("div",I,i(l.precio==="PRECIO 1"?e.precio1:l.precio==="PRECIO 2"?e.precio2:l.precio==="PRECIO 3"?e.precio3:l.precio==="PRECIO 4"?e.precio4:l.precio==="PRECIO 5"?e.precio5:e.precio6)+" Bs.",1),r("div",{class:m(`text-center text-bold text-${e.stock<=e.minStock?"red":e.stock<=e.minStock*2?"yellow-9":"green"}`)},i(l.almacenSelected==="Todo"?e.stock:l.almacenSelected==="Almacen 1"?e.stock1:e.stock2)+" "+i(t.$q.screen.lt.md?"Dis":"Disponible"),3)]),_:2},1024)]),_:2},1032,["onClick"])]))),128))])):(n(),h(x,{key:1,rows:l.products,columns:s.columns,"rows-per-page-options":[0],dense:"","wrap-cells":"","no-data-label":"No hay productos","no-results-label":"No hay resultados",filter:s.search,title:"Productos",loading:!1,onRowClick:u.onRowClick},{"top-right":o(()=>[c(C,{modelValue:s.search,"onUpdate:modelValue":a[0]||(a[0]=e=>s.search=e),dense:"",outlined:"",label:"Buscar"},{append:o(()=>[c(y,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-costo":o(e=>[c(f,{props:e},{default:o(()=>[r("div",{class:m(`text-${e.row.costo===0?"red text-bold":"black"}`)},i(e.row.costo)+" Bs. ",3)]),_:2},1032,["props"])]),"body-cell-stock":o(e=>[c(f,{props:e},{default:o(()=>[r("div",{class:m(`text-${e.row.stock<=e.row.minStock?"red":e.row.stock<=e.row.minStock*2?"yellow-9":"green"}`)},i(l.almacenSelected==="Todo"?e.row.stock:l.almacenSelected==="Almacen 1"?e.row.stock1:e.row.stock2),3)]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter","onRowClick"]))}var N=k(S,[["render",Q]]);export{N as P};