(this.webpackJsonppromillekollen=this.webpackJsonppromillekollen||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),L=n.n(s),o=(n(13),n(1)),i=n(2),l=n(4),c=n(3),h=n(5),u=(n(14),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},n.imgMap={"\xd6l":"icons/ol.svg",Vin:"icons/vin.svg",Drink:"icons/drink.svg",Cider:"icons/cider.svg",Sprit:"icons/sprit.svg"},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("pd",this.props.drinks),this.props.drinks?r.a.createElement("div",{className:"drinks"},r.a.createElement("div",{className:"drink-scroll"},this.props.drinks.map((function(t,n){return r.a.createElement("button",{key:n,className:"drink",onClick:function(){return e.props.handleEdit(n,t)}},r.a.createElement("img",{src:e.imgMap[t.type],height:"50px",alt:"hej"}),Math.floor(t.time/60%24),":",t.time%60<10?"0".concat(t.time%60):t.time%60)})))):null}}]),t}(a.Component)),p=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).drawGraph=function(){console.log("draw",n.props.perMille);var e=n.props.pos-200;n.ctx.beginPath(),n.ctx.lineWidth=3,n.ctx.strokeStyle="#ffffff",n.ctx.moveTo(0,650);for(var t=0;t<n.props.perMille.length;t++)n.props.currentTime===t&&(n.currentPromil=n.props.perMille[t],n.ctx.stroke(),n.ctx.strokeStyle="gray",n.ctx.lineWidth=1,n.ctx.beginPath(),n.ctx.lineTo(t-e+25,Math.round(650-500*n.props.perMille[t-1]))),n.props.perMille[t]?n.ctx.lineTo(t-e+25,Math.round(650-500*n.props.perMille[t])):n.ctx.lineTo(t-e+25,650);n.ctx.stroke()},n.createAxes=function(){if(n.currentPromil=0,n.ctx){var e=n.props.pos-200;n.ctx.strokeStyle="gray",n.ctx.lineWidth=1,n.ctx.clearRect(0,0,400,1e3),n.ctx.fillStyle="#222222",n.ctx.fillRect(25,0,375,650);for(var t=0;t<12;t++)n.ctx.beginPath(),n.ctx.strokeStyle="#333333",6===t&&(n.ctx.lineWidth=2,n.ctx.strokeStyle="red"),n.ctx.moveTo(23,50+50*t),n.ctx.lineTo(400,50+50*t),n.ctx.stroke();n.props.perMille.length>0&&n.drawGraph(),n.ctx.strokeStyle="gray",n.ctx.lineWidth=1,n.ctx.clearRect(0,0,25,700),n.ctx.beginPath(),n.ctx.moveTo(400,650),n.ctx.lineTo(25,650),n.ctx.lineTo(25,0),n.ctx.stroke();for(var a=0;a<12;a++)n.ctx.fillStyle="gray",n.ctx.textAlign="end",n.ctx.textBaseline="middle",n.ctx.font="15px Arial",n.ctx.fillText("".concat(Math.floor((12-a)/10),",").concat((12-a)%10),21,50+50*a);for(var r=0;r<375;r++)Math.round(e+r)%60===0&&(n.ctx.beginPath(),n.ctx.strokeStyle="gray",n.ctx.moveTo(25+r,653),n.ctx.lineTo(25+r,647),n.ctx.stroke(),n.ctx.fillStyle="gray",n.ctx.textAlign="center",n.ctx.font="15px Arial",n.ctx.fillText("".concat(Math.round(e+r)/60%24,":00"),25+r,670))}},n.mouseClickedY=null,n.thePos=null,n.handleMouseDown=function(e){n.mouseClickedY||(n.mouseClickedY=e.pageX,n.thePos=n.props.pos)},n.handleMouseUp=function(e){n.mouseClickedY=null,n.thePos=null},n.handleMouseMove=function(e){if(n.mouseClickedY){var t=n.thePos+(n.mouseClickedY-e.pageX);t<n.props.start?t=n.props.start:t>n.props.end&&(t=n.props.end),n.props.setPos(t)}},n.handleTouchStart=function(e){var t=e.touches[0];n.mouseClickedY||(n.mouseClickedY=t.pageX,n.thePos=n.props.pos)},n.handleTouchMove=function(e){var t=e.touches[0];if(n.mouseClickedY){var a=n.thePos+(n.mouseClickedY-t.pageX);a<n.props.start?a=n.props.start:a>n.props.end&&(a=n.props.end),n.props.setPos(a)}},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;this.ctx=e.getContext("2d"),this.createAxes()}},{key:"componentDidUpdate",value:function(){this.createAxes()}},{key:"render",value:function(){var e=this;this.createAxes();var t=this.props,n=t.perMille,a=t.currentTime;return r.a.createElement("div",null,r.a.createElement("div",{className:0!==this.props.drinks.length?"show":"hidden"},r.a.createElement("canvas",{height:"685px",width:"400px",ref:"canvas",onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseUp,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleMouseUp,onTouchMove:this.handleTouchMove}),r.a.createElement(u,{drinks:this.props.drinks,handleEdit:function(t,n){return e.props.handleAdd(t,n)}})),-1!==this.props.currentTime?r.a.createElement("div",{className:0!==this.props.drinks.length?"graph-nav":"graph-add"},r.a.createElement("button",{className:"add-button",onClick:function(){return e.props.handleAdd(null,null)}},"+"),0!==this.props.drinks.length?r.a.createElement("h3",null,n.length>a?Math.round(1e3*n[a])/1e3:0):null):null)}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={max:100,min:1,step:1,offset:0,unit:"",map:null},n.stepSize=30,n.mouseClickedY=null,n.drawValues=function(){var e=(n.state.max-n.state.min)/n.state.step,t=(n.props.value-n.state.min)/n.state.step;n.ctx.beginPath(),n.ctx.lineWidth=3,n.ctx.strokeStyle="#ffffff";for(var a=0;a<=e;a++)n.ctx.moveTo(n.canvas.width/2+(t-a)*n.stepSize-n.state.offset,10),n.ctx.lineTo(n.canvas.width/2+(t-a)*n.stepSize-n.state.offset,17);n.ctx.stroke()},n.drawSlider=function(){n.ctx&&(n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height),n.ctx.beginPath(),n.ctx.lineWidth=3,n.ctx.strokeStyle="#ffffff",n.ctx.moveTo(0,10),n.ctx.lineTo(n.canvas.width,10),n.ctx.stroke(),n.drawValues(),n.ctx.beginPath(),n.ctx.lineWidth=4,n.ctx.strokeStyle="#4CAF50",n.ctx.moveTo(n.canvas.width/2,5),n.ctx.lineTo(n.canvas.width/2,20),n.ctx.stroke())},n.handleTouchStart=function(e){var t=e.touches[0];n.mouseClickedY||!1===n.props.editable||(n.mouseClickedY=t.pageX)},n.handleMouseDown=function(e){n.mouseClickedY||!1===n.props.editable||(n.mouseClickedY=e.pageX)},n.handleMouseUp=function(e){n.mouseClickedY&&(console.log("Up",n.props.value),n.mouseClickedY=null,n.setState({offset:0}))},n.handleTouchMove=function(e){var t=e.touches[0];n.handleMouseMove(t)},n.handleMouseMove=function(e){if(n.mouseClickedY){var t=n.props.value,a=n.mouseClickedY-e.pageX;a<-n.stepSize/2&&parseFloat(t)<parseFloat(n.state.max)&&(n.mouseClickedY+=n.stepSize,t=parseFloat(t)+parseFloat(n.state.step),n.props.onChange({target:{value:Math.round(t/n.state.step)/Math.round(1/n.state.step),name:n.props.name}})),a>n.stepSize/2&&parseFloat(t)>parseFloat(n.state.min)&&(n.mouseClickedY-=n.stepSize,t=parseFloat(t)-parseFloat(n.state.step),n.props.onChange({target:{value:Math.round(t/n.state.step)/Math.round(1/n.state.step),name:n.props.name}})),t<n.state.min&&(t=n.state.min),t>n.state.max&&(t=n.state.max),n.setState({offset:a,value:Math.round(t/n.state.step)/Math.round(1/n.state.step)})}},n.getDay=function(e){if(console.log(n.props.currentTime),!n.props.currentTime)return"";var t=Math.floor(n.props.currentTime/1440),a=Math.floor(e/1440);return console.log("day",t,a),t===a?" Today":t<a?" Tomorrow":t>a?"Yesterday":void 0},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.map,t=this.state.max,n=this.state.min,a=this.state.step,r=this.state.unit;this.props.map&&(e=parseInt(this.props.map)),this.props.max&&(t=parseInt(this.props.max)),this.props.min&&(n=parseInt(this.props.min)),this.props.step&&(a=parseFloat(this.props.step)),this.props.unit&&(r=this.props.unit),this.setState({map:e,max:t,min:n,step:a,unit:r}),console.log(this.state),this.canvas=this.refs.canvas,this.ctx=this.canvas.getContext("2d")}},{key:"render",value:function(){return this.drawSlider(),console.log("time",this.props.value),r.a.createElement("div",{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseUp,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleMouseUp,onTouchMove:this.handleTouchMove,className:"my-slider"},r.a.createElement("label",null,"clock"!==this.state.unit?"".concat(this.props.map?this.props.map[this.props.value]:this.props.value).concat(this.state.unit):"".concat(Math.floor(this.props.value/60%24),":").concat(this.props.value%60<10?"0".concat(this.props.value%60):this.props.value%60).concat(this.getDay(this.props.value))),r.a.createElement("br",null),r.a.createElement("canvas",{width:"400px",height:"40px",ref:"canvas"}))}}]),t}(a.Component),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={type:"",strength:4.5,amount:33,index:0,clock:100,editable:!0},n.types=[{name:"\xd6l",strength:5,amount:40},{name:"Vin",strength:12,amount:15},{name:"Drink",strength:40,amount:4},{name:"Cider",strength:5,amount:33},{name:"Sprit",strength:40,amount:4}],n.imgMap={"\xd6l":"icons/ol.svg",Vin:"icons/vin.svg",Drink:"icons/drink.svg",Cider:"icons/cider.svg",Sprit:"icons/sprit.svg"},n.typeToIndex=function(e){var t=0;return n.types.forEach((function(n,a){n.name===e&&(t=a)})),t},n.handleSubmit=function(){null===n.props.index?n.props.handleAdd(n.state.amount,n.state.strength,n.types[n.state.index].name,n.state.clock):n.props.handleEdit(n.props.index,n.state.amount,n.state.strength,n.types[n.state.index].name,n.state.clock)},n.onSubmit=function(e){e.preventDefault()},n.handleClose=function(){null===n.props.index?n.props.handleAdd(null,null):n.props.handleRemove(n.props.index)},n.handleChange=function(e){n.state.editable&&("amount"===e.target.name&&n.setState({amount:e.target.value}),"strength"===e.target.name&&n.setState({strength:e.target.value}),"clock"===e.target.name&&n.setState({clock:e.target.value}))},n.handleType=function(e){if(n.state.editable){var t=n.state.index+e;n.setState({index:t,amount:n.types[t].amount,strength:n.types[t].strength})}},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=!(this.props.handleRemove===this.props.handleEdit);if(null!==this.props.index)return console.log("edit"),this.setState({index:this.typeToIndex(this.props.drink.type),amount:this.props.drink.amount,strength:this.props.drink.strength,clock:this.props.drink.time,editable:e}),void console.log(this.state);this.setState({clock:this.props.currentTime}),this.handleType(0)}},{key:"render",value:function(){var e=this;this.currentTime=this.props.currentTime,console.log(this.state.clock);var t=this.state.index;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-page"},r.a.createElement("button",{className:"close-button",onClick:this.handleClose},null!==this.props.index?this.state.editable?"Remove":"Back":"Avbryt"),r.a.createElement("form",{onChange:this.handleChange,onSubmit:this.onSubmit,className:"forms"},r.a.createElement("div",{className:"type-selecter"},0!==t&&this.state.editable?r.a.createElement("button",{onClick:function(){return e.handleType(-1)}},"\u25c0"):r.a.createElement("p",null),r.a.createElement("div",null,r.a.createElement("img",{src:this.imgMap[this.types[t].name],height:"100px",alt:"hej"}),r.a.createElement("label",null,this.types[t].name)),t!==this.types.length-1&&this.state.editable?r.a.createElement("button",{onClick:function(){return e.handleType(1)}},"\u25b6"):r.a.createElement("p",null)),r.a.createElement(d,{onChange:this.handleChange,value:this.state.amount,name:"amount",min:"1",max:"100",unit:" cl",editable:this.state.editable}),r.a.createElement(d,{onChange:this.handleChange,value:this.state.strength,step:"0.1",name:"strength",min:"0",max:"100",unit:"%",editable:this.state.editable}),r.a.createElement(d,{onChange:this.handleChange,value:this.state.clock,name:"clock",min:"0",max:"2880",currentTime:this.currentTime,unit:"clock",editable:this.state.editable})),this.state.editable?r.a.createElement("button",{onClick:this.handleSubmit,className:"confirm-button"},"Klar"):r.a.createElement("div",null)))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={gender:1,weight:40,length:55},n.map={Man:1,Woman:2,1:"Man",2:"Woman"},n.componentWillUnmount=function(){localStorage.setItem("userWeight",n.state.weight),localStorage.setItem("userLength",n.state.length),localStorage.setItem("userGender",n.map[n.state.gender])},n.handleChange=function(e){"gender"===e.target.name&&n.setState({gender:e.target.value}),"weight"===e.target.name&&n.setState({weight:e.target.value}),"length"===e.target.name&&n.setState({length:e.target.value}),"value"===e.target.name&&n.setState({value:e.target.value})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.map[localStorage.getItem("userGender")],t=localStorage.getItem("userWeight"),n=localStorage.getItem("userLength");this.setState({gender:e,weight:t,length:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"settings"},r.a.createElement("form",{onChange:this.handleChange,className:"forms"},r.a.createElement(d,{onChange:this.handleChange,value:this.state.gender,name:"gender",min:"1",max:"2",map:this.map}),r.a.createElement(d,{onChange:this.handleChange,value:this.state.weight,name:"weight",min:"40",max:"220",unit:" kg"}),r.a.createElement(d,{onChange:this.handleChange,value:this.state.length,name:"length",min:"55",max:"220",unit:" cm"})))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"history-button",onClick:function(){return e.props.pickOccaion(e.props.index)}},r.a.createElement("p",null,"".concat(this.props.occasion.year,"-").concat(this.props.occasion.month+1,"-").concat(this.props.occasion.date)),r.a.createElement("p",null,"0.05"))}}]),t}(a.Component),f=[];function k(e,t){for(var n=1;n<61;n++){var a=f[n+t-1]?f[n+t-1]:0;f[n+t-1]=e/1830*(61-n)+a}}var x=function(e){console.log("Create Graph..."),f.splice(0,f.length);var t=[],n=0,a=e[n];if(!a)return{end:0,start:0,perMille:[]};for(var r,s,L=0,o=0;(a||L>0)&&o<2880;){for(;(null===(i=a)||void 0===i?void 0:i.time)===o;){var i;k((r=a.amount,s=a.strength,r*(s/100)*7.89/(localStorage.getItem("userWeight")*("man"===localStorage.getItem("userLength")?.7:.6))),o),a=e[++n]}L+=f[o]?f[o]:0,(L-=.25/60)<0&&(L=0),t.push(L),o++}return console.log("Graph Done"),{end:o+400,start:e[0].time-200,perMille:t}},C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={occasion:null,pos:0,end:0,start:0,perMille:null},n.clear=function(){localStorage.clear()},n.pickOccaion=function(e){var t=x(n.props.occasions[e].drinks);n.setState({occasion:n.props.occasions[e],pos:t.start,end:t.end,start:t.start,perMille:t.perMille})},n.handleAdd=function(e,t){n.setState({adding:!0,index:e,drink:t})},n.handleDrink=function(){n.setState({adding:!1})},n.setPos=function(e){n.setState({pos:e})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(),r.a.createElement("div",{className:"page"},this.state.occasion?r.a.createElement(p,{currentTime:-1,pos:this.state.pos,end:this.state.end,start:this.state.start,setPos:this.setPos,perMille:this.state.perMille,handleAdd:this.handleAdd,drinks:this.state.occasion.drinks}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"History"),r.a.createElement("div",{className:"history"},this.props.occasions.map((function(t,n){return r.a.createElement(v,{key:n,index:n,occasion:t,pickOccaion:e.pickOccaion})})),r.a.createElement("div",{className:"history-button"},r.a.createElement("button",{className:"close-button",onClick:this.clear},"Clear")))),this.state.adding?r.a.createElement(m,{handleAdd:this.handleDrink,handleEdit:this.handleDrink,handleRemove:this.handleDrink,drink:this.state.drink,index:this.state.index}):null)}}]),t}(a.Component),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{width:"30px",height:"30px",viewBox:"0 0 40 40",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"bevel",strokeMiterlimit:"1.5"}},r.a.createElement("g",{transform:"matrix(1,0,0,1,-98,0)"},r.a.createElement("g",{id:"Artboard2",transform:"matrix(0.327869,0,0,0.412371,124.557,-34.6392)"},r.a.createElement("g",{transform:"matrix(1.59762,0,0,2.425,-209.318,92.7568)"},r.a.createElement("ellipse",{cx:"118.5",cy:"30.5",rx:"10.5",ry:"1.5"}),r.a.createElement("path",{d:"M118.771,29L119.04,29.002L119.307,29.004L119.573,29.008L119.837,29.012L120.098,29.017L120.358,29.023L120.615,29.03L120.87,29.038L121.123,29.047L121.373,29.057L121.621,29.067L121.866,29.079L122.109,29.091L122.348,29.104L122.585,29.118L122.819,29.133L123.05,29.148L123.278,29.164L123.503,29.181L123.725,29.199L123.943,29.217L124.158,29.236L124.369,29.256L124.577,29.277L124.781,29.298L124.981,29.32L125.177,29.343L125.37,29.366L125.558,29.39L125.743,29.414L125.923,29.44L126.099,29.465L126.271,29.492L126.438,29.519L126.601,29.546L126.759,29.574L126.913,29.603L127.062,29.632L127.206,29.662L127.345,29.692L127.479,29.722L127.608,29.754L127.732,29.785L127.851,29.817L127.964,29.85L128.072,29.883L128.174,29.916L128.271,29.95L128.362,29.984L128.448,30.019L128.528,30.054L128.601,30.09L128.669,30.125L128.731,30.161L128.787,30.198L128.836,30.235L128.858,30.253L128.879,30.272L128.898,30.29L128.916,30.309L128.931,30.328L128.946,30.347L128.958,30.366L128.969,30.385L128.979,30.404L128.986,30.423L128.992,30.442L128.997,30.461L128.999,30.481L129,30.5L128.999,30.519L128.997,30.539L128.992,30.558L128.986,30.577L128.979,30.596L128.969,30.615L128.958,30.634L128.946,30.653L128.931,30.672L128.916,30.691L128.898,30.71L128.879,30.728L128.858,30.747L128.836,30.765L128.787,30.802L128.731,30.839L128.669,30.875L128.601,30.91L128.528,30.946L128.448,30.981L128.362,31.016L128.271,31.05L128.174,31.084L128.072,31.117L127.964,31.15L127.851,31.183L127.732,31.215L127.608,31.246L127.479,31.278L127.345,31.308L127.206,31.338L127.062,31.368L126.913,31.397L126.759,31.426L126.601,31.454L126.438,31.481L126.271,31.508L126.099,31.535L125.923,31.56L125.743,31.586L125.558,31.61L125.37,31.634L125.177,31.657L124.981,31.68L124.781,31.702L124.577,31.723L124.369,31.744L124.158,31.764L123.943,31.783L123.725,31.801L123.503,31.819L123.278,31.836L123.05,31.852L122.819,31.867L122.585,31.882L122.348,31.896L122.109,31.909L121.866,31.921L121.621,31.933L121.373,31.943L121.123,31.953L120.87,31.962L120.615,31.97L120.358,31.977L120.098,31.983L119.837,31.988L119.573,31.992L119.307,31.996L119.04,31.998L118.771,32L118.5,32L118.229,32L117.96,31.998L117.693,31.996L117.427,31.992L117.163,31.988L116.902,31.983L116.642,31.977L116.385,31.97L116.13,31.962L115.877,31.953L115.627,31.943L115.379,31.933L115.134,31.921L114.891,31.909L114.652,31.896L114.415,31.882L114.181,31.867L113.95,31.852L113.722,31.836L113.497,31.819L113.275,31.801L113.057,31.783L112.842,31.764L112.631,31.744L112.423,31.723L112.219,31.702L112.019,31.68L111.823,31.657L111.63,31.634L111.442,31.61L111.257,31.586L111.077,31.56L110.901,31.535L110.729,31.508L110.562,31.481L110.399,31.454L110.241,31.426L110.087,31.397L109.938,31.368L109.794,31.338L109.655,31.308L109.521,31.278L109.392,31.246L109.268,31.215L109.149,31.183L109.036,31.15L108.928,31.117L108.826,31.084L108.729,31.05L108.638,31.016L108.552,30.981L108.472,30.946L108.399,30.91L108.331,30.875L108.269,30.839L108.213,30.802L108.164,30.765L108.142,30.747L108.121,30.728L108.102,30.71L108.084,30.691L108.069,30.672L108.054,30.653L108.042,30.634L108.031,30.615L108.021,30.596L108.014,30.577L108.008,30.558L108.003,30.539L108.001,30.519L108,30.5L108.001,30.481L108.003,30.461L108.008,30.442L108.014,30.423L108.021,30.404L108.031,30.385L108.042,30.366L108.054,30.347L108.069,30.328L108.084,30.309L108.102,30.29L108.121,30.272L108.142,30.253L108.164,30.235L108.213,30.198L108.269,30.161L108.331,30.125L108.399,30.09L108.472,30.054L108.552,30.019L108.638,29.984L108.729,29.95L108.826,29.916L108.928,29.883L109.036,29.85L109.149,29.817L109.268,29.785L109.392,29.754L109.521,29.722L109.655,29.692L109.794,29.662L109.938,29.632L110.087,29.603L110.241,29.574L110.399,29.546L110.562,29.519L110.729,29.492L110.901,29.465L111.077,29.44L111.257,29.414L111.442,29.39L111.63,29.366L111.823,29.343L112.019,29.32L112.219,29.298L112.423,29.277L112.631,29.256L112.842,29.236L113.057,29.217L113.275,29.199L113.497,29.181L113.722,29.164L113.95,29.148L114.181,29.133L114.415,29.118L114.652,29.104L114.891,29.091L115.134,29.079L115.379,29.067L115.627,29.057L115.877,29.047L116.13,29.038L116.385,29.03L116.642,29.023L116.902,29.017L117.163,29.012L117.427,29.008L117.693,29.004L117.96,29.002L118.229,29L118.5,29L118.771,29Z"})),r.a.createElement("g",{transform:"matrix(3.05,0,0,2.425,-379.9,84)"},r.a.createElement("path",{d:"M111.6,11L124.4,11",style:{fill:"none",stroke:"#666",strokeWidth:"1px"}})),r.a.createElement("g",{transform:"matrix(3.05,0,0,2.425,-381.425,70.0563)"},r.a.createElement("path",{d:"M126.417,19.457L126.428,19.51L126.438,19.563L126.447,19.617L126.456,19.671L126.464,19.725L126.471,19.779L126.477,19.833L126.483,19.887L126.5,20L126.492,20L126.495,20.062L126.498,20.125L126.499,20.187L126.5,20.25L126.499,20.321L126.497,20.392L126.494,20.462L126.49,20.533L126.484,20.603L126.477,20.673L126.468,20.743L126.459,20.812L126.448,20.881L126.436,20.95L126.422,21.019L126.408,21.087L126.392,21.155L126.375,21.223L126.357,21.291L126.337,21.358L126.317,21.425L126.295,21.491L126.272,21.558L126.248,21.624L126.223,21.69L126.196,21.755L126.169,21.82L126.14,21.885L126.11,21.949L126.079,22.013L126.047,22.077L126.014,22.14L125.98,22.203L125.945,22.266L125.908,22.328L125.871,22.39L125.832,22.451L125.793,22.513L125.752,22.573L125.711,22.634L125.668,22.693L125.624,22.753L125.58,22.812L125.534,22.871L125.487,22.929L125.439,22.987L125.391,23.044L125.341,23.101L125.291,23.158L125.239,23.214L125.186,23.269L125.133,23.324L125.079,23.379L125.023,23.433L124.967,23.487L124.91,23.54L124.852,23.593L124.793,23.645L124.733,23.696L124.672,23.748L124.611,23.798L124.548,23.849L124.485,23.898L124.421,23.947L124.356,23.996L124.29,24.044L124.223,24.091L124.156,24.138L124.087,24.185L124.018,24.231L123.949,24.276L123.878,24.32L123.806,24.365L123.734,24.408L123.661,24.451L123.588,24.493L123.513,24.535L123.438,24.576L123.362,24.617L123.285,24.657L123.208,24.696L123.13,24.735L123.051,24.773L122.972,24.81L122.891,24.847L122.811,24.883L122.729,24.918L122.647,24.953L122.564,24.987L122.481,25.021L122.397,25.054L122.312,25.086L122.227,25.117L122.141,25.148L122.054,25.178L121.967,25.207L121.879,25.236L121.791,25.264L121.702,25.291L121.613,25.317L121.523,25.343L121.432,25.368L121.341,25.393L121.249,25.416L121.157,25.439L121.065,25.461L120.972,25.482L120.878,25.503L120.784,25.522L120.689,25.541L120.594,25.559L120.498,25.577L120.402,25.593L120.306,25.609L120.209,25.624L120.111,25.638L120.014,25.652L119.915,25.664L119.817,25.676L119.718,25.687L119.618,25.697L119.518,25.706L119.418,25.714L119.317,25.722L119.216,25.728L119.115,25.734L119.013,25.739L118.911,25.743L118.809,25.746L118.706,25.748L118.603,25.75L118.5,25.75L118.397,25.75L118.294,25.748L118.191,25.746L118.089,25.743L117.987,25.739L117.885,25.734L117.784,25.728L117.683,25.722L117.582,25.714L117.482,25.706L117.382,25.697L117.282,25.687L117.183,25.676L117.085,25.664L116.986,25.652L116.889,25.638L116.791,25.624L116.694,25.609L116.598,25.593L116.502,25.577L116.406,25.559L116.311,25.541L116.216,25.522L116.122,25.503L116.028,25.482L115.935,25.461L115.843,25.439L115.751,25.416L115.659,25.393L115.568,25.368L115.477,25.343L115.387,25.317L115.298,25.291L115.209,25.264L115.121,25.236L115.033,25.207L114.946,25.178L114.859,25.148L114.773,25.117L114.688,25.086L114.603,25.054L114.519,25.021L114.436,24.987L114.353,24.953L114.271,24.918L114.189,24.883L114.109,24.847L114.028,24.81L113.949,24.773L113.87,24.735L113.792,24.696L113.715,24.657L113.638,24.617L113.562,24.576L113.487,24.535L113.412,24.493L113.339,24.451L113.266,24.408L113.194,24.365L113.122,24.32L113.051,24.276L112.982,24.231L112.913,24.185L112.844,24.138L112.777,24.091L112.71,24.044L112.644,23.996L112.579,23.947L112.515,23.898L112.452,23.849L112.389,23.798L112.328,23.748L112.267,23.696L112.207,23.645L112.148,23.593L112.09,23.54L112.033,23.487L111.977,23.433L111.921,23.379L111.867,23.324L111.814,23.269L111.761,23.214L111.709,23.158L111.659,23.101L111.609,23.044L111.561,22.987L111.513,22.929L111.466,22.871L111.42,22.812L111.376,22.753L111.332,22.693L111.289,22.634L111.248,22.573L111.207,22.513L111.168,22.451L111.129,22.39L111.092,22.328L111.055,22.266L111.02,22.203L110.986,22.14L110.953,22.077L110.921,22.013L110.89,21.949L110.86,21.885L110.831,21.82L110.804,21.755L110.777,21.69L110.752,21.624L110.728,21.558L110.705,21.491L110.683,21.425L110.663,21.358L110.643,21.291L110.625,21.223L110.608,21.155L110.592,21.087L110.578,21.019L110.564,20.95L110.552,20.881L110.541,20.812L110.532,20.743L110.523,20.673L110.516,20.603L110.51,20.533L110.506,20.462L110.503,20.392L110.501,20.321L110.5,20.25L110.501,20.187L110.502,20.125L110.505,20.062L110.508,20L110.5,20L110.517,19.887L110.523,19.833L110.529,19.779L110.536,19.725L110.544,19.671L110.553,19.617L110.562,19.563L110.572,19.51L110.583,19.457L112.1,9.5L124.9,9.5L126.417,19.457ZM113.818,11.5L112.553,19.807L112.535,19.895L112.53,19.921L112.525,19.946L112.521,19.972L112.517,19.998L112.514,20.024L112.511,20.05L112.504,20.114L112.505,20.114L112.502,20.16L112.501,20.19L112.5,20.22L112.5,20.249L112.5,20.284L112.501,20.318L112.503,20.352L112.505,20.386L112.508,20.419L112.511,20.453L112.515,20.486L112.52,20.519L112.525,20.553L112.531,20.586L112.537,20.619L112.545,20.653L112.552,20.686L112.561,20.72L112.57,20.753L112.579,20.787L112.59,20.82L112.601,20.854L112.613,20.888L112.625,20.922L112.638,20.956L112.652,20.991L112.667,21.025L112.682,21.06L112.698,21.095L112.715,21.129L112.732,21.164L112.751,21.2L112.77,21.235L112.79,21.27L112.811,21.306L112.832,21.341L112.855,21.377L112.878,21.413L112.902,21.449L112.927,21.485L112.953,21.521L112.979,21.558L113.007,21.594L113.035,21.63L113.064,21.667L113.094,21.703L113.125,21.74L113.157,21.776L113.19,21.813L113.224,21.849L113.258,21.886L113.293,21.922L113.33,21.959L113.367,21.995L113.405,22.031L113.444,22.067L113.483,22.103L113.524,22.139L113.565,22.175L113.608,22.211L113.651,22.246L113.695,22.282L113.74,22.317L113.786,22.352L113.832,22.387L113.88,22.422L113.928,22.456L113.977,22.49L114.027,22.524L114.078,22.558L114.13,22.591L114.182,22.624L114.235,22.657L114.289,22.69L114.344,22.722L114.4,22.754L114.456,22.786L114.513,22.817L114.571,22.848L114.629,22.878L114.689,22.908L114.749,22.938L114.81,22.967L114.871,22.996L114.933,23.025L114.996,23.053L115.06,23.081L115.124,23.108L115.189,23.135L115.255,23.161L115.321,23.187L115.388,23.212L115.456,23.237L115.524,23.262L115.593,23.285L115.662,23.309L115.732,23.332L115.803,23.354L115.874,23.376L115.946,23.397L116.019,23.418L116.092,23.438L116.165,23.458L116.239,23.477L116.314,23.495L116.389,23.513L116.465,23.53L116.541,23.547L116.617,23.563L116.695,23.578L116.772,23.593L116.85,23.607L116.929,23.621L117.008,23.634L117.088,23.646L117.167,23.658L117.248,23.669L117.329,23.679L117.41,23.689L117.492,23.698L117.574,23.706L117.656,23.713L117.739,23.72L117.822,23.726L117.906,23.732L117.989,23.737L118.074,23.741L118.158,23.744L118.243,23.747L118.329,23.748L118.414,23.75L118.5,23.75L118.586,23.75L118.671,23.748L118.757,23.747L118.842,23.744L118.926,23.741L119.011,23.737L119.094,23.732L119.178,23.726L119.261,23.72L119.344,23.713L119.426,23.706L119.508,23.698L119.59,23.689L119.671,23.679L119.752,23.669L119.833,23.658L119.912,23.646L119.992,23.634L120.071,23.621L120.15,23.607L120.228,23.593L120.305,23.578L120.383,23.563L120.459,23.547L120.535,23.53L120.611,23.513L120.686,23.495L120.761,23.477L120.835,23.458L120.909,23.438L120.981,23.418L121.054,23.397L121.126,23.376L121.197,23.354L121.268,23.332L121.338,23.309L121.407,23.285L121.476,23.262L121.544,23.237L121.612,23.212L121.679,23.187L121.745,23.161L121.811,23.135L121.876,23.108L121.94,23.081L122.004,23.053L122.067,23.025L122.129,22.996L122.19,22.967L122.251,22.938L122.311,22.908L122.371,22.878L122.429,22.848L122.487,22.817L122.544,22.786L122.6,22.754L122.656,22.722L122.711,22.69L122.765,22.657L122.818,22.624L122.87,22.591L122.922,22.558L122.973,22.524L123.023,22.49L123.072,22.456L123.12,22.422L123.168,22.387L123.214,22.352L123.26,22.317L123.305,22.282L123.349,22.246L123.392,22.211L123.435,22.175L123.476,22.139L123.517,22.103L123.556,22.067L123.595,22.031L123.633,21.995L123.67,21.959L123.707,21.922L123.742,21.886L123.776,21.849L123.81,21.813L123.843,21.776L123.875,21.74L123.906,21.703L123.936,21.667L123.965,21.63L123.993,21.594L124.021,21.558L124.047,21.521L124.073,21.485L124.098,21.449L124.122,21.413L124.145,21.377L124.168,21.341L124.189,21.306L124.21,21.27L124.23,21.235L124.249,21.2L124.268,21.164L124.285,21.129L124.302,21.095L124.318,21.06L124.333,21.025L124.348,20.991L124.362,20.956L124.375,20.922L124.387,20.888L124.399,20.854L124.41,20.82L124.421,20.787L124.43,20.753L124.439,20.72L124.448,20.686L124.455,20.653L124.463,20.619L124.469,20.586L124.475,20.553L124.48,20.519L124.485,20.486L124.489,20.453L124.492,20.419L124.495,20.385L124.497,20.352L124.499,20.318L124.5,20.284L124.5,20.249L124.5,20.22L124.499,20.19L124.498,20.16L124.495,20.114L124.496,20.114L124.489,20.05L124.486,20.024L124.483,19.998L124.479,19.972L124.475,19.946L124.47,19.921L124.465,19.895L124.447,19.807L123.182,11.5L113.818,11.5Z"})),r.a.createElement("g",{transform:"matrix(3.05,0,0,2.425,-379.9,84)"},r.a.createElement("path",{d:"M118,19L118,34.111",style:{fill:"none",strokeWidth:"2px"}})))))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{width:"30px",height:"30px",viewBox:"0 0 40 40",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeMiterlimit:"1.5"}},r.a.createElement("g",{transform:"matrix(1,0,0,1,-53,-7.10543e-15)"},r.a.createElement("g",{id:"Artboard1",transform:"matrix(0.327869,0,0,0.412371,79.5574,-34.6392)"},r.a.createElement("g",{transform:"matrix(3.05,0,0,2.78227,-291.45,79.0973)"},r.a.createElement("path",{d:"M89,32.8C87.175,32.315 84.27,32 81,32C77.73,32 74.825,32.315 73,32.8L73,7.736C74.825,7.25 77.73,6.935 81,6.935C84.27,6.935 87.175,7.25 89,7.736L89,32.8Z",style:{fill:"none",strokeWidth:"2px"}})),r.a.createElement("g",{transform:"matrix(3.05,0,0,2.78227,-242.65,79.0973)"},r.a.createElement("path",{d:"M89,32.8C87.175,32.315 84.27,32 81,32C77.73,32 74.825,32.315 73,32.8L73,7.736C74.825,7.25 77.73,6.935 81,6.935C84.27,6.935 87.175,7.25 89,7.736L89,32.8Z",style:{fill:"none",strokeWidth:"2px"}})),r.a.createElement("g",{transform:"matrix(3.05,0,0,2.52002,-242.65,91.2753)"},r.a.createElement("path",{d:"M73,4L73,32.8",style:{fill:"none",strokeWidth:"2px",strokeLinecap:"butt",strokeLinejoin:"bevel"}})))))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{width:"30px",height:"30px",viewBox:"0 0 40 40",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.5"}},r.a.createElement("g",{id:"Artboard3",transform:"matrix(0.327869,0,0,0.412371,26.5574,-34.6392)"},r.a.createElement("g",{transform:"matrix(3.34652,0,0,2.66076,-86.9305,79.2848)"},r.a.createElement("path",{d:"M21.568,4.077C20.525,3.974 19.475,3.974 18.432,4.077L18.125,7.641C17.208,7.781 16.308,8.021 15.444,8.36L13.397,5.426C12.442,5.859 11.532,6.384 10.68,6.994L12.197,10.234C11.472,10.814 10.814,11.472 10.234,12.197L6.994,10.68C6.384,11.532 5.859,12.442 5.426,13.397L8.36,15.444C8.021,16.308 7.781,17.208 7.641,18.125L4.077,18.432C3.974,19.475 3.974,20.525 4.077,21.568L7.641,21.875C7.781,22.792 8.021,23.692 8.36,24.556L5.426,26.603C5.859,27.558 6.384,28.468 6.994,29.32L10.234,27.803C10.814,28.528 11.472,29.186 12.197,29.766L10.68,33.006C11.532,33.616 12.442,34.141 13.397,34.574L15.444,31.64C16.308,31.979 17.208,32.219 18.125,32.359L18.432,35.923C19.475,36.026 20.525,36.026 21.568,35.923L21.875,32.359C22.792,32.219 23.692,31.979 24.556,31.64L26.603,34.574C27.558,34.141 28.468,33.616 29.32,33.006L27.803,29.766C28.528,29.186 29.186,28.528 29.766,27.803L33.006,29.32C33.616,28.468 34.141,27.558 34.574,26.603L31.64,24.556C31.979,23.692 32.219,22.792 32.359,21.875L35.923,21.568C36.026,20.525 36.026,19.475 35.923,18.432L32.359,18.125C32.219,17.208 31.979,16.308 31.64,15.444L34.574,13.397C34.141,12.442 33.616,11.532 33.006,10.68L29.766,12.197C29.186,11.472 28.528,10.814 27.803,10.234L29.32,6.994C28.468,6.384 27.558,5.859 26.603,5.426L24.556,8.36C23.692,8.021 22.792,7.781 21.875,7.641L21.568,4.077ZM20,10.462C25.264,10.462 29.538,14.736 29.538,20C29.538,25.264 25.264,29.538 20,29.538C14.736,29.538 10.462,25.264 10.462,20C10.462,14.736 14.736,10.462 20,10.462Z"}))))}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={occasions:[],adding:!1,page:"Graph",currentTime:0,currentDrinks:[],perMille:[],pos:0,index:null,drink:null},n.initLocalStorage=function(){localStorage.getItem("userWeight")||localStorage.setItem("userWeight","80"),localStorage.getItem("userLength")||localStorage.setItem("userLength","190"),localStorage.getItem("userGender")||localStorage.setItem("userGender","Man"),localStorage.getItem("occasions")||localStorage.setItem("occasions",JSON.stringify([]))},n.saveChange=function(e){n.setState({adding:!1,occasions:e,currentTime:n.getCurrentTime(e),currentDrinks:n.getCurrentDrinks(e),perMille:x(n.getCurrentDrinks(e)).perMille,end:x(n.getCurrentDrinks(e)).end,start:x(n.getCurrentDrinks(e)).start,pos:n.getCurrentTime(e)}),localStorage.setItem("occasions",JSON.stringify(e))},n.removeDrink=function(e){var t=n.state.occasions,a=n.getCurrentOccasion(t);t[a].drinks.splice(e,1),0===t[a].drinks.length&&t.splice(a,1),n.saveChange(t)},n.editDrink=function(e,t,a,r,s){var L=n.state.occasions,o=n.getCurrentOccasion(L),i=L[o].drinks[e];i.amount=parseInt(t),i.strength=parseInt(a),i.type=r,i.time=s,L[o].drinks[e]=i,L[o].drinks.sort((function(e,t){return e.time-t.time})),n.saveChange(L)},n.addDrink=function(e,t,a,r){var s=n.state.occasions,L=n.getCurrentOccasion(s);if(!e)return n.setState({adding:!1}),void(0===s[L].drinks.length&&(s.splice(L,1),n.saveChange(s)));var o={time:r,amount:e,strength:t,type:a};s[L].drinks.push(o),s[L].drinks.sort((function(e,t){return e.time-t.time})),r&&n.saveChange(s)},n.handleAdd=function(e,t){var a=new Date,r=n.state.occasions;if(null===n.getCurrentOccasion(r)){var s={year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),drinks:[]};r.push(s),n.saveChange(r)}n.setState({adding:!0,index:e,drink:t})},n.setPos=function(e){n.setState({pos:e})},n.handlePage=function(e){"Graph"===e&&e===n.state.page&&n.setState({pos:n.getCurrentTime(n.state.occasions)}),n.setState({page:e})},n.getAddDate=function(e){if(console.log("add",e),0===e.length)return null;var t=e.length-1,n=new Date,a=new Date(e[t].year,e[t].month,e[t].date);return(new Date(n.getFullYear(),n.getMonth(),n.getDate())-a)/6e4},n.getCurrentOccasion=function(e){var t=e.length-1;if(e.length<1)return null;var n=new Date,a=new Date(e[t].year,e[t].month,e[t].date),r=new Date(n.getFullYear(),n.getMonth(),n.getDate());return(a-r)/864e5===-1&&n.getHours()<10||a-r===0?t:null},n.getCurrentDrinks=function(e){var t=e[n.getCurrentOccasion(e)];return t?t.drinks:[]},n.getCurrentTime=function(e){if(null===n.getAddDate(e))return null;var t=new Date;return 60*t.getHours()+t.getMinutes()+n.getAddDate(e)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.initLocalStorage();var t=JSON.parse(localStorage.getItem("occasions")),n=this.getCurrentTime(t);this.setState({occasions:t,currentTime:n,currentDrinks:this.getCurrentDrinks(t),perMille:x(this.getCurrentDrinks(t)).perMille,end:x(this.getCurrentDrinks(t)).end,start:x(this.getCurrentDrinks(t)).start,pos:n}),setInterval((function(){e.setState({currentTime:e.getCurrentTime(e.state.occasions)})}),6e4),console.log(this.state.occasions)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page"},"Graph"===this.state.page?r.a.createElement(p,{currentTime:this.state.currentTime,pos:this.state.pos,end:this.state.end,start:this.state.start,setPos:this.setPos,perMille:this.state.perMille,handleAdd:this.handleAdd,drinks:this.state.currentDrinks}):null,"History"===this.state.page?r.a.createElement(C,{occasions:this.state.occasions}):null,"Settings"===this.state.page?r.a.createElement(g,null):null,this.state.adding?r.a.createElement(m,{currentTime:this.state.currentTime,handleAdd:this.addDrink,handleEdit:this.editDrink,handleRemove:this.removeDrink,drink:this.state.drink,index:this.state.index}):null),r.a.createElement("div",{className:"nav"},r.a.createElement("button",{onClick:function(){return e.handlePage("Graph")},className:"Graph"===this.state.page?"open":"close"},r.a.createElement(b,null),"Promille"),r.a.createElement("button",{onClick:function(){return e.handlePage("History")},className:"History"===this.state.page?"open":"close"},r.a.createElement(y,null),"Historik"),r.a.createElement("button",{onClick:function(){return e.handlePage("Settings")},className:"Settings"===this.state.page?"open":"close"},r.a.createElement(M,null),"Settings")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));L.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c9cec665.chunk.js.map