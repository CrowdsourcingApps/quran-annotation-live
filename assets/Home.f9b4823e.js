import{m as y,a as $,_ as g,y as v,j as p,i as A}from"./VAvatar.03c11907.js";import{V as I,a as C,b as U,c as D}from"./VCard.7f63eccb.js";import{V as w}from"./VSpacer.b90b27cd.js";import{x as T,m as a,Y as u,a1 as m,_ as o,$ as l,U as c,a0 as n,H as F,aB as f,W as H,X as k,a2 as x}from"./index.b764b171.js";import{V as r,a as _}from"./VRow.9ba6e358.js";const B=T({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...y()},setup(e,i){let{slots:t}=i;return $(()=>a(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),L={props:["Title","Icon","Description","mdAndUpvalue","xsvalue","InsLink","Link"]},S={class:"text-h6 mb-1"},N={class:"text-caption ma-2"};function j(e,i,t,s,h,d){return u(),m(I,{class:"mx-auto ma-2 pa-2","max-width":t.xsvalue?"100%":t.mdAndUpvalue?"60%":"80%",style:{"background-color":"#F5F5F5"}},{default:o(()=>[a(C,null,{default:o(()=>[l("div",null,[l("div",S,[c(n(t.Title)+" ",1),a(v,null,{default:o(()=>[c(n(t.Icon),1)]),_:1})]),l("div",N,n(t.Description),1)])]),_:1}),a(U,null,{default:o(()=>[a(p,{variant:"outlined",color:"info","prepend-icon":"mdi-notebook-outline",to:t.InsLink},{default:o(()=>[c(n(e.$t("homepage.instructions")),1)]),_:1},8,["to"]),a(w),a(p,{style:{"background-color":"#5FD083",color:"#fff"},"prepend-icon":t.Icon,to:t.Link},{default:o(()=>[c(n(e.$t("homepage.try_it")),1)]),_:1},8,["prepend-icon","to"])]),_:1})]),_:1},8,["max-width"])}const R=g(L,[["render",j]]),E={props:["Title","Icon","Description","mdAndUpvalue","xsvalue"]},P={class:"text-h6 mb-1"},W={class:"text-caption ma-2"},X={class:"ml-2"};function Y(e,i,t,s,h,d){return u(),m(I,{class:"mx-auto ma-2 pa-2","max-width":t.xsvalue?"100%":t.mdAndUpvalue?"60%":"80%",style:{"background-color":"#F5F5F5"}},{default:o(()=>[a(C,null,{default:o(()=>[l("div",null,[l("div",P,[c(n(t.Title)+" ",1),a(v,null,{default:o(()=>[c(n(t.Icon),1)]),_:1})]),l("div",W,n(t.Description),1)])]),_:1}),a(D,{class:"ma-2 pa-2",style:{"margin-top":"26px !important"}},{default:o(()=>[l("span",X,n(e.$t("homepage.coming_soon")),1),a(v,{icon:"mdi-sprout-outline"})]),_:1})]),_:1},8,["max-width"])}const q=g(E,[["render",Y]]),z={components:{HomeCard:R,HomeCardComming:q},data:()=>({vclink:"/instructions/vc"}),setup(){const{xs:e,mdAndUp:i}=F();var t=i.value,s=e.value;return{mdAndUpvalue:t,xsvalue:s}},methods:{scroll(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){if(this.loggedIn){var e=f.getVisitVCInstructions();if(e===void 0)H.getme().then(t=>{var s=t.data;s.validate_correctness_exam_pass===!1?(s.vc_Instructions=!1,e=!1,this.vclink="/instructions/vc"):(s.vc_Instructions=!0,e=!0,this.vclink="/task/vc"),f.setUserInfo(s)},t=>{console.log(t)});else if(e===!1)this.vclink="/instructions/vc";else{var i=f.getValidateCorrectnessResult();i?this.vclink="/task/vc":this.vclink="/train/vc"}}}},G="/assets/landpage.643568fb.png",J={class:"font-weight-bold text-h4 text-sm-h5 ma-2 pa-2"},K={class:"text-h6 text-sm-subtitle-1 ma-2 pa-2"},M={class:"d-flex align-center ma-2 pa-2"},O={class:"text-subtitle-1 text-sm-caption ma-2 pa-2"},Q={class:"font-weight-bold text-h4 text-sm-h5 ma-2 pa-2"};function Z(e,i,t,s,h,d){const V=k("HomeCard"),b=k("HomeCardComming");return u(),m(B,null,{default:o(()=>[a(_,{"no-gutters":""},{default:o(()=>[a(r,{key:"1",cols:"12",sm:"6"},{default:o(()=>[l("p",J,n(e.$t("homepage.goal")),1),l("p",K,n(e.$t("homepage.AI")),1),l("div",M,[d.loggedIn?x("",!0):(u(),m(p,{key:0,style:{"background-color":"#5FD083",color:"#fff"},to:"/login"},{default:o(()=>[c(n(e.$t("nav.login")),1)]),_:1})),d.loggedIn?(u(),m(p,{key:1,style:{"background-color":"#5FD083",color:"#fff"},onClick:i[0]||(i[0]=ee=>d.scroll("contribute_section"))},{default:o(()=>[c(n(e.$t("nav.contribute")),1)]),_:1})):x("",!0),l("p",O,n(e.$t("homepage.statistics")),1)])]),_:1}),a(r,{key:"2",cols:"12",sm:"6"},{default:o(()=>[a(A,{width:500,src:G})]),_:1})]),_:1}),a(_,{id:"contribute_section",ref:"contribute_section"},{default:o(()=>[a(r,{cols:"12",style:{"text-align":"center","margin-top":"40px !important"}},{default:o(()=>[l("p",Q,n(e.$t("homepage.contribute")),1)]),_:1}),a(r,{key:"1",cols:"12",sm:"6"},{default:o(()=>[a(V,{Title:e.$t("homepage.validate_recitation"),Icon:"mdi-checkbox-marked-circle-outline",Description:e.$t("homepage.validate_recitation_description"),mdAndUpvalue:s.mdAndUpvalue,InsLink:"/instructions/vc",Link:e.vclink,xsvalue:s.xsvalue},null,8,["Title","Description","mdAndUpvalue","Link","xsvalue"])]),_:1}),a(r,{key:"2",cols:"12",sm:"6"},{default:o(()=>[a(b,{Title:e.$t("homepage.validate_Tajweed"),Icon:"mdi-magnify",Description:e.$t("homepage.validate_Tajweed_description"),mdAndUpvalue:s.mdAndUpvalue,xsvalue:s.xsvalue},null,8,["Title","Description","mdAndUpvalue","xsvalue"])]),_:1})]),_:1},512),a(_,{style:{height:"200px"}})]),_:1})}const le=g(z,[["render",Z]]);export{le as default};
