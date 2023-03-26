import{E as T,Q as z,V as P,a as g,b as S}from"./VTimelineItem.b57bc974.js";import{V as E,q as x}from"./VcInstructions.1f362feb.js";import{aC as v,aB as B,X as w,Y as l,Z as y,m as t,a1 as u,_ as s,a2 as o,L as U,U as n,a0 as a}from"./index.7d5af1b5.js";import{_ as N,y as _,j as d,Z as R}from"./VAvatar.3f10b14a.js";import{a as h,V as p}from"./VRow.f6b6bdae.js";import{V as $,d as c,c as j,b as D}from"./VCard.40527f92.js";import{V}from"./VAlert.62e88eab.js";import{V as F}from"./VSpacer.a9f18098.js";import"./VOverlay.9e0583ff.js";import"./forwardRefs.54bb1675.js";const q="control_tasks/";class L{get_validate_correctness(){return v.get(q+"validate_correctness/")}save_validate_correctness_answers(i){return v.post(q+"validate_correctness/answers",i).then(m=>(m.data.pass_exam===!0&&B.updateValidateCorrectnessExamPass(),m))}}const C=new L,Q={components:{VcInstructions:E,Error:T},data:()=>({error:null,loading:!0,quran:x,questions:[],currnet:new z,index:0,problem:!1,message:null,title:null,text:null,q1:"blue",q2:"white",q3:"white",q4:"white",q5:"white",q6:"white",q7:"white",q8:"white",answers:[],disabled:!1,end:!1,end_result:null,correct_answers:0,audio:new Audio,Instructions_dialog:!1,next_disable:!0}),created(){this.getTrainningTasks()},methods:{toggleProblem(){this.problem=!this.problem},reloadPage(){window.location.reload()},getTrainningTasks(){C.get_validate_correctness().then(e=>{this.questions=e.data,this.currnet=this.questions[0],this.loading=!1},e=>{e.response.status===404?this.error="trainning.404_message":e.response.status===400?e.response.data.detail==="Participant already pass the entrance exam"?this.error="trainning.400_message":this.error="trainning.404_message":this.error="error",this.loading=!1})},setAnswer(e){this.next_disable=!1,this.disabled=!0;let i={id:this.currnet.id,label:e};this.answers.push(i);const m=this.currnet.label;e===m?(this["q"+(this.index+1)]="success",this.message=!0,this.correct_answers=this.correct_answers+1,this.title=this.$t("trainning.correct_answer")):(this["q"+(this.index+1)]="fail",this.message=!1,this.title=this.$t("trainning.Incorrect_answer")),this.text=this.$t("trainning.answer_correct_is")+" ",m==="multiple_aya"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.multiple")+" >. "+this.$t("trainning.multiple_feedback"):m==="correct"?this.text=this.text+" < "+this.$t("trainning.correct")+" >. "+this.$t("trainning.correct_feedback"):m==="in_correct"?this.text=this.text+" < "+this.$t("trainning.incorrect")+" >. "+this.$t("trainning.incorrect_feedback"):m==="not_related_quran"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.empty")+" >. "+this.$t("trainning.empty_feedback"):m==="not_match_aya"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.different")+" >. "+this.$t("trainning.different_feedback"):m==="in_complete"&&(this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.incomplete")+" >. "+this.$t("trainning.incomplete_feedback")),this.index===7&&(this.loading=!0,C.save_validate_correctness_answers(this.answers).then(b=>{b.data.pass_exam===!0?this.end_result=!0:this.end_result=!1,this.end=!0,this.loading=!1},b=>{b.response.status===400?b.response.data.detail==="Participant already pass the entrance exam"?this.error="trainning.400_message":this.error="error":this.error="error",this.loading=!1}))},next(){this.message=null,this.next_disable=!0,this.audio&&this.audio.pause(),this.loading=!0,this.problem=!1,this.index=this.index+1,this.currnet=this.questions[this.index],this["q"+(this.index+1)]="blue",this.disabled=!1,this.loading=!1},playAudio(){this.audio.src="https://"+this.currnet.audio_file_name,this.audio.play()}}},Z={key:1,style:{display:"inline-grid"}},X={key:2,style:{display:"inline-grid"}};function Y(e,i,m,b,k,f){const A=w("Error"),I=w("VcInstructions");return l(),y(U,null,[t(A,{error:e.error},null,8,["error"]),e.end?(l(),u(h,{key:0,style:{"margin-top":"50px"}},{default:s(()=>[t(p,{cols:"1",sm:"3"}),t(p,{col:"10",sm:"6"},{default:s(()=>[t($,{class:"mx-auto ma-2 pa-2",style:{"text-align":"center"}},{default:s(()=>[t(c,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center"}},{default:s(()=>[t(_,{class:"ma-2",icon:"mdi-party-popper",color:"gold"}),n(" "+a(e.$t("support.mash"))+" ",1),t(_,{class:"ma-2",icon:"mdi-party-popper",color:"gold"})]),_:1}),t(c,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center","line-height":"2.25rem"}},{default:s(()=>[n(a(e.$t("trainning_session.completed")),1)]),_:1}),t(c,null,{default:s(()=>[n(a(e.$t("trainning_session.Points")+" "+this.correct_answers+" / 8"),1)]),_:1}),e.end_result?(l(),u(c,{key:0,class:"text-h5"},{default:s(()=>[n(a(e.$t("trainning_session.ready")),1)]),_:1})):o("",!0),e.end_result?o("",!0):(l(),u(c,{key:1},{default:s(()=>[n(a(e.$t("trainning_session.train_again")),1)]),_:1})),e.end_result?(l(),u(d,{key:2,style:{margin:"10px",color:"#fff !important"},color:"success",to:"/task/vc"},{default:s(()=>[n(a(e.$t("trainning_session.contribute")),1)]),_:1})):o("",!0),e.end_result?o("",!0):(l(),u(d,{key:3,style:{margin:"10px",color:"#fff !important"},color:"success",onClick:i[0]||(i[0]=r=>f.reloadPage())},{default:s(()=>[n(a(e.$t("trainning_session.try")),1)]),_:1}))]),_:1})]),_:1}),t(p,{cols:"1",sm:"3"})]),_:1})):o("",!0),e.loading?(l(),u(h,{key:1,style:{"margin-top":"50px"}},{default:s(()=>[t(p,{cols:"4"}),t(p,{cols:"4",style:{"text-align":"center"}},{default:s(()=>[t(R,{indeterminate:"",size:51,width:7})]),_:1})]),_:1})):o("",!0),!e.loading&&!e.end&&!e.error?(l(),u(h,{key:2,style:{"justify-content":"center"}},{default:s(()=>[t(p,{cols:"12",sm:"6"},{default:s(()=>[t(P,{"line-inset":"50",direction:"horizontal"},{default:s(()=>[t(g,{size:"small","dot-color":e.q1},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q2},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q3},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q4},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q5},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q6},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q7},null,8,["dot-color"]),t(g,{size:"small","dot-color":e.q8},null,8,["dot-color"])]),_:1})]),_:1})]),_:1})):o("",!0),!e.loading&&!e.end&&!e.error?(l(),u(h,{key:3,style:{"margin-top":"0px"}},{default:s(()=>[t(p,{cols:"1",sm:"3"}),t(p,{cols:"10",sm:"6"},{default:s(()=>[t($,{class:"mx-auto",style:{"text-align":"center"}},{default:s(()=>[t(c,{class:"ma-2 pa-2"},{default:s(()=>[n(a(e.$t("trainning.listen")),1)]),_:1}),t(d,{onClick:i[1]||(i[1]=r=>f.playAudio()),class:"mr-3",variant:"outlined",color:"black",icon:"mdi-play"}),t(c,{class:"ma-2 pa-2"},{default:s(()=>[n(a(e.$t("trainning.recited_correctly")),1)]),_:1}),t(c,{style:{"line-height":"2.25rem"},class:"ma-2 pa-2 text-h5"},{default:s(()=>[n(a(e.quran[e.currnet.surra_number][e.currnet.aya_number].uthmani),1)]),_:1}),e.problem?(l(),u(j,{key:0,class:"ma-2 pa-2"},{default:s(()=>[n(a(e.$t("trainning.what_problem")),1)]),_:1})):o("",!0),e.problem?o("",!0):(l(),y("div",Z,[t(d,{disabled:e.disabled,onClick:i[2]||(i[2]=r=>f.setAnswer("correct")),color:"success",style:{margin:"10px",color:"#fff !important"}},{default:s(()=>[n(a(e.$t("trainning.correct")),1)]),_:1},8,["disabled"]),t(d,{disabled:e.disabled,onClick:i[3]||(i[3]=r=>f.setAnswer("in_correct")),color:"fail",style:{margin:"10px",color:"#fff !important"}},{default:s(()=>[n(a(e.$t("trainning.incorrect")),1)]),_:1},8,["disabled"]),t(d,{disabled:e.disabled,onClick:i[4]||(i[4]=r=>f.toggleProblem()),color:"invalid",style:{margin:"10px"}},{default:s(()=>[n(a(e.$t("trainning.problem")),1)]),_:1},8,["disabled"])])),e.problem?(l(),y("div",X,[t(d,{disabled:e.disabled,onClick:i[5]||(i[5]=r=>f.setAnswer("in_complete")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:s(()=>[n(a(e.$t("trainning.incomplete")),1)]),_:1},8,["disabled"]),t(d,{disabled:e.disabled,onClick:i[6]||(i[6]=r=>f.setAnswer("not_match_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:s(()=>[n(a(e.$t("trainning.different")),1)]),_:1},8,["disabled"]),t(d,{disabled:e.disabled,onClick:i[7]||(i[7]=r=>f.setAnswer("multiple_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:s(()=>[n(a(e.$t("trainning.multiple")),1)]),_:1},8,["disabled"]),t(d,{disabled:e.disabled,onClick:i[8]||(i[8]=r=>f.setAnswer("not_related_quran")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:s(()=>[n(a(e.$t("trainning.empty")),1)]),_:1},8,["disabled"]),t(d,{disabled:e.disabled,onClick:i[9]||(i[9]=r=>f.toggleProblem()),color:"invalid",style:{margin:"10px"},modelValue:e.problem,"onUpdate:modelValue":i[10]||(i[10]=r=>e.problem=r)},{default:s(()=>[n(a(e.$t("trainning.back")),1)]),_:1},8,["disabled","modelValue"])])):o("",!0)]),_:1}),t(h,{style:{"margin-top":"10px"}},{default:s(()=>[t(p,null,{default:s(()=>[e.message?(l(),u(V,{key:0,style:{color:"#fff !important"},density:"compact",type:"success",title:e.title,text:e.text},null,8,["title","text"])):o("",!0),e.message===!1?(l(),u(V,{key:1,style:{"background-color":"#F79191 !important",color:"#fff !important"},density:"compact",type:"warning",title:e.title,text:e.text},null,8,["title","text"])):o("",!0)]),_:1})]),_:1}),t(h,{style:{margin:"15px"}},{default:s(()=>[t(d,{variant:"text",color:"info","prepend-icon":"mdi-notebook-outline"},{default:s(()=>[n(a(e.$t("homepage.instructions"))+" ",1),t(S,{modelValue:e.Instructions_dialog,"onUpdate:modelValue":i[12]||(i[12]=r=>e.Instructions_dialog=r),activator:"parent",width:"auto"},{default:s(()=>[t($,null,{default:s(()=>[t(I,{Showstart:!1}),t(D,null,{default:s(()=>[t(d,{color:"invalid",block:"",onClick:i[11]||(i[11]=r=>e.Instructions_dialog=!1)},{default:s(()=>[n(a(e.$t("trainning.close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(F),e.index!=7?(l(),u(d,{key:0,onClick:i[13]||(i[13]=r=>f.next()),variant:"text",color:"info","prepend-icon":e.$i18n.locale==="AR"?"mdi-chevron-left":"mdi-chevron-right",disabled:e.next_disable},{default:s(()=>[n(a(e.$t("trainning.next")),1)]),_:1},8,["prepend-icon","disabled"])):o("",!0)]),_:1})]),_:1}),t(p,{col:"1",sm:"3"})]),_:1})):o("",!0)],64)}const ie=N(Q,[["render",Y]]);export{ie as default};
