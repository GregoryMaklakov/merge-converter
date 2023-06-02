"use strict";(self.webpackChunkmerge_converter=self.webpackChunkmerge_converter||[]).push([[988],{"./components/Button/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Icon=__webpack_require__("./components/Icon/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var __jsx=react.createElement;function Button(_ref){var icon=_ref.icon,variant=_ref.variant,isDisabled=_ref.isDisabled,onClick=_ref.onClick,className=_ref.className;return __jsx("button",{variant,disabled:isDisabled,onClick,className:(0,clsx_m.Z)(Button_Button_module.button,className,Button_Button_module["variant-".concat(variant)])},__jsx(Icon.J,{name:icon,className:(0,clsx_m.Z)(Button_Button_module.icon,Button_Button_module["icon-".concat(icon)])}))}Button.displayName="Button",Button.propTypes={className:prop_types_default().string,onClick:prop_types_default().func.isRequired,variant:prop_types_default().oneOf(["primary","subtle"]),icon:prop_types_default().oneOf(Object.values(Icon.Y)),isDisabled:prop_types_default().bool},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!0},variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"subtle"',computed:!1}]},required:!1},icon:{description:"",type:{name:"enum",computed:!0,value:"Object.values(ICON_TYPES)"},required:!1},isDisabled:{description:"",type:{name:"bool"},required:!1}}}},"./components/Icon/Icon.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>ICON_TYPES,J:()=>Icon_Icon_Icon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,ICON_TYPES={bitcoin:"bitcoin",flag:"flag",swap:"swap",refresh:"refresh",logo:"logo"};function Icon_Icon_Icon(_ref){var className=_ref.className,name=_ref.name,size=_ref.size,color=_ref.color,props={className};switch(size&&(props.width=size,props.height=size),color&&(props.fill=color),name){case ICON_TYPES.bitcoin:return __jsx("svg",(0,esm_extends.Z)({viewBox:"0 -0.5 34 34",xmlns:"http://www.w3.org/2000/svg"},props),__jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z",fill:"#F7931A"}));case ICON_TYPES.flag:return __jsx("svg",(0,esm_extends.Z)({},props,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),__jsx("circle",{cx:"12",cy:"12",r:"12",fill:"#2A5ADA"}),__jsx("path",{d:"M0 12C-1.37766e-07 13.5759 0.310389 15.1363 0.913445 16.5922C1.5165 18.0481 2.40042 19.371 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C13.5759 24 15.1363 23.6896 16.5922 23.0866C18.0481 22.4835 19.371 21.5996 20.4853 20.4853C21.5996 19.371 22.4835 18.0481 23.0866 16.5922C23.6896 15.1363 24 13.5759 24 12H12L0 12Z",fill:"#DAC82A"}));case ICON_TYPES.swap:return __jsx("svg",(0,esm_extends.Z)({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),__jsx("path",{fillRule:"evenodd",d:"m6 8.414 3-3V18h2V.586L4.586 7 6 8.414ZM13 6v17.414L19.414 17 18 15.586l-3 3V6h-2Z",clipRule:"evenodd"}));case ICON_TYPES.refresh:return __jsx("svg",(0,esm_extends.Z)({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),__jsx("g",{clipPath:"url(#a)"},__jsx("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"})),__jsx("defs",null,__jsx("clipPath",{id:"a"},__jsx("path",{d:"M0 0h24v24H0z"}))));case ICON_TYPES.logo:return __jsx("svg",(0,esm_extends.Z)({xmlns:"http://www.w3.org/2000/svg",width:95,height:20,fill:"none"},props),__jsx("path",{fill:"#fff",d:"M94.483 10.072c0-1.167-.243-2.214-.728-3.09a4.978 4.978 0 0 0-2.062-2.068c-.898-.487-1.868-.73-2.985-.73-1.116 0-2.135.243-3.032.754-.898.511-1.602 1.193-2.111 2.093-.51.9-.752 1.898-.752 3.017 0 1.12.267 2.141.776 3.042.51.9 1.262 1.581 2.208 2.092.946.511 2.062.755 3.3.755.994 0 1.868-.146 2.644-.463a5.06 5.06 0 0 0 1.771-1.192c.097-.097.097-.268 0-.39l-1.091-1.24c-.098-.122-.267-.122-.389-.025-.776.706-1.746 1.047-2.887 1.047-.995 0-1.795-.244-2.475-.73-.655-.487-1.067-1.168-1.237-1.996h8.953c.073-.438.097-.705.097-.876Zm-9.026-.997c.122-.852.486-1.509 1.068-2.02.582-.51 1.31-.754 2.16-.754.873 0 1.6.268 2.183.779.582.51.922 1.192 1.043 2.02h-6.454v-.025Z",className:"svg-elem-1"}),__jsx("path",{fill:"#fff",d:"M38.219 4.135c-.898 0-1.723.17-2.45.511a4.781 4.781 0 0 0-1.82 1.412 3.758 3.758 0 0 0-1.577-1.436c-.655-.316-1.432-.487-2.28-.487-.777 0-1.505.146-2.136.414a4.268 4.268 0 0 0-1.601 1.168v-1.46h-2.257a.27.27 0 0 0-.267.268V15.4a.27.27 0 0 0 .267.268h2.111a.27.27 0 0 0 .267-.268V9.902c0-1.12.267-1.97.8-2.555.535-.584 1.262-.876 2.16-.876.825 0 1.456.244 1.892.755.437.51.656 1.265.656 2.263v5.937a.27.27 0 0 0 .267.267h2.11a.27.27 0 0 0 .267-.267V9.902c0-1.095.267-1.946.8-2.53.535-.584 1.262-.9 2.16-.9.825 0 1.456.243 1.893.754.436.51.655 1.265.655 2.263v5.937a.27.27 0 0 0 .267.267h2.11a.27.27 0 0 0 .267-.267V9.172c0-1.679-.412-2.92-1.261-3.771-.704-.828-1.844-1.266-3.3-1.266Z",className:"svg-elem-2"}),__jsx("path",{fill:"#fff",d:"M54.377 4.89c-.873-.487-1.868-.73-2.984-.73-1.116 0-2.135.243-3.032.754-.898.511-1.602 1.192-2.111 2.093-.51.9-.752 1.898-.752 3.017 0 1.12.267 2.141.776 3.041.51.9 1.262 1.582 2.208 2.093.946.51 2.062.754 3.3.754.994 0 1.868-.146 2.644-.462a5.06 5.06 0 0 0 1.771-1.192c.097-.098.097-.268 0-.39l-1.092-1.24c-.097-.122-.266-.122-.388-.025-.776.706-1.747 1.046-2.887 1.046-.995 0-1.795-.243-2.475-.73-.68-.486-1.067-1.168-1.237-1.995h8.953c.024-.34.048-.608.048-.803 0-1.168-.242-2.214-.728-3.09a4.781 4.781 0 0 0-2.014-2.141Zm-6.235 4.185c.121-.852.485-1.509 1.068-2.02.582-.51 1.31-.754 2.159-.754.873 0 1.601.268 2.184.779.582.51.922 1.192 1.043 2.02h-6.454v-.025Z",className:"svg-elem-3"}),__jsx("path",{fill:"#fff",d:"M66.363 4.16c-1.771.048-3.033.657-3.76 1.8V4.573a.27.27 0 0 0-.267-.267h-1.99a.27.27 0 0 0-.267.267V15.45a.27.27 0 0 0 .267.268h2.11a.27.27 0 0 0 .268-.268v-5.28c0-1.144.29-2.02.873-2.628.582-.608 1.407-.9 2.426-.9.195 0 .389.024.631.073V4.452a.258.258 0 0 0-.291-.292Z",className:"svg-elem-4"}),__jsx("path",{fill:"#fff",d:"M80.12 4.281h-1.99a.27.27 0 0 0-.267.268V5.79a4.113 4.113 0 0 0-1.698-1.241 6.107 6.107 0 0 0-2.256-.414c-1.092 0-2.063.22-2.936.682-.874.462-1.577 1.095-2.062 1.946-.51.828-.753 1.8-.753 2.871 0 1.095.243 2.044.753 2.896a5.19 5.19 0 0 0 2.062 1.971c.873.462 1.844.706 2.936.706.776 0 1.504-.122 2.159-.39.655-.267 1.213-.632 1.674-1.143v.608c0 1.168-.291 2.044-.874 2.604-.582.56-1.504.851-2.765.851a7.752 7.752 0 0 1-2.33-.365 6.52 6.52 0 0 1-1.65-.803c-.12-.097-.315-.073-.388.073l-.921 1.533c-.073.122-.049.292.072.365.607.462 1.359.803 2.232 1.046a11.86 11.86 0 0 0 3.13.414c4.1 0 6.163-2.02 6.163-6.034V4.549c0-.146-.121-.268-.291-.268Zm-3.324 7.738c-.655.608-1.48.9-2.5.9-1.018 0-1.867-.292-2.498-.9-.655-.608-.97-1.387-.97-2.36 0-.95.315-1.728.97-2.336.655-.608 1.48-.9 2.499-.9 1.019 0 1.844.292 2.499.9.655.608.97 1.387.97 2.336 0 .973-.315 1.752-.97 2.36Z",className:"svg-elem-5"}),__jsx("path",{fill:"#fff",d:"M7.867 1.63c0-.098-.097-.196-.194-.196H5.417c-.098 0-.195.098-.195.195v11.169L.055 17.98a.191.191 0 0 0 0 .268l1.6 1.606c.074.073.195.073.292 0l5.871-5.913c.049-.048.049-.097.049-.146V1.63Z",className:"svg-elem-6"}),__jsx("path",{fill:"#fff",d:"M11.167 19.854 8.57 17.226a.191.191 0 0 1 0-.267l1.6-1.606a.19.19 0 0 1 .268 0l2.596 2.627a.191.191 0 0 1 0 .268l-1.577 1.606c-.097.097-.219.097-.291 0Z",className:"svg-elem-7"}),__jsx("path",{fill:"#fff",d:"M11.045 8.37 6.678 3.964c-.073-.073-.194-.073-.291 0L2.044 8.37c-.073.073-.194.073-.291 0L.176 6.763a.191.191 0 0 1 0-.267L6.41.194c.073-.073.194-.073.291 0l6.236 6.302a.191.191 0 0 1 0 .267L11.336 8.37c-.097.098-.218.098-.29 0Z",className:"svg-elem-8"}));default:return null}}Icon_Icon_Icon.propTypes={className:prop_types_default().string,name:prop_types_default().oneOf(Object.values(ICON_TYPES)).isRequired,size:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),color:prop_types_default().string},Icon_Icon_Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"enum",value:[{value:'"bitcoin"',computed:!1},{value:'"flag"',computed:!1},{value:'"logo"',computed:!1},{value:'"refresh"',computed:!1},{value:'"swap"',computed:!1}]},required:!0},size:{description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},color:{description:"",type:{name:"string"},required:!1}}}},"./components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.J,Y:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Y});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/Icon/Icon.jsx")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Button_button__30ukX{display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease 0s}.Button_button__30ukX:disabled{cursor:not-allowed;background-color:#44526c}.Button_button__30ukX:disabled .Button_icon-swap__N1MMi{fill:#7c8698}@media(any-hover: hover){.Button_button__30ukX:disabled:hover{background-color:#44526c}.Button_button__30ukX:disabled:hover .Button_icon-swap__N1MMi{fill:#7c8698}}.Button_icon__NZexy{width:24px;height:24px;transition:all .2s ease 0s}.Button_icon-swap__N1MMi{fill:#fff}.Button_icon-refresh___ekmd{fill:#fff}.Button_variant-primary__hDfNd{width:40px;height:40px;background-color:#476cff;border-radius:8px}@media(any-hover: hover){.Button_variant-primary__hDfNd:hover{background-color:#fff}.Button_variant-primary__hDfNd:hover .Button_icon-swap__N1MMi{fill:#476cff}}.Button_variant-primary__hDfNd:active{background-color:#323efb}.Button_variant-primary__hDfNd:active .Button_icon-swap__N1MMi{fill:#fff}.Button_variant-subtle__z2imS{width:40px;height:40px;background-color:inherit}@media(any-hover: hover){.Button_variant-subtle__z2imS:hover .Button_icon-refresh___ekmd{fill:#476cff}}.Button_variant-subtle__z2imS:active .Button_icon-refresh___ekmd{fill:#323efb}","",{version:3,sources:["webpack://./components/Button/Button.module.scss","webpack://./styles/config/_variables.scss"],names:[],mappings:"AAEA,sBACE,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,0BAAA,CACA,+BACE,kBAAA,CACA,wBCIG,CDHH,wDACE,YAAA,CAEF,yBACE,qCACE,wBCFD,CDGC,8DACE,YCNL,CAAA,CDaL,oBACE,UAAA,CACA,WAAA,CACA,0BAAA,CAEF,yBACE,SC3BG,CD6BL,4BACE,SC9BG,CDkCL,+BACE,UAAA,CACA,WAAA,CACA,wBCvCG,CDwCH,iBCfa,CDgBb,yBACE,qCACE,qBCzCD,CD0CC,8DACE,YC7CH,CAAA,CDiDH,sCACE,wBCjDC,CDkDD,+DACE,SClDD,CDwDL,8BACE,UAAA,CACA,WAAA,CACA,wBAAA,CACA,yBAEI,gEACE,YCjEH,CAAA,CDsED,iEACE,YCtED",sourcesContent:[".button{display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease 0s}.button:disabled{cursor:not-allowed;background-color:#44526c}.button:disabled .icon-swap{fill:#7c8698}@media(any-hover: hover){.button:disabled:hover{background-color:#44526c}.button:disabled:hover .icon-swap{fill:#7c8698}}.icon{width:24px;height:24px;transition:all .2s ease 0s}.icon-swap{fill:#fff}.icon-refresh{fill:#fff}.variant-primary{width:40px;height:40px;background-color:#476cff;border-radius:8px}@media(any-hover: hover){.variant-primary:hover{background-color:#fff}.variant-primary:hover .icon-swap{fill:#476cff}}.variant-primary:active{background-color:#323efb}.variant-primary:active .icon-swap{fill:#fff}.variant-subtle{width:40px;height:40px;background-color:inherit}@media(any-hover: hover){.variant-subtle:hover .icon-refresh{fill:#476cff}}.variant-subtle:active .icon-refresh{fill:#323efb}","// COLORS\n$P1: #476cff;\n$P2: #323efb;\n$N0: #ffffff;\n$N1: #fafbfc;\n$N2: #f4f5f7;\n$N3: #ebecf0;\n$N4: #dfe1e6;\n$N5: #c2c7cf;\n$N6: #b4bac4;\n$N7: #98a0ae;\n$N8: #7c8698;\n$N9: #606c82;\n$N_10: #44526c;\n$N_11: #1f2934;\n$N_12: #10161d;\n\n$colorWhite: #fff;\n$colorBlack: #000000;\n\n// FONTS\n$baseFontSize: 18px;\n$baseFontColor: $N0;\n\n//OTHER\n$boxShadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n$borderRadius: 8px;\n// OFFSET\n$mobile-container-padding-x: 64px;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"Button_button__30ukX","icon-swap":"Button_icon-swap__N1MMi",icon:"Button_icon__NZexy","icon-refresh":"Button_icon-refresh___ekmd","variant-primary":"Button_variant-primary__hDfNd","variant-subtle":"Button_variant-subtle__z2imS"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@keyframes animate-svg-fill-1{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-1{animation:animate-svg-fill-1 .7s linear .8s both}@keyframes animate-svg-fill-2{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-2{animation:animate-svg-fill-2 .7s linear .9s both}@keyframes animate-svg-fill-3{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-3{animation:animate-svg-fill-3 .7s linear 1s both}@keyframes animate-svg-fill-4{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-4{animation:animate-svg-fill-4 .7s linear 1.1s both}@keyframes animate-svg-fill-5{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-5{animation:animate-svg-fill-5 .7s linear 1.2s both}@keyframes animate-svg-fill-6{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-6{animation:animate-svg-fill-6 .7s linear 1.3s both}@keyframes animate-svg-fill-7{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-7{animation:animate-svg-fill-7 .7s linear 1.4s both}@keyframes animate-svg-fill-8{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-8{animation:animate-svg-fill-8 .7s linear 1.5s both}","",{version:3,sources:["webpack://./components/Icon/Icon.scss"],names:[],mappings:"AAAA,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,gDAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,gDAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,+CAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,iDAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,iDAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,iDAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,iDAAA,CAGF,8BACE,GACE,kBAAA,CAGF,KACE,SAAA,CAAA,CAIJ,YACE,iDAAA",sourcesContent:["@keyframes animate-svg-fill-1{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-1{animation:animate-svg-fill-1 .7s linear .8s both}@keyframes animate-svg-fill-2{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-2{animation:animate-svg-fill-2 .7s linear .9s both}@keyframes animate-svg-fill-3{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-3{animation:animate-svg-fill-3 .7s linear 1s both}@keyframes animate-svg-fill-4{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-4{animation:animate-svg-fill-4 .7s linear 1.1s both}@keyframes animate-svg-fill-5{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-5{animation:animate-svg-fill-5 .7s linear 1.2s both}@keyframes animate-svg-fill-6{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-6{animation:animate-svg-fill-6 .7s linear 1.3s both}@keyframes animate-svg-fill-7{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-7{animation:animate-svg-fill-7 .7s linear 1.4s both}@keyframes animate-svg-fill-8{0%{fill:rgba(0,0,0,0)}100%{fill:#fff}}.svg-elem-8{animation:animate-svg-fill-8 .7s linear 1.5s both}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);