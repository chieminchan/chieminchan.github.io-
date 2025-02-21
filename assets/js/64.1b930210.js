(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{378:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-性能优化"}},[t._v("#")]),t._v(" 👉 Web 性能优化")]),t._v(" "),a("h2",{attrs:{id:"首屏优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化"}},[t._v("#")]),t._v(" 首屏优化")]),t._v(" "),a("h3",{attrs:{id:"加载阶段的优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载阶段的优化"}},[t._v("#")]),t._v(" 加载阶段的优化")]),t._v(" "),a("p",[t._v("加载阶段是指从发出请求到渲染出完整页面的过程，影响到这个阶段的主要因素有网络和 JavaScript 脚本。")]),t._v(" "),a("ol",[a("li",[t._v("减少关键资源的个数")])]),t._v(" "),a("p",[t._v("1）通过内联关键 JavaScript、内联关键 CSS，移除这两种类型的文件下载，这样获取到 HTML 文件之后就可以直接开始渲染流程了。")]),t._v(" "),a("p",[t._v("如果资源是“渲染阻止”，则意味着浏览器在下载或处理该资源之前无法显示该页面。")]),t._v(" "),a("p",[t._v("2）另一种方式，如果 JavaScript 代码没有 DOM 或者 CSSOM 的操作，则可以改成 async 或者 defer 属性。大的 CSS 文件，可以通过媒体查询属性，将其拆分为多个不同用途的 CSS 文件，这样只有在特定的场景下才会加载特定的 CSS 文件。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("压缩关键资源大小")])]),t._v(" "),a("p",[t._v("可以压缩 CSS 和 JavaScript 资源，移除 HTML、CSS、JavaScript 文件中一些注释内容，gzip")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("减少域名查询")])]),t._v(" "),a("p",[t._v("DNS 查询和解析域名也是消耗时间的，所以要减少对外部 JS、CSS、图片等资源的引用，不同域名的使用越少越好。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("减少关键资源 RTT 的次数")])]),t._v(" "),a("p",[t._v("RTT 就是这里的往返时延。它是网络中一个重要的性能指标，表示从发送端发送数据开始，到发送端收到来自接收端的确认，总共经历的时延。通常 1 个 HTTP 的数据包在 14KB 左右，所以 1 个 0.1M 的页面就需要拆分成 8 个包来传输了，也就是说需要 8 个 RTT。")]),t._v(" "),a("p",[t._v("可通过减少关键资源的个数和减少关键资源的大小搭配来实现。除此之外，还可以使用 CDN 来减少每次 RTT 时长。")]),t._v(" "),a("h3",{attrs:{id:"预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),a("ol",[a("li",[t._v("dns-prefetch")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- DNS解析的速度可用通过下面的标签来进行预解析 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”dns-prefetch”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("”//weibo.com”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[t._v("#")]),t._v(" 按需加载")]),t._v(" "),a("h3",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),a("h3",{attrs:{id:"使用缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存"}},[t._v("#")]),t._v(" 使用缓存")]),t._v(" "),a("h2",{attrs:{id:"网络相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络相关"}},[t._v("#")]),t._v(" 网络相关")]),t._v(" "),a("h3",{attrs:{id:"浏览器-http-同域名并发请求限制-http1-1-域名分片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-http-同域名并发请求限制-http1-1-域名分片"}},[t._v("#")]),t._v(" 浏览器 http 同域名并发请求限制（http1.1 - 域名分片）")]),t._v(" "),a("h3",{attrs:{id:"采取-http2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#采取-http2"}},[t._v("#")]),t._v(" 采取 HTTP2")]),t._v(" "),a("h3",{attrs:{id:"dns-解析-如何优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析-如何优化"}},[t._v("#")]),t._v(" dns 解析（如何优化）")]),t._v(" "),a("h3",{attrs:{id:"tcp-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-http"}},[t._v("#")]),t._v(" tcp http")]),t._v(" "),a("h3",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" cdn")]),t._v(" "),a("h4",{attrs:{id:"缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),a("p",[t._v("浏览器通常限制对同一个域名最多只允许创建 6 个长连接，因此可以通过将域名分散至多个域名。（PS：域名解析时间会变多）")]),t._v(" "),a("h2",{attrs:{id:"构建相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建相关"}},[t._v("#")]),t._v(" 构建相关")]),t._v(" "),a("p",[t._v("构建方面通过合理的配置构建工具，达到减少生产环境的代码的体积，减少打包时间，缩短页面加载时间")]),t._v(" "),a("h3",{attrs:{id:"webpack-优化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-优化配置"}},[t._v("#")]),t._v(" webpack 优化配置")]),t._v(" "),a("p",[t._v("环境：@vue/cli：4.0.5 、webpack：4.31.0")]),t._v(" "),a("p",[t._v("vue-cli 提供了两种方式来更改 webpack 配置：")]),t._v(" "),a("ol",[a("li",[t._v("原生配置方式，配置的结果将会被 webpack-merge 合并入最终的 webpack 配置。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接书写webpack配置项...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isProduction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接修改配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// config.resolve.alias["@asset"] = resolve("src/assets");')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("链式配置方式，vue-cli 内部是使用 webpack-chain 这个插件来维护 webpack 配置的，因为能更细粒度的控制其内部配置，因此也是官方比较推荐的一个方式。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWepack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@assets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/assets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@components"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/components"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可通过"),a("code",[t._v("vue inspect > output.js")]),t._v("查看 vue-cli3 项目默认的 webpack 配置详情。")]),t._v(" "),a("h4",{attrs:{id:"优化打包体积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化打包体积"}},[t._v("#")]),t._v(" 优化打包体积")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("webpack-bundle-analyzer")]),t._v(" 分析打包体积;")])]),t._v(" "),a("p",[t._v("它将 bundle 内容展示为便捷的、交互式、可缩放的树状图形式。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm install webpack-bundle-analyzer --dev")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" BundleAnalyzerPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-bundle-analyzer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BundleAnalyzerPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BundleAnalyzerPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用"),a("code",[t._v("splitChunks")]),t._v("抽取公共代码")])]),t._v(" "),a("p",[t._v("webpack4 之前使用 commonChunkPlugin，webpack4 之后使用 splitChunks。")]),t._v(" "),a("h4",{attrs:{id:"优化打包速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化打包速度"}},[t._v("#")]),t._v(" 优化打包速度")]),t._v(" "),a("ol",[a("li",[t._v("使用"),a("code",[t._v("speed-measure-webpack-plugin")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SpeedMeasurePlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"speed-measure-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" smp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpeedMeasurePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里无法使用链式写法chainWebpack，会报错")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" smp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... webpack config goes here ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"路由懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[t._v("#")]),t._v(" 路由懒加载")]),t._v(" "),a("h2",{attrs:{id:"静态资源优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源优化"}},[t._v("#")]),t._v(" 静态资源优化")]),t._v(" "),a("h4",{attrs:{id:"图片懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[t._v("#")]),t._v(" 图片懒加载")]),t._v(" "),a("h3",{attrs:{id:"浏览器渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),a("h4",{attrs:{id:"避免回流和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免回流和重绘"}},[t._v("#")]),t._v(" 避免回流和重绘")]),t._v(" "),a("h4",{attrs:{id:"防抖和节流处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖和节流处理"}},[t._v("#")]),t._v(" 防抖和节流处理")]),t._v(" "),a("h3",{attrs:{id:"第三方插件的按需引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方插件的按需引入"}},[t._v("#")]),t._v(" 第三方插件的按需引入")]),t._v(" "),a("h3",{attrs:{id:"适当采用-keep-alive-缓存组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适当采用-keep-alive-缓存组件"}},[t._v("#")]),t._v(" 适当采用 keep-alive 缓存组件")]),t._v(" "),a("h4",{attrs:{id:"createdocumentfragment-创建文档碎片节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createdocumentfragment-创建文档碎片节点"}},[t._v("#")]),t._v(" createDocumentFragment 创建文档碎片节点")]),t._v(" "),a("p",[t._v("通过 document.createDocumentFragment() 创建文档碎片节点，对 DOM 进行批量操作，减少频繁修改 DOM。")])])}),[],!1,null,null,null);a.default=e.exports}}]);