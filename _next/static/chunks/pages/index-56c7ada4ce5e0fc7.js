(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6644)}])},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,a=n(1598).Z,o=n(7273).Z,s=a(n(7294)),l=i(n(2636)),c=n(7757),d=n(3735),u=n(3341);n(4210);var m=i(n(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/authentication-form/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,i,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let w=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:a,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:f,placeholder:h,loading:g,srcString:w,config:v,unoptimized:b,loader:_,onLoadRef:E,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:j,onLoad:k,onError:S}=e,N=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=m?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},N,{loading:g,width:a,height:i,decoding:"async","data-nimg":f?"fill":"1",className:c,style:r({},d,u)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,w,h,E,y,x,b))},[w,h,E,y,x,S,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,w,h,E,y,x,b)},onError:e=>{j(!0),"blur"===h&&x(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let n,i;var a,{src:p,sizes:v,unoptimized:b=!1,priority:_=!1,loading:E,className:y,quality:x,width:j,height:k,fill:S,style:N,onLoad:C,onLoadingComplete:z,placeholder:L="empty",blurDataURL:R,layout:P,objectFit:A,objectPosition:M,lazyBoundary:F,lazyRoot:O}=e,I=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=s.useContext(u.ImageConfigContext),W=s.useMemo(()=>{let e=f||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[D]),q=I,B=q.loader||m.default;delete q.loader;let T="__next_img_default"in B;if(T){if("custom"===W.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:n}=t,r=o(t,["config"]);return e(r)}}if(P){"fill"===P&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(N=r({},N,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!v&&(v=t)}let Y="",G=g(j),Z=g(k);if("object"==typeof(a=p)&&(h(a)||void 0!==a.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,R=R||e.blurDataURL,Y=e.src,!S){if(G||Z){if(G&&!Z){let t=G/e.width;Z=Math.round(e.height*t)}else if(!G&&Z){let t=Z/e.height;G=Math.round(e.width*t)}}else G=e.width,Z=e.height}}let U=!_&&("lazy"===E||void 0===E);((p="string"==typeof p?p:Y).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,U=!1),W.unoptimized&&(b=!0),T&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(b=!0);let[H,V]=s.useState(!1),[X,J]=s.useState(!1),Q=g(x),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:M}:{},X?{}:{color:"transparent"},N),K="blur"===L&&R&&!H?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:Z,blurWidth:n,blurHeight:i,blurDataURL:R,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,r)=>"".concat(s({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:s({config:t,src:n,quality:a,width:l[d]})}}({config:W,src:p,unoptimized:b,width:G,quality:Q,sizes:v,loader:B}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:q.crossOrigin},er=s.useRef(C);s.useEffect(()=>{er.current=C},[C]);let ei=s.useRef(z);s.useEffect(()=>{ei.current=z},[z]);let ea=r({isLazy:U,imgAttributes:ee,heightInt:Z,widthInt:G,qualityInt:Q,className:y,imgStyle:$,blurStyle:K,loading:E,config:W,fill:S,unoptimized:b,placeholder:L,loader:B,srcString:et,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:V,setShowAltText:J},q);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,Object.assign({},ea,{ref:t})),_?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}=e,s=r||t,l=i||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},6644:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(5893),i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r},a=n(5675),o=n.n(a),s=n(7294),l=function(e){(0,s.useEffect)(e,[])},c=function(e){var t=(0,s.useRef)(e);t.current=e,l(function(){return function(){return t.current()}})},d=function(e){var t=(0,s.useRef)(0),n=(0,s.useState)(e),r=n[0],i=n[1],a=(0,s.useCallback)(function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){i(e)})},[]);return c(function(){cancelAnimationFrame(t.current)}),[r,a]},u="undefined"!=typeof window,m=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=d({width:u?window.innerWidth:e,height:u?window.innerHeight:t}),r=n[0],i=n[1];return(0,s.useEffect)(function(){if(u){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}},[]),r};let f=()=>{let[e,t]=s.useState({x:0,y:0});return s.useEffect(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e},h="(prefers-reduced-motion: no-preference)",g=()=>!window.matchMedia(h).matches;var p=n(262),w=n.n(p);let v=[{src:"background/red-element.svg",width:668,height:622,className:w().redElement1},{src:"background/red-element.svg",width:668,height:622,className:w().redElement2},{src:"background/green-element.svg",width:155,height:84,className:w().greenElement1},{src:"background/green-element.svg",width:244,height:132,className:w().greenElement2},{src:"background/blue-element-1.svg",width:176,height:56,className:w().blueElement1},{src:"background/blue-element-1.svg",width:176,height:56,className:w().blueElement2},{src:"background/blue-element-1.svg",width:724,height:233,className:w().blueElement3},{src:"background/blue-element-2.svg",width:393,height:370,className:w().blueElement4},{src:"background/blue-element-3.svg",width:270,height:270,className:w().blueElement5}],b=()=>{let e=f();!function(){let[e,t]=s.useState(g);s.useEffect(()=>{let e=window.matchMedia(h),n=e=>{t(!e.matches)};return e.addEventListener?e.addEventListener("change",n):e.addListener(n),()=>{e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}},[])}();let{width:t,height:n}=m(),a=Math.ceil(e.x/t*30),l=Math.ceil(e.y/n*30);return(0,r.jsx)("div",{className:w().container,children:v.map((e,t)=>(0,r.jsx)("div",{className:i(w().element,e.className),style:{transform:"translate(".concat(a,"px, ").concat(l,"px)")},children:(0,r.jsx)(o(),{src:e.src,alt:"",width:e.width,height:e.height})},t))})};var _=n(7121),E=n.n(_);let y=()=>(0,r.jsx)("div",{className:E().container,children:(0,r.jsxs)("form",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{required:!0,type:"email",id:"email",name:"email",autoComplete:"email"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",children:"Password"}),(0,r.jsx)("input",{required:!0,minLength:8,type:"password",id:"password",className:"password-field",name:"password","aria-describedby":"password-minlength",autoComplete:"new-password"}),(0,r.jsx)("button",{type:"button",hidden:!0,"data-pressed":"false",className:"reveal-password","aria-controls":"password","data-text-show":"Show password","data-text-hide":"Hide password",children:"Show password"}),(0,r.jsx)("span",{"data-text-shown":"Your password is shown","data-text-hidden":"Your password is hidden",className:"visually-hidden password-announce","aria-live":"polite"}),(0,r.jsx)("div",{id:"password-minlength",children:"Eight or more characters"})]}),(0,r.jsx)("button",{className:"submit",children:"Sign up"})]})});var x=n(8969),j=n.n(x);let k=()=>(0,r.jsxs)("div",{className:j().container,children:[(0,r.jsx)(b,{className:j().background}),(0,r.jsx)(y,{})]});var S=n(9008),N=n.n(S);let C=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(N(),{children:[(0,r.jsx)("title",{children:"Authentication Form"}),(0,r.jsx)("meta",{name:"description",content:"Convenient and beautiful form of authentication via mail and password without ready-made component libraries."})]}),(0,r.jsx)(k,{})]});var z=C},262:function(e){e.exports={container:"background_container__wRtxN",element:"background_element__I__Pw",redElement1:"background_redElement1___84ZD",redElement2:"background_redElement2__jTxsB",greenElement1:"background_greenElement1__e6G2h",greenElement2:"background_greenElement2__wPIkb",blueElement1:"background_blueElement1__YJQU2",blueElement2:"background_blueElement2__QouFF",blueElement3:"background_blueElement3__cFn02",blueElement4:"background_blueElement4__wo8vP",blueElement5:"background_blueElement5__XqZ12"}},7121:function(e){e.exports={container:"form_container__d0YW5","visually-hidden":"form_visually-hidden__gwoMy",button:"form_button__uEdP0","reveal-password":"form_reveal-password__GRio_",submit:"form_submit__tlU_V",input:"form_input__shO5N",label:"form_label__Dg1m7"}},8969:function(e){e.exports={container:"home-page_container__7A8et",background:"home-page_background__jy_4v"}},5675:function(e,t,n){e.exports=n(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);