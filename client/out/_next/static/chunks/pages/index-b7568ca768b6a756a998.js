_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"++HY":function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),o=(n("17x9"),n("H2TA")),s=n("ofer"),i=r.forwardRef((function(e,t){return r.createElement(s.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(i)},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var a=n("q1tI"),r=n.n(a),o=(n("L4PR"),n("o0o1")),s=n.n(o),i=n("HaE+"),c=n("30+C"),l=n("ofer"),u=n("oa/T"),p=n("79Xs"),d=n("r9w1"),g=n("ADg1"),m=n("cVXz"),f=n("Ff2n"),b=n("rePB"),y=n("wx14"),h=(n("17x9"),n("iuhU")),w=n("H2TA"),v=n("tVbE"),j=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,s=e.component,i=void 0===s?"li":s,c=e.disableGutters,l=void 0!==c&&c,u=e.ListItemClasses,p=e.role,d=void 0===p?"menuitem":p,g=e.selected,m=e.tabIndex,b=Object(f.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==m?m:-1),a.createElement(v.a,Object(y.a)({button:!0,role:d,tabIndex:n,component:i,selected:g,disableGutters:l,classes:Object(y.a)({dense:r.dense},u),className:Object(h.a)(r.root,o,g&&r.selected,!l&&r.gutters),ref:t},b))})),x=Object(w.a)((function(e){return{root:Object(y.a)({},e.typography.body1,Object(b.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(y.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(j),O=n("Spdj"),T=n("iae6"),S=a.forwardRef((function(e,t){var n=e.disableSpacing,r=void 0!==n&&n,o=e.classes,s=e.className,i=Object(f.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(y.a)({className:Object(h.a)(o.root,s,!r&&o.spacing),ref:t},i))})),E=Object(w.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(S),N=n("Z3vd"),C=n("ZiQX"),I=n("nOHt"),R=n("kfFl"),k=n("yv+Y"),A=n("EQI2"),P=n("++HY"),_=n("+JwS"),B=n("R/WZ"),L=Object(B.a)((function(e){return{typos:{color:"rgba(255, 255, 255, 0.7)"},currentChar:{borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px",background:"#62bdf9",color:"#212121"},charsToBeTyped:{background:"#0081cb",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},welcome:{textAlign:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"space-around"}}})),F=n("ULge"),D=r.a.createElement;function z(e){var t=e.user_id,n=e.open,o=e.setAuthDialogOpen,c=e.handleGoBackReset,u=L(),p=u.content,g=u.typos,m=u.currentChar,f=u.charsToBeTyped,b=u.welcome,y=Object(a.useState)(!1),h=y[0],w=y[1],v=Object(a.useState)(!1),j=v[0],x=v[1],O=Object(a.useState)(0),T=O[0],S=O[1],E=Object(a.useState)(0),C=E[0],B=E[1],z=Object(a.useState)(""),H=z[0],U=z[1],q=Object(a.useRef)(),G=Object(I.useRouter)(),V=F.a.message,X=F.a.route,W=function(){q.current.start(),w(!1),U(""),S(T+1),C===V.length-1?B(0):B(C+1),document.querySelector("#input").focus()},J=function(){var e=Object(i.a)(s.a.mark((function e(){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.current.stop(),w(!0),e.next=4,q.current.getTypingPattern({type:0,text:H});case 4:if(n=e.sent,!(q.current.getQuality(n)>.3)){e.next=17;break}return e.next=9,fetch(X.verify,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:n,user_id:t})});case 9:return a=e.sent,e.next=12,a.json();case 12:r=e.sent,"not verified"===r.message?W():(x(!0),setTimeout((function(){G.push("/dashboard")}),1e3)),e.next=18;break;case 17:W();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){q.current||(q.current=new TypingDNA)}),[q]),Object(a.useEffect)((function(){H.length===V[C].length&&J()}),[H]),D("div",null,D(R.a,{open:n,"aria-labelledby":"form-dialog-title"},D(k.a,{id:"form-dialog-title"},D("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),D(A.a,{className:p},D(P.a,null,D("span",null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!")),D(l.a,{variant:"body1"},j?D("h3",{className:b},"\ud83d\ude4c Thank you for participating! \ud83c\udf89 Redirecting..."):D(r.a.Fragment,null,D("span",null,"Please type ",D("span",{className:g},"(typos accepted)"),":"," ",V[C].substring(0,H.length),D("span",{className:m},V[C].charAt(H.length)),D("span",{className:f},V[C].substring(H.length+1,V[C].length))),D(d.a,{autoFocus:!0,inputProps:{spellCheck:"false"},autoComplete:"off",margin:"dense",id:"input",label:"Type Phrase Here",color:"secondary",value:H,disabled:h,onChange:function(e){return U(e.target.value)},fullWidth:!0})))),D(_.a,null,D(N.a,{onClick:function(){q.current.reset(),o(!1),c(),setTimeout((function(){w(!1),B(0),U("")}),200)},color:"secondary"},"Go Back"))))}var H=n("ot8U"),U=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},q=r.a.createElement;function G(e){var t=e.useStyles,n=F.a.appScript,o=n.landing,f=n.secondAuthLogin,b=n.secondAuthSignUp,y=F.a.route,h=y.signUp,w=y.login,v=t(),j=v.root,S=v.brand,I=v.auto,R=v.arbiTrader,k=v.buttons,A=v.logo,P=v.email,_=v.formControl,B=v.selectEmpty,L=Object(a.useState)(null),D=L[0],G=L[1],V=Object(a.useState)(null),X=V[0],W=V[1],J=Object(a.useState)(!1),Z=J[0],M=J[1],Q=Object(a.useState)(!1),Y=Q[0],K=Q[1],$=Object(a.useState)(!1),ee=$[0],te=$[1],ne=Object(a.useState)("Error!"),ae=ne[0],re=ne[1],oe=Object(H.a)({emailInput:"",passwordInput:"",passwordInputVerify:""}),se=oe.values,ie=oe.updateValue,ce=Object(a.useRef)(),le=se.emailInput,ue=se.passwordInput,pe=se.passwordInputVerify,de=function(e){G(e)},ge=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("signup"===D&&ue!==pe||"signup"===D&&""===pe||"signup"===D&&!X||""===ue||""===le)&&U(le)){e.next=10;break}!1===ee&&(te(!0),setTimeout((function(){te(!1)}),3e3)),"signup"===D&&ue!==pe&&re("Passwords do not match!"),"signup"===D&&""===pe&&re("Re-Enter Password Empty!"),"signup"!==D||X||re("Transaction Role Empty!"),""===ue&&re("Password Empty!"),""===le&&re("Email Empty!"),U(le)||re("Not a valid Email!"),e.next=21;break;case 10:return K(!0),e.next=13,fetch("".concat("signup"===D?h:w).concat("signup"===D?"/".concat(X):""),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({emailInput:le,passwordInput:ue})});case 13:return t=e.sent,e.next=16,t.json();case 16:n=e.sent,a=n.user_id,n.role,n.error?(K(!1),re("Invalid Password! Please try again."),!1===ee&&(te(!0),setTimeout((function(){te(!1)}),1500))):void 0!==a?(ce.current=a,M(!0)):console.log("User ID not captured");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return q(r.a.Fragment,null,q(z,{user_id:ce.current,open:Z,setAuthDialogOpen:M,handleGoBackReset:function(){G(null),K(!1)}}),q(c.a,{className:j},q("div",{className:S},q("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:A}),q(l.a,{variant:"h5",noWrap:!0},q("span",{className:I},"auto")," ",q("span",{className:R},"arbi-trader"))),q(u.a,null,!1===Y?q(r.a.Fragment,null,null===D?q(l.a,{align:"center",color:"textSecondary"},o):q(r.a.Fragment,null,q(p.a,{open:ee,onClick:function(){return setPasswordError(!1)}},q(C.a,{severity:"error"},ae)),q(l.a,{color:"textSecondary"},q("span",null,"signup"===D?b:f)),q("div",{className:P},q(d.a,{color:"secondary",type:"email",label:"Email",id:"emailInput",name:"emailInput",value:le,onChange:ie,required:!0}),q(d.a,{color:"secondary",type:"password",label:"Password",id:"passwordInput",name:"passwordInput",onChange:ie,value:ue,required:!0}),"signup"===D&&q(r.a.Fragment,null,q(d.a,{color:"secondary",type:"password",label:"Re-Enter Password",id:"passwordInputVerify",name:"passwordInputVerify",onChange:ie,value:pe,required:!0}),q(g.a,{className:_,color:"secondary",required:!0},q(m.a,{value:X,onChange:function(e){return W(e.target.value)},displayEmpty:!0,className:B,inputProps:{"aria-label":"Without label"}},q(x,{value:"",disabled:!0},"Transaction Role"),q(x,{value:"buyer"},"Buying"),q(x,{value:"seller"},"Selling")),q(O.a,null,"Transaction Role")))))):q(T.a,{color:"secondary"})),q(E,{className:k},null===D?q(r.a.Fragment,null,q(N.a,{size:"large",color:"secondary",onClick:function(){return de("login")}},"Logging In"),q(N.a,{size:"large",color:"secondary",onClick:function(){return de("signup")}},"Signing Up")):q(r.a.Fragment,null,q(N.a,{disabled:Y,size:"large",color:"secondary",onClick:function(){return de(null)}},"Go Back"),q(N.a,{disabled:Y,size:"large",color:"secondary",onClick:ge},"login"===D?"Login":"Sign Up")))))}var V=Object(B.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{width:300,height:455,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center",padding:"8px"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",marginLeft:"6px",marginReft:"6px"},email:{display:"flex",flexDirection:"column"},formControl:{marginTop:"1px",minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),X=n("wKsx"),W=r.a.createElement;function J(e){var t=e.children,n=F.a.route.session,o=Object(X.a)().page,c=Object(a.useState)(!1),l=c[0],u=c[1];return Object(a.useEffect)((function(){!function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,a.user_id?window.location.replace("/dashboard"):u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),W(r.a.Fragment,null,l?W(r.a.Fragment,null,t):W("div",{className:o},W(T.a,{color:"secondary"})))}var Z=r.a.createElement;function M(){var e=V().page;return Z(J,null,Z("div",{className:e},Z(G,{useStyles:V})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,2,1,3,4,5]]]);