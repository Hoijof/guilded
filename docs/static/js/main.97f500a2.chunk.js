(this.webpackJsonpguilded=this.webpackJsonpguilded||[]).push([[0],{142:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(0),s=n.n(a),c=n(27),i=n.n(c),l=(n(142),n(143),n(95)),d=n(136),o=n(226),u=n(224),j=n(60);function h(e){return e.ticker}function g(e){return e.guild.selectedItem}function b(e,t){var n=h(t);if(n.currentStage===p.NIGHT)return O(e,t);n.currentStage=function(e){switch(e){case p.MORNING:return p.AFTERNOON;case p.AFTERNOON:return p.EVENING;case p.EVENING:return p.NIGHT}}(n.currentStage)}function O(e,t){var n=h(t);n.currentStage=p.MORNING,n.hour=0,n.day++,e("switchPause",!0)}function v(e){var t;return t={},Object(j.a)(t,p.MORNING,[]),Object(j.a)(t,p.AFTERNOON,[]),Object(j.a)(t,p.EVENING,[]),Object(j.a)(t,p.NIGHT,[]),t}function f(e,t){if(!t.isPaused)return 6===t.stageProgress&&(t.ticker.advanceStage(e,t),e("resetStageProgress")),h(t).stats.ticks++,h(t).hour++,e("increaseStageProgress")}var p={MORNING:"Morning",AFTERNOON:"Afternoon",EVENING:"Evening",NIGHT:"Night"},m={initialize:function(){return{currentStage:p.MORNING,hour:0,day:1,todayEvents:v({}),activeEvents:[],stats:{totalEvents:0,ticks:0},callADay:O,advanceStage:b,tick:f}}};var x=n(43),y=n.n(x);function S(e,t){var n="string"===typeof t?{type:t}:t;switch(["increaseStageProgress","resetStageProgress"].includes(n.type)||console.log(n),n.type){case"changeSelectedMenu":return y()(e,{selectedItem:{$set:n.payload}});case"increaseStageProgress":return y()(e,{stageProgress:{$set:e.stageProgress+1}});case"resetStageProgress":return y()(e,{stageProgress:{$set:0}});case"switchPause":return y()(e,{isPaused:{$set:!e.isPaused}});case"changeStageSpeed":return y()(e,{stageSpeed:{$set:e.stageSpeed+n.payload}})}switch(n.type){case"changeSelectedGuildMenu":return y()(e,{guild:{selectedItem:{$set:n.payload}}});case"askFounding":return y()(e,{guild:{stats:{gold:{$set:25}}}});case"addGoldToMember":var r=e.guild.stats.members.indexOf(n.payload),a=y()(n.payload,{gold:{$set:n.payload.gold+5}});return y()(e,{guild:{stats:{members:{$splice:[[r,1,a]]},gold:{$set:e.guild.stats.gold-5}}}});case"hireGuildMember":return y()(e,{guild:{stats:{members:{$push:[n.payload]},gold:{$set:e.guild.stats.gold-5*n.payload.level}}},tavern:{recruits:{$splice:[[e.tavern.recruits.indexOf(n.payload),1]]}}})}switch(n.type){case"changeSelectedCityMenu":return y()(e,{city:{selectedItem:{$set:n.payload}}})}return console.log("returning Default"),e}var k=n(220),w=n(227);function I(e){var t=e.dispatch;return Object(r.jsxs)(w.a,{className:"CityMenu",onSelect:function(e){var n=e.key;t({type:"changeSelectedCityMenu",payload:n})},theme:"light",mode:"inline",defaultSelectedKeys:["Overview"],children:[Object(r.jsx)(w.a.Item,{children:"Overview"},"Overview"),Object(r.jsx)(w.a.Item,{children:"Guild"},"Guild"),Object(r.jsx)(w.a.Item,{children:"Market"},"Market"),Object(r.jsx)(w.a.Item,{children:"Tavern"},"Tavern")]})}function N(e){e.dispatch,e.state;return"overview"}function M(e){var t=e.dispatch,n=e.defaultItem;return Object(r.jsxs)(w.a,{onSelect:function(e){var n=e.key;t({type:"changeSelectedGuildMenu",payload:n})},theme:"light",mode:"horizontal",defaultSelectedKeys:[n],children:[Object(r.jsx)(w.a.Item,{children:"Overview"},"Overview"),Object(r.jsx)(w.a.Item,{children:"Members"},"Members")]})}var T=n(110),P=n(217),G=n(222);function E(e){var t=[{name:"name",value:e.name},{name:"gold",value:e.gold},{name:"members",value:e.members.length}];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P.a,{orientation:"left",children:"Stats"}),Object(r.jsx)(G.b,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return Object(r.jsxs)(G.b.Item,{children:[e.name,": ",e.value]})}})]})}function C(e){var t=e.dispatch,n=e.state,a=n.guild.stats,s=a.gold,c=a.members;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(E,Object(T.a)({},n.guild.stats)),Object(r.jsx)("br",{}),0===s&&1===c.length?Object(r.jsx)(o.a,{type:"primary",onClick:function(){t({type:"askFounding"})},children:"Ask for founding to the city council"}):null]})}var F=n(223),$=n(225),R=n(221),A=n(228);function H(e,t){return t>e?"success":t<e?"danger":"default"}function L(e){return Object.keys(e.stats).map((function(t){var n=e.stats[t],a=e.computedStats[t];return Object(r.jsxs)(F.a.Text,{type:H(n,a),children:[t,": ",a]},t)}))}function z(e){return Object.keys(e.stats).reduce((function(t,n){return t+e.stats[n]}),0)-e.stats.health}function D(e){return Object.keys(e.data).map((function(t){var n=e.data[t];return Object(r.jsxs)(F.a.Text,{children:[t,": ",n]},t)}))}var V={width:200,float:"left",margin:5},B=F.a.Text,J=$.a.Panel;function K(e){var t=e.dispatch,n=e.state;return Object(r.jsx)(r.Fragment,{children:n.guild.stats.members.map((function(e,n){return Object(r.jsx)(R.a,{style:V,title:e.name,extra:Object(r.jsx)("div",{style:{width:15,height:15,background:e.color}}),children:Object(r.jsxs)(A.b,{style:{width:"100%"},direction:"vertical",children:[Object(r.jsxs)(B,{children:["Gold: ",e.gold," ",Object(r.jsx)(B,{style:{fontSize:18,cursor:"pointer"},onClick:function(){t({type:"addGoldToMember",payload:e})},children:"+"})]}),Object(r.jsxs)(B,{children:["Level: ",e.level," (",e.exp," / ",2*e.level,") ",e.exp>2*e.level?"\u25b2":null]}),Object(r.jsxs)(B,{children:["Type: ",e.type]}),Object(r.jsxs)(B,{children:["Task: ",e.task?e.task:"None"]}),Object(r.jsx)($.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(J,{header:"Stats (".concat(z(e),")"),children:Object(r.jsx)(A.b,{style:{width:"100%"},direction:"vertical",children:L(e)})},"1")}),Object(r.jsx)($.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(J,{header:"Data",children:Object(r.jsx)(A.b,{style:{width:"100%"},direction:"vertical",children:D(e)})},"2")})]})},n)}))})}var W=k.a.Header,Y=k.a.Content;function q(e,t){switch(t.guild.selectedItem){case"Overview":return Object(r.jsx)(C,{dispatch:e,state:t});case"Members":return Object(r.jsx)(K,{dispatch:e,state:t});case"Market":return Object(r.jsx)(C,{dispatch:e,state:t});default:return"error"}}function Q(e){var t=e.dispatch,n=e.state;return Object(r.jsxs)(k.a,{style:{background:"white"},children:[Object(r.jsx)(W,{theme:"light",style:{background:"white",padding:0},children:Object(r.jsx)(M,{dispatch:t,defaultItem:g(n)})}),Object(r.jsx)(Y,{style:{background:"white",padding:10,margin:"24px 16px 0",overflow:"initial"},children:q(t,n)})]})}function U(){return"hola"}var X=F.a.Title,Z=F.a.Text,_=$.a.Panel;function ee(e){var t=e.dispatch,n=e.state;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Z,{children:"Welcome to the Tavern, please take a seat!"}),Object(r.jsx)(X,{level:4,children:"Available Recruits"}),n.tavern.recruits.map((function(e,a){var s=5*e.level,c=n.guild.stats.gold>=s;return Object(r.jsx)(R.a,{style:V,title:e.name,extra:Object(r.jsx)("div",{style:{width:15,height:15,background:e.color}}),children:Object(r.jsxs)(A.b,{style:{width:"100%"},direction:"vertical",children:[Object(r.jsxs)(Z,{children:["Level: ",e.level," (",e.exp," / ",2*e.level,") ",e.exp>2*e.level?"\u25b2":null]}),Object(r.jsxs)(Z,{children:["Type: ",e.type]}),Object(r.jsx)($.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(_,{header:"Stats (".concat(z(e),")"),children:Object(r.jsx)(A.b,{style:{width:"100%"},direction:"vertical",children:L(e)})},"1")}),Object(r.jsxs)(o.a,{type:"primary",disabled:!c,onClick:function(){t({type:"hireGuildMember",payload:e}),n.notify.info({message:"You just hired ".concat(e.name," for ").concat(s," gold coins")})},children:["Hire for ",s," gold coins"]})]})},a)}))]})}var te=k.a.Sider,ne=k.a.Content;function re(e){var t=e.dispatch,n=e.state;n.city;return Object(r.jsxs)(k.a,{children:[Object(r.jsx)(te,{theme:"light",style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:Object(r.jsx)(I,{dispatch:t})}),Object(r.jsx)(k.a,{style:{marginLeft:200,height:"100vh"},children:Object(r.jsx)(ne,{style:{background:"white",padding:10,margin:"24px 16px 0",overflow:"initial"},children:ae(t,n)})})]})}function ae(e,t){switch(t.city.selectedItem){case"Overview":return Object(r.jsx)(N,{dispatch:e,state:t});case"Guild":return Object(r.jsx)(Q,{dispatch:e,state:t});case"Market":return Object(r.jsx)(U,{dispatch:e,state:t});case"Tavern":return Object(r.jsx)(ee,{dispatch:e,state:t});default:return"No content"}}function se(e,t){return Math.round(Math.random()*(t-e)+e)}function ce(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var ie=0;function le(){return Math.random()>.5?"warrior":"mage"}function de(){return{health:se(8,10),strength:se(1,3),willpower:se(1,3),endurance:se(1,3),agility:se(1,3)}}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"name",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:le(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:de(),a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{missions:0,daysInGuild:0};return{id:ie++,name:e,color:t,items:[],gold:0,exp:0,level:1,type:n,task:null,stats:r,computedStats:r,data:a}}function ue(){var e=d.a.useNotification(),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useReducer)(S,{guild:{stats:{name:"Tainor",gold:0,members:[oe("Hoijof","indigo")],items:[]},selectedItem:"Overview"},city:{selectedItem:"Overview"},tavern:{recruits:[1,2,3,4,5,6,7,8,9,10].map((function(){return oe()}))},selectedCity:"City",day:0,stageSpeed:500,stageProgress:0,isPaused:!1,notify:n,ticker:m.initialize()}),i=Object(l.a)(c,2),j=i[0],h=i[1];return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){j.ticker.tick(h,j)}),j.stageSpeed),Object(r.jsxs)(r.Fragment,{children:[s,je(h,j),Object(r.jsxs)("div",{id:"TickerBar",style:{position:"absolute",left:0,bottom:0,width:"100%"},children:[Object(r.jsxs)("div",{children:[" Day: ",j.ticker.day]}),Object(r.jsxs)("div",{children:["Hour: ",j.ticker.hour,":00"]}),Object(r.jsxs)("div",{children:["Time of The Day: ",j.ticker.currentStage]}),Object(r.jsx)(o.a,{onClick:function(){h("switchPause")},children:j.isPaused?"Resume":"Pause"}),Object(r.jsx)("br",{}),Object(r.jsx)(o.a,{onClick:function(){h({type:"changeStageSpeed",payload:10})},children:"-"}),Object(r.jsxs)("span",{children:[" Speed: ",j.stageSpeed," "]}),Object(r.jsx)(o.a,{onClick:function(){h({type:"changeStageSpeed",payload:-10})},children:"+"}),Object(r.jsx)(u.a,{percent:j.stageProgress,showInfo:!1,size:"small"})]})]})}function je(e,t){switch(t.selectedCity){case"City":return Object(r.jsx)(re,{dispatch:e,state:t});default:return"No city to render"}}var he=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(ue,{})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(he,{})}),document.getElementById("root")),ge()}},[[215,1,2]]]);
//# sourceMappingURL=main.97f500a2.chunk.js.map