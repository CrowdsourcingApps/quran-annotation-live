import{_ as A,a as C,V as N,n as O,m as P,t as F,d as x,E,c as z,F as q,e as k,h as L,g as j,y as Q,o as U,v as J}from"./VAvatar.2b2ac5a6.js";import{V as h,a as M}from"./VRow.aefcd98e.js";import{V as W}from"./VAlert.acf865a2.js";import{Z,a2 as G,$ as T,m as n,a4 as H,l as K,v as X,r as V,ai as Y,A as _,J as p,c as S,w as I,x as b,n as ee,q as te,s as B,t as f,b as y,I as w}from"./index.3d5fc47d.js";import{m as le,V as ie,u as ne,f as ae,b as oe}from"./VOverlay.ebf09f61.js";import{f as se}from"./forwardRefs.54bb1675.js";class Ce{constructor(v,t,a,u,l,o){this.id=v,this.surra_number=t,this.aya_number=a,this.audio_file_name=u,this.duration_ms=l,this.label=o}}const re={props:["error"]};function ue(e,v,t,a,u,l){return t.error?(Z(),G(M,{key:0,style:{"margin-top":"50px"}},{default:T(()=>[n(h,{cols:"1",sm:"3"}),n(h,{col:"10",sm:"6"},{default:T(()=>[n(W,{style:{"background-color":"#F79191 !important",color:"#fff !important"},density:"compact",type:"warning",title:e.$t("excuse"),text:e.$t(t.error)},null,8,["title","text"])]),_:1}),n(h,{cols:"1",sm:"3"})]),_:1})):H("",!0)}const he=A(re,[["render",ue]]);const Ve=K()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...le({origin:"center center",scrollStrategy:"block",transition:{component:ie},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const a=X(e,"modelValue"),{scopeId:u}=ne(),l=V();function o(s){var r,d;const m=s.relatedTarget,c=s.target;if(m!==c&&(r=l.value)!=null&&r.contentEl&&(d=l.value)!=null&&d.globalTop&&![document,l.value.contentEl].includes(c)&&!l.value.contentEl.contains(c)){const g=[...l.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter($=>!$.hasAttribute("disabled")&&!$.matches('[tabindex="-1"]'));if(!g.length)return;const D=g[0],R=g[g.length-1];m===D?R.focus():D.focus()}}Y&&_(()=>a.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",o):document.removeEventListener("focusin",o)},{immediate:!0}),_(a,async s=>{if(await p(),s){var r;(r=l.value.contentEl)==null||r.focus({preventScroll:!0})}else{var d;(d=l.value.activatorEl)==null||d.focus({preventScroll:!0})}});const i=S(()=>I({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return C(()=>{const[s]=ae(e);return n(oe,I({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},s,{modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,"aria-role":"dialog","aria-modal":"true",activatorProps:i.value},u),{activator:t.activator,default:function(){for(var r,d=arguments.length,m=new Array(d),c=0;c<d;c++)m[c]=arguments[c];return n(N,{root:!0},{default:()=>[(r=t.default)==null?void 0:r.call(t,...m)]})}})}),se({},l)}});const _e=b({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...O(),...P(),...ee()},setup(e,v){let{slots:t}=v;const{themeClasses:a}=te(e),{densityClasses:u}=F(e);B({VTimelineDivider:{lineColor:f(e,"lineColor")},VTimelineItem:{density:f(e,"density"),lineInset:f(e,"lineInset")}});const l=S(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),o=S(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return C(()=>n(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},a.value,u.value,l.value],style:{"--v-timeline-line-thickness":y(e.lineThickness)}},t)),{}}}),de=b({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:w,iconColor:String,lineColor:String,...x(),...E(),...z()},setup(e,v){let{slots:t}=v;const{sizeClasses:a,sizeStyles:u}=q(e,"v-timeline-divider__dot"),{backgroundColorStyles:l,backgroundColorClasses:o}=k(f(e,"dotColor")),{roundedClasses:i}=L(e,"v-timeline-divider__dot"),{elevationClasses:s}=j(e),{backgroundColorClasses:r,backgroundColorStyles:d}=k(f(e,"lineColor"));return B({VIcon:{color:f(e,"iconColor"),icon:f(e,"icon"),size:f(e,"size")}}),C(()=>{var c;var m;return n("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[n("div",{class:["v-timeline-divider__before",r.value],style:d.value},null),!e.hideDot&&n("div",{key:"dot",class:["v-timeline-divider__dot",s.value,i.value,a.value],style:u.value},[n("div",{class:["v-timeline-divider__inner-dot",o.value,i.value],style:l.value},[(c=(m=t.default)==null?void 0:m.call(t))!=null?c:e.icon?n(Q,null,null):void 0])]),n("div",{class:["v-timeline-divider__after",r.value],style:d.value},null)])}),{}}}),Se=b({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:w,iconColor:String,lineInset:[Number,String],...x(),...z(),...E(),...P(),...U()},setup(e,v){let{slots:t}=v;const{dimensionStyles:a}=J(e),u=V(0),l=V();return _(l,o=>{var s;var i;!o||(u.value=(s=(i=o.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)!=null?s:0)},{flush:"post"}),C(()=>{var o,i;return n("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":y(u.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${y(e.lineInset)})`:y(0)}},[n("div",{class:"v-timeline-item__body",style:a.value},[(o=t.default)==null?void 0:o.call(t)]),n(de,{ref:l,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:t.icon}),e.density!=="compact"&&n("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=t.opposite)==null?void 0:i.call(t))])])}),{}}});export{he as E,Ce as Q,_e as V,Se as a,Ve as b};
