(this.webpackJsonpguilded=this.webpackJsonpguilded||[]).push([[0],{142:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),s=n.n(a),i=n(25),c=n.n(i),o=(n(142),n(143),n(94)),u=n(136),l=n(226),d=n(87);function h(e){return e.ticker}function j(e,t){return e[t].selectedItem}function f(e){return h(e).activeEvents}var v="Morning",g="Afternoon",p="Evening",m="Night",b=["Decembary","Aprimay","Jugust","Septober"],y="QUEST",O="EVENT",x={MALE:"male",FEMALE:"female"};function k(e,t){return e.year===t[0]&&e.month===t[1]&&e.day===t[2]}function S(e,t){return C(T(e)+t)}function w(e){return[e.year,e.month,e.day,e.hour]}function T(e){return 1440*e[0]+360*e[1]+24*(e[2]-1)+e[3]}function C(e){return[Math.floor(e/1440),Math.floor(e/360%4),Math.floor(e/24%15)+1,e%24]}function I(e,t,n,r,a,s,i){return{start:e,end:t,name:n,description:r,type:a,startHandler:s,endHandler:i}}function M(e,t,n){return I(t,n,e.name,e.description,e.type,e.startHandler,e.endHandler)}var E;function P(e){var t=h(e);t.todayEvents=t.events.filter((function(e){return k(t,e.start)||k(t,e.end)}))}function q(e,t){t.isPaused||(h(t).stats.ticks++,h(t).hour++,e("increaseStageProgress"),5===t.stageProgress&&(t.ticker.advanceStage(e,t),e("resetStageProgress")),function(e,t){var n=h(t);n.todayEvents.filter((function(e){return e.start[3]===n.hour||e.end[3]===n.hour})).forEach((function(r){k(n,r.start)&&r.start[3]===n.hour?(r.startHandler(e,t,r),n.activeEvents.push(r)):(r.endHandler(e,t,r),n.events.splice(n.events.indexOf(r),1),n.activeEvents.splice(n.activeEvents.indexOf(r),1))}))}(e,t))}function L(e,t){var n=h(t);if(n.currentStage===m)return F(e,t);n.currentStage=function(e){switch(e){case v:return g;case g:return p;case p:return m}}(n.currentStage)}function F(e,t){var n=h(t);n.currentStage=v,n.hour=0,n.day++,n.day>15&&function(e,t){var n=h(t);n.day=1,n.month++,4===n.month&&function(e,t){var n=h(t);n.month=0,n.year++}(0,t)}(0,t),P(t)}var N={initialize:function(e){E={currentStage:v,hour:0,day:1,month:0,year:475,todayEvents:[],activeEvents:[],events:[],stats:{totalEvents:0,ticks:0},callADay:F,advanceStage:L,tick:q};var t=I([475,0,5,8],[475,0,6,0],"Fifth of Decembrary","A very beautiful festivity",O,(function(e,t,n){console.log("It's ".concat(n.name,"  !!"))}),(function(e,t,n){var r=h(t);r.events.push(M(n,[r.year+1,0,5,8],[r.year+1,0,6,0]))})),n=I([475,0,1,8],[475,0,8,8],"First Week of the year!","The very first week of the year",O,(function(e,t,n){console.log("It's ".concat(n.name,"  !!"))}),(function(e,t,n){var r=h(t);r.events.push(M(n,[r.year+1,0,1,8],[r.year+1,0,8,1]))}));return E.events.push(t,n),P({ticker:E}),E}};var G=n(75),$=n(38),A=n.n($),H=["Aekkein","Erna","Gica","Iris","Laen","Oanei","Urusla","Unt","Zy","Giny","Teni","Tania","Tenisa","Falish","Tirs","Bera","Boria","Terkia","Tronash","Si","Gi","Ti","Fi","Di","Mi","Peli","Irnia","Beth","Riven","Vi","Lio"],Q=["Anttirnet","Carnil","Estiv","Halt","Hoijof","Laen","Lisiern","Berin","Ton","Shome","Regit","Lurin","Maers","Musten","Oanei","Raesh","Terio","Unt","Ust","Redik","James","Loki","Tem","Regot","Josh","Tom","Jei","Lioth"],B=["Golpeo","Anorda","Severnin","Part","Kek-vek-loah","Vaen","Nerivin","Haeshi","Vin-ti-selh","Ver-to","Vintoret","Da Teri","Von Bien","Maer","Serisn","Vintaren","Bertis","Tetirit","Tornet","Bellabi","Geron","Tornes","Gorez","Lorez","Gareth"];function D(e,t){return Math.round(function(e,t){return Math.random()*(t-e)+e}(e,t))}function V(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x.MALE;return e==x.MALE?Q[D(0,Q.length-1)]:e==x.FEMALE?H[D(0,H.length-1)]:"Bernt"}function z(){return B[D(0,B.length-1)]}function J(e,t){return function(n){var r=w(h(n));return r[3]++,I(r,S(r,t),"Quest Traveling","None",y,(function(n,r,a){e.log.push("Going to travel for ".concat(t," hours."))}),(function(t,n,r){e.log.push("We arrived at our destination"),t({type:"advanceQuest",payload:e})}))}}function U(e,t){return function(t){var n=w(h(t));return n[3]++,I(n,S(n,3),"Executing Quest","None",y,(function(t,n,r){e.log.push("Started searching for the thing.")}),(function(t,n,r){e.log.push("Found the thing."),t({type:"advanceQuest",payload:e})}))}}function K(e,t){return[J(e,t),U(e,0),J(e,t)]}var W=0;function Y(){var e={id:++W,name:"No name",description:"No Description",steps:[],reward:0,questValue:0,active:!1,completed:!1,assignee:null,log:[]},t=function(e){var t=D(2,8);return{name:"Go Fetch",description:"Go find something somewhere",reward:Math.floor(2*t+D(-3,4)),questValue:t,steps:K(e,t)}}(e),n=t.name,r=t.description,a=t.reward,s=t.steps;return e.name=n,e.description=r,e.reward=a,e.steps=s,e}function Z(e,t){var n=t.steps[0](e),r=h(e);r.events.push(n),r.todayEvents.push(n)}function X(e,t){var n="string"===typeof t?{type:t}:t;switch(["increaseStageProgress","resetStageProgress"].includes(n.type)||console.log(n),n.type){case"changeSelectedMenu":return A()(e,{selectedItem:{$set:n.payload}});case"increaseStageProgress":return A()(e,{stageProgress:{$set:e.stageProgress+1}});case"resetStageProgress":return A()(e,{stageProgress:{$set:0}});case"switchPause":return A()(e,{isPaused:{$set:!e.isPaused}});case"changeStageSpeed":return A()(e,{stageSpeed:{$set:e.stageSpeed+n.payload}})}switch(n.type){case"changeSelectedContentMenu":return A()(e,Object(G.a)({},n.payload.stateNamespace,{selectedItem:{$set:n.payload.key}}))}switch(n.type){case"askFounding":return A()(e,{guild:{stats:{gold:{$set:25}}}});case"addGoldToMember":var r=e.guild.stats.members.indexOf(n.payload),a=A()(n.payload,{gold:{$set:n.payload.gold+5}});return A()(e,{guild:{stats:{members:{$splice:[[r,1,a]]},gold:{$set:e.guild.stats.gold-5}}}});case"hireGuildMember":return A()(e,{guild:{stats:{members:{$push:[n.payload]},gold:{$set:e.guild.stats.gold-5*n.payload.level}}},tavern:{recruits:{$splice:[[e.tavern.recruits.indexOf(n.payload),1]]}}})}switch(n.type){case"changeSelectedCityMenu":return A()(e,{city:{selectedItem:{$set:n.payload}}})}switch(n.type){case"addQuest":return A()(e,{quests:{quests:{$push:n.payload}}});case"removeQuest":return A()(e,{quests:{quests:{$splice:[[e.quests.quests.indexOf(n.payload),1]]}}});case"startQuest":return function(e,t){t.active||(t.active=!0,Z(e,t))}(e,n.payload),A()(e,{quests:{quests:{$splice:[[e.quests.quests.indexOf(n.payload),1,n.payload]]}}});case"advanceQuest":return function(e,t){if(t.steps.shift(),0===t.steps.length)return function(e){e.completed=!0,e.active=!1,e.log.push("Quest finished")}(t);Z(e,t)}(e,n.payload),A()(e,{quests:{quests:{$splice:[[e.quests.quests.indexOf(n.payload),1,n.payload]]}}})}return console.log("returning Default"),e}var _=n(221),ee=n(227);function te(){var e=Object(a.useContext)(ze).dispatch;return Object(r.jsxs)(ee.a,{className:"CityMenu",onSelect:function(t){var n=t.key;e({type:"changeSelectedCityMenu",payload:n})},theme:"light",mode:"inline",defaultSelectedKeys:["Overview"],children:[Object(r.jsx)(ee.a.Item,{children:"Overview"},"Overview"),Object(r.jsx)(ee.a.Item,{children:"Guild"},"Guild"),Object(r.jsx)(ee.a.Item,{children:"Market"},"Market"),Object(r.jsx)(ee.a.Item,{children:"Tavern"},"Tavern")]})}function ne(){var e=Object(a.useContext)(ze),t=e.state;e.dispatch;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Overview"}),Object(r.jsx)("h3",{children:"Active Events"}),f(t).map((function(e){return Object(r.jsx)("div",{children:e.name},e.name)}))]})}var re=n(109),ae=n(218),se=n(223);function ie(e){var t=[{name:"name",value:e.name},{name:"gold",value:e.gold},{name:"members",value:e.members.length}];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ae.a,{orientation:"left",children:"Stats"}),Object(r.jsx)(se.b,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return Object(r.jsxs)(se.b.Item,{children:[e.name,": ",e.value]})}})]})}function ce(){var e=Object(a.useContext)(ze),t=e.state,n=e.dispatch,s=t.guild.stats,i=s.gold,c=s.members;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ie,Object(re.a)({},t.guild.stats)),Object(r.jsx)("br",{}),0===i&&1===c.length?Object(r.jsx)(l.a,{type:"primary",onClick:function(){n({type:"askFounding"})},children:"Ask for founding to the city council"}):null]})}var oe=n(224),ue=n(225),le=n(222),de=n(228);function he(e,t){return t>e?"success":t<e?"danger":"default"}function je(e){return Object.keys(e.stats).map((function(t){var n=e.stats[t],a=e.computedStats[t];return Object(r.jsxs)(oe.a.Text,{type:he(n,a),children:[t,": ",a]},t)}))}function fe(e){return Object.keys(e.stats).reduce((function(t,n){return t+e.stats[n]}),0)-e.stats.health}function ve(e){return Object.keys(e.data).map((function(t){var n=e.data[t];return Object(r.jsxs)(oe.a.Text,{children:[t,": ",n]},t)}))}var ge={width:200,float:"left",margin:5};var pe=oe.a.Text,me=ue.a.Panel;function be(){var e=Object(a.useContext)(ze),t=e.state,n=e.dispatch;return Object(r.jsx)(r.Fragment,{children:t.guild.stats.members.map((function(e,t){return Object(r.jsx)(le.a,{style:ge,title:e.name,extra:Object(r.jsx)("div",{style:{width:15,height:15,background:e.color}}),children:Object(r.jsxs)(de.b,{style:{width:"100%"},direction:"vertical",children:[Object(r.jsxs)(pe,{children:["Gold: ",e.gold," ",Object(r.jsx)(pe,{style:{fontSize:18,cursor:"pointer"},onClick:function(){n({type:"addGoldToMember",payload:e})},children:"+"})]}),Object(r.jsxs)(pe,{children:["Level: ",e.level," (",e.exp," / ",2*e.level,") ",e.exp>2*e.level?"\u25b2":null]}),Object(r.jsxs)(pe,{children:["Type: ",e.type]}),Object(r.jsxs)(pe,{children:["Task: ",e.task?e.task:"None"]}),Object(r.jsx)(ue.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(me,{header:"Stats (".concat(fe(e),")"),children:Object(r.jsx)(de.b,{style:{width:"100%"},direction:"vertical",children:je(e)})},"1")}),Object(r.jsx)(ue.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(me,{header:"Data",children:Object(r.jsx)(de.b,{style:{width:"100%"},direction:"vertical",children:ve(e)})},"2")})]})},t)}))})}function ye(e){var t=e.defaultItem,n=e.menuItems,s=e.stateNamespace,i=Object(a.useContext)(ze).dispatch;return Object(r.jsx)(ee.a,{onSelect:function(e){var t=e.key;i({type:"changeSelectedContentMenu",payload:{key:t,stateNamespace:s}})},theme:"light",mode:"horizontal",defaultSelectedKeys:[t],children:n.map((function(e){return Object(r.jsx)(ee.a.Item,{children:e.name},e.name)}))})}var Oe=_.a.Header,xe=_.a.Content;function ke(e,t,n,a){var s=n.find((function(e){return e.name===t[a].selectedItem}));return s?Object(r.jsx)(s,{}):"error"}function Se(e){var t=e.menuItems,n=e.stateNamespace,s=Object(a.useContext)(ze),i=s.state;s.dispatch;return Object(r.jsxs)(_.a,{style:{background:"white"},children:[Object(r.jsx)(Oe,{theme:"light",style:{background:"white",padding:0},children:Object(r.jsx)(ye,{defaultItem:j(i,n),menuItems:t,stateNamespace:n})}),Object(r.jsx)(xe,{style:{background:"white",padding:10,margin:"24px 16px 0",overflow:"initial"},children:ke(0,i,t,n)})]})}function we(){return Object(r.jsx)(Se,{menuItems:[ce,be],stateNamespace:"guild"})}function Te(){return"hola"}var Ce=oe.a.Text;function Ie(){var e=Object(a.useContext)(ze);e.state,e.dispatch;return Object(r.jsx)(Ce,{children:"Welcome to the Tavern, please take a seat!"})}var Me=oe.a.Title,Ee=oe.a.Text,Pe=ue.a.Panel;function qe(){var e=Object(a.useContext)(ze),t=e.state,n=e.dispatch;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Me,{level:4,children:"Available Recruits"}),t.tavern.recruits.map((function(e,a){var s=5*e.level,i=t.guild.stats.gold>=s;return Object(r.jsx)(le.a,{style:ge,title:"".concat(e.name," ").concat(e.surname),extra:Object(r.jsx)("div",{style:{width:15,height:15,background:e.color}}),children:Object(r.jsxs)(de.b,{style:{width:"100%"},direction:"vertical",children:[Object(r.jsxs)(Ee,{children:["Level: ",e.level," (",e.exp," / ",2*e.level,")"," ",e.exp>2*e.level?"\u25b2":null]}),Object(r.jsxs)(Ee,{children:["Type: ",e.type]}),Object(r.jsx)(ue.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(Pe,{header:"Stats (".concat(fe(e),")"),children:Object(r.jsx)(de.b,{style:{width:"100%"},direction:"vertical",children:je(e)})},"1")}),Object(r.jsxs)(l.a,{type:"primary",disabled:!i,onClick:function(){n({type:"hireGuildMember",payload:e}),t.notify.info({message:"You just hired ".concat(e.name," for ").concat(s," gold coins")})},children:["Hire for ",s," gold coins"]})]})},a)}))]})}oe.a.Title;var Le=oe.a.Text,Fe=ue.a.Panel;function Ne(){var e=Object(a.useContext)(ze),t=e.state,n=e.dispatch;return Object(r.jsx)(r.Fragment,{children:t.quests.quests.map((function(e,a){return Object(r.jsx)(le.a,{style:ge,title:e.name,children:Object(r.jsxs)(de.b,{style:{width:"100%"},direction:"vertical",children:[Object(r.jsxs)(Le,{children:["name: ",e.name]}),Object(r.jsxs)(Le,{children:["description: ",e.description]}),Object(r.jsxs)(Le,{children:["reward: ",e.reward]}),Object(r.jsx)(ue.a,{ghost:!0,style:{marginLeft:-15},children:Object(r.jsx)(Fe,{header:"Quest Log ".concat(e.log.length),children:Object(r.jsx)(de.b,{style:{width:"100%"},direction:"vertical",children:e.log.map((function(e){return Object(r.jsx)("div",{children:e},e)}))})},"1")}),Object(r.jsx)(l.a,{type:"primary",onClick:function(){n({type:"startQuest",payload:e}),t.notify.info({message:"You just started ".concat(e.name)})},children:"Start quest"})]})},a)}))})}function Ge(){return Object(r.jsx)(Se,{menuItems:[Ie,qe,Ne],stateNamespace:"tavern"})}var $e=_.a.Sider,Ae=_.a.Content;function He(){var e=Object(a.useContext)(ze),t=e.state,n=e.dispatch;return Object(r.jsxs)(_.a,{children:[Object(r.jsx)($e,{theme:"light",style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:Object(r.jsx)(te,{})}),Object(r.jsx)(_.a,{style:{marginLeft:200,height:"100vh"},children:Object(r.jsx)(Ae,{style:{background:"white",padding:10,margin:"24px 16px 0",overflow:"initial"},children:Qe(n,t)})})]})}function Qe(e,t){switch(t.city.selectedItem){case"Overview":return Object(r.jsx)(ne,{});case"Guild":return Object(r.jsx)(we,{});case"Market":return Object(r.jsx)(Te,{});case"Tavern":return Object(r.jsx)(Ge,{});default:return"No content for City"}}var Be=0;function De(){return Math.random()>.5?"warrior":"mage"}function Ve(){return{health:D(8,10),strength:D(1,3),willpower:D(1,3),endurance:D(1,3),agility:D(1,3)}}function Re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x[D(0,1)],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:V(),a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:De(),s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Ve(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{missions:0,daysInGuild:0};return{id:Be++,sex:t,name:e||R(t),surname:n,color:r,items:[],gold:0,exp:0,level:1,type:a,task:null,stats:s,computedStats:s,data:i}}var ze=s.a.createContext();function Je(){var e=u.a.useNotification(),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useReducer)(X,{guild:{stats:{name:"Tainor",gold:0,members:[Re("Hoijof","indigo")],items:[]},selectedItem:"Overview"},city:{selectedItem:"Overview"},tavern:{selectedItem:"Overview",recruits:[1,2,3,4].map((function(){return Re()}))},quests:{quests:[Y(),Y(),Y(),Y(),Y()],stats:{questsCreated:0,questStarted:0,questsCompleted:0}},selectedCity:"City",day:0,stageSpeed:500,stageProgress:0,isPaused:!1,notify:n,ticker:N.initialize()}),c=Object(o.a)(i,2),h=c[0],j=c[1];return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){h.ticker.tick(j,h)}),h.stageSpeed),Object(d.a)("space",(function(){return j("switchPause")})),Object(d.a)("+",{splitKey:"-"},(function(e){console.log("you pressed +")})),Object(d.a)("*",(function(e){"+"===e.key&&j({type:"changeStageSpeed",payload:-25}),"-"===e.key&&j({type:"changeStageSpeed",payload:25})})),Object(r.jsxs)(ze.Provider,{value:{state:h,dispatch:j},children:[s,Ue(h),Object(r.jsxs)("div",{id:"TickerBar",style:{position:"absolute",left:0,bottom:0,width:"100%"},children:[Object(r.jsxs)("div",{children:[h.ticker.day," / ",b[h.ticker.month]," / ",h.ticker.year]}),Object(r.jsxs)("div",{children:["Hour: ",h.ticker.hour,":00"]}),Object(r.jsxs)("div",{children:["Time of The Day: ",h.ticker.currentStage]}),Object(r.jsx)(l.a,{onClick:function(){j("switchPause")},children:h.isPaused?"Resume":"Pause"}),Object(r.jsx)("br",{}),Object(r.jsx)(l.a,{onClick:function(){j({type:"changeStageSpeed",payload:10})},children:"-"}),Object(r.jsxs)("span",{children:[" Speed: ",h.stageSpeed," "]}),Object(r.jsx)(l.a,{onClick:function(){j({type:"changeStageSpeed",payload:-10})},children:"+"})]})]})}function Ue(e){switch(e.selectedCity){case"City":return Object(r.jsx)(He,{});default:return"No city to render"}}var Ke=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(Je,{})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};c.a.render(Object(r.jsx)(Ke,{}),document.getElementById("root")),We()}},[[215,1,2]]]);
//# sourceMappingURL=main.eb8c915b.chunk.js.map