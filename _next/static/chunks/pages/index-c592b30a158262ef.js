(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1552)}])},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=n(1598).Z,i=n(7273).Z,s=a(n(7294)),l=o(n(2636)),c=n(7757),u=n(3735),d=n(3341);n(4210);var m=o(n(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/authentication-form/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,o,a,i,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:a,qualityInt:l,className:c,imgStyle:u,blurStyle:d,isLazy:m,fill:f,placeholder:p,loading:g,srcString:_,config:w,unoptimized:v,loader:b,onLoadRef:x,onLoadingCompleteRef:E,setBlurComplete:j,setShowAltText:y,onLoad:k,onError:S}=e,N=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=m?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},N,{loading:g,width:a,height:o,decoding:"async","data-nimg":f?"fill":"1",className:c,style:r({},u,d)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,_,p,x,E,j,v))},[_,p,x,E,j,S,v,t]),onLoad:e=>{let t=e.currentTarget;h(t,_,p,x,E,j,v)},onError:e=>{y(!0),"blur"===p&&j(!0),S&&S(e)}})))}),w=s.forwardRef((e,t)=>{let n,o;var a,{src:h,sizes:w,unoptimized:v=!1,priority:b=!1,loading:x,className:E,quality:j,width:y,height:k,fill:S,style:N,onLoad:C,onLoadingComplete:I,placeholder:P="empty",blurDataURL:L,layout:R,objectFit:z,objectPosition:O,lazyBoundary:B,lazyRoot:A}=e,M=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(d.ImageConfigContext),T=s.useMemo(()=>{let e=f||F||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[F]),W=M,D=W.loader||m.default;delete W.loader;let q="__next_img_default"in D;if(q){if("custom"===T.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:n}=t,r=i(t,["config"]);return e(r)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(N=r({},N,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!w&&(w=t)}let Y="",G=g(y),H=g(k);if("object"==typeof(a=h)&&(p(a)||void 0!==a.src)){let e=p(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,o=e.blurHeight,L=L||e.blurDataURL,Y=e.src,!S){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let J=!b&&("lazy"===x||void 0===x);((h="string"==typeof h?h:Y).startsWith("data:")||h.startsWith("blob:"))&&(v=!0,J=!1),T.unoptimized&&(v=!0),q&&h.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(v=!0);let[U,Z]=s.useState(!1),[X,K]=s.useState(!1),V=g(j),Q=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:O}:{},X?{}:{color:"transparent"},N),$="blur"===P&&L&&!U?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:H,blurWidth:n,blurHeight:o,blurDataURL:L,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:a,sizes:i,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:a,kind:"x"}}(t,o,i),u=l.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:l.map((e,r)=>"".concat(s({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:s({config:t,src:n,quality:a,width:l[u]})}}({config:T,src:h,unoptimized:v,width:G,quality:V,sizes:w,loader:D}),et=h,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},er=s.useRef(C);s.useEffect(()=>{er.current=C},[C]);let eo=s.useRef(I);s.useEffect(()=>{eo.current=I},[I]);let ea=r({isLazy:J,imgAttributes:ee,heightInt:H,widthInt:G,qualityInt:V,className:E,imgStyle:Q,blurStyle:$,loading:x,config:T,fill:S,unoptimized:v,placeholder:P,loader:D,srcString:et,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:Z,setShowAltText:K},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},ea,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:a,objectFit:i}=e,s=r||t,l=o||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},1552:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(5893),o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},a=n(5675),i=n.n(a),s=n(7294),l=function(e){(0,s.useEffect)(e,[])},c=function(e){var t=(0,s.useRef)(e);t.current=e,l(function(){return function(){return t.current()}})},u=function(e){var t=(0,s.useRef)(0),n=(0,s.useState)(e),r=n[0],o=n[1],a=(0,s.useCallback)(function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){o(e)})},[]);return c(function(){cancelAnimationFrame(t.current)}),[r,a]},d="undefined"!=typeof window,m=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=u({width:d?window.innerWidth:e,height:d?window.innerHeight:t}),r=n[0],o=n[1];return(0,s.useEffect)(function(){if(d){var e=function(){o({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}},[]),r},f=function(e,t){var n=(0,s.useState)(void 0!==t?t:!!d&&window.matchMedia(e).matches),r=n[0],o=n[1];return(0,s.useEffect)(function(){var t=!0,n=window.matchMedia(e),r=function(){t&&o(!!n.matches)};return n.addListener(r),o(n.matches),function(){t=!1,n.removeListener(r)}},[e]),r},p=n(3759),g=n(262),h=n.n(g);let _=[{src:"icons/background/red-element.svg",className:h().redElement1,motionSpeed:80},{src:"icons/background/red-element.svg",className:h().redElement2,motionSpeed:30},{src:"icons/background/green-element.svg",className:h().greenElement1,motionSpeed:100},{src:"icons/background/green-element.svg",className:h().greenElement2,motionSpeed:40},{src:"icons/background/blue-element-1.svg",className:h().blueElement1,motionSpeed:10},{src:"icons/background/blue-element-1.svg",className:h().blueElement2,motionSpeed:20},{src:"icons/background/blue-element-1.svg",className:h().blueElement3,motionSpeed:50},{src:"icons/background/blue-element-2.svg",className:h().blueElement4,motionSpeed:15},{src:"icons/background/blue-element-3.svg",className:h().blueElement5,motionSpeed:20}],w=()=>{let e=(0,p.kk)(),t=(0,p.Tb)(),n=m(),a=f("(hover: none)",!0),s=!t&&!a,l=e.x/n.width,c=e.y/n.height;return(0,r.jsx)("div",{className:h().container,children:_.map((e,t)=>(0,r.jsx)("div",{className:o(h().element,e.className),style:{transform:s?"translate(".concat(Math.ceil(l*e.motionSpeed),"px, ").concat(Math.ceil(c*e.motionSpeed),"px)"):void 0},children:(0,r.jsx)(i(),{src:e.src,alt:"",fill:!0})},t))})};var v=n(3323),b=n.n(v);let x=e=>{let{className:t,onChange:n}=e;return(0,r.jsxs)("div",{className:o(b().inputContainer,t),children:[(0,r.jsx)("label",{className:b().label,htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{className:b().input,required:!0,type:"email",id:"email",name:"email",autoComplete:"email",placeholder:"username@gmail.com",onChange:n})]})},E=e=>{let{className:t,onChange:n}=e,[a,l]=s.useState(!1);return(0,r.jsxs)("div",{className:o(b().inputContainer,t),children:[(0,r.jsx)("label",{className:b().label,htmlFor:"password",children:"Password"}),(0,r.jsxs)("div",{className:b().passwordInputWrapper,children:[(0,r.jsx)("input",{className:b().input,required:!0,minLength:8,type:a?"text":"password",id:"password",name:"password","aria-describedby":"password-minlength",autoComplete:"new-password",placeholder:"Password",onChange:n}),(0,r.jsx)("button",{className:b().showPasswordButton,onClick:()=>l(e=>!e),type:"button","aria-controls":"password","aria-label":a?"Show password as plain text. Warning: this will display your password on the screen.":"Hide password.",children:a?(0,r.jsx)(i(),{src:"icons/eye-off.svg",alt:"Hide password icon",width:16,height:16}):(0,r.jsx)(i(),{src:"icons/eye.svg",alt:"Show password icon",width:16,height:16})}),(0,r.jsx)("span",{className:"visually-hidden","aria-live":"polite",children:a?"Your password is shown":"Your password is hidden"})]})]})};var j=n(5757),y=n.n(j);let k=e=>{let{name:t,className:n}=e;return(0,r.jsx)("button",{className:o(n,y().button),type:"button",children:(0,r.jsx)(i(),{src:"icons/".concat(t,".svg"),alt:"".concat(t," icon"),width:24,height:24})})};var S=n(7289),N=n.n(S);let C=e=>{let{className:t,error:n}=e,[a,i]=s.useState(n),[l,c]=s.useState(null),u=s.useRef(null);return s.useEffect(()=>{u.current&&(u.current.addEventListener("animationend",()=>{c(null),n||i(null)},{once:!0}),c(n?"fadeIn":"fadeOut"),n&&i(n))},[n]),(0,r.jsx)("p",{ref:u,role:"alert",className:o(t,N().error,l&&N()[l]),children:a})};var I=n(963),P=n.n(I);let L=e=>{let{className:t,shakeClassName:n}=e,[a,i]=s.useState(!1),l=e=>{i(!0),e.currentTarget.addEventListener("animationend",()=>i(!1),{once:!0})};return(0,r.jsx)("button",{type:"submit",className:o(t,P().button,{[n]:a}),onClick:l,children:"Sign in"})};var R=n(7121),z=n.n(R),O=n(1163);let B=()=>{let{clearError:e,error:t,handleSubmit:n}=function(){let e=(0,O.useRouter)(),[t,n]=s.useState(null),r=()=>n(null),o=async t=>{t.preventDefault();let r={email:t.currentTarget.elements.email.value,password:t.currentTarget.elements.password.value};try{let t=await fetch("api/form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),o=await t.json();t.ok?e.push("/success"):n(o.error)}catch(e){n(e instanceof Error?e.message:"Unknown error")}};return{clearError:r,error:t,handleSubmit:o}}();return(0,r.jsx)("div",{className:z().container,children:(0,r.jsxs)("form",{className:z().form,onSubmit:n,children:[(0,r.jsx)("p",{className:z().logo,children:"Your logo"}),(0,r.jsx)("h1",{className:z().header,children:"Login"}),(0,r.jsx)(x,{className:z().emailInputContainer,onChange:e}),(0,r.jsx)(E,{className:z().passwordInputContainer,onChange:e}),(0,r.jsx)("a",{href:"#",className:z().forgotPasswordLink,children:"Forgot Password?"}),(0,r.jsx)(C,{className:o(z().text,z().error),error:t}),(0,r.jsx)(L,{className:z().signInButton,shakeClassName:z().signInButtonShake}),(0,r.jsx)("p",{className:o(z().text,z().continueWithText),children:"or continue with"}),(0,r.jsxs)("div",{className:z().providers,children:[(0,r.jsx)(k,{className:z().providerButton,name:"google"}),(0,r.jsx)(k,{className:z().providerButton,name:"github"}),(0,r.jsx)(k,{className:z().providerButton,name:"facebook"})]}),(0,r.jsxs)("p",{className:z().text,children:["Don’t have an account yet?"," ",(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("strong",{children:"Register for free"})})]})]})})},A=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsx)(B,{})]});var M=n(9008),F=n.n(M);let T=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(F(),{children:[(0,r.jsx)("title",{children:"Authentication Form"}),(0,r.jsx)("meta",{name:"description",content:"Convenient and beautiful form of authentication via mail and password without ready-made component libraries."})]}),(0,r.jsx)(A,{})]});var W=T},262:function(e){e.exports={container:"background_container__wRtxN",element:"background_element__I__Pw",redElement1:"background_redElement1___84ZD",redElement2:"background_redElement2__jTxsB",greenElement1:"background_greenElement1__e6G2h",greenElement2:"background_greenElement2__wPIkb",blueElement1:"background_blueElement1__YJQU2",blueElement2:"background_blueElement2__QouFF",blueElement3:"background_blueElement3__cFn02",blueElement4:"background_blueElement4__wo8vP",blueElement5:"background_blueElement5__XqZ12"}},3323:function(e){e.exports={inputContainer:"inputs_inputContainer__bSYHi",label:"inputs_label__kcAk3",input:"inputs_input__dKR_A",passwordInputWrapper:"inputs_passwordInputWrapper__aRYi5",showPasswordButton:"inputs_showPasswordButton__fGj7p"}},5757:function(e){e.exports={button:"provider-button_button__JlkeX"}},7289:function(e){e.exports={error:"server-error_error__iMmAW",fadeIn:"server-error_fadeIn__cfUCr","fade-in-down":"server-error_fade-in-down__PVCYL",fadeOut:"server-error_fadeOut__SPK1K","fade-out-down":"server-error_fade-out-down___HxG8"}},963:function(e){e.exports={button:"sign-in-button_button__2KpsU"}},7121:function(e){e.exports={container:"form_container__d0YW5",form:"form_form__e6qcl",logo:"form_logo__JGkLT",header:"form_header__r_PkJ",emailInputContainer:"form_emailInputContainer__1MauJ",passwordInputContainer:"form_passwordInputContainer__LdLkk",signInButtonShake:"form_signInButtonShake__1ebuA",shake:"form_shake__kclig",signInButton:"form_signInButton__DZDO5",providers:"form_providers__kyrex",providerButton:"form_providerButton__EGO19",forgotPasswordLink:"form_forgotPasswordLink__g_5Xv",text:"form_text__o2bwq",continueWithText:"form_continueWithText__fHMgb"}},5675:function(e,t,n){e.exports=n(3740)},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);