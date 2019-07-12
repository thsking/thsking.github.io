(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],h=0,p=[];h<i.length;h++)o=i[h],a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bb71");r("da64");n["a"].use(a["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},o=[],i={name:"App",components:{},data:function(){return{}},watch:{$route:function(e,t){}}},u=i,c=r("2877"),l=r("6544"),h=r.n(l),p=r("7496"),m=Object(c["a"])(u,s,o,!1,null,null,null),f=m.exports;h()(m,{VApp:p["a"]});r("96cf");var d=r("3b8d"),v=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{color:"primary"}},[r("v-toolbar-title",{staticClass:"white--text"},[e._v("PURCHASES")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:e.openNewPurchaseForm}},[r("v-icon",[e._v("add")])],1)],1),r("v-container",[r("v-data-table",{attrs:{headers:e.headers,items:e.purchases,"hide-actions":""},on:{select:e.selectPurchase},scopedSlots:e._u([{key:"items",fn:function(t){return[r("tr",{on:{click:function(r){return e.selectPurchase(t.item)}}},[r("td",[e._v(e._s(t.item.amount))]),r("td",[e._v(e._s(t.item.purchaseType.name))]),r("td",[e._v(e._s(t.item.accountType.name))]),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.dateStr))])])]}}])}),r("v-dialog",{attrs:{persistent:""},model:{value:e.showPurchaseForm,callback:function(t){e.showPurchaseForm=t},expression:"showPurchaseForm"}},[r("PurchaseForm",{attrs:{purchaseTitle:e.purchaseTitle,readOnly:e.purchaseFormReadOnly,purchaseToForm:e.purchaseToForm},on:{purchaseFormSubmit:e.sendPurchase,exitPurchaseForm:function(t){e.showPurchaseForm=!1},exitAndRemovePurchase:e.removePurchase}})],1)],1),r("v-snackbar",{attrs:{color:e.purchaseSubmissionType},on:{click:function(t){e.alertNewPurchaseSent=!1}},model:{value:e.alertNewPurchaseSent,callback:function(t){e.alertNewPurchaseSent=t},expression:"alertNewPurchaseSent"}},[e._v("\n            "+e._s(e.purchaseSubmissionMessage)+"\n        "),r("v-btn",{attrs:{flat:""}},[e._v("Close")])],1)],1)},b=[],y=(r("ac4d"),r("8a81"),r("ac6a"),r("c5f6"),r("7cdf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"white"},[r("v-toolbar",{attrs:{color:"primary"}},[r("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e.purchaseTitle))]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:e.exitPurchaseForm}},[r("v-icon",[e._v("close")])],1)],1),r("v-container",[r("v-form",{ref:"newPurchaseForm",model:{value:e.newPurchaseForm,callback:function(t){e.newPurchaseForm=t},expression:"newPurchaseForm"}},[r("v-text-field",{attrs:{label:"Montant","single-line":"",rules:e.amountRule,readonly:e.isOnlyRead},on:{keyup:e.checkAmount},model:{value:e.newPurchase.amount,callback:function(t){e.$set(e.newPurchase,"amount",t)},expression:"newPurchase.amount"}}),r("v-select",{attrs:{items:e.accountTypes,"item-text":function(e){return e.name},"item-value":function(e){return e.id},label:"Account Type",rules:e.notEmpty,readonly:e.isOnlyRead,required:""},model:{value:e.newPurchase.accountType,callback:function(t){e.$set(e.newPurchase,"accountType",t)},expression:"newPurchase.accountType"}}),r("v-select",{attrs:{items:e.purchaseTypes,"item-text":function(e){return e.name},"item-value":function(e){return e.id},label:"Purchase Type",rules:e.notEmpty,readonly:e.isOnlyRead,required:""},model:{value:e.newPurchase.purchaseType,callback:function(t){e.$set(e.newPurchase,"purchaseType",t)},expression:"newPurchase.purchaseType"}}),r("v-layout",[r("v-flex",{attrs:{"mb-6":""}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px",disabled:e.isOnlyRead},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-text-field",e._g({attrs:{label:"Buying date","prepend-icon":"event"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1),r("v-flex",{attrs:{"mb-6":""}},[r("v-menu",{ref:"datetimeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px",disabled:e.isOnlyRead},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-text-field",e._g({attrs:{label:"Picker in menu","prepend-icon":"access_time",readonly:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},n))]}}]),model:{value:e.datetimeMenu,callback:function(t){e.datetimeMenu=t},expression:"datetimeMenu"}},[e.datetimeMenu?r("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.datetimeMenu.save(e.time)}},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}):e._e()],1)],1)],1),e.isOnlyRead?e._e():r("v-btn",{attrs:{block:"","align-center":"","justify-space-between":"",row:"",color:"primary"},on:{click:e.newPurchaseFormValid}},[r("v-flex",[e._v("Envoyer")]),r("v-icon",[e._v("add")])],1)],1),r("v-layout",[r("v-flex",{attrs:{"mb-6":""}},[e.isOnlyRead?r("v-btn",{attrs:{block:"",flat:"",color:"warning"},on:{click:e.openConfirmRemovePurchaseDialog}},[e._v("Supprimer")]):e._e()],1),r("v-flex",{attrs:{"mb-6":""}},[e.isOnlyRead?r("v-btn",{attrs:{block:"",flat:"",color:"primary"},on:{click:function(t){e.isOnlyRead=!1}}},[e._v("Modifier")]):e._e()],1)],1),r("v-dialog",{attrs:{width:"500"},model:{value:e.confirmRemoveDialog,callback:function(t){e.confirmRemoveDialog=t},expression:"confirmRemoveDialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n                    Supprimer cette achat?\n                ")]),r("v-card-actions",[r("v-layout",[r("v-flex",{attrs:{"mb-6":""}},[r("v-btn",{attrs:{block:"",flat:"",color:"primary"},on:{click:function(t){e.confirmRemoveDialog=!1}}},[e._v("Annuler")])],1),r("v-flex",{attrs:{"mb-6":""}},[r("v-btn",{attrs:{block:"",flat:"",color:"warning"},on:{click:e.confirmRemove}},[e._v("Confirmer")])],1)],1)],1)],1)],1)],1)],1)}),g=[],k=(r("28a5"),r("2f62")),P=r("d225"),x=r("b0b4"),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(P["a"])(this,e),this.initUser(t)}return Object(x["a"])(e,[{key:"initUser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.hasMinUserDataRequired(t))return console.log("User.setUserData missing required data to create an user",{userData:t}),!1;this.email=t.email,this.id=t.id,t.token&&(this.token=t.token),e.saveUser(this.userStoreInfos)}},{key:"userStoreInfos",get:function(){return{email:this.email?this.email:"",token:this.token?this.token:"",id:this.id?this.id:""}}},{key:"userLogged",get:function(){return!!this.token}}],[{key:"hasMinUserDataRequired",value:function(e){return!!e.email&&!!e.id}},{key:"saveUser",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify(e);window.localStorage.setItem("user",t),window.sessionStorage.setItem("user",t)}},{key:"login",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var r,n,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=a.length>0&&void 0!==a[0]?a[0]:{email:"",password:""},!r.email||!r.password){t.next=4;break}return n=r,t.abrupt("return",M("POST",n,"loginUser").then(function(t){return t.id?new e(t):{error:t}}).catch(function(e){console.log({error:e})}));case 4:case"end":return t.stop()}},t)}));function r(){return t.apply(this,arguments)}return r}()},{key:"getUserByToken",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r="http://localhost:1337/user/token",n=new Headers,n.append("authorization","0Nk68KO894f "+t),!r){e.next=5;break}return e.abrupt("return",fetch(r,{headers:n}).then(function(e){if(e)return e=e.json(),e}).catch(function(e){console.warn({fetchError:e})}));case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"findOrSetStoredUser",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var r,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.userSessionStored,!r||!r.email){t.next=5;break}return t.abrupt("return",new e(r));case 5:if(n=e.userLocalStored,!n||!n.token){t.next=17;break}return t.next=9,e.getUserByToken(n.token);case 9:if(a=t.sent,!a.email){t.next=14;break}e.saveUser(a),t.next=15;break;case 14:return t.abrupt("return");case 15:t.next=18;break;case 17:return t.abrupt("return");case 18:case"end":return t.stop()}},t)}));function r(){return t.apply(this,arguments)}return r}()},{key:"userLocalStored",get:function(){var e=window.localStorage.getItem("user");if(e){var t=JSON.parse(e);if(t&&t.email)return t}}},{key:"userSessionStored",get:function(){var e=window.sessionStorage.getItem("user");if(e){var t=JSON.parse(e);if(t&&t.email)return t}}}]),e}();n["a"].use(k["a"]);var S=window.localStorage,O=new k["a"].Store({state:{user:{}},mutations:{setUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.user=t,t.userStoreInfos&&S.setItem("user",JSON.stringify(t.userStoreInfos))}},actions:{},getters:{userConnected:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.user.email){e.next=2;break}return e.abrupt("return",t.user);case 2:return e.next=4,T.findOrSetStoredUser();case 4:if(r=e.sent,!r){e.next=7;break}return e.abrupt("return",r);case 7:return e.abrupt("return",{});case 8:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}});function F(){return _.apply(this,arguments)}function _(){return _=Object(d["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.getters.userConnected;case 2:if(t=e.sent,!(t instanceof T)){e.next=5;break}return e.abrupt("return","0Nk68KO894f ".concat(t.token));case 5:return e.abrupt("return","");case 6:case"end":return e.stop()}},e)})),_.apply(this,arguments)}var R="http://localhost:1337/",V={getPurchases:R+"purchase",postPurchase:R+"purchase",removePurchase:R+"purchase",getAccountTypes:R+"accountType",getPurchaseTypes:R+"purchaseType",loginUser:R+"user/login"};function D(){return j.apply(this,arguments)}function j(){return j=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r=V[t],n=new Headers,e.t0=n,e.next=6,F();case 6:return e.t1=e.sent,e.next=9,e.t0.append.call(e.t0,"authorization",e.t1);case 9:if(!r){e.next=11;break}return e.abrupt("return",fetch(r,{headers:n}).then(function(e){if(e)return e=e.json(),e}).catch(function(e){console.warn({fetchError:e})}));case 11:case"end":return e.stop()}},e)})),j.apply(this,arguments)}function M(){return N.apply(this,arguments)}function N(){return N=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a,s,o,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:"",a=i.length>3&&void 0!==i[3]?i[3]:0,s=V[n],o=new Headers,e.t0=o,e.next=9,F();case 9:return e.t1=e.sent,e.next=12,e.t0.append.call(e.t0,"authorization",e.t1);case 12:if(0!=a&&(s+="/"+a),!s){e.next=15;break}return e.abrupt("return",fetch(s,{method:t,body:JSON.stringify(r),headers:o}).then(function(e){if(e)return e=e.json(),e}).catch(function(e){console.warn({fetchError:e})}));case 15:case"end":return e.stop()}},e)})),N.apply(this,arguments)}var C={props:["purchaseToForm","readOnly","purchaseTitle"],data:function(){return{accountTypes:[],purchaseTypes:["purchaseTypes1","purchaseTypes2","purchaseTypes3"],menu:!1,date:(new Date).toISOString().substr(0,10),time:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()),datetimeMenu:!1,amountRule:[function(e){return/^\d+(,\d+)*$/.test(e)||"Format: 00(,00)"}],notEmpty:[function(e){return!!e||"Need to select "}],newPurchase:{accountType:"",purchaseType:"",timestamp:"",amount:""},newPurchaseForm:"",isOnlyRead:!1,confirmRemoveDialog:!1}},created:function(){var e=this;D("getAccountTypes").then(function(t){e.accountTypes=t}),D("getPurchaseTypes").then(function(t){e.purchaseTypes=t})},watch:{purchaseToForm:function(e,t){this.newPurchase=e,this.isOnlyRead=this.readOnly,this.setFormTimeFromTimestamp(this.newPurchase.timestamp),this.$refs.newPurchaseForm.resetValidation()}},methods:{newPuchaseDateTime:function(){return new Date(this.date+" "+this.time).getTime()},newPurchaseFormValid:function(){this.newPurchase.timestamp=this.newPuchaseDateTime(),this.checkAmount(),this.$refs.newPurchaseForm.validate()?this.$emit("purchaseFormSubmit",this.newPurchase):console.log(this.$refs.newPurchaseForm)},exitPurchaseForm:function(){this.$emit("exitPurchaseForm",this.newPurchase)},checkAmount:function(){var e=!1;this.newPurchase.amount=this.newPurchase.amount.split("").filter(function(t){return!(!Number.isInteger(parseInt(t))&&","!==t)&&((","!==t||!e)&&(","!==t||e||(e=!0),!0))}).join("")},setFormTimeFromTimestamp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date(e);this.date=t.toISOString().substr(0,10),this.time="".concat(t.getHours(),":").concat(t.getMinutes())},openConfirmRemovePurchaseDialog:function(){this.confirmRemoveDialog=!0},confirmRemove:function(){this.$emit("exitAndRemovePurchase",this.newPurchase)}}},U=C,$=r("8336"),A=r("b0af"),E=r("99d9"),I=r("12b2"),L=r("a523"),H=r("2e4b"),B=r("169a"),J=r("0e8f"),q=r("4bd4"),z=r("132d"),K=r("a722"),G=r("e449"),Q=r("b56d"),W=r("9910"),X=r("2677"),Y=r("c964"),Z=r("71d9"),ee=r("2a7f"),te=Object(c["a"])(U,y,g,!1,null,null,null),re=te.exports;h()(te,{VBtn:$["a"],VCard:A["a"],VCardActions:E["a"],VCardTitle:I["a"],VContainer:L["a"],VDatePicker:H["a"],VDialog:B["a"],VFlex:J["a"],VForm:q["a"],VIcon:z["a"],VLayout:K["a"],VMenu:G["a"],VSelect:Q["a"],VSpacer:W["a"],VTextField:X["a"],VTimePicker:Y["a"],VToolbar:Z["a"],VToolbarTitle:ee["a"]});var ne=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(P["a"])(this,e),this.amount=t.amount?t.amount:"",this.note=t.note?t.note:"",this.accountType=t.accountType?t.accountType:"",this.purchaseType=t.purchaseType?t.purchaseType:"",this.timestamp=t.timestamp?t.timestamp:(new Date).getTime(),this.id=t.id?t.id:""}return Object(x["a"])(e,[{key:"dateStr",get:function(){var e=new Date(this.timestamp),t=e.toLocaleDateString();return t}},{key:"hourStr",get:function(){var e=new Date(this.timestamp);return"".concat(e.getHours(),":").concat(e.getMinutes())}},{key:"dateHourStr",get:function(){return"".concat(this.dateStr," - ").concat(this.hourStr)}},{key:"formData",get:function(){return{amount:this.amount,accountType:Number.isInteger(this.accountType)?this.accountType:this.accountType.id,purchaseType:Number.isInteger(this.purchaseType)?this.purchaseType:this.purchaseType.id,timestamp:this.timestamp,note:this.note}}}]),e}(),ae={components:{PurchaseForm:re},data:function(){return{headers:[{text:"Amount",value:"amount",align:"left"},{text:"Type",value:"purchaseType.name",align:"left"},{text:"Account",value:"accountType.name",align:"left"},{text:"Date",value:"timestamp",align:"right"}],expand:!1,purchases:[],showPurchaseForm:!1,alertNewPurchaseSent:!1,showPurchaseComponent:!1,purchaseFormReadOnly:!1,purchaseToForm:{},purchaseTitle:"New purchase",purchaseSubmissionMessage:"New purchase has been sent",purchaseSubmissionType:"success"}},created:function(){this.fetchPurchases()},methods:{fetchPurchases:function(){var e=this;D("getPurchases").then(function(t){if(Array.isArray(t)){var r=e.getPurchaseModels(t);e.purchases=[],e.purchases=r,e.purchasesToDisplay=r}else console.warn("no purchases found or error happend")})},selectPurchase:function(e){this.purchaseTitle="Purchase",this.purchaseFormReadOnly=!0,this.purchaseToForm=e,this.showPurchaseForm=!0},sendPurchase:function(e){var t=this,r=Number.isInteger(e.id)&&e.id>0?"PATCH":"POST",n=e.id?e.id:0;e.formData&&(e=e.formData),M(r,e,"postPurchase",n).then(function(e){e&&e.amount?(t.showPurchaseForm=!1,t.showSnackbar("New purchase has been sent"),t.fetchPurchases()):(t.showPurchaseForm=!1,t.showSnackbar("Error happened while sending purchase","error"))})},getPurchaseModels:function(e){var t=[],r=!0,n=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var i=s.value,u=new ne(i);t.push(u)}}catch(c){n=!0,a=c}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return t},openNewPurchaseForm:function(){this.showPurchaseForm=!0,this.purchaseToForm=new ne,this.purchaseFormReadOnly=!1,this.purchaseTitle="New purchase"},removePurchase:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.showPurchaseForm=!1,t.id&&M("delete","","removePurchase",t.id).then(function(t){t.id?(e.showSnackbar("Purchase deleted"),e.fetchPurchases()):e.showSnackbar("Purchase delete error","error")})},showSnackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.purchaseSubmissionMessage=e,this.purchaseSubmissionType=t,this.alertNewPurchaseSent=!0}}},se=ae,oe=r("8fea"),ie=r("2db4"),ue=Object(c["a"])(se,w,b,!1,null,null,null),ce=ue.exports;h()(ue,{VBtn:$["a"],VContainer:L["a"],VDataTable:oe["a"],VDialog:B["a"],VIcon:z["a"],VSnackbar:ie["a"],VSpacer:W["a"],VToolbar:Z["a"],VToolbarTitle:ee["a"]});var le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("h1",[e._v("$)")]),r("v-form",{ref:"userForm",model:{value:e.userForm,callback:function(t){e.userForm=t},expression:"userForm"}},[r("v-flex",[r("v-text-field",{attrs:{label:"Login",rules:e.notEmpty},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-flex",[r("v-text-field",{attrs:{"append-icon":e.showPassword?"visibility":"visibility_off",type:e.showPassword?"text":"password",label:"Password",rules:e.notEmpty},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e.errorMessage.length>0?r("p",[e._v(e._s(e.errorMessage))]):e._e(),r("v-btn",{attrs:{block:""},on:{click:e.tryToLogin}},[e._v("Se connecter")]),r("v-btn",{attrs:{block:""},on:{click:e.showUser}},[e._v("showBtn")]),r("router-link",{attrs:{to:"/"}},[e._v("Go to Bar")])],1)],1)},he=[],pe={data:function(){return{showPassword:!1,email:"",password:"",notEmpty:[function(e){return!!e||"Required"}],userForm:"",errorMessage:""}},methods:{showUser:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.getters.userConnected;case 2:t=e.sent,console.log({ux:t});case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),tryToLogin:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs.userForm.validate()){e.next=4;break}return t={email:this.email,password:this.password},e.next=4,T.login(t).then(function(e){e instanceof T?(O.commit("setUser",e),be.push("/")):e.error&&"string"===typeof e.error?r.errorMessage=e.error:console.error({userLoginError:e})});case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},me=pe,fe=(r("d6db"),Object(c["a"])(me,le,he,!1,null,null,null)),de=fe.exports;function ve(e,t,r){return we.apply(this,arguments)}function we(){return we=Object(d["a"])(regeneratorRuntime.mark(function e(t,r,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.getters.userConnected;case 2:a=e.sent,a&&a.email?n():n("/login");case 4:case"end":return e.stop()}},e)})),we.apply(this,arguments)}h()(fe,{VBtn:$["a"],VContainer:L["a"],VFlex:J["a"],VForm:q["a"],VTextField:X["a"]}),n["a"].use(v["a"]);var be=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Purchases",component:ce,beforeEnter:ve},{path:"/login",name:"Login",component:de}]});n["a"].config.productionTip=!1,new n["a"]({router:be,store:O,render:function(e){return e(f)}}).$mount("#app")},"5f0a":function(e,t,r){},d6db:function(e,t,r){"use strict";var n=r("5f0a"),a=r.n(n);a.a}});
//# sourceMappingURL=app.6f289226.js.map