(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(6),a=c(4),r=c(5),d=c(8),l=c(7),i=c(1),u=c.n(i),m=c(17),j=(c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e){return{name:" ".concat(e),goodId:Object(m.a)()}})),h=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.headeringGenerator=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");default:return"".concat(t.slice(0,-1)," and ").concat(t.at(-1)," are selected")}},e.clearSelected=function(){e.setState({selectedGoods:[]})},e.selectGood=function(t){return function(){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))}},e.removeGood=function(t){return function(){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))}},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:this.headeringGenerator()}),Object(j.jsx)("button",{type:"button",className:"clearingButton",onClick:this.clearSelected,children:"Remove all selected goods"}),Object(j.jsx)("ul",{className:"goodsList",children:b.map((function(t){var c=e.state.selectedGoods.includes(t.name);return Object(j.jsxs)("div",{className:"goodsList__items",children:[Object(j.jsx)("li",{className:"goodsList__item",children:t.name},t.goodId),Object(j.jsx)("button",{type:"button",className:"button goodsList__button",onClick:c?e.removeGood(t.name):e.selectGood(t.name),children:c?"Remove":"Select"})]})}))})]})})}}]),c}(u.a.Component),f=h;o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4811d9ff.chunk.js.map