(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6261)}])},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,i=n(1598).Z,a=n(7273).Z,s=i(n(7294)),l=o(n(2636)),c=n(7757),d=n(3735),u=n(3341);n(4210);var m=o(n(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/authentication-form/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,o,i,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:i,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:f,placeholder:g,loading:h,srcString:v,config:w,unoptimized:_,loader:b,onLoadRef:x,onLoadingCompleteRef:E,setBlurComplete:y,setShowAltText:j,onLoad:k,onError:N}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=m?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,{loading:h,width:i,height:o,decoding:"async","data-nimg":f?"fill":"1",className:c,style:r({},d,u)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&p(e,v,g,x,E,y,_))},[v,g,x,E,y,N,_,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,g,x,E,y,_)},onError:e=>{j(!0),"blur"===g&&y(!0),N&&N(e)}})))}),w=s.forwardRef((e,t)=>{let n,o;var i,{src:p,sizes:w,unoptimized:_=!1,priority:b=!1,loading:x,className:E,quality:y,width:j,height:k,fill:N,style:S,onLoad:C,onLoadingComplete:L,placeholder:I="empty",blurDataURL:P,layout:z,objectFit:M,objectPosition:R,lazyBoundary:A,lazyRoot:B}=e,F=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let O=s.useContext(u.ImageConfigContext),W=s.useMemo(()=>{let e=f||O||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[O]),D=F,T=D.loader||m.default;delete D.loader;let q="__next_img_default"in T;if(q){if("custom"===W.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=T;T=t=>{let{config:n}=t,r=a(t,["config"]);return e(r)}}if(z){"fill"===z&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(S=r({},S,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!w&&(w=t)}let G="",Z=h(j),J=h(k);if("object"==typeof(i=p)&&(g(i)||void 0!==i.src)){let e=g(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,o=e.blurHeight,P=P||e.blurDataURL,G=e.src,!N){if(Z||J){if(Z&&!J){let t=Z/e.width;J=Math.round(e.height*t)}else if(!Z&&J){let t=J/e.height;Z=Math.round(e.width*t)}}else Z=e.width,J=e.height}}let Y=!b&&("lazy"===x||void 0===x);((p="string"==typeof p?p:G).startsWith("data:")||p.startsWith("blob:"))&&(_=!0,Y=!1),W.unoptimized&&(_=!0),q&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(_=!0);let[H,X]=s.useState(!1),[U,V]=s.useState(!1),Q=h(y),$=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},U?{}:{color:"transparent"},S),K="blur"===I&&P&&!H?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:J,blurWidth:n,blurHeight:o,blurDataURL:P,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,r)=>"".concat(s({config:t,src:n,quality:i,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:s({config:t,src:n,quality:i,width:l[d]})}}({config:W,src:p,unoptimized:_,width:Z,quality:Q,sizes:w,loader:T}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},er=s.useRef(C);s.useEffect(()=>{er.current=C},[C]);let eo=s.useRef(L);s.useEffect(()=>{eo.current=L},[L]);let ei=r({isLazy:Y,imgAttributes:ee,heightInt:J,widthInt:Z,qualityInt:Q,className:E,imgStyle:$,blurStyle:K,loading:x,config:W,fill:N,unoptimized:_,placeholder:I,loader:T,srcString:et,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:X,setShowAltText:V},D);return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,Object.assign({},ei,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e,s=r||t,l=o||n,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},6261:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=n(5675),a=n.n(i),s=n(7294),l=function(e){(0,s.useEffect)(e,[])},c=function(e){var t=(0,s.useRef)(e);t.current=e,l(function(){return function(){return t.current()}})},d=function(e){var t=(0,s.useRef)(0),n=(0,s.useState)(e),r=n[0],o=n[1],i=(0,s.useCallback)(function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){o(e)})},[]);return c(function(){cancelAnimationFrame(t.current)}),[r,i]},u="undefined"!=typeof window,m=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=d({width:u?window.innerWidth:e,height:u?window.innerHeight:t}),r=n[0],o=n[1];return(0,s.useEffect)(function(){if(u){var e=function(){o({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}},[]),r},f=function(e,t){var n=(0,s.useState)(void 0!==t?t:!!u&&window.matchMedia(e).matches),r=n[0],o=n[1];return(0,s.useEffect)(function(){var t=!0,n=window.matchMedia(e),r=function(){t&&o(!!n.matches)};return n.addListener(r),o(n.matches),function(){t=!1,n.removeListener(r)}},[e]),r};let g=()=>{let[e,t]=s.useState({x:0,y:0});return s.useEffect(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e},h="(prefers-reduced-motion: no-preference)",p=()=>!window.matchMedia(h).matches;var v=n(262),w=n.n(v);let _=[{src:"background/red-element.svg",className:w().redElement1,motionSpeed:80},{src:"background/red-element.svg",className:w().redElement2,motionSpeed:30},{src:"background/green-element.svg",className:w().greenElement1,motionSpeed:100},{src:"background/green-element.svg",className:w().greenElement2,motionSpeed:40},{src:"background/blue-element-1.svg",className:w().blueElement1,motionSpeed:10},{src:"background/blue-element-1.svg",className:w().blueElement2,motionSpeed:20},{src:"background/blue-element-1.svg",className:w().blueElement3,motionSpeed:50},{src:"background/blue-element-2.svg",className:w().blueElement4,motionSpeed:15},{src:"background/blue-element-3.svg",className:w().blueElement5,motionSpeed:20}],b=()=>{let e=g(),t=function(){let[e,t]=s.useState(p);return s.useEffect(()=>{let e=window.matchMedia(h),n=e=>{t(!e.matches)};return e.addEventListener?e.addEventListener("change",n):e.addListener(n),()=>{e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}},[]),e}(),{width:n,height:i}=m(),l=f("(hover: none)",!0),c=e.x/n,d=e.y/i;return(0,r.jsx)("div",{className:w().container,children:_.map((e,n)=>(0,r.jsx)("div",{className:o(w().element,e.className),style:{transform:t||l?void 0:"translate(".concat(Math.ceil(c*e.motionSpeed),"px, ").concat(Math.ceil(d*e.motionSpeed),"px)")},children:(0,r.jsx)(a(),{src:e.src,alt:"",fill:!0})},n))})};var x=n(7121),E=n.n(x);let y=()=>{let[e,t]=s.useState(!1);return(0,r.jsx)("div",{className:E().container,children:(0,r.jsxs)("form",{className:E().form,children:[(0,r.jsx)("p",{className:E().logo,children:"Your logo"}),(0,r.jsx)("h1",{className:E().header,children:"Login"}),(0,r.jsxs)("div",{className:o(E().inputContainer,E().emailInputContainer),children:[(0,r.jsx)("label",{className:E().label,htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{className:E().input,required:!0,type:"email",id:"email",name:"email",autoComplete:"email",placeholder:"username@gmail.com"})]}),(0,r.jsxs)("div",{className:o(E().inputContainer,E().passwordInputContainer),children:[(0,r.jsx)("label",{className:E().label,htmlFor:"password",children:"Password"}),(0,r.jsxs)("div",{className:E().passwordInputWrapper,children:[(0,r.jsx)("input",{className:E().input,required:!0,minLength:8,type:e?"text":"password",id:"password",name:"password","aria-describedby":"password-minlength",autoComplete:"new-password",placeholder:"Password"}),(0,r.jsx)("button",{className:E().showPasswordButton,onClick:()=>t(e=>!e),type:"button","data-pressed":"false","aria-controls":"password","data-text-show":"Show password","data-text-hide":"Hide password",children:e?(0,r.jsx)(a(),{src:"eye-off.svg",alt:"eye off icon",width:16,height:16}):(0,r.jsx)(a(),{src:"eye.svg",alt:"eye icon",width:16,height:16})})]})]}),(0,r.jsx)("a",{href:"#",className:E().forgotPasswordLink,children:"Forgot Password?"}),(0,r.jsx)("button",{className:E().signInButton,children:"Sign in"}),(0,r.jsx)("p",{className:o(E().text,E().continueWithText),children:"or continue with"}),(0,r.jsxs)("div",{className:E().providers,children:[(0,r.jsx)("button",{className:E().providerButton,type:"button",children:(0,r.jsx)(a(),{src:"google.svg",alt:"google icon",width:24,height:24})}),(0,r.jsx)("button",{className:E().providerButton,type:"button",children:(0,r.jsx)(a(),{src:"github.svg",alt:"github icon",width:24,height:24})}),(0,r.jsx)("button",{className:E().providerButton,type:"button",children:(0,r.jsx)(a(),{src:"facebook.svg",alt:"facebook icon",width:24,height:24})})]}),(0,r.jsxs)("p",{className:E().text,children:["Don’t have an account yet?"," ",(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("strong",{children:"Register for free"})})]})]})})},j=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(y,{})]});var k=n(9008),N=n.n(k);let S=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(N(),{children:[(0,r.jsx)("title",{children:"Authentication Form"}),(0,r.jsx)("meta",{name:"description",content:"Convenient and beautiful form of authentication via mail and password without ready-made component libraries."})]}),(0,r.jsx)(j,{})]});var C=S},262:function(e){e.exports={container:"background_container__wRtxN",element:"background_element__I__Pw",redElement1:"background_redElement1___84ZD",redElement2:"background_redElement2__jTxsB",greenElement1:"background_greenElement1__e6G2h",greenElement2:"background_greenElement2__wPIkb",blueElement1:"background_blueElement1__YJQU2",blueElement2:"background_blueElement2__QouFF",blueElement3:"background_blueElement3__cFn02",blueElement4:"background_blueElement4__wo8vP",blueElement5:"background_blueElement5__XqZ12"}},7121:function(e){e.exports={container:"form_container__d0YW5",form:"form_form__e6qcl",logo:"form_logo__JGkLT",header:"form_header__r_PkJ",inputContainer:"form_inputContainer__l_A0G",emailInputContainer:"form_emailInputContainer__1MauJ",passwordInputContainer:"form_passwordInputContainer__LdLkk",label:"form_label__Dg1m7",input:"form_input__shO5N",signInButton:"form_signInButton__DZDO5",providers:"form_providers__kyrex",providerButton:"form_providerButton__EGO19",passwordInputWrapper:"form_passwordInputWrapper__y4LiA",showPasswordButton:"form_showPasswordButton__tI5Z3",forgotPasswordLink:"form_forgotPasswordLink__g_5Xv",text:"form_text__o2bwq",continueWithText:"form_continueWithText__fHMgb"}},5675:function(e,t,n){e.exports=n(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);