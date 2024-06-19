import{_ as D,D as u,E as v,F as a,G as e,z as w,Q as c,aj as y,H as n,ak as h,al as N,C,am as g,an as A,ao as O,K as E,ap as _,J as b,I as p,aq as U}from"./index.c1bda583.js";import{Q as k}from"./QTooltip.bff1a600.js";import{Q as V}from"./QItem.4067e6bd.js";import{Q as R}from"./QBtnDropdown.a53af9f5.js";import{Q as M,a as m}from"./QTable.98f63700.js";import{Q as S,a as q}from"./QSelect.02481b4d.js";import{I as F,Q as T}from"./Imprimir.97a2007c.js";import{Q as B}from"./QPage.c78bbd12.js";import{C as x}from"./ClosePopup.cc88c787.js";import{h as I}from"./moment.40bc58bf.js";import{C as Y}from"./CardComponent.834de03a.js";import{Q as z}from"./QSpace.c858cf4f.js";import{Q as P}from"./QForm.493bf25f.js";import{E as L}from"./Excel.e99458f6.js";import"./format.f4c59c6f.js";import"./QList.2afee3d5.js";const H={data(){return{provider:[],gasto:{monto:"",concepto:"",metodo:"EFECTIVO",client_id:""},loading:!1}},mounted(){this.proveedoresGet()},methods:{proveedoresGet(){this.$axios.get("proveedores").then(l=>{this.provider=l.data})},saveSale(){this.loading=!0,this.$axios.post("registrarGasto",this.gasto).then(l=>{this.$emit("gastoCreated",l.data),this.$alert.success("Gasto registrado")}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},proveedorCreateSimple(){this.$q.dialog({title:"Registrar proveedor",message:"Ingrese el nombre del proveedor",prompt:{model:"",type:"text"},cancel:!0,persistent:!0}).onOk(l=>{this.$axios.post("proveedorCreateSimple",{nombre:l}).then(o=>{this.provider.push(o.data),this.gasto.client_id=o.data.id}).catch(o=>{this.$alert.error(o.response.data.message)})})}}},W=n("div",{class:"text-subtitle2 text-bold text-grey"}," Registrar gasto ",-1),$={class:"row"},j={class:"col-12"},J={class:"col-12"},K={class:"col-12"},X={class:"col-12"},Z={class:"col-12"};function ee(l,o,r,Q,s,i){return u(),v(N,{style:{width:"500px","max-width":"80vw"}},{default:a(()=>[e(y,{class:"row items-center q-pb-none"},{default:a(()=>[W,e(z),w(e(c,{icon:"o_highlight_off",flat:"",round:"",dense:""},null,512),[[x]])]),_:1}),e(y,null,{default:a(()=>[e(P,{onSubmit:i.saveSale},{default:a(()=>[n("div",$,[n("div",j,[e(h,{outlined:"",dense:"",modelValue:s.gasto.monto,"onUpdate:modelValue":o[0]||(o[0]=d=>s.gasto.monto=d),label:"Monto *",type:"number",step:"0.1",rules:[d=>!!d||"Campo requerido"]},null,8,["modelValue","rules"])]),n("div",J,[e(h,{outlined:"",dense:"",hint:"",modelValue:s.gasto.concepto,"onUpdate:modelValue":o[1]||(o[1]=d=>s.gasto.concepto=d),label:"Descripci\xF3n"},null,8,["modelValue"])]),n("div",K,[e(S,{outlined:"",dense:"",hint:"",modelValue:s.gasto.metodo,"onUpdate:modelValue":o[2]||(o[2]=d=>s.gasto.metodo=d),options:l.$metodos,label:"M\xE9todo de pago"},null,8,["modelValue","options"])]),n("div",X,[e(S,{outlined:"",dense:"",hint:"",modelValue:s.gasto.client_id,"onUpdate:modelValue":o[3]||(o[3]=d=>s.gasto.client_id=d),options:s.provider,label:"Proveedor","emit-value":"","map-options":"","option-value":"id","option-label":"nombre","use-input":""},{after:a(()=>[e(c,{flat:"",dense:"",icon:"add_circle_outline",onClick:i.proveedorCreateSimple,color:"green"},null,8,["onClick"])]),_:1},8,["modelValue","options"])]),n("div",Z,[e(c,{type:"submit",label:"Guardar",color:"red-7",class:"full-width","no-caps":"",rounded:"",loading:s.loading},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var oe=D(H,[["render",ee]]);const te={name:"IndexPage",components:{DialogGasto:oe,CardComponent:Y},data(){return{gastoDialog:!1,fechaInicioSemana:I().startOf("isoWeek").format("YYYY-MM-DD"),fechaFinSemana:I().endOf("isoWeek").format("YYYY-MM-DD"),concepto:"",columns:[{name:"opcion",label:"Opcion",align:"left",field:"opcion"},{name:"proveedorcliente",label:"Proveedor / cliente",align:"left",field:"proveedor / cliente",sortable:!0},{name:"montoTotal",label:"Monto total",align:"left",field:"montoTotal",sortable:!0},{name:"fechayhora",label:"Fecha y hora",align:"left",field:"fechayhora",sortable:!0},{name:"concepto",label:"Concepto",align:"left",field:"concepto",sortable:!0},{name:"comentario",label:"Comentario",align:"left",field:"comentario",sortable:!0},{name:"egresoingreso",label:"Egreso / ingreso",align:"left",field:"egreso / ingreso",sortable:!0},{name:"user",label:"Usuario",align:"left",field:l=>l.user.name,sortable:!0},{name:"lugar",label:"lugar",align:"left",field:l=>l.user.lugar,sortable:!0}],sales:[],loading:!1,filter:""}},mounted(){this.salesGet()},methods:{exportar(){const l=[{sheet:"Adults",columns:[{label:"Proveedor / cliente",value:"name"},{label:"Monto total",value:"total"},{label:"Fecha y hora",value:"fecha_emision"},{label:"Concepto",value:"concepto"},{label:"Comentario",value:"comentario"},{label:"Egreso / ingreso",value:"tipo_venta"},{label:"Usuario",value:"user.name"},{label:"Lugar",value:"lugar"}],content:this.sales}];L.export(l,"ventas")},reimprimirNota(l){F.nota(l).then(o=>{})},saleAnular(l){this.$q.dialog({title:"Anular venta",message:"\xBFEst\xE1 seguro de anular la venta?",persistent:!0,ok:{label:"Si",color:"negative",push:!0},cancel:{label:"No",color:"primary",push:!0}}).onOk(()=>{this.$axios.post("saleAnular",{id:l}).then(o=>{this.salesGet()}).catch(o=>{console.log(o)})})},gastoCreated(l){this.sales.unshift(l),this.gastoDialog=!1},salesGet(){this.loading=!0,this.$axios.get("sales",{params:{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana,concepto:this.concepto}}).then(l=>{this.sales=l.data,console.log(l.data)}).catch(l=>{console.log(l)}).finally(()=>{this.loading=!1})}},computed:{balance(){const l=this.sales.reduce((o,r)=>r.estado!=="ANULADO"?r.tipo_venta==="INGRESO"?o+r.total:o-r.total:o,0);return Math.round(l*100)/100},ingreso(){const l=this.sales.reduce((o,r)=>r.tipo_venta==="INGRESO"&&r.estado!=="ANULADO"?o+r.total:o,0);return Math.round(l*100)/100},gasto(){const l=this.sales.reduce((o,r)=>r.tipo_venta==="EGRESO"&&r.estado!=="ANULADO"?o+r.total:o,0);return Math.round(l*100)/100}}},le={class:"row"},ae={class:"col-6 col-md-2 q-pa-xs"},se={class:"col-6 col-md-2 q-pa-xs"},ne={class:"col-12 col-md-2 q-pa-xs"},re={class:"col-12 col-md-2 text-right"},ie={class:"col-12 col-md-4 text-right"},de={key:0,class:"col-12 col-md-4 q-pa-xs"},ce={key:1,class:"col-12 col-md-4 q-pa-xs"},ue={key:2,class:"col-12 col-md-4 q-pa-xs"},me={class:"col-12"},pe={key:1},ge={key:0,class:"text-grey"},he={class:"text-grey"},fe={style:{"padding-left":"15px"}},_e={class:"q-ml-xs",style:{width:"300px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},ve={class:"",style:{width:"300px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},be=n("div",{id:"myElement",class:"hidden"},null,-1);function we(l,o,r,Q,s,i){const d=C("CardComponent"),G=C("DialogGasto");return u(),g(O,null,[e(B,{class:"q-pa-xs bg-grey-3"},{default:a(()=>[n("div",le,[n("div",ae,[e(h,{modelValue:s.fechaInicioSemana,"onUpdate:modelValue":[o[0]||(o[0]=t=>s.fechaInicioSemana=t),i.salesGet],label:"Fecha inicio",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),n("div",se,[e(h,{modelValue:s.fechaFinSemana,"onUpdate:modelValue":[o[1]||(o[1]=t=>s.fechaFinSemana=t),i.salesGet],label:"Fecha fin",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),n("div",ne,[e(h,{modelValue:s.concepto,"onUpdate:modelValue":[o[2]||(o[2]=t=>s.concepto=t),i.salesGet],label:"Buscar por concepto",dense:"",outlined:"",class:"bg-white",debounce:"300",clearable:"",placeholder:"Buscar por concepto"},{prepend:a(()=>[e(E,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),n("div",re,[e(c,{label:"Exportar",color:"primary",icon:"get_app","no-caps":"",rounded:"",onClick:i.exportar},null,8,["onClick"])]),n("div",ie,[e(c,{label:"Nuevo Venta",color:"green",icon:"add_circle_outline","no-caps":"",rounded:"",to:"/sale"}),e(c,{label:"Nuevo Gasto",color:"red",icon:"add_circle_outline","no-caps":"",rounded:"",onClick:o[3]||(o[3]=t=>s.gastoDialog=!0)})]),l.$store.user.type=="ADMINISTRADOR"?(u(),g("div",de,[e(d,{monto:i.balance,color:"grey",title:"Balance",icono:"o_trending_up"},null,8,["monto"])])):_("",!0),l.$store.user.type=="ADMINISTRADOR"?(u(),g("div",ce,[e(d,{monto:i.ingreso,color:"green",title:"Ventas",icono:"o_trending_up"},null,8,["monto"])])):_("",!0),l.$store.user.type=="ADMINISTRADOR"?(u(),g("div",ue,[e(d,{monto:i.gasto,color:"red",title:"Gastos",icono:"o_trending_down"},null,8,["monto"])])):_("",!0),n("div",me,[e(M,{columns:s.columns,rows:s.sales,dense:"","rows-per-page-options":[0],filter:s.filter,loading:s.loading,"wrap-cells":"","no-data-label":"No hay ventas","no-results-label":"No hay ventas"},{"top-right":a(()=>[e(h,{outlined:"",modelValue:s.filter,"onUpdate:modelValue":o[4]||(o[4]=t=>s.filter=t),debounce:"300",placeholder:"Buscar",dense:""},{append:a(()=>[e(c,{flat:"",round:"",dense:"",icon:"search"})]),_:1},8,["modelValue"])]),body:a(t=>[e(T,{props:t},{default:a(()=>[e(m,{key:"opcion",props:t,"auto-width":""},{default:a(()=>[t.row.estado=="ACTIVO"?(u(),v(R,{key:0,dense:"",icon:"more_vert",align:"right",label:"Opciones","no-caps":"",color:t.row.tipo_venta=="INGRESO"?"green-9":"red-9",size:"10px"},{default:a(()=>[w((u(),v(V,{clickable:"",class:"text-center"},{default:a(()=>[e(c,{dense:"",label:"Anular",color:"red-4",size:"10px",class:"full-width","no-caps":"","no-wrap":"",icon:"o_highlight_off",onClick:f=>i.saleAnular(t.row.id)},{default:a(()=>[e(k,null,{default:a(()=>[b("Anular venta")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[x]]),w((u(),v(V,{clickable:"",class:"text-center"},{default:a(()=>[e(c,{dense:"",label:"Imprimir",color:"green-4",size:"10px",class:"full-width","no-caps":"","no-wrap":"",icon:"print",onClick:f=>i.reimprimirNota(t.row)},{default:a(()=>[e(k,null,{default:a(()=>[b("Imprimir nota")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[x]])]),_:2},1032,["color"])):(u(),g("div",pe,[e(c,{dense:"",label:"Anulado",color:"grey-4",size:"10px","no-caps":"","no-wrap":"",icon:"o_highlight_off"})]))]),_:2},1032,["props"]),e(m,{key:"proveedorcliente",props:t},{default:a(()=>[t.row.client?(u(),g("div",ge,p(t.row.name==null?t.row.client.id==28?"SN":t.row.client.nombre:t.row.name),1)):_("",!0)]),_:2},1032,["props"]),e(m,{key:"montoTotal",props:t},{default:a(()=>[n("span",he,p(t.row.total)+" Bs",1)]),_:2},1032,["props"]),e(m,{key:"fechayhora",props:t,style:{"min-width":"150px"}},{default:a(()=>[b(p(l.$filters.dateDmYHis(t.row.fecha_emision)),1)]),_:2},1032,["props"]),e(m,{key:"concepto",props:t,class:""},{default:a(()=>[n("div",null,[e(c,{icon:"o_local_atm",size:"15px",color:`${t.row.tipo_venta=="INGRESO"?"green":"red"}-7`,class:U(`bg-${t.row.tipo_venta=="INGRESO"?"green":"red"}-2`),dense:"",flat:"",style:{padding:"0px",margin:"0px","border-radius":"0px",position:"absolute",top:"5px",left:"0px"}},null,8,["color","class"]),n("div",fe,[n("div",_e,p(t.row.concepto),1)])])]),_:2},1032,["props"]),e(m,{key:"comentario",props:t},{default:a(()=>[n("div",ve,p(t.row.comentario),1)]),_:2},1032,["props"]),e(m,{key:"egresoingreso",props:t},{default:a(()=>[e(q,{color:`${t.row.tipo_venta=="INGRESO"?"green":"red"}-5`,"text-color":"white",dense:"",flat:"",label:t.row.tipo_venta},null,8,["color","label"])]),_:2},1032,["props"]),e(m,{key:"user",props:t},{default:a(()=>{var f;return[n("p",null,p((f=t.row.user)==null?void 0:f.name),1)]}),_:2},1032,["props"]),e(m,{key:"lugar",props:t},{default:a(()=>[n("p",null,p(t.row.lugar),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","loading"])])])]),_:1}),e(A,{modelValue:s.gastoDialog,"onUpdate:modelValue":o[5]||(o[5]=t=>s.gastoDialog=t),position:"right",maximized:""},{default:a(()=>[e(G,{onGastoCreated:i.gastoCreated},null,8,["onGastoCreated"])]),_:1},8,["modelValue"]),be],64)}var Me=D(te,[["render",we]]);export{Me as default};
