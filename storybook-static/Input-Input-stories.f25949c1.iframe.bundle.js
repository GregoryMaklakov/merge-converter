"use strict";(self.webpackChunkmerge_converter=self.webpackChunkmerge_converter||[]).push([[367],{"./components/Input/Input.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Input/Input.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.Z,options);const Input_Input_module=Input_module.Z&&Input_module.Z.locals?Input_module.Z.locals:void 0;var __jsx=react.createElement,Input=(0,react.forwardRef)((function(_ref,ref){var value=_ref.value,className=_ref.className,disabled=_ref.disabled,onChange=_ref.onChange;return __jsx("div",null,__jsx("input",{name:"input",maxLength:13,min:0,ref,type:"text",inputMode:"decimal",className:(0,clsx_m.Z)(Input_Input_module.input,className),disabled,value,placeholder:"0.00",onChange:function handleChange(event){var cleanedValue=event.target.value.replace(/[^\d.]/g,"");if("."!==cleanedValue){var formattedValue=value.includes(".")?cleanedValue:cleanedValue.replace(/^(\d+)(\.\d*)?$/,"$1.$2");onChange(formattedValue)}else onChange(cleanedValue)}}))}));Input.displayName="input",Input.propTypes={value:prop_types_default().string,disabled:prop_types_default().bool,className:prop_types_default().string,onChange:prop_types_default().func},Input.__docgenInfo={description:"",methods:[],displayName:"input",props:{value:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}}},"./components/Input/Input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Input/Input.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"components/Input",component:_Input__WEBPACK_IMPORTED_MODULE_1__.I};function Template(args){return __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__.I,args)}Template.displayName="Template";var Default=Template.bind({})},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Input/Input.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Input_input__lvORT{border:none;outline:none;appearance:none;background-color:inherit;color:#fff;text-align:right;transition:all .2s ease 0s;font-size:1rem;cursor:pointer}.Input_input__lvORT::placeholder{color:#7c8698}@media(any-hover: hover){.Input_input__lvORT:hover::placeholder{color:#b4bac4}}.Input_input__lvORT :disabled{color:#44526c;cursor:no-drop}@media(any-hover: hover){.Input_input__lvORT :disabled:hover{color:#44526c}}","",{version:3,sources:["webpack://./components/Input/Input.module.scss","webpack://./styles/config/_variables.scss"],names:[],mappings:"AAEA,oBACE,WAAA,CACA,YAAA,CACA,eAAA,CACA,wBAAA,CACA,UCJG,CDKH,gBAAA,CACA,0BAAA,CACA,cAAA,CACA,cAAA,CACA,iCACE,aCFC,CDIH,yBACE,uCACE,aCRD,CAAA,CDWH,8BACE,aCRG,CDSH,cAAA,CACA,yBACE,oCACE,aCZD,CAAA",sourcesContent:[".input{border:none;outline:none;appearance:none;background-color:inherit;color:#fff;text-align:right;transition:all .2s ease 0s;font-size:1rem;cursor:pointer}.input::placeholder{color:#7c8698}@media(any-hover: hover){.input:hover::placeholder{color:#b4bac4}}.input :disabled{color:#44526c;cursor:no-drop}@media(any-hover: hover){.input :disabled:hover{color:#44526c}}","// COLORS\n$P1: #476cff;\n$P2: #323efb;\n$N0: #ffffff;\n$N1: #fafbfc;\n$N2: #f4f5f7;\n$N3: #ebecf0;\n$N4: #dfe1e6;\n$N5: #c2c7cf;\n$N6: #b4bac4;\n$N7: #98a0ae;\n$N8: #7c8698;\n$N9: #606c82;\n$N_10: #44526c;\n$N_11: #1f2934;\n$N_12: #10161d;\n\n$colorWhite: #fff;\n$colorBlack: #000000;\n\n// FONTS\n$baseFontSize: 18px;\n$baseFontColor: $N0;\n\n//OTHER\n$boxShadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n$borderRadius: 8px;\n// OFFSET\n$mobile-container-padding-x: 64px;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={input:"Input_input__lvORT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);