import{x as k,n as C,q as S,t as M,m as l,W as f,Y as d,a1 as u,_ as t,$ as n,a0 as i,U as m,a3 as c,a2 as L,a4 as P}from"./index.c3f94217.js";import{_ as q}from"./logo.7193a35c.js";import{b as B,o as F,c as U,W as R,X as N,d as T,m as D,e as I,f as z,v as A,g as E,Y as W,Z as Y,h as j,_ as X,j as w}from"./VAvatar.b4dd1e65.js";import{V as Z}from"./VSpacer.76c62d19.js";import{V as G}from"./VAlert.15659ba5.js";import{V as H}from"./VForm.38a5cad2.js";import{a as p}from"./VTextField.1b8bc79b.js";import{V as J}from"./VCard.7207ecf1.js";import"./forwardRefs.54bb1675.js";import"./index.52f70299.js";class K{constructor(s,r){this.email=s,this.password=r}}const O=k({name:"VSheet",props:{color:String,...B(),...F(),...U(),...R(),...N(),...T(),...D(),...C()},setup(e,s){let{slots:r}=s;const{themeClasses:h}=S(e),{backgroundColorClasses:g,backgroundColorStyles:a}=I(M(e,"color")),{borderClasses:o}=z(e),{dimensionStyles:y}=A(e),{elevationClasses:$}=E(e),{locationStyles:v}=W(e),{positionClasses:b}=Y(e),{roundedClasses:V}=j(e);return()=>l(e.tag,{class:["v-sheet",h.value,g.value,o.value,$.value,b.value,V.value],style:[a.value,y.value,v.value]},r)}}),Q={data:()=>({form:!1,user:new K(null,null),repeat_password:null,loading:!1,show1:!1,show2:!1,isLoginMode:!0,message:null}),computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/")},methods:{onSubmit(){!this.form||(this.message=null,this.loading=!0,this.user.email=this.user.email.trim(),this.isLoginMode?this.$store.dispatch("auth/login",this.user).then(()=>{this.$router.replace(this.$route.query.redirect||"/")},e=>{this.loading=!1,e.response.status===401?this.message=this.$t("login.401_message"):this.message=this.$t("error")}):this.$store.dispatch("auth/register",this.user).then(()=>{f.track("New User Registered"),this.$router.replace(this.$route.query.redirect||"/")},e=>{this.loading=!1,e.response.status===400?this.message=this.$t("login.400_message"):this.message=this.$t("error")}))},required(e){return!!e||this.$t("login.required")},valid_mail(e){return/.+@.+\..+/.test(e)||this.$t("login.notvalid_mail")},min(e){return e.length>=8||this.$t("login.min_8")},PasswordMatch(e){return e===this.user.password||this.$t("login.mismatch_password")},onSwitchMode(){this.isLoginMode===!0&&f.track("Register Clicked"),this.isLoginMode=!this.isLoginMode}}},_={class:"font-weight-bold text-h4 ma-2 pa-2"},x=n("img",{class:"ml-5 mr-5",src:q},null,-1),ee={class:"font-weight-bold text-h6 ma-2 pa-2"},se=n("br",null,null,-1);function oe(e,s,r,h,g,a){return d(),u(O,{class:"absolute-fill pa-12",style:{"background-color":"#F5F5F5"}},{default:t(()=>[l(J,{class:"mx-auto px-6 py-8",style:P(e.$i18n.locale==="AR"?"direction: rtl;text-align:center;margin-top: 50px":"text-align:center;margin-top: 50px"),"max-width":"344"},{default:t(()=>[n("p",_,i(e.isLoginMode?e.$t("nav.login"):e.$t("login.create")),1),x,n("p",ee,i(e.$t("homepage.goal")),1),l(Z),e.message?(d(),u(G,{key:0,variant:"outlined",type:"warning",prominent:"",border:"top",style:{color:"#F79191 !important","margin-bottom":"20px"}},{default:t(()=>[m(i(e.message),1)]),_:1})):c("",!0),l(H,{modelValue:e.form,"onUpdate:modelValue":s[6]||(s[6]=o=>e.form=o),onSubmit:L(a.onSubmit,["prevent"])},{default:t(()=>[l(p,{modelValue:e.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>e.user.email=o),readonly:e.loading,rules:[a.required,a.valid_mail],class:"mb-2",clearable:"",variant:"underlined",label:e.$t("login.email"),placeholder:e.$t("login.email_placeholder"),"prepend-inner-icon":"mdi-email-outline"},null,8,["modelValue","readonly","rules","label","placeholder"]),l(p,{modelValue:e.user.password,"onUpdate:modelValue":s[1]||(s[1]=o=>e.user.password=o),readonly:e.loading,variant:"underlined",type:e.show1?"text":"password",label:e.$t("login.password"),"prepend-inner-icon":"mdi-lock-outline",placeholder:e.$t("login.password_placeholder"),"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[a.required,a.min],hint:e.$t("login.hint"),clearable:"","onClick:append":s[2]||(s[2]=o=>e.show1=!e.show1)},null,8,["modelValue","readonly","type","label","placeholder","append-icon","rules","hint"]),e.isLoginMode?c("",!0):(d(),u(p,{key:0,modelValue:e.repeat_password,"onUpdate:modelValue":s[3]||(s[3]=o=>e.repeat_password=o),readonly:e.loading,variant:"underlined",type:e.show2?"text":"password",label:e.$t("login.repeat_password"),placeholder:e.$t("login.repeat_password_placeholder"),"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show2?"mdi-eye":"mdi-eye-off",rules:[a.required,a.PasswordMatch],hint:e.$t("login.hint"),clearable:"","onClick:append":s[4]||(s[4]=o=>e.show2=!e.show2)},null,8,["modelValue","readonly","type","label","placeholder","append-icon","rules","hint"])),se,l(w,{disabled:!e.form,loading:e.loading,block:"",style:{"background-color":"#5FD083",color:"#fff"},size:"large",type:"submit",variant:"elevated"},{default:t(()=>[m(i(e.isLoginMode?e.$t("nav.login"):e.$t("login.create")),1)]),_:1},8,["disabled","loading"]),l(w,{style:{"margin-top":"20px"},variant:"text",color:"info",onClick:s[5]||(s[5]=o=>a.onSwitchMode())},{default:t(()=>[m(i(e.isLoginMode?e.$t("login.no_account"):e.$t("login.have_account")),1)]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["style"])]),_:1})}const he=X(Q,[["render",oe]]);export{he as default};