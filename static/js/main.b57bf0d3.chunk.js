(this["webpackJsonppoke-api"]=this["webpackJsonppoke-api"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"name":"Home","link":"/"},{"id":2,"name":"Pro Players","link":"/Pro-Players"},{"id":3,"name":"About","link":"/About"}]')},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/dota.136d49a0.png"},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),s=n.n(r),i=(n(28),n(16)),o=n(17),j=n(23),u=n(21),l=n(18),d=n(8),b=n(2),p=(n(29),n(12)),O=n.n(p),h=n(19),f=n(22),x=(n(31),n(1)),m=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.opendota.com/api/proPlayers");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=[],n.forEach((function(e){"PE"===e.loccountrycode&&c.push(e)})),a(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"players_card_container",children:Object(x.jsx)(d.a,{children:n.map((function(e){return Object(x.jsxs)(d.b,{className:"player_card",to:e.name,children:[Object(x.jsxs)("p",{children:[e.team_tag," ",e.name," "]}),Object(x.jsx)("img",{src:e.avatarfull,alt:e.name}),Object(x.jsxs)("p",{children:[e.account_id," "]})]})}))})})},v=(n(41),function(){return Object(x.jsx)("div",{className:"container_portada",children:Object(x.jsx)("h1",{className:"title_portada",children:"FIND YOUR FAVORITE PLAYERS"})})}),y=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=l.map((function(e){return e}));return Object(x.jsxs)(d.a,{children:[Object(x.jsxs)("div",{className:"nav_bar",children:[Object(x.jsx)("img",{src:n(42).default,alt:"logodota"}),Object(x.jsx)("ul",{children:e.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:e.link,children:[" ",e.name," "]})})}))})]}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{path:"/About",children:"About"}),Object(x.jsxs)(b.a,{path:"/Pro-Players",children:["Proplayers",Object(x.jsx)(m,{})]}),Object(x.jsx)(b.a,{path:"/",exact:!0,children:"Home"})]})]})}}]),c}(a.a.Component);var k=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{}),Object(x.jsx)(v,{})]})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b57bf0d3.chunk.js.map