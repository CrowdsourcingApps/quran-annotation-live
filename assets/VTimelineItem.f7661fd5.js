import{k as z,m as D,r as $,u as v,c as k,z as T,b as I,A as B,d as S,g as P,f as R,w,l as N,s as j}from"./VAvatar.80b48472.js";import{x as m,n as q,q as x,s as V,t as s,c as _,m as t,b as c,I as b,r as h,A}from"./index.51f3b1f2.js";const U=m({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...z(),...D(),...q()},setup(e,d){let{slots:l}=d;const{themeClasses:r}=x(e),{densityClasses:o}=$(e);V({VTimelineDivider:{lineColor:s(e,"lineColor")},VTimelineItem:{density:s(e,"density"),lineInset:s(e,"lineInset")}});const a=_(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),n=_(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return v(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},r.value,o.value,a.value],style:{"--v-timeline-line-thickness":c(e.lineThickness)}},l)),{}}}),E=m({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:b,iconColor:String,lineColor:String,...k(),...T(),...I()},setup(e,d){let{slots:l}=d;const{sizeClasses:r,sizeStyles:o}=B(e,"v-timeline-divider__dot"),{backgroundColorStyles:a,backgroundColorClasses:n}=S(s(e,"dotColor")),{roundedClasses:i}=P(e,"v-timeline-divider__dot"),{elevationClasses:u}=R(e),{backgroundColorClasses:f,backgroundColorStyles:y}=S(s(e,"lineColor"));return V({VIcon:{color:s(e,"iconColor"),icon:s(e,"icon"),size:s(e,"size")}}),v(()=>{var g;var C;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",f.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",u.value,i.value,r.value],style:o.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,i.value],style:a.value},[(g=(C=l.default)==null?void 0:C.call(l))!=null?g:e.icon?t(w,null,null):void 0])]),t("div",{class:["v-timeline-divider__after",f.value],style:y.value},null)])}),{}}}),F=m({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:b,iconColor:String,lineInset:[Number,String],...k(),...I(),...T(),...D(),...N()},setup(e,d){let{slots:l}=d;const{dimensionStyles:r}=j(e),o=h(0),a=h();return A(a,n=>{var u;var i;!n||(o.value=(u=(i=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)!=null?u:0)},{flush:"post"}),v(()=>{var n,i;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":c(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${c(e.lineInset)})`:c(0)}},[t("div",{class:"v-timeline-item__body",style:r.value},[(n=l.default)==null?void 0:n.call(l)]),t(E,{ref:a,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=l.opposite)==null?void 0:i.call(l))])])}),{}}});export{U as V,F as a};
