(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(6),s=t.n(a),r=t(8),o=t(3),b=(t(13),t(7)),l=t(0);var j=function(){var e=Object(c.useState)(b),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)([]),j=Object(o.a)(s,2),i=j[0],u=j[1],O=Object(c.useState)(!1),d=Object(o.a)(O,2),p=d[0],h=d[1],k=Object(c.useState)(!1),x=Object(o.a)(k,2),m=x[0],f=x[1],W=t.map((function(e,n){return Object(l.jsxs)("li",{id:n,children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsxs)("p",{children:["Abierto entre semana: ",e.openOnWeekdays?"Si":"No"]}),Object(l.jsxs)("p",{children:["Abierto el fin de semana: ",e.openOnWeekend?"Si":"No"]})]},n)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Mis clubs"})}),Object(l.jsxs)("main",{children:[Object(l.jsx)("ul",{children:W}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("h2",{children:"A\xf1adir un nuevo club"}),Object(l.jsxs)("label",{children:["Nombre del club",Object(l.jsx)("input",{onChange:function(e){e.preventDefault(),u(e.currentTarget.value)},type:"text",value:i})]}),Object(l.jsxs)("label",{children:["\xbfAbre entre semana?",!0===p?"S\xed":"No",Object(l.jsx)("input",{onChange:function(e){h(e.target.checked)},type:"checkbox",name:"week"})]}),Object(l.jsxs)("label",{children:["\xbfAbre los fines semana?",!0===m?"S\xed":"No",Object(l.jsx)("input",{onChange:function(e){f(e.target.checked)},type:"checkbox",name:"weekend"})]}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var n={name:i,openOnWeekdays:p,openOnWeekend:m};console.log(n),a([].concat(Object(r.a)(t),[n]))},className:"button",children:"A\xf1adir un nuevo club"})]})]})]})};s.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.f0076f69.chunk.js.map