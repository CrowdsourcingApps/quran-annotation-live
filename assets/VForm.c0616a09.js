import{n as p,o as v}from"./VTextField.8a37611c.js";import{f as b}from"./forwardRefs.54bb1675.js";import{x as h,r as V,m as F}from"./index.2a2e2f5e.js";import{a as R}from"./VAvatar.77a54779.js";const S=h({name:"VForm",props:{...p()},emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,i){let{slots:s,emit:l}=i;const r=v(a),n=V();function f(t){t.preventDefault(),r.reset()}function u(t){const o=t,e=r.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),l("submit",o),o.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var m;(m=n.value)==null||m.submit()}}),o.preventDefault()}return R(()=>{var t;return F("form",{ref:n,class:"v-form",novalidate:!0,onReset:f,onSubmit:u},[(t=s.default)==null?void 0:t.call(s,r)])}),b(r,n)}});export{S as V};
