(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af02b84"],{"7e33":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"bv-example-row bv-example-row-flex-cols",attrs:{fluid:"xl"}},[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{attrs:{id:"recargo",label:"Recargo por interes"}},[r("b-form-input",{model:{value:e.configs.recargo_interes,callback:function(t){e.$set(e.configs,"recargo_interes",t)},expression:"configs.recargo_interes"}})],1)],1),r("b-col",{attrs:{cols:"2"}},[r("b-form-group",[r("b-button",{staticStyle:{"margin-top":"30px"},attrs:{id:"boton-recargo"},on:{click:function(t){return e.swal_changes_configs("recargo")}}},[e._v("Modificar")])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{attrs:{id:"recargo",label:"Dias de regalia"}},[r("b-form-input",{model:{value:e.configs.dias_regalia,callback:function(t){e.$set(e.configs,"dias_regalia",t)},expression:"configs.dias_regalia"}})],1)],1),r("b-col",{attrs:{cols:"2"}},[r("b-form-group",[r("b-button",{staticStyle:{"margin-top":"30px"},attrs:{id:"boton-regalias"},on:{click:function(t){return e.swal_changes_configs("regalia")}}},[e._v("Modificar")])],1)],1)],1)],1)],1)},a=[],s=r("1da1"),o=(r("96cf"),r("b7c7")),i={name:"Utilidades",components:{},data:function(){return{configs:{},dato:"",response_configs:null}},mounted:function(){this.getConfigs()},methods:{getConfigs:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].getConfiguraciones();case 2:e.configs=t.sent;case 3:case"end":return t.stop()}}),t)})))()},actualizar_configs:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return"recargo"==e?t.dato=t.configs.recargo_interes:"regalia"==e&&(t.dato=t.configs.dias_regalia),n={campo:e,dato:t.dato},r.next=4,o["a"].actualizarConfigs(n);case 4:t.response_configs=r.sent,200==t.response_configs?t.$swal("Bien","Datos actualizados correctamente","success"):t.$swal("error",t.response_configs,"error");case 6:case"end":return r.stop()}}),r)})))()},swal_changes_configs:function(e){var t=this;this.$swal({title:"Ingrese la contraseña para poder modificar",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,cancelButtonText:"Cancelar",confirmButtonText:"Modificar",showLoaderOnConfirm:!0,preConfirm:function(){},allowOutsideClick:function(){return!t.$swal.isLoading()}}).then((function(r){if(r.isConfirmed){var n=r.value;n==t.configs.password_utilidades?t.actualizar_configs(e):t.$swal("Ups,la contraseña ingresada es incorrecta","No se puede actualizar este campo","warning")}})),this.response_configs=null}}},c=i,u=r("2877"),l=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=l.exports},b7c7:function(e,t,r){"use strict";var n=r("1da1"),a=r("d4ec"),s=r("bee2"),o=(r("96cf"),r("bb36")),i=r("49c2"),c="base/",u=new i["a"],l=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,[{key:"getToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.getToken(),console.log("tokeeeen",t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getheaders",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getToken();case 2:return t=e.sent,r={"Content-Type":"application/json",Authorization:"Bearer "+t.access},e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getEstadisticas",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return t=e.sent,r=c+"estadisticas/",e.prev=4,e.next=7,o["a"].get(r,{headers:t});case 7:return n=e.sent,e.abrupt("return",n.data);case 11:e.prev=11,e.t0=e["catch"](4),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"actualizarConfigs",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.getheaders();case 3:return r=e.sent,n=c+"configuraciones/",e.next=7,o["a"].post(n,t,{headers:r});case 7:return a=e.sent,e.abrupt("return",a.data);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getConfiguraciones",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return t=e.sent,r=c+"configuraciones/",e.next=6,o["a"].get(r,{headers:t});case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new l}}]);
//# sourceMappingURL=chunk-5af02b84.c7fb7cb3.js.map