(this.webpackJsonpguilded=this.webpackJsonpguilded||[]).push([[0],{150:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),s=n.n(r),c=n(26),i=n.n(c),o=(n(150),n(151),n(70)),u=n(144),l=n(95),d=n(104);function h(e){return e.ticker}function j(e,t){return e[t].selectedItem}function p(e){return h(e).activeEvents}function f(e){return e.guild}function v(e){return f(e).stats.members}function m(e){return e.quests.quests}function g(e){return m(e).filter((function(e){return e.accepted}))}var b="Morning",y="Afternoon",O="Evening",x="Night",S=["Decembary","Aprimay","Jugust","Septober"],k="QUEST",w="EVENT",q="Go Fetch",T={MALE:"male",FEMALE:"female"},C="Guild",M="Traveling",P="City",N="Camp";function E(e,t){return e.year===t[0]&&e.month===t[1]&&e.day===t[2]}function I(e,t){return G(Q(e)+t)}function A(e){return[e.year,e.month,e.day,e.hour]}function F(e){var t=e[2]>10?e[2]:"0".concat(e[2]);return"".concat(t,"/").concat(S[e[1]],"/").concat(e[0])}function L(e,t){return Q(t)-Q(e)}function Q(e){return 1440*e[0]+360*e[1]+24*(e[2]-1)+e[3]}function G(e){return[Math.floor(e/1440),Math.floor(e/360%4),Math.floor(e/24%15)+1,e%24]}function $(e,t,n,a,r,s,c){return{start:e,end:t,name:n,description:a,type:r,startHandler:s,endHandler:c}}function H(e,t,n){return $(t,n,e.name,e.description,e.type,e.startHandler,e.endHandler)}var D=["Aekkein","Erna","Gica","Iris","Laen","Oanei","Urusla","Unt","Zy","Giny","Teni","Tania","Tenisa","Falish","Tirs","Bera","Boria","Terkia","Tronash","Si","Gi","Ti","Fi","Di","Mi","Peli","Irnia","Beth","Riven","Vi","Lio"],R=["Anttirnet","Carnil","Estiv","Halt","Hoijof","Laen","Lisiern","Berin","Ton","Shome","Regit","Lurin","Maers","Musten","Oanei","Raesh","Terio","Unt","Ust","Redik","James","Loki","Tem","Regot","Josh","Tom","Jei","Lioth"],B=["Golpeo","Anorda","Severnin","Part","Kek-vek-loah","Vaen","Nerivin","Haeshi","Vin-ti-selh","Ver-to","Vintoret","Da Teri","Von Bien","Maer","Serisn","Vintaren","Bertis","Tetirit","Tornet","Bellabi","Geron","Tornes","Gorez","Lorez","Gareth"];function V(e,t){return Math.round(function(e,t){return Math.random()*(t-e)+e}(e,t))}function W(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function z(e){return V(0,100)<=e}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.MALE;return e==T.MALE?R[V(0,R.length-1)]:e==T.FEMALE?D[V(0,D.length-1)]:"Bernt"}function J(){return B[V(0,B.length-1)]}function K(e){var t=Object.keys(e);return t[t.length*Math.random()<<0]}var Y=n(43),Z=0;function X(){return Math.random()>.5?"warrior":"mage"}function _(){return{health:V(8,10),energy:V(8,10),strength:V(1,3),willpower:V(1,3),endurance:V(1,3),agility:V(1,3)}}function ee(e){var t=Object.values(e.stats).reduce((function(e,t){return e+t}),0);return 5*e.level+t}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T[V(0,1)],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J(),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:W(),r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:X(),s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:_(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{missions:0,yearsInGuild:0};return{id:Z++,sex:t,name:e||U(t),surname:n,color:a,items:[],gold:0,exp:0,level:1,type:r,task:null,location:C,stats:s,computedStats:Object(Y.a)({},s),data:c}}function ne(e){return"".concat(e.name," ").concat(e.surname)}function ae(e){var t=e.computedStats;return(t.endurance+t.agility).map(0,20,.5,3)}function re(e,t){e.computedStats.energy+=Math.floor(t),e.computedStats.energy<0?e.computedStats.energy=0:e.computedStats.energy>e.stats.energy&&(e.stats.computedEnergy=e.stats.energy)}function se(e){return e.exp>ce(e)}function ce(e){return 2*e.level}function ie(e){var t=e.computedStats.energy;e.computedStats=Object(Y.a)({},e.stats),e.computedStats.energy=t}function oe(e,t){return function(n){var a=A(h(n));a[3]++;var r=function(e){var t=e.computedStats.energy;return 0===t?0:Math.floor(t*ae(e))}(e.assignee),s=r>=t?t:r;return $(a,I(a,s),"Quest Traveling","None",k,(function(n,a,r){le(a,e,"Going to travel for ".concat(s," of ").concat(t," hours.")),e.assignee.location=M}),(function(n,a,c){var i="We arrived at our destination";!function(e,t){re(e,-t/ae(e))}(e.assignee,s),s<t&&(e.steps.splice(1,0,function(e,t){return function(n){var a=A(h(n));a[3]++;var r=function(e){var t=e.stats.energy,n=e.computedStats.energy;return Math.ceil((t-n)/(t/4))}(e.assignee);return $(a,I(a,r),"Quest Resting","None",k,(function(t,n,a){le(n,e,"Going to rest for ".concat(r," hours.")),e.assignee.location=N}),(function(n,a,s){var c,i;le(a,e,"We are rested!"),c=e.assignee,i=r,re(c,c.stats.energy/4*i),e.steps.splice(1,0,oe(e,t)),e.assignee.location=M,n({type:"advanceQuest",payload:e})}))}}(e,t-r)),i="We have to stop due to lack of energy."),e.assignee.location=P,le(a,e,i),n({type:"advanceQuest",payload:e})}))}}var ue=0;function le(e,t,n){t.logs.push({id:++ue,createdAt:A(h(e)),log:n})}function de(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=function(n){var a=A(h(n));return a[3]++,$(a,I(a,3),"Executing Quest","None",k,(function(a,r,s){t&&le(n,e,"Started searching for the thing.")}),(function(t,a,r){z(50)?le(n,e,"Found the thing."):(le(n,e,"Couldn't find the thing. We'll try again."),e.steps.splice(1,0,de(e,!1))),t({type:"advanceQuest",payload:e})}))};return n}Number.prototype.map=function(e,t,n,a){return(this-e)*(a-n)/(t-e)+n};var he=0;function je(e){var t=++he,n=h(e),a=I(A(n),24*V(1,4)),r={id:t,name:"No name",description:"No Description",steps:[],reward:0,questValue:0,level:1,accepted:!1,active:!1,completed:!1,assignee:null,logs:[],createdAt:A(n),expiresAt:a,startedAt:null};return function(e){var t=V(4,12);e.name="Go Fetch",e.level=t.map(4,12,1,5),e.description="Go find something somewhere",e.reward=Math.round(2*t+V(-3,4)),e.steps=function(e,t){return[oe(e,t),de(e,q,t),oe(e,t)]}(e,t)}(r),r}function pe(e,t){if(t.steps.shift(),0===t.steps.length)return function(e,t){t.completed=!0,t.active=!1,t.assignee.task=null,t.assignee.location=C,n=t.assignee,a=t.level,n.exp+=Math.round(a),le(e,t,"Quest completed. Members gained ".concat(Math.round(t.level)," experience points."));var n,a}(e,t);fe(e,t)}function fe(e,t){var n=t.steps[0](e),a=h(e);a.events.push(n),a.todayEvents.push(n)}function ve(e){var t=A(e);return t[3]=12,$(t,I(t,1),"New quest just arrived!","We may have got new quests from the capital",w,(function(t,n,a){var r=V(0,4);m(n).filter((function(t){return function(e,t){return L(e,t)<0}(A(e),t.expiresAt)&&!t.accepted})).forEach((function(e){t({type:"removeQuest",payload:e})}));for(var s=0;s<r;++s)t({type:"addQuest",payload:je(n)})}),(function(e,t,n){var a=h(t),r=I(A(a),24);r[3]=12,a.events.push(H(n,r,I(r,1)))}))}function me(e){var t=I(A(e),24);return t[3]=6,$(t,I(t,1),"Performing daily guild checkup","May they have luck!",w,(function(e,t,n){!function(e){(function(e){return g(e).filter((function(e){return!e.startedAt}))})(e).forEach((function(t){!function(e,t){t.startedAt=A(h(e)),t.active=!0,fe(e,t)}(e,t)}))}(t)}),(function(e,t,n){var a=h(t),r=I(A(a),24);r[3]=6,a.events.push(H(n,r,I(r,1)))}))}var ge=n(91),be={quests:0,maintenance:0,salaries:0,total:0,questsPerformed:0,questsSucceeded:0,logs:[]};function ye(e,t,n){e[n].questsPerformed++,e[n].questSucceeded++,e[n].quests+=t.reward,e[n].total+=t.reward}function Oe(e){var t=h(e);t.todayEvents=t.events.filter((function(e){return E(t,e.start)||E(t,e.end)}))}function xe(e,t,n,a){t.isPaused||(h(t).stats.ticks++,h(t).hour++,a(n+1),5===n&&(t.ticker.advanceStage(e,t),a(0)),function(e,t){var n=h(t);n.todayEvents.filter((function(e){return E(n,e.start)&&e.start[3]===n.hour})).forEach((function(a){a.startHandler(e,t,a),n.activeEvents.push(a)})),n.todayEvents.filter((function(e){return E(n,e.end)&&e.end[3]===n.hour})).forEach((function(a){a.endHandler(e,t,a),n.events.splice(n.events.indexOf(a),1),n.activeEvents.splice(n.activeEvents.indexOf(a),1)}))}(e,t))}function Se(e,t){var n=h(t);if(n.currentStage===x)return ke(e,t);n.currentStage=function(e){switch(e){case b:return y;case y:return O;case O:return x}}(n.currentStage)}function ke(e,t){var n,a=h(t);a.currentStage=b,a.hour=0,a.day++,(n=t.guild.reports).yesterday=n.today,n.today=Object(Y.a)({},be),a.day>15&&function(e,t){var n=h(t);n.day=1,n.month++,function(e){e.lastMonth=e.month,e.month=Object(Y.a)({},be)}(t.guild.reports),4===n.month&&function(e,t){var n=h(t);n.month=0,n.year++}(0,t)}(0,t),Oe(t)}var we={initialize:function(){var e={currentStage:b,hour:0,day:1,month:0,year:475,todayEvents:[],activeEvents:[],events:[],stats:{totalEvents:0,ticks:0},callADay:ke,advanceStage:Se,tick:xe},t=$([475,0,5,8],[475,0,6,0],"Fifth of Decembrary","A very beautiful festivity",w,(function(e,t,n){console.log("It's ".concat(n.name,"  !!"))}),(function(e,t,n){var a=h(t);a.events.push(H(n,[a.year+1,0,5,8],[a.year+1,0,6,0]))})),n=$([475,0,1,8],[475,0,8,8],"First Week of the year!","The very first week of the year",w,(function(e,t,n){console.log("It's ".concat(n.name,"  !!"))}),(function(e,t,n){var a=h(t);a.events.push(H(n,[a.year+1,0,1,8],[a.year+1,0,8,1]))})),a=ve(e),r=me(e),s=function(e){var t=I(A(e),24);return t[3]=10,$(t,I(t,1),"Checking for new recruits","Let's see how many join! :D",w,(function(e,t,n){for(var a=V(0,2),r=0;r<a;++r)e({type:"addMember",payload:te()})}),(function(e,t,n){var a=h(t),r=I(A(a),24);r[3]=10,a.events.push(H(n,r,I(r,1)))}))}(e);return e.events.push(t,n,a,r,s),Oe({ticker:e}),e}};var qe=n(79),Te=n(37),Ce=n.n(Te);function Me(e,t){var n,a,r="string"===typeof t?{type:t}:t;switch(["increaseStageProgress","resetStageProgress"].includes(r.type)||console.log(r),r.type){case"changeSelectedMenu":return Ce()(e,{selectedItem:{$set:r.payload}});case"switchPause":return Ce()(e,{isPaused:{$set:!e.isPaused}});case"changeStageSpeed":return Ce()(e,{stageSpeed:{$set:e.stageSpeed+r.payload}})}switch(r.type){case"changeSelectedContentMenu":return Ce()(e,Object(qe.a)({},r.payload.stateNamespace,{selectedItem:{$set:r.payload.key}}))}switch(r.type){case"askFounding":return Ce()(e,{guild:{stats:{gold:{$set:25}}}});case"addGoldToMember":var s=e.guild.stats.members.indexOf(r.payload),c=Ce()(r.payload,{gold:{$set:r.payload.gold+5}});return Ce()(e,{guild:{stats:{members:{$splice:[[s,1,c]]},gold:{$set:e.guild.stats.gold-5}}}});case"hireGuildMember":return Ce()(e,{guild:{stats:{members:{$push:[r.payload]},gold:{$set:e.guild.stats.gold-ee(r.payload)}}},tavern:{recruits:{$splice:[[e.tavern.recruits.indexOf(r.payload),1]]}}});case"levelUpMember":return function(e){e.exp=e.exp-ce(e),e.level++;for(var t=V(1,3),n=0;n<t;n++)e.stats[K(e.stats)]++,ie(e)}(r.payload),Ce()(e,{guild:{stats:{members:{$splice:[[e.tavern.recruits.indexOf(r.payload),1,r.payload]]}}}})}switch(r.type){case"changeSelectedCityMenu":return Ce()(e,{city:{selectedItem:{$set:r.payload}}})}switch(r.type){case"addMember":return Ce()(e,{tavern:{recruits:{$push:[r.payload]}}})}switch(r.type){case"addQuest":return Ce()(e,{quests:{quests:{$push:[r.payload]}}});case"removeQuest":return Ce()(e,{quests:{quests:{$splice:[[e.quests.quests.indexOf(r.payload),1]]}}});case"acceptQuest":return n=r.payload.quest,a=r.payload.selectedMember,n.accepted=!0,n.assignee=a,a.task=n,Ce()(e,{quests:{quests:{$splice:[[e.quests.quests.indexOf(r.payload.quest),1,r.payload.quest]]}}});case"advanceQuest":return pe(e,r.payload),Ce()(e,{quests:{quests:{$splice:[[e.quests.quests.indexOf(r.payload),1,r.payload]]}}});case"closeQuest":return function(e,t){ye(e,t,"today"),ye(e,t,"month")}(e.guild.reports,r.payload),Ce()(e,{guild:{stats:{gold:{$apply:function(e){return e+r.payload.reward}}},reports:{$set:e.guild.reports}},quests:{quests:{$splice:[[e.quests.quests.indexOf(r.payload),1]]}}})}return console.log("returning Default"),e}var Pe=n(228),Ne=n(233);function Ee(){var e=Object(r.useContext)(Lt).dispatch;return Object(a.jsxs)(Ne.a,{className:"CityMenu",onSelect:function(t){var n=t.key;e({type:"changeSelectedCityMenu",payload:n})},theme:"light",mode:"inline",defaultSelectedKeys:["Overview"],children:[Object(a.jsx)(Ne.a.Item,{children:"Overview"},"Overview"),Object(a.jsx)(Ne.a.Item,{children:"Guild"},"Guild"),Object(a.jsx)(Ne.a.Item,{children:"Market"},"Market"),Object(a.jsx)(Ne.a.Item,{children:"Tavern"},"Tavern")]})}function Ie(){var e=Object(r.useContext)(Lt),t=e.state;e.dispatch;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Overview"}),Object(a.jsx)("h3",{children:"Active Events"}),p(t).map((function(e){return Object(a.jsx)("div",{children:e.name},e.name)}))]})}var Ae=n(225),Fe=n(229);function Le(e){e.name,e.gold,e.members;var t=Object(r.useContext)(Lt),n=t.state,s=(t.dispatch,f(n)),c=[{name:"name",value:s.stats.name},{name:"gold",value:s.stats.gold},{name:"members",value:s.stats.members.length},{name:"Active Quests",value:g(n).length}];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ae.a,{orientation:"left",children:"Stats"}),Object(a.jsx)(Fe.b,{size:"small",bordered:!0,dataSource:c,renderItem:function(e){return Object(a.jsxs)(Fe.b.Item,{children:[e.name,": ",e.value]})}})]})}function Qe(){var e=Object(r.useContext)(Lt),t=e.state,n=e.dispatch,s=t.guild.stats,c=s.gold,i=s.members;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Le,{}),Object(a.jsx)("br",{}),0===c&&1===i.length?Object(a.jsx)(l.a,{type:"primary",onClick:function(){n({type:"askFounding"})},children:"Ask for founding to the city council"}):null]})}Le.displayName="Stats",Qe.displayName="Overview";var Ge=n(231),$e=n(232),He=n(230),De=n(236);function Re(e,t){return t>e?"success":t<e?"danger":"default"}function Be(e){return Object.keys(e.stats).map((function(t){var n=e.stats[t],r=e.computedStats[t];return Object(a.jsxs)(Ge.a.Text,{type:Re(n,r),children:[t,": ",r]},t)}))}function Ve(e){return Object.keys(e.stats).reduce((function(t,n){return t+e.stats[n]}),0)-e.stats.health}function We(e){return Object.keys(e.data).map((function(t){var n=e.data[t];return Object(a.jsxs)(Ge.a.Text,{children:[t,": ",n]},t)}))}var ze={width:200,float:"left",margin:5};var Ue=Ge.a.Text,Je=$e.a.Panel;function Ke(){var e=Object(r.useContext)(Lt),t=e.state,n=e.dispatch;return Object(a.jsx)(a.Fragment,{children:t.guild.stats.members.map((function(e,t){return Object(a.jsx)(He.a,{style:ze,title:e.name,extra:Object(a.jsx)("div",{style:{width:15,height:15,background:e.color}}),children:Object(a.jsxs)(De.b,{style:{width:"100%"},direction:"vertical",children:[Object(a.jsxs)(Ue,{children:["Gold: ",e.gold," ",Object(a.jsx)(Ue,{style:{fontSize:18,cursor:"pointer"},onClick:function(){n({type:"addGoldToMember",payload:e})},children:"+"})]}),Object(a.jsxs)(Ue,{children:["Level: ",e.level," (",e.exp," /"," ",ce(e),")"," ",se(e)?Object(a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){n({type:"levelUpMember",payload:e})},children:"\u25b2"}):null]}),Object(a.jsxs)(Ue,{children:["Type: ",e.type]}),Object(a.jsxs)(Ue,{children:["Location: ",e.location]}),Object(a.jsxs)(Ue,{children:["Task: ",e.task?e.task.name:"None"]}),Object(a.jsx)($e.a,{ghost:!0,style:{marginLeft:-15},children:Object(a.jsx)(Je,{header:"Stats (".concat(Ve(e),")"),children:Object(a.jsx)(De.b,{style:{width:"100%"},direction:"vertical",children:Be(e)})},"1")}),Object(a.jsx)($e.a,{ghost:!0,style:{marginLeft:-15},children:Object(a.jsx)(Je,{header:"Data",children:Object(a.jsx)(De.b,{style:{width:"100%"},direction:"vertical",children:We(e)})},"2")})]})},t)}))})}Ke.displayName="Members";var Ye=n(234),Ze=Ge.a.Title,Xe=Ge.a.Paragraph,_e=Ge.a.Text,et=$e.a.Panel;function tt(){var e=Object(r.useContext)(Lt),t=e.state;e.dispatch;return Object(a.jsx)($e.a,{children:g(t).map((function(e,t){return Object(a.jsx)(et,{header:"".concat(e.name," "),extra:nt(e),children:Object(a.jsx)(at,{quest:e})},e.id)}))})}function nt(e){return e.startedAt?"Depart date: ".concat(F(e.startedAt)):"Not yet departed"}function at(e){var t=e.quest,n=Object(r.useContext)(Lt),s=n.state,c=n.dispatch;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Xe,{children:t.description}),Object(a.jsxs)(Xe,{children:["The reward for completing this quest is"," ",Object(a.jsxs)(_e,{strong:!0,children:[t.reward," gold coins"]}),"."]}),Object(a.jsxs)(Xe,{children:["This quest is assigned to: ",ne(t.assignee)," "]}),Object(a.jsx)(Ze,{level:4,children:"Quest Log"}),Object(a.jsx)(rt,{quest:t}),t.completed&&Object(a.jsx)(l.a,{onClick:function(){c({type:"closeQuest",payload:t}),le(s,s.guild,"Finished quest ".concat(t.name," and earned ").concat(t.reward))},children:"Close Quest"})]})}function rt(e){var t=e.quest;return Object(a.jsx)(Ye.a,{mode:"right",children:t.logs.map((function(e){return Object(a.jsx)(Ye.a.Item,{label:F(e.createdAt),children:e.log},e.id)}))})}tt.displayName="Quests";Ge.a.Title,Ge.a.Text,$e.a.Panel;function st(){var e=Object(r.useContext)(Lt),t=e.state,n=(e.dispatch,t.guild.reports);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ct,{currentTitle:"Today",current:n.today,previousTitle:"Yesterday",previous:n.yesterday}),Object(a.jsx)(ct,{currentTitle:"This Month",current:n.month,previousTitle:"Last Month",previous:n.lastMonth})]})}function ct(e){var t=e.currentTitle,n=e.current,r=e.previousTitle,s=e.previous;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{width:300,float:"left"},children:Object(a.jsxs)(He.a,{title:t,children:[Object(a.jsxs)(Ge.a.Paragraph,{children:["Quests: ",n.quests]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["maintenance: ",n.maintenance]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["salaries: ",n.salaries]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["total: ",n.total]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["questsPerformed: ",n.questsPerformed]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["questsSucceeded: ",n.questsSucceeded]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["questsFailed: ",n.questsPerformed-n.questsSucceeded]})]})}),Object(a.jsx)("div",{style:{width:300,float:"left"},children:Object(a.jsxs)(He.a,{title:r,children:[Object(a.jsxs)(Ge.a.Paragraph,{children:["Quests: ",s.quests]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["maintenance: ",s.maintenance]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["salaries: ",s.salaries]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["total: ",s.total]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["questsPerformed: ",s.questsPerformed]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["questsSucceeded: ",s.questsSucceeded]}),Object(a.jsxs)(Ge.a.Paragraph,{children:["questsFailed: ",s.questsPerformed-s.questsSucceeded]})]})})]})}function it(e){var t=e.defaultItem,n=e.menuItems,s=e.stateNamespace,c=Object(r.useContext)(Lt).dispatch;return Object(a.jsx)(Ne.a,{onSelect:function(e){var t=e.key;c({type:"changeSelectedContentMenu",payload:{key:t,stateNamespace:s}})},theme:"light",mode:"horizontal",defaultSelectedKeys:[t],children:n.map((function(e){return Object(a.jsx)(Ne.a.Item,{children:e.displayName},e.displayName)}))})}st.displayName="Reports";var ot=Pe.a.Header,ut=Pe.a.Content;function lt(e,t,n,r){var s=n.find((function(e){return e.displayName===t[r].selectedItem}));return s?Object(a.jsx)(s,{}):"error"}function dt(e){var t=e.menuItems,n=e.stateNamespace,s=Object(r.useContext)(Lt),c=s.state;s.dispatch;return Object(a.jsxs)(Pe.a,{style:{background:"white"},children:[Object(a.jsx)(ot,{theme:"light",style:{background:"white",padding:0},children:Object(a.jsx)(it,{defaultItem:j(c,n),menuItems:t,stateNamespace:n})}),Object(a.jsx)(ut,{style:{background:"white",padding:10,margin:"24px 16px 0",overflow:"initial"},children:lt(0,c,t,n)})]})}function ht(){return Object(a.jsx)(dt,{menuItems:[Qe,Ke,tt,st],stateNamespace:"guild"})}function jt(){return"hola"}var pt=Ge.a.Text;function ft(){var e=Object(r.useContext)(Lt);e.state,e.dispatch;return Object(a.jsx)(pt,{children:"Welcome to the Tavern, please take a seat!"})}ft.displayName="Overview";var vt=Ge.a.Title,mt=Ge.a.Text,gt=$e.a.Panel;function bt(){var e=Object(r.useContext)(Lt),t=e.state,n=e.dispatch;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(vt,{level:4,children:"Available Recruits"}),t.tavern.recruits.map((function(e,r){var s=ee(e),c=t.guild.stats.gold>=s;return Object(a.jsx)(He.a,{style:ze,title:"".concat(e.name," ").concat(e.surname),extra:Object(a.jsx)("div",{style:{width:15,height:15,background:e.color}}),children:Object(a.jsxs)(De.b,{style:{width:"100%"},direction:"vertical",children:[Object(a.jsxs)(mt,{children:["Level: ",e.level," (",e.exp," / ",2*e.level,")"," ",e.exp>2*e.level?"\u25b2":null]}),Object(a.jsxs)(mt,{children:["Type: ",e.type]}),Object(a.jsx)($e.a,{ghost:!0,style:{marginLeft:-15},children:Object(a.jsx)(gt,{header:"Stats (".concat(Ve(e),")"),children:Object(a.jsx)(De.b,{style:{width:"100%"},direction:"vertical",children:Be(e)})},"1")}),Object(a.jsxs)(l.a,{type:"primary",disabled:!c,onClick:function(){n({type:"hireGuildMember",payload:e}),t.notify.info({message:"You just hired ".concat(e.name," for ").concat(s," gold coins")})},children:["Hire for ",s," gold coins"]})]})},r)}))]})}bt.displayName="Recruits";var yt=n(235),Ot=n(237),xt=n(238),St=(Ge.a.Title,Ge.a.Paragraph),kt=Ge.a.Text,wt=$e.a.Panel;function qt(e){for(var t=[],n=0;n<e;n++)t.push(Object(a.jsx)(Ot.a,{},n));return t}function Tt(e,t){var n=L(A(h(e)),t.expiresAt),r="secondary";return n<24&&(r=n<0?"danger":"warning"),Object(a.jsxs)(kt,{type:r,children:[" Expires: ",F(t.expiresAt)," "]})}function Ct(){var e=Object(r.useContext)(Lt),t=e.state;e.dispatch;return Object(a.jsx)($e.a,{children:t.quests.quests.filter((function(e){return!e.accepted})).map((function(e,n){return Object(a.jsx)(wt,{header:"".concat(e.name," (").concat(e.reward," coins)"),extra:[Tt(t,e)].concat(Object(ge.a)(qt(e.level))),children:Object(a.jsx)(Mt,{quest:e})},e.id)}))})}function Mt(e){var t=e.quest,n=Object(r.useContext)(Lt),s=n.state,c=n.dispatch,i=Object(r.useState)(null),u=Object(o.a)(i,2),d=u[0],h=u[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(St,{children:t.description}),Object(a.jsxs)(St,{children:["The reward for completing this quest is"," ",Object(a.jsxs)(kt,{strong:!0,children:[t.reward," gold coins"]}),"."]}),Object(a.jsxs)(St,{children:["Select the Hero that will perform this quest:"," ",Object(a.jsx)(Pt,{selectedMember:d,onChange:h})," "]}),Object(a.jsx)(l.a,{disabled:!d,onClick:function(){c({type:"acceptQuest",payload:{quest:t,selectedMember:d}}),s.notify.info({message:"You just accepted ".concat(t.name," with ").concat(ne(d))})},children:"Start Quest!"})]})}function Pt(e){var t=e.selectedMember,n=e.onChange,s=Object(r.useContext)(Lt),c=s.state,i=(s.dispatch,Object(a.jsxs)(Ne.a,{children:[Object(a.jsx)(Ne.a.Item,{onClick:function(){return n(null)},children:"None"},"none"),v(c).filter((function(e){return!e.task})).map((function(e){return Object(a.jsx)(Ne.a.Item,{onClick:function(){return n(e)},children:Object(a.jsx)("a",{children:ne(e)})},e.id)}))]}));return Object(a.jsx)(yt.a,{overlay:i,children:Object(a.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:[t?ne(t):"None"," ",Object(a.jsx)(xt.a,{})]})})}function Nt(){return Object(a.jsx)(dt,{menuItems:[ft,bt,Ct],stateNamespace:"tavern"})}Ct.displayName="Quests";var Et=Pe.a.Sider,It=Pe.a.Content;function At(){var e=Object(r.useContext)(Lt),t=e.state,n=e.dispatch;return Object(a.jsxs)(Pe.a,{children:[Object(a.jsx)(Et,{theme:"light",style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:Object(a.jsx)(Ee,{})}),Object(a.jsx)(Pe.a,{style:{marginLeft:200,height:"100vh"},children:Object(a.jsx)(It,{style:{background:"white",padding:10,margin:"24px 16px 0",overflow:"initial"},children:Ft(n,t)})})]})}function Ft(e,t){switch(t.city.selectedItem){case"Overview":return Object(a.jsx)(Ie,{});case"Guild":return Object(a.jsx)(ht,{});case"Market":return Object(a.jsx)(jt,{});case"Tavern":return Object(a.jsx)(Nt,{});default:return"No content for City"}}var Lt=s.a.createContext();function Qt(){var e=u.a.useNotification(),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(0),i=Object(o.a)(c,2),h=i[0],j=i[1],p=Object(r.useReducer)(Me,{guild:{stats:{name:"Tainor",gold:0,members:[te("Hoijof","indigo")],items:[]},logs:[],selectedItem:"Overview",reports:{today:Object(Y.a)({},be),yesterday:Object(Y.a)({},be),week:Object(Y.a)({},be),lastWeek:Object(Y.a)({},be),month:Object(Y.a)({},be),lastMonth:Object(Y.a)({},be)}},city:{selectedItem:"Overview"},tavern:{selectedItem:"Overview",recruits:[]},quests:{quests:[],stats:{questsCreated:0,questStarted:0,questsCompleted:0}},selectedCity:"City",stageSpeed:750,isPaused:!1,notify:n,ticker:we.initialize()}),f=Object(o.a)(p,2),v=f[0],m=f[1];return function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){v.ticker.tick(m,v,h,j)}),v.stageSpeed),Object(d.a)("space",(function(){return m("switchPause")})),Object(d.a)("*",(function(e){"+"===e.key&&m({type:"changeStageSpeed",payload:-25}),"-"===e.key&&m({type:"changeStageSpeed",payload:25})})),window.state=v,Object(a.jsxs)(Lt.Provider,{value:{state:v,dispatch:m},children:[s,Gt(v),Object(a.jsxs)("div",{id:"TickerBar",style:{position:"absolute",left:0,bottom:0,width:"100%"},children:[Object(a.jsxs)("div",{children:[v.ticker.day," / ",S[v.ticker.month]," /"," ",v.ticker.year]}),Object(a.jsxs)("div",{children:["Hour: ",v.ticker.hour,":00"]}),Object(a.jsxs)("div",{children:["Time of The Day: ",v.ticker.currentStage]}),Object(a.jsx)(l.a,{onClick:function(){m("switchPause")},children:v.isPaused?"Resume":"Pause"}),Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{onClick:function(){m({type:"changeStageSpeed",payload:10})},children:"-"}),Object(a.jsxs)("span",{children:[" Speed: ",v.stageSpeed," "]}),Object(a.jsx)(l.a,{onClick:function(){m({type:"changeStageSpeed",payload:-10})},children:"+"})]})]})}function Gt(e){switch(e.selectedCity){case"City":return Object(a.jsx)(At,{});default:return"No city to render"}}var $t=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(Qt,{})})},Ht=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(a.jsx)($t,{}),document.getElementById("root")),Ht()}},[[222,1,2]]]);
//# sourceMappingURL=main.0504e67f.chunk.js.map