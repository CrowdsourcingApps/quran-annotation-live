import{x as I,s as G,m as n,I as m,n as N,q as O,c as S,y as z,B as J}from"./index.7fb740c4.js";import{u as V,j as C,k as P,V as y,v as _,R as K,a as M,l as Q,b as U,D as W,E as X,F as Y,c as Z,n as ee,m as ae,o as te,e as ne,q as le,r as se,s as de,f as ie,G as ce,H as oe,I as ue,g as re,p as ve,h as me,L as fe,t as ge}from"./VAvatar.38372d38.js";const ke=I({name:"VCardActions",setup(e,s){let{slots:t}=s;return G({VBtn:{variant:"text"}}),V(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=C("v-card-subtitle"),ye=C("v-card-title"),Ie=I({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...P()},setup(e,s){let{slots:t}=s;return V(()=>{var a,i,c,o,u;const f=!!(e.prependAvatar||e.prependIcon||t.prepend),g=!!(e.appendAvatar||e.appendIcon||t.append),k=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[f&&n(y,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[(l=(a=t.prepend)==null?void 0:a.call(t))!=null?l:n(_,null,null)])]}}),n("div",{class:"v-card-item__content"},[k&&n(ye,{key:"title"},{default:()=>{var l;return[(l=(i=t.title)==null?void 0:i.call(t))!=null?l:e.title]}}),b&&n(be,{key:"subtitle"},{default:()=>{var l;return[(l=(c=t.subtitle)==null?void 0:c.call(t))!=null?l:e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),g&&n(y,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[(l=(u=t.append)==null?void 0:u.call(t))!=null?l:n(_,null,null)])]}})])}),{}}}),Ve=C("v-card-text"),pe=I({name:"VCard",directives:{Ripple:K},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...N(),...M(),...P(),...Q(),...U(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...te({variant:"elevated"})},setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:i}=O(e),{borderClasses:c}=ne(e),{colorClasses:o,colorStyles:u,variantClasses:f}=le(e),{densityClasses:g}=se(e),{dimensionStyles:k}=de(e),{elevationClasses:b}=ie(e),{loaderClasses:l}=ce(e),{locationStyles:x}=oe(e),{positionClasses:$}=ue(e),{roundedClasses:B}=re(e),r=ve(e,t),D=S(()=>e.link!==!1&&r.isLink.value),v=S(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return V(()=>{var h,p,A;const L=D.value?"a":e.tag,T=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=T||R,q=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),j=E||F||q,w=!!(a.text||e.text);return z(n(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},i.value,c.value,o.value,g.value,b.value,l.value,$.value,B.value,f.value],style:[u.value,k.value,x.value],href:r.href.value,onClick:v.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[H&&n(y,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var d;return[n("div",{class:"v-card__image"},[(d=(h=a.image)==null?void 0:h.call(a))!=null?d:n(me,null,null)])]}}),n(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&n(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(Ve,{key:"text"},{default:()=>{var d;return[(d=(p=a.text)==null?void 0:p.call(a))!=null?d:e.text]}}),(A=a.default)==null?void 0:A.call(a),a.actions&&n(ke,null,{default:a.actions}),ge(v.value,"v-card")]}),[[J("ripple"),v.value&&e.ripple]])}),{}}});export{pe as V,Ie as a,ke as b,be as c,ye as d,Ve as e};
