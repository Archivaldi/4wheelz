_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{SGa5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var a=n("q1tI"),o=n.n(a),r=n("L4PR"),i=n("30+C"),l=n("oa/T"),c=n("ofer"),s=n("r9w1"),u=n("wx14"),d=n("Ff2n"),p=(n("17x9"),n("iuhU")),g=n("H2TA"),f=a.forwardRef((function(e,t){var n=e.disableSpacing,o=void 0!==n&&n,r=e.classes,i=e.className,l=Object(d.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(u.a)({className:Object(p.a)(r.root,i,!o&&r.spacing),ref:t},l))})),h=Object(g.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(f),m=n("Z3vd"),y=n("o0o1"),b=n.n(y);function v(e,t,n,a,o,r,i){try{var l=e[r](i),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,o)}var w=n("KQm4"),j=n("kfFl"),N=n("yv+Y"),S=n("EQI2"),C=n("++HY"),O=n("+JwS"),T=["test1","test2","test3"],x={domain:"http//localhost:",port:"8080",path:"/check_pattern"},k=o.a.createElement;function E(e){var t=e.open,n=e.handleDialogClose,r=e.styles,i=Object(a.useState)(0),l=i[0],u=i[1],d=Object(a.useState)(!0),p=d[0],g=d[1],f=Object(a.useState)([]),h=f[0],y=f[1],E=Object(a.useState)(""),_=E[0],A=E[1],P=T,F=x,W=(F.domain,F.port,F.path,Object(a.useRef)()),H=function(){setTimeout((function(){n(),y(""),g(!0),u(0)}),200)},I=function(){var e,t=(e=b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json"),W.current.stop(),e.next=5,W.current.getTypingPattern({type:1,text:_.join("")});case 5:n=e.sent,console.log({typingPattern:n}),fetch("/sighup/typingdna",{method:"POST",headers:t,data:{typingPattern:n}}).then((function(e){console.log({res:e});var t=e.json();console.log({server:t})}));case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){v(r,a,o,i,l,"next",e)}function l(e){v(r,a,o,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){W.current||(W.current=new TypingDNA)}),[W]),k("div",null,k(j.a,{open:t,onClose:H,"aria-labelledby":"form-dialog-title"},k(N.a,{id:"form-dialog-title"},k("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/userAuthFE/client/src/images/ShoppedTypingDNA.png?raw=true"})),k(S.a,{className:r},k(C.a,null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"),k(c.a,{variant:"body1",component:"body1"},l<P.length?k(o.a.Fragment,null,k("span",null,"Please type: ",P[l]),k(s.a,{autoFocus:!0,autoComplete:"off",margin:"dense",id:"name",label:"Type Message Here",type:"email",color:"secondary",value:h,disabled:!p,onChange:function(e){return t=e.target.value,y(t),void(t===P[l]&&g(!1));var t},fullWidth:!0})):k("span",null,"Thank you for participating!"))),k(O.a,null,k(m.a,{onClick:H,color:"secondary"},"Go Back"),l<P.length?k(m.a,{onClick:function(){u(l+1),g(!0),A([].concat(Object(w.a)(_),Object(w.a)(h))),y("")},color:"secondary",disabled:p},"Next"):k(m.a,{onClick:I,color:"secondary"},"Submit"))))}var _=o.a.createElement;function A(e){var t=(0,e.useStyles)(),n=t.root,r=t.dialog,u=t.brand,d=t.auto,p=t.arbiTrader,g=t.buttons,f=t.logo,y=Object(a.useState)(null),b=y[0],v=y[1],w=Object(a.useState)(!1),j=w[0],N=w[1],S=function(e){v(e)};return Object(a.useEffect)((function(){"seller"===b&&N(!0)}),[b]),_(i.a,{className:n},_(E,{styles:r,open:j,handleDialogClose:function(){N(!1),v(null)}}),_(l.a,null,_("div",{className:u},_("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:f}),_(c.a,{variant:"h5",noWrap:!0},_("span",{className:d},"auto")," ",_("span",{className:p},"arbi-trader"))),"buyer"==b?_(s.a,{color:"secondary",id:"standard-required",label:"Transaction ID",required:!0}):_(c.a,{variant:"h6",color:"textSecondary"},"Welcome! What role will you be needing assistance in your transaction today?")),_(h,{className:g},"buyer"==b?_(o.a.Fragment,null,_(m.a,{size:"large",color:"secondary",onClick:function(){return S(null)}},"Go Back"),_(m.a,{size:"large",color:"secondary"},"Submit")):_(o.a.Fragment,null,_(m.a,{size:"large",color:"secondary",onClick:function(){return S("buyer")}},"Buying"),_(m.a,{size:"large",color:"secondary",onClick:function(){return S("seller")}},"Selling"))))}var P=n("R/WZ"),F=Object(P.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{minWidth:275,maxWidth:300,display:"flex",flexDirection:"column",alignItems:"center"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",margin:"6px"},dialog:{minHeight:160}}})),W=o.a.createElement;function H(){r.a.buyer,r.a.seller;var e=F().page;return W("div",{className:e},W(A,{useStyles:F}))}},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("SGa5")}])}},[["u6Hu",0,2,1,4,5,7]]]);