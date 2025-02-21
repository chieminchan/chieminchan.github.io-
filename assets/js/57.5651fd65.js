(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{375:function(t,a,e){"use strict";e.r(a);var s=e(25),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" 👉 HTTP 缓存")]),t._v(" "),a("p",[t._v("在 HTTP 网络请求交互中，缓存是性能优化的重要手段。")]),t._v(" "),a("p",[t._v("没有缓存机制，浏览器就要多次重复请求服务器资源，而服务器也需要多次重复读取磁盘的对应资源，这样子大大延迟了浏览器获得和处理内容的时间以及增加了访问者的流量费用，造成非常差的用户体验。因此浏览器和服务端互相约定好"),a("code",[t._v("缓存机制")]),t._v("。")]),t._v(" "),a("p",[t._v("浏览器首次加载资源成功时，服务器返回 200，此时浏览器不仅将资源下载下来，而且把 response 的 header(date 属性非常重要，用来计算第二次相同资源时当前时间和 date 的时间差)一并缓存。接着在二次请求时，将会进入 HTTP 缓存阶段。")]),t._v(" "),a("p",[t._v("HTTP 的缓存主要有两大类：强缓存和协商缓存。优先级较高的是强缓存，在命中强缓存失败的情况下才会进行协商缓存。")]),t._v(" "),a("h2",{attrs:{id:"_1-强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-强缓存"}},[t._v("#")]),t._v(" 1. 强缓存")]),t._v(" "),a("p",[t._v("强缓存主要是通过 "),a("code",[t._v("Expire")]),t._v("和"),a("code",[t._v("Cache-Control")]),t._v(" 两个 HTTP Header 属性共同控制。当请求再次发送时，浏览器会先进行强缓存，若命中，则不需要发送请求到服务端，直接读取浏览器本地缓存。")]),t._v(" "),a("p",[t._v("命中强缓存时，返回的 HTTP 状态码为 200。 "),a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/whenUrl/url-CacheControl-response.png",alt:"cache-200",title:"cache-200"}})]),t._v(" "),a("h3",{attrs:{id:"_1-1-expire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-expire"}},[t._v("#")]),t._v(" 1.1 Expire")]),t._v(" "),a("p",[t._v("Expire 是 HTTP/1.0 标准的字段。Expire 标识在指定的"),a("strong",[t._v("过期时间点")]),t._v("后缓存过期。")]),t._v(" "),a("p",[t._v("服务端会在返回的响应头中通过 Expire 字段告诉浏览器在这个过期时间之前可以直接从缓存里面获取数据，无需再次请求服务端，但可能存在服务端时间和客户端时间不一致而导致服务端的过期时间不准确的情况。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-cache-control"}},[t._v("#")]),t._v(" 1.2 Cache-Control")]),t._v(" "),a("p",[t._v("Cache-Control 是 HTTP/1.1 标准的字段。Cache-Control 标识在指定的"),a("strong",[t._v("过期时长")]),t._v("后缓存过期。Cache-Control 相对于 Expire 更加精确，优先级更高。")]),t._v(" "),a("p",[t._v("Cache-Control 常见的属性值有以下几种：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("no-cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("强制要求缓存把请求调教给服务器验证（即进行协商缓存）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("no-store")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不适用任何缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("public")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("响应可以被中间代理、CDN 等缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("private")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("只有浏览器可缓存，代理服务器不可缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-age="),a("code",[t._v("<seconds>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("缓存存储的最大周期时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("s-maxage="),a("code",[t._v("<seconds>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代理服务器缓存周期时间，优先级比 max-age 更高")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("must-revalidate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("缓存一旦过期就要求重新向原始服务器验证，不能继续使用旧资源响应请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("proxy-revalidate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表示代理服务器的缓存过期后到源服务器获取。")])])])]),t._v(" "),a("p",[t._v("浏览器会先比较当前时间和上一次返回 200 的 date 的时间差，如果没有超过 max-age，命中强缓存，不发请求直接从本地缓存读取该文件（这里需要注意，如果没有 cache-control，会取 expires 的值，来对比是否过期）")]),t._v(" "),a("p",[t._v("另外，关于 max-age 和 s-maxage 的一个例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("maxage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n")])])]),a("p",[t._v("相当于源服务器说: 我这个响应是允许代理服务器缓存的，客户端缓存过期了到代理中拿，并且在客户端的缓存时间为 1000 秒，在代理服务器中的缓存时间为 2000 s。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-pragma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-pragma"}},[t._v("#")]),t._v(" 1.3 Pragma")]),t._v(" "),a("p",[t._v("除了以上两个字段，还有一个属性 "),a("code",[t._v("Pragma")]),t._v("也属于强缓存，是在 HTTP/1.0 中规定的通用首部，它只有一个属性值 "),a("code",[t._v("no-cache")]),t._v("，效果和 "),a("code",[t._v("Cache-Control: no-cache")]),t._v(" 一致。"),a("br"),t._v("\n当 Pragma 和 Cache-Control 同时存在时，Pragma 优先。")]),t._v(" "),a("p",[t._v("优先级从高到低分别是 Pragma -> Cache-Control -> Expires 。")]),t._v(" "),a("h2",{attrs:{id:"_2-协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-协商缓存"}},[t._v("#")]),t._v(" 2. 协商缓存")]),t._v(" "),a("p",[t._v("当强缓存失效后或请求头中设置了不走强缓存，会进行协商缓存。在协商缓存的机制下，浏览器需要先在请求头中携带相应的"),a("code",[t._v("缓存 tag")]),t._v("发送请求给服务器，由服务器验证缓存相关信息，进而判断是重新发送请求还是采用缓存资源。如果服务端提示缓存资源未改动（Not Modified），资源会被重定向到浏览器缓存，这种情况下网络请求对应的状态码是 "),a("code",[t._v("304")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/whenUrl/url-NotModified-response.png",alt:"cache-304",title:"cache-304"}})]),t._v(" "),a("p",[t._v("协商缓存主要由"),a("code",[t._v("ETag / If-None-Match")]),t._v("、"),a("code",[t._v("Last-Modified / If-Modified-Since")]),t._v("共同控制。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-last-modified-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-last-modified-if-modified-since"}},[t._v("#")]),t._v(" 2.1 Last-Modified / If-Modified-Since")]),t._v(" "),a("p",[a("code",[t._v("Last-Modified")]),t._v("标识资源最后一次的修改时间。一般会选文件的 mtime，表示文件内容的修改时间。")]),t._v(" "),a("p",[t._v("在首次请求服务端后，服务端可在 HTTP 响应头中加入"),a("code",[t._v("Last-Modified")]),t._v("这个标识。后续的重复请求，浏览器会在请求头部中加入 "),a("code",[t._v("If-Modified-Since")]),t._v("，值为服务器传来的"),a("code",[t._v("Last-Modified")]),t._v("对应的最后修改时间值。")]),t._v(" "),a("p",[t._v("服务端会将请求头中的"),a("code",[t._v("If-Modified-Since")]),t._v("属性值和服务器对应该资源的最后修改时间进行对比："),a("br"),t._v("\n（1）若"),a("code",[t._v("If-Modified-Since")]),t._v("时间值比资源的最后修改时间要小，则说明资源更新了，可以返回新资源，则走常规的 HTTP 响应流程。"),a("br"),t._v("\n（2）否则，说明资源还没更新了，返回"),a("code",[t._v("304")]),t._v("提示浏览器无需重修加载资源，可以直接使用缓存。")]),t._v(" "),a("p",[t._v("Last-Modified 存在一些弊端："),a("br"),t._v("\n（1）当仅编辑了文件（文件名），但文件内容并没作任何修改。此时服务端的最后修改时间被更新，浏览器端再次请求时，将会当作新请求进行重新响应。（不该重新请求时重新请求）"),a("br"),t._v("\n（2）If-Modified-Since 只能检查到以秒为最小计量单位的时间差，如果资源内容修改速度过快（100ms 完成了改动），此时将不能感知到变动，这样子会导致该重新请求时仍然使用了旧的缓存资源。（该重新请求时未能重新请求）")]),t._v(" "),a("h3",{attrs:{id:"_2-2-etag-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-etag-if-none-match"}},[t._v("#")]),t._v(" 2.2 ETag / If-None-Match")]),t._v(" "),a("p",[a("code",[t._v("ETag")]),t._v("是由服务器为每个资源生成的唯一的 Hash 标识字符串，当服务器的资源内容发生了变化，对应的 Hash 字符串也会发送变化。")]),t._v(" "),a("p",[t._v("和 Last-Modified 类似，在首次请求服务端后，浏览器在响应头部获取到资源的最初标识字符串"),a("code",[t._v("ETag")]),t._v("值后。后续的重复请求，浏览器在请求头部中加入"),a("code",[t._v("If-None-Match")]),t._v("，值为服务器传来的 "),a("code",[t._v("ETag")]),t._v(" 值。")]),t._v(" "),a("p",[t._v("服务端将请求头中的"),a("code",[t._v("If-None-Match")]),t._v("和该资源的标识字符串进行对比："),a("br"),t._v("\n（1）若值不一样，则说明资源内容更新了，可以返回新资源，则走常规的 HTTP 响应流程。"),a("br"),t._v("\n（2）否则，说明资源还没更新了，返回"),a("code",[t._v("304")]),t._v("提示浏览器无需重修加载资源，可以直接使用缓存。")]),t._v(" "),a("p",[t._v('这里的 ETag 又有强弱校验之分，如果 Hash 码是以 "W/" 开头的一串字符串，说明此时协商缓存的校验是弱校验的。'),a("br"),t._v("\n只有服务器上的文件差异（根据 ETag 计算方式来决定）达到能够触发 Hash 值后缀变化的时候，才会真正地请求资源，否则返回"),a("code",[t._v("304")]),t._v(" 并加载浏览器缓存。")]),t._v(" "),a("p",[t._v("ETag 也存在一些弊端："),a("br"),t._v("\nETag 的 Hash 标识字符值的生成过程，需要服务器额外付出开销，会对服务端性能有一定影响。")]),t._v(" "),a("p",[t._v("Etag 需要 hash 开销，适合重要量小的资源；Last-Modified 适合不重要的量大的资源，需要保证服务器时间准确。")]),t._v(" "),a("p",[a("strong",[t._v("ETag 在感知文件内容变化的准确度会比 Last-Modified 的高，因此优先级也更高。")])]),t._v(" "),a("h4",{attrs:{id:"etag-生成方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-生成方式"}},[t._v("#")]),t._v(" ETag 生成方式")]),t._v(" "),a("p",[t._v("ETag 有强弱校验之分，但 http 并没有特定字段去指定它的生成方式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ETag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<etag_value>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ETag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<etag_value>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("W/")]),t._v("(大小写敏感) 表示使用弱验证器，可选。弱验证器很容易生成，但不利于比较。")])]),t._v(" "),a("blockquote",[a("p",[t._v("强验证器是比较的理想选择，但很难有效地生成。相同资源的两个弱 Etag 值可能语义等同，但不是每个字节都相同。")])]),t._v(" "),a("p",[t._v("在 nginx 中， ETag 由响应头的 "),a("code",[t._v("Last-Modified")]),t._v(" 与 "),a("code",[t._v("Content-Length")]),t._v(" 表示为十六进制组合而成：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Tue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("612")]),t._v("\nLast"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Tue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alive\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ETag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5cbee66d-264"')]),t._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Ranges"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bytes\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对Etag解析")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5cbee66d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ("2019-04-23T10:18:21.000Z");，即对Last-Modified进行16进制换算')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"264"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 612，即对Content-Length进行16进制换算")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-3-缓存的存储位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-缓存的存储位置"}},[t._v("#")]),t._v(" 2.3 缓存的存储位置")]),t._v(" "),a("p",[t._v("浏返回 304 后的缓存资源去哪里获取，浏览览器中的缓存存储位置一共有四种，按优先级从高到低排列（由上到下寻找，找到即返回；找不到则继续）分别是：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Memory Cache")])]),t._v(" "),a("p",[t._v("Memory Cache，是指存储在内存中的缓存，它是响应速度最快的一种缓存，但缓存持续性很短。")]),t._v(" "),a("p",[t._v("几乎所有的网络请求资源都有可能被浏览器自动加入到 Memory Cache 中，但是也正因为缓存文件数量大和浏览器的占用内存限制,Memory Cache 只能进行 “短期存储”。")]),t._v(" "),a("p",[t._v("常规情况下，"),a("strong",[t._v("浏览器的 Tab 关闭后该次浏览的 Memory Cache 便告失效")]),t._v(" (为了给其他 Tab 腾出位置)。如果极端情况下 (例如一个页面的缓存就占用了超级多的内存)，那可能在 Tab 没关闭之前，排在前面的缓存就已经失效了。")]),t._v(" "),a("p",[t._v("资源存不存内存，浏览器主要秉承“节约原则”。一般以下类型会被丢进内存缓存："),a("br"),t._v("\n（1）Base64 格式的图片，几乎都会可以被塞进 Memory Cache，这可以视作浏览器为节省渲染开销的“自保行为”；"),a("br"),t._v("\n（2）体积不大的 JS、CSS 文件，也有较大地被写入内存的几率，而较大的 JS、CSS 文件因内存资源是有限的，它们一般会被直接甩进磁盘缓存；"),a("br"),t._v("\n（3）针对预加载"),a("code",[t._v("preload")]),t._v("和预读取"),a("code",[t._v("prefetch")]),t._v("的资源，也会进入到 Memery Cache。")]),t._v(" "),a("p",[t._v("很多时候需要先考虑即时呈现的内存余量，再根据具体的情况决定分配给内存和磁盘的资源量的比重，因此资源存放的位置具有一定的随机性。")]),t._v(" "),a("p",[t._v("值得注意的是，Memory Cache 会忽视资源的 HTTP 缓存头 Cache-Control 是什么值（除了"),a("code",[t._v("no-store")]),t._v("，"),a("code",[t._v("max-age=0")]),t._v("，"),a("code",[t._v("no-cache")]),t._v("也会照常读取），同时资源的匹配也并非仅仅是对 URL 做匹配，还可能会对"),a("code",[t._v("Content-Type")]),t._v("，CORS 等其他特征做校验。")]),t._v(" "),a("p",[t._v("memory cache 机制保证了一个页面中如果有两个相同的请求 (例如两个 src 相同的 "),a("img"),t._v("，两个 href 相同的 "),a("link"),t._v(")都实际只会被请求最多一次，避免浪费。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Disk Cache")])]),t._v(" "),a("p",[t._v("Disk Cache 也叫 HTTP Cache，是指存储在硬盘上的缓存，因此它是持久存储的。它从存取效率上比内存缓存要慢一点，优势在于存储容量和存储时长。它允许相同的资源在跨会话，甚至跨站点的情况下使用，例如两个站点都使用了同一张图片。")]),t._v(" "),a("p",[t._v("Disk Cache 会严格根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。")]),t._v(" "),a("p",[t._v("一般比较大的 JS、CSS 文件会直接被丢进磁盘，以及内存使用率比较高的时候，文件也会优先进入磁盘。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Service Worker Cache")])]),t._v(" "),a("p",[t._v("Service Worker 是一种独立于主线程之外的 Javascript 线程。它脱离于浏览器窗体，因此无法直接访问 DOM。又正因为它的“个人行为”不会干扰主线程的特点，使它能帮助我们完成很多有用的功能，比如离线缓存、消息推送和网络代理等功能。其中的离线缓存就是 Service Worker Cache。")]),t._v(" "),a("p",[t._v("Service Worker 的缓存机制和浏览内置缓存机制不同，我们可以自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),t._v(" "),a("p",[t._v("Service Worker 实现 Service Worker Cache 的步骤在这里不进行详细展开，主要的步骤大概包括：首先需要先注册 Service Worker（"),a("code",[t._v("navigator.serviceWorker.register")]),t._v("），然后通过监听 "),a("code",[t._v("install")]),t._v(" 事件缓存需要的资源，使得用户再次访问的时候就可以通过拦截请求的方式查询是否存在缓存，通过匹配缓存决定是直接读取缓存文件还是去重新请求数据。")]),t._v(" "),a("p",[t._v("这个缓存是永久性的，除了以后两种情况会被清空：手动调用 API cache.delete(resource) 或者容量超过限制，被浏览器全部清空。")]),t._v(" "),a("p",[t._v("⚠️Server Worker 对协议是有要求的，必须以 HTTPS 协议为前提。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Push Cache")])]),t._v(" "),a("p",[t._v("Push Cache 是指 HTTP2 在 server push 阶段存在的推送缓存。但目前应用没有很广泛，以下是关于它的简单介绍：")]),t._v(" "),a("p",[t._v("（1）Push Cache 是缓存的最后一道防线。浏览器只有在 Memory Cache、Disk Cache 和 Service Worker Cache 均未命中的情况下才会去询问 Push Cache。"),a("br"),t._v("\n（2）多个页面只要共享了同一个 HTTP2 连接，那么它们就可以共享同一个 Push Cache。"),a("br"),t._v("\n（3）所有的资源都能被推送（包括 no-cache 和 no-store 的资源），并且能够被缓存。"),a("br"),t._v("\n（4）Push Cache 是一种存在于会话阶段的缓存，当 session 终止时，缓存也随之释放。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("以上结合来说："),a("br"),t._v("\n根据 Service Worker 中的 handler 决定是否存入 Cache Storage (额外的缓存位置)。"),a("br"),t._v("\n根据 HTTP 头部的相关字段(Cache-control, Pragma 等)决定是否存入 disk cache"),a("br"),t._v("\nmemory cache 保存一份资源 的引用，以备下次使用。")])]),t._v(" "),a("p",[t._v("涉及问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("preload 和 prefetch 的区别和优先级（览器的加载优先级）？")]),t._v(" "),a("p",[t._v("preload 加载资源一般是当前页面需要的，告诉浏览器预先请求当前页面需要的资源（关键的脚本，字体，主要图片等）。")]),t._v(" "),a("p",[t._v("prefetch 一般是其它页面有可能用到的资源。")]),t._v(" "),a("p",[t._v("https://www.jianshu.com/p/fa85d25b1c4e")])])]),t._v(" "),a("h2",{attrs:{id:"_3-http-缓存决策过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-缓存决策过程"}},[t._v("#")]),t._v(" 3. HTTP 缓存决策过程")]),t._v(" "),a("p",[t._v("来自 Chrome 官方的流程图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/whenUrl/url-cache-progress.png",alt:"cache-progess",title:"cache-progess"}})]),t._v(" "),a("p",[t._v("解析（从后端进行决策的角度理解）："),a("br"),t._v("\n（1）首先判断是否需要每次都重新向服务器重新资源；是则将 Cache-Control 设置为 "),a("code",[t._v("no-store")]),t._v("，表明拒绝一切形式的缓存；否则将考虑是否需要向服务器进行缓存有效确认（协商缓存）；"),a("br"),t._v("\n（2）如果需要每次都进行协商缓存，则需要把 Cache-Control 设置为 "),a("code",[t._v("no-cache")]),t._v("；否则考虑该资源是否可以被代理服务器缓存，将决定的结果设置为 private 还是 public；"),a("br"),t._v("\n（3）然后考虑该资源的过期时间，设置对应的 max-age 和 s-maxage 值；"),a("br"),t._v("\n（4）最后，配置协商缓存需要用到的 Etag、Last-Modified 等参数。")]),t._v(" "),a("h2",{attrs:{id:"_4-http-缓存获取过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-缓存获取过程"}},[t._v("#")]),t._v(" 4. HTTP 缓存获取过程")]),t._v(" "),a("p",[t._v("解析（从前端获取缓存的角度理解）：")]),t._v(" "),a("h4",{attrs:{id:"_4-1-源服务器的缓存控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-源服务器的缓存控制"}},[t._v("#")]),t._v(" 4.1 源服务器的缓存控制")]),t._v(" "),a("h5",{attrs:{id:"public、private"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public、private"}},[t._v("#")]),t._v(" public、private")]),t._v(" "),a("h5",{attrs:{id:"proxy-rerevalidate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-rerevalidate"}},[t._v("#")]),t._v(" proxy-rerevalidate")]),t._v(" "),a("h5",{attrs:{id:"s-maxage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-maxage"}},[t._v("#")]),t._v(" s-maxage")]),t._v(" "),a("h4",{attrs:{id:"_4-2-代理服务器的缓存控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-代理服务器的缓存控制"}},[t._v("#")]),t._v(" 4.2 代理服务器的缓存控制")]),t._v(" "),a("h5",{attrs:{id:"max-stale-和-min-fresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-stale-和-min-fresh"}},[t._v("#")]),t._v(" max-stale 和 min-fresh")]),t._v(" "),a("h5",{attrs:{id:"only-if-cached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#only-if-cached"}},[t._v("#")]),t._v(" only-if-cached")]),t._v(" "),a("h2",{attrs:{id:"_5-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-最佳实践"}},[t._v("#")]),t._v(" 5. 最佳实践")]),t._v(" "),a("p",[t._v("缓存的意义在于能够尽可能减少请求资源的次数，更多地使用本地缓存资源，减轻请求开销和服务器压力，给用户带来好的使用体验。所以最佳的实践应该是，能够尽可能的命中强缓存，同时，也能够在资源文件版本更新以后，让浏览器的缓存失效，重新获取到新的资源。")]),t._v(" "),a("p",[t._v("那应如何能在资源文件版本更新以后，马上就让浏览器知道需要重新请求新版本文件呢？")]),t._v(" "),a("p",[t._v("机智的开发者们，于是就想出了对策："),a("br"),t._v("\n在更新版本的时候，将静态资源的路径改了（加上版本号/哈希值），这样就相当于第一次访问这些资源，就不会存在缓存的问题了。")]),t._v(" "),a("p",[t._v("伟大的 Webpack 配置工具可以让我们在打包的时候，在文件命名上带上 hash 值。Webpack 提供了三种哈希值计算方式：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("hash")]),a("br"),t._v("\n跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的 hash 值都会更改，并且全部文件都共用相同的 hash 值。")]),t._v(" "),a("p",[t._v("采用 hash 计算的话，每一次构建后生成哈希值都不一样，即使文件内容压根没有改变，因此不推荐使用这种计算方式。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("chunkhash")]),a("br"),t._v("\n根据不同的入口文件（Entry）进行依赖文件（vendor）解析、构建对应的 chunk 以及生成对应的哈希值。")]),t._v(" "),a("p",[t._v("这个的应用场景可以用在：在代码分包的时候，应该将一些不常变的公共库独立打包，使其能够更持久的缓存。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("contenthash")]),a("br"),t._v("\n由文件内容产生的 hash 值，内容不同时才会产生不一样的 contenthash 值。")]),t._v(" "),a("p",[t._v("这个的应用场景可以用在：当需要把项目的 css 抽离出对应的 css 文件时，可以使用 contenthash。在页面文件中只修改了 dom 结构内容而无修改 css 时，对应的 css 文件 hash 值将不会变；需要修改了 css 内容更新了，抽离的 css 文件 hash 值才会发生变化。")])])]),t._v(" "),a("h2",{attrs:{id:"_6-浏览器的行为影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-浏览器的行为影响"}},[t._v("#")]),t._v(" 6. 浏览器的行为影响")]),t._v(" "),a("p",[t._v("用户自发引起不同的浏览器行为会触发不一样的缓存策略：")]),t._v(" "),a("h4",{attrs:{id:"在-uri-输入栏中输入然后回车-通过书签访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-uri-输入栏中输入然后回车-通过书签访问"}},[t._v("#")]),t._v(" 在 URI 输入栏中输入然后回车/通过书签访问")]),t._v(" "),a("p",[t._v("返回响应码是 200 OK (from cache)，浏览器发现该资源已经缓存了而且没有过期（通过 Expires 头部或者 Cache-Control 头部），没有跟服务器确认，而是直接使用了浏览器缓存的内容。其中响应内容和之前的响应内容一模一样，例如其中的 Date 时间是上一次响应的时间。")]),t._v(" "),a("h4",{attrs:{id:"普通刷新-f5-点击工具栏中的刷新按钮-右键菜单重新加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通刷新-f5-点击工具栏中的刷新按钮-右键菜单重新加载"}},[t._v("#")]),t._v(" 普通刷新 - F5/点击工具栏中的刷新按钮/右键菜单重新加载")]),t._v(" "),a("p",[t._v("如果缓存没有失效，浏览器会直接使用缓存，又因为 TAB 没有关闭，因此如果 Memory Cache 匹配上的话会被优先使用，其次才是 Disk Cache；反之，则向服务器请求数据。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Cache-Control: max-age=0\nIf-Modified-Since: Fri, 15 Jul 2016 04:11:51 GMT\n")])])]),a("h4",{attrs:{id:"强制刷新-ctrl-f5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制刷新-ctrl-f5"}},[t._v("#")]),t._v(" 强制刷新 - Ctrl + F5")]),t._v(" "),a("p",[t._v("强制刷新使得浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache(为了兼容，部门浏览器会带了 Pragma: no-cache)。服务器直接返回 200 和最新内容。浏览器会直接忽略缓存，在请求服务器时加上 Cache-Control: no-cache 字段，然后重新向服务器拉取文件。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Cache-Control: no-cache\nPragma: no-cache\n")])])]),a("h2",{attrs:{id:"_7-启发式缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-启发式缓存"}},[t._v("#")]),t._v(" 7.启发式缓存")]),t._v(" "),a("p",[t._v("另外值得注意的是，当如果强缓存策略都没设置，即响应中未显示 "),a("code",[t._v("Expires")]),t._v("，缓存存储的最大周期时间 "),a("code",[t._v("Cache-Control：max-age")]),t._v(" 或 代理服务器缓存周期时间 "),a("code",[t._v("Cache-Control：s-maxage")]),t._v("，并且响应中不包含其他有关缓存的限制。")]),t._v(" "),a("p",[t._v("浏览器会采用一个"),a("strong",[t._v("启发式算法")]),t._v("来计算新鲜度寿命，通常会取响应头中的 Date 减去 Last-Modified 值的 10% ，设置强制缓存时间，而非直接进行协商缓存。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Date：创建报文的日期时间, Last-Modified 服务器声明文档最后被修改时间")]),t._v("\nresponse_is_fresh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("（Date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("  Last"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//等同于 cache-control=max-age=（date - Last-Modified）/ 10")]),t._v("\n")])])]),a("h2",{attrs:{id:"_8-三级缓存原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-三级缓存原理"}},[t._v("#")]),t._v(" 8. 三级缓存原理")]),t._v(" "),a("p",[t._v("缓存资源不过期的时候，如果资源在内存那么就 from memory，如果只有在磁盘上就 from disk。")]),t._v(" "),a("p",[t._v("1）先去内存看，如果有，直接加载；")]),t._v(" "),a("p",[t._v("2）如果内存没有，择取硬盘获取，如果有直接加载；")]),t._v(" "),a("p",[t._v("3）如果硬盘也没有，那么就进行网络请求；")]),t._v(" "),a("p",[t._v("4）加载到的资源缓存到硬盘和内存。")]),t._v(" "),a("p",[t._v("所以常见例子：访问-> 200 -> 退出浏览器再进来-> 200(from disk cache) -> 刷新 -> 200(from memory cache)")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/shfshanyue/blog/blob/master/frontend-engineering/http-cache.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站的缓存控制策略最佳实践及注意事项 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903747357769742",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂前端缓存"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);