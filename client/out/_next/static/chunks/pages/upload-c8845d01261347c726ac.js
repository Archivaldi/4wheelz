_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{YMul:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return le}));var t=n("q1tI"),o=n.n(t),r=n("fE/f"),c=n("+rzG"),l=n("30+C"),i=n("oa/T"),d=n("ofer"),s=n("Z3vd"),u=n("o0o1"),p=n.n(u),m=n("HaE+"),b=n("kfFl"),f=n("+JwS"),h=n("EQI2"),y=n("yv+Y"),v=n("r9w1"),g=n("wx14"),k=n("Ff2n"),O=(n("17x9"),n("iuhU")),j=n("EHdT"),C=n("H2TA"),w=n("NqtD"),x=t.forwardRef((function(e,a){e.checked;var n=e.classes,o=e.className,r=e.control,c=e.disabled,l=(e.inputRef,e.label),i=e.labelPlacement,s=void 0===i?"end":i,u=(e.name,e.onChange,e.value,Object(k.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),p=Object(j.a)(),m=c;"undefined"===typeof m&&"undefined"!==typeof r.props.disabled&&(m=r.props.disabled),"undefined"===typeof m&&p&&(m=p.disabled);var b={disabled:m};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof r.props[a]&&"undefined"!==typeof e[a]&&(b[a]=e[a])})),t.createElement("label",Object(g.a)({className:Object(O.a)(n.root,o,"end"!==s&&n["labelPlacement".concat(Object(w.a)(s))],m&&n.disabled),ref:a},u),t.cloneElement(r,b),t.createElement(d.a,{component:"span",className:Object(O.a)(n.label,m&&n.disabled)},l))})),E=Object(C.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(x),N=n("ODXe"),S=n("yCxk"),q=n("PsDL"),z=t.forwardRef((function(e,a){var n=e.autoFocus,o=e.checked,r=e.checkedIcon,c=e.classes,l=e.className,i=e.defaultChecked,d=e.disabled,s=e.icon,u=e.id,p=e.inputProps,m=e.inputRef,b=e.name,f=e.onBlur,h=e.onChange,y=e.onFocus,v=e.readOnly,C=e.required,w=e.tabIndex,x=e.type,E=e.value,z=Object(k.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=Object(S.a)({controlled:o,default:Boolean(i),name:"SwitchBase",state:"checked"}),P=Object(N.a)(I,2),D=P[0],B=P[1],F=Object(j.a)(),R=d;F&&"undefined"===typeof R&&(R=F.disabled);var M="checkbox"===x||"radio"===x;return t.createElement(q.a,Object(g.a)({component:"span",className:Object(O.a)(c.root,l,D&&c.checked,R&&c.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){y&&y(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){f&&f(e),F&&F.onBlur&&F.onBlur(e)},ref:a},z),t.createElement("input",Object(g.a)({autoFocus:n,checked:o,defaultChecked:i,className:c.input,disabled:R,id:M&&u,name:b,onChange:function(e){var a=e.target.checked;B(a),h&&h(e,a)},readOnly:v,ref:m,required:C,tabIndex:w,type:x,value:E},p)),D?r:s)})),I=Object(C.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(z),P=n("5AJ6"),D=Object(P.a)(t.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),B=Object(P.a)(t.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=n("ye/S"),R=Object(P.a)(t.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),M=t.createElement(B,null),_=t.createElement(D,null),T=t.createElement(R,null),H=t.forwardRef((function(e,a){var n=e.checkedIcon,o=void 0===n?M:n,r=e.classes,c=e.color,l=void 0===c?"secondary":c,i=e.icon,d=void 0===i?_:i,s=e.indeterminate,u=void 0!==s&&s,p=e.indeterminateIcon,m=void 0===p?T:p,b=e.inputProps,f=e.size,h=void 0===f?"medium":f,y=Object(k.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),v=u?m:d,j=u?m:o;return t.createElement(I,Object(g.a)({type:"checkbox",classes:{root:Object(O.a)(r.root,r["color".concat(Object(w.a)(l))],u&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:l,inputProps:Object(g.a)({"data-indeterminate":u},b),icon:t.cloneElement(v,{fontSize:void 0===v.props.fontSize&&"small"===h?h:v.props.fontSize}),checkedIcon:t.cloneElement(j,{fontSize:void 0===j.props.fontSize&&"small"===h?h:j.props.fontSize}),ref:a},y))})),L=Object(C.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(F.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(F.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(H),U=t.forwardRef((function(e,a){var n=e.classes,o=e.className,r=e.row,c=void 0!==r&&r,l=Object(k.a)(e,["classes","className","row"]);return t.createElement("div",Object(g.a)({className:Object(O.a)(n.root,o,c&&n.row),ref:a},l))})),A=Object(C.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(U),V=n("R/WZ"),J=o.a.createElement,W=Object(V.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}}}}));function $(e){var a=e.open,n=e.handleUploadClose,o=e.type,r=Object(t.useState)(""),c=(r[0],r[1],W().root),l=Object(t.useState)(!1),i=l[0],d=l[1],u=function(){d(!i)},g=function(){var e=Object(m.a)(p.a.mark((function e(a){var n,t,r,c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="","Government ID"===o?n="government_id":"REGISTRATION"===o&&(n="registration"),t=a.target.files,(r=new FormData).append("file",t[0]),e.next=8,fetch("/api/db/documentUpload/".concat(n),{method:"POST",body:r});case 8:c=e.sent,l=c.url,console.log(l);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return J("div",null,J(b.a,{color:"dark",open:a,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},J(y.a,{id:"alert-dialog-title"},"Upload ".concat(o," Document")),J(h.a,null,"Bill of Sale"===o?J("form",{className:c,noValidate:!0,autoComplete:"on"},J(v.a,{color:"secondary",id:"standard-required",label:"First Name",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Last Name",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Vin Number",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Chassis Year",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Model",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Title #",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Milage",required:!0}),J(v.a,{color:"secondary",id:"standard-required",label:"Price",required:!0}),J(E,{control:J(L,{checked:i,onChange:u}),label:"Apply Signature"})):J(A,null,J(s.a,{variant:"contained",color:"secondary",component:"label"},"Upload ",o,J("input",{type:"file",name:o,hidden:!0,onChange:g})),J(E,{control:J(L,{checked:i,onChange:u}),label:"Apply Signature"}))),J(f.a,null,J(s.a,{color:"secondary"},"Submit"),J(s.a,{onClick:n,color:"secondary"},"Close"))))}var G=n("++HY"),Y=o.a.createElement;function X(e){e.url;var a=e.open,n=e.handleDocumentClose,t=e.type;return Y("div",null,Y(b.a,{open:a,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},Y(y.a,{id:"alert-dialog-title"},"Viewing ".concat(t," Document")),Y(h.a,null,Y(G.a,{id:"alert-dialog-description"},Y("img",{style:{maxHeight:"350px",maxWidth:"500px"},src:"https://res.cloudinary.com/fourwheels/image/upload/v1613455329/rbrczqunkjgoo5mviztq.pdf",alt:t}))),Y(f.a,null,Y(s.a,{onClick:n,color:"secondary"},"Close"))))}var Z=n("vrJG"),K=n.n(Z),Q=n("rePB"),ee=Object(V.a)((function(e){var a;return{root:{height:"100%",margin:0,padding:0,alignItems:"center",minWidth:"260px"},flex:{display:"flex",flexWrap:"wrap",height:"100%",alignItems:"center",justifyContent:"space-between"},buttonMargin:{margin:"20px"},font:(a={fontSize:"3vw"},Object(Q.a)(a,e.breakpoints.up("lg"),{fontSize:"2vw"}),Object(Q.a)(a,e.breakpoints.up("sm"),{fontSize:"1.5em"}),Object(Q.a)(a,e.breakpoints.down("sm"),{fontSize:"1em"}),a),disAppear:Object(Q.a)({},e.breakpoints.down("xs"),{display:"none"}),icon:{fontSize:"100%"}}})),ae=o.a.createElement;function ne(e){var a=e.type,n=e.completed,o=e.url,r=ee(),c=r.root,u=r.flex,p=r.icon,m=r.font,b=r.buttonMargin,f=r.disAppear,h=Object(t.useState)(!1),y=h[0],v=h[1],g=Object(t.useState)(!1),k=g[0],O=g[1];return ae(l.a,{className:c},ae($,{open:y,handleUploadClose:function(){v(!1)},type:a}),ae(X,{open:k,handleDocumentClose:function(){O(!1)},type:a,url:o}),ae(i.a,{className:u},ae(d.a,{className:m,color:"textSecondary"},ae(K.a,{className:p,color:n?"secondary":"primary"}),"".concat(a).toUpperCase()),ae("div",null,ae(s.a,{disabled:n,className:"".concat(m," ").concat(b),color:"secondary",onClick:function(){v(!0)}},ae("span",null,"Upload",ae("span",{className:f},n?"ed":""))),ae(s.a,{disabled:!n,className:"".concat(m," ").concat(b),color:"secondary",onClick:function(){O(!0)}},ae("span",null,"View ",ae("span",{className:f},"Document"))))))}var te=n("L4PR"),oe=n("fx/U"),re=n("49Ka"),ce=o.a.createElement;function le(){var e=te.a.buyer,a=te.a.seller,n=Object(oe.b)();return ce(r.a,null,ce(c.a,{classes:n,allDocsComplete:Object(re.a)(e,a)},a.docs.map((function(e){var a=e.id,n=e.type,t=e.completed,o=e.url;return ce(ne,{key:a,type:n,completed:t,url:o})}))))}},tJ1D:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return n("YMul")}])}},[["tJ1D",0,2,1,3,4,5,6]]]);