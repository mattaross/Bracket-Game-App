(this["webpackJsonpbracket-game-app"]=this["webpackJsonpbracket-game-app"]||[]).push([[0],{15:function(e,a,t){e.exports=t(26)},26:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),u=t.n(l),o=t(1);var d=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-background"},r.a.createElement("h1",{className:"main-title"},"Bracket Game Maker")))},i=t(4),c=t.n(i),m=t(5),s=t.n(m),N=t(8),p=t.n(N);var h=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],u=t[1],d=Object(n.useState)(""),i=Object(o.a)(d,2),m=i[0],N=i[1],h=Object(n.useState)(!1),E=Object(o.a)(h,2),D=E[0],b=E[1],f=Object(n.useState)(""),R=Object(o.a)(f,2),v=R[0],w=R[1],S=Object(n.useState)(!1),g=Object(o.a)(S,2),T=g[0],y=g[1];function q(){return"true"===e.top?{borderRadius:"10px 10px 0 0"}:{borderRadius:"0 0 10px 10px"}}function k(e){var a=e.target.value;N(a)}function W(){u(!l)}function C(e){var a=e.target.value;w(a)}function B(){b(!D)}function j(){var a={winnerTargetSpot:e.targetSpotNum,winnerTitle:m,winnerBand:v,winnerQuad:e.quadNum,winnerRound:e.roundNum,winnerMatchup:e.matchupNum,winnerCompetitor:e.competitorNum,deletedData:!0,latestRoundWithData:e.roundNum-1};e.roundNum<4?a.roundType="lower-round":4===e.roundNum?a.roundType="round-4":a.roundType="late-round",e.onSelectedWinner(a),y(!1)}function x(){var a={winnerTargetSpot:e.targetSpotNum,winnerTitle:m,winnerBand:v,winnerQuad:e.quadNum,winnerRound:e.roundNum,winnerMatchup:e.matchupNum,winnerCompetitor:e.competitorNum,latestRoundWithData:e.roundNum+1};e.roundNum<4?a.roundType="lower-round":4===e.roundNum?a.roundType="round-4":a.roundType="late-round",e.onSelectedWinner(a)}return r.a.createElement("div",{className:"competitor",style:function(){if("true"===e.top)return{borderBottomColor:"black",borderBottomStyle:"solid",borderBottomWidth:1}}()},1===e.roundNum?l||D?l&&!D?r.a.createElement("table",{className:"competitor-table",style:q()},r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("p",{className:"song-title-text"},m)),r.a.createElement("td",{className:"table-data-right"},r.a.createElement("button",{className:"edit-button",onClick:W},r.a.createElement(s.a,{style:{fontSize:15}})))),r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("input",{onChange:C,value:v,type:"text",placeholder:" Band/description..."})),r.a.createElement("td",{className:"table-data-right"},r.a.createElement("button",{className:"add-button",onClick:B},r.a.createElement(c.a,{style:{fontSize:18}}))))):!l&&D?r.a.createElement("table",{className:"competitor-table",style:q()},r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("input",{onChange:k,value:m,type:"text",placeholder:" Name/title..."})),r.a.createElement("td",{className:"table-data-right"},r.a.createElement("button",{className:"add-button",onClick:W},r.a.createElement(c.a,{style:{fontSize:18}})))),r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("p",{className:"band-name-text"},v)),r.a.createElement("td",{className:"table-data-right"},r.a.createElement("button",{className:"edit-button",onClick:B},r.a.createElement(s.a,{style:{fontSize:15}}))))):l&&D?r.a.createElement("table",{className:"competitor-table table-finished",style:q(),onClick:x},r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("p",{className:"song-title-text"},m)),r.a.createElement("td",{className:"table-data-right"},1===e.winnerDataToRender.latestRoundWithData&&r.a.createElement("button",{className:"edit-button",onClick:W},r.a.createElement(s.a,{style:{fontSize:15}})))),r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("p",{className:"band-name-text"},v)),r.a.createElement("td",{className:"table-data-right"},1===e.winnerDataToRender.latestRoundWithData&&r.a.createElement("button",{className:"edit-button",onClick:B},r.a.createElement(s.a,{style:{fontSize:15}}))))):void 0:r.a.createElement("table",{className:"competitor-table",style:q()},r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("input",{onChange:k,value:m,type:"text",placeholder:" Name/title..."})),r.a.createElement("td",{className:"table-data-right"},r.a.createElement("button",{className:"add-button",onClick:W},r.a.createElement(c.a,{style:{fontSize:18}})))),r.a.createElement("tr",{className:"table-row-unfinished"},r.a.createElement("td",{className:"table-data-left"},r.a.createElement("input",{onChange:C,value:v,type:"text",placeholder:" Band/description..."})),r.a.createElement("td",{className:"table-data-right"},r.a.createElement("button",{className:"add-button",onClick:B},r.a.createElement(c.a,{style:{fontSize:18}}))))):function(){if(e.competitorNum!==e.winnerDataToRender.winnerTargetSpot||e.winnerDataToRender.deletedData||T||(N(e.winnerDataToRender.winnerTitle),w(e.winnerDataToRender.winnerBand),y(!0)),T)return r.a.createElement("div",{className:"not-first-round-container"},r.a.createElement("table",{className:"table-not-first-round",style:q(),onClick:x},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{className:"song-title-text"},m))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{className:"band-name-text"},v)))),function(){if(e.winnerDataToRender.latestRoundWithData===e.roundNum||e.lastRoundsDeletionData.latestRoundWithData===e.roundNum)return r.a.createElement("button",{className:"delete-button",onClick:j},r.a.createElement(p.a,{style:{fontSize:18}}))}())}())};var E=function(e){var a=2*e.matchupNum,t=Math.floor(.5*(a-1)+64.5);function n(a){e.onWinnerSelected(a)}return r.a.createElement("div",{className:"matchup",style:{height:e.matchupHeight,marginBottom:e.marginValue}},r.a.createElement(h,{top:"true",quadNum:e.quadNum,roundNum:e.roundNum,matchupNum:e.matchupNum,height:e.matchupHeight,competitorNum:a-1,targetSpotNum:t,onSelectedWinner:n,winnerDataToRender:e.winnerDataToSend,lastRoundsDeletionData:e.lastRoundsDeletionData}),r.a.createElement(h,{top:"false",quadNum:e.quadNum,roundNum:e.roundNum,matchupNum:e.matchupNum,height:e.matchupHeight,competitorNum:a,targetSpotNum:t,onSelectedWinner:n,winnerDataToRender:e.winnerDataToSend,lastRoundsDeletionData:e.lastRoundsDeletionData}))};var D=function(e){var a=[],t=1;switch(e.quadNum){case 1:1===e.roundNum?t=1:2===e.roundNum?t=33:3===e.roundNum?t=49:4===e.roundNum&&(t=57);break;case 2:1===e.roundNum?t=9:2===e.roundNum?t=37:3===e.roundNum?t=51:4===e.roundNum&&(t=58);break;case 3:1===e.roundNum?t=17:2===e.roundNum?t=41:3===e.roundNum?t=53:4===e.roundNum&&(t=59);break;case 4:1===e.roundNum?t=25:2===e.roundNum?t=45:3===e.roundNum?t=55:4===e.roundNum&&(t=60);break;default:t=1}for(var n=t;n<t+8/Math.pow(2,e.roundNum-1);n++)a.push(n);var l=[20];l.push(160),l.push(395),l.push(0);var u=l[e.roundNum-1];function o(a){e.onWinnerDataReceived(a)}return r.a.createElement("div",{className:"round",style:function(e){var a=0;switch(e){case 1:a=0;break;case 2:a=70;break;case 3:a=210;break;case 4:a=467.5;break;default:a=0}return{paddingTop:a}}(e.roundNum)},a.map((function(a,t){return r.a.createElement(E,{quadNum:e.quadNum,roundNum:e.roundNum,marginValue:u,matchupHeight:120,matchupNum:a,onWinnerSelected:o,winnerDataToSend:e.winnerDataToSend,lastRoundsDeletionData:e.lastRoundsDeletionData})})))};var b=function(e){var a=Object(n.useState)({winnerTitle:"",winnerBand:""}),t=Object(o.a)(a,2),l=t[0],u=t[1];function d(a){a.deletedData?("lower-round"===a.roundType||"round-4"===a.roundType||e.onLastRoundsDataReceived(a),u(a)):"lower-round"===a.roundType?u(a):"late-round"===a.roundType?e.onLastRoundsDataReceived(a):(e.onLastRoundsDataReceived(a),u(a))}return r.a.createElement("div",{className:"quadrant"},r.a.createElement(D,{roundSide:e.quadSide,roundNum:"left"===e.quadSide?1:4,quadNum:e.quadNum,onWinnerDataReceived:d,winnerDataToSend:l,lastRoundsDeletionData:e.lastRoundsData}),r.a.createElement(D,{roundSide:e.quadSide,roundNum:"left"===e.quadSide?2:3,quadNum:e.quadNum,onWinnerDataReceived:d,winnerDataToSend:l,lastRoundsDeletionData:e.lastRoundsData}),r.a.createElement(D,{roundSide:e.quadSide,roundNum:"left"===e.quadSide?3:2,quadNum:e.quadNum,onWinnerDataReceived:d,winnerDataToSend:l,lastRoundsDeletionData:e.lastRoundsData}),r.a.createElement(D,{roundSide:e.quadSide,roundNum:"left"===e.quadSide?4:1,quadNum:e.quadNum,onWinnerDataReceived:d,winnerDataToSend:l,lastRoundsDeletionData:e.lastRoundsData}))};var f=function(e){function a(a){e.onLastRoundsDataArrived(a)}return r.a.createElement("div",{className:"board"},r.a.createElement(b,{quadSide:"left",quadNum:1,onLastRoundsDataReceived:a,lastRoundsData:e.lastRoundsData}),r.a.createElement(b,{quadSide:"right",quadNum:2,onLastRoundsDataReceived:a,lastRoundsData:e.lastRoundsData}),r.a.createElement(b,{quadSide:"left",quadNum:3,onLastRoundsDataReceived:a,lastRoundsData:e.lastRoundsData}),r.a.createElement(b,{quadSide:"right",quadNum:4,onLastRoundsDataReceived:a,lastRoundsData:e.lastRoundsData}))};var R=function(e){function a(a){e.onLastRoundsWinnerDataReceived(a)}return r.a.createElement("div",{className:"semifinal-area"},r.a.createElement("h2",{className:"semifinal-title"},"Final Four"),r.a.createElement("div",{className:"semifinal-matchups-container"},r.a.createElement("div",{className:"semifinal-individual-matchup-container"},r.a.createElement(E,{roundNum:5,marginValue:20,matchupHeight:120,matchupNum:61,onWinnerSelected:a,winnerDataToSend:e.winnerDataToRender,lastRoundsDeletionData:{}})),r.a.createElement("div",{className:"semifinal-individual-matchup-container"},r.a.createElement(E,{roundNum:5,marginValue:20,matchupHeight:120,matchupNum:62,onWinnerSelected:a,winnerDataToSend:e.winnerDataToRender,lastRoundsDeletionData:{}}))))};var v=function(e){return r.a.createElement("div",{className:"final-area"},r.a.createElement("h2",{className:"final-title"},"Championship Matchup"),r.a.createElement(E,{roundNum:6,marginValue:20,matchupHeight:120,matchupNum:63,onWinnerSelected:function(a){e.onLastRoundsWinnerDataReceived(a)},winnerDataToSend:e.finalData,lastRoundsDeletionData:{}}))};var w=function(e){return e.championData.championReceived?r.a.createElement("div",{className:"champion-area"},r.a.createElement("h3",{className:"champion-title"},"WINNER:"),r.a.createElement("h4",null,e.championData.winnerTitle),r.a.createElement("p",null,"by"),r.a.createElement("h5",null,e.championData.winnerBand),r.a.createElement("button",{className:"delete-button-champion",onClick:function(){var a={winnerTargetSpot:e.targetSpotNum,winnerTitle:e.championData.winnerTitle,winnerBand:e.championData.winnerBand,winnerQuad:e.quadNum,winnerRound:e.roundNum,winnerMatchup:e.matchupNum,winnerCompetitor:e.competitorNum,deletedData:!0,latestRoundWithData:e.latestRoundWithData-1,roundType:"champion",championReceived:!1};e.onChampionDelete(a)}},r.a.createElement(p.a,{style:{fontSize:24}}))):r.a.createElement("div",null)};var S=function(e){var a=Object(n.useState)({winnerTitle:"",winnerBand:"",winnerTargetSpot:0}),t=Object(o.a)(a,2),l=t[0],u=t[1];return r.a.createElement("div",{className:"last-rounds-area"},r.a.createElement(R,{winnerDataToRender:e.lastRoundsData,onLastRoundsWinnerDataReceived:function(a){e.onSemifinalDataReceived(a)}}),r.a.createElement(v,{finalData:e.lastRoundsData,onLastRoundsWinnerDataReceived:function(a){a.deletedData?e.onSemifinalDataReceived(a):(a.championReceived=!0,u(a))}}),r.a.createElement(w,{championData:l,onChampionDelete:function(e){u(e)}}))};var g=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",{className:"footer-text"},"Copyright Matthew Alvarado-Ross ",e))},T=t(13),y=t.n(T),q=t(12),k=t.n(q);var W=function(){var e=Object(n.useState)({winnerTitle:"",winnerBand:"",winnerTargetSpot:0}),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(f,{onLastRoundsDataArrived:function(e){l(e)},lastRoundsData:t}),r.a.createElement(S,{lastRoundsData:t,onSemifinalDataReceived:function(e){l(e)}}),r.a.createElement("button",{className:"save-button",onClick:function(){k()(document.body).then((function(e){!function(e,a){var t=document.createElement("a");"string"===typeof t.download?(t.href=e,t.download=a,document.body.appendChild(t),t.click(),document.body.removeChild(t)):window.open(e)}(e.toDataURL(),"bracket-game.png")}))}},"Save As Image ",r.a.createElement(y.a,null)),r.a.createElement(g,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8091ab5.chunk.js.map