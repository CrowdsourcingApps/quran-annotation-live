import{_,a as E,V as P}from"./VAvatar.77a54779.js";import{a as v,V as $}from"./VRow.c047cd49.js";import{V as w}from"./VAlert.cd53103a.js";import{Z as S,a2 as A,$ as V,m as i,a4 as B,l as D,v as R,r as k,aa as C,A as b,J as F,c as I,w as h}from"./index.2a2e2f5e.js";import{m as O,u as T,f as N,a as L}from"./VOverlay.6a219078.js";import{f as Q}from"./forwardRefs.54bb1675.js";import{V as q}from"./dialog-transition.fcdb1610.js";class K{constructor(c,o,r,d,e,f){this.id=c,this.surra_number=o,this.aya_number=r,this.audio_file_name=d,this.duration_ms=e,this.label=f}}const z={props:["error"]};function J(t,c,o,r,d,e){return o.error?(S(),A($,{key:0,style:{"margin-top":"50px"}},{default:V(()=>[i(v,{cols:"1",sm:"3"}),i(v,{col:"10",sm:"6"},{default:V(()=>[i(w,{style:{"background-color":"#F79191 !important",color:"#fff !important"},density:"compact",type:"warning",title:t.$t("excuse"),text:t.$t(o.error)},null,8,["title","text"])]),_:1}),i(v,{cols:"1",sm:"3"})]),_:1})):B("",!0)}const X=_(z,[["render",J]]);const Y=D()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...O({origin:"center center",scrollStrategy:"block",transition:{component:q},zIndex:2400})},emits:{"update:modelValue":t=>!0},setup(t,c){let{slots:o}=c;const r=R(t,"modelValue"),{scopeId:d}=T(),e=k();function f(l){var a,s;const u=l.relatedTarget,n=l.target;if(u!==n&&(a=e.value)!=null&&a.contentEl&&(s=e.value)!=null&&s.globalTop&&![document,e.value.contentEl].includes(n)&&!e.value.contentEl.contains(n)){const m=[...e.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(g=>!g.hasAttribute("disabled")&&!g.matches('[tabindex="-1"]'));if(!m.length)return;const p=m[0],x=m[m.length-1];u===p?x.focus():p.focus()}}C&&b(()=>r.value&&t.retainFocus,l=>{l?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0}),b(r,async l=>{if(await F(),l){var a;(a=e.value.contentEl)==null||a.focus({preventScroll:!0})}else{var s;(s=e.value.activatorEl)==null||s.focus({preventScroll:!0})}});const y=I(()=>h({"aria-haspopup":"dialog","aria-expanded":String(r.value)},t.activatorProps));return E(()=>{const[l]=N(t);return i(L,h({ref:e,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable}]},l,{modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,"aria-role":"dialog","aria-modal":"true",activatorProps:y.value},d),{activator:o.activator,default:function(){for(var a,s=arguments.length,u=new Array(s),n=0;n<s;n++)u[n]=arguments[n];return i(P,{root:!0},{default:()=>[(a=o.default)==null?void 0:a.call(o,...u)]})}})}),Q({},e)}});export{X as E,K as Q,Y as V};
