var m1=Object.defineProperty;var v1=(t,r,o)=>r in t?m1(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;var Q0=(t,r,o)=>(v1(t,typeof r!="symbol"?r+"":r,o),o);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const C of c.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&i(C)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();function E(){}function i1(t){return t()}function r1(){return Object.create(null)}function W0(t){t.forEach(i1)}function a1(t){return typeof t=="function"}function c1(t,r){return t!=t?r==r:t!==r||t&&typeof t=="object"||typeof t=="function"}function k1(t){return Object.keys(t).length===0}function s(t,r){t.appendChild(r)}function u1(t,r,o){t.insertBefore(r,o||null)}function s1(t){t.parentNode&&t.parentNode.removeChild(t)}function n0(t){return document.createElement(t)}function l(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w1(t){return document.createTextNode(t)}function F0(){return w1(" ")}function e(t,r,o){o==null?t.removeAttribute(r):t.getAttribute(r)!==o&&t.setAttribute(r,o)}function V(t,r,o){t.setAttributeNS("http://www.w3.org/1999/xlink",r,o)}function y1(t){return Array.from(t.childNodes)}let l1;function i0(t){l1=t}const G=[],o1=[];let W=[];const n1=[],b1=Promise.resolve();let e1=!1;function x1(){e1||(e1=!0,b1.then(f1))}function t1(t){W.push(t)}const X0=new Set;let F=0;function f1(){if(F!==0)return;const t=l1;do{try{for(;F<G.length;){const r=G[F];F++,i0(r),_1(r.$$)}}catch(r){throw G.length=0,F=0,r}for(i0(null),G.length=0,F=0;o1.length;)o1.pop()();for(let r=0;r<W.length;r+=1){const o=W[r];X0.has(o)||(X0.add(o),o())}W.length=0}while(G.length);for(;n1.length;)n1.pop()();e1=!1,X0.clear(),i0(t)}function _1(t){if(t.fragment!==null){t.update(),W0(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(t1)}}function j1(t){const r=[],o=[];W.forEach(i=>t.indexOf(i)===-1?r.push(i):o.push(i)),o.forEach(i=>i()),W=r}const G0=new Set;let $1;function d1(t,r){t&&t.i&&(G0.delete(t),t.i(r))}function M1(t,r,o,i){if(t&&t.o){if(G0.has(t))return;G0.add(t),$1.c.push(()=>{G0.delete(t),i&&(o&&t.d(1),i())}),t.o(r)}else i&&i()}function B1(t){t&&t.c()}function C1(t,r,o){const{fragment:i,after_update:n}=t.$$;i&&i.m(r,o),t1(()=>{const c=t.$$.on_mount.map(i1).filter(a1);t.$$.on_destroy?t.$$.on_destroy.push(...c):W0(c),t.$$.on_mount=[]}),n.forEach(t1)}function h1(t,r){const o=t.$$;o.fragment!==null&&(j1(o.after_update),W0(o.on_destroy),o.fragment&&o.fragment.d(r),o.on_destroy=o.fragment=null,o.ctx=[])}function Z1(t,r){t.$$.dirty[0]===-1&&(G.push(t),x1(),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function L1(t,r,o,i,n,c,C=null,p=[-1]){const L=l1;i0(t);const a=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:n,bound:r1(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(L?L.$$.context:[])),callbacks:r1(),dirty:p,skip_bound:!1,root:r.target||L.$$.root};C&&C(a.root);let h=!1;if(a.ctx=o?o(t,r.props||{},(d,f,...v)=>{const A=v.length?v[0]:f;return a.ctx&&n(a.ctx[d],a.ctx[d]=A)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](A),h&&Z1(t,d)),f}):[],a.update(),h=!0,W0(a.before_update),a.fragment=i?i(a.ctx):!1,r.target){if(r.hydrate){const d=y1(r.target);a.fragment&&a.fragment.l(d),d.forEach(s1)}else a.fragment&&a.fragment.c();r.intro&&d1(t.$$.fragment),C1(t,r.target,r.anchor),f1()}i0(L)}class p1{constructor(){Q0(this,"$$");Q0(this,"$$set")}$destroy(){h1(this,1),this.$destroy=E}$on(r,o){if(!a1(o))return E;const i=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(r){this.$$set&&!k1(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}const E1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(E1);function A1(t){let r,o,i,n,c,C,p,L,a,h,d,f,v,A,J0,w,K0,a0,y,J,K,b,c0,Y,u0,O,u,f0,d0,C0,h0,L0,p0,g0,m0,v0,k0,w0,y0,b0,x0,_0,j0,$0,M0,B0,x,Z0,N,S,_,j,q,E0,$,z,A0,Q,X,M,I,B,T,O0,Y0,g,N0,S0,q0,I0,m,U,k,T0,D,e0,U0,t0,D0,H,P,H0,s0,P0,l0,R0,r0,V0,o0,R,Z;return{c(){r=l("svg"),o=l("defs"),i=l("g"),n=l("path"),c=l("path"),C=l("path"),p=l("g"),L=l("path"),a=l("path"),h=l("path"),d=l("path"),f=l("symbol"),v=l("path"),A=l("path"),J0=l("path"),w=l("symbol"),K0=l("path"),a0=l("path"),y=l("symbol"),J=l("path"),K=l("path"),b=l("symbol"),c0=l("path"),Y=l("path"),u0=l("clipPath"),O=l("rect"),u=l("symbol"),f0=l("use"),d0=l("use"),C0=l("use"),h0=l("use"),L0=l("use"),p0=l("use"),g0=l("use"),m0=l("use"),v0=l("use"),k0=l("use"),w0=l("use"),y0=l("use"),b0=l("use"),x0=l("use"),_0=l("use"),j0=l("use"),$0=l("use"),M0=l("use"),B0=l("use"),x=l("symbol"),Z0=l("use"),N=l("use"),S=l("use"),_=l("symbol"),j=l("path"),q=l("symbol"),E0=l("path"),$=l("mask"),z=l("rect"),A0=l("path"),Q=l("symbol"),X=l("use"),M=l("symbol"),I=l("use"),B=l("use"),T=l("use"),O0=l("symbol"),Y0=l("path"),g=l("symbol"),N0=l("use"),S0=l("use"),q0=l("use"),I0=l("use"),m=l("symbol"),U=l("path"),k=l("circle"),T0=l("path"),D=l("mask"),e0=l("rect"),U0=l("use"),t0=l("mask"),D0=l("use"),H=l("mask"),P=l("use"),H0=l("use"),s0=l("mask"),P0=l("use"),l0=l("mask"),R0=l("use"),r0=l("mask"),V0=l("path"),o0=l("filter"),R=l("feTurbulence"),Z=l("feDisplacementMap"),e(n,"id","badge"),e(n,"d","M0.408755 0.050332C0.428681 0.0645116 0.456176 0.0608918 0.471753 0.0420382C0.486408 0.0243012 0.513592 0.0243012 0.528247 0.0420382C0.543824 0.0608918 0.571319 0.0645116 0.591245 0.050332C0.609991 0.0369923 0.636249 0.0440281 0.645814 0.0649537C0.65598 0.0871966 0.681601 0.0978091 0.704518 0.08927C0.726078 0.0812366 0.749621 0.0948288 0.753443 0.117517C0.757507 0.141633 0.779508 0.158515 0.803854 0.156199C0.826759 0.154019 0.845981 0.173241 0.843801 0.196146C0.841485 0.220492 0.858367 0.242493 0.882483 0.246557C0.905171 0.250379 0.918763 0.273922 0.91073 0.295482C0.902191 0.318399 0.912803 0.34402 0.935046 0.354186C0.955972 0.363751 0.963008 0.390009 0.949668 0.408755C0.935488 0.428681 0.939108 0.456176 0.957962 0.471753C0.975699 0.486408 0.975699 0.513592 0.957962 0.528247C0.939108 0.543824 0.935488 0.571319 0.949668 0.591245C0.963008 0.609991 0.955972 0.636249 0.935046 0.645814C0.912803 0.65598 0.902191 0.681601 0.91073 0.704518C0.918763 0.726078 0.905171 0.749621 0.882483 0.753443C0.858367 0.757507 0.841485 0.779508 0.843801 0.803854C0.845981 0.826759 0.826759 0.845981 0.803854 0.843801C0.779508 0.841485 0.757507 0.858367 0.753443 0.882483C0.749621 0.905171 0.726078 0.918763 0.704518 0.91073C0.681601 0.902191 0.65598 0.912803 0.645814 0.935046C0.636249 0.955972 0.609991 0.963008 0.591245 0.949668C0.571319 0.935488 0.543824 0.939108 0.528247 0.957962C0.513592 0.975699 0.486408 0.975699 0.471753 0.957962C0.456176 0.939108 0.428681 0.935488 0.408755 0.949668C0.390009 0.963008 0.363751 0.955972 0.354186 0.935046C0.34402 0.912803 0.318399 0.902191 0.295482 0.91073C0.273922 0.918763 0.250379 0.905171 0.246557 0.882483C0.242493 0.858367 0.220492 0.841485 0.196146 0.843801C0.173241 0.845981 0.154019 0.826759 0.156199 0.803854C0.158515 0.779508 0.141633 0.757507 0.117517 0.753443C0.0948288 0.749621 0.0812366 0.726078 0.08927 0.704518C0.0978091 0.681601 0.0871966 0.65598 0.0649537 0.645814C0.0440281 0.636249 0.0369923 0.609991 0.050332 0.591245C0.0645116 0.571319 0.0608918 0.543824 0.0420382 0.528247C0.0243012 0.513592 0.0243012 0.486408 0.0420382 0.471753C0.0608918 0.456176 0.0645116 0.428681 0.050332 0.408755C0.0369923 0.390009 0.0440281 0.363751 0.0649537 0.354186C0.0871966 0.34402 0.0978091 0.318399 0.08927 0.295482C0.0812366 0.273922 0.0948288 0.250379 0.117517 0.246557C0.141633 0.242493 0.158515 0.220492 0.156199 0.196146C0.154019 0.173241 0.173241 0.154019 0.196146 0.156199C0.220492 0.158515 0.242493 0.141633 0.246557 0.117517C0.250379 0.0948288 0.273922 0.0812366 0.295482 0.08927C0.318399 0.0978091 0.34402 0.0871966 0.354186 0.0649537C0.363751 0.0440281 0.390009 0.0369923 0.408755 0.050332Z"),e(c,"id","badge2"),e(c,"d","M0.0229217 0.546513C-0.00764056 0.523172 -0.00764056 0.476828 0.0229217 0.453487L0.0479025 0.434409L0.0292603 0.409001C0.00645281 0.377917 0.0193921 0.333451 0.0552332 0.319744L0.0845288 0.30854L0.0737354 0.278862C0.0605304 0.242553 0.0853608 0.203566 0.123577 0.200603L0.154814 0.198182L0.152744 0.166638C0.150211 0.128046 0.184921 0.0976969 0.222416 0.105719L0.253064 0.112276L0.259885 0.0814207C0.26823 0.043672 0.310007 0.0244199 0.343744 0.0427762L0.37132 0.0577802L0.386479 0.0301143C0.405025 -0.003733 0.450485 -0.0103284 0.477731 0.0168753L0.5 0.0391109L0.522269 0.0168753C0.549515 -0.0103284 0.594975 -0.00373299 0.613521 0.0301143L0.62868 0.0577802L0.656256 0.0427762C0.689993 0.0244199 0.73177 0.043672 0.740115 0.0814208L0.746936 0.112276L0.777584 0.105719C0.815079 0.0976969 0.849789 0.128046 0.847256 0.166638L0.845186 0.198182L0.876423 0.200603C0.914639 0.203566 0.93947 0.242553 0.926265 0.278862L0.915471 0.30854L0.944767 0.319744C0.980608 0.333451 0.993547 0.377917 0.97074 0.409001L0.952098 0.434409L0.977078 0.453487C1.00764 0.476828 1.00764 0.523172 0.977078 0.546513L0.952098 0.565591L0.97074 0.590999C0.993547 0.622083 0.980608 0.666549 0.944767 0.680256L0.915471 0.69146L0.926265 0.721138C0.93947 0.757447 0.914639 0.796434 0.876423 0.799397L0.845186 0.801818L0.847256 0.833362C0.849789 0.871954 0.815079 0.902303 0.777584 0.894281L0.746936 0.887724L0.740115 0.918579C0.73177 0.956328 0.689993 0.97558 0.656256 0.957224L0.62868 0.94222L0.613521 0.969886C0.594975 1.00373 0.549515 1.01033 0.522269 0.983125L0.5 0.960889L0.477731 0.983125C0.450485 1.01033 0.405025 1.00373 0.386479 0.969886L0.37132 0.94222L0.343744 0.957224C0.310007 0.97558 0.26823 0.956328 0.259885 0.918579L0.253064 0.887724L0.222416 0.894281C0.184921 0.902303 0.150211 0.871954 0.152744 0.833362L0.154814 0.801818L0.123577 0.799397C0.0853608 0.796434 0.0605304 0.757447 0.0737354 0.721138L0.0845288 0.69146L0.0552332 0.680256C0.0193921 0.666549 0.00645282 0.622082 0.0292603 0.590999L0.0479025 0.565591L0.0229217 0.546513Z"),e(C,"id","ellipses"),e(C,"d","M0.80021 0.513786C0.921535 0.461698 1 0.378819 1 0.285475C1 0.127812 0.776142 0 0.5 0C0.223858 0 0 0.127812 0 0.285475C0 0.378819 0.0784648 0.461698 0.19979 0.513786C0.0784648 0.546453 0 0.598429 0 0.656968C0 0.724873 0.105582 0.783948 0.261172 0.814294C0.105582 0.831048 0 0.863664 0 0.901155C0 0.955746 0.223858 1 0.5 1C0.776142 1 1 0.955746 1 0.901155C1 0.863664 0.894418 0.831048 0.738828 0.814294C0.894418 0.783948 1 0.724873 1 0.656968C1 0.598429 0.921535 0.546453 0.80021 0.513786Z"),e(L,"d","M0.529209 0.367426L0.5 0.253974L0.470791 0.367426L0.397963 0.275663L0.417424 0.391187L0.313569 0.336979L0.378336 0.434599L0.26141 0.42732L0.360284 0.490157L0.250506 0.531065L0.36639 0.548255L0.282742 0.630276L0.395599 0.598846L0.352544 0.707799L0.442859 0.633183L0.447842 0.750228L0.5 0.645328L0.552159 0.750228L0.557141 0.633183L0.647457 0.707799L0.604402 0.598846L0.717258 0.630276L0.63361 0.548255L0.749494 0.531065L0.639717 0.490157L0.73859 0.42732L0.621665 0.434599L0.686432 0.336979L0.582576 0.391187L0.602037 0.275663L0.529209 0.367426Z"),e(L,"fill","white"),e(a,"fill-rule","evenodd"),e(a,"clip-rule","evenodd"),e(a,"d","M0.815799 0.507794C0.815799 0.680574 0.675732 0.820641 0.502952 0.820641C0.330171 0.820641 0.190104 0.680574 0.190104 0.507794C0.190104 0.335013 0.330171 0.194946 0.502952 0.194946C0.675732 0.194946 0.815799 0.335013 0.815799 0.507794ZM0.809896 0.507794C0.809896 0.677314 0.672472 0.814738 0.502952 0.814738C0.333431 0.814738 0.196007 0.677314 0.196007 0.507794C0.196007 0.338273 0.333431 0.200849 0.502952 0.200849C0.672472 0.200849 0.809896 0.338273 0.809896 0.507794Z"),e(a,"fill","white"),e(h,"d","M0.142882 0.507794L0.101562 0.538465V0.477122L0.142882 0.507794Z"),e(h,"fill","white"),e(d,"d","M0.898437 0.477121L0.857118 0.507793L0.898437 0.538465V0.477121Z"),e(d,"fill","white"),e(p,"id","overlay"),e(v,"d","M25.3681 147.45C21.0327 147.953 16.9507 149.755 13.6581 152.62C9.91649 155.869 5.21285 157.801 0.268066 158.12C6.25327 158.529 12.1571 156.552 16.6881 152.62C19.9807 149.755 24.0627 147.953 28.398 147.45L27.1881 147.4C26.5981 147.44 25.9781 147.46 25.3681 147.45Z"),e(A,"d","M76.088 70.86C78.2252 65.8193 78.4703 60.1763 76.7781 54.9692C75.0859 49.7622 71.5703 45.3413 66.8781 42.52C64.3739 41.0235 62.1975 39.0371 60.4792 36.6796C58.7609 34.3221 57.5361 31.6421 56.8781 28.8C55.6573 23.5411 52.6038 18.8886 48.2646 15.6764C43.9255 12.4642 38.5842 10.9021 33.198 11.27C38.0659 11.5879 42.7022 13.4641 46.4211 16.6211C50.14 19.7782 52.744 24.0483 53.848 28.8C54.506 31.6421 55.7309 34.3221 57.4492 36.6796C59.1674 39.0371 61.3439 41.0235 63.848 42.52C68.5403 45.3413 72.0558 49.7622 73.748 54.9692C75.4402 60.1763 75.1952 65.8193 73.058 70.86C71.9196 73.5405 71.3329 76.4228 71.3329 79.335C71.3329 82.2472 71.9196 85.1295 73.058 87.81C75.198 92.8519 75.4445 98.4972 73.7522 103.707C72.0599 108.916 68.5426 113.338 63.848 116.16C61.3439 117.656 59.1674 119.643 57.4492 122C55.7309 124.358 54.506 127.038 53.848 129.88C52.744 134.632 50.14 138.902 46.4211 142.059C42.7022 145.216 38.0659 147.092 33.198 147.41C38.5842 147.778 43.9255 146.216 48.2646 143.004C52.6038 139.791 55.6573 135.139 56.8781 129.88C57.5361 127.038 58.7609 124.358 60.4792 122C62.1975 119.643 64.3739 117.656 66.8781 116.16C71.5703 113.339 75.0859 108.918 76.7781 103.711C78.4703 98.5037 78.2252 92.8608 76.088 87.82C74.9482 85.1382 74.3608 82.254 74.3608 79.34C74.3608 76.426 74.9482 73.5419 76.088 70.86Z"),e(J0,"d","M25.3681 11.22C25.9781 11.22 26.5881 11.22 27.1881 11.27C27.5881 11.27 27.998 11.27 28.398 11.22C24.0627 10.7169 19.9807 8.91473 16.6881 6.04997C12.1571 2.11801 6.25327 0.140499 0.268066 0.549966C5.21285 0.869295 9.91649 2.80134 13.6581 6.04997C16.9507 8.91473 21.0327 10.7169 25.3681 11.22Z"),e(f,"id","f-stroke-piece"),e(f,"viewBox","-28 0 79 159"),e(f,"stroke-width",".5"),e(K0,"d","M8.25541 8.25541L10.2969 7.5L8.25541 6.74459L7.5 4.70312L6.74459 6.74459L4.70312 7.5L6.74459 8.25541L7.5 10.2969L8.25541 8.25541Z"),e(a0,"fill-rule","evenodd"),e(a0,"d","M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM14.3 7.5C14.3 11.2555 11.2555 14.3 7.5 14.3C3.74446 14.3 0.7 11.2555 0.7 7.5C0.7 3.74446 3.74446 0.7 7.5 0.7C11.2555 0.7 14.3 3.74446 14.3 7.5Z"),e(w,"id","circle-star"),e(w,"viewBox","0 0 15 15"),e(w,"fill","currentColor"),e(J,"fill-rule","evenodd"),e(J,"clip-rule","evenodd"),e(J,"d","M22.6369 16.5132L21.0336 3L19.4302 16.5132L14.0301 14.0301L16.5131 19.4302L3 21.0336L16.5132 22.6369L14.0301 28.0372L19.4302 25.5541L21.0336 39.0672L22.6369 25.5541L28.0372 28.0372L25.554 22.6369L39.0672 21.0336L25.5541 19.4302L28.0372 14.0301L22.6369 16.5132ZM21.0335 15.1663L21.8911 18.963L25.1823 16.8847L23.104 20.1759L26.9008 21.0335L23.104 21.8911L25.1823 25.1823L21.8911 23.104L21.0335 26.9008L20.1759 23.104L16.8847 25.1823L18.963 21.8911L15.1663 21.0335L18.963 20.1759L16.8847 16.8847L20.1759 18.963L21.0335 15.1663Z"),e(K,"fill-rule","evenodd"),e(K,"clip-rule","evenodd"),e(K,"d","M43 21.5C43 33.3741 33.3741 43 21.5 43C9.62588 43 0 33.3741 0 21.5C0 9.62588 9.62588 0 21.5 0C33.3741 0 43 9.62588 43 21.5ZM42 21.5C42 32.8218 32.8218 42 21.5 42C10.1782 42 1 32.8218 1 21.5C1 10.1782 10.1782 1 21.5 1C32.8218 1 42 10.1782 42 21.5Z"),e(y,"id","circle-star2"),e(y,"viewBox","0 0 43 43"),e(y,"fill","currentColor"),e(c0,"d","M20.0614 4.27417L20.7902 18.2693L24.742 15.2117L21.6844 19.1634L35.6794 19.8922L21.6845 20.621L24.742 24.5726L20.7902 21.515L20.0614 35.5103L19.3326 21.5152L15.381 24.5726L18.4385 20.621L4.44336 19.8922L18.4386 19.1634L15.381 15.2117L19.3326 18.2691L20.0614 4.27417Z"),e(c0,"fill","#D9D9D9"),e(Y,"fill-rule","evenodd"),e(Y,"clip-rule","evenodd"),e(Y,"d","M38.6333 19.764C38.6333 30.2129 30.1628 38.6833 19.714 38.6833C9.26514 38.6833 0.794678 30.2129 0.794678 19.764C0.794678 9.31519 9.26514 0.844727 19.714 0.844727C30.1628 0.844727 38.6333 9.31519 38.6333 19.764ZM37.9333 19.764C37.9333 29.8263 29.7762 37.9833 19.714 37.9833C9.65174 37.9833 1.49468 29.8263 1.49468 19.764C1.49468 9.70179 9.65174 1.54473 19.714 1.54473C29.7762 1.54473 37.9333 9.70179 37.9333 19.764Z"),e(b,"id","circle-star3"),e(b,"viewBox","0 0 39 39"),e(b,"fill","currentColor"),e(O,"x","125"),e(O,"y","0"),e(O,"width","100%"),e(O,"height","159"),e(u0,"id","f-stroke-clip"),e(f0,"href","#f-stroke-piece"),e(f0,"x","0"),e(d0,"href","#f-stroke-piece"),e(d0,"x","3"),e(C0,"href","#f-stroke-piece"),e(C0,"x","6"),e(h0,"href","#f-stroke-piece"),e(h0,"x","9"),e(L0,"href","#f-stroke-piece"),e(L0,"x","12"),e(p0,"href","#f-stroke-piece"),e(p0,"x","15"),e(g0,"href","#f-stroke-piece"),e(g0,"x","18"),e(m0,"href","#f-stroke-piece"),e(m0,"x","21"),e(v0,"href","#f-stroke-piece"),e(v0,"x","24"),e(k0,"href","#f-stroke-piece"),e(k0,"x","27"),e(w0,"href","#f-stroke-piece"),e(w0,"x","30"),e(y0,"href","#f-stroke-piece"),e(y0,"x","33"),e(b0,"href","#f-stroke-piece"),e(b0,"x","36"),e(x0,"href","#f-stroke-piece"),e(x0,"x","39"),e(_0,"href","#f-stroke-piece"),e(_0,"x","42"),e(j0,"href","#f-stroke-piece"),e(j0,"x","45"),e($0,"href","#f-stroke-piece"),e($0,"x","48"),e(M0,"href","#f-stroke-piece"),e(M0,"x","51"),e(B0,"href","#f-stroke-piece"),e(B0,"x","54"),e(u,"id","f-stroke-part"),e(u,"fill","transparent"),e(u,"clip-path","url(#f-stroke-clip)"),e(Z0,"href","#f-stroke-part"),e(Z0,"stroke","currentColor"),e(N,"href","#f-stroke-part"),e(N,"stroke","currentColor"),e(N,"transform","scale(-1 1)"),e(N,"x","-250"),e(S,"href","src/assets/svg/fountain-emblem.svg#emblem"),e(S,"fill","currentColor"),e(S,"x","92.7"),e(S,"y","15"),e(x,"id","f-stroke-full"),e(x,"viewBox","0 0 250 159"),e(j,"d","M9.87369 0.813826C9.86683 0.680944 9.75708 0.576721 9.62402 0.576721C9.49096 0.576721 9.38122 0.680944 9.37436 0.813826L9.0168 7.73674L3.86874 3.09433C3.76992 3.00522 3.61862 3.00912 3.52454 3.10321C3.43045 3.1973 3.42654 3.3486 3.51565 3.44741L8.15806 8.59548L1.23515 8.95303C1.10227 8.95989 0.998047 9.06964 0.998047 9.2027C0.998047 9.33576 1.10227 9.4455 1.23515 9.45236L8.15806 9.80992L3.51565 14.958C3.42654 15.0568 3.43045 15.2081 3.52454 15.3022C3.61862 15.3963 3.76992 15.4002 3.86874 15.3111L9.0168 10.6687L9.37436 17.5916C9.38122 17.7245 9.49096 17.8287 9.62402 17.8287C9.75708 17.8287 9.86683 17.7245 9.87369 17.5916L10.2312 10.6687L15.3793 15.3111C15.4781 15.4002 15.6294 15.3963 15.7235 15.3022C15.8176 15.2081 15.8215 15.0568 15.7324 14.958L11.09 9.80992L18.0129 9.45236C18.1458 9.4455 18.25 9.33576 18.25 9.2027C18.25 9.06964 18.1458 8.95989 18.0129 8.95303L11.09 8.59548L15.7324 3.44741C15.8215 3.3486 15.8176 3.1973 15.7235 3.10321C15.6294 3.00912 15.4781 3.00522 15.3793 3.09433L10.2312 7.73674L9.87369 0.813826Z"),e(j,"fill","currentColor"),e(j,"stroke","currentColor"),e(j,"stroke-width","0.5"),e(j,"stroke-linejoin","round"),e(_,"id","star1"),e(_,"viewBox","0 0 19 19"),e(_,"fill","none"),e(_,"xmlns","http://www.w3.org/2000/svg"),e(E0,"fill","white"),e(E0,"d","M0.533812 0.404567L0.499946 0.119141L0.466085 0.40452L0.352109 0.352112L0.404516 0.466086L0.119141 0.499946L0.404565 0.533812L0.352109 0.647892L0.466098 0.595478L0.499946 0.880751L0.533799 0.595432L0.647889 0.647892L0.595427 0.5338L0.880751 0.499946L0.595476 0.466098L0.647889 0.352112L0.533812 0.404567Z"),e(q,"id","star2"),e(q,"viewBox","0 0 1 1"),e(q,"xmlns","http://www.w3.org/2000/svg"),e(z,"width","1"),e(z,"height","1"),e(z,"fill","white"),e(A0,"fill","black"),e(A0,"d","M0.533812 0.404567L0.499946 0.119141L0.466085 0.40452L0.352109 0.352112L0.404516 0.466086L0.119141 0.499946L0.404565 0.533812L0.352109 0.647892L0.466098 0.595478L0.499946 0.880751L0.533799 0.595432L0.647889 0.647892L0.595427 0.5338L0.880751 0.499946L0.595476 0.466098L0.647889 0.352112L0.533812 0.404567Z"),e($,"id","star2-mask-i"),e($,"viewBox","0 0 1 1"),e($,"xmlns","http://www.w3.org/2000/svg"),e(X,"href","#badge"),e(X,"fill","currentColor"),e(X,"mask","url(#star2-mask-i)"),e(Q,"id","star-badge"),e(Q,"viewBox","0 0 1 1"),e(I,"href","#deco-arrow1"),e(I,"x","100"),e(I,"y","17"),e(I,"height","16"),e(B,"href","#deco-arrow1"),e(B,"x","-40"),e(B,"y","17"),e(B,"height","16"),e(B,"transform","scale(-1, 1)"),e(T,"href","#star-badge"),e(T,"fill","currentColor"),e(T,"height","100%"),e(T,"width","100%"),e(M,"id","quote-graphics"),e(M,"viewBox","0 0 138 57"),e(Y0,"d","M1 3.0094L2.98721 1.70347C4.57688 0.658789 6.61925 0.597943 8.2683 1.54614L8.42635 1.63702C9.90157 2.48526 11.7188 2.47526 13.1846 1.61081L13.7752 1.26253C15.0702 0.498782 16.6984 0.593249 17.8964 1.50164V1.50164C19.0985 2.4131 20.7331 2.50486 22.0296 1.73365L22.5768 1.40821C24.0366 0.539845 25.8538 0.536427 27.3169 1.39929L30.0471 3.0094"),e(O0,"id","f-line-piece"),e(N0,"href","#f-line-piece"),e(N0,"y","0"),e(S0,"href","#f-line-piece"),e(S0,"y","3"),e(q0,"href","#f-line-piece"),e(q0,"y","6"),e(I0,"href","#f-line-piece"),e(I0,"y","9"),e(g,"id","fnt-line"),e(g,"viewBox","0 0 31 20"),e(g,"fill","none"),e(g,"stroke","currentColor"),e(g,"stroke-width",".5"),e(U,"d","M21.2831 0.599854V17.4861M36.2683 8.98698H1.04211M1.04211 8.98698L3.61414 6.63857M1.04211 8.98698L3.61414 11.3591"),e(U,"stroke","currentColor"),e(U,"stroke-width","0.5"),e(U,"stroke-linecap","round"),e(k,"cx","21.4278"),e(k,"cy","9.04291"),e(k,"r","3.94696"),e(k,"stroke","currentColor"),e(k,"stroke-width","0.5"),e(k,"stroke-linecap","round"),e(T0,"d","M3.40381 9.04298L6.25961 6.62274L6.25961 11.4632L3.40381 9.04298Z"),e(T0,"fill","currentColor"),e(m,"id","deco-arrow1"),e(m,"height","18"),e(m,"width","37"),e(m,"viewBox","0 0 37 18"),e(m,"fill","none"),e(e0,"width","1"),e(e0,"height","1"),e(e0,"fill","white"),V(U0,"xlink:href","#star2"),e(U0,"fill","black"),e(D,"id","star2-fill-invert"),e(D,"maskContentUnits","objectBoundingBox"),V(D0,"xlink:href","#badge"),e(D0,"fill","white"),e(t0,"id","b-fill"),e(t0,"maskContentUnits","objectBoundingBox"),V(P,"xlink:href","#badge"),e(P,"stroke","white"),e(P,"fill","none"),e(P,"stroke-width","0.01"),V(H0,"xlink:href","#overlay"),e(H0,"fill","white"),e(H,"id","b-strok"),e(H,"maskContentUnits","objectBoundingBox"),V(P0,"xlink:href","#badge2"),e(P0,"fill","white"),e(s0,"id","b2-fill"),e(s0,"maskContentUnits","objectBoundingBox"),V(R0,"xlink:href","#ellipses"),e(R0,"fill","white"),e(l0,"id","ellipses-fill"),e(l0,"maskContentUnits","objectBoundingBox"),e(V0,"d","M0 0.25C0 0.111929 0.0559644 0 0.125 0C0.194036 0 0.25 0.111929 0.25 0.25C0.25 0.111929 0.305964 0 0.375 0C0.444036 0 0.5 0.111929 0.5 0.25C0.5 0.111929 0.555964 0 0.625 0C0.694036 0 0.75 0.111929 0.75 0.25C0.75 0.111929 0.805964 0 0.875 0C0.944036 0 1 0.111929 1 0.25C1 0.388071 0.944036 0.5 0.875 0.5C0.944036 0.5 1 0.611929 1 0.75C1 0.888071 0.944036 1 0.875 1C0.805964 1 0.75 0.888071 0.75 0.75C0.75 0.888071 0.694036 1 0.625 1C0.555964 1 0.5 0.888071 0.5 0.75C0.5 0.888071 0.444036 1 0.375 1C0.305964 1 0.25 0.888071 0.25 0.75C0.25 0.888071 0.194036 1 0.125 1C0.0559644 1 0 0.888071 0 0.75C0 0.611929 0.0559644 0.5 0.125 0.5C0.0559644 0.5 0 0.388071 0 0.25Z"),e(V0,"fill","white"),e(r0,"id","butterfly-mask"),e(r0,"maskContentUnits","objectBoundingBox"),e(R,"type","fractalNoise"),e(R,"baseFrequency",".35"),e(R,"numOctaves","1"),e(R,"result","warp"),e(Z,"xChannelSelector","R"),e(Z,"yChannelSelector","G"),e(Z,"scale","30"),e(Z,"in","SourceGraphic"),e(Z,"in2","warp"),e(o0,"id","fractal-glass"),e(r,"class","svelte-1ig2bdm")},m(z0,g1){u1(z0,r,g1),s(r,o),s(o,i),s(i,n),s(i,c),s(i,C),s(o,p),s(p,L),s(p,a),s(p,h),s(p,d),s(o,f),s(f,v),s(f,A),s(f,J0),s(o,w),s(w,K0),s(w,a0),s(o,y),s(y,J),s(y,K),s(o,b),s(b,c0),s(b,Y),s(o,u0),s(u0,O),s(o,u),s(u,f0),s(u,d0),s(u,C0),s(u,h0),s(u,L0),s(u,p0),s(u,g0),s(u,m0),s(u,v0),s(u,k0),s(u,w0),s(u,y0),s(u,b0),s(u,x0),s(u,_0),s(u,j0),s(u,$0),s(u,M0),s(u,B0),s(o,x),s(x,Z0),s(x,N),s(x,S),s(o,_),s(_,j),s(o,q),s(q,E0),s(o,$),s($,z),s($,A0),s(o,Q),s(Q,X),s(o,M),s(M,I),s(M,B),s(M,T),s(o,O0),s(O0,Y0),s(o,g),s(g,N0),s(g,S0),s(g,q0),s(g,I0),s(o,m),s(m,U),s(m,k),s(m,T0),s(o,D),s(D,e0),s(D,U0),s(o,t0),s(t0,D0),s(o,H),s(H,P),s(H,H0),s(o,s0),s(s0,P0),s(o,l0),s(l0,R0),s(o,r0),s(r0,V0),s(o,o0),s(o0,R),s(o0,Z)},p:E,i:E,o:E,d(z0){z0&&s1(r)}}}class O1 extends p1{constructor(r){super(),L1(this,r,null,A1,c1,{})}}const N1="/angels/assets/woman-angel-flowers-DOjtJrd9.webp",S1="/angels/assets/2angels2-C0WmM68I.jpeg",q1="/angels/assets/2male-B4UBOd79.jpeg";function I1(t){let r,o,i,n,c,C,p,L,a,h,d;return h=new O1({}),{c(){r=n0("main"),o=n0("div"),o.innerHTML=`<section id="angels" class="i-corners i-c-bottom svelte-1gjdk5o"><span class="svelte-1gjdk5o">69</span> <img src="${q1}" alt="" class="svelte-1gjdk5o"/></section> <section id="title" class="svelte-1gjdk5o"><article class="svelte-1gjdk5o"><aside class="svelte-1gjdk5o"></aside> <svg class="svg-star svelte-1gjdk5o"><use href="#circle-star2"></use></svg> <h1 class="svelte-1gjdk5o">Angels</h1> <p class="svelte-1gjdk5o">Have no philosophy but love</p></article></section>`,i=F0(),n=n0("div"),n.innerHTML=`<section id="fountain" class="svelte-1gjdk5o"><svg class="svg-fountain svelte-1gjdk5o"><use href="#f-stroke-full"></use></svg> <svg class="svg-star svelte-1gjdk5o"><use href="#star1"></use></svg> <blockquote cite="https://cubiq.dev" class="svelte-1gjdk5o"><p>ANGELS ARE ALL AROUND US</p> <p>ALL THE TIME. IN THE VERY AIR WE BREATHE</p></blockquote> <svg class="svg-star svelte-1gjdk5o"><use href="#fnt-line"></use></svg></section> <section id="women" class="i-corners i-c-top svelte-1gjdk5o"><img src="${S1}" alt="" class="svelte-1gjdk5o"/></section>`,c=F0(),C=n0("div"),C.innerHTML=`<section id="saints" class="svelte-1gjdk5o"><figure class="svelte-1gjdk5o"><img src="${N1}" alt="" class="svelte-1gjdk5o"/> <figcaption class="svelte-1gjdk5o"><h2 class="svelte-1gjdk5o"><span class="svelte-1gjdk5o">portrait of</span> young woman</h2> <svg class="svg-star svelte-1gjdk5o"><use href="#circle-star3"></use></svg> <h2 class="svelte-1gjdk5o"><span class="svelte-1gjdk5o">clara</span> anguissola</h2></figcaption></figure></section> <section id="quote" class="svelte-1gjdk5o"><blockquote cite="https://cubiq.dev" class="svelte-1gjdk5o"><p>while I thought that I was learning how to live, I have been learning how to die.</p></blockquote> <svg class="svg-arrow svelte-1gjdk5o"><use href="#quote-graphics"></use></svg> <p class="svelte-1gjdk5o">Don&#39;t expect everything to go<br/>exactly as you planned.</p> <svg class="svg svelte-1gjdk5o"><use href="#circle-star"></use></svg></section>`,p=F0(),L=n0("aside"),a=F0(),B1(h.$$.fragment),e(o,"class","col svelte-1gjdk5o"),e(n,"class","col svelte-1gjdk5o"),e(C,"class","col svelte-1gjdk5o"),e(L,"class","badge svelte-1gjdk5o"),e(r,"class","svelte-1gjdk5o")},m(f,v){u1(f,r,v),s(r,o),s(r,i),s(r,n),s(r,c),s(r,C),s(r,p),s(r,L),s(r,a),C1(h,r,null),d=!0},p:E,i(f){d||(d1(h.$$.fragment,f),d=!0)},o(f){M1(h.$$.fragment,f),d=!1},d(f){f&&s1(r),h1(h)}}}class T1 extends p1{constructor(r){super(),L1(this,r,null,I1,c1,{})}}new T1({target:document.getElementById("app")});
