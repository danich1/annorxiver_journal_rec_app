(this["webpackJsonpannorxiver-journal-recommender"]=this["webpackJsonpannorxiver-journal-recommender"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a(1);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createElement("style",null,"\n    #logo:hover #star,\n    #logo[data-spin] #star {\n      animation: star_rotate 2s ease forwards infinite;\n    }\n    @keyframes star_rotate {\n      from {\n        transform: rotate(0);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "),u=r.a.createElement("path",{id:"book_filling",fill:"#ffe0b2",d:"       M 10 50       L 50 70       L 90 50       L 90 35       L 50 55       L 10 35       A 10 10 0 0 0 10 50       M 10 65       L 50 85       L 90 65       L 90 50       L 50 70       L 10 50       A 10 10 0 0 0 10 65     "}),m=r.a.createElement("path",{id:"book_top_cover",fill:"#000000",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 50 15       L 90 35       L 50 55       L 10 35       z     "}),p=r.a.createElement("path",{id:"book_outlines",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 10 50       L 30 60       M 47.5 68.75       L 50 70       L 90 50       M 10 65       L 50 85       L 90 65       M 10 35       A 10 10 0 0 0 10 50       A 10 10 0 0 0 10 65     "}),f=r.a.createElement("path",{id:"bookmark",fill:"#000000",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 35 55       L 35 71.25       L 38.75 69.25       L 42.5 74.75       L 42.5 58.75       z     "}),d=r.a.createElement("g",{transform:"translate(50,34) rotate(26.565) skewX(-26.565) scale(0.10)"},r.a.createElement("path",{id:"star",fill:"#ffe0b2",stroke:"#ffe0b2",strokeWidth:20,strokeLinecap:"round",strokeLinejoin:"round",d:"         M 0.000 -100.000         L 29.389 -40.451         L 95.106 -30.902         L 47.553 15.451         L 58.779 80.902         L 0.000 50.000         L -58.779 80.902         L -47.553 15.451         L -95.106 -30.902         L -29.389 -40.451         z       "})),h=function(e){var t=e.svgRef,a=e.title,n=o(e,["svgRef","title"]);return r.a.createElement("svg",s({viewBox:"0 0 100 100",id:"logo",ref:t},n),a?r.a.createElement("title",null,a):null,i,u,m,p,f,d)},E=r.a.forwardRef((function(e,t){return r.a.createElement(h,s({svgRef:t},e))})),b=(a.p,a(20),function(){return r.a.createElement("header",null,r.a.createElement("section",null,r.a.createElement("h1",null,"AnnoRxiver"),r.a.createElement("h2",null,"Journal Recommender"),r.a.createElement(E,{className:"logo"})))}),g=a(2),v=a.n(g),j=a(4),w=a(5),y=a(10),O=function(){var e=Object(j.a)(v.a.mark((function e(t){var a,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.crossref.org/works/"+t);case 2:return e.next=4,e.sent.json();case 4:return a=e.sent,n=a.message,console.log(n),r=n.title,c=n.URL,r=r.flat().join(" "),e.abrupt("return",{preprintTitle:r,preprintUrl:c});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(v.a.mark((function e(t){var a,n,r,c,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-journal-rec.greenelab.com/doi/"+t);case 2:return e.next=4,e.sent.json();case 4:return a=e.sent,n=a.journal_neighbors||[],r=a.paper_neighbors||[],c={x:a["2d_coord"].dim1,y:a["2d_coord"].dim2},l=function(e){return e.pmcid=(e.pmcid||e.document||"").replace("PMC","")},n.forEach(l),r.forEach(l),e.abrupt("return",{similarJournals:n,similarPapers:r,coordinates:c});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(v.a.mark((function e(t){var a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e.pmcid})).filter((function(e){return e})),e.next=3,fetch("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&tool=AnnoRxivir&email=greenescientist@gmail.com&retmode=json&id="+a.join(","));case 3:return e.next=5,e.sent.json();case 5:return n=e.sent.result,r=function(e){return Object(y.a)(Object(y.a)({},e),n[e.pmcid]||{})},t=t.map(r),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.map((function(e){return e.distance})),a=Math.max.apply(Math,Object(w.a)(t)),n=Math.min.apply(Math,Object(w.a)(t)),r=a-n;return e.sort((function(e,t){return e.distance-t.distance})),e=e.map((function(e,t){return{id:e.pmcid||null,title:e.title||"",authors:(e.authors||[]).map((function(e){return e.name||""})).filter((function(e){return e})).join(", "),journal:(e.fulljournalname||e.journal||"").split("_").join(" "),year:(e.pubdate||"").split(" ")[0]||"",distance:e.distance,strength:(e.distance-n)/r,rank:t+1}}))},L=(a(22),function(e){var t=e.status;return"LOADING"===t?r.a.createElement("section",{className:"center"},r.a.createElement("div",{className:"loading"},r.a.createElement("i",{className:"fas fa-spinner fa-spin icon_with_text"}),r.a.createElement("span",null,"Loading..."))):"ERROR"===t?r.a.createElement("section",{className:"center"},r.a.createElement("div",{className:"error"},r.a.createElement("i",{className:"far fa-times-circle icon_with_text"}),r.a.createElement("span",null,"Couldn't get results"))):null}),_=(a(23),function(e){var t=e.setPreprintTitle,a=e.setPreprintUrl,c=e.status,s=e.setStatus,o=e.setSimilarJournals,i=e.setSimilarPapers,u=e.setCoordinates,m=Object(n.useState)(P()||""),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(n.useCallback)((function(e){return d(e.target.value.trim())}),[]),E=Object(n.useCallback)(function(){var e=Object(j.a)(v.a.mark((function e(n){var r,c,l,m,p,f,h,E,b=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!(b.length>1&&void 0!==b[1])||b[1],n=N(n),d(n),n){e.next=5;break}return e.abrupt("return");case 5:return s("LOADING"),r&&C(n),e.prev=7,e.next=10,O(n);case 10:return c=e.sent,l=c.preprintTitle,m=c.preprintUrl,t(l),a(m),e.next=17,k(n);case 17:return p=e.sent,f=p.similarJournals,h=p.similarPapers,E=p.coordinates,e.next=23,S(f);case 23:return f=e.sent,e.next=26,S(h);case 26:h=e.sent,f=x(f),h=x(h),o(f),i(h),u(E),s("SUCCESS"),e.next=39;break;case 35:e.prev=35,e.t0=e.catch(7),console.log(e.t0),s("ERROR");case 39:case"end":return e.stop()}}),e,null,[[7,35]])})));return function(t){return e.apply(this,arguments)}}(),[u,t,a,o,i,s]),b=Object(n.useCallback)((function(){var e=P();e&&(d(e),E(e,!1))}),[E]);return Object(n.useEffect)((function(){P()&&E(P())}),[E]),Object(n.useEffect)((function(){return window.addEventListener("popstate",b),function(){return window.removeEventListener("popstate",b)}}),[b,E]),r.a.createElement("section",{id:"search"},r.a.createElement("p",{className:"center"},r.a.createElement("i",null,"Enter the ",r.a.createElement("a",{href:"https://www.biorxiv.org/"},"bioRxiv")," DOI of your preprint")),r.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault(),E(f)}},r.a.createElement("input",{className:"search_input",value:f,onChange:h,type:"text",placeholder:"e.g. 10.1101/833400",disabled:"LOADING"===c}),r.a.createElement("button",{className:"search_button",type:"submit",title:"Search for related papers and journals",disabled:"LOADING"===c},r.a.createElement("i",{className:"fas fa-search"}))))}),N=function(e){return e.replace(/^\D*/g,"").replace(/v\d+$/g,"").trim()},P=function(){return new URLSearchParams(window.location.search.substring(1)).get("doi")},C=function(e){var t=window.location.href,a=window.location.href.split(/[?#]/)[0]+"?doi="+e;t!==a&&window.history.pushState(null,null,a)},M=function(e){var t=e.preprintTitle,a=e.preprintUrl,n=e.status;return r.a.createElement("section",{id:"your-preprint"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-feather-alt heading_icon"}),"Your Preprint"),!(t&&a)&&r.a.createElement(L,{status:n}),t&&a&&r.a.createElement("p",{className:"center"},r.a.createElement("a",{href:a},t)))},R=a(3),T=a.n(R),U=(a(13),T()("#ff980020")),A=T()("#ff9800"),J=function(e){var t=e.similarJournals,a=e.status;return r.a.createElement("section",{id:"similar-journals"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-bookmark heading_icon"}),"Most Similar Journals"),"SUCCESS"!==a&&r.a.createElement(L,{status:a}),"SUCCESS"===a&&t.map((function(e,t){var a=e.journal,n=e.rank,c=e.distance,l=e.strength;return r.a.createElement("div",{key:t,className:"card"},r.a.createElement("div",{className:"card_score",title:"Distance score: "+c,style:{backgroundColor:A.mix(U,l)}},n),r.a.createElement("div",{className:"card_details"},r.a.createElement("a",{href:"https://www.google.com/search?q="+a},a)))})))},D=T()("#ff980020"),I=T()("#ff9800"),F=function(e){var t=e.similarPapers,a=e.status;return r.a.createElement("section",{id:"similar-papers"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-scroll heading_icon"}),"Most Similar Papers"),"SUCCESS"!==a&&r.a.createElement(L,{status:a}),"SUCCESS"===a&&t.map((function(e,t){var a=e.id,n=e.title,c=e.authors,l=e.year,s=e.journal,o=e.rank,i=e.distance,u=e.strength;return r.a.createElement("div",{key:t,className:"card"},r.a.createElement("div",{className:"card_score",title:"Distance score: "+i,style:{backgroundColor:I.mix(D,u)}},o),r.a.createElement("div",{className:"card_details"},r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/"+a,title:n},n),r.a.createElement("div",{title:c,className:"truncate"},c),r.a.createElement("div",{title:s+" \xb7 "+l,className:"truncate"},s," \xb7 ",l)))})))},q=a(40),G=(a(31),function(e){var t=e.selectedPc,a=e.setSelectedPc;return r.a.createElement("p",{className:"center"},ae(V,Y).map((function(e){return r.a.createElement(B,Object.assign({key:e},{number:e,selectedPc:t,setSelectedPc:a}))})))}),B=function(e){var t=e.number,a=e.selectedPc,s=e.setSelectedPc,o=Object(n.useState)(!1),i=Object(l.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(null),f=Object(l.a)(p,2),d=f[0],h=f[1],E=Object(n.useState)(null),b=Object(l.a)(E,2),g=b[0],v=b[1],j=Object(n.useRef)(),w=Object(q.a)(d,g,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{rootBoundary:"document"}}]}),y=w.styles,O=w.attributes,k=w.update;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:h,className:"cloud_button","data-number":ne(t),"data-selected":a===t,onClick:function(){return s(a===t?null:t)},onMouseEnter:function(){window.clearTimeout(j.current),j.current=window.setTimeout((function(){return m(!0)}),500)},onMouseLeave:function(){window.clearTimeout(j.current),m(!1)}},r.a.createElement("img",{src:re(t),title:"Select principal component "+ne(t),alt:"Select principal component "+ne(t),onLoad:k})),u&&Object(c.createPortal)(r.a.createElement("img",Object.assign({ref:v,src:re(t),className:"cloud_enlarged",title:"Select principal component "+ne(t),alt:"Select principal component "+ne(t),onLoad:k,style:y.popper},O.popper)),document.body))},z=a(9),X=(a(32),function(e){var t=e.cells,a=e.selectedPc,c=e.selectedCell,s=e.setSelectedCell,o=e.coordinates,i=Object(n.useRef)(),u=Object(n.useState)(""),m=Object(l.a)(u,2),p=m[0],f=m[1];if(a){var d,h=Object(z.a)(t);try{for(h.s();!(d=h.n()).done;){var E=d.value,b=E.pcs.find((function(e){return e.name===ne(a)}));E.score=(null===b||void 0===b?void 0:b.score)||0}}catch(N){h.e(N)}finally{h.f()}var g,v=Math.max.apply(Math,Object(w.a)(t.map((function(e){return Math.abs(e.score)}))))||1,j=Object(z.a)(t);try{for(j.s();!(g=j.n()).done;){var y=g.value;y.strength=y.score/v}}catch(N){j.e(N)}finally{j.f()}}else{var O,k=t.map((function(e){return e.count})),S=Math.min.apply(Math,Object(w.a)(k)),x=Math.max.apply(Math,Object(w.a)(k)),L=Object(z.a)(t);try{for(L.s();!(O=L.n()).done;){var _=O.value;_.strength=(_.count-S)/(x-S)}}catch(N){L.e(N)}finally{L.f()}}return Object(n.useEffect)((function(){if(i.current){var e=i.current.getBBox(),t=e.x,a=e.y,n=e.width,r=e.height;f([t,a,n,r].join(" "))}}),[t]),r.a.createElement("p",null,r.a.createElement("svg",{ref:i,viewBox:p||void 0,className:"map"},t.concat(c||[]).map((function(e,t){return r.a.createElement("rect",{key:t,className:"cell",x:e.x-.2025,y:e.y-.2025,width:.405,height:.405,"data-selected":e===c,fill:a?Z.mix(e.strength>0?Q:ee,Math.abs(e.strength)):K.mix($,e.strength),onClick:function(){return s(e===c?null:e)}})})),o.x&&o.y&&r.a.createElement("circle",{className:"marker",cx:o.x,cy:o.y,r:.2025})))}),W=(a(33),function(e){var t=e.selectedPc,a=e.coordinates;return r.a.createElement("p",{className:"legend"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:Q}}),"pos pc",ne(t)),r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:ee}}),"neg pc",ne(t))),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:$}}),"many papers"),r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:K}}),"few papers")),a.x&&a.y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("span",{className:"legend_circle",style:{backgroundColor:"var(--red)"}}),"your preprint")))}),H=(a(34),function(e){var t=e.selectedCell,a=e.selectedPc,n=e.setSelectedPc;return r.a.createElement("div",null,r.a.createElement("h4",null,"Papers"),r.a.createElement("p",null,t.count.toLocaleString()),r.a.createElement("h4",null,"Top Journals"),r.a.createElement("p",null,t.journals.map((function(e,t){var a=e.name,n=e.count;return r.a.createElement("span",{key:t,className:"cell_detail_row"},r.a.createElement("span",{className:"truncate"},a),r.a.createElement("span",{className:"truncate"},n.toLocaleString()," papers"))}))),r.a.createElement("h4",null,"Top Principal Components"),r.a.createElement("p",null,t.pcs.slice(0,5).map((function(e,t){var c=e.name,l=e.score;return r.a.createElement("span",{key:t,className:"cell_detail_row"},r.a.createElement("a",{role:"button",title:"Select principal component "+ne(parseInt(c)),onClick:function(){return n(parseInt(c))}},c,parseInt(c)===a&&r.a.createElement("i",{className:"fas fa-check"})),r.a.createElement("span",null,l.toFixed(2)," score"))}))))}),V=1,Y=50,$=T()("#606060"),K=T()("#e0e0e0"),Q=T()("#ff9800"),Z=T()("#e0e0e0"),ee=T()("#2196f3"),te=function(e){var t=e.coordinates,a=Object(n.useState)([]),c=Object(l.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(null),u=Object(l.a)(i,2),m=u[0],p=u[1],f=Object(n.useState)(null),d=Object(l.a)(f,2),h=d[0],E=d[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,fetch("./data/plot.json");case 3:return e.next=5,e.sent.json();case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("section",{id:"map"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-map heading_icon"}),"Map of PubMed Central"),r.a.createElement(G,{selectedPc:m,setSelectedPc:p}),r.a.createElement(X,{cells:s,selectedPc:m,selectedCell:h,setSelectedCell:E,coordinates:t}),r.a.createElement(W,{selectedPc:m,coordinates:t}),h&&r.a.createElement(H,{selectedCell:h,selectedPc:m,setSelectedPc:p}))},ae=function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},ne=function(e){return String(e).padStart(2,"0")},re=function(e){return"https://raw.githubusercontent.com/greenelab/annorxiver/master/biorxiv/pca_association_experiment/output/word_pca_similarity/figures/pca_XX_cossim_word_cloud.png".replace("XX",ne(e))},ce=function(){return r.a.createElement("section",{id:"help"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-question-circle heading_icon"}),"About this tool"),r.a.createElement("p",null,"This tool uses a machine learning model trained on 1.7 million"," ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/"},"PubMed Central open access documents")," ","to recommend suitable journals based on the textual content of your"," ",r.a.createElement("a",{href:"https://www.biorxiv.org/"},"bioRxiv")," preprint."),r.a.createElement("p",null,'The tool also provides a "map" of the PubMed Central documents, grouped into bins based on similar textual content, and shows you where your preprint falls on the map. Select a square to learn more about the papers in that bin.'),r.a.createElement("p",null,"The map also incorporates a set of 50"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Principal_component_analysis"},"principal components")," ","(PCs) generated from bioRxiv. Each PC represents two high level concepts characterized by keywords of various strengths, illustrated in the word cloud thumbnails above the map. Select a thumbnail to color the map by that PC. Deeper orange cells will be papers that correlate more with the orange keywords in the image, and vice versa for blue."),r.a.createElement("p",null,"For more information, see the"," ",r.a.createElement("a",{href:"https://github.com/greenelab/annorxiver-journal-recommender#annorxiver-journal-recommender"},"readme on GitHub"),"."))},le=function(){return r.a.createElement("footer",null,r.a.createElement("section",null,r.a.createElement("p",null,"A project of the ",r.a.createElement("a",{href:"https://greenelab.com/"},"Greene Lab"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/greenelab/annorxiver_journal_rec_app"},r.a.createElement("i",{className:"fab fa-github icon_with_text"}),r.a.createElement("span",null,"View on GitHub")))))},se=(a(35),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(n.useState)([]),E=Object(l.a)(h,2),g=E[0],v=E[1],j=Object(n.useState)([]),w=Object(l.a)(j,2),y=w[0],O=w[1],k=Object(n.useState)({}),S=Object(l.a)(k,2),x=S[0],L=S[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("main",null,r.a.createElement(_,{preprintTitle:i,preprintUrl:f,setPreprintTitle:u,setPreprintUrl:d,status:a,setStatus:c,setSimilarJournals:v,setSimilarPapers:O,setCoordinates:L}),r.a.createElement("hr",null),""!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{preprintTitle:i,preprintUrl:f,status:a}),r.a.createElement("hr",null),r.a.createElement(F,{similarPapers:y,status:a}),r.a.createElement("hr",null),r.a.createElement(J,{similarJournals:g,status:a}),r.a.createElement("hr",null)),r.a.createElement(te,{coordinates:x}),r.a.createElement("hr",null),r.a.createElement(ce,null)),r.a.createElement(le,null))});Object(c.render)(r.a.createElement(se,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.62a50791.chunk.js.map