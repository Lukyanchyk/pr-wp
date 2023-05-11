(self.webpackChunkneve=self.webpackChunkneve||[]).push([[557],{202:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(307),r=n(444);const i=(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},557:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var o=n(307),r=n(697),i=n.n(r);const a=({fontFace:e,onClick:t,label:n})=>{const r={fontFamily:e+", sans-serif"};return(0,o.createElement)("a",{href:"#font-list",onClick:e=>{e.stopPropagation(),t()}},(0,o.createElement)("span",{className:"neve-font-family"},n||e),(0,o.createElement)("span",{className:"neve-font-preview",style:r},"Abc"))};a.propTypes={fontFace:i().string.isRequired,onClick:i().func.isRequired,label:i().string};const l=a;var c=n(82),s=n.n(c),u=n(609),p=n(444);const f=(0,o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(p.Path,{d:"M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"}));var m=n(202),h=n(736);const b=({fonts:e,selected:t,onFontChoice:n,inheritDefault:r,maybeGetTypekit:i,systemFonts:a})=>{const[c,p]=(0,o.useState)(!1),[b,d]=(0,o.useState)(""),[y,v]=(0,o.useState)(20),g=i(t);return(0,o.createElement)("div",{className:"neve-font-family-control"},(0,o.createElement)("span",{className:"customize-control-title"},(0,h.__)("Font Family","neve")),(0,o.createElement)(u.Button,{className:"font-family-selector-toggle",isSecondary:!0,onClick:()=>{p(!0)}},(0,o.createElement)("span",{className:"ff-name"},t||(r?(0,h.__)("Inherit","neve"):(0,h.__)("Default","neve"))),(0,o.createElement)("span",{className:"ff-preview",style:{fontFamily:g||'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'}},"Abc"),c&&(0,o.createElement)(u.Popover,{position:"bottom left",onFocusOutside:()=>{p(!1),d("")}},e?(()=>{const c=(()=>{const t={};return b?(Object.keys(e).map((n=>(t[n]=e[n].filter((e=>e.toLowerCase().includes(b.toLowerCase()))),n))),t):e})(),g=[];return a||g.push((0,o.createElement)("li",{key:"default",className:"selected"},(0,o.createElement)(l,{fontFace:"default",onClick:()=>{p(!1),d(""),n("system",!1)},label:r?(0,h.__)("Inherit","neve"):(0,h.__)("Default","neve")}))),Object.keys(c).map((e=>a&&"System"!==e?null:(c[e].length>0&&g.push((0,o.createElement)("li",{className:"font-group-header",key:e},e)),c[e].map(((r,a)=>(a<y&&g.push((0,o.createElement)("li",{key:r,className:r===t?"selected":""},(0,o.createElement)(l,{delayLoad:!1,label:r,fontFace:i(r),onClick:()=>{n(e,r),p(!1),d("")}}))),r))),e))),y<g.length&&g.push((0,o.createElement)("li",{className:"load-more",key:"load-more"},(0,o.createElement)(s(),{offset:{top:20},minTopValue:1,partialVisibility:!0,onChange:e=>{e&&v(y+30)}},(0,o.createElement)(u.Icon,{icon:f})))),(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"popover-content"},(0,o.createElement)("div",{className:"popover-header"},(0,o.createElement)("div",{className:"search"},(0,o.createElement)(u.TextControl,{placeholder:(0,h.__)("Search","neve")+"...",value:b,onChange:e=>{d(e),v(20)}}),(0,o.createElement)("a",{href:"#close-font",className:"close-font-selector",onClick:e=>{e.preventDefault(),e.stopPropagation(),p(!1),d("")}},(0,o.createElement)(u.Icon,{size:21,icon:m.Z})))),(0,o.createElement)("ul",{className:"neve-fonts-list"},g.length?g:(0,o.createElement)("li",{className:"no-result",key:"no-results"},(0,h.__)("No results.","neve")))))})():(0,h.__)("In Progress","neve"))))};b.propTypes={onFontChoice:i().func.isRequired,maybeGetTypekit:i().func.isRequired,inheritDefault:i().bool.isRequired,selected:i().oneOfType([i().string,i().bool])};const d=b},82:function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,r=e.value;switch(o){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var o=n(1),r=n.n(o),i=n(2),a=n.n(i),l=n(0),c=n.n(l),s=n(3),u=n.n(s);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}(this,m(t).call(this,e)),d(h(n),"getContainer",(function(){return n.props.containment||window})),d(h(n),"addEventListener",(function(e,t,o,r){var i;n.debounceCheck||(n.debounceCheck={});var a=function(){i=null,n.check()},l={target:e,fn:r>-1?function(){i||(i=setTimeout(a,r||0))}:function(){clearTimeout(i),i=setTimeout(a,o||0)},getLastTimeout:function(){return i}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),d(h(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),d(h(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),d(h(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var r=n.props.containment.getBoundingClientRect();t={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=n.props.offset||{};"object"===p(i)&&(t.top+=i.top||0,t.left+=i.left||0,t.bottom-=i.bottom||0,t.right-=i.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&a.top&&a.left&&a.bottom&&a.right;if(l&&n.props.partialVisibility){var s=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(s=a[n.props.partialVisibility]),c=n.props.minTopValue?s&&e.top<=t.bottom-n.props.minTopValue:s}"string"==typeof i.direction&&"number"==typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),c=u()(i,e,t));var f=n.state;return n.state.isVisible!==c&&(f={isVisible:c,visibilityRect:a},n.setState(f),n.props.onChange&&n.props.onChange(c)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&f(n.prototype,o),t}(r.a.Component);d(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),d(y,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!=typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var o=n(6);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n(196),n(850))}}]);