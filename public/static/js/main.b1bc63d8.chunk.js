(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),l=n(43),c=(n(56),n(4)),o=n(44),s=n.n(o),u=function(){return a.a.createElement("header",{className:"flex flex-row pt2 pb2 pl4 pr4 h3_5 items-center justify-between bg-light-gray black shadow-3"},a.a.createElement("div",{id:"logo",className:"flex flex-wrap items-center"},a.a.createElement("img",{className:"h2",src:"./apisnoop_logo_v1.png",alt:"logo for apisnoop, a magnifying glass with a sunburst graph inside."}),a.a.createElement("h1",{className:"ma0 f4 fw4 pl2 avenir"},"APISnoop")),a.a.createElement("div",{id:"source-code",className:"flex items-center"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),a.a.createElement("a",{href:"https://github.com/cncf/apisnoop",title:"github repo for apisnoop",className:"link f7 pl1"},"Source Code")))},i=function(){return a.a.createElement("footer",{className:"w-100 flex flex-column flex-row-ns pt2 pb2 h3 pl4 pr4 items-center justify-between bg-black black shadow-3"},a.a.createElement("div",{id:"logo",className:"flex flex-wrap items-center justify-center"},a.a.createElement("a",{className:"contain bg-cncf bg-center h-100 w4",href:"https://cncf.io",title:"leads to external cncf homepage"},a.a.createElement("span",{className:"o-0"},"cncf")),a.a.createElement("a",{className:"contain bg-packet bg-center h-100 w4",href:"https://packet.net",title:"leads to external packet homepage"},a.a.createElement("span",{className:"o-0"},"packet")),a.a.createElement("h1",{className:"ma0 f4 fw4 pl2 avenir"},"APISnoop")),a.a.createElement("div",{id:"source-code",className:"flex items-center"},a.a.createElement("a",{href:"http://binder.hub.cncf.ci/v2/gh/cncf/apisnoop/master",target:"_blank noopener noreferrer",title:"external jupyter notebook",className:"link f5 pl1 white"},"See Data in Jupyter")))},d=Object(c.b)("doUpdateUrl","selectRoute",function(e){var t=e.doUpdateUrl,n=e.route;return a.a.createElement("div",{onClick:s()(t)},a.a.createElement(u,null),a.a.createElement(n,null),a.a.createElement(i,null))}),m=n(3),f={name:"colours",getReducer:function(){var e={colours:{alpha:"rgba(230, 25, 75, 1)",beta:"rgba(0, 130, 200, 1)",stable:"rgba(60, 180, 75, 1)",unused:"rgba(255, 255, 255, 1)"},moreColours:["rgba(183, 28, 28, 1)","rgba(136, 14, 79, 1)","rgba(74, 20, 140, 1)","rgba(49, 27, 146, 1)","rgba(26, 35, 126, 1)","rgba(13, 71, 161, 1)","rgba(1, 87, 155, 1)","rgba(0, 96, 100, 1)","rgba(0, 77, 64, 1)","rgba(27, 94, 32, 1)","rgba(51, 105, 30, 1)","rgba(130, 119, 23, 1)","rgba(245, 127, 23, 1)","rgba(255, 111, 0, 1)","rgba(230, 81, 0, 1)","rgba(191, 54, 12, 1)","rgba(244, 67, 54, 1)","rgba(233, 30, 99, 1)","rgba(156, 39, 176, 1)","rgba(103, 58, 183, 1)","rgba(63, 81, 181, 1)","rgba(33, 150, 243, 1)","rgba(3, 169, 244, 1)","rgba(0, 188, 212, 1)","rgba(0, 150, 136, 1)","rgba(76, 175, 80, 1)","rgba(139, 195, 74, 1)","rgba(205, 220, 57, 1)","rgba(255, 235, 59, 1)","rgba(255, 193, 7, 1)","rgba(255, 152, 0, 1)","rgba(255, 87, 34, 1)"],categories:["admissionregistration","apiextensions","apiregistration","apis","apps","authentication","authorization","autoscaling","batch","certificates","core","events","extensions","logs","networking","policy","rbacAuthorization","scheduling","settings","storage","version","auditregistration","coordination"]};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;arguments.length>1&&arguments[1];return t}},selectLevelColours:function(e){return e.colours.colours},selectCategoryColours:function(e){for(var t={},n=0;n<e.colours.categories.length;n++){t["category."+e.colours.categories[n]]=e.colours.moreColours[3*n%e.colours.moreColours.length]}return t}},b=n(45),p=n.n(b),g=n(46),v=n.n(g),y=n(47),E=n.n(y),O={backendUrl:"https://february.feathers.apisnoop.cncf.ci/api/v1"},j={name:"config",reducer:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:O},getExtraArgs:function(e){return{config:O,client:h(O)}}};function h(e){var t=v()(e.backendUrl);return p()().configure(t.axios(E.a))}var R=Object(m.b)({name:"currentRelease",getPromise:function(e){var t=e.client,n=e.store.selectCurrentReleaseId();if(n)return function(e,t){return e.service("releases").get(t)}(t,n)}});R.reactCurrentReleaseFetch=Object(m.d)("selectCurrentReleaseShouldUpdate","selectCurrentReleaseId",function(e,t){if(e&&null!=t)return{actionCreator:"doFetchCurrentRelease"}});var N=R;var C=Object(m.b)({name:"endpointsResource",getPromise:function(e){return function(e,t){return e.service("endpoints").find({query:{release:t}})}(e.client,e.store.selectCurrentReleaseName())}});C.reactEndpointsFetch=Object(m.d)("selectEndpointsResourceShouldUpdate",function(e,t){if(e)return{actionCreator:"doFetchEndpointsResource"}});var x=C;var T=n(19),k=n(2);function I(e){var t=Object(k.size)(e),n=Object(k.size)(Object(k.filter)(e,["isTested",!0])),r=(100*n/t).toPrecision(3);return{tested:n,total:t,percentage:"".concat(r,"%"),ratio:"".concat(n,"/").concat(t)}}function S(e,t){var n=Object(k.words)(e,/[^,|^(|^)]+/g);return n.pop(),n.push(t),n.join(",").replace(/,/,"(")+")"}function w(e){return Object(k.pickBy)(e,function(e){return!Object(k.isUndefined)(e)})}var A={name:"endpoints",getReducer:function(){var e={activeEndpoint:""};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0;return"TESTS_REQUESTED_FOR_ENDPOINT"===n.type?Object(T.a)({},t,{activeEndpoint:n.payload}):t}},selectFilteredEndpoints:Object(m.d)("selectEndpointsResource","selectFilter",function(e,t){if(null==e)return null;if(t){var n=new RegExp(t);e=e.filter(function(e){return n.test(e.name)})}return e}),selectFilteredAndZoomedEndpoints:Object(m.d)("selectFilteredEndpoints","selectZoom",function(e,t){return null==e?null:(t&&("endpoint"===t.depth?e=e.filter(function(e){return e.level===t.level&&e.category===t.category}):"category"===t.depth?e=e.filter(function(e){return e.level===t.level&&e.category===t.category}):"level"===t.depth&&(e=e.filter(function(e){return e.level===t.level}))),e)}),selectZoomedEndpoint:Object(m.d)("selectEndpointsResource","selectZoom",function(e,t){return null==e?null:null==t|void 0===t?null:"endpoint"===t.depth?e.find(function(e){return e.name===t.name}):void 0}),selectEndpointsById:Object(m.d)("selectFilteredAndZoomedEndpoints",function(e){return null==e?null:Object(k.keyBy)(e,"_id")}),selectEndpointsByLevelAndCategoryAndNameAndMethod:Object(m.d)("selectEndpointsById",function(e){var t=Object(k.groupBy)(e,"level");return Object(k.mapValues)(t,function(e){var t=Object(k.groupBy)(e,"category");return Object(k.mapValues)(t,function(e){var t=Object(k.groupBy)(e,"name");return Object(k.mapValues)(t,function(e){return Object(k.keyBy)(e,"method")})})})}),selectEndpointsWithTestCoverage:Object(m.d)("selectEndpointsById",function(e){var t=Object(k.groupBy)(e,"level"),n=I(e);return Object.assign({},{coverage:n},Object(k.mapValues)(t,function(e){var t=Object(k.groupBy)(e,"category"),n=I(e);return Object.assign({},{coverage:n},Object(k.mapValues)(t,function(e){var t=Object(k.groupBy)(e,"name"),n=I(e);return Object.assign({},{coverage:n},Object(k.mapValues)(t,function(e){var t=Object(k.keyBy)(e,"method");return Object(k.mapValues)(t,function(e){var t=e.test_tags?e.test_tags:[];return Object.assign({},{coverage:t},e)})}))}))}))}),selectActiveEndpointName:function(e){return e.tests.activeEndpoint},selectActiveEndpoint:Object(m.d)("selectEndpointsResource","selectQueryObject","selectZoom",function(e,t,n){return null==e?null:n&&"endpoint"===n.depth?e.find(function(e){return e.name===n.name&&e.category===n.category&&e.level===n.level}):e.find(function(e){return e.name===t.name&&e.category===t.category&&e.level===t.level})})},U={name:"filter",getReducer:function(){var e={};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;arguments.length>1&&arguments[1];return t}},selectFilter:Object(m.d)("selectQueryObject",function(e){return null==e?null:null==e.filter|void 0===e.filter?null:e.filter})},_={name:"releases",init:function(e){e.subscribeToSelectors(["selectCurrentReleaseName"],function(t){e.doMarkCurrentReleaseAsOutdated(),e.doMarkEndpointsResourceAsOutdated(),e.doMarkTestsResourceAsOutdated()})},getReducer:function(){var e={};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t}},selectMasterRelease:Object(m.d)("selectReleasesIndex",function(e){if(null==e)return null;var t=e.filter(function(e){return e.bucket.includes("gci-gce")});return Object(k.sortBy)(t,function(e){return parseInt(e.job)})[0]}),selectCurrentReleaseName:Object(m.d)("selectRouteParams","selectMasterRelease",function(e,t){return null==t?null:e.releaseName||t.name}),selectCurrentReleaseId:Object(m.d)("selectCurrentReleaseName","selectReleasesIndex",function(e,t){if(null==t)return null;var n=t.find(function(t){return t.name===e});return null==n?null:n._id}),selectReleasesIndexByName:Object(m.d)("selectReleasesIndex",function(e){return Object(k.keyBy)(e,"name")}),selectCurrentReleaseObject:Object(m.d)("selectCurrentReleaseName","selectReleasesIndexByName",function(e,t){return null==t?null:Object(k.find)(t,function(t){return t.name===e})}),selectCurrentReleaseSpyglassLink:Object(m.d)("selectCurrentReleaseObject",function(e){if(null==e)return null;return"https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/"+e.name.replace("_","/")}),selectCurrentReleaseAPISnoopLink:Object(m.d)("selectCurrentReleaseSpyglassLink",function(e){if(null==e)return null;return e.replace("https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/","https://storage.googleapis.com/apisnoop/dev/")+"/apisnoop.json"}),selectReleasesIndexMasterOnly:Object(m.d)("selectReleasesIndexByName","selectMasterRelease",function(e,t){return null==e?null:Object(k.filter)(e,function(e){return e.name===t.name})}),selectReleasesIndexSansMaster:Object(m.d)("selectReleasesIndexByName","selectMasterRelease",function(e,t){return null==e?null:Object(k.filter)(e,function(e){return e.name!==t.name})}),selectReleasesIndexSorted:Object(m.d)("selectReleasesIndexSansMaster",function(e){return null==e?null:e.sort(function(e,t){return e.version.localeCompare(t.version,void 0,{numeric:!0})})})},B=Object(m.b)({name:"releasesIndex",getPromise:function(e){var t=e.client;e.getState;return function(e){return e.service("releases").find()}(t)}});B.reactReleasesIndexFetch=Object(m.d)("selectReleasesIndexShouldUpdate",function(e){if(e)return{actionCreator:"doFetchReleasesIndex"}});var P=B;function L(e,t){return null==t||void 0===t.filter?"/".concat(e):"/".concat(e,"?filter=").concat(t.filter)}var Q=Object(c.b)("selectQueryObject","selectUrlObject","selectReleasesIndexShouldUpdate",function(e){var t=e.releases,n=e.queryObject,r=e.grouping,l=e.releasesIndexShouldUpdate,c=e.urlObject;return null==r?null:l?null:a.a.createElement("div",{className:"mr4"},a.a.createElement("h3",{className:"f3 mt0 ttsc tracked"}," ",r),a.a.createElement("ul",{className:"pl0 ml0"},t.map(function(e){return a.a.createElement(o,{release:e,key:e._id,queryObject:n})})));function o(e){var t=e.release,r="f6 link dim br1 ba ph3 pv2 mb2 mr2 dib mid-gray";return L(t.url)===c.pathname&&(r+=" bg-washed-red"),a.a.createElement("li",{className:"dib"},a.a.createElement("a",{className:r,href:L(t.release,n),title:t.version},t.version))}});var z=Object(c.b)("selectReleasesIndexMasterOnly","selectReleasesIndexSorted",function(e){var t=e.releasesIndexMasterOnly,n=e.releasesIndexSorted;return a.a.createElement("section",{id:"releases-container",className:""},a.a.createElement("div",{className:"flex items-start justify-start"},a.a.createElement(Q,{grouping:"Master",releases:t}),a.a.createElement(Q,{grouping:"Releases",releases:n})))}),F=n(50),M=n(20),q=Object(c.b)("selectInteriorLabel","selectLabelStyle","selectQueryObject","selectSunburstSorted","doUpdateQuery",function(e){var t=e.interiorLabel,n=e.labelStyle,r=e.sunburstSorted,l=e.queryObject,c=e.doUpdateQuery;return a.a.createElement("div",{id:"sunburst"},a.a.createElement(M.b,{hideRootNode:!0,colorType:"literal",data:r,height:600,width:600,getColor:function(e){return e.color},onValueClick:function(e,t){var n=o(e),r=w({level:n[1],category:n[2],name:n[3],filter:l.filter}),a=Object(k.sortBy)(r,["level","category","name"]);r.zoomed="".concat(["root","level","category","endpoint"][e.depth],"-").concat(Object(k.join)(a,"-")),l.filter&&(r.filter=l.filter),c(r)},onValueMouseOver:function(e,t){var n=o(e),r=w({level:n[1],category:n[2],name:n[3]});l.zoomed&&(r.zoomed=l.zoomed),l.filter&&(r.filter=l.filter),c(r)},onValueMouseOut:function(){var e={};l.filter&&(e.filter=l.filter),l.zoomed&&(e.zoomed=l.zoomed),c(e)}},t&&t.coverage&&t.coverage.tested&&a.a.createElement(M.a,{data:[{x:0,y:60,label:t.coverage.percentage,style:n.PERCENTAGE},{x:0,y:0,label:t.coverage.ratio,style:n.FRACTION},{x:0,y:-20,label:"total tested",style:n.PATH}]}),t&&t.endpoint&&a.a.createElement(M.a,{data:[{x:0,y:0,label:t.tested,style:n.PERCENTAGE}]}),a.a.createElement("button",{className:"ttsc",onClick:function(){l.filter?c({filter:l.filter}):c({})}},"Reset")));function o(e){if(!e.parent)return["root"];var t=Object(k.get)(e,"data.name")||Object(k.get)(e,"name"),n=o(e.parent);return[].concat(Object(F.a)(n),[t])}}),Z=Object(c.b)("selectCurrentReleaseObject","selectCurrentReleaseIsLoading","selectCurrentReleaseShouldUpdate","selectCurrentReleaseAPISnoopLink","selectCurrentReleaseSpyglassLink",function(e){var t=e.currentReleaseObject,n=e.currentReleaseIsLoading,r=e.currentReleaseShouldUpdate,l=e.currentReleaseAPISnoopLink,c=e.currentReleaseSpyglassLink,o=t;return null==o?null:a.a.createElement("div",{id:"sunburst-header",className:"relative"},(r||n)&&a.a.createElement("p",{className:"i fw2 absolute top-0"},"Switching To..."),a.a.createElement("h2",{className:"mb1 mt1 pt4 f1"},o.release_short),a.a.createElement("p",{className:"ibm-plex-mono f6 mt0 pt0 pl2"}," from job ",o.job," in\xa0",a.a.createElement("a",{href:c,title:"job information on spyglass",target:"_blank",rel:"noopener noreferrer"},o.bucket)),a.a.createElement("a",{className:"ibm-plex-mono f6 mt0 mb1  pt0 pl2",href:l,title:"Processed Data in Apisnoop gcs bucket",target:"_blank",rel:"noopener noreferrer"},"See processed audit of ",o.bucket),a.a.createElement("p",{className:"ibm-plex-mono f6 mb1 pt0 pl2"},"Data Gathered on ",o.gathered_datetime))}),D=Object(c.b)(function(e){return a.a.createElement("div",{id:"sunburst-container",className:"flex flex-column mr4"},a.a.createElement(Z,null),a.a.createElement(q,null))});function V(e){var t=e.testTag;return a.a.createElement("li",{className:"dib tal ttsc mr2 mb2 ph2 pv1 mid-gray"},t)}var G=Object(c.b)("selectTestTagsIndex",function(e){var t=e.testTagsIndex;return null==t?null:0===t.length?null:a.a.createElement("div",{className:"mt4 pl0"},a.a.createElement("p",null,"Tests are coming from:"),a.a.createElement("div",{className:"scrollbox"},a.a.createElement("ul",{className:"list pl0 ml0"},t.map(function(e){return a.a.createElement(V,{testTag:e})}))))}),H=Object(c.b)("selectActiveEndpoint","selectActiveTestsNumber",function(e){var t=e.activeEndpoint,n=e.activeTestsNumber;return null==n||0===n?null:null==t?null:t.isTested?a.a.createElement("div",{id:"tests-summary"},a.a.createElement("p",null,"Covered by ",a.a.createElement("span",{className:"green b"},n)," tests."),a.a.createElement(G,null),a.a.createElement("button",{onClick:function(){var e=document.querySelector(".tests-section");if(null==e)return null;e.scrollIntoView()},className:"but-no-style link magic-pointer blue"},"Go To Tests")):a.a.createElement("p",null,"Untested.")}),J=Object(c.b)("selectActiveEndpoint","selectCurrentReleaseShouldUpdate","selectCategoryColours","selectLevelColours","selectPath",function(e){var t=e.currentReleaseShouldUpdate,n=e.activeEndpoint,r=e.categoryColours,l=e.levelColours,c=e.path,o=c.level,s=c.category,u=c.name,i=null==n?"":n.description;return null==t||!0===t?null:a.a.createElement("div",{id:"summary-container",className:""},a.a.createElement("p",{className:"f2 mt1 pt4 mb3 fw3"},a.a.createElement("span",{style:{color:l[o]}},o),a.a.createElement("span",{style:{color:r["category."+s]}},s)),a.a.createElement("p",{className:"f3 mt0 mb3 ttsc"},u),a.a.createElement("p",{className:"f4 mt0 mb3 i fw2"},i),a.a.createElement(H,null))}),K=Object(c.b)(function(e){return a.a.createElement("section",{id:"summary-and-sunburst",className:"flex mb4 mt4"},a.a.createElement(D,null),a.a.createElement(J,null))});function W(e){var t=e.testItem,n=e.queryObject,r=e.doUpdateQuery;return a.a.createElement("li",{className:"mb3 dim",key:"test_{ testItem._id }"},a.a.createElement("button",{className:"but-no-style link mid-gray magic-pointer",onClick:function(){return e=n,a=t._id,void r(Object(T.a)({},e,{test:a}));var e,a},title:"info for "+t.name},t.name))}var X=Object(c.b)("selectActiveTest","selectActiveTestsIndex","selectPath","selectQueryObject","doUpdateQuery",function(e){var t=e.activeTest,n=e.activeTestsIndex,r=e.queryObject,l=e.path,c=e.doUpdateQuery;return null==n?null:void 0!==t?null:a.a.createElement("div",{id:"tests-list",className:"tests-section min-vh-100 mt4"},a.a.createElement("h2",{className:"f1"},"Tests for ",a.a.createElement("span",{className:"fw2"},l.level," / ",l.category," / ",l.name," ")),a.a.createElement("ul",{className:"list pl0"},Object(k.map)(n,function(e){return a.a.createElement(W,{testItem:e,doUpdateQuery:c,queryObject:r})})))}),Y=n(49),$=n.n(Y);function ee(e){var t=e.categoryColours,n=e.levelColours,r=e.rawStep,l={timestamp:$()(r[0]).format("mm:ss"),level:r[1],category:r[2],method:r[3],endpoint:r[4]};return a.a.createElement("li",{className:"",key:"test_{ testItem._id }"},a.a.createElement("span",{className:"fw2 i mid-gray mr2"},l.timestamp),a.a.createElement("span",{className:"mr1 ml1 fw2",style:{color:n[l.level]}},l.level),a.a.createElement("span",{className:"mr1 ml1 fw2",style:{color:t["category."+l.category]}},l.category),a.a.createElement("span",{className:"mr1 ml1 fw3 ttsc"}," ",l.endpoint))}var te=Object(c.b)("selectActiveTest","selectCategoryColours","selectLevelColours","selectQueryObject","doUpdateQuery",function(e){var t=e.activeTest,n=e.categoryColours,r=e.levelColours,l=e.queryObject,c=e.doUpdateQuery;return null==t?null:a.a.createElement("div",{id:"test-sequence",className:"mt4 tests-section"},a.a.createElement("h2",null,"Sequence For ",a.a.createElement("span",{className:"fw2"},t.name)),a.a.createElement("button",{onClick:function(){var e=Object(k.omit)(l,"test");c(e)}},"Back"),a.a.createElement("ul",{className:"list"},Object(k.map)(t.sequence,function(e){return a.a.createElement(ee,{rawStep:e,levelColours:r,categoryColours:n})})))});var ne=Object(c.b)(function(){return a.a.createElement("main",{id:"main-splash",className:"min-vh-80 pa4 ma4 flex flex-column"},a.a.createElement(z,null),a.a.createElement(K,null),a.a.createElement(X,null),a.a.createElement(te,null))});var re=Object(m.c)({"/":ne,"/:releaseName":ne,"*":function(){return a.a.createElement("div",null,"mate not found!")}}),ae={name:"charts",getReducer:function(){var e={};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t}},selectSunburst:Object(m.d)("selectEndpointsByLevelAndCategoryAndNameAndMethod","selectLevelColours","selectCategoryColours","selectQueryObject","selectZoomedEndpoint",function(e,t,n,r,a){return{name:"root",children:Object(k.map)(e,function(e,l){return{name:l,color:se(r,t,l),children:ce(e,l,n,r,a)}})}}),selectSunburstSorted:Object(m.d)("selectSunburst",function(e){var t=Object(k.orderBy)(e.children,"name","desc");return e.children=t,e}),selectInteriorLabel:Object(m.d)("selectQueryObject","selectEndpointsWithTestCoverage",function(e,t){return function(e,t){if(null==t)return null;if(e&&void 0===e.level)var n="",r=t.coverage,a=!1,l=!1,c="";else if(e.level&&void 0===e.category)n=e.level,r=t[e.level].coverage,c="";else if(e.level&&e.category&&void 0===e.name)n=e.category,r=t[e.level][e.category].coverage,c="";else{var o=t[e.level][e.category][e.name];n=e.name,c=function(e){var t=Object.keys(e)[0];return e[t].description}(t[e.level][e.category][e.name]),a=function(e){var t=Object.keys(e)[0];return e[t].isTested?"Tested":"Untested"}(o),r=o.coverage,l=!0}return{name:n,coverage:r,description:c,tested:a,endpoint:l}}(e,t)}),selectFocusedPath:Object(m.d)("selectQueryObject","selectZoom",function(e,t){if(null==e|null==t)return null;var n=w({level:le("level",t,e),category:le("category",t,e),name:le("name",t,e)}),r=Object(k.flatMap)(n);return Object(k.join)(r," / ")}),selectLabelStyle:function(){return{PERCENTAGE:{fontSize:"1.3em",textAnchor:"middle"},FRACTION:{fontSize:"1.2em,",textAnchor:"middle"},PATH:{fontSize:"1em",textAnchor:"middle"},DESCRIPTION:{fontSize:"0.9em",fontFamily:"IBM Plex Mono",textAnchor:"middle",width:"20px"}}},doLockChart:function(){return{type:"CHART_LOCKED"}},doUnlockChart:function(){return{type:"CHART_UNLOCKED"}}};function le(e,t,n){return void 0!==t[e]?t[e]:n[e]}function ce(e,t,n,r,a){var l=function(e,t,n,r,a){return Object(k.map)(e,function(e,l){return{name:l,color:ue(r,n,l,t),children:oe(e,l,t,r,n,a)}})}(e,t,n,r,a);return Object(k.orderBy)(l,function(e){return e.children.length},["desc"])}function oe(e,t,n,r,a,l){var c=function(e,t,n,r,a,l){return Object(k.values)(Object(k.reduce)(e,function(e,c,o){return e=function(e,t,n,r,a,l,c,o){return Object(k.forEach)(t,function(t,s){var u=t.isTested,i=function(e){var t=e.map(function(e){return e.replace(/\[|]/g,"")});return Object(k.includes)(t,"Conformance")}(t.test_tags),d="".concat(r,"/").concat(s),m=null==e[d]?1:e[d].size+1,f=function(e,t,n){if(e.isTested&&t)return n["category.".concat(e.category)];if(e.isTested&&!t){var r=n["category.".concat(e.category)],a=S(r,"0.2");return a}return"rgba(244, 244, 244, 1)"}(t,i,c);e[d]={name:r,parentName:n,testTagCount:t.test_tags.length,tested:u?"tested":"untested",isConformance:i?"conformance":"not conformance",size:m,color:u?ie(l,f,n,a,t,o):"rgba(244,244,244, 1)"}}),e}(e,c,t,o,n,r,a,l)},{}))}(e,t,n,r,a,l);return Object(k.sortBy)(c,[function(e){return"untested"===e.tested},function(e){return"conformance"!==e.isConformance},function(e){return e.testTagCount}])}function se(e,t,n){return void 0===e.level?t[n]:e.level===n?t[n]:S(t[n],"0.1")}function ue(e,t,n,r){return void 0===e.level?t["category.".concat(n)]:e.level===r&&e.category===n?t["category.".concat(n)]:S(t["category.".concat(n)],"0.1")}function ie(e,t,n,r,a,l){return null!=l&&void 0!==l?l.name===a.name?S(t,"0.7"):S(t,"0.1"):void 0===e.level?t:e.level===r&&e.category===n&&e.name===a.name?t:S(t,"0.1")}var de={name:"summary",selectPath:Object(m.d)("selectActiveEndpoint","selectQueryObject","selectZoom",function(e,t,n){return null==n&&void 0===t.level?{level:"",category:"",name:""}:null!==n&&void 0===t.level?{level:n.level,category:n.category,name:n.name}:{level:t.level,category:t.category,name:t.name}})},me=Object(m.b)({name:"testsResource",getPromise:function(e){return function(e,t){return e.service("tests").find({query:{release:t}})}(e.client,e.store.selectCurrentReleaseName())}});me.reactTestsResourceFetch=Object(m.d)("selectTestsResourceShouldUpdate",function(e,t){if(e)return{actionCreator:"doFetchTestsResource"}});var fe=me;var be={name:"tests",getReducer:function(){var e={};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;arguments.length>1&&arguments[1];return t}},selectTestTagsIndexRaw:Object(m.d)("selectActiveEndpoint",function(e){return null==e?null:e.test_tags}),selectTestTagsIndex:Object(m.d)("selectTestTagsIndexRaw",function(e){return null==e?null:e.map(function(e){return Object(k.trim)(e,"[]")})}),selectActiveTestsIndex:Object(m.d)("selectActiveEndpoint","selectTestsResource",function(e,t){return null==e||null==t?null:t.filter(function(t){return e.tests.includes(t.name)})}),selectActiveTestsNumber:Object(m.d)("selectActiveTestsIndex",function(e){return null==e?null:e.length}),selectActiveTest:Object(m.d)("selectQueryObject","selectTestsResource",function(e,t){return null==t?null:t.find(function(t){return t._id===e.test})}),doDisplayEndpointTests:function(e){return function(t){(0,t.dispatch)({type:"TESTS_REQUESTED_FOR_ENDPOINT",payload:e})}}},pe={name:"zoom",selectZoomArray:Object(m.d)("selectQueryObject",function(e){return null==e?null:void 0===e.zoomed?null:Object(k.split)(e.zoomed,"-")}),selectZoom:Object(m.d)("selectZoomArray",function(e){return null==e?null:w({depth:e[0],level:e[1],category:e[2],name:e[3]})})},ge=Object(m.a)(f,j,N,x,A,U,_,P,re,ae,de,fe,be,pe)();document.title="APISnoop | ",Object(l.render)(a.a.createElement(c.a,{store:ge},a.a.createElement(d,null)),document.getElementById("root"))},51:function(e,t,n){e.exports=n(116)},56:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.b1bc63d8.chunk.js.map