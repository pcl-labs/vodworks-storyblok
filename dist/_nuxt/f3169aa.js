(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{545:function(t,e,o){"use strict";o.r(e);var n={asyncData:function(t){var e=!0;(t.query._storyblok||t.isDev||"undefined"!=typeof window&&window.localStorage.getItem("_storyblok_draft_mode"))&&("undefined"!=typeof window&&(window.localStorage.setItem("_storyblok_draft_mode","1"),window.location===window.parent.location&&window.localStorage.removeItem("_storyblok_draft_mode")),e=!0);var o=e?"draft":"published",path="/"===t.route.path?"/home":t.route.path;return function(t){var e=t.api,o=t.cacheVersion,n=t.errorCallback,r=t.version,path=t.path;return e.get("cdn/stories".concat(path),{version:r,resolve_links:"story,url",resolve_relations:"webinar-container.webinars,blog-container.blogs",cv:o}).then((function(t){return t.data})).catch((function(t){t.response?n({statusCode:t.response.status,message:t.response.data}):n({statusCode:404,message:"Failed to receive content form api"})}))}({version:o,api:t.app.$storyapi,errorCallback:t.error,path:path})},data:function(){return{story:{content:{}}}},methods:{resolveBackground:function(path){return"background-image: url(".concat(o(109)("./assets"+path),");")}},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(e){"input"===e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):e.slugChanged||window.location.reload()}))}},r=o(5),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center",style:t.resolveBackground("/img/home/home-hero-bg.jpg")},[o("div",{staticClass:"mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center"},[o("h1",{staticClass:"text-3xl md:text-4xl lg:text-5xl font-arial-black"},[t._v("\n        "+t._s(t.story.content.title)+"\n      ")]),t._v(" "),o("p",{staticClass:"mt-4 lg:text-lg"},[t._v("\n        "+t._s(t.story.content.subtitle)+"\n      ")])])]),t._v(" "),t.story.content.component?o(t.story.content.component,{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);