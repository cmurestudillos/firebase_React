(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(79),c=a.n(l),o=a(176),i=a(177),s=(a(87),a(33),a(19)),m=a(20),u=a(22),d=a(21),h=a(23),p=a(175),E=a(50);E.initializeApp({apiKey:"AIzaSyAIlpXTVy3-W1Yx3X_9ss9JvvdyldSSinc",authDomain:"crud-react-c1d74.firebaseapp.com",databaseURL:"https://crud-react-c1d74.firebaseio.com",projectId:"crud-react-c1d74",storageBucket:"crud-react-c1d74.appspot.com"}),E.firestore().settings({timestampsInSnapshots:!0});var b=E;function f(e){return r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("i",{className:"fa fa-anchor w3-padding-64 w3-text-red"}," "))}var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var a=e.data(),n=a.title,r=a.description,l=a.author;t.push({key:e.id,doc:e,title:n,description:r,author:l})}),a.setState({boards:t})},a.ref=b.firestore().collection("articulos"),a.unsubscribe=null,a.state={boards:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){return r.a.createElement("div",{className:"w3-row-padding w3-padding-64 w3-container"}," ",this.state.boards.map(function(e){return r.a.createElement("div",{key:e.key,className:"w3-content"},r.a.createElement("div",{className:"w3-twothird"},r.a.createElement("h1",null," ",e.author," "),r.a.createElement("h5",{className:"w3-padding-32"}," ",r.a.createElement(p.a,{to:"/show/".concat(e.key)}," ",e.title," ")),r.a.createElement("p",{className:"w3-text-grey"}," ",e.description," ")),r.a.createElement(f,null))})," ")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(9),N=a(48),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState({board:t})},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.description,l=t.author;b.firestore().collection("articulos").doc(a.state.key).set({title:n,description:r,author:l}).then(function(e){a.setState({key:"",title:"",description:"",author:""}),a.props.history.push("/show/"+a.props.match.params.id)}).catch(function(e){console.error("Error al a\xf1adir el registro: ",e)})},a.state={key:"",title:"",description:"",author:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.firestore().collection("articulos").doc(this.props.match.params.id).get().then(function(t){if(t.exists){var a=t.data();e.setState({key:t.id,title:a.title,description:a.description,author:a.author})}else console.log("Documento no encontrado.")})}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("p",{className:"container border"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"accion"},"Modificacion del Registro"),r.a.createElement("div",{className:"col text-right"},r.a.createElement("h4",null,r.a.createElement(p.a,{to:"/show/".concat(this.state.key)},r.a.createElement("button",{className:"btn btn-outline-danger"},r.a.createElement(g.a,null)))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Autor:"),r.a.createElement("input",{type:"text",className:"form-control",name:"author",value:this.state.author,onChange:this.onChange,placeholder:"Autor..."}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"title"},"Titulo:"),r.a.createElement("input",{type:"text",className:"form-control",name:"title",value:this.state.title,onChange:this.onChange,placeholder:"Titulo..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Descripcion:"),r.a.createElement("textArea",{type:"text",className:"form-control",name:"description",onChange:this.onChange,placeholder:"Descripcion...",cols:"80",rows:"3"},this.state.description)))),r.a.createElement("div",{className:"fleft"},r.a.createElement(p.a,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger mt-3"},r.a.createElement(N.a,null)))),r.a.createElement("div",{className:" fright"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-success mt-3"},r.a.createElement(g.b,null))))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.description,l=a.author;e.ref.add({title:n,description:r,author:l}).then(function(t){e.setState({title:"",description:"",author:""}),e.props.history.push("/")}).catch(function(e){console.error("Error al a\xf1adir el registro: ",e)})},e.ref=b.firestore().collection("articulos"),e.state={title:"",description:"",author:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.author;return r.a.createElement("main",null,r.a.createElement("p",{className:"container border"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"accion"},"Alta de Registros")),r.a.createElement("div",{className:"col text-right"},r.a.createElement("h4",null,r.a.createElement(p.a,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger btnvolver",title:"Volver"},r.a.createElement(g.a,null)))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Autor:"),r.a.createElement("input",{type:"text",className:"form-control",name:"author",value:n,onChange:this.onChange,placeholder:"Autor..."}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"title"},"Titulo:"),r.a.createElement("input",{type:"text",className:"form-control",name:"title",value:t,onChange:this.onChange,placeholder:"Titulo..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Descripcion:"),r.a.createElement("textArea",{className:"form-control",name:"description",onChange:this.onChange,placeholder:"Descripcion...",cols:"80",rows:"3"},a)))),r.a.createElement("div",{className:"fleft"},r.a.createElement(p.a,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger mt-3"},r.a.createElement(N.a,null)))),r.a.createElement("div",{className:" fright"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-success mt-3"},r.a.createElement(g.b,null))))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={board:{},key:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.firestore().collection("articulos").doc(this.props.match.params.id).get().then(function(t){t.exists?e.setState({board:t.data(),key:t.id,isLoading:!1}):console.log("Registro no encontrado.")})}},{key:"delete",value:function(e){var t=this;b.firestore().collection("articulos").doc(e).delete().then(function(){console.log("Registro eliminado correctamente."),t.props.history.push("/")}).catch(function(e){console.error("Error al eliminar registro: ",e)})}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("p",{className:"container border"},r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-transparent"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"display-4"},r.a.createElement("strong",null,"Autor: "),this.state.board.author)),r.a.createElement("div",{className:"col text-right"},r.a.createElement("h4",null,r.a.createElement(p.a,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger",title:"Volver"},r.a.createElement(g.a,null)))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body lead"},r.a.createElement("p",{className:"titulo"},this.state.board.title),r.a.createElement("p",{className:"descripcion"},this.state.board.description),r.a.createElement(p.a,{to:"/edit/".concat(this.state.key)},r.a.createElement("button",{className:"btn btn-outline-warning",title:"Modificar"},r.a.createElement(g.c,null))),"\xa0",r.a.createElement("button",{onClick:this.delete.bind(this,this.state.key),className:"btn btn-outline-danger",title:"Eliminar"},r.a.createElement(g.f,null)))))))}}]),t}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"w3-top"},r.a.createElement("div",{className:"w3-bar w3-red w3-card w3-left-align w3-large"},r.a.createElement(p.a,{className:"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white",to:"/"},r.a.createElement(g.e,null)),r.a.createElement(p.a,{className:"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white",to:"/create"},r.a.createElement(g.g,null)),r.a.createElement("div",{className:"float-right mt-2"},r.a.createElement("img",{src:"img/reactjs.png",alt:"React.js",width:"35"})," - ",r.a.createElement("img",{src:"img/firebase.png",alt:"Firebase",width:"35"})))),r.a.createElement(i.a,{exact:!0,path:"/",component:v}),r.a.createElement(i.a,{path:"/edit/:id",component:w}),r.a.createElement(i.a,{path:"/create",component:y}),r.a.createElement(i.a,{path:"/show/:id",component:k}),r.a.createElement("footer",{className:"fixed-bottom"},r.a.createElement("div",{className:"fleft"},r.a.createElement("p",{className:"font-weight-bold"},"Copyright \xa9 2019")),r.a.createElement("div",{className:"fright"},r.a.createElement("p",{className:"font-weight-bold"},r.a.createElement("i",null,"Developed by:")," Carlos Mur ",r.a.createElement("a",{href:"https://github.com/cmurestudillos",rel:"noopener noreferrer",title:"Source"},r.a.createElement(g.d,null))," "))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){},82:function(e,t,a){e.exports=a(174)}},[[82,2,1]]]);
//# sourceMappingURL=main.3fa616a9.chunk.js.map