_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{YMul:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return oe}));var o=n("q1tI"),t=n.n(o),r=n("+rzG"),l=n("30+C"),c=n("oa/T"),i=n("ofer"),d=n("Z3vd"),s=n("kfFl"),u=n("+JwS"),p=n("EQI2"),m=n("yv+Y"),b=n("r9w1"),f=n("wx14"),h=n("Ff2n"),y=(n("17x9"),n("iuhU")),v=n("EHdT"),g=n("H2TA"),k=n("NqtD"),O=o.forwardRef((function(e,a){e.checked;var n=e.classes,t=e.className,r=e.control,l=e.disabled,c=(e.inputRef,e.label),d=e.labelPlacement,s=void 0===d?"end":d,u=(e.name,e.onChange,e.value,Object(h.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),p=Object(v.a)(),m=l;"undefined"===typeof m&&"undefined"!==typeof r.props.disabled&&(m=r.props.disabled),"undefined"===typeof m&&p&&(m=p.disabled);var b={disabled:m};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof r.props[a]&&"undefined"!==typeof e[a]&&(b[a]=e[a])})),o.createElement("label",Object(f.a)({className:Object(y.a)(n.root,t,"end"!==s&&n["labelPlacement".concat(Object(k.a)(s))],m&&n.disabled),ref:a},u),o.cloneElement(r,b),o.createElement(i.a,{component:"span",className:Object(y.a)(n.label,m&&n.disabled)},c))})),j=Object(g.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(O),C=n("ODXe"),x=n("yCxk"),w=n("PsDL"),N=o.forwardRef((function(e,a){var n=e.autoFocus,t=e.checked,r=e.checkedIcon,l=e.classes,c=e.className,i=e.defaultChecked,d=e.disabled,s=e.icon,u=e.id,p=e.inputProps,m=e.inputRef,b=e.name,g=e.onBlur,k=e.onChange,O=e.onFocus,j=e.readOnly,N=e.required,E=e.tabIndex,S=e.type,q=e.value,z=Object(h.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=Object(x.a)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),I=Object(C.a)(P,2),D=I[0],B=I[1],F=Object(v.a)(),M=d;F&&"undefined"===typeof M&&(M=F.disabled);var R="checkbox"===S||"radio"===S;return o.createElement(w.a,Object(f.a)({component:"span",className:Object(y.a)(l.root,c,D&&l.checked,M&&l.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){O&&O(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){g&&g(e),F&&F.onBlur&&F.onBlur(e)},ref:a},z),o.createElement("input",Object(f.a)({autoFocus:n,checked:t,defaultChecked:i,className:l.input,disabled:M,id:R&&u,name:b,onChange:function(e){var a=e.target.checked;B(a),k&&k(e,a)},readOnly:j,ref:m,required:N,tabIndex:E,type:S,value:q},p)),D?r:s)})),E=Object(g.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(N),S=n("5AJ6"),q=Object(S.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),z=Object(S.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),P=n("ye/S"),I=Object(S.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),D=o.createElement(z,null),B=o.createElement(q,null),F=o.createElement(I,null),M=o.forwardRef((function(e,a){var n=e.checkedIcon,t=void 0===n?D:n,r=e.classes,l=e.color,c=void 0===l?"secondary":l,i=e.icon,d=void 0===i?B:i,s=e.indeterminate,u=void 0!==s&&s,p=e.indeterminateIcon,m=void 0===p?F:p,b=e.inputProps,v=e.size,g=void 0===v?"medium":v,O=Object(h.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),j=u?m:d,C=u?m:t;return o.createElement(E,Object(f.a)({type:"checkbox",classes:{root:Object(y.a)(r.root,r["color".concat(Object(k.a)(c))],u&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:c,inputProps:Object(f.a)({"data-indeterminate":u},b),icon:o.cloneElement(j,{fontSize:void 0===j.props.fontSize&&"small"===g?g:j.props.fontSize}),checkedIcon:o.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===g?g:C.props.fontSize}),ref:a},O))})),R=Object(g.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(P.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(P.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(M),_=o.forwardRef((function(e,a){var n=e.classes,t=e.className,r=e.row,l=void 0!==r&&r,c=Object(h.a)(e,["classes","className","row"]);return o.createElement("div",Object(f.a)({className:Object(y.a)(n.root,t,l&&n.row),ref:a},c))})),H=Object(g.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(_),L=n("R/WZ"),T=t.a.createElement,U=Object(L.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}}}}));function V(e){var a=e.open,n=e.handleUploadClose,t=e.type,r=U().root,l=Object(o.useState)(!1),c=l[0],i=l[1],f=function(){i(!c)};return T("div",null,T(s.a,{color:"dark",open:a,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},T(m.a,{id:"alert-dialog-title"},"Upload ".concat(t," Document")),T(p.a,null,"Bill of Sale"===t?T("form",{className:r,noValidate:!0,autoComplete:"on"},T(b.a,{color:"secondary",id:"standard-required",label:"First Name",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Last Name",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Vin Number",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Chassis Year",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Model",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Title #",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Milage",required:!0}),T(b.a,{color:"secondary",id:"standard-required",label:"Price",required:!0}),T(j,{control:T(R,{checked:c,onChange:f}),label:"Apply Signature"})):T(H,null,T(d.a,{variant:"contained",color:"secondary",component:"label"},"Upload ",t,T("input",{type:"file",hidden:!0})),T(j,{control:T(R,{checked:c,onChange:f}),label:"Apply Signature"}))),T(u.a,null,T(d.a,{color:"secondary"},"Submit"),T(d.a,{onClick:n,color:"secondary"},"Close"))))}var A=n("++HY"),J=t.a.createElement;function W(e){var a=e.url,n=e.open,o=e.handleDocumentClose,t=e.type;return J("div",null,J(s.a,{open:n,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},J(m.a,{id:"alert-dialog-title"},"Viewing ".concat(t," Document")),J(p.a,null,J(A.a,{id:"alert-dialog-description"},J("img",{style:{maxHeight:"350px",maxWidth:"500px"},src:a,alt:t}))),J(u.a,null,J(d.a,{onClick:o,color:"secondary"},"Close"))))}var $=n("vrJG"),Y=n.n($),G=n("rePB"),X=Object(L.a)((function(e){var a;return{root:{height:"100%",margin:0,padding:0,alignItems:"center",minWidth:"260px"},flex:{display:"flex",flexWrap:"wrap",height:"100%",alignItems:"center",justifyContent:"space-between"},buttonMargin:{margin:"20px"},font:(a={fontSize:"3vw"},Object(G.a)(a,e.breakpoints.up("lg"),{fontSize:"2vw"}),Object(G.a)(a,e.breakpoints.up("sm"),{fontSize:"1.5em"}),Object(G.a)(a,e.breakpoints.down("sm"),{fontSize:"1em"}),a),disAppear:Object(G.a)({},e.breakpoints.down("xs"),{display:"none"}),icon:{fontSize:"100%"}}})),Z=t.a.createElement;function K(e){var a=e.type,n=e.completed,t=e.url,r=X(),s=r.root,u=r.flex,p=r.icon,m=r.font,b=r.buttonMargin,f=r.disAppear,h=Object(o.useState)(!1),y=h[0],v=h[1],g=Object(o.useState)(!1),k=g[0],O=g[1];return Z(l.a,{className:s},Z(V,{open:y,handleUploadClose:function(){v(!1)},type:a}),Z(W,{open:k,handleDocumentClose:function(){O(!1)},type:a,url:t}),Z(c.a,{className:u},Z(i.a,{className:m,color:"textSecondary"},Z(Y.a,{className:p,color:n?"secondary":"primary"}),"".concat(a).toUpperCase()),Z("div",null,Z(d.a,{disabled:n,className:"".concat(m," ").concat(b),color:"secondary",onClick:function(){v(!0)}},Z("span",null,"Upload",Z("span",{className:f},n?"ed":""))),Z(d.a,{disabled:!n,className:"".concat(m," ").concat(b),color:"secondary",onClick:function(){O(!0)}},Z("span",null,"View ",Z("span",{className:f},"Document"))))))}var Q=n("L4PR"),ee=n("fx/U"),ae=n("49Ka"),ne=t.a.createElement;function oe(){var e=Q.a.buyer,a=Q.a.seller,n=Object(ee.b)();return ne(r.a,{classes:n,allDocsComplete:Object(ae.a)(e,a)},a.docs.map((function(e){var a=e.id,n=e.type,o=e.completed,t=e.url;return ne(K,{key:a,type:n,completed:o,url:t})})))}},tJ1D:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return n("YMul")}])}},[["tJ1D",0,2,1,3,4,6,5]]]);