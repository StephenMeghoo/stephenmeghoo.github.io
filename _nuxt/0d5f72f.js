(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{275:function(t,e,n){"use strict";n.r(e);n(22),n(12),n(14),n(9),n(26),n(27),n(28);var r=n(5),o=n(3),c=(n(19),n(1)),l=n(140);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={name:"PageSlug",middleware:function(t){var e=t.params,n=t.redirect;"index"===e.slug&&n("/")},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,f,m,h,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.store,o=t.app,c=t.params,l=t.error,d=c.slug||"index",e.prev=2,e.next=5,n(o.i18n.locale,d).fetch();case 5:f=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",l({statusCode:404,message:"Page not found"}));case 11:return e.next=13,n(o.i18n.locale).only(["title","slug"]).sortBy("position","asc").surround(d,{before:1,after:1}).fetch();case 13:return m=e.sent,h=Object(r.a)(m,2),v=h[0],y=h[1],e.abrupt("return",{document:f,prev:v,next:y});case 18:case"end":return e.stop()}}),e,null,[[2,8]])})))()},mounted:function(){this.document.version&&localStorage.setItem("document-".concat(this.document.slug,"-version"),this.document.version),setTimeout((function(){var t,e=d(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var n=t.value,component=(new(c.a.extend(l.default))).$mount();n.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),100)},head:function(){return{title:this.document.title,meta:[{hid:"description",name:"description",content:this.document.description},{hid:"og:title",property:"og:title",content:this.document.title},{hid:"og:description",property:"og:description",content:this.document.description},{hid:"twitter:title",name:"twitter:title",content:this.document.title},{hid:"twitter:description",name:"twitter:description",content:this.document.description}]}}},h=n(0),v=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap-reverse"},[n("div",{staticClass:"w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r",class:{"lg:w-3/4":!t.document.fullscreen}},[n("article",{staticClass:"prose dark:prose-dark max-w-none lg:px-8"},[n("h1",[t._v(t._s(t.document.title))]),t._v(" "),n("NuxtContent",{attrs:{document:t.document}})],1),t._v(" "),n("AppGithubLink",{attrs:{document:t.document}}),t._v(" "),n("AppPrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),n("AppToc",{attrs:{toc:t.document.toc}})],1)}),[],!1,null,null,null);e.default=v.exports;installComponents(v,{AppGithubLink:n(141).default,AppPrevNext:n(142).default,AppToc:n(137).default})}}]);