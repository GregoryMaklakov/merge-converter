"use strict";(self.webpackChunkmerge_converter=self.webpackChunkmerge_converter||[]).push([[228],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./components/Button/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Icon=__webpack_require__("./components/Icon/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var __jsx=react.createElement;function Button(_ref){var icon=_ref.icon,variant=_ref.variant,isDisabled=_ref.isDisabled,onClick=_ref.onClick,className=_ref.className;return __jsx("button",{variant,disabled:isDisabled,onClick,className:(0,clsx_m.Z)(Button_Button_module.button,className,Button_Button_module["variant-".concat(variant)])},__jsx(Icon.J,{name:icon,className:(0,clsx_m.Z)(Button_Button_module.icon,Button_Button_module["icon-".concat(icon)])}))}Button.displayName="Button",Button.propTypes={className:prop_types_default().string,onClick:prop_types_default().func.isRequired,variant:prop_types_default().oneOf(["primary","subtle"]),icon:prop_types_default().oneOf(Object.values(Icon.Y)),isDisabled:prop_types_default().bool},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!0},variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"subtle"',computed:!1}]},required:!1},icon:{description:"",type:{name:"enum",computed:!0,value:"Object.values(ICON_TYPES)"},required:!1},isDisabled:{description:"",type:{name:"bool"},required:!1}}}},"./components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.J,Y:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Y});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/Icon/Icon.jsx")},"./components/Button/Button.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Refresh:()=>Refresh,Swap:()=>Swap,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_makgr_Documents_Web_dev_project_in_process_merge_converter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Button/Button.jsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Icon/Icon.jsx"),__jsx=(__webpack_require__("./styles/globals.scss"),react__WEBPACK_IMPORTED_MODULE_0__.createElement);const __WEBPACK_DEFAULT_EXPORT__={title:"components/Button",component:_Button__WEBPACK_IMPORTED_MODULE_1__.z,argTypes:{variant:{options:["primary","subtle"],control:{type:"radio"}},icon:{options:Object.values(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Y),control:{type:"select"}}},args:{variant:"primary",icon:_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Y.swap}};function Template(args){return __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__.z,(0,_Users_makgr_Documents_Web_dev_project_in_process_merge_converter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({primary:!0},args))}Template.displayName="Template";var Swap=Template.bind({}),Refresh=Template.bind({});Refresh.args={variant:"subtle",icon:_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Y.refresh}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Button_button__30ukX{display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease 0s}.Button_button__30ukX:disabled{cursor:not-allowed;background-color:#44526c}.Button_button__30ukX:disabled .Button_icon-swap__N1MMi{fill:#7c8698}@media(any-hover: hover){.Button_button__30ukX:disabled:hover{background-color:#44526c}.Button_button__30ukX:disabled:hover .Button_icon-swap__N1MMi{fill:#7c8698}}.Button_icon__NZexy{width:24px;height:24px;transition:all .2s ease 0s}.Button_icon-swap__N1MMi{fill:#fff}.Button_icon-refresh___ekmd{fill:#fff}.Button_variant-primary__hDfNd{width:40px;height:40px;background-color:#476cff;border-radius:8px}@media(any-hover: hover){.Button_variant-primary__hDfNd:hover{background-color:#fff}.Button_variant-primary__hDfNd:hover .Button_icon-swap__N1MMi{fill:#476cff}}.Button_variant-primary__hDfNd:active{background-color:#323efb}.Button_variant-primary__hDfNd:active .Button_icon-swap__N1MMi{fill:#fff}.Button_variant-subtle__z2imS{width:40px;height:40px;background-color:inherit}@media(any-hover: hover){.Button_variant-subtle__z2imS:hover .Button_icon-refresh___ekmd{fill:#476cff}}.Button_variant-subtle__z2imS:active .Button_icon-refresh___ekmd{fill:#323efb}","",{version:3,sources:["webpack://./components/Button/Button.module.scss","webpack://./styles/config/_variables.scss"],names:[],mappings:"AAEA,sBACE,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,0BAAA,CACA,+BACE,kBAAA,CACA,wBCIG,CDHH,wDACE,YAAA,CAEF,yBACE,qCACE,wBCFD,CDGC,8DACE,YCNL,CAAA,CDaL,oBACE,UAAA,CACA,WAAA,CACA,0BAAA,CAEF,yBACE,SC3BG,CD6BL,4BACE,SC9BG,CDkCL,+BACE,UAAA,CACA,WAAA,CACA,wBCvCG,CDwCH,iBCfa,CDgBb,yBACE,qCACE,qBCzCD,CD0CC,8DACE,YC7CH,CAAA,CDiDH,sCACE,wBCjDC,CDkDD,+DACE,SClDD,CDwDL,8BACE,UAAA,CACA,WAAA,CACA,wBAAA,CACA,yBAEI,gEACE,YCjEH,CAAA,CDsED,iEACE,YCtED",sourcesContent:[".button{display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease 0s}.button:disabled{cursor:not-allowed;background-color:#44526c}.button:disabled .icon-swap{fill:#7c8698}@media(any-hover: hover){.button:disabled:hover{background-color:#44526c}.button:disabled:hover .icon-swap{fill:#7c8698}}.icon{width:24px;height:24px;transition:all .2s ease 0s}.icon-swap{fill:#fff}.icon-refresh{fill:#fff}.variant-primary{width:40px;height:40px;background-color:#476cff;border-radius:8px}@media(any-hover: hover){.variant-primary:hover{background-color:#fff}.variant-primary:hover .icon-swap{fill:#476cff}}.variant-primary:active{background-color:#323efb}.variant-primary:active .icon-swap{fill:#fff}.variant-subtle{width:40px;height:40px;background-color:inherit}@media(any-hover: hover){.variant-subtle:hover .icon-refresh{fill:#476cff}}.variant-subtle:active .icon-refresh{fill:#323efb}","// COLORS\n$P1: #476cff;\n$P2: #323efb;\n$N0: #ffffff;\n$N1: #fafbfc;\n$N2: #f4f5f7;\n$N3: #ebecf0;\n$N4: #dfe1e6;\n$N5: #c2c7cf;\n$N6: #b4bac4;\n$N7: #98a0ae;\n$N8: #7c8698;\n$N9: #606c82;\n$N_10: #44526c;\n$N_11: #1f2934;\n$N_12: #10161d;\n\n$colorWhite: #fff;\n$colorBlack: #000000;\n\n// FONTS\n$baseFontSize: 18px;\n$baseFontColor: $N0;\n\n//OTHER\n$boxShadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n$borderRadius: 8px;\n// OFFSET\n$mobile-container-padding-x: 64px;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"Button_button__30ukX","icon-swap":"Button_icon-swap__N1MMi",icon:"Button_icon__NZexy","icon-refresh":"Button_icon-refresh___ekmd","variant-primary":"Button_variant-primary__hDfNd","variant-subtle":"Button_variant-subtle__z2imS"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);