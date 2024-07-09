import{_ as D,D as t,E as n,F as r,G as l,Q as d,ao as i,K as p,z as c,J as f,ap as U,an as g,aq as h,L as x,bj as k,ar as v,R as b}from"./index.179eaeb9.js";import{Q as w,a as m}from"./QItem.18ddfb1b.js";import{Q as R}from"./QBtnDropdown.e40cabc6.js";import{a as V,Q as A}from"./QTable.c3059a1f.js";import{Q as I}from"./format.3c0ab256.js";import{Q as N}from"./QSpace.0fc2fccc.js";import{Q}from"./QMarkupTable.8947dba4.js";import{Q as _}from"./QForm.fed73c83.js";import{Q as O}from"./QPage.ad02aa04.js";import"./QList.15341957.js";const S={data(){return{users:[],user:{},search:"",userDialog:!1,loading:!1,columns:[{name:"option",label:"Opcion",align:"left",field:"option"},{name:"name",label:"Nombre",align:"left",field:"name"},{name:"username",label:"Nombre usuario",align:"left",field:"username"},{name:"email",label:"Email",align:"left",field:"email"},{name:"lugar",label:"Lugar",align:"left",field:"lugar"},{name:"type",label:"Tipo",align:"left",field:"type"}]}},mounted(){this.userGet()},methods:{updatePassword(o){this.user=o,this.$q.dialog({title:"Ingrese nueva contrase\xF1a",prompt:{type:"password"}}).onOk(a=>{this.$axios.put("updatePassword/"+this.user.id,{password:a}).then(y=>{})})},userEdit(o){this.user=o,this.userDialog=!0},clientSave(){this.loading=!0,this.user.id?this.$axios.put("users/"+this.user.id,this.user).then(o=>{this.$alert.success("Usuario modificado correctamente"),this.userDialog=!1,this.userGet()}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("users",this.user).then(o=>{this.$alert.success("Usuario creado correctamente"),this.userDialog=!1,this.userGet()}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1})},usersNew(){this.user={name:"",email:"",username:"",lugar:"ORURO"},this.userDialog=!0},userGet(){this.loading=!0,this.clients=[],this.$axios.get("users",{params:{type:this.type,search:this.search,page:this.current}}).then(o=>{this.users=o.data}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1})}}},q={key:0,class:"text-bold"},B={key:1,class:"text-bold"};function E(o,a,y,T,s,u){return t(),n(O,{class:"bg-grey-3 q-pa-xs"},{default:r(()=>[l(A,{rows:s.users,"rows-per-page-options":[0],dense:"","wrap-cells":"",columns:s.columns},{"top-right":r(()=>[l(d,{label:"Registrar Usuario",icon:"add_circle_outline",dense:"","no-caps":"",color:"green",onClick:u.usersNew},null,8,["onClick"]),l(i,{modelValue:s.search,"onUpdate:modelValue":a[0]||(a[0]=e=>s.search=e),label:"Buscar",dense:"",outlined:""},{append:r(()=>[l(p,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-option":r(e=>[l(V,{props:e,"auto-width":""},{default:r(()=>[l(R,{label:"Opciones","auto-width":"",size:"10px","no-caps":"",color:"primary","auto-close":""},{default:r(()=>[c((t(),n(w,{clickable:"",onClick:C=>u.userEdit(e.row)},{default:r(()=>[l(m,{avatar:""},{default:r(()=>[l(p,{name:"edit"})]),_:1}),l(m,null,{default:r(()=>[f("Editar")]),_:1})]),_:2},1032,["onClick"])),[[b]]),c((t(),n(w,{clickable:"",onClick:C=>u.updatePassword(e.row)},{default:r(()=>[l(m,{avatar:""},{default:r(()=>[l(p,{name:"login"})]),_:1}),l(m,null,{default:r(()=>[f("Password")]),_:1})]),_:2},1032,["onClick"])),[[b]])]),_:2},1024)]),_:2},1032,["props"])]),"body-cell-type":r(e=>[l(V,{props:e,"auto-width":""},{default:r(()=>[l(I,{dense:"",size:"10px",label:e.row.type==="ADMINISTRADOR"?"Administrador":"Usuarios",color:e.row.type==="ADMINISTRADOR"?"green":"orange","text-color":"white"},null,8,["label","color"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),l(v,{modelValue:s.userDialog,"onUpdate:modelValue":a[9]||(a[9]=e=>s.userDialog=e),persistent:""},{default:r(()=>[l(U,{style:{width:"350px","max-width":"100vw"}},{default:r(()=>[l(g,{class:"row items-center q-pb-none"},{default:r(()=>[s.user.id?(t(),h("div",q,"Editar Usuario")):(t(),h("div",B,"Nuevo Usuario")),l(N),l(d,{flat:"",round:"",dense:"",icon:"close",onClick:a[1]||(a[1]=e=>s.userDialog=!1)})]),_:1}),l(g,null,{default:r(()=>[l(_,{onSubmit:u.clientSave},{default:r(()=>[l(i,{modelValue:s.user.name,"onUpdate:modelValue":a[2]||(a[2]=e=>s.user.name=e),outlined:"",label:"Nombre",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),l(i,{modelValue:s.user.username,"onUpdate:modelValue":a[3]||(a[3]=e=>s.user.username=e),outlined:"",label:"Nombre de usuario",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),l(i,{modelValue:s.user.email,"onUpdate:modelValue":a[4]||(a[4]=e=>s.user.email=e),outlined:"",label:"Email",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),s.user.id?x("",!0):(t(),n(i,{key:0,modelValue:s.user.password,"onUpdate:modelValue":a[5]||(a[5]=e=>s.user.password=e),outlined:"",label:"Password",dense:"",type:"password",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])),l(Q,{modelValue:s.user.lugar,"onUpdate:modelValue":a[6]||(a[6]=e=>s.user.lugar=e),outlined:"",label:"Lugar",dense:"",options:["ORURO","COCHABAMBA"]},null,8,["modelValue"]),l(Q,{modelValue:s.user.type,"onUpdate:modelValue":a[7]||(a[7]=e=>s.user.type=e),outlined:"",label:"Lugar",dense:"",options:["USUARIO","ADMINISTRADOR"],rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"]),l(k,{align:"right"},{default:r(()=>[l(d,{label:"Cancelar",color:"negative",onClick:a[8]||(a[8]=e=>s.userDialog=!1),"no-caps":"",loading:s.loading},null,8,["loading"]),l(d,{label:s.user.id?"Actualizar":"Guardar",color:"primary",type:"submit",loading:s.loading,"no-caps":""},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var W=D(S,[["render",E]]);export{W as default};
