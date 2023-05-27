import{W as p,Z as d,a2 as h,$ as n,m as o,a0 as a,U as r,a1 as s,a5 as U,H as T,aC as v,X as D,Y as g,_ as k,L as H,a3 as L,a4 as m}from"./index.2a2e2f5e.js";import{_ as y,y as b,j as _}from"./VAvatar.77a54779.js";import{V as I,a as x,b as F,c as N}from"./VCard.6d2d083a.js";import{V as S}from"./VSpacer.12fdb936.js";import{N as B}from"./Navbar.aa982a49.js";import{V as P}from"./VContainer.950c8ed0.js";import{V as C,a as u}from"./VRow.c047cd49.js";import"./VOverlay.6a219078.js";import"./forwardRefs.54bb1675.js";const R={props:["Title","Icon","Description","focus","ruaya","hafs","mdAndUpvalue","xsvalue","InsLink","Link"],methods:{toInstructions(){if(this.InsLink==="/instructions/vc"){const e={location:"Home"};p.track("VCInstructions Clicked",e)}this.$router.push(this.InsLink)},toTry(){if(this.Link.includes("vc")){const e={location:"Home"};p.track("VCTry Clicked",e)}this.$router.push(this.Link)}}},Y={class:"text-h6 mb-1"},j={class:"text-caption ma-2"};function E(e,i,t,l,w,c){return d(),h(I,{class:"mx-auto ma-2 pa-2","max-width":t.xsvalue?"100%":t.mdAndUpvalue?"60%":"80%",style:{"background-color":"#F5F5F5"}},{default:n(()=>[o(x,null,{default:n(()=>[a("div",null,[a("div",Y,[r(s(t.Title)+" ",1),o(b,null,{default:n(()=>[r(s(t.Icon),1)]),_:1})]),a("div",j,[r(s(t.Description),1),a("b",null,s(t.focus),1),r(" "+s(t.ruaya)+" ",1),a("b",null,s(t.hafs),1)])])]),_:1}),o(F,null,{default:n(()=>[o(_,{variant:"outlined",color:"info","prepend-icon":"mdi-notebook-outline",onClick:i[0]||(i[0]=f=>c.toInstructions())},{default:n(()=>[r(s(e.$t("homepage.instructions")),1)]),_:1}),o(S),o(_,{style:{"background-color":"#5FD083",color:"#fff"},"prepend-icon":t.Icon,onClick:i[1]||(i[1]=f=>c.toTry())},{default:n(()=>[r(s(e.$t("homepage.try_it")),1)]),_:1},8,["prepend-icon"])]),_:1})]),_:1},8,["max-width"])}const q=y(R,[["render",E]]),z={props:["Title","Icon","Description","mdAndUpvalue","xsvalue"]},M={class:"text-h6 mb-1"},G={class:"text-caption ma-2"},W={class:"ml-2"};function X(e,i,t,l,w,c){return d(),h(I,{class:"mx-auto ma-2 pa-2","max-width":t.xsvalue?"100%":t.mdAndUpvalue?"60%":"80%",style:{"background-color":"#F5F5F5"}},{default:n(()=>[o(x,null,{default:n(()=>[a("div",null,[a("div",M,[r(s(t.Title)+" ",1),o(b,null,{default:n(()=>[r(s(t.Icon),1)]),_:1})]),a("div",G,s(t.Description),1)])]),_:1}),o(N,{class:"ma-2 pa-2",style:U(e.$i18n.locale==="AR"?"margin-top: 45px !important;":"margin-top: 60px !important;")},{default:n(()=>[a("span",W,s(e.$t("homepage.coming_soon")),1),o(b,{icon:"mdi-sprout-outline"})]),_:1},8,["style"])]),_:1},8,["max-width"])}const Z=y(z,[["render",X]]),J={components:{HomeCard:q,HomeCardComming:Z,Navbar:B},data:()=>({vclink:"/instructions/vc"}),setup(){const{xs:e,mdAndUp:i}=T();var t=i.value,l=e.value;return{mdAndUpvalue:t,xsvalue:l}},methods:{scroll(e){const i={location:"Home"};p.track("Contribute Clicked",i),document.getElementById(e).scrollIntoView({behavior:"smooth"})},login(){const e={location:"Home"};p.track("Login Clicked",e),this.$router.push("/login")}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){if(this.loggedIn){var e=v.getVisitVCInstructions();if(e===void 0)D.getme().then(t=>{var l=t.data;l.validate_correctness_exam_pass===!1?(l.vc_Instructions=!1,e=!1,this.vclink="/instructions/vc"):(l.vc_Instructions=!0,e=!0,this.vclink="/task/vc"),v.setUserInfo(l)},t=>{console.log(t)});else if(e===!1)this.vclink="/instructions/vc";else{var i=v.getValidateCorrectnessResult();i?this.vclink="/task/vc":this.vclink="/train/vc"}}}};const K={class:"font-weight-bold text-h4 text-sm-h5 ma-2 pa-2"},O={class:"text-h6 text-sm-subtitle-1 ma-2 pa-2"},Q={class:"d-flex align-center ma-2 pa-2"},ee={class:"text-subtitle-1 text-sm-caption ma-2 pa-2"},te={style:{"text-align":"center"},class:"text-h6 text-sm-subtitle-1 ma-2 pa-2"},ae={class:"align-center ma-2 pa-2",style:{"text-align":"center"}},oe={href:"https://apps.apple.com/us/app/quran-app-read-memorize-learn/id1498169172?platform=iphone",target:"_blank",class:"market-btn apple-btn",role:"button",style:{margin:"5px"}},se={class:"market-button-subtitle"},ne=a("span",{class:"market-button-title"},"App Store",-1),ie={href:"https://play.google.com/store/apps/details?id=com.nurios.quranapp",target:"_blank",class:"market-btn google-btn",role:"button",style:{margin:"5px"}},le={class:"market-button-subtitle"},re=a("span",{class:"market-button-title"},"Google Play",-1),ce=["width"],de=["width"],ue={class:"font-weight-bold text-h4 text-sm-h5 ma-2 pa-2"};function me(e,i,t,l,w,c){const f=g("HomeCard"),$=g("HomeCardComming"),V=g("Navbar");return d(),k(H,null,[o(P,null,{default:n(()=>[o(C,{"no-gutters":""},{default:n(()=>[o(u,{key:"1",cols:"12",sm:"6"},{default:n(()=>[a("p",K,s(e.$t("homepage.goal")),1),a("p",O,s(e.$t("homepage.AI")),1),a("div",Q,[c.loggedIn?m("",!0):(d(),h(_,{key:0,style:{"background-color":"#5FD083",color:"#fff"},onClick:i[0]||(i[0]=L(A=>c.login(),["prevent"]))},{default:n(()=>[r(s(e.$t("nav.login")),1)]),_:1})),c.loggedIn?(d(),h(_,{key:1,style:{"background-color":"#5FD083",color:"#fff"},onClick:i[1]||(i[1]=A=>c.scroll("contribute_section"))},{default:n(()=>[r(s(e.$t("nav.contribute")),1)]),_:1})):m("",!0),a("p",ee,s(e.$t("homepage.statistics")),1)]),a("p",te,s(e.$t("homepage.you_can_download")),1),a("div",ae,[a("a",oe,[a("span",se,s(e.$t("homepage.download")),1),ne]),a("a",ie,[a("span",le,s(e.$t("homepage.download")),1),re])])]),_:1}),o(u,{key:"2",cols:"12",sm:"6"},{default:n(()=>[e.$i18n.locale==="EN"||e.$i18n.locale==="RU"?(d(),k("iframe",{key:0,width:l.xsvalue?"100%":"560",height:"315",src:"https://www.youtube.com/embed/MVLrawwAs_I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,ce)):m("",!0),e.$i18n.locale==="AR"?(d(),k("iframe",{key:1,width:l.xsvalue?"100%":"560",height:"315",src:"https://www.youtube.com/embed/1ih_YuFUpkU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,de)):m("",!0)]),_:1})]),_:1}),o(C,{id:"contribute_section",ref:"contribute_section"},{default:n(()=>[o(u,{cols:"12",style:{"text-align":"center","margin-top":"40px !important"}},{default:n(()=>[a("p",ue,s(e.$t("homepage.contribute")),1)]),_:1}),o(u,{key:"1",cols:"12",sm:"6"},{default:n(()=>[o(f,{Title:e.$t("homepage.validate_recitation"),Icon:"mdi-checkbox-marked-circle-outline",Description:e.$t("homepage.validate_recitation_description"),focus:e.$t("homepage.validate_focus"),ruaya:e.$t("homepage.validate_recitation_ruaya"),hafs:e.$t("homepage.validate_hafs"),mdAndUpvalue:l.mdAndUpvalue,InsLink:"/instructions/vc",Link:e.vclink,xsvalue:l.xsvalue},null,8,["Title","Description","focus","ruaya","hafs","mdAndUpvalue","Link","xsvalue"])]),_:1}),o(u,{key:"2",cols:"12",sm:"6"},{default:n(()=>[o($,{Title:e.$t("homepage.validate_Tajweed"),Icon:"mdi-magnify",Description:e.$t("homepage.validate_Tajweed_description"),mdAndUpvalue:l.mdAndUpvalue,xsvalue:l.xsvalue},null,8,["Title","Description","mdAndUpvalue","xsvalue"])]),_:1})]),_:1},512)]),_:1}),o(V)],64)}const we=y(J,[["render",me]]);export{we as default};