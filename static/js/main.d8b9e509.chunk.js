(this["webpackJsonppoke-api"]=this["webpackJsonppoke-api"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"name":"Home","link":""},{"id":2,"name":"Pro Players","link":"Pro-Players"},{"id":3,"name":"About","link":"About"}]')},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/dota.136d49a0.png"},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),s=n.n(r),i=(n(28),n(16)),o=n(17),j=n(23),u=n(21),l=n(18),d=n(8),b=n(2),p=(n(29),n(12)),O=n.n(p),h=n(19),x=n(22),f=(n(31),n(1)),m=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.opendota.com/api/proPlayers");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=[],n.forEach((function(e){"PE"===e.loccountrycode&&c.push(e)})),a(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"players_card_container",children:Object(f.jsx)(d.a,{children:n.map((function(e){return Object(f.jsxs)(d.b,{className:"player_card",to:e.name,children:[Object(f.jsxs)("p",{children:[e.team_tag," ",e.name," "]}),Object(f.jsx)("img",{src:e.avatarfull,alt:e.name}),Object(f.jsxs)("p",{children:[e.account_id," "]})]})}))})})},v=(n(41),function(){return Object(f.jsx)("div",{className:"container_portada",children:Object(f.jsx)("h1",{className:"title_portada",children:"FIND YOUR FAVORITE PLAYERS"})})}),y=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=l.map((function(e){return e}));return Object(f.jsxs)(d.a,{children:[Object(f.jsxs)("div",{className:"nav_bar",children:[Object(f.jsx)("img",{src:n(42).default,alt:"logodota"}),Object(f.jsx)("ul",{children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)(d.b,{to:e.link,children:[" ",e.name," "]})})}))})]}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/About",children:"About"}),Object(f.jsxs)(b.a,{path:"/Pro-Players",children:["Proplayers",Object(f.jsx)(m,{})]}),Object(f.jsxs)(b.a,{path:"/",exact:!0,children:["Home",Object(f.jsx)(v,{})]}),Object(f.jsxs)(b.a,{path:"/",children:["404",Object(f.jsx)(v,{})]})]})]})}}]),c}(a.a.Component);var k=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(y,{})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d8b9e509.chunk.js.map