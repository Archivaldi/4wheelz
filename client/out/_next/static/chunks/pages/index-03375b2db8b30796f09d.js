_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var a=n("q1tI"),r=n.n(a),o=n("o0o1"),s=n.n(o),i=n("HaE+"),c=n("30+C"),l=n("ofer"),u=n("oa/T"),p=n("79Xs"),d=n("r9w1"),g=n("ADg1"),m=n("cVXz"),f=n("Ff2n"),b=n("rePB"),h=n("wx14"),y=(n("17x9"),n("iuhU")),w=n("H2TA"),v=n("tVbE"),j=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,s=e.component,i=void 0===s?"li":s,c=e.disableGutters,l=void 0!==c&&c,u=e.ListItemClasses,p=e.role,d=void 0===p?"menuitem":p,g=e.selected,m=e.tabIndex,b=Object(f.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==m?m:-1),a.createElement(v.a,Object(h.a)({button:!0,role:d,tabIndex:n,component:i,selected:g,disableGutters:l,classes:Object(h.a)({dense:r.dense},u),className:Object(y.a)(r.root,o,g&&r.selected,!l&&r.gutters),ref:t},b))})),O=Object(w.a)((function(e){return{root:Object(h.a)({},e.typography.body1,Object(b.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(h.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(j),x=n("Spdj"),S=n("iae6"),T=a.forwardRef((function(e,t){var n=e.disableSpacing,r=void 0!==n&&n,o=e.classes,s=e.className,i=Object(f.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(h.a)({className:Object(y.a)(o.root,s,!r&&o.spacing),ref:t},i))})),N=Object(w.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(T),E=n("Z3vd"),C=n("ZiQX"),I=n("nOHt"),k=n("kfFl"),R=n("yv+Y"),A=n("EQI2"),P=n("++HY"),_=n("+JwS"),B=n("R/WZ"),F=Object(B.a)((function(e){return{typos:{color:"rgba(255, 255, 255, 0.7)"},currentChar:{borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px",background:"#62bdf9",color:"#212121"},charsToBeTyped:{background:"#0081cb",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},welcome:{textAlign:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"space-around"}}})),L=n("ULge"),D=r.a.createElement;function z(e){var t=e.user_id,n=e.open,o=e.setAuthDialogOpen,c=e.handleGoBackReset,u=F(),p=u.content,g=u.typos,m=u.currentChar,f=u.charsToBeTyped,b=u.welcome,h=Object(a.useState)(!1),y=h[0],w=h[1],v=Object(a.useState)(!1),j=v[0],O=v[1],x=Object(a.useState)(0),S=x[0],T=x[1],N=Object(a.useState)(0),C=N[0],B=N[1],z=Object(a.useState)(""),H=z[0],U=z[1],G=Object(a.useRef)(),V=Object(I.useRouter)(),X=L.a.message,q=L.a.route,W=function(){G.current.start(),w(!1),U(""),T(S+1),C===X.length-1?B(0):B(C+1),document.querySelector("#input").focus()},J=function(){var e=Object(i.a)(s.a.mark((function e(){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G.current.stop(),w(!0),e.next=4,G.current.getTypingPattern({type:0,text:H});case 4:if(n=e.sent,!(G.current.getQuality(n)>.3)){e.next=17;break}return e.next=9,fetch(q.verify,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:n,user_id:t})});case 9:return a=e.sent,e.next=12,a.json();case 12:r=e.sent,"not verified"===r.message?W():(O(!0),setTimeout((function(){V.push("/dashboard")}),1e3)),e.next=18;break;case 17:W();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){G.current||(G.current=new TypingDNA)}),[G]),Object(a.useEffect)((function(){H.length===X[C].length&&J()}),[H]),D("div",null,D(k.a,{open:n,"aria-labelledby":"form-dialog-title"},D(R.a,{id:"form-dialog-title"},D("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),D(A.a,{className:p},D(P.a,null,D("span",null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!")),D(l.a,{variant:"body1"},j?D("h3",{className:b},"\ud83d\ude4c Thank you for participating! \ud83c\udf89 Redirecting..."):D(r.a.Fragment,null,D("span",null,"Please type ",D("span",{className:g},"(typos accepted)"),":"," ",X[C].substring(0,H.length),D("span",{className:m},X[C].charAt(H.length)),D("span",{className:f},X[C].substring(H.length+1,X[C].length))),D(d.a,{autoFocus:!0,inputProps:{spellCheck:"false"},autoComplete:"off",margin:"dense",id:"input",label:"Type Phrase Here",color:"secondary",value:H,disabled:y,onChange:function(e){return U(e.target.value)},fullWidth:!0})))),D(_.a,null,D(E.a,{onClick:function(){G.current.reset(),o(!1),c(),setTimeout((function(){w(!1),B(0),U("")}),200)},color:"secondary"},"Go Back"))))}var H=n("ot8U"),U=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},G=r.a.createElement;function V(e){var t=e.useStyles,n=L.a.appScript,o=n.landing,f=n.secondAuthLogin,b=n.secondAuthSignUp,h=L.a.route,y=h.signUp,w=h.login,v=t(),j=v.root,T=v.brand,I=v.auto,k=v.arbiTrader,R=v.buttons,A=v.logo,P=v.email,_=v.formControl,B=v.selectEmpty,F=Object(a.useState)(null),D=F[0],V=F[1],X=Object(a.useState)(null),q=X[0],W=X[1],J=Object(a.useState)(!1),Z=J[0],M=J[1],Q=Object(a.useState)(!1),Y=Q[0],K=Q[1],$=Object(a.useState)(!1),ee=$[0],te=$[1],ne=Object(a.useState)("Error!"),ae=ne[0],re=ne[1],oe=Object(H.a)({emailInput:"",passwordInput:"",passwordInputVerify:""}),se=oe.values,ie=oe.updateValue,ce=Object(a.useRef)(),le=se.emailInput,ue=se.passwordInput,pe=se.passwordInputVerify,de=function(e){V(e)},ge=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("signup"===D&&ue!==pe||"signup"===D&&""===pe||"signup"===D&&!q||""===ue||""===le)&&U(le)){e.next=10;break}!1===ee&&(te(!0),setTimeout((function(){te(!1)}),3e3)),"signup"===D&&ue!==pe&&re("Passwords do not match!"),"signup"===D&&""===pe&&re("Re-Enter Password Empty!"),"signup"!==D||q||re("Transaction Role Empty!"),""===ue&&re("Password Empty!"),""===le&&re("Email Empty!"),U(le)||re("Not a valid Email!"),e.next=21;break;case 10:return K(!0),e.next=13,fetch("".concat("signup"===D?y:w).concat("signup"===D?"/".concat(q):""),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({emailInput:le,passwordInput:ue})});case 13:return t=e.sent,e.next=16,t.json();case 16:n=e.sent,a=n.user_id,n.role,n.error?(K(!1),re("Invalid Password! Please try again."),!1===ee&&(te(!0),setTimeout((function(){te(!1)}),1500))):void 0!==a?(ce.current=a,M(!0)):console.log("User ID not captured");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return G(r.a.Fragment,null,G(z,{user_id:ce.current,open:Z,setAuthDialogOpen:M,handleGoBackReset:function(){V(null),K(!1)}}),G(c.a,{className:j},G("div",{className:T},G("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:A}),G(l.a,{variant:"h5",noWrap:!0},G("span",{className:I},"auto")," ",G("span",{className:k},"arbi-trader"))),G(u.a,null,!1===Y?G(r.a.Fragment,null,null===D?G(l.a,{align:"center",color:"textSecondary"},o):G(r.a.Fragment,null,G(p.a,{open:ee,onClick:function(){return setPasswordError(!1)}},G(C.a,{severity:"error"},ae)),G(l.a,{color:"textSecondary"},G("span",null,"signup"===D?b:f)),G("div",{className:P},G(d.a,{color:"secondary",type:"email",label:"Email",id:"emailInput",name:"emailInput",value:le,onChange:ie,required:!0}),G(d.a,{color:"secondary",type:"password",label:"Password",id:"passwordInput",name:"passwordInput",onChange:ie,value:ue,required:!0}),"signup"===D&&G(r.a.Fragment,null,G(d.a,{color:"secondary",type:"password",label:"Re-Enter Password",id:"passwordInputVerify",name:"passwordInputVerify",onChange:ie,value:pe,required:!0}),G(g.a,{className:_,color:"secondary",required:!0},G(m.a,{value:q,onChange:function(e){return W(e.target.value)},displayEmpty:!0,className:B,inputProps:{"aria-label":"Without label"}},G(O,{value:"",disabled:!0},"Transaction Role"),G(O,{value:"buyer"},"Buying"),G(O,{value:"seller"},"Selling")),G(x.a,null,"Transaction Role")))))):G(S.a,{color:"secondary"})),G(N,{className:R},null===D?G(r.a.Fragment,null,G(E.a,{size:"large",color:"secondary",onClick:function(){return de("login")}},"Logging In"),G(E.a,{size:"large",color:"secondary",onClick:function(){return de("signup")}},"Signing Up")):G(r.a.Fragment,null,G(E.a,{disabled:Y,size:"large",color:"secondary",onClick:function(){return de(null)}},"Go Back"),G(E.a,{disabled:Y,size:"large",color:"secondary",onClick:ge},"login"===D?"Login":"Sign Up")))))}var X=Object(B.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{width:300,height:455,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center",padding:"8px"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",marginLeft:"6px",marginReft:"6px"},email:{display:"flex",flexDirection:"column"},formControl:{marginTop:"1px",minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),q=n("wKsx"),W=r.a.createElement;function J(e){var t=e.children,n=L.a.route.session,o=Object(q.a)().page,c=Object(a.useState)(!1),l=c[0],u=c[1];return Object(a.useEffect)((function(){!function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,a.user_id?window.location.replace("/dashboard"):u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),W(r.a.Fragment,null,l?W(r.a.Fragment,null,t):W("div",{className:o},W(S.a,{color:"secondary"})))}var Z=r.a.createElement;function M(){var e=X().page;return Z(J,null,Z("div",{className:e},Z(V,{useStyles:X})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,1,2,3,4]]]);