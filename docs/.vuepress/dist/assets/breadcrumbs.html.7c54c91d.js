import{r as a,a as e,b as c,e as n,d as s,F as l,j as t}from"./app.68324ee7.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const k={},i=t(`<h1 id="\u9762\u5305\u5C51" tabindex="-1"><a class="header-anchor" href="#\u9762\u5305\u5C51" aria-hidden="true">#</a> \u9762\u5305\u5C51</h1><br><br><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><h3 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h3><p>\u8BBE\u7F6E <code>color</code> \u5373\u53EF\u3002<code>list</code> \u6765\u663E\u793A\u8DEF\u5F84\uFF0C<code>list</code> \u5185\u9879\u76EE\u90FD\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E3B\u8981<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B21\u8981<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5F3A\u8C03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>neutral<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E2D\u548C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u57FA\u7840<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4FE1\u606F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6210\u529F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8B66\u544A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9519\u8BEF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u533A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5BB6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u623F\u95F4&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8" aria-hidden="true">#</a> \u5C3A\u5BF8</h3><p>\u8BBE\u7F6E <code>size</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5927<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5C0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8D85\u5C0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-breadcrumbs</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u533A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5BB6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u623F\u95F4&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h3><p><code>leftIcon</code> \u8BBE\u7F6E\u5DE6\u4FA7\u56FE\u6807\uFF0C<code>rightIcon</code> \u8BBE\u7F6E\u53F3\u4FA7\u56FE\u6807</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rightIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shopping<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shoppings<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">leftIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>folder<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>floders<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
               floders<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Work&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			   shoppings<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u751F\u9C9C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6C34\u679C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u674F\u5B50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C" aria-hidden="true">#</a> \u8DF3\u8F6C</h3><p><code>click</code> \u4E8B\u4EF6\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u70B9\u51FB\u7684 <code>list</code> \u9879\u76EE\uFF0C\u53EF\u7528\u6765\u505A\u5224\u65AD\u5E76\u8DF3\u8F6C\u5230\u5177\u4F53\u9875\u9762</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-breadcrumbs</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>go<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Btn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Img&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cell&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">go</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span>
                    Img<span class="token operator">:</span> <span class="token string">&#39;/pages/base/img/img&#39;</span><span class="token punctuation">,</span>
                    Cell<span class="token operator">:</span> <span class="token string">&#39;/pages/base/cell/cell&#39;</span><span class="token punctuation">,</span>
                    Btn<span class="token operator">:</span> <span class="token string">&#39;/pages/base/button/button&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                
                uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    url<span class="token operator">:</span> routes<span class="token punctuation">[</span>v<span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><br><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027 \u{1F9D0}</h2>`,27),r=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),g=n("td",{style:{"text-align":"center"}},"color",-1),d=n("td",{style:{"text-align":"center"}},"\u989C\u8272",-1),q=n("td",{style:{"text-align":"center"}},"string",-1),b=n("td",{style:{"text-align":"center"}},"base",-1),h={style:{"text-align":"center"}},m=n("td",{style:{"text-align":"center"}},"size",-1),v=n("td",{style:{"text-align":"center"}},"\u5C3A\u5BF8",-1),x=n("td",{style:{"text-align":"center"}},"string",-1),y=n("td",{style:{"text-align":"center"}},"md",-1),_={style:{"text-align":"center"}},f=n("tr",null,[n("td",{style:{"text-align":"center"}},"list"),n("td",{style:{"text-align":"center"}},"\u8DEF\u5F84\u5217\u8868"),n("td",{style:{"text-align":"center"}},"Array<string>"),n("td",{style:{"text-align":"center"}},"[]"),n("td",{style:{"text-align":"center"}})],-1),w=t('<br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">v, i, list</td></tr></tbody></table><br><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><h4 id="click" tabindex="-1"><a class="header-anchor" href="#click" aria-hidden="true">#</a> click</h4><p><code>v</code> \u{1F449} \u70B9\u51FB\u7684\u90A3\u4E2A\u9879\u76EE</p><p><code>i</code> \u{1F449} \u70B9\u51FB\u7684\u90A3\u4E2A\u9879\u76EE <code>index</code></p><p><code>list</code> \u{1F449} \u5F53\u524D <code>list</code> \u672C\u8EAB</p><br><br><br>',14);function z(j,I){const p=a("t-doc-color"),o=a("t-doc-size");return e(),c(l,null,[i,n("table",null,[r,n("tbody",null,[n("tr",null,[g,d,q,b,n("td",h,[s(p)])]),n("tr",null,[m,v,x,y,n("td",_,[s(o)])]),f])]),w],64)}var N=u(k,[["render",z]]);export{N as default};
