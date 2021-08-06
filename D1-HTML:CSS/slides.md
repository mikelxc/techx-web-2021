---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Full Stack (Modern) Web Development
  Made by Mike Liu in 2021 for TechX Web
  Introduction to Web Development.
---

# 现代 web 开发


刘欣辰，2021
<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
  何谓 web？
   <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: center
class: text-center
---

# What is Web?

在 21 世纪，互联网已经进入了人们生活中的每一个角落。而 Web 技术，正是当下各类互联网应用的基石。从地铁口扫二维码的机器，眼花缭乱的门户网站，到手机上面色彩缤纷的 Apps，无不例外通过 Web 技术来构建。当下，各类新技术以及框架的完善，使得 Web 开发变得触手可及，让制作网站、App、甚至物联网服务不再高难度。然而，随着 Web 技术的更新，前端 (Front-end) 和后端 (Back-end) 技术的间隙也变得越来越细化。全栈 (Full-stack) 的概念的出现，意味着一个开发者可以独立完成整个网站开发的可能性，这让开发产品原型、个人网站等小型站点变的更加便捷。

<br>
<br>

<!--

-->

---

# 何谓现代？

## 这个网页其实也就是web的一部分

### 跑在浏览器里的幻灯片

Slidev is powered by Vite, Vue 3 and Windi CSS, which give you the most wonderful authoring experience. Every change you made will reflect to your slides instantly.

---

# Code

Use code snippets and get the highlighting directly![^1]

```ts {all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = {...user, ...update}  
  saveUser(id, newUser)
}
```


[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly. And adding your custom components is also super easy.

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/builtin/components.html) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>



---
layout: quote
---

# "Any application that can be written in JavaScript, will eventually be written in JavaScript."

Jeff Atwood, founder of StackOverflow
<br>
<br>

---
layout: quote
---

# "NO API for iOS, Safari included, WEB APP IS THE FUTURE"

Steve Jobs

---

# 现代 web 开发
## 从历史开始讲起

<video controls>
    <source src="/video/1.mp4" type="video/mp4">
</video>

---
layout: center
class: text-center
---
# 为什么我们需要WEB

---

# LaTeX

<br>

Inline $\sqrt{3x-1}+(1+x)^2$

Block
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

<br>

[Learn more](https://sli.dev/guide/syntax#latex)


---

# 来自国防部和大学的教育系统的链接与分享

### 论文的分享与编辑
## LaTeX
```latex
\sqrt{3x-1}+(1+x)^2
```
```latex
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
```

---
layout: image-left
image: https://i2-prod.mirror.co.uk/news/technology-science/technology/article7050035.ece/ALTERNATES/s615b/Screen-Shot-2015-12-21-at-100609.jpg
---


### 『后端』的来历:
#### 早期 web 开发 = 内容开发
>内容的⼿手⼯工编写 => 内容的动态⽣生成 => 只有『后端』

![](/img/1.png)

---
layout: image-right
image: http://worldmost.org/wp-content/uploads/2011/11/DEC.jpg
---

### 『前端』的来历:
#### 早期 web 应⽤ = 内容 + ⻚面级交互
>『前端』= 服务器器端 web 框架中的视图层
![](/img/2.png)
![](/img/3.png)

---
layout: image-left
image: https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/057b4d38305709.575cdd7843663.png
---
### 『全栈』的来历:
L(inux)A(pache)M(ysql)P(hp)  &  Ruby on Rails
早期node.js MVC
『全栈』=『薄』前端 + 『薄』后端 + 『⾮分布式』基础设施和运维
![](/img/4.png)
![](/img/5.png)


---
layout: image-right
image: https://frontendmasters.com/books/front-end-handbook/2019/assets/images/things.jpg
---
# 『现代』的冲击:
## 多设备:⽹站不再是唯⼀客户端
## 多平台(超级 app 平台化):单⼀网站的解体
![](/img/6.png)

---

# 新分工和『现代 web 开发』

## 以客户端为主体

### 服务器端部分很薄，⼤量成熟业务逻辑、数据能力、 运维能力和基础设施被 API 化、云服务化(由第三⽅服务商和团队内的专业开发者提供)

## 不只有客户端

### 服务器端渲染 + API Gateway + 部分面向应用的微服务

## 不只有浏览器

### 超级 app 平台、各种基于 Web Runtime / JS Runtime

## JS everywhere

---

# 趋势

- 飞速发展，仍未定型
- 程序平台化
- 变化快，更新更快
- 现成产品/包数量众多，质量良莠不齐
- 最受到误解，被广泛需求同时处于鄙视链较低位置
- JavaScript Fatigue


---
layout:quote
---

# "Learning JS can be overwhelming. I know it can feel like there is an ocean of stuff you don’t know. Trying to soak it all up is like trying to soak up the real ocean with a beach towel. We’re all on the same bullet train here, and no matter what seat you’re sitting in, the world outside the windows is all a blur"
Eric Elliot

---
layout:quote
---

# "I say “painstakingly” because every project required decisions to be made around tooling depending on the scope & needs."
Eric Clemmons

---

# 教学理念

- 虚拟世界的探索者到建造者的转变
- 不只是熟练工，而是了解运行逻辑
- 依赖搜索快速迭代，充分利用现有的工具
- 变化快到无法通用，抄代码无法确保使用

---
layout:quote
---
# "If you don't know why a piece of code works, you have no hope understanding why it broke. Learn the actual underlying technologies, before learning abstractions"
Kyle Simpson

---

# 考查方式

1. 概念的理解，Quiz
2. 小组的探索，Project
3. 个人代码作业，分层作业

---

# Guiding Philosophy
- 能跑就行的“最优解”
- 分解问题及时学习
- 拼装能跑的车，而不是重新发明轮子

## 虚拟世界里的房、车、货

---

# Links

- https://mikelxc.notion.site/How-the-browser-renders-a-web-page-f9f4671aecb849eb8b0064dd31886f32
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
- https://www.freecodecamp.org/learn/responsive-web-design/


---

# Old Websites that still exist
- http://info.cern.ch/hypertext/DataSources/bySubject/Overview.html
- https://www.fogcam.org
- http://home.mcom.com/home/welcome.html
### Use way-back machine
- http://web.archive.org


---
layout:center
---

# Programming Language and JavaScript

---

# What can you do in 6 months?
## May to December 199