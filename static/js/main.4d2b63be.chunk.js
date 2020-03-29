(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(8),s=a(1),n=a(2),o=a(4),i=a(3),l=a(5),u=a(0),c=a.n(u),h=a(7),m=a.n(h);a(15);function v(e){var t={color:"X"===e.value?"black":"antiquewhite",background:e.style.isWinningSquare?"palegreen":"#3fa292"};return c.a.createElement("button",{className:"square",onClick:e.onClick,style:t},e.value)}var f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(v,{value:this.props.squares[e],style:this.props.style[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e=this;return function(){for(var t=[],a=0,r=0;r<3;r++){for(var s=[],n=0;n<3;n++)s.push(e.renderSquare(a++));t.push(c.a.createElement("div",{className:"board-row"},s))}return t}()}}]),t}(c.a.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),moveLocation:{row:null,col:null}}],stepNumber:0,xIsNext:!0,desc:!0},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.desc?this.state.history.slice(0,this.state.stepNumber+1):this.state.history.slice(this.state.stepNumber),a=(this.state.desc?t[t.length-1]:t[0]).squares.slice();if(!y(a)&&!a[e]){a[e]=this.state.xIsNext?"X":"O";var r={squares:a,moveLocation:{row:Math.floor(e/3)+1,col:e%3+1}};this.setState({history:this.state.desc?t.concat([r]):[r].concat(t),stepNumber:this.state.desc?t.length:0,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"sortMoves",value:function(){this.setState({history:this.state.history.reverse(),stepNumber:this.state.history.length-1-this.state.stepNumber,desc:!this.state.desc})}},{key:"boardIsFull",value:function(e){var t=!0,a=!1,r=void 0;try{for(var s,n=e.squares[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){if(null===s.value)return!1}}catch(o){a=!0,r=o}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}return!0}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=y(r.squares),n=a.map((function(e,r){var s=null!==e.moveLocation.row?"Go to move #"+(t.state.desc?r:a.length-1-r)+" at row: "+e.moveLocation.row+", col: "+e.moveLocation.col:"Go to game start",n={fontWeight:t.state.stepNumber===r?"bold":"normal"};return c.a.createElement("li",{key:r},c.a.createElement("button",{onClick:function(){return t.jumpTo(r)},style:n},s))})),o=new Array(9);o.fill({isWinningSquare:!1});return s?(e="Winner: "+r.squares[s[0]],o[s[0]]=o[s[1]]=o[s[2]]={isWinningSquare:!0}):e=this.boardIsFull(r)?"Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(f,{squares:r.squares,style:o,onClick:function(e){return t.handleClick(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",{className:"status"},e),c.a.createElement("button",{onClick:function(){return t.sortMoves()}},"Sort moves"),c.a.createElement("ol",null,n)))}}]),t}(c.a.Component);function y(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var s=Object(r.a)(t[a],3),n=s[0],o=s[1],i=s[2];if(e[n]&&e[n]===e[o]&&e[n]===e[i])return[n,o,i]}return null}m.a.render(c.a.createElement(p,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.4d2b63be.chunk.js.map