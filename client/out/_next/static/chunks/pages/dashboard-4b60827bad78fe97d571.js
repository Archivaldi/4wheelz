_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2wU4":function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r("sFYk")}])},sFYk:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return q}));var t=r("q1tI"),n=r.n(t),o=r("fE/f"),i=r("+rzG"),c=r("30+C"),s=r("oa/T"),l=r("ofer"),d=r("rePB"),m=r("R/WZ"),f=Object(m.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(d.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(d.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),u=r("wx14"),b=r("Ff2n"),p=(r("17x9"),r("iuhU")),v=r("NqtD"),g=r("H2TA"),y=r("ye/S"),h=r("tr08"),w=t.forwardRef((function(e,a){var r=e.classes,n=e.className,o=e.color,i=void 0===o?"primary":o,c=e.value,s=e.valueBuffer,l=e.variant,d=void 0===l?"indeterminate":l,m=Object(b.a)(e,["classes","className","color","value","valueBuffer","variant"]),f=Object(h.a)(),g={},y={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==c){g["aria-valuenow"]=Math.round(c),g["aria-valuemin"]=0,g["aria-valuemax"]=100;var w=c-100;"rtl"===f.direction&&(w=-w),y.bar1.transform="translateX(".concat(w,"%)")}else 0;if("buffer"===d)if(void 0!==s){var k=(s||0)-100;"rtl"===f.direction&&(k=-k),y.bar2.transform="translateX(".concat(k,"%)")}else 0;return t.createElement("div",Object(u.a)({className:Object(p.a)(r.root,r["color".concat(Object(v.a)(i))],n,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[d]),role:"progressbar"},g,{ref:a},m),"buffer"===d?t.createElement("div",{className:Object(p.a)(r.dashed,r["dashedColor".concat(Object(v.a)(i))])}):null,t.createElement("div",{className:Object(p.a)(r.bar,r["barColor".concat(Object(v.a)(i))],("indeterminate"===d||"query"===d)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[d]),style:y.bar1}),"determinate"===d?null:t.createElement("div",{className:Object(p.a)(r.bar,("indeterminate"===d||"query"===d)&&r.bar2Indeterminate,"buffer"===d?[r["color".concat(Object(v.a)(i))],r.bar2Buffer]:r["barColor".concat(Object(v.a)(i))]),style:y.bar2}))})),k=Object(g.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(y.e)(a,.62):Object(y.a)(a,.5)},r=a(e.palette.primary.main),t=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:t},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(w),x=n.a.createElement,j=Object(m.a)({root:{width:"100%"}});function N(e){var a=e.value,r=j().root;return x("div",{className:r},x(k,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var O=r("vrJG"),C=r.n(O),E=n.a.createElement;function P(e){var a=e.data,r=a.docs,t=a.name,n=a.title,o=f(),i=o.root,d=o.header,m=o.documents,u=o.items,b=o.progress,p=o.accent,v=o.font,g=o.userNameFont;var y=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(r);return E(c.a,{className:i},E(s.a,{className:d},E("div",null,E(l.a,{className:g},t),E(l.a,{className:"".concat(p," ").concat(v)},n)),E("div",{className:m},r.map((function(e){var a=e.id,r=e.completed,t=e.type;return E("div",{className:u,key:a},E(C.a,{className:v,color:r?"secondary":"primary"}),E(l.a,{className:v,color:"textSecondary"},t))})))),E("div",{className:b},E(N,{value:y})))}var S=r("L4PR"),_=r("fx/U"),z=r("49Ka"),I=n.a.createElement;function q(){var e=Object(_.a)(),a=S.a.buyer,r=S.a.seller;return I(o.a,null,I(i.a,{allDocsComplete:Object(z.a)(a,r),classes:e},I(P,{key:2,data:r}),I(P,{key:1,data:a})))}}},[["2wU4",0,2,1,3,4,6]]]);