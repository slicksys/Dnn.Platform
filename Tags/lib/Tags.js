!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Tags=t(require("react")):e.Tags=t(e.react)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tag=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),p=o(u),l=n(3),c=o(l),d=n(4),f=o(d);n(2);var g=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tags:n.props.tags||[],inputWidth:13,isInputVisible:!1,tagInputActive:!1},n}return s(t,e),a(t,[{key:"hasClass",value:function(e,t){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}},{key:"addTag",value:function(e){e&&this.internalAddTag(e)}},{key:"internalAddTag",value:function(e){if(this.props.tags.find(function(t){return t===e}))return void this.setState({newTagText:""});this.setState({isInputVisible:!1});var t=this.props.tags.slice();t.push(e.trim()),this.updateTags(t)}},{key:"removeTagByName",value:function(e,t){e.stopPropagation();var n=this.props.tags.filter(function(e){return e!==t}).slice();this.updateTags(n)}},{key:"removeLastTag",value:function(){var e=this.props.tags.slice();e.pop(),this.updateTags(e)}},{key:"updateTags",value:function(e){var t=this;this.setState({tags:e},function(){t.props.onUpdateTags(e)})}},{key:"onClick",value:function(){this.state.isInputVisible||this.setState({isInputVisible:!0})}},{key:"onInputClose",value:function(){this.state.isInputVisible&&(this.setState({isInputVisible:!1}),this.props.onAddingNewTagChange(""))}},{key:"onSelectSuggestion",value:function(e){this.internalAddTag(e),this.props.onSelectSuggestion(e)}},{key:"render",value:function(){var e=this,t=void 0,n=this.removeTagByName.bind(this);t="function"==typeof this.props.renderItem?this.props.tags.map(function(t,n){return e.props.renderItem(t,n,e.removeTagByName.bind(e,t),e.props.enabled)}):this.props.tags.map(function(t,o){return p["default"].createElement(c["default"],{tag:t,key:o,onRemove:function(e){e.stopPropagation(),n(e,t)},enabled:e.props.enabled})});var o="dnn-uicommon-tags-field-input"+(this.state.tagInputActive?" active ":""),i={};this.props.enabled||(i.disabled="disabled",o+=" disabled");var r=this.props.autoSuggest?__("Begin typing to search tags"):__("Add tags");return p["default"].createElement("div",{className:o,onClick:this.onClick.bind(this),ref:"tagsField",style:this.props.style},p["default"].createElement("div",{type:"text"},!this.state.isInputVisible&&t.length>0&&t,!this.state.isInputVisible&&0==t.length&&p["default"].createElement("div",{className:"typing-text"},r),this.state.isInputVisible&&p["default"].createElement(f["default"],{value:this.state.newTagText,addTag:this.addTag.bind(this),onAddingNewTagChange:this.props.onAddingNewTagChange,onClose:this.onInputClose.bind(this),opts:i,autoSuggest:this.props.autoSuggest,suggestions:this.props.suggestions,onSelectSuggestion:this.onSelectSuggestion.bind(this)})))}}]),t}(u.Component);g.propTypes={tags:u.PropTypes.array.isRequired,onUpdateTags:u.PropTypes.func.isRequired,style:u.PropTypes.object,enabled:u.PropTypes.bool.isRequired,autoSuggest:u.PropTypes.bool.isRequired,onAddingNewTagChange:u.PropTypes.func,onSelectSuggestion:u.PropTypes.func,suggestions:u.PropTypes.arrayOf(u.PropTypes.object),renderItem:u.PropTypes.func},g.defaultProps={enabled:!0,autoSuggest:!1,suggestions:[]},t["default"]=g,t.Tag=c["default"]},function(t,n){t.exports=e},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),p=o(u);n(2);var l=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props.tag.trim();return!!e&&p["default"].createElement("div",{className:"dnn-uicommon-tag-input"+(this.props.enabled?"":" disabled")},p["default"].createElement("span",null,this.props.tag),this.props.enabled&&p["default"].createElement("span",{className:"close",onClick:this.props.onRemove},"×"))}}]),t}(u.Component);t["default"]=l,l.propTypes={tag:u.PropTypes.string.isRequired,onRemove:u.PropTypes.func.isRequired,enabled:u.PropTypes.bool.isRequired},l.defaultProps={enabled:!0}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(1),l=o(p),c={BACKSPACE:8,TAB:9,ENTER:13,COMMA:188},d=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={newTagText:""},n.onKeyDown=n.onKeyDown.bind(n),n.handleClick=n.handleClick.bind(n),n}return s(t,e),u(t,[{key:"handleClick",value:function(e){this.node&&(this.node.contains(e.target)||this.close())}},{key:"componentDidMount",value:function(){this.focusInput(),document.addEventListener("keypress",this.onKeyDown,!1),document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.onKeyDown,!1),this.close(),document.removeEventListener("click",this.handleClick,!1),this.node=null}},{key:"onSelectSuggestion",value:function(e){"function"==typeof this.props.onSelectSuggestion&&this.props.onSelectSuggestion(e),this.props.onClose()}},{key:"onChange",value:function(e){this.setState({newTagText:e.target.value}),this.props.autoSuggest&&"function"==typeof this.props.onAddingNewTagChange&&this.props.onAddingNewTagChange(e.target.value)}},{key:"close",value:function(){this.props.onClose()}},{key:"onKeyDown",value:function(e){switch(e.keyCode){case c.ENTER:case c.COMMA:case c.TAB:this.state.newTagText&&(e.preventDefault(),this.props.addTag(this.state.newTagText),this.close());break;case c.BACKSPACE:}}},{key:"getSuggestions",value:function(){var e=this;return this.props.autoSuggest?l["default"].createElement("div",{className:"suggestions"},this.props.suggestions.map(function(t,n){return l["default"].createElement("div",{className:"suggestion",key:n,onClick:e.onSelectSuggestion.bind(e,t.value)},t.value)})):null}},{key:"focusInput",value:function(){this.refs.inputField.focus()}},{key:"onSuggestionsBlur",value:function(){var e=this.props,t=e.autoSuggest,n=e.suggestions;t&&0==n.length||this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.opts,o=t.autoSuggest;return l["default"].createElement("div",{className:"input-container",ref:function(t){return e.node=t}},l["default"].createElement("input",a({ref:"inputField",type:"text",placeholder:__("Add tags"),onKeyDown:this.onKeyDown.bind(this),value:this.state.newTagText,onChange:this.onChange.bind(this)},n)),o&&this.getSuggestions())}}]),t}(p.Component);t["default"]=d,d.propTypes={onAddingNewTagChange:p.PropTypes.func.isRequired,opts:p.PropTypes.object.isRequired,autoSuggest:p.PropTypes.bool,suggestions:p.PropTypes.array,onSelectSuggestion:p.PropTypes.func.isRequired,addTag:p.PropTypes.func.isRequired,onClose:p.PropTypes.func.isRequired},d.defaultProps={suggestions:[]}},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-uicommon-tags-field-input{background:#fff;float:left;width:100%;border:1px solid #959695;box-sizing:border-box;position:relative;border-radius:0;font-size:11px;font-family:proxima_nova_semibold,arial}.dnn-uicommon-tags-field-input.error{border-bottom:2px solid red}.dnn-uicommon-tags-field-input.disabled,.dnn-uicommon-tags-field-input.disabled *{pointer-events:none}.dnn-uicommon-tags-field-input.disabled .tag{background:#c8c8c8}.dnn-uicommon-tags-field-input.active{border:1px solid #1e88c3}.dnn-uicommon-tags-field-input div[type=text]{width:100%;padding:0!important;height:auto;float:left;margin:0!important}.dnn-uicommon-tags-field-input div.typing-text{height:15px;padding:9px;color:#c8c8c8}.dnn-uicommon-tags-field-input .input-container{width:100%;float:left;position:relative}.dnn-uicommon-tags-field-input .input-container .suggestions{position:absolute;left:-10px;top:23px;padding:10px;list-style-type:none;width:100%;z-index:9999}.dnn-uicommon-tags-field-input .input-container .suggestions .suggestion{color:gray!important;padding:9px;border:1px solid #e3e3e3;background-color:#fff;cursor:pointer;margin:0;list-style:none;height:15px}.dnn-uicommon-tags-field-input .input-container .suggestions .suggestion:hover{background-color:#f0f0f0;color:#1e88ec!important}.dnn-uicommon-tags-field-input input{padding:0;padding:9px 12px;background:transparent;border:none;color:#46292b;float:left;box-sizing:content-box!important;outline:none!important;max-width:76%}.dnn-uicommon-tags-field-input .dnn-uicommon-tag-input{float:left;position:relative;padding:3px 18px 3px 7px!important;margin:7px 0 5px 9px!important;background:#1e88c3;border:none;color:#fff;font-size:11px;border-radius:0;max-width:82%;overflow:hidden;text-overflow:ellipsis}.dnn-uicommon-tags-field-input .dnn-uicommon-tag-input .close{position:absolute;padding:0 5px;font-size:16px;line-height:15px;cursor:pointer;top:5px;right:0}.dnn-uicommon-tags-field-input .dnn-uicommon-tag-input.disabled{padding:3px 7px!important}.dnn-uicommon-tags-field-input .tag-search-results{position:absolute;width:100%;border:1px solid #959695;top:100%;margin-top:1px;border-top:none;left:-1px;padding:6px 0;background:#fff}.dnn-uicommon-tags-field-input .tag-search-results .result-item{padding:6px 10px;cursor:pointer}.dnn-uicommon-tags-field-input .tag-search-results .result-item.selected{background:#eff0f0;color:#1e88c3}.dnn-uicommon-tags-field-input .dnn-ui-common-tooltip{position:absolute;right:0}.dnn-uicommon-tags-field-input .dnn-ui-common-tooltip .icon{float:right;margin-top:6px;margin-right:4px}.dnn-uicommon-tags-field-input.disabled{background:#e5e7e6;border-color:#e5e7e6}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=f[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(p(o.parts[r],t))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(p(o.parts[r],t));f[o.id]={id:o.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],s=i[1],a=i[2],u=i[3],p={css:s,media:a,sourceMap:u};n[r]?n[r].parts.push(p):t.push(n[r]={id:r,parts:[p]})}return t}function r(e,t){var n=m(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function p(e,t){var n,o,i;if(t.singleton){var r=y++;n=b||(b=a(t)),o=l.bind(null,n,r,!1),i=l.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),o=d.bind(null,n),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=c.bind(null,n),i=function(){s(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function l(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function c(e,t){var n=t.css,o=t.media;t.sourceMap;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=(t.media,t.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var f={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=g(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],u=f[a.id];u.refs--,r.push(u)}if(e){var p=i(e);o(p,t)}for(var s=0;s<r.length;s++){var u=r[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete f[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}])});