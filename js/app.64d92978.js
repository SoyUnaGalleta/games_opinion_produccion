(function(){"use strict";var n={569:function(n,i,o){var t=o(963),e=o(252);function a(n,i){const o=(0,e.up)("router-view");return(0,e.wg)(),(0,e.j4)(o)}var s=o(744);const r={},l=(0,s.Z)(r,[["render",a]]);var c=l,u=o(201);const d=n=>((0,e.dD)("data-v-9b711402"),n=n(),(0,e.Cn)(),n),p={id:"ListaJuegos"},b=d((()=>(0,e._)("nav",null,[(0,e._)("p",null,"Game Opinion"),(0,e._)("p",null,"Home")],-1)));function m(n,i,o,t,a,s){const r=(0,e.up)("Juegos");return(0,e.wg)(),(0,e.iD)("div",p,[b,(0,e.Wm)(r)])}var v=o(577);const g=n=>((0,e.dD)("data-v-1ab5cd58"),n=n(),(0,e.Cn)(),n),f={id:"Juegos"},h=g((()=>(0,e._)("h1",{class:"tituloH1"},"Lista de Juegos Disponibles",-1))),_={class:"ContenedorPadre"},w={class:"imagen"},k=["src"],O={class:"card-body"},U={class:"card-title"},y={class:"card-text"},C={class:"list-group list-group-flush"},D={class:"list-group-item"},x=g((()=>(0,e._)("b",null,"Rating:",-1))),j={class:"list-group-item"},z=g((()=>(0,e._)("b",null,"ESRB Rating:",-1))),A={class:"list-group-item"},E=g((()=>(0,e._)("b",null,"Released:",-1))),N={class:"list-group-item"},I=g((()=>(0,e._)("b",null,"Update:",-1))),$={class:"botones"},P=["onClick"],L=["onClick"];function J(n,i,o,t,a,s){return(0,e.wg)(),(0,e.iD)("div",f,[h,(0,e._)("div",_,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.juegos,((n,i)=>((0,e.wg)(),(0,e.iD)("div",{class:"card",key:i},[(0,e._)("div",w,[(0,e._)("img",{src:n.background_image,class:"imagenImg",alt:"..."},null,8,k)]),(0,e._)("div",O,[(0,e._)("h5",U,(0,v.zw)(n.name),1),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.genres,(n=>((0,e.wg)(),(0,e.iD)("p",y,(0,v.zw)(n.name)+". ",1)))),256))]),(0,e._)("ul",C,[(0,e._)("li",D,[x,(0,e.Uk)(" "+(0,v.zw)(n.rating),1)]),(0,e._)("li",j,[z,(0,e.Uk)(" "+(0,v.zw)(n.esrb_rating.name),1)]),(0,e._)("li",A,[E,(0,e.Uk)(" "+(0,v.zw)(n.released),1)]),(0,e._)("li",N,[I,(0,e.Uk)(" "+(0,v.zw)(n.updated),1)])]),(0,e._)("div",$,[(0,e._)("button",{class:"btn btn-danger",onClick:i=>s.mostrarOpiniones(n.name)},"Opinar",8,P),(0,e._)("button",{class:"btn btn-outline-danger",onClick:i=>s.irAdministracion(n.name)},"Like",8,L)])])))),128))])])}var T=o(154),Z={name:"Juegos",data:function(){return{juegos:[]}},methods:{consumirApi:function(){let n="https://api.rawg.io/api/games?key=1db3620e2f5742428cbfd7af5d45923e";(0,T.Z)(n).then((n=>{let i=n.data.results;for(let o=0;o<i.length;o++)this.juegos.push(i[o])})).catch((n=>console.log(n)))},mostrarOpiniones:function(n){this.$router.push(`/opiniones/${n}`)},irAdministracion(n){this.$router.push(`/administracion/${n}`)}},created(){this.consumirApi()}};const q=(0,s.Z)(Z,[["render",J],["__scopeId","data-v-1ab5cd58"]]);var M=q,R={name:"ListaJuegos",components:{Juegos:M},data:function(){return{}},methods:{}};const S=(0,s.Z)(R,[["render",m],["__scopeId","data-v-9b711402"]]);var V=S;const F=n=>((0,e.dD)("data-v-60e5eb12"),n=n(),(0,e.Cn)(),n),H={id:"NotFound"},B=F((()=>(0,e._)("div",null,[(0,e._)("h1",null,"Componente Not Found"),(0,e._)("p",null,"Página no encontrada")],-1))),G=[B];function K(n,i,o,t,a,s){return(0,e.wg)(),(0,e.iD)("div",H,G)}var W={name:"NotFound",data:function(){return{}},methods:{}};const Y=(0,s.Z)(W,[["render",K],["__scopeId","data-v-60e5eb12"]]);var Q=Y;const X=n=>((0,e.dD)("data-v-eeadfd7e"),n=n(),(0,e.Cn)(),n),nn={id:"Opiniones"},on={class:"bn"},tn=X((()=>(0,e._)("br",null,null,-1))),en={class:"formularioOpinion"},an={class:"mb-3"},sn=X((()=>(0,e._)("label",{for:"txtNombre",class:"form-label"},"Nombre: ",-1))),rn={class:"mb-3"},ln=X((()=>(0,e._)("label",{for:"txtOpinion",class:"form-label"},"Opinión:",-1))),cn=X((()=>(0,e._)("br",null,null,-1))),un=X((()=>(0,e._)("br",null,null,-1))),dn=X((()=>(0,e._)("br",null,null,-1))),pn=X((()=>(0,e._)("br",null,null,-1))),bn=X((()=>(0,e._)("h3",null,"A continuación podras ver tu opinión.",-1))),mn={key:0,class:"alert alert-danger",role:"alert"},vn={class:"accordion",id:"accordionExample"},gn={class:"accordion-item"},fn={class:"accordion-header"},hn=["data-bs-target","aria-controls"],_n=X((()=>(0,e._)("strong",null,"Opinión creada por:",-1))),wn=["id"],kn={class:"accordion-body"},On=X((()=>(0,e._)("strong",null,"Opinión:",-1))),Un=X((()=>(0,e._)("br",null,null,-1))),yn=["onClick"],Cn=["onClick"],Dn=X((()=>(0,e._)("br",null,null,-1))),xn=X((()=>(0,e._)("br",null,null,-1))),jn=X((()=>(0,e._)("br",null,null,-1))),zn={class:"regresar"},An=X((()=>(0,e._)("br",null,null,-1)));function En(n,i,o,a,s,r){const l=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",nn,[(0,e._)("h3",null,[(0,e.Uk)("Escribe tu opinión respecto al juego: "),(0,e._)("p",on,(0,v.zw)(o.nombre),1)]),tn,(0,e._)("div",en,[(0,e._)("div",an,[sn,(0,e.wy)((0,e._)("input",{class:"form-control",type:"text",id:"txtNombre","onUpdate:modelValue":i[0]||(i[0]=i=>n.nombreUsuario=i)},null,512),[[t.nr,n.nombreUsuario]])]),(0,e._)("div",rn,[ln,(0,e.wy)((0,e._)("input",{class:"form-control",type:"text",id:"txtOpinion","onUpdate:modelValue":i[1]||(i[1]=i=>n.opinionUsuario=i)},null,512),[[t.nr,n.opinionUsuario]])]),0==n.estadoOpinion?((0,e.wg)(),(0,e.iD)("button",{key:0,class:"btn btn-danger",onClick:i[2]||(i[2]=(0,t.iM)((n=>r.agregarOpinion()),["prevent"]))},"Agregar")):(0,e.kq)("",!0),1==n.estadoOpinion?((0,e.wg)(),(0,e.iD)("button",{key:1,class:"btn btn-danger",onClick:i[3]||(i[3]=(0,t.iM)((i=>r.actuzalizarOpinion(n.opinionActualizada)),["prevent"]))},"Actualizar")):(0,e.kq)("",!0),cn,un]),dn,pn,bn,0==n.cantidadOpiniones?((0,e.wg)(),(0,e.iD)("div",mn," No existen opiniones para mostrar. ")):(0,e.kq)("",!0),n.cantidadOpiniones>0?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:1},(0,e.Ko)(n.opiniones,((n,i)=>((0,e.wg)(),(0,e.iD)("div",{class:"misOpciones",key:i},[(0,e._)("div",vn,[(0,e._)("div",gn,[(0,e._)("h2",fn,[(0,e._)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":n.colapseGato,"aria-expanded":"true","aria-controls":n.colapse},[(0,e._)("p",null,[_n,(0,e.Uk)(" "+(0,v.zw)(n.nombre),1)])],8,hn)]),(0,e._)("div",{id:n.colapse,class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},[(0,e._)("div",kn,[(0,e._)("p",null,[On,(0,e.Uk)(" "+(0,v.zw)(n.opinion),1)])])],8,wn)])]),Un,(0,e._)("button",{class:"btn btn-danger",onClick:(0,t.iM)((n=>r.eliminarOpinion(i)),["prevent"])},"Eliminar",8,yn),(0,e._)("button",{class:"btn btn-outline-danger",onClick:(0,t.iM)((n=>r.editarOpinion(i)),["prevent"])},"Editar",8,Cn),Dn,xn])))),128)):(0,e.kq)("",!0),jn,(0,e._)("p",zn,[(0,e.Wm)(l,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("Volver")])),_:1})]),An])}var Nn={name:"Opiniones",props:["nombre"],data:function(){return{nombreUsuario:"",opinionUsuario:"",opiniones:[],cantidadOpiniones:0,estadoOpinion:0,opinionActualizada:0,indice:0}},methods:{agregarOpinion:function(){if(""!=this.nombreUsuario&&""!=this.opinionUsuario){this.cantidadOpiniones++,this.estadoOpinion=0;let n={nombre:this.nombreUsuario,opinion:this.opinionUsuario,colapse:`collapseOne${this.indice}`,colapseGato:`#collapseOne${this.indice}`};this.indice++,this.opiniones.push(n),this.nombreUsuario="",this.opinionUsuario=""}},eliminarOpinion:function(n){this.opiniones.splice(n,1),this.cantidadOpiniones--,this.estadoOpinion=0,this.indice--},editarOpinion:function(n){this.estadoOpinion=1,this.nombreUsuario=this.opiniones[n].nombre,this.opinionUsuario=this.opiniones[n].opinion,this.opinionActualizada=n},actuzalizarOpinion:function(n){this.opiniones[n].nombre=this.nombreUsuario,this.opiniones[n].opinion=this.opinionUsuario,this.nombreUsuario="",this.opinionUsuario="",this.estadoOpinion=0}}};const In=(0,s.Z)(Nn,[["render",En],["__scopeId","data-v-eeadfd7e"]]);var $n=In;const Pn=n=>((0,e.dD)("data-v-7537531b"),n=n(),(0,e.Cn)(),n),Ln={id:"Administracion"},Jn={key:0,class:"validar"},Tn=Pn((()=>(0,e._)("h3",null,"Ingresa tus datos para ver la información:",-1))),Zn={class:"mb-3"},qn=Pn((()=>(0,e._)("label",{for:"txtNombre",class:"form-label"},"Ingrese nombre: ",-1))),Mn=Pn((()=>(0,e._)("label",{for:"txtApellido",class:"form-label"},"Ingrese apellido: ",-1))),Rn={key:1,class:"container-fluid"},Sn={class:"row d-flex"},Vn={class:"col-md-3 colum1"},Fn=Pn((()=>(0,e._)("div",{class:"circulo"},null,-1))),Hn=Pn((()=>(0,e._)("p",null,"Bienvenido",-1))),Bn={class:"col-md-9 colum2"},Gn=Pn((()=>(0,e._)("h1",null,"Resumen de tu cuenta",-1))),Kn={class:"bn"},Wn={class:"cajaCredito"},Yn=Pn((()=>(0,e._)("h5",null,"¿Desea comprar el crédito?",-1))),Qn=Pn((()=>(0,e._)("div",{class:"linea"},null,-1))),Xn=Pn((()=>(0,e._)("h4",null,"Cantidad de coins compradas",-1))),ni={class:"progress",role:"progressbar","aria-label":"Basic example","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},ii=(0,e.uE)('<div class="container-fluid" data-v-7537531b><div class="row" data-v-7537531b><div class="col cuadrado color1" data-v-7537531b><p data-v-7537531b>% de finalización del juego</p><div class="linea2" data-v-7537531b></div><p data-v-7537531b>17%</p></div><div class="col cuadrado color2" data-v-7537531b><p data-v-7537531b>Logros del juego</p><div class="linea2" data-v-7537531b></div><p data-v-7537531b>166</p></div><div class="col cuadrado color3" data-v-7537531b><p data-v-7537531b>Recompensas</p><div class="linea2" data-v-7537531b></div><p data-v-7537531b>200</p></div></div></div><br data-v-7537531b>',2),oi={class:"regresar"},ti=Pn((()=>(0,e._)("br",null,null,-1)));function ei(n,i,o,a,s,r){const l=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",Ln,[0==n.estado?((0,e.wg)(),(0,e.iD)("div",Jn,[Tn,(0,e._)("div",Zn,[qn,(0,e.wy)((0,e._)("input",{class:"form-control",type:"text",id:"txtNombre","onUpdate:modelValue":i[0]||(i[0]=i=>n.nombreUsuario=i)},null,512),[[t.nr,n.nombreUsuario]]),Mn,(0,e.wy)((0,e._)("input",{class:"form-control",type:"text",id:"txtApellido","onUpdate:modelValue":i[1]||(i[1]=i=>n.apellidoUsuario=i)},null,512),[[t.nr,n.apellidoUsuario]])]),(0,e._)("button",{class:"btn btn-danger",onClick:i[2]||(i[2]=n=>r.ingresarDatos())},"Ingresar Datos")])):1==n.estado?((0,e.wg)(),(0,e.iD)("div",Rn,[(0,e._)("div",Sn,[(0,e._)("div",Vn,[Fn,Hn,(0,e._)("p",null,(0,v.zw)(n.nombreUsuario)+" "+(0,v.zw)(n.apellidoUsuario),1)]),(0,e._)("div",Bn,[Gn,(0,e._)("h3",null,[(0,e.Uk)("Le diste me gusta a "),(0,e._)("p",Kn,(0,v.zw)(o.nombre),1)]),(0,e._)("div",Wn,[Yn,(0,e._)("button",{class:"btn btn-danger margen",onClick:i[3]||(i[3]=n=>r.agregarCoint())},"Agregar Coins"),Qn,Xn,(0,e._)("div",ni,[(0,e._)("div",{class:"progress-bar",style:(0,v.j5)(n.estilo)}," $"+(0,v.zw)(n.coins),5)])]),ii,(0,e._)("p",oi,[(0,e.Wm)(l,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("Volver a inicio")])),_:1})]),ti])])])):(0,e.kq)("",!0)])}var ai={name:"Administracion",props:["nombre"],data:function(){return{estado:0,nombreUsuario:"",apellidoUsuario:"",estilo:"width: 0%;",coins:0}},methods:{ingresarDatos:function(){""!==this.nombreUsuario&&""!==this.apellidoUsuario&&this.estado++},agregarCoint:function(){this.coins<=20?(this.coins=this.coins+2,this.estilo=`width: ${this.coins}%;background-color: #35dccc;`):20<this.coins&&this.coins<=30?(this.coins=this.coins+2,this.estilo=`width: ${this.coins}%;background-color: #dc7935;`):30<this.coins&&this.coins<=49&&(this.coins=this.coins+2,this.estilo=`width: ${this.coins}%;background-color: #dc3545;`)}}};const si=(0,s.Z)(ai,[["render",ei],["__scopeId","data-v-7537531b"]]);var ri=si;const li=[{path:"/",name:"listajuegos",component:V},{path:"/opiniones/:nombre",name:"opiniones",component:$n,props:!0},{path:"/administracion/:nombre",name:"Administracion",component:ri,props:!0},{path:"/:catchAll(.*)",name:"notfound",component:Q},{path:"/about",name:"about",component:function(){return o.e(443).then(o.bind(o,782))}}],ci=(0,u.p7)({history:(0,u.PO)("/games_opinion_produccion/"),routes:li});var ui=ci;(0,t.ri)(c).use(ui).mount("#app")}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={exports:{}};return n[t](a,a.exports,o),a.exports}o.m=n,function(){var n=[];o.O=function(i,t,e,a){if(!t){var s=1/0;for(u=0;u<n.length;u++){t=n[u][0],e=n[u][1],a=n[u][2];for(var r=!0,l=0;l<t.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(n){return o.O[n](t[l])}))?t.splice(l--,1):(r=!1,a<s&&(s=a));if(r){n.splice(u--,1);var c=e();void 0!==c&&(i=c)}}return i}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[t,e,a]}}(),function(){o.d=function(n,i){for(var t in i)o.o(i,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:i[t]})}}(),function(){o.f={},o.e=function(n){return Promise.all(Object.keys(o.f).reduce((function(i,t){return o.f[t](n,i),i}),[]))}}(),function(){o.u=function(n){return"js/about.a193bef5.js"}}(),function(){o.miniCssF=function(n){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)}}(),function(){var n={},i="games_opinion:";o.l=function(t,e,a,s){if(n[t])n[t].push(e);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==i+a){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",i+a),r.src=t),n[t]=[e];var p=function(i,o){r.onerror=r.onload=null,clearTimeout(b);var e=n[t];if(delete n[t],r.parentNode&&r.parentNode.removeChild(r),e&&e.forEach((function(n){return n(o)})),i)return i(o)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){o.p="/games_opinion_produccion/"}(),function(){var n={143:0};o.f.j=function(i,t){var e=o.o(n,i)?n[i]:void 0;if(0!==e)if(e)t.push(e[2]);else{var a=new Promise((function(o,t){e=n[i]=[o,t]}));t.push(e[2]=a);var s=o.p+o.u(i),r=new Error,l=function(t){if(o.o(n,i)&&(e=n[i],0!==e&&(n[i]=void 0),e)){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;r.message="Loading chunk "+i+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,e[1](r)}};o.l(s,l,"chunk-"+i,i)}},o.O.j=function(i){return 0===n[i]};var i=function(i,t){var e,a,s=t[0],r=t[1],l=t[2],c=0;if(s.some((function(i){return 0!==n[i]}))){for(e in r)o.o(r,e)&&(o.m[e]=r[e]);if(l)var u=l(o)}for(i&&i(t);c<s.length;c++)a=s[c],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(u)},t=self["webpackChunkgames_opinion"]=self["webpackChunkgames_opinion"]||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(569)}));t=o.O(t)})();
//# sourceMappingURL=app.64d92978.js.map