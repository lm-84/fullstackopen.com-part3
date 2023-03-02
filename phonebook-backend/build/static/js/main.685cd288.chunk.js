(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),u=t(10),c=t.n(u),o=(t(9),t(11)),i=t(3),l=t(29),m="/api/persons",f=function(){return l.a.get(m).then(function(e){return e.data})},d=function(e){return l.a.post("".concat(m),e).then(function(e){return e.data})},s=function(e){var n=l.a.delete("".concat(m,"/").concat(e));return console.log(n.then(function(e){return e.data})),n.then(function(e){return e.data})},h=function(e,n){return l.a.put("".concat(m,"/").concat(e),n).then(function(e){return e.data})},b=function(e){return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:e.filter,onChange:e.handleFilter}))},p=function(e){return r.a.createElement("h2",null,e.text)},v=function(e){var n=e.message,t=e.classText;return""===n?null:r.a.createElement("div",{className:t},n)},E=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){return r.a.createElement("div",null,e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return e.handleDelete(e.person)}},"delete"))},w=function(e){return e.persons.map(function(n){return r.a.createElement(g,{key:n.name,name:n.name,number:n.number,handleDelete:function(){return e.handleDelete(n)}})})},j=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)([]),l=Object(i.a)(c,2),m=l[0],g=l[1],j=Object(a.useState)(""),O=Object(i.a)(j,2),C=O[0],N=O[1],S=Object(a.useState)(""),T=Object(i.a)(S,2),D=T[0],x=T[1],y=Object(a.useState)(""),k=Object(i.a)(y,2),F=k[0],P=k[1],L=Object(a.useState)(""),I=Object(i.a)(L,2),A=I[0],B=I[1],J=Object(a.useState)(""),M=Object(i.a)(J,2),R=M[0],U=M[1];Object(a.useEffect)(function(){f().then(function(e){u(e),g(e),B("Database read"),setTimeout(function(){return B("")},5e3)}).catch(function(e){alert("an error has ocurred reading the data base")})},[]);return r.a.createElement("div",null,r.a.createElement(p,{text:"Phonebook"}),r.a.createElement(v,{message:A,classText:"message"}),r.a.createElement(v,{message:R,classText:"error"}),r.a.createElement(b,{filter:F,handleFilter:function(e){P(e.target.value);var n=t.filter(function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())});g(n)}}),r.a.createElement(p,{text:"Add new"}),r.a.createElement(E,{newName:C,newNumber:D,addPerson:function(e){e.preventDefault();var n={name:C,number:D};!function(e,n){return e.map(function(e){return e.name}).includes(n)}(t,C)?d(n).then(function(e){var n=[].concat(Object(o.a)(t),[e]);u(n),g(n),N(""),x(""),B("Added "+C),setTimeout(function(){return B("")},5e3)}).catch(function(e){alert("an error has occurred saving the new person")}):!0===window.confirm(C+" is already added to phonebook, replace the old number with a new one?")&&""!==C&&h(t.find(function(e){return e.name===C}).id,n).then(function(e){u(t.map(function(n){return n.name!==C?n:e})),g(m.map(function(n){return n.name!==C?n:e})),B("Updated "+C),setTimeout(function(){return B("")},5e3)}).catch(function(e){alert("an error has occurred updating the person")})},handleNumberChange:function(e){x(e.target.value)},handleNameChange:function(e){N(e.target.value)}}),r.a.createElement(p,{text:"Numbers"}),r.a.createElement(w,{persons:m,handleDelete:function(e){if(window.confirm("Do you really want to delete ".concat(e.name,"?"))){var n=t,a=m;s(e.id).then(function(t){u(n.filter(function(n){return n.id!==e.id})),g(a.filter(function(n){return n.id!==e.id})),B("Deleted "+e.name),setTimeout(function(){return B("")},5e3)}).catch(function(t){U("Information of ".concat(e.name," has already been removed from server")),u(n.filter(function(n){return n.name!==e.name})),g(a.filter(function(n){return n.name!==e.name})),setTimeout(function(){return U("")},5e3)})}}}))},O=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,28)).then(function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,u=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),u(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),O()},9:function(e,n,t){}},[[12,3,2]]]);
//# sourceMappingURL=main.685cd288.chunk.js.map