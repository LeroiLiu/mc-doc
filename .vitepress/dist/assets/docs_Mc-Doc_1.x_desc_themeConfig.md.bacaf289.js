import{_ as s,c as e,o as a,b as n}from"./app.90c8f902.js";const l=JSON.parse('{"title":"主题配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"原始配置","slug":"原始配置","link":"#原始配置","children":[]},{"level":2,"title":"拆分配置","slug":"拆分配置","link":"#拆分配置","children":[]},{"level":2,"title":"nav.ts","slug":"nav-ts","link":"#nav-ts","children":[]},{"level":2,"title":"sidebar.ts","slug":"sidebar-ts","link":"#sidebar-ts","children":[]},{"level":2,"title":"copyright.ts","slug":"copyright-ts","link":"#copyright-ts","children":[]},{"level":2,"title":"editLink.ts","slug":"editlink-ts","link":"#editlink-ts","children":[]},{"level":2,"title":"license.ts","slug":"license-ts","link":"#license-ts","children":[]},{"level":2,"title":"socialLinks.ts","slug":"sociallinks-ts","link":"#sociallinks-ts","children":[]}],"relativePath":"docs/Mc-Doc/1.x/desc/themeConfig.md"}'),c={name:"docs/Mc-Doc/1.x/desc/themeConfig.md"},t=[n('<h1 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-hidden="true">#</a></h1><blockquote><p>站点配置继承vitepress优良特性，在此基础上，做了项目拆分</p></blockquote><h2 id="原始配置" tabindex="-1">原始配置 <a class="header-anchor" href="#原始配置" aria-hidden="true">#</a></h2><p>在 <code>docs/.vitepress/config.ts</code>中进行<code>vitepress</code>的配置方式</p><h2 id="拆分配置" tabindex="-1">拆分配置 <a class="header-anchor" href="#拆分配置" aria-hidden="true">#</a></h2><p>您也可以在<code>docs/.vitepress/configDir/themeConfig</code>下新增配置，目前默认的为<code>copyright.ts</code>、<code>editLink.ts</code>、<code>license.ts</code>、<code>nav.ts</code>、<code>sidebar.ts</code>、<code>socialLinks.ts</code>。您也可以新增，然后在<code>docs/.vitepress/config.ts</code>中进行引入。</p><h2 id="nav-ts" tabindex="-1">nav.ts <a class="header-anchor" href="#nav-ts" aria-hidden="true">#</a></h2><p>该配置将会在右上角进行展示项目的信息，此信息需要依赖<code>docs/src/docs</code>目录下的配置，目前的版本不支持在开发端做到热更新。若新增项目，需要按照<code>项目名/版本号</code>创建目录。</p><p>例如Mc-Doc项目，则会在<code>docs/src/docs</code>下创建目录<code>Mc-Doc/1.x</code>。这样左上角的<code>nav</code>栏将会展示该项目。</p><h2 id="sidebar-ts" tabindex="-1">sidebar.ts <a class="header-anchor" href="#sidebar-ts" aria-hidden="true">#</a></h2><p>该配置将会在左侧进行展示项目的侧边栏分类，此信息需要依赖<code>docs/src/docs/项目名/版本号/sidebar.js</code>文件。</p><p>例如Mc-Doc项目，则会有<code>docs/src/docs/Mc-Doc/1.x/sidebar.js</code>文件。配置信息将会在每个项目左侧进行展示。<code>sidebar.js</code>也依然按照<code>vitepress</code>的配置进行。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">  {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    text: &#39;开始使用&#39;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    items: [</span></span>\n<span class="line"><span style="color:#A6ACCD;">      { text: &#39;关于1.x&#39;, link: &#39;/docs/Mc-Doc/1.x/introduction&#39; },</span></span>\n<span class="line"><span style="color:#A6ACCD;">      { text: &#39;立即开始&#39;, link: &#39;/docs/Mc-Doc/1.x/&#39; },</span></span>\n<span class="line"><span style="color:#A6ACCD;">      { text: &#39;常见问题汇总&#39;, link: &#39;/docs/Mc-Doc/1.x/troubleshooting&#39; },</span></span>\n<span class="line"><span style="color:#A6ACCD;">      { text: &#39;参与贡献&#39;, link: &#39;/docs/Mc-Doc/1.x/contributing&#39; },</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ]</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="copyright-ts" tabindex="-1">copyright.ts <a class="header-anchor" href="#copyright-ts" aria-hidden="true">#</a></h2><p>您可以在这里配置copyright基本信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  export default `Copyright © 2013-${new Date().getFullYear()}`</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="editlink-ts" tabindex="-1">editLink.ts <a class="header-anchor" href="#editlink-ts" aria-hidden="true">#</a></h2><p>您可以在这里配置仓库修改地址，以便让更多的人参与到项目中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  export default {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      pattern: &#39;https://github.com/LeroiLiu/mc-doc/edit/master/src/:path&#39;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      text: &#39;帮助我们改善此页面！&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="license-ts" tabindex="-1">license.ts <a class="header-anchor" href="#license-ts" aria-hidden="true">#</a></h2><p>您可以在这里配置license基本信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  export default {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    text: &#39;MIT License&#39;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    link: &#39;https://opensource.org/licenses/MIT&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sociallinks-ts" tabindex="-1">socialLinks.ts <a class="header-anchor" href="#sociallinks-ts" aria-hidden="true">#</a></h2><p>您可以在这里配置社交信息，将会在右上角进行展示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  export default [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    { icon: &#39;github&#39;, link: &#39;https://github.com/LeroiLiu/mc-doc&#39; }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ]</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>',25)];const o=s(c,[["render",function(s,n,l,c,o,i){return a(),e("div",null,t)}]]);export{l as __pageData,o as default};