(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+rzG":function(e,t,n){"use strict";n.d(t,"a",(function(){return se}));var r=n("rePB"),a=n("q1tI"),o=n.n(a),i=n("iuhU"),c=n("YFqc"),s=n.n(c),l=n("5CWz"),u=n("wx14"),d=n("Ff2n"),p=(n("17x9"),n("H2TA")),f=n("NqtD"),m=n("kKAo"),b=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,c=void 0===o?"primary":o,s=e.position,l=void 0===s?"fixed":s,p=Object(d.a)(e,["classes","className","color","position"]);return a.createElement(m.a,Object(u.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(n.root,n["position".concat(Object(f.a)(l))],n["color".concat(Object(f.a)(c))],r,"fixed"===l&&"mui-fixed"),ref:t},p))})),h=Object(p.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(b),v=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.component,c=void 0===o?"div":o,s=e.disableGutters,l=void 0!==s&&s,p=e.variant,f=void 0===p?"regular":p,m=Object(d.a)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(c,Object(u.a)({className:Object(i.a)(n.root,n[f],r,!l&&n.gutters),ref:t},m))})),g=Object(p.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(v),y=n("PsDL"),O=n("ofer"),j=n("Xt1q"),w=n("+Isj"),x=n("i8i4"),E=n("l3Wi"),k=n("dRu9"),T=n("bfFb"),C=n("tr08"),S=n("wpWl"),P=n("4Hym");function I(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var o=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-r.top,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var N={enter:S.b.enteringScreen,exit:S.b.leavingScreen},M=a.forwardRef((function(e,t){var n=e.children,r=e.direction,o=void 0===r?"down":r,i=e.in,c=e.onEnter,s=e.onEntered,l=e.onEntering,p=e.onExit,f=e.onExited,m=e.onExiting,b=e.style,h=e.timeout,v=void 0===h?N:h,g=e.TransitionComponent,y=void 0===g?k.a:g,O=Object(d.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Object(C.a)(),w=a.useRef(null),S=a.useCallback((function(e){w.current=x.findDOMNode(e)}),[]),M=Object(T.a)(n.ref,S),R=Object(T.a)(M,t),L=function(e){return function(t){e&&(void 0===t?e(w.current):e(w.current,t))}},z=L((function(e,t){I(o,e),Object(P.b)(e),c&&c(e,t)})),q=L((function(e,t){var n=Object(P.a)({timeout:v,style:b},{mode:"enter"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(u.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.transition=j.transitions.create("transform",Object(u.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",l&&l(e,t)})),B=L(s),_=L(m),D=L((function(e){var t=Object(P.a)({timeout:v,style:b},{mode:"exit"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(u.a)({},t,{easing:j.transitions.easing.sharp})),e.style.transition=j.transitions.create("transform",Object(u.a)({},t,{easing:j.transitions.easing.sharp})),I(o,e),p&&p(e)})),A=L((function(e){e.style.webkitTransition="",e.style.transition="",f&&f(e)})),H=a.useCallback((function(){w.current&&I(o,w.current)}),[o]);return a.useEffect((function(){if(!i&&"down"!==o&&"right"!==o){var e=Object(E.a)((function(){w.current&&I(o,w.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[o,i]),a.useEffect((function(){i||H()}),[i,H]),a.createElement(y,Object(u.a)({nodeRef:w,onEnter:z,onEntered:B,onEntering:q,onExit:D,onExited:A,onExiting:_,appear:!0,in:i,timeout:v},O),(function(e,t){return a.cloneElement(n,Object(u.a)({ref:R,style:Object(u.a)({visibility:"exited"!==e||i?void 0:"hidden"},b,n.props.style)},t))}))})),R={left:"right",right:"left",top:"down",bottom:"up"};var L={enter:S.b.enteringScreen,exit:S.b.leavingScreen},z=a.forwardRef((function(e,t){var n=e.anchor,r=void 0===n?"left":n,o=e.BackdropProps,c=e.children,s=e.classes,l=e.className,p=e.elevation,b=void 0===p?16:p,h=e.ModalProps,v=(h=void 0===h?{}:h).BackdropProps,g=Object(d.a)(h,["BackdropProps"]),y=e.onClose,O=e.open,x=void 0!==O&&O,E=e.PaperProps,k=void 0===E?{}:E,T=e.SlideProps,S=e.TransitionComponent,P=void 0===S?M:S,I=e.transitionDuration,N=void 0===I?L:I,z=e.variant,q=void 0===z?"temporary":z,B=Object(d.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),_=Object(C.a)(),D=a.useRef(!1);a.useEffect((function(){D.current=!0}),[]);var A=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?R[t]:t}(_,r),H=a.createElement(m.a,Object(u.a)({elevation:"temporary"===q?b:0,square:!0},k,{className:Object(i.a)(s.paper,s["paperAnchor".concat(Object(f.a)(A))],k.className,"temporary"!==q&&s["paperAnchorDocked".concat(Object(f.a)(A))])}),c);if("permanent"===q)return a.createElement("div",Object(u.a)({className:Object(i.a)(s.root,s.docked,l),ref:t},B),H);var F=a.createElement(P,Object(u.a)({in:x,direction:R[A],timeout:N,appear:D.current},T),H);return"persistent"===q?a.createElement("div",Object(u.a)({className:Object(i.a)(s.root,s.docked,l),ref:t},B),F):a.createElement(j.a,Object(u.a)({BackdropProps:Object(u.a)({},o,v,{transitionDuration:N}),BackdropComponent:w.a,className:Object(i.a)(s.root,s.modal,l),open:x,onClose:y,ref:t},B,g),F)})),q=Object(p.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(z),B=n("ye/S"),_=a.forwardRef((function(e,t){var n=e.absolute,r=void 0!==n&&n,o=e.classes,c=e.className,s=e.component,l=void 0===s?"hr":s,p=e.flexItem,f=void 0!==p&&p,m=e.light,b=void 0!==m&&m,h=e.orientation,v=void 0===h?"horizontal":h,g=e.role,y=void 0===g?"hr"!==l?"separator":void 0:g,O=e.variant,j=void 0===O?"fullWidth":O,w=Object(d.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(l,Object(u.a)({className:Object(i.a)(o.root,c,"fullWidth"!==j&&o[j],r&&o.absolute,f&&o.flexItem,b&&o.light,"vertical"===v&&o.vertical),role:y,ref:t},w))})),D=Object(p.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(B.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(_),A=n("eD//"),H=n("tVbE"),F=n("MquD"),W=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=Object(d.a)(e,["classes","className"]),c=a.useContext(F.a);return a.createElement("div",Object(u.a)({className:Object(i.a)(n.root,r,"flex-start"===c.alignItems&&n.alignItemsFlexStart),ref:t},o))})),V=Object(p.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(W),G=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,c=e.disableTypography,s=void 0!==c&&c,l=e.inset,p=void 0!==l&&l,f=e.primary,m=e.primaryTypographyProps,b=e.secondary,h=e.secondaryTypographyProps,v=Object(d.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=a.useContext(F.a).dense,y=null!=f?f:n;null==y||y.type===O.a||s||(y=a.createElement(O.a,Object(u.a)({variant:g?"body2":"body1",className:r.primary,component:"span",display:"block"},m),y));var j=b;return null==j||j.type===O.a||s||(j=a.createElement(O.a,Object(u.a)({variant:"body2",className:r.secondary,color:"textSecondary",display:"block"},h),j)),a.createElement("div",Object(u.a)({className:Object(i.a)(r.root,o,g&&r.dense,p&&r.inset,y&&j&&r.multiline),ref:t},v),y,j)})),K=Object(p.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(G),U=n("L+uM"),J=n.n(U),Y=n("uniG"),X=n.n(Y),Z=n("76vg"),Q=n.n(Z),$=n("E2gh"),ee=n.n($),te=n("Kmmp"),ne=n.n(te),re=n("wG+f"),ae=n.n(re),oe=n("tB9+"),ie=n.n(oe),ce=o.a.createElement;function se(e){var t,n,o=e.children,c=e.classes,u=e.allDocsComplete,d=Object(C.a)(),p=Object(a.useState)(!1),f=p[0],m=p[1],b=c.root,v=c.appBar,j=c.appBarShift,w=c.menuButton,x=c.hide,E=c.logo,k=c.auto,T=c.arbiTrader,S=c.drawer,P=c.drawerOpen,I=c.drawerClose,N=c.content,M=c.toolbar,R=c.exitIcon;return ce("div",{className:b},ce(l.a,null),ce(h,{position:"fixed",className:Object(i.a)(v,Object(r.a)({},j,f))},ce(g,null,ce(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},edge:"start",className:Object(i.a)(w,Object(r.a)({},x,f))},ce(X.a,null)),ce("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:E}),ce(O.a,{variant:"h6",noWrap:!0},ce("span",{className:k},"auto")," ",ce("span",{className:T},"arbi-trader")))),ce(q,{variant:"permanent",className:Object(i.a)(S,(t={},Object(r.a)(t,P,f),Object(r.a)(t,I,!f),t)),classes:{paper:Object(i.a)((n={},Object(r.a)(n,P,f),Object(r.a)(n,I,!f),n))}},ce("div",{className:M},ce(y.a,{onClick:function(){m(!1)}},"rtl"===d.direction?ce(ee.a,null):ce(Q.a,null))),ce(D,null),ce(A.a,null,ce(s.a,{href:"/dashboard"},ce(H.a,{button:!0},ce(V,null,ce(ae.a,null)),ce(K,null,"View Progress"))),ce(s.a,{href:"/upload"},ce(H.a,{button:!0},ce(V,null,ce(ie.a,null)),ce(K,null,"Upload Documents"))),ce(H.a,{button:!0,disabled:!u},ce(V,null,ce(ne.a,{color:u?"secondary":"primary"})),ce(K,null,"Send In Forms")),ce(D,null),ce(H.a,{button:!0},ce(V,null,ce(J.a,{className:R})),ce(K,null,"Sign Out")))),ce("main",{className:N},ce("div",{className:M}),o))}},"49Ka":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KQm4"),a=function(e,t){var n=[].concat(Object(r.a)(e.docs),Object(r.a)(t.docs));return n.filter((function(e){return!0===e.completed})).length===n.length}},"5CWz":function(e,t,n){"use strict";var r=n("wx14"),a=n("q1tI"),o=(n("17x9"),n("H2TA")),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,a.createElement(a.Fragment,null,n)}))},"76vg":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=i},"8/g6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n("kNCj")},E2gh:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=i},Kmmp:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.default=i},"L+uM":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");t.default=i},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var p=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function f(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],m=(0,s.useRouter)(),b=m&&m.pathname||"/",h=i.default.useMemo((function(){var t=(0,c.resolveHref)(b,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(b,e.as):o||a}}),[b,e.href,e.as]),v=h.href,g=h.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(v)&&!d[v+"%"+g])return p(o,(function(){f(m,v,g)}))}),[t,o,v,g,m]);var y=e.children,O=e.replace,j=e.shallow,w=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var x=i.Children.only(y),E={ref:function(e){e&&l(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,v,g,O,j,w)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(v)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),f(m,v,g,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(g,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(x,E)};t.default=m},"fE/f":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("q1tI"),c=n.n(i),s=n("iae6"),l=n("ULge"),u=n("R/WZ"),d=Object(u.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}})),p=c.a.createElement;function f(e){var t=e.children,n=l.a.route.session,r=d().page,u=Object(i.useState)(null),f=u[0],m=u[1],b=Object(i.useState)(null),h=b[0],v=b[1];return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,console.log(r),r.user_id&&r.role?(v(r.role),m(r.user_id)):window.location.href("/");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),p(c.a.Fragment,null,f&&h?p(c.a.Fragment,null,t):p("div",{className:r},p(s.a,{color:"secondary"})))}},"fx/U":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n("rePB"),a=n("R/WZ");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t){var n={root:{display:"flex"},appBar:{backgroundColor:"primary",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(r.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:i({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),display:"grid",gap:"1.5rem"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},exitIcon:{color:"#ffcccb"}};switch(t){case"uploadStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 17.5vh 17.5vh 17.5vh 17.5vh"})});case"dashboardStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 38vh 38vh"})})}},s=Object(a.a)((function(e){return c(e,"uploadStyles")})),l=Object(a.a)((function(e){return c(e,"dashboardStyles")}))},kNCj:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return a.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return u.a})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return p.a})),n.d(t,"unsupportedProp",(function(){return f})),n.d(t,"useControlled",(function(){return m.a})),n.d(t,"useEventCallback",(function(){return b.a})),n.d(t,"useForkRef",(function(){return h.a})),n.d(t,"unstable_useId",(function(){return g})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var r=n("NqtD"),a=n("x6Ns"),o=n("5AJ6"),i=n("l3Wi");function c(e,t){return function(){return null}}var s=n("ucBr"),l=n("gk1O"),u=n("g+pH");function d(e){return function(){return null}}var p=n("GIek");function f(e,t,n,r,a){return null}var m=n("yCxk"),b=n("Ovef"),h=n("bfFb"),v=n("q1tI");function g(e){var t=v.useState(e),n=t[0],r=t[1],a=e||n;return v.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}var y=n("G7As")},"tB9+":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=i},uniG:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},vrJG:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");t.default=i},"wG+f":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),"Autorenew");t.default=i}}]);