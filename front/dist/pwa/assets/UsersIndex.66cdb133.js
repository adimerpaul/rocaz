import{_ as f,D as n,E as d,F as a,G as l,Q as i,ak as t,K as h,al as b,aj as m,am as p,aq as w,bg as V,an as Q}from"./index.f770a39e.js";import{Q as C}from"./QBtnGroup.488d4d24.js";import{a as x,Q as k}from"./QTable.760ca92e.js";import{Q as y}from"./QSpace.61b006db.js";import{Q as U}from"./QSelect.429dffeb.js";import{Q as v}from"./QForm.6951ed2b.js";import{Q as D}from"./QPage.cdba84d3.js";import"./QList.44228d74.js";import"./QItem.03f9de57.js";import"./format.c4090fb0.js";const N={data(){return{users:[],user:{},search:"",userDialog:!1,loading:!1,columns:[{name:"option",label:"Opcion",align:"left",field:"option"},{name:"name",label:"Nombre",align:"left",field:"name"},{name:"username",label:"Nombre usuario",align:"left",field:"username"},{name:"email",label:"Email",align:"left",field:"email"},{name:"lugar",label:"Lugar",align:"left",field:"lugar"}]}},mounted(){this.userGet()},methods:{updatePassword(o){this.user=o,this.$q.dialog({title:"Ingrese nueva contrase\xF1a",prompt:{type:"password"}}).onOk(r=>{this.$axios.put("updatePassword/"+this.user.id,{password:r}).then(g=>{})})},userEdit(o){this.user=o,this.userDialog=!0},clientSave(){this.loading=!0,this.user.id?this.$axios.put("users/"+this.user.id,this.user).then(o=>{this.$alert.success("Usuario modificado correctamente"),this.userDialog=!1,this.userGet()}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("users",this.user).then(o=>{this.$alert.success("Usuario creado correctamente"),this.userDialog=!1,this.userGet()}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1})},usersNew(){this.user={name:"",email:"",username:"",lugar:"ORURO"},this.userDialog=!0},userGet(){this.loading=!0,this.clients=[],this.$axios.get("users",{params:{type:this.type,search:this.search,page:this.current}}).then(o=>{this.users=o.data}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1})}}},q={key:0,class:"text-bold"},B={key:1,class:"text-bold"};function E(o,r,g,_,s,u){return n(),d(D,{class:"bg-grey-3 q-pa-xs"},{default:a(()=>[l(k,{rows:s.users,"rows-per-page-options":[0],dense:"","wrap-cells":"",columns:s.columns},{"top-right":a(()=>[l(i,{label:"Registrar Usuario",icon:"add_circle_outline",dense:"","no-caps":"",color:"green",onClick:u.usersNew},null,8,["onClick"]),l(t,{modelValue:s.search,"onUpdate:modelValue":r[0]||(r[0]=e=>s.search=e),label:"Buscar",dense:"",outlined:""},{append:a(()=>[l(h,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-option":a(e=>[l(x,{props:e,"auto-width":""},{default:a(()=>[l(C,null,{default:a(()=>[l(i,{icon:"edit",color:"orange",onClick:c=>u.userEdit(e.row),width:"250px",label:"Editar","no-caps":"",dense:"",size:"12px"},null,8,["onClick"]),l(i,{icon:"login",color:"indigo",onClick:c=>u.updatePassword(e.row),width:"250px",label:"Password","no-caps":"",dense:"",size:"12px"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),l(Q,{modelValue:s.userDialog,"onUpdate:modelValue":r[8]||(r[8]=e=>s.userDialog=e),persistent:""},{default:a(()=>[l(b,{style:{width:"350px","max-width":"100vw"}},{default:a(()=>[l(m,{class:"row items-center q-pb-none"},{default:a(()=>[s.user.id?(n(),p("div",q,"Editar Usuario")):(n(),p("div",B,"Nuevo Usuario")),l(y),l(i,{flat:"",round:"",dense:"",icon:"close",onClick:r[1]||(r[1]=e=>s.userDialog=!1)})]),_:1}),l(m,null,{default:a(()=>[l(v,{onSubmit:u.clientSave},{default:a(()=>[l(t,{modelValue:s.user.name,"onUpdate:modelValue":r[2]||(r[2]=e=>s.user.name=e),outlined:"",label:"Nombre",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),l(t,{modelValue:s.user.username,"onUpdate:modelValue":r[3]||(r[3]=e=>s.user.username=e),outlined:"",label:"Nombre de usuario",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),l(t,{modelValue:s.user.email,"onUpdate:modelValue":r[4]||(r[4]=e=>s.user.email=e),outlined:"",label:"Email",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),s.user.id?w("",!0):(n(),d(t,{key:0,modelValue:s.user.password,"onUpdate:modelValue":r[5]||(r[5]=e=>s.user.password=e),outlined:"",label:"Password",dense:"",type:"password",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])),l(U,{modelValue:s.user.lugar,"onUpdate:modelValue":r[6]||(r[6]=e=>s.user.lugar=e),outlined:"",label:"Lugar",dense:"",options:["ORURO","COCHABAMBA"]},null,8,["modelValue"]),l(V,{align:"right"},{default:a(()=>[l(i,{label:"Cancelar",color:"negative",onClick:r[7]||(r[7]=e=>s.userDialog=!1),"no-caps":"",loading:s.loading},null,8,["loading"]),l(i,{label:s.user.id?"Actualizar":"Guardar",color:"primary",type:"submit",loading:s.loading,"no-caps":""},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var T=f(N,[["render",E]]);export{T as default};
