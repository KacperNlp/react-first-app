(this["webpackJsonpspa-page"]=this["webpackJsonpspa-page"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/header1.ca8754c0.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/header2.3e7625e9.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/header3.1c830978.jpg"},23:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(28),a(8)),i=a(9),u=a(11),m=a(10),s=(a(29),a(3)),p=(a(30),a(19)),d=a.n(p),h=a(20),E=a.n(h),g=a(21),f=a.n(g),v=function(){var e=[d.a,E.a,f.a],t=Math.floor(Math.random()*e.length),a=e[t];return console.log(t),r.a.createElement("img",{src:a,alt:"header background city"})},b=(a(31),[{name:"Start",path:"/",exact:!0},{name:"Newsy",path:"/news"},{name:"Kontakt",path:"/contact"},{name:"Admin",path:"/admin"}]),w=function(){var e=b.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact},e.name))}));return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav"},e))},y=a(1),j=(a(37),["cars","motorbikes","books","boots"]),k=function(){var e=j.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"product-list-title"},"Nasze artyku\u0142y:"),r.a.createElement("div",{className:"product-list"},r.a.createElement("ul",null,e)))},S=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Znajdujesz si\u0119 na podstronie ".concat(e.id)))},N=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{id:e.match.params.id}),r.a.createElement(s.b,{to:"/"},"Powr\xf3t"))},x=function(e){var t=e.author,a=e.title,n=e.content;return r.a.createElement("article",{className:"new-article"},r.a.createElement("h3",null,a),r.a.createElement("span",null,t),r.a.createElement("p",null,n))},z=[{id:1,author:"Adam Nowicki",title:"Jak programowa\u0107 w JS",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, magni est hic minus ea nobis esse itaque impedit sed ut ratione vitae voluptatum odit totam distinctio a aliquam. In."},{id:2,author:"Kacper Boborek",title:"Programowanie w Python i C++",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, magni est hic minus ea nobis esse itaque impedit sed ut ratione vitae voluptatum odit totam distinctio a aliquam. In."},{id:3,author:"Anna Boborek",title:"Nowoczesne technologie",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, magni est hic minus ea nobis esse itaque impedit sed ut ratione vitae voluptatum odit totam distinctio a aliquam. In."}],C=function(){var e=z.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Najnowsze wpisy!"),r.a.createElement("div",null,e))},O=(a(38),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Napisz do nas"),r.a.createElement("div",{className:"contact-containers"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(y.a,{when:this.state.value.length>0,message:"Masz wype\u0142niony formularz, ale go nie wys\u0142a\u0142e\u015b, je\u015bli opu\u015bcisz stron\u0119 wszystko zostanieutracone. Czy chcesz to zrobi\u0107?"})))}}]),a}(r.a.Component)),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).adminPass={correctLogin:"Admin123",correctPassword:"has\u0142o123"},e.state={userLogin:"",userPassword:"",premission:!1},e.handleChange=function(t){"text"==t.target.type?e.setState({userLogin:t.target.value}):e.setState({userPassword:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.userLogin==e.adminPass.correctLogin&&e.state.userPassword==e.adminPass.correctPassword&&e.setState({premission:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.c,{render:function(){return e.state.premission?r.a.createElement("h1",null,"Witaj adminie!"):r.a.createElement(y.b,{to:"/login"})}}))}}]),a}(r.a.Component),F=function(e){return console.log(e.handleChange),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"admin-login-box"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("input",{type:"text",value:e.userLogin,onChange:e.handleChange}),r.a.createElement("input",{type:"password",value:e.userPassword,onChange:e.handleChange}),r.a.createElement("button",null,"Zaloguj si\u0119"))))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Nie ma takiej strony, przykro nam :("))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.e,null,r.a.createElement(y.c,{path:"/",exact:!0,component:k}),r.a.createElement(y.c,{path:"/product/:id",component:N}),r.a.createElement(y.c,{path:"/news",component:C}),r.a.createElement(y.c,{path:"/contact",component:O}),r.a.createElement(y.c,{path:"/admin",component:P}),r.a.createElement(y.c,{path:"/login",component:F}),r.a.createElement(y.c,{component:L})))},A=(a(39),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Footer"),r.a.createElement(y.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Strona g\u0142\xf3wna")}}),r.a.createElement(y.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement("div",{className:"footer-details"},r.a.createElement("p",null,e.match.params.page),r.a.createElement("p",null,e.match.path),r.a.createElement("p",null,e.match.url))}}),r.a.createElement(y.c,{path:"/:page/:product",render:function(e){return r.a.createElement("div",{className:"footer-details"},r.a.createElement("p",null,e.match.params.product),r.a.createElement("p",null,e.match.path),r.a.createElement("p",null,e.match.url))}}))}),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,{basename:"/react-first-app"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(w,null)),r.a.createElement("section",{className:"main"},r.a.createElement(q,null))),r.a.createElement("footer",null,r.a.createElement(A,null))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9b8048d4.chunk.js.map