(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{MvOg:function(r,o,e){"use strict";e.r(o);var t=e("o0o1"),a=e.n(t),s=e("fpkf"),n=e("4HBT"),i=e.n(n);function l(r,o,e,t,a,s,n){try{var i=r[s](n),l=i.value}catch(r){return void e(r)}i.done?o(l):Promise.resolve(l).then(t,a)}var d={middleware:"guest",mixins:[e("C3Ci").a],metaInfo:function(){return{title:this.$t("Password reset")}},data:function(){return{showPassword:!1,showPassword2:!1,form:new i.a({token:null,email:null,password:null,password_confirmation:null})}},computed:{appLogoUrl:function(){return Object(s.a)("app.logo")}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token},methods:{reset:function(){var r,o=this;return(r=a.a.mark((function r(){var e,t;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.form.post("/api/auth/password/reset");case 2:return e=r.sent,t=e.data,r.next=6,o.$store.dispatch("auth/fetchUser");case 6:o.$store.dispatch("message/success",{text:t.message}),o.$router.push({name:"home"});case 8:case"end":return r.stop()}}),r)})),function(){var o=this,e=arguments;return new Promise((function(t,a){var s=r.apply(o,e);function n(r){l(s,t,a,n,i,"next",r)}function i(r){l(s,t,a,n,i,"throw",r)}n(void 0)}))})()}}},m=e("KHd+"),c=e("ZUTo"),u=e.n(c),f=e("ghKu"),p=e("gzZi"),w=e("sK+t"),v=e("mdmw"),h=e("Yq0q"),g=e("pSOK"),b=e("S9TP"),y=e("rdoz"),_=e("D9m0"),x=e("L6Q5"),V=e("hlRy"),k=e("cdmR"),P=e("Kn9U"),$=Object(m.a)(d,(function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{color:"primary"}},[e("router-link",{attrs:{to:{name:"home"}}},[e("v-avatar",{attrs:{size:"40",tile:""}},[e("v-img",{attrs:{src:r.appLogoUrl}})],1)],1),r._v(" "),e("v-toolbar-title",{staticClass:"ml-2"},[r._v("\n            "+r._s(r.$t("Password reset"))+"\n          ")]),r._v(" "),e("v-spacer")],1),r._v(" "),e("v-card-text",[e("v-form",{ref:"form",on:{submit:function(o){return o.preventDefault(),r.reset(o)}},model:{value:r.formIsValid,callback:function(o){r.formIsValid=o},expression:"formIsValid"}},[e("v-text-field",{attrs:{label:r.$t("Email"),type:"email",name:"email",error:r.form.errors.has("email"),"error-messages":r.form.errors.get("email"),outlined:"",readonly:""},model:{value:r.form.email,callback:function(o){r.$set(r.form,"email",o)},expression:"form.email"}}),r._v(" "),e("v-text-field",{attrs:{label:r.$t("Password"),"append-icon":r.showPassword?"mdi-eye":"mdi-eye-off",type:r.showPassword?"text":"password",name:"password",rules:[r.validationRequired,function(o){return r.validationMinLength(o,6)}],error:r.form.errors.has("password"),"error-messages":r.form.errors.get("password"),outlined:"",counter:""},on:{"click:append":function(o){r.showPassword=!r.showPassword},keydown:function(o){return r.clearFormErrors(o,"password")}},model:{value:r.form.password,callback:function(o){r.$set(r.form,"password",o)},expression:"form.password"}}),r._v(" "),e("v-text-field",{attrs:{label:r.$t("Confirm password"),"append-icon":r.showPassword2?"mdi-eye":"mdi-eye-off",type:r.showPassword2?"text":"password",name:"password_confirmation",rules:[r.validationRequired,function(o){return r.validationMatch(r.form.password,o)}],error:r.form.errors.has("password_confirmation"),"error-messages":r.form.errors.get("password_confirmation"),outlined:"",counter:""},on:{"click:append":function(o){r.showPassword2=!r.showPassword2},keydown:function(o){return r.clearFormErrors(o,"password_confirmation")}},model:{value:r.form.password_confirmation,callback:function(o){r.$set(r.form,"password_confirmation",o)},expression:"form.password_confirmation"}}),r._v(" "),e("v-btn",{attrs:{type:"submit",color:"primary",disabled:!r.formIsValid||r.form.busy,loading:r.form.busy}},[r._v("\n              "+r._s(r.$t("Reset"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);o.default=$.exports;u()($,{VAvatar:f.a,VBtn:p.a,VCard:w.a,VCardText:v.c,VCol:h.a,VContainer:g.a,VForm:b.a,VImg:y.a,VRow:_.a,VSpacer:x.a,VTextField:V.a,VToolbar:k.a,VToolbarTitle:P.a})}}]);
//# sourceMappingURL=password-reset.js.map