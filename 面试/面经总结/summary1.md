#### 1、aixos拦截器的原理

参考文章：

[axios源码解读之请求与拦截器](https://segmentfault.com/a/1190000014551905)

[Axios的拦截器原理以及请求等待重发的实现](https://www.jianshu.com/p/115b4c79a75d)

```js
// 请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // 比如在请求头中添加token字段
    return config
}, err => {
    // 对请求错误做些什么
    return Promise.reject(err)
})
```

```js
// 响应拦截器
axios.interceptors.response.use(res => {
    // 对响应数据做点什么
    return res
}, err => {
    // 对响应错误做点什么
    return Promise.reject(err)
})
```

`InterceptorManager`：拦截器管理器

`requestInterceptorChain`：请求拦截器链

`responseInterceptorChain`：响应拦截器链

`chain`：最终拼接而成的拦截器链

```js
var chain = [dispatchRequest, undefined] // 初始化拦截器链
Array.protorype.unshift.apply(chain, requestIntercepotChain) // 请求拦截器插入拦截器链的头部
chain.concat(responseInterceptorChain) // 响应拦截器插入拦截器链尾部
```



原理图：

![preview](https://segmentfault.com/img/bV9dFQ?w=1085&h=514/view)

#### 2、axios怎么区分客户端和服务器端的请求

未解决

#### 3、{}、new Object()、Object.create({})的区别

未解决

#### 4、new做了什么

new关键字会进行如下操作：

1. 创建一个空的简单JavaScript对象（即{}）
2. 连接该对象（设置该对象的constructor）到另一个对象
3. 将步骤1新创建的对象作为this的上下文
4. 如果该函数没有返回对象，则返回this

#### 5、CSS渲染的详细过程

参考文章：

[[深入浅出浏览器渲染原理](https://blog.fundebug.com/2019/01/03/understand-browser-rendering/)]

![img](https://image.fundebug.com/2019-01-03-1.png)

浏览器工作流程大体分为三部分：

1. 浏览器会解析三个东西：
   - 一个是HTML/SVG/XHTML，事实上，Webkit有三个C++的类对应这三类文档。解析这三种文件会产生一个DOM Tree。
   - CSS，解析CSS会产生CSS规则树。
   - JavaScript，脚本，主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree。
2. 解析完成后，浏览器引擎会通过DOM Tree和CSS Rule Tree来构造Rendering Tree。
   - Rendering Tree渲染树并不等同于DOM树，因为一些像Header或`display:none`的东西就没必要放在渲染树中了。
   - CSS的Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element。也就是DOM节点。也就是所谓的Frame。
   - 然后，计算每个Frame（也就是每个Element）的位置，这又叫layout和reflow过程
3. 最后通过调用操作系统Native GUI的API绘制

#### 6、哪些CSS属性会导致重排（回流）

参考文章：

[重排(reflow)和重绘(repaint)](https://juejin.cn/post/6844904083212468238)

[掌握浏览器重绘(repaint)重排(reflow))-前端进阶](https://segmentfault.com/a/1190000017491520)

![image](https://user-gold-cdn.xitu.io/2020/3/6/170af501e710ce67?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

###### 重排为什么比重绘影响大？

重绘：某些元素的外观被改变，例如：元素的填充颜色

重拍：重新生成布局，重新排列元素

tips：**重绘不一定导致重排，但重排一定会导致重绘**

##### 下面情况会发生重排：

- 页面初始渲染，这是开销最大的一次重拍
- 添加/删除可见的DOM元素
- 改变元素位置
- 改变元素尺寸，比如边距、填充、边框、宽度和高度等
- 改变元素内容，比如文字数量、图片大小等
- 改变元素字体大小
- 改变浏览器窗口尺寸，比如resize事件发生时
- 激活CSS伪类（:hover）
- 设置style属性的值，因为通过设置style属性改变节点样式的话，每一次设置都会触发一次reflow
- 查询某些属性或调用某些计算方法：offsetWidth、OffsetHeight等，除此之外，当我们调用getComputedStyle方法，或者IE里的currentStyle时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。

| **常见引起重排属性和方法** |                        |                    |            |
| -------------------------- | ---------------------- | ------------------ | ---------- |
| width                      | height                 | margin             | padding    |
| display                    | border-width           | border             | position   |
| overflow                   | font-size              | vertical-align     | min-height |
| clientWidth                | clientHeight           | clientTop          | clientLeft |
| offsetWidth                | offsetHeight           | offsetTop          | offsetLeft |
| scrollWidth                | scrollHeight           | scrollTop          | scrollLeft |
| scrollIntoView()           | scrollTo()             | getComputedStyle() |            |
| getBoundingClientRect()    | scrolltoViewlfNeeded() |                    |            |

#### 7、translate 3d和flex在渲染上有什么不同的地方

未解决

#### 8、flex:1是什么意思

`flex`属性是`flex-grow`、`flex-shrink`、`flex-basis`的缩写。

`flex-grow`设置了一个flex项主尺寸的flex增长系数。它指定了flex容器中剩余空间的多少应该分配给项目。

`flex:1`等价于`flex-grow:1`

#### 9、304是什么意思？也就是要讲讲HTTP缓存机制

304-Not Modified，未改变

说明无需再次传输请求的内容，也就是说可以使用缓存的内容。这通常是在一些安全的方法，例如GET或HEAD或在请求中附带了头部信息：`If-None-Match`或`If-Modified-Since`。

该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但未满足条件的情况。（from图解HTTP）附带条件的请求是指采用GET方法的请求报文中包含`If-Match`、`If-Modified-Since`、`If-None-Match`、`If-Range`、`If-Unmodified-Since`中任一首部。

##### 304缓存的原理

服务器首先为请求生成ETag，服务器可在稍后的请求中，使用它来判断页面是否已经修改。本质上，客户端通过将该记号传回服务器要求服务器验证其（客户端）是否缓存。

304是个HTTP状态码，服务器用它来标识这个文件没有修改，不返回内容，浏览器在接收到这个状态码后，会使用浏览器已缓存的文件。

客户端请求页面A。服务器返回页面A，并给A加上一个ETag。客户端展现该页面，并将页面连同ETag一起缓存。客户端再次请求页面A，并将上次请求时服务器返回的ETag一起传递给服务器。服务器检查该ETag，并判断出该页面自上次客户端请求之后还未被修改，直接返回响应304和一个空的响应体。

###### ETag是什么意思？

HTTP协议规格说明定义ETag为“被请求变量的实体值”。另一种说法时，ETag是一个可以与Web资源关联的记号。典型的Web资源可以是一个Web页，但也可能是JSON或XML文档。服务器单独负责判断记号是什么及其含义，并在HTTP响应头中将其传送到客户端。

###### 为什么要使用条件请求？

当用户访问一个网页时，条件请求可以加速网页的打开时间（因为可以省去传输整个响应体的时间），但仍然会有网络延迟，因为浏览器还是得为每个资源生成一条条件请求，并且等到服务器返回HTTP/304响应，才能读取缓存来显示网页。更理想的情况是，服务器在响应上指定Cache-Control或Expires指令，这样客户端就能知道该资源的可用时间为多长，也就能跳过条件请求的步骤，直接使用缓存中的资源。