(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6],{227:function(t,e,r){"use strict";r.r(e);var l={props:{toc:{type:Array,default:function(){return[]}}}},n=r(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.toc.length?r("div",{staticClass:"w-full lg:w-1/4 py-4 lg:py-8 lg:pl-8 lg:pr-0"},[r("div",{staticClass:"lg:sticky lg:top-0 lg:pt-24 lg:-mt-24"},[r("h3",{staticClass:"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"},[t._v(t._s(t.$t("toc.title")))]),t._v(" "),r("nav",[r("scrollactive",{attrs:{"highlight-first-item":"","active-class":"text-primary-500",offset:0,tag:"ul"}},t._l(t.toc,(function(link){return r("li",{key:link.id,staticClass:"text-gray-700 dark:text-gray-300",class:{"border-t border-dashed dark:border-gray-800 first:border-t-0":2===link.depth}},[r("a",{staticClass:"block text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,r){"use strict";r.r(e);r(28),r(15);var l={computed:{releases:function(){return this.$store.state.releases},toc:function(){return this.releases.map((function(t){return{id:t.name,depth:2,text:t.name}}))}},methods:{formatDate:function(t){return new Date(t.date).toLocaleDateString(this.$i18n.locale)}},head:function(){return{title:"Releases"}}},n=r(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap-reverse"},[r("div",{staticClass:"w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r"},[r("article",{staticClass:"prose dark:prose-dark max-w-none lg:px-8"},[r("h1",[t._v("Releases")]),t._v(" "),t._l(t.releases,(function(e){return r("div",{key:e.name},[r("h2",{staticClass:"flex items-center justify-between",attrs:{id:e.name}},[t._v("\n          "+t._s(e.name)+"\n          "),r("span",{staticClass:"text-base font-normal text-gray-500"},[t._v(t._s(t.formatDate(e)))])]),t._v(" "),r("div",{staticClass:"nuxt-content",domProps:{innerHTML:t._s(e.body)}})])}))],2)]),t._v(" "),r("AppToc",{attrs:{toc:t.toc}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppToc:r(227).default})}}]);