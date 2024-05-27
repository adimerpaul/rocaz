import{_ as Q,D as p,E as f,F as a,G as e,z as b,Q as c,aj as x,H as n,ak as g,al as D,C as y,am as _,an as N,ao as O,K as U,J as v,ap as E,I as m,aq as A}from"./index.6918b5a8.js";import{Q as V}from"./QTooltip.45207bc2.js";import{Q as C}from"./QItem.0a150aaf.js";import{Q as q}from"./QBtnDropdown.f3070117.js";import{Q as F,a as u}from"./QTable.0259598d.js";import{Q as k,a as B}from"./QSelect.292674f1.js";import{I as M,Q as T}from"./Imprimir.8bd35938.js";import{Q as R}from"./QPage.ec4043e4.js";import{C as w}from"./ClosePopup.4dda377d.js";import{h as S}from"./moment.40bc58bf.js";import{C as Y}from"./CardComponent.41919614.js";import{Q as z}from"./QSpace.e9b93104.js";import{Q as P}from"./QForm.65ed3ba9.js";import"./format.6195abe1.js";import"./QBtnGroup.25ddce79.js";import"./QList.186a6c5e.js";const L={data(){return{provider:[],gasto:{monto:"",concepto:"",metodo:"EFECTIVO",client_id:""},loading:!1}},mounted(){this.proveedoresGet()},methods:{proveedoresGet(){this.$axios.get("proveedores").then(l=>{this.provider=l.data})},saveSale(){this.loading=!0,this.$axios.post("registrarGasto",this.gasto).then(l=>{this.$emit("gastoCreated",l.data),this.$alert.success("Gasto registrado")}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},proveedorCreateSimple(){this.$q.dialog({title:"Registrar proveedor",message:"Ingrese el nombre del proveedor",prompt:{model:"",type:"text"},cancel:!0,persistent:!0}).onOk(l=>{this.$axios.post("proveedorCreateSimple",{nombre:l}).then(o=>{this.provider.push(o.data),this.gasto.client_id=o.data.id}).catch(o=>{this.$alert.error(o.response.data.message)})})}}},H=n("div",{class:"text-subtitle2 text-bold text-grey"}," Registrar gasto ",-1),W={class:"row"},j={class:"col-12"},J={class:"col-12"},K={class:"col-12"},X={class:"col-12"},Z={class:"col-12"};function $(l,o,r,G,s,d){return p(),f(D,{style:{width:"500px","max-width":"80vw"}},{default:a(()=>[e(x,{class:"row items-center q-pb-none"},{default:a(()=>[H,e(z),b(e(c,{icon:"o_highlight_off",flat:"",round:"",dense:""},null,512),[[w]])]),_:1}),e(x,null,{default:a(()=>[e(P,{onSubmit:d.saveSale},{default:a(()=>[n("div",W,[n("div",j,[e(g,{outlined:"",dense:"",modelValue:s.gasto.monto,"onUpdate:modelValue":o[0]||(o[0]=i=>s.gasto.monto=i),label:"Monto *",type:"number",step:"0.1",rules:[i=>!!i||"Campo requerido"]},null,8,["modelValue","rules"])]),n("div",J,[e(g,{outlined:"",dense:"",hint:"",modelValue:s.gasto.concepto,"onUpdate:modelValue":o[1]||(o[1]=i=>s.gasto.concepto=i),label:"Descripci\xF3n"},null,8,["modelValue"])]),n("div",K,[e(k,{outlined:"",dense:"",hint:"",modelValue:s.gasto.metodo,"onUpdate:modelValue":o[2]||(o[2]=i=>s.gasto.metodo=i),options:l.$metodos,label:"M\xE9todo de pago"},null,8,["modelValue","options"])]),n("div",X,[e(k,{outlined:"",dense:"",hint:"",modelValue:s.gasto.client_id,"onUpdate:modelValue":o[3]||(o[3]=i=>s.gasto.client_id=i),options:s.provider,label:"Proveedor","emit-value":"","map-options":"","option-value":"id","option-label":"nombre","use-input":""},{after:a(()=>[e(c,{flat:"",dense:"",icon:"add_circle_outline",onClick:d.proveedorCreateSimple,color:"green"},null,8,["onClick"])]),_:1},8,["modelValue","options"])]),n("div",Z,[e(c,{type:"submit",label:"Guardar",color:"red-7",class:"full-width","no-caps":"",rounded:"",loading:s.loading},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var ee=Q(L,[["render",$]]);const oe={name:"IndexPage",components:{DialogGasto:ee,CardComponent:Y},data(){return{gastoDialog:!1,fechaInicioSemana:S().startOf("isoWeek").format("YYYY-MM-DD"),fechaFinSemana:S().endOf("isoWeek").format("YYYY-MM-DD"),concepto:"",columns:[{name:"opcion",label:"Opcion",align:"left",field:"opcion"},{name:"concepto",label:"Concepto",align:"left",field:"concepto",sortable:!0},{name:"comentario",label:"Comentario",align:"left",field:"comentario",sortable:!0},{name:"montoTotal",label:"Monto total",align:"left",field:"montoTotal",sortable:!0},{name:"proveedorcliente",label:"Proveedor / cliente",align:"left",field:"proveedor / cliente",sortable:!0},{name:"fechayhora",label:"Fecha y hora",align:"left",field:"fechayhora",sortable:!0},{name:"egresoingreso",label:"Egreso / ingreso",align:"left",field:"egreso / ingreso",sortable:!0},{name:"user",label:"Usuario",align:"left",field:l=>l.user.name,sortable:!0},{name:"lugar",label:"lugar",align:"left",field:l=>l.user.lugar,sortable:!0}],sales:[],loading:!1,filter:""}},mounted(){this.salesGet()},methods:{reimprimirNota(l){M.nota(l).then(o=>{})},saleAnular(l){this.$q.dialog({title:"Anular venta",message:"\xBFEst\xE1 seguro de anular la venta?",persistent:!0,ok:{label:"Si",color:"negative",push:!0},cancel:{label:"No",color:"primary",push:!0}}).onOk(()=>{this.$axios.post("saleAnular",{id:l}).then(o=>{this.salesGet()}).catch(o=>{console.log(o)})})},gastoCreated(l){this.sales.unshift(l),this.gastoDialog=!1},salesGet(){this.loading=!0,this.$axios.get("sales",{params:{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana,concepto:this.concepto}}).then(l=>{this.sales=l.data,console.log(l.data)}).catch(l=>{console.log(l)}).finally(()=>{this.loading=!1})}},computed:{balance(){const l=this.sales.reduce((o,r)=>r.estado!=="ANULADO"?r.tipo_venta==="INGRESO"?o+r.total:o-r.total:o,0);return Math.round(l*100)/100},ingreso(){const l=this.sales.reduce((o,r)=>r.tipo_venta==="INGRESO"&&r.estado!=="ANULADO"?o+r.total:o,0);return Math.round(l*100)/100},gasto(){const l=this.sales.reduce((o,r)=>r.tipo_venta==="EGRESO"&&r.estado!=="ANULADO"?o+r.total:o,0);return Math.round(l*100)/100}}},te={class:"row"},le={class:"col-6 col-md-2 q-pa-xs"},ae={class:"col-6 col-md-2 q-pa-xs"},se={class:"col-12 col-md-3 q-pa-xs"},ne={class:"col-12 col-md-5 text-right"},re={class:"col-12 col-md-4 q-pa-xs"},ie={class:"col-12 col-md-4 q-pa-xs"},de={class:"col-12 col-md-4 q-pa-xs"},ce={class:"col-12"},ue={key:1},me={style:{"padding-left":"15px"}},pe={class:"q-ml-xs",style:{width:"300px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},ge={class:"",style:{width:"300px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},he={class:"text-grey"},fe={key:0,class:"text-grey"},_e=n("div",{id:"myElement",class:"hidden"},null,-1);function ve(l,o,r,G,s,d){const i=y("CardComponent"),I=y("DialogGasto");return p(),_(O,null,[e(R,{class:"q-pa-xs bg-grey-3"},{default:a(()=>[n("div",te,[n("div",le,[e(g,{modelValue:s.fechaInicioSemana,"onUpdate:modelValue":[o[0]||(o[0]=t=>s.fechaInicioSemana=t),d.salesGet],label:"Fecha inicio",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),n("div",ae,[e(g,{modelValue:s.fechaFinSemana,"onUpdate:modelValue":[o[1]||(o[1]=t=>s.fechaFinSemana=t),d.salesGet],label:"Fecha fin",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),n("div",se,[e(g,{modelValue:s.concepto,"onUpdate:modelValue":[o[2]||(o[2]=t=>s.concepto=t),d.salesGet],label:"Buscar por concepto",dense:"",outlined:"",class:"bg-white",debounce:"300",clearable:"",placeholder:"Buscar por concepto"},{prepend:a(()=>[e(U,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),n("div",ne,[e(c,{label:"Nuevo Venta",color:"green",icon:"add_circle_outline","no-caps":"",rounded:"",to:"/sale"}),e(c,{label:"Nuevo Gasto",color:"red",icon:"add_circle_outline","no-caps":"",rounded:"",onClick:o[3]||(o[3]=t=>s.gastoDialog=!0)})]),n("div",re,[e(i,{monto:d.balance,color:"grey",title:"Balance",icono:"o_trending_up"},null,8,["monto"])]),n("div",ie,[e(i,{monto:d.ingreso,color:"green",title:"Ventas",icono:"o_trending_up"},null,8,["monto"])]),n("div",de,[e(i,{monto:d.gasto,color:"red",title:"Gastos",icono:"o_trending_down"},null,8,["monto"])]),n("div",ce,[e(F,{columns:s.columns,rows:s.sales,dense:"","rows-per-page-options":[0],filter:s.filter,loading:s.loading,"wrap-cells":"","no-data-label":"No hay ventas","no-results-label":"No hay ventas"},{"top-right":a(()=>[e(g,{outlined:"",modelValue:s.filter,"onUpdate:modelValue":o[4]||(o[4]=t=>s.filter=t),debounce:"300",placeholder:"Buscar",dense:""},{append:a(()=>[e(c,{flat:"",round:"",dense:"",icon:"search"})]),_:1},8,["modelValue"])]),body:a(t=>[e(T,{props:t},{default:a(()=>[e(u,{key:"opcion",props:t,"auto-width":""},{default:a(()=>[t.row.estado=="ACTIVO"?(p(),f(q,{key:0,dense:"",icon:"more_vert",align:"right",label:"Opciones","no-caps":"",color:t.row.tipo_venta=="INGRESO"?"green-9":"red-9",size:"10px"},{default:a(()=>[b((p(),f(C,{clickable:"",class:"text-center"},{default:a(()=>[e(c,{dense:"",label:"Anular",color:"red-4",size:"10px",class:"full-width","no-caps":"","no-wrap":"",icon:"o_highlight_off",onClick:h=>d.saleAnular(t.row.id)},{default:a(()=>[e(V,null,{default:a(()=>[v("Anular venta")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[w]]),b((p(),f(C,{clickable:"",class:"text-center"},{default:a(()=>[e(c,{dense:"",label:"Imprimir",color:"green-4",size:"10px",class:"full-width","no-caps":"","no-wrap":"",icon:"print",onClick:h=>d.reimprimirNota(t.row)},{default:a(()=>[e(V,null,{default:a(()=>[v("Imprimir nota")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[w]])]),_:2},1032,["color"])):(p(),_("div",ue,[e(c,{dense:"",label:"Anulado",color:"grey-4",size:"10px","no-caps":"","no-wrap":"",icon:"o_highlight_off"})]))]),_:2},1032,["props"]),e(u,{key:"concepto",props:t,class:""},{default:a(()=>[n("div",null,[e(c,{icon:"o_local_atm",size:"15px",color:`${t.row.tipo_venta=="INGRESO"?"green":"red"}-7`,class:E(`bg-${t.row.tipo_venta=="INGRESO"?"green":"red"}-2`),dense:"",flat:"",style:{padding:"0px",margin:"0px","border-radius":"0px",position:"absolute",top:"5px",left:"0px"}},null,8,["color","class"]),n("div",me,[n("div",pe,m(t.row.concepto),1)])])]),_:2},1032,["props"]),e(u,{key:"comentario",props:t},{default:a(()=>[n("div",ge,m(t.row.comentario),1)]),_:2},1032,["props"]),e(u,{key:"montoTotal",props:t},{default:a(()=>[n("span",he,m(t.row.total)+" Bs",1)]),_:2},1032,["props"]),e(u,{key:"proveedorcliente",props:t},{default:a(()=>[t.row.client?(p(),_("div",fe,m(t.row.client.nombre),1)):A("",!0)]),_:2},1032,["props"]),e(u,{key:"fechayhora",props:t,style:{"min-width":"150px"}},{default:a(()=>[v(m(l.$filters.dateDmYHis(t.row.fecha_emision)),1)]),_:2},1032,["props"]),e(u,{key:"egresoingreso",props:t},{default:a(()=>[e(B,{color:`${t.row.tipo_venta=="INGRESO"?"green":"red"}-5`,"text-color":"white",dense:"",flat:"",label:t.row.tipo_venta},null,8,["color","label"])]),_:2},1032,["props"]),e(u,{key:"user",props:t},{default:a(()=>{var h;return[n("p",null,m((h=t.row.user)==null?void 0:h.name),1)]}),_:2},1032,["props"]),e(u,{key:"lugar",props:t},{default:a(()=>[n("p",null,m(t.row.lugar),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","loading"])])])]),_:1}),e(N,{modelValue:s.gastoDialog,"onUpdate:modelValue":o[5]||(o[5]=t=>s.gastoDialog=t),position:"right",maximized:""},{default:a(()=>[e(I,{onGastoCreated:d.gastoCreated},null,8,["onGastoCreated"])]),_:1},8,["modelValue"]),_e],64)}var Ae=Q(oe,[["render",ve]]);export{Ae as default};
