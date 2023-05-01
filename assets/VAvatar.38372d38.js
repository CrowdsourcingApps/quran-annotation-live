import{a6 as j,x as T,a7 as Ne,a8 as Pe,a9 as ue,g as ce,aa as Ie,ab as Ve,s as Ae,p as _,c as d,b as f,m as o,ac as K,w as Oe,T as de,r as k,A as D,K as He,J as ve,y as Z,B as We,L as me,z as De,ad as w,ae as P,af as fe,ag as ee,ah as te,I as ge,n as U,q as G,ai as je,t as he,aj as Fe,j as Me,ak as Xe,al as ne,G as pe,v as qe,am as Ye,an as ae,ao as Ke,N as Ue}from"./index.7fb740c4.js";const _e=["top","bottom"],Ge=["start","end","left","right"];function Je(e,t){let[n,a]=e.split(" ");return a||(a=j(_e,n)?"start":j(Ge,n)?"top":"center"),{side:se(n,t),align:se(a,t)}}function se(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Tt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function zt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Bt(e){return{side:e.align,align:e.side}}function Rt(e){return j(_e,e.side)?"y":"x"}function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return T({name:n!=null?n:Ne(Pe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(a,i){let{slots:s}=i;return()=>{var r;return ue(a.tag,{class:e},(r=s.default)==null?void 0:r.call(s))}}})}function I(e){const t=ce("useRender");t.render=e}const Pt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},It=Ie({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:a,reset:i,root:s,scoped:r}=Ve(e);return Ae(a,{reset:i,root:s,scoped:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const Qe=_({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ze(e){return{dimensionStyles:d(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function et(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const tt=T({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Qe()},setup(e,t){let{slots:n}=t;const{aspectStyles:a}=et(e),{dimensionStyles:i}=Ze(e);return I(()=>{var s;return o("div",{class:"v-responsive",style:i.value},[o("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function nt(e,t){if(!K)return;const n=t.modifiers||{},a=t.value,{handler:i,options:s}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var l;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const m=(l=e._observe)==null?void 0:l[t.instance.$.uid];if(!m)return;const g=u.some(p=>p.isIntersecting);i&&(!n.quiet||m.init)&&(!n.once||g||m.init)&&i(g,u,v),g&&n.once?ye(e,t):m.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:r},r.observe(e)}function ye(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];!a||(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const at={mounted:nt,unmounted:ye},st=at,rt=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,t)=>{let{slots:n}=t;const{transition:a,...i}=e,{component:s=de,...r}=typeof a=="object"?a:{};return ue(s,Oe(typeof a=="string"?{name:a}:r,i),n)},it=T({name:"VImg",directives:{intersect:st},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...rt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const i=k(""),s=k(),r=k(e.eager?"loading":"idle"),l=k(),u=k(),v=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=d(()=>v.value.aspect||l.value/u.value||0);D(()=>e.src,()=>{g(r.value!=="idle")}),D(m,(c,h)=>{!c&&h&&s.value&&$(s.value)}),He(()=>g());function g(c){if(!(e.eager&&c)&&!(K&&!c&&!e.eager)){if(r.value="loading",v.value.lazySrc){const h=new Image;h.src=v.value.lazySrc,$(h,null)}!v.value.src||ve(()=>{var h,S;if(n("loadstart",((h=s.value)==null?void 0:h.currentSrc)||v.value.src),(S=s.value)!=null&&S.complete){if(s.value.naturalWidth||y(),r.value==="error")return;m.value||$(s.value,null),p()}else m.value||$(s.value),x()})}}function p(){var c;x(),r.value="loaded",n("load",((c=s.value)==null?void 0:c.currentSrc)||v.value.src)}function y(){var c;r.value="error",n("error",((c=s.value)==null?void 0:c.currentSrc)||v.value.src)}function x(){const c=s.value;c&&(i.value=c.currentSrc||c.src)}let V=-1;function $(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(V);const{naturalHeight:E,naturalWidth:H}=c;E||H?(l.value=H,u.value=E):!c.complete&&r.value==="loading"&&h!=null?V=window.setTimeout(S,h):(c.currentSrc.endsWith(".svg")||c.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,u.value=1)};S()}const C=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),z=()=>{var c;if(!v.value.src||r.value==="idle")return null;const h=o("img",{class:["v-img__img",C.value],src:v.value.src,srcset:v.value.srcset,alt:"",sizes:e.sizes,ref:s,onLoad:p,onError:y},null),S=(c=a.sources)==null?void 0:c.call(a);return o(W,{transition:e.transition,appear:!0},{default:()=>[Z(S?o("picture",{class:"v-img__picture"},[S,h]):h,[[De,r.value==="loaded"]])]})},B=()=>o(W,{transition:e.transition},{default:()=>[v.value.lazySrc&&r.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",C.value],src:v.value.lazySrc,alt:""},null)]}),L=()=>a.placeholder?o(W,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,M=()=>a.error?o(W,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,A=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=k(!1);{const c=D(m,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),c())})}return I(()=>Z(o(tt,{class:["v-img",{"v-img--booting":!O.value}],style:{width:f(e.width==="auto"?l.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>o(me,null,[o(z,null,null),o(B,null,null),o(A,null,null),o(L,null,null),o(M,null,null)]),default:a.default}),[[We("intersect"),{handler:g,options:e.options},null,{once:!0}]])),{currentSrc:i,image:s,state:r,naturalWidth:l,naturalHeight:u}}}),J=_({tag:{type:String,default:"div"}},"tag"),Vt=_({border:[Boolean,Number,String]},"border");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{borderClasses:d(()=>{const a=P(e)?e.value:e.border,i=[];if(a===!0||a==="")i.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))i.push(`border-${s}`);return i})}}const Ot=_({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ht(e){return{elevationClasses:d(()=>{const n=P(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const be=_({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{roundedClasses:d(()=>{const a=P(e)?e.value:e.rounded,i=[];if(a===!0||a==="")i.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))i.push(`rounded-${s}`);return i})}}function Q(e){return fe(()=>{const t=[],n={};return e.value.background&&(ee(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(ee(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Ce(e,t){const n=d(()=>({text:P(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=Q(n);return{textColorClasses:a,textColorStyles:i}}function re(e,t){const n=d(()=>({background:P(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=Q(n);return{backgroundColorClasses:a,backgroundColorStyles:i}}const lt=[null,"default","comfortable","compact"],ot=_({density:{type:String,default:"default",validator:e=>lt.includes(e)}},"density");function ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const ct=["elevated","flat","tonal","outlined","text","plain"];function dt(e,t){return o(me,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const vt=_({color:String,variant:{type:String,default:"elevated",validator:e=>ct.includes(e)}},"variant");function mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();const n=d(()=>{const{variant:s}=te(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:i}=Q(d(()=>{const{variant:s,color:r}=te(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:i,variantClasses:n}}const ft=["x-small","small","default","large","x-large"],$e=_({size:{type:[String,Number],default:"default"}},"size");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return fe(()=>{let n,a;return j(ft,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:f(e.size),height:f(e.size)}),{sizeClasses:n,sizeStyles:a}})}const gt=_({color:String,start:Boolean,end:Boolean,icon:ge,...$e(),...J({tag:"i"}),...U()},"v-icon"),ht=T({name:"VIcon",props:gt(),setup(e,t){let{attrs:n,slots:a}=t,i;a.default&&(i=d(()=>{var m,g;const p=(m=a.default)==null?void 0:m.call(a);if(!!p)return(g=p.filter(y=>y.type===Fe&&y.children&&typeof y.children=="string")[0])==null?void 0:g.children}));const{themeClasses:s}=G(e),{iconData:r}=je(i||e),{sizeClasses:l}=ke(e),{textColorClasses:u,textColorStyles:v}=Ce(he(e,"color"));return I(()=>{var m;return o(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,l.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[l.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},v.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[(m=a.default)==null?void 0:m.call(a)]})}),{}}});function pt(e){const t=k(),n=k(!1);if(K){const a=new IntersectionObserver(i=>{e==null||e(i,a),n.value=!!i.find(s=>s.isIntersecting)});Me(()=>{a.disconnect()}),D(t,(i,s)=>{s&&(a.unobserve(s),n.value=!1),i&&a.observe(i)},{flush:"post"})}return{intersectionRef:t,isIntersecting:n}}const q=Symbol("rippleStop"),_t=80;function ie(e,t){e.style.transform=t,e.style.webkitTransform=t}function Y(e){return e.constructor.name==="TouchEvent"}function we(e){return e.constructor.name==="KeyboardEvent"}const yt=function(e,t){var n;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,s=0;if(!we(e)){const p=t.getBoundingClientRect(),y=Y(e)?e.touches[e.touches.length-1]:e;i=y.clientX-p.left,s=y.clientY-p.top}let r=0,l=.3;(n=t._ripple)!=null&&n.circle?(l=.15,r=t.clientWidth/2,r=a.center?r:r+Math.sqrt((i-r)**2+(s-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-r*2)/2}px`,v=`${(t.clientHeight-r*2)/2}px`,m=a.center?u:`${i-r}px`,g=a.center?v:`${s-r}px`;return{radius:r,scale:l,x:m,y:g,centerX:u,centerY:v}},F={show(e,t){var n;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(n=t._ripple)!=null&&n.enabled))return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",a.class&&(i.className+=` ${a.class}`);const{radius:r,scale:l,x:u,y:v,centerX:m,centerY:g}=yt(e,t,a),p=`${r*2}px`;s.className="v-ripple__animation",s.style.width=p,s.style.height=p,t.appendChild(i);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ie(s,`translate(${u}, ${v}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ie(s,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const i=performance.now()-Number(a.dataset.activated),s=Math.max(250-i,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=a.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function xe(e){return typeof e>"u"||!!e}function R(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[q])){if(e[q]=!0,Y(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||we(e),n._ripple.class&&(t.class=n._ripple.class),Y(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{F.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;n!=null&&(a=n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},_t)}else F.show(e,n,t)}}function le(e){e[q]=!0}function b(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{b(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),F.hide(t)}}function Le(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let N=!1;function Ee(e){!N&&(e.keyCode===ne.enter||e.keyCode===ne.space)&&(N=!0,R(e))}function Te(e){N=!1,b(e)}function ze(e){N&&(N=!1,b(e))}function Be(e,t,n){var r;const{value:a,modifiers:i}=t,s=xe(a);if(s||F.hide(e),e._ripple=(r=e._ripple)!=null?r:{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,Xe(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(i.stop){e.addEventListener("touchstart",le,{passive:!0}),e.addEventListener("mousedown",le);return}e.addEventListener("touchstart",R,{passive:!0}),e.addEventListener("touchend",b,{passive:!0}),e.addEventListener("touchmove",Le,{passive:!0}),e.addEventListener("touchcancel",b),e.addEventListener("mousedown",R),e.addEventListener("mouseup",b),e.addEventListener("mouseleave",b),e.addEventListener("keydown",Ee),e.addEventListener("keyup",Te),e.addEventListener("blur",ze),e.addEventListener("dragstart",b,{passive:!0})}else!s&&n&&Re(e)}function Re(e){e.removeEventListener("mousedown",R),e.removeEventListener("touchstart",R),e.removeEventListener("touchend",b),e.removeEventListener("touchmove",Le),e.removeEventListener("touchcancel",b),e.removeEventListener("mouseup",b),e.removeEventListener("mouseleave",b),e.removeEventListener("keydown",Ee),e.removeEventListener("keyup",Te),e.removeEventListener("dragstart",b),e.removeEventListener("blur",ze)}function bt(e,t){Be(e,t,!1)}function St(e){delete e._ripple,Re(e)}function Ct(e,t){if(t.value===t.oldValue)return;const n=xe(t.oldValue);Be(e,t,n)}const Wt={mounted:bt,unmounted:St,updated:Ct};const oe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},$t=_({location:String},"location");function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=pe();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:r}=Je(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function l(v){return n?n(v):0}const u={};return s!=="center"&&(t?u[oe[s]]=`calc(100% - ${l(s)}px)`:u[s]=0),r!=="center"?t?u[oe[r]]=`calc(100% - ${l(r)}px)`:u[r]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const wt=T({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...$t({location:"top"}),...be(),...J(),...U()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=qe(e,"modelValue"),{isRtl:i}=pe(),{themeClasses:s}=G(e),{locationStyles:r}=kt(e),{textColorClasses:l,textColorStyles:u}=Ce(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:m}=re(d(()=>e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:p}=re(e,"color"),{roundedClasses:y}=Se(e),{intersectionRef:x,isIntersecting:V}=pt(),$=d(()=>parseInt(e.max,10)),C=d(()=>parseInt(e.height,10)),z=d(()=>parseFloat(e.bufferValue)/$.value*100),B=d(()=>parseFloat(a.value)/$.value*100),L=d(()=>i.value!==e.reverse),M=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function O(c){if(!x.value)return;const{left:h,right:S,width:E}=x.value.getBoundingClientRect(),H=L.value?E-c.clientX+(S-E):c.clientX-h;a.value=Math.round(H/E*$.value)}return I(()=>o(e.tag,{ref:x,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&V.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},y.value,s.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?f(C.value):0,"--v-progress-linear-height":f(C.value),...r.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&O},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...u.value,[L.value?"left":"right"]:f(-C.value),borderTop:`${f(C.value/2)} dotted`,opacity:A.value,top:`calc(50% - ${f(C.value/4)})`,width:f(100-z.value,"%"),"--v-progress-linear-stream-to":f(C.value*(L.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",v.value],style:[m.value,{opacity:A.value,width:f(e.stream?z.value:100,"%")}]},null),o(de,{name:M.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(c=>o("div",{key:c,class:["v-progress-linear__indeterminate",c,g.value],style:p.value},null))]):o("div",{class:["v-progress-linear__determinate",g.value],style:[p.value,{width:f(B.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:B.value,buffer:z.value})])]})),{}}}),Dt=_({loading:[Boolean,String]},"loader");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function Ft(e,t){var n;let{slots:a}=t;return o("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||o(wt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const xt=["static","relative","fixed","absolute","sticky"],Mt=_({position:{type:String,validator:e=>xt.includes(e)}},"position");function Xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function qt(){var e,t;return(e=ce("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function Yt(e,t){const n=Ye("RouterLink"),a=d(()=>!!(e.href||e.to)),i=d(()=>(a==null?void 0:a.value)||ae(t,"click")||ae(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:i,href:he(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:a,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var r,l;return e.exact?(r=s.isExactActive)==null?void 0:r.value:(l=s.isActive)==null?void 0:l.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Kt=_({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let X=!1;function Ut(e,t){let n=!1,a,i;Ke&&(ve(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((r,l,u)=>{X?n?t(u):u():setTimeout(()=>n?t(u):u()),X=!0}),i=e==null?void 0:e.afterEach(()=>{X=!1})}),Ue(()=>{var r,l;window.removeEventListener("popstate",s),(r=a)==null||r(),(l=i)==null||l()}));function s(r){var l;(l=r.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}const Lt=_({start:Boolean,end:Boolean,icon:ge,image:String,...ot(),...be(),...$e(),...J(),...U(),...vt({variant:"flat"})},"v-avatar"),Gt=T({name:"VAvatar",props:Lt(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=G(e),{colorClasses:i,colorStyles:s,variantClasses:r}=mt(e),{densityClasses:l}=ut(e),{roundedClasses:u}=Se(e),{sizeClasses:v,sizeStyles:m}=ke(e);return I(()=>{var g;return o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,i.value,l.value,u.value,v.value,r.value],style:[s.value,m.value]},{default:()=>[e.image?o(it,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(ht,{key:"icon",icon:e.icon},null):(g=n.default)==null?void 0:g.call(n),dt(!1,"v-avatar")]})}),{}}});export{ke as A,rt as B,pt as C,Dt as D,$t as E,Mt as F,jt as G,kt as H,Xt as I,st as J,Je as K,Ft as L,W as M,Tt as N,zt as O,Bt as P,Rt as Q,Wt as R,Ut as S,It as V,Pt as _,Vt as a,Ot as b,be as c,re as d,At as e,Ht as f,Se as g,it as h,Ce as i,Nt as j,ot as k,Qe as l,J as m,Kt as n,vt as o,Yt as p,mt as q,ut as r,Ze as s,dt as t,I as u,Gt as v,ht as w,qt as x,se as y,$e as z};