(this["webpackJsonpworking-time-accounting"]=this["webpackJsonpworking-time-accounting"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/cross.7d1873ed.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/cycle.75a90539.svg"},,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(17),a(1)),i=a(11),u=a(10),o=a(5),m=a.n(o),d=a(8),f=a(4),p=a.n(f),v=function(e){var t=e.item,a=e.taskDelete,c=e.taskDone,l=Object(n.useState)("00:00:00"),i=Object(s.a)(l,2),u=i[0],o=i[1],m=Object(n.useRef)(),d=Object(n.useCallback)((function(){var e=function(e){return e.toString().length<2?"0"+e:e},a=t.startTime.split(":").map((function(e){return+e})),n=new Date;n.setHours(n.getHours()-a[0]),n.setMinutes(n.getMinutes()-a[1]),n.setSeconds(n.getSeconds()-(a[2]-1));var r=e(n.getHours()),c=e(n.getMinutes()),l=e(n.getSeconds());o(r+":"+c+":"+l)}),[t]);Object(n.useEffect)((function(){if(!t.done){d();var e=setInterval(d,1e3);m.current=e}return function(){clearInterval(m.current)}}),[t,d]);var f=function(e){return"00:00"===e.substring(0,5)?e:e.substring(0,5)};return r.a.createElement("li",{className:"task-list-item"},r.a.createElement("div",{className:"task-title"},r.a.createElement("p",null,t.title)),r.a.createElement("div",{className:"task-info"},r.a.createElement("div",{className:"task-info-item"},r.a.createElement("p",null,"\u041f\u043e\u0447\u0430\u0442\u043e\u043a:"),r.a.createElement("p",null,f(t.startTime))),t.done&&r.a.createElement("div",{className:"task-info-item"},r.a.createElement("p",null,"\u0417\u0430\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u044f:"),r.a.createElement("p",null,f(t.endTime))),t.done&&r.a.createElement("div",{className:"task-info-item"},r.a.createElement("p",null,"\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c:"),r.a.createElement("p",null,f(t.duration))),!t.done&&r.a.createElement("p",{className:"task-duration"},u)),r.a.createElement("div",{className:"task-delete"},t.done?r.a.createElement("button",{className:"delete-task",onClick:function(){return a(t.id)}},r.a.createElement("img",{src:p.a,alt:""})):r.a.createElement("button",{onClick:function(){o("00:00:00"),clearInterval(m.current),c(t.id,u)}},"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e")))},g=(a(19),a(9)),E=a.n(g),k=function(e){var t=e.chosenDate,a=e.taskAdd,c=e.createId,l=Object(n.useState)(""),i=Object(s.a)(l,2),u=i[0],o=i[1],m=Object(n.useState)("08:30:00"),d=Object(s.a)(m,2),f=d[0],p=d[1],v=Object(n.useState)("00:00:00"),g=Object(s.a)(v,2),k=g[0],b=g[1],h=Object(n.useState)(!0),O=Object(s.a)(h,2),S=O[0],N=O[1];return r.a.createElement("div",{className:"addTask-wrap"},r.a.createElement("form",null,r.a.createElement("div",{className:"task-create-type-choise"},r.a.createElement("p",null,"\u0422\u0438\u043f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u0434\u0430\u0447\u0456: "),r.a.createElement("p",{className:"btn",onClick:function(){return N(!S)}},S?"\u043c\u043e\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439":"\u0437 \u0432\u0456\u0434\u043b\u0456\u043a\u043e\u043c",r.a.createElement("img",{src:E.a,alt:""}))),S&&r.a.createElement("div",{className:"task-create-time"},r.a.createElement("p",null,"\u041f\u043e\u0447\u0430\u0442\u043e\u043a: "),r.a.createElement("input",{type:"time",value:f,onChange:function(e){return p(e.target.value)}}),r.a.createElement("p",null,"\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: "),r.a.createElement("input",{type:"time",value:k,onChange:function(e){return b(e.target.value)}})),r.a.createElement("input",{type:"text",className:"task-create-title",value:u,onChange:function(e){return o(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0437\u0430\u0434\u0430\u0447\u0456"}),r.a.createElement("button",{className:"task-create-btn",onClick:function(e){if(e.preventDefault(),t===(new Date).toISOString().slice(0,10)||S)if(""===k||""===f||S&&"00:00:00"===k)alert("\u0427\u0430\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043d\u0443\u043b\u044c\u043e\u0432\u0438\u043c");else{var n=u;if(n.trim(),n){var r=function(e){return e.toString().length<2?"0"+e:e},l=f,s="";if(S){var i=function(e){var t=function(e){return e.split(":").map((function(e){return+e}))}(e),a=new Date;return a.setHours(t[0]||0),a.setMinutes(t[1]||0),a.setSeconds(t[2]||0),a},m=i(f),d=i(k);m.setHours(m.getHours()+d.getHours()),m.setMinutes(m.getMinutes()+d.getMinutes()),m.setSeconds(m.getSeconds()+d.getSeconds()),s=r(m.getHours())+":"+r(m.getMinutes())+":"+r(m.getMinutes())}else{var v=new Date;l=r(v.getHours())+":"+r(v.getMinutes())+":"+r(v.getSeconds())}var g={id:c(),title:n,date:t,startTime:l,endTime:s,duration:k,done:S,type:S?"momental":"withTimer"};a(g),o(""),b("00:00:00"),p("08:30:00")}else alert("\u041d\u0430\u0437\u0432\u0430 \u0437\u0430\u0434\u0430\u0447\u0456 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u043e\u044e")}else alert('\u0417\u0430\u0434\u0430\u0447\u0456 \u0442\u0438\u043f\u0443 "\u0437 \u0432\u0456\u0434\u043b\u0456\u043a\u043e\u043c" \u043c\u043e\u0436\u043d\u0430 \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u0432 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456\u0448\u043d\u0456\u0439 \u0434\u0430\u0442\u0456')}},"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438")))},b=function(e){var t=e.tasks,a=e.setTasks,c=e.chosenDate,l=Object(n.useState)(""),o=Object(s.a)(l,2),f=o[0],p=o[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("workTasks"))){e.next=7;break}return e.next=4,JSON.parse(t);case 4:n=e.sent,a(n),n.forEach((function(e){e.done||p(e.id)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var g=function(e){a(e);var t=JSON.stringify(e);localStorage.setItem("workTasks",t)},E=function(e){var a=t.filter((function(t){return t.id!==e}));g(a)},b=function(e,a){var n=new Date,r=function(e){return e.toString().length<2?"0"+e:e},c=r(n.getHours()),l=r(n.getMinutes()),s=r(n.getSeconds()),u=t.map((function(t){return t.id===e?Object(i.a)({},t,{duration:a,done:!0,endTime:c+":"+l+":"+s}):t}));p(""),g(u)};return r.a.createElement("div",{className:"task-list-wrap"},""===f&&r.a.createElement(k,{chosenDate:c,taskAdd:function(e){e.done||p(e.id);var a=[e].concat(Object(u.a)(t));g(a)},createId:function e(){var a=Math.random().toString().replace(".","");if(!t.find((function(e){return e.id===a})))return a;e()}}),function(){var e=t.filter((function(e){return e.date===c}));return e.length>0?r.a.createElement("ul",{className:"task-list"},e.map((function(e){return r.a.createElement(v,{key:e.id,item:e,taskDelete:E,taskDone:b})}))):r.a.createElement("h1",null,"\u041f\u043e\u0440\u043e\u0436\u043d\u044c\u043e")}())},h=(a(20),function(e){var t=e.tasks,a=e.close,c={currentMonth:"\u0417\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u043c\u0456\u0441\u044f\u0446\u044c",previousMonth:"\u0417\u0430 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043c\u0456\u0441\u044f\u0446\u044c",pickRange:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u0440\u043e\u043c\u0456\u0436\u043e\u043a"},l=Object(n.useState)(0),i=Object(s.a)(l,2),u=i[0],o=i[1],m=Object(n.useState)("currentMonth"),d=Object(s.a)(m,2),f=d[0],v=d[1],g=Object(n.useState)(""),E=Object(s.a)(g,2),k=E[0],b=E[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),S=O[0],N=O[1],j=Object(n.useState)(-1),D=Object(s.a)(j,2),w=D[0],y=D[1],M=function(e){return v(e.target.id)},C=function(e){return b(new Date(e.target.value).toISOString().slice(0,10))},I=function(e){return N(new Date(e.target.value).toISOString().slice(0,10))};return r.a.createElement("div",{onClick:function(e){"salary-calc-wrap"===e.target.className&&a()},className:"salary-calc-wrap"},r.a.createElement("form",{className:"salary-calc-form"},r.a.createElement("div",{className:"salary-calc-close-btn"},r.a.createElement("img",{src:p.a,onClick:a,alt:""})),r.a.createElement("div",{className:"salary-rate-wrap"},r.a.createElement("p",null,"\u0421\u0442\u0430\u0432\u043a\u0430:"),r.a.createElement("input",{type:"text",value:u,onChange:function(e){return o(e.target.value)}}),r.a.createElement("p",null," \u0433\u0440\u043d/\u0433\u043e\u0434")),Object.keys(c).map((function(e){return r.a.createElement("div",{key:e,className:"salary-calc-option"},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,name:"dateMode",checked:f===e,type:"radio",onChange:M}),r.a.createElement("p",null,c[e])))})),"pickRange"===f&&r.a.createElement("div",{className:"salary-calc-date-range-wrap"},r.a.createElement("div",{className:"salary-calc-date"},r.a.createElement("p",null,"\u0417:"),r.a.createElement("input",{type:"date",name:"startDate",id:"startDate",value:k,onChange:C})),r.a.createElement("div",{className:"salary-calc-date"},r.a.createElement("p",null,"\u041f\u043e:"),r.a.createElement("input",{type:"date",name:"endDate",id:"endDate",value:S,onChange:I}))),r.a.createElement("button",{className:"salary-calc-btn",onClick:function(e){e.preventDefault(),y(-1);var a=u.toString().replace(",",".");if(!a||isNaN(+a)||a<0)alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0443 \u0441\u0442\u0430\u0432\u043a\u0443");else if(0!==t.length){var n=0,r=0,c=function(e){var t=e.split(":").map((function(e){return+e}));n+=t[0],r+=t[1]};if("currentMonth"===f||"previousMonth"===f){var l=(new Date).getMonth()+("currentMonth"===f?1:0);t.forEach((function(e){+e.date.split("-")[1]===l&&c(e.duration)}))}else{if("pickRange"!==f)return void alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0443 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443 \u0442\u0438\u043f\u0456 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043a\u0443");if(""===k||""===S)return void alert("\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0443 \u0442\u0430 \u043a\u0456\u043d\u0446\u0435\u0432\u0443 \u0434\u0430\u0442\u0438");var s=function(e){var t=e.split("-").map((function(e){return+e})),a=t[0],n=t[1],r=t[2];return new Date(a,n,r)},i=s(k),o=s(S);if(i>o)return void alert("\u041a\u0456\u043d\u0446\u0435\u0432\u0430 \u0434\u0430\u0442\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043c\u0435\u043d\u0448\u043e\u044e \u0437\u0430 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0443");t.forEach((function(e){var t=s(e.date);t<=o&&t>=i&&c(e.duration)}))}n+=Math.floor(r/60),r%60>=30&&n++,y(n*a)}else alert("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442\u0438\u0439")}},"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438"),-1!==w&&r.a.createElement("p",{className:"salary-calc-result"}," \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",w," \u0433\u0440\u043d")))}),O=(a(21),function(e){var t=e.chosenDate,a=e.setChosenDate;return r.a.createElement("div",{className:"datePicker"},r.a.createElement("label",{className:"datePicker-label",htmlFor:"datePicker"},r.a.createElement("input",{type:"date",id:"datePicker",value:t,onChange:function(e){var t=e.target.value?new Date(e.target.value):new Date;a(t.toISOString().slice(0,10))}})))});a(22);var S=function(){var e=Object(n.useState)((new Date).toISOString().slice(0,10)),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),u=i[0],o=i[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),f=d[0],p=d[1],v=function(){return p(!f)};return r.a.createElement("div",{className:"main-wrap"},r.a.createElement("header",{className:"main-header"},r.a.createElement(O,{chosenDate:a,setChosenDate:c}),r.a.createElement("button",{className:"salary-calc-show-btn",onClick:v},"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443"),f&&r.a.createElement(h,{tasks:u,close:v})),r.a.createElement(b,{tasks:u,setTasks:o,chosenDate:a}))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5d9400f6.chunk.js.map