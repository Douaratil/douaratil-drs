(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{433:function(t,e,i){},434:function(t,e,i){"use strict";var n=i(4),a=i(42).find,s=i(108),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},436:function(t,e,i){"use strict";i(433)},437:function(t,e,i){"use strict";i(16),i(43),i(434);var n={name:"Breadcrumb",computed:{bread:function(){var t=this.$page.path.split("/");t[t.length-1].length||t.pop();for(var e="",i=[],n=0;n<t.length;n++){var a=!1;n==t.length-1&&(a=!0),e+=t[n];var s=this.$site.pages.find((function(t){return t.path===e||t.path===e+"/"}));e+="/",null!=s&&("/grimoire/"==s.path?i.push({to:s.path,disabled:a,text:"Grimoire"}):"/classes/"==s.path?i.push({to:s.path,disabled:a,text:"Classes"}):"/bestiaire/"==s.path?i.push({to:s.path,disabled:a,text:"Bestiaire"}):"/liste-objets-magiques/"==s.path?i.push({to:s.path,disabled:a,text:"Liste des objets magiques"}):"/mon-grimoire/"==s.path?i.push({to:s.path,disabled:a,text:"Mon grimoire"}):"/mon-bestiaire/"==s.path?i.push({to:s.path,disabled:a,text:"Mon bestiaire"}):"/mes-objets-magiques/"==s.path?i.push({to:s.path,disabled:a,text:"Mes objets magiques"}):"/creation-de-sort/"==s.path?i.push({to:s.path,disabled:a,text:"Création de sort"}):"/creation-de-monstre-pnj/"==s.path?i.push({to:s.path,disabled:a,text:"Création de monstre ou PNJ"}):"/calculateur-de-caracteristiques/"==s.path?i.push({to:s.path,disabled:a,text:"Calculateur de caractéristiques"}):i.push({to:s.path,disabled:a,text:s.frontmatter.breadcrumb||s.title}))}return i}}},a=(i(436),i(6)),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-print-none"},["/"!=t.$route.path?i("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[i("v-breadcrumbs-item",{attrs:{to:n.to,exact:!0,disabled:n.disabled}},["/"==n.to?[i("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"/dragon_rouge.svg"}})]:[t._v("\n          "+t._s(n.text)+"\n        ")]],2)]}}],null,!1,567746361)}):i("v-row",{attrs:{justify:"center"}},[i("img",{staticClass:"d-block home-logo",staticStyle:{width:"120px",height:"120px"},attrs:{src:"/dragon_rouge.svg"}})])],1)}),[],!1,null,null,null);e.a=s.exports},438:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(55),i(56),i(20),i(81),i(22),i(25),i(82);var n=i(85);function a(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=Object(n.a)(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(c)throw r}}}}},443:function(t,e,i){var n,a,s;a=[],void 0===(s="function"==typeof(n=function(){"use strict";function e(t,e,i){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){r(n.response,e,i)},n.onerror=function(){console.error("could not download file")},n.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(i){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,s,r){var o=a.URL||a.webkitURL,c=document.createElement("a");s=s||t.name||"download",c.download=s,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?n(c):i(c.href)?e(t,s,r):n(c,c.target="_blank")):(c.href=o.createObjectURL(t),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){n(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,s){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,s),a);else if(i(t))e(t,a,s);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){n(r)}))}}:function(t,i,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,i,n);var o="application/octet-stream"===t.type,c=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||s)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var t=m.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},m.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,d=u.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});a.saveAs=r.saveAs=r,t.exports=r})?n.apply(e,a):n)||(t.exports=s)},449:function(t,e,i){"use strict";var n=i(163),a=i(441),s=i.n(a),r={name:"MagicItem",data:function(){return{md:new s.a}},props:["magicItem","isList","hideTitle"],methods:{displayItemMeta:function(){return Object(n.a)(this.magicItem.frontmatter)}}},o=i(6),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page content"},[i("div",{staticClass:"theme-default-content"},[t.hideTitle?t._e():[t.isList?i("h2",[t._v(t._s(t.magicItem.title))]):i("h1",[t._v(t._s(t.magicItem.title))])],t._v(" "),i("div",{staticClass:"magic-item-details title"},[t._v("\n      "+t._s(t.displayItemMeta())+"\n    ")])],2),t._v(" "),t.magicItem.custom?i("div",{staticClass:"mt-4",domProps:{innerHTML:t._s(t.md.render(t.magicItem.content))}}):i("Content",{staticClass:"mt-4",attrs:{pageKey:t.magicItem.key}}),t._v(" "),t.$page.frontmatter.source?i("p",{staticClass:"source"},[t._v("Source : "),i("em",[t._v(t._s(t.$page.frontmatter.source))])]):t._e(),t._v(" "),t.magicItem.author?i("p",{staticClass:"source"},[t._v("Auteur : "),i("em",[t._v(t._s(t.magicItem.author))])]):t._e()],1)}),[],!1,null,null,null);e.a=c.exports},530:function(t,e,i){"use strict";i.r(e);var n=i(438),a=i(437),s=(i(57),i(434),{name:"MyMagicItems",components:{MagicItem:i(449).a},data:function(){return{sortBy:"title",sortDesc:!1,headers:[{text:"Nom",align:"start",sortable:!0,value:"title"},{text:"Type",align:"start",sortable:!1,value:"frontmatter.type"},{text:"Rareté",align:"start",sortable:!1,value:"frontmatter.rarity"},{text:"Harmonisation",align:"start",sortable:!1,value:"frontmatter.attunement"},{text:"",align:"center",sortable:!1,value:"actions"}]}},computed:{magicItems:function(){return this.$store.state.myMagicItems.magicItems}},methods:{toggleHidePrint:function(t){this.isHiddenPrint(t)?this.$store.commit("myMagicItems/removeNotPrintedMagicItem",t):this.$store.commit("myMagicItems/addNotPrintedMagicItem",t)},isHiddenPrint:function(t){if(this.$store.state.myMagicItems.notPrintedMagicItems&&this.$store.state.myMagicItems.notPrintedMagicItems.findIndex((function(e){return e.key==t.key}))>=0)return!0;return!1},onClickRow:function(t,e){e.expand(!e.isExpanded)},removeMagicItem:function(t){this.$store.commit("myMagicItems/removeMagicItem",t),this.$store.commit("setSnackbarText","L'objet magique "+t.title+" a été supprimé de votre bibliothèque"),this.$store.commit("setIsOpenSnackbar",!0)},share:function(t){this.$store.commit("setShareURI",encode(t)),this.$store.commit("setIsOpenShareHomebrewDialog",!0)},getMagicItem:function(t){return!t.custom&&t.path?this.$site.pages.find((function(e){return e.path===t.path||e.path===t.path+"/"})):t}}}),r=i(6),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page content"},[i("div",{staticClass:"theme-default-content"},[t.magicItems.length>0?i("div",[i("div",{staticClass:"d-print-none mb-12"},[i("v-data-table",{staticClass:"data-table",attrs:{headers:t.headers,items:t.magicItems,"item-key":"key","sort-by":t.sortBy,"sort-desc":t.sortDesc,"must-sort":"","items-per-page":-1,"hide-default-footer":"","show-expand":""},on:{"click:row":t.onClickRow},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var n=e.headers,a=e.item;return[i("td",{staticClass:"pa-4",attrs:{colspan:n.length}},[i("MagicItem",{attrs:{magicItem:t.getMagicItem(a)}})],1)]}},{key:"item.title",fn:function(e){var n=e.item;return[i("span",{staticClass:"subtitle-2"},[t._v(t._s(n.title))])]}},{key:"item.frontmatter.attunement",fn:function(e){var n=e.item;return[n.frontmatter.attunement?i("span",[t._v(t._s(n.frontmatter.attunement))]):t._e()]}},{key:"item.actions",fn:function(e){var n=e.item;return[i("div",{staticClass:"text-no-wrap"},[n.custom?i("v-btn",{staticClass:"d-print-none",attrs:{small:"",depressed:"",icon:""},on:{click:function(e){return t.share(n)}}},[i("v-icon",[t._v("mdi-share-variant")])],1):t._e(),t._v(" "),i("v-btn",{staticClass:"d-print-none mr-2",attrs:{small:"",depressed:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.toggleHidePrint(n)}}},[t.isHiddenPrint(n)?i("v-icon",[t._v("mdi-printer-off")]):i("v-icon",[t._v("mdi-printer")])],1),t._v(" "),i("v-btn",{staticClass:"d-print-none mr-2",attrs:{small:"",depressed:"",link:"",icon:"",to:{path:"/creation-d-objet-magique/",query:{key:n.key}}}},[i("v-icon",[t._v("mdi-pencil")])],1),t._v(" "),i("v-btn",{staticClass:"d-print-none",attrs:{color:"error",small:"",depressed:"",icon:""},on:{click:function(e){return t.removeMagicItem(n)}}},[i("v-icon",[t._v("mdi-delete")])],1)],1)]}}],null,!1,3183969974)})],1),t._v(" "),i("div",{staticClass:"d-none d-print-block column-count-2"},t._l(t.magicItems,(function(e){return i("div",[t.isHiddenPrint(e)?t._e():i("div",[i("h2",{staticClass:"d-flex align-center"},[i("div",{staticClass:"mr-4"},[t._v(t._s(e.title))]),t._v(" "),i("v-btn",{staticClass:"d-print-none mr-2",attrs:{small:"",depressed:"",link:"",to:{path:"/creation-de-sort/",query:{key:e.key}}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Modifier")],1),t._v(" "),i("v-btn",{staticClass:"d-print-none",attrs:{color:"error",small:"",depressed:""},on:{click:function(i){return t.removeMagicItem(e)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),t._v(" Supprimer")],1)],1),t._v(" "),i("MagicItem",{attrs:{magicItem:t.getMagicItem(e),isList:!0,hideTitle:!0}})],1)])})),0)]):[t._v("\n      Vous n'avez aucun objet magique.\n    ")]],2)])}),[],!1,null,null,null).exports,c=i(443),l={name:"MyMagicItemsLayout",components:{Breadcrumb:a.a,MyMagicItems:o},data:function(){return{isUploading:!1,confirmDeleteDialog:!1,alertOpen:!1,alertText:null,alertType:"info"}},methods:{download:function(){Object(c.saveAs)(new Blob([JSON.stringify(this.$store.state.myMagicItems)],{type:"text/plain;charset=utf-8"}),"objets-magiques.json")},upload:function(t){var e=t.target.files[0];if(console.log(e),e){var i=new FileReader,a=this;i.onload=function(){var t=JSON.parse(i.result),e=!0;if(t.magicItems&&t.magicItems.length>=1){var s,r=Object(n.a)(t.magicItems);try{for(r.s();!(s=r.n()).done;){"magicitem"!==s.value.pid&&(e=!1)}}catch(t){r.e(t)}finally{r.f()}}else e=!1;e?(a.$store.commit("myMagicItems/setMagicItems",t.magicItems),t.notPrintedMagicItems&&a.$store.commit("myMagicItems/setNotPrintedMagicItems",t.notPrintedMagicItems),a.$store.commit("setSnackbarText",a.$store.state.myMagicItems.magicItems.length+" objets magiques inscrits dans votre bibliothèque"),a.$store.commit("setIsOpenSnackbar",!0)):(a.$store.commit("setSnackbarText","Le fichier est invalide"),a.$store.commit("setIsOpenSnackbar",!0))},i.readAsText(e),this.$refs.uploader.value=""}},onUploadClick:function(){var t=this;this.isUploading=!0,window.addEventListener("focus",(function(){t.isUploading=!1}),{once:!0}),this.$refs.uploader.click()},print:function(){window.print()},confirmDeletion:function(){this.$store.commit("myMagicItems/resetMagicItems"),this.confirmDeleteDialog=!1,this.$store.commit("setSnackbarText","Votre bibliothèque d'objets magiques a été effacée"),this.$store.commit("setIsOpenSnackbar",!0)}},mounted:function(){this.$store.commit("setHasRightDrawer",!1),this.$store.commit("setRightDrawer",this.$vuetify.breakpoint.lgAndUp),this.$store.commit("setInRightDrawer",null)}},m=Object(r.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-magic-items"},[i("div",{staticClass:"d-flex align-center mb-4 d-print-none"},[i("Breadcrumb",{staticClass:"mr-auto"}),t._v(" "),i("v-btn",{staticClass:"mr-4",attrs:{color:"primary",depressed:"",link:"",to:"/creation-d-objet-magique/"}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" Créer un objet magique")],1),t._v(" "),i("v-btn",{attrs:{color:"primary",depressed:"",link:"",to:"/liste-objets-magiques/"}},[t._v("Liste des objets magiques")])],1),t._v(" "),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.confirmDeleteDialog,callback:function(e){t.confirmDeleteDialog=e},expression:"confirmDeleteDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Supprimer les objets magiques")]),t._v(" "),i("v-card-text",[t._v("\n        Cette action supprimera tous les objets magiques ajoutés à votre bibliothèque, y compris les objets magiques que vous avez créés. Souhaitez vous les supprimer ?\n      ")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{depressed:""},on:{click:function(e){t.confirmDeleteDialog=!1}}},[t._v("\n          Annuler\n        ")]),t._v(" "),i("v-btn",{attrs:{color:"error darken-1",depressed:""},on:{click:t.confirmDeletion}},[t._v("\n          Supprimer\n        ")])],1)],1)],1),t._v(" "),i("v-alert",{attrs:{type:t.alertType,dismissible:"",transition:"fade-transition"},model:{value:t.alertOpen,callback:function(e){t.alertOpen=e},expression:"alertOpen"}},[t._v("\n    "+t._s(t.alertText)+"\n  ")]),t._v(" "),i("MyMagicItems")],1)}),[],!1,null,null,null);e.default=m.exports}}]);