(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),a=r(3),n=r(4),c=r(6),i=r(5),u=r(1),l=r.n(u),d=r(7),o=r.n(d),j=(r(14),r(0));function h(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),XisNext:!0},s}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();O(t)||t[e]||(t[e]=this.state.xIsNext?"O":"X",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=O(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"O":"X"),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"status",children:e}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),v=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{}),Object(j.jsx)("ol",{})]})]})}}]),r}(l.a.Component);function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],c=a[1],i=a[2];if(e[n]&&e[n]===e[c]&&e[n]===e[i])return e[n]}return null}o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.8563da9d.chunk.js.map