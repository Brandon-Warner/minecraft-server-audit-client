(this["webpackJsonpminecraft-server-app"]=this["webpackJsonpminecraft-server-app"]||[]).push([[0],{113:function(e,t){},114:function(e,t){},144:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),c=n(17),o=n(47),i=n(82),s=n(83),l=function(e){return{type:"GET_NAMES",data:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NAMES":return t.data;case"RESET_NAMES":var n=[];return n;default:return e}},u=n(91),d=n(18),b=n.n(d),f=n(30),h=function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"RESET_DATA"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION.DATA: ",t.data),t.type){case"GET_DATA":return[].concat(Object(u.a)(e),[t.data]);case"RESET_DATA":var n=[];return n;default:return e}},p=function(e){return{type:"SET_FILTER",data:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NO_FILTER",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEXT_FILTER":case"SET_FILTER":case"NO_FILTER":return t.data;default:return e}},m=Object(o.combineReducers)({names:j,data:O,filter:x}),v=Object(o.createStore)(m,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(i.a))),g=n(41),y=n(0),E=n(61),T=n(44),A=n.n(T),k="https://fast-thicket-91718.herokuapp.com/api",w=function(e){return!1===e.online?"N/A":e.players.online},L=function(e){return!1===e.online?"N/A":e.players.max},R=function(e){return!0===e?"yes":"no"},S=function(e){if(null!==e){var t=new Date(e),n=t.getDate(),a=t.getMonth()+1;return n<10&&(n="0"+n),a<10&&(a="0"+a),a+"/"+n+"/"+t.getFullYear()}return"N/A"},_={fetchData:function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchData name: ",t),e.next=3,A.a.get("".concat(k,"/serverinfo/").concat(t));case 3:return n=e.sent,a=n.data,e.next=7,A.a.get("".concat(k,"/blockinfo/").concat(t));case 7:return r=e.sent,c=r.data,console.log("fetch data: ",a,c),o={name:t,hostname:a.hostname,ip:a.ip,version:a.version||"N/A",active:(i=a.online,!0===i?"yes":"no"),playersOnline:w(a),playersMax:L(a),blocked:R(c.blocked),blockTime:S(c.lastBlocked)},console.log("allData: ",o),e.abrupt("return",o);case 13:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}()},N=n(181),I=n(188),D=n(183),F=n(189),C=n(190),B=n(186),M=n(184),V=n(191),P=n(2),G=function(){return Object(P.jsx)("h1",{children:"Minecraft Server Audit"})},K=function(){return Object(P.jsxs)("h3",{children:["Upload CSV File w/ Server URLs in a Single Column",Object(P.jsx)("br",{})]})},U=n(177),H=n(88),z=n.n(H),J=function(e){var t=e.onChange,n=e.refreshData;return Object(P.jsxs)("div",{children:[Object(P.jsxs)(U.a,{variant:"contained",color:"primary",component:"label",children:[Object(P.jsx)("input",{type:"file",accept:".csv, .xlsx, .xls",style:{display:"none"},onChange:t,multiple:!0}),"Upload File ",Object(P.jsx)(z.a,{style:{marginLeft:"5px"}})]}),Object(P.jsx)(U.a,{variant:"contained",color:"inherit",size:"small",style:{marginLeft:"10px"},onClick:n,children:"REFRESH DATA"})]})},W=n(192),X=n(89),q=n.n(X),Y=Object(N.a)((function(){return{filterTextField:{width:"33%"},filterSearch:{width:"75%"}}})),Q=function(){var e=Y(),t=Object(c.b)();return Object(P.jsxs)("form",{className:e.filterSearch,noValidate:!0,autoComplete:"off",children:[Object(P.jsx)(W.a,{className:e.filterTextField,id:"standard-basic",label:"Search Names",onChange:function(e){e.preventDefault();var n=e.target.value;t(function(e){return{type:"TEXT_FILTER",data:e}}(n))}}),Object(P.jsx)(q.a,{color:"primary"})]})},Z=n(182),$=n(194),ee=n(195),te=n(193),ne=Object(N.a)((function(){return{filterCheckBox:{margin:"0 auto"}}})),ae=function(){var e=ne(),t=Object(c.b)(),n=Object(c.c)((function(e){return e.filter}));return Object(P.jsx)(Z.a,{className:e.filterCheckBox,component:"fieldset",children:Object(P.jsxs)($.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(P.jsx)(ee.a,{value:"NO_FILTER",control:Object(P.jsx)(te.a,{color:"primary"}),label:"All",labelPlacement:"top",checked:"NO_FILTER"===n,onClick:function(){return t(p("NO_FILTER"))}}),Object(P.jsx)(ee.a,{value:"BLOCKED_FILTER",control:Object(P.jsx)(te.a,{color:"primary"}),label:"Blocked",labelPlacement:"top",onClick:function(){return t(p("BLOCKED_FILTER"))}}),Object(P.jsx)(ee.a,{value:"AVAILABLE_FILTER",control:Object(P.jsx)(te.a,{color:"primary"}),label:"Active",labelPlacement:"top",onClick:function(){return t(p("AVAILABLE_FILTER"))}})]})})},re=n(185),ce=n(90),oe=n.n(ce),ie=Object(N.a)((function(){return{buttonLoading:{color:"white"}}})),se=function(e){var t=e.hostname,n=Object(y.useState)(!1),a=Object(g.a)(n,2),r=a[0],c=a[1],o=Object(y.useState)(!1),i=Object(g.a)(o,2),s=i[0],l=i[1],j=Object(y.useState)(""),u=Object(g.a)(j,2),d=u[0],h=u[1],O=ie(),p=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,A.a.get("https://fast-thicket-91718.herokuapp.com/api/offlineinfo/".concat(t));case 4:n=e.sent,a=n.data,console.log("ACTIVE BUTTON response: ",a),a.success?a.offlineMode?h("Server is using offline mode"):(h("Server aborted the join process, it's either using online mode or a whitelist"),a.reason&&d.concat("reason was: ".concat(a.reason))):h("Error while checking offline-mode status"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h("error connecting to server - please try again later");case 13:c(!r),l(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return console.log("fetchResponse: ",d),Object(P.jsxs)(M.a,{children:[Object(P.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){return p(t)},children:s?Object(P.jsx)(re.a,{className:O.buttonLoading}):"Mode"}),Object(P.jsx)("div",{children:Object(P.jsxs)(oe.a,{isOpen:r,onRequestClose:function(){return c(!1)},ariaHideApp:!1,style:{content:{fontFamily:"Roboto",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:[Object(P.jsx)("h2",{children:"Active Status"}),d,Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(U.a,{variant:"outlined",color:"secondary",size:"small",onClick:function(){return c(!r)},children:"close"})]})})]})},le=Object(N.a)((function(){return{hidden:{display:"none"},rows:{backgroundColor:"white"}}})),je=function(e){var t=e.data,n=e.loading;console.log("DATAROW DATA: ",t);var a=le(),r=n?a.hidden:a.rows;return Object(P.jsxs)(B.a,{className:"".concat(r),children:[Object(P.jsx)(M.a,{children:t.name}),Object(P.jsx)(M.a,{children:t.hostname}),Object(P.jsx)(M.a,{children:t.ip}),Object(P.jsx)(M.a,{children:t.version}),Object(P.jsx)(M.a,{children:t.active}),Object(P.jsx)(M.a,{children:t.playersOnline}),Object(P.jsx)(M.a,{children:t.playersMax}),Object(P.jsx)(M.a,{children:t.blocked}),Object(P.jsx)(M.a,{children:t.blockTime}),Object(P.jsx)(se,{hostname:t.hostname})]})},ue=n(187),de=Object(N.a)((function(){return{hidden:{display:"none"},rows:{backgroundColor:"white"}}})),be=function(e){var t=e.loading,n=e.name,a=de(),r=t?a.rows:a.hidden;return Object(P.jsxs)(B.a,{className:"".concat(r),children:[Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})}),Object(P.jsx)(M.a,{children:Object(P.jsx)(ue.a,{})})]},n)},fe=Object(N.a)((function(){return{container:{fontFamily:"Roboto",border:"0"},table:{width:"100%",height:"100%",overflow:"hidden"},tableBody:{display:"block",overflow:"auto"},headers:{fontStyle:"bold",backgroundColor:"#eee"},filterRow:{display:"flex",flexDirection:"row"},links:{margin:"10"}}})),he=function(){var e=Object(y.useState)(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],r=fe(),o=Object(c.b)(),i=Object(c.c)((function(e){return e.filter})),s=Object(c.c)((function(e){return e.names})),j=Object(c.c)((function(e){return"NO_FILTER"===i?e.data:"BLOCKED_FILTER"===i?e.data.filter((function(e){return"yes"===e.blocked})):"AVAILABLE_FILTER"===i?e.data.filter((function(e){return"yes"===e.active})):"NO_FILTER"!==i&&"BLOCKED_FILTER"!==i&&"AVAILABLE_FILTER"!==i?e.data.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})):void 0}));Object(y.useEffect)((function(){s.map((function(e){return _.fetchData(e).then((function(e){return o(function(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"GET_DATA",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))})).catch((function(e){return console.log("error: ",e.message)}))})),console.log("firing useEffect")}),[s,o]),Object(y.useEffect)((function(){u(s,j)}));var u=function(e,t){e.length>0&&t.length>0&&e.length===t.length&&a(!1)};return console.log("App component names: ",s),console.log("App component data: ",j),console.log("loading status: ",n),Object(P.jsxs)("div",{className:r.container,children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(G,{}),Object(P.jsx)(K,{}),Object(P.jsx)(J,{onChange:function(e){e.preventDefault(),a(!0),o({type:"RESET_NAMES"}),o(h());var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t=e.target.result,n=E.read(t,{type:"binary"}),a=n.SheetNames[0],r=n.Sheets[a],c=E.utils.sheet_to_csv(r,{header:1});console.log("data from file upload: ",c);var i=c.split(/\r\n|\n/).filter((function(e){return""!==e&&void 0!==e}));o(l(i))},n.readAsBinaryString(t)},refreshData:function(e){e.preventDefault(),a(!0);var t=s;console.log("refreshData names: ",t),o(h()),o({type:"RESET_NAMES"}),setTimeout((function(){o(l(t))}),200)}}),Object(P.jsxs)("div",{className:r.filterRow,children:[Object(P.jsx)(Q,{}),Object(P.jsx)(ae,{})]}),Object(P.jsx)(I.a,{component:D.a,children:Object(P.jsxs)(F.a,{className:r.table,"aria-label":"Server Info",children:[Object(P.jsx)(C.a,{className:r.headers,children:Object(P.jsxs)(B.a,{children:[Object(P.jsx)(M.a,{children:"Name"}),Object(P.jsx)(M.a,{children:"Hostname"}),Object(P.jsx)(M.a,{children:"Ip"}),Object(P.jsx)(M.a,{children:"Version"}),Object(P.jsx)(M.a,{children:"Active"}),Object(P.jsx)(M.a,{children:"Players Online"}),Object(P.jsx)(M.a,{children:"Players Max"}),Object(P.jsx)(M.a,{children:"Blocked"}),Object(P.jsx)(M.a,{children:"Blocked Date"}),Object(P.jsx)(M.a,{children:"Mode"})]},"headers")}),Object(P.jsxs)(V.a,{children:[s.map((function(e){return Object(P.jsx)(be,{loading:n},e)})),j.map((function(e){return Object(P.jsx)(je,{data:e,loading:n},e.name)}))]})]})})]}),Object(P.jsx)("div",{style:{textAlign:"center"},children:Object(P.jsxs)("footer",{style:{display:"inline",width:"100%"},children:[Object(P.jsx)("a",{style:{margin:"0 10px"},href:"https://api.mcsrvstat.us/",target:"_blank",rel:"noopener noreferrer",children:"Server Data API"}),"  ",Object(P.jsx)("a",{style:{margin:"0 10px"},href:"https://ismyserverblocked.com/",target:"_blank",rel:"noopener noreferrer",children:"Block/Offline Data API"})]})})]})};r.a.render(Object(P.jsx)(c.a,{store:v,children:Object(P.jsx)(he,{})}),document.getElementById("root"))},66:function(e,t){}},[[144,1,2]]]);
//# sourceMappingURL=main.b3fcfcb2.chunk.js.map