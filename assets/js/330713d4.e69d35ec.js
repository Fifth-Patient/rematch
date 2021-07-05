(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[55],{3245:function(e,t,r){"use strict";var n=r(7378);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},8287:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7378),a=r(1415),i=r(8944),s="tabItem_c0e5",o="tabItemActive_28AG";var l=37,p=39;var c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,b=(0,n.useState)(c),k=b[0],v=b[1],y=n.Children.toArray(e.children),N=[];if(null!=m){var x=g[m];null!=x&&x!==k&&u.some((function(e){return e.value===x}))&&v(x)}var P=function(e){var t=e.currentTarget,r=N.indexOf(t),n=u[r].value;v(n),null!=m&&(h(m,n),setTimeout((function(){var e,r,n,a,i,s,l,p;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,s=window,l=s.innerHeight,p=s.innerWidth,r>=0&&i<=p&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,r;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case l:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:P,onClick:P},r)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},1335:function(e,t,r){"use strict";var n=(0,r(7378).createContext)(void 0);t.Z=n},1415:function(e,t,r){"use strict";var n=r(7378),a=r(1335);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6448:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),s=r(8287),o=r(3245),l={id:"persist",title:"Persist",sidebar_label:"@rematch/persist",slug:"/plugins/persist/"},p={unversionedId:"plugins/persist",id:"plugins/persist",isDocsHomePage:!1,title:"Persist",description:"Redux-Persist v6 plugin for Rematch. Provides automatic Redux state persistence.",source:"@site/../docs/plugins/persist.md",sourceDirName:"plugins",slug:"/plugins/persist/",permalink:"/docs/plugins/persist/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/plugins/persist.md",version:"current",sidebar_label:"@rematch/persist",frontMatter:{id:"persist",title:"Persist",sidebar_label:"@rematch/persist",slug:"/plugins/persist/"},sidebar:"docs",previous:{title:"Updated",permalink:"/docs/plugins/updated/"},next:{title:"Redux Devtools",permalink:"/docs/recipes/redux-devtools/"}},c=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Install",id:"install",children:[]},{value:"persistPlugin(persistConfig, nestedPersistConfig, persistStoreConfig, callback)",id:"persistpluginpersistconfig-nestedpersistconfig-persiststoreconfig-callback",children:[]},{value:"Usage",id:"usage",children:[{value:"Setup the store",id:"setup-the-store",children:[]},{value:"Persist Gate",id:"persist-gate",children:[]}]}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Redux-Persist v6 plugin for Rematch. Provides automatic Redux state persistence."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Install the correct version of persist plugin based on the version of the core Rematch library in your project."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"@rematch/core"),(0,i.kt)("th",{parentName:"tr",align:"center"},"@rematch/persist"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1.x.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1.x.x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.x.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.x.x")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(s.Z,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rematch/persist\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rematch/persist\n")))),(0,i.kt)("h2",{id:"persistpluginpersistconfig-nestedpersistconfig-persiststoreconfig-callback"},"persistPlugin(persistConfig, ","[nestedPersistConfig, persistStoreConfig, callback]",")"),(0,i.kt)("p",null,"The persist plugin accepts four arguments - ",(0,i.kt)("strong",{parentName:"p"},"persistConfig"),", ",(0,i.kt)("strong",{parentName:"p"},"nestedPersistConfig"),", ",(0,i.kt)("strong",{parentName:"p"},"persistStoreConfig"),", ",(0,i.kt)("strong",{parentName:"p"},"callback"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"persistConfig")," (",(0,i.kt)("em",{parentName:"p"},"PersistConfig"),"): object compatible with ",(0,i.kt)("em",{parentName:"p"},"config")," argument accepted by redux-persist's ",(0,i.kt)("em",{parentName:"p"},"persistReducer")," method - for details refer to their ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#persistreducerconfig-reducer"},"documentation"),". It is used when creating a persisted root reducer in your store.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"nestedPersistConfig"),"]"," (",(0,i.kt)("em",{parentName:"p"},"{ ","[modelName]",": PersistConfig }"),"): whenever you need to use a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#nested-persists"},"Nested Persist")," configuration for some models, provide an object with a mapping from the model name to the redux-persist config for this model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"persistStoreConfig"),"]"," (",(0,i.kt)("em",{parentName:"p"},"PersistorOptions"),"): object compatible with ",(0,i.kt)("em",{parentName:"p"},"config")," argument accepted by redux-persist's ",(0,i.kt)("em",{parentName:"p"},"persistStore")," method - for details refer to their ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#persiststorestore-config-callback"},"documentation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),"]"," (",(0,i.kt)("em",{parentName:"p"},"() => void"),"): a function called after rehydration is finished."))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"setup-the-store"},"Setup the store"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="store.js"',title:'"store.js"'},"import persistPlugin from '@rematch/persist'\nimport { init } from '@rematch/core'\nimport storage from 'redux-persist/lib/storage'\n\nconst persistConfig = {\n  key: 'root',\n  storage,\n}\n\ninit({\n    plugins: [persistPlugin(persistConfig)],\n})\n")),(0,i.kt)("h3",{id:"persist-gate"},"Persist Gate"),(0,i.kt)("p",null,"In React you can use a special component provided by redux-persist to display a loading indicator while waiting for data to async load from the storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { getPersistor } from '@rematch/persist'\nimport { PersistGate } from 'redux-persist/lib/integration/react'\n\nconst persistor = getPersistor()\n\nconst Root = () => (\n    <PersistGate persistor={persistor}>\n        <App />\n    </PersistGate>\n)\n")))}m.isMDXComponent=!0},5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8944:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);