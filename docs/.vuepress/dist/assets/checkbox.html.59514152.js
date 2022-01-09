import{r as n,a as l,b as u,e as a,d as s,F as k,j as t}from"./app.68324ee7.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},g=t(`<h1 id="\u590D\u9009\u6846" tabindex="-1"><a class="header-anchor" href="#\u590D\u9009\u6846" aria-hidden="true">#</a> \u590D\u9009\u6846</h1><br><br><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><p>\u590D\u9009\u6846\u9700\u8981\u7528\u4E00\u4E2A <code>t-checkbox-group</code> \u6765\u5305\u88F9 <code>t-checkbox</code> \u5F62\u6210\u4E00\u4E2A\u7EC4\uFF0C</p><p><code>t-checkbox-group</code> \u4E0A\u7684 <code>v-model</code> \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u5BF9\u5E94\u5176\u4E2D\u67D0\u4E2A <code>t-checkbox</code> \u4E0A <code>value</code> \u3002</p><h3 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h3><p>\u8BBE\u7F6E <code>color</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E3B\u8981<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B21\u8981<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5F3A\u8C03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>neutral<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>neutral<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E2D\u548C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u57FA\u7840<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4FE1\u606F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6210\u529F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8B66\u544A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9519\u8BEF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox-group</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;primary&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u5706\u89D2" tabindex="-1"><a class="header-anchor" href="#\u5706\u89D2" aria-hidden="true">#</a> \u5706\u89D2</h3><p>\u8BBE\u7F6E <code>rounded</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5706<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3xl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3xl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u65E0\u654C\u5927<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2xl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2xl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8D85\u7EA7\u5927<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8D85\u5927<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5927<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u57FA\u7840<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5C0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u65E0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox-group</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8" aria-hidden="true">#</a> \u5C3A\u5BF8</h3><p>\u8BBE\u7F6E <code>size</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5927<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5C0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8D85\u5C0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox-group</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lg&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h3><p>\u8BA9 <code>disabled</code> \u4E3A <code>true</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53EF\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>\u7981\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-checkbox-group</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;abled&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><br><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027 \u{1F9D0}</h2><h3 id="\u590D\u9009\u6846-1" tabindex="-1"><a class="header-anchor" href="#\u590D\u9009\u6846-1" aria-hidden="true">#</a> \u590D\u9009\u6846</h3><p>t-checkbox</p>`,31),d=a("thead",null,[a("tr",null,[a("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),a("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),a("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),a("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),a("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),h=a("tr",null,[a("td",{style:{"text-align":"center"}},"value"),a("td",{style:{"text-align":"center"}},"\u6807\u8BC6(\u5FC5\u586B)"),a("td",{style:{"text-align":"center"}},"string"),a("td",{style:{"text-align":"center"}}),a("td",{style:{"text-align":"center"}})],-1),x=a("td",{style:{"text-align":"center"}},"color",-1),q=a("td",{style:{"text-align":"center"}},"\u989C\u8272",-1),b=a("td",{style:{"text-align":"center"}},"string",-1),v=a("td",{style:{"text-align":"center"}},"base",-1),m={style:{"text-align":"center"}},y=a("td",{style:{"text-align":"center"}},"size",-1),_=a("td",{style:{"text-align":"center"}},"\u5C3A\u5BF8",-1),f=a("td",{style:{"text-align":"center"}},"string",-1),w=a("td",{style:{"text-align":"center"}},"md",-1),z={style:{"text-align":"center"}},j=a("td",{style:{"text-align":"center"}},"rounnded",-1),B=a("td",{style:{"text-align":"center"}},"\u5706\u89D2",-1),N=a("td",{style:{"text-align":"center"}},"string",-1),V=a("td",{style:{"text-align":"center"}},"base",-1),F={style:{"text-align":"center"}},A=a("td",{style:{"text-align":"center"}},"disabled",-1),C=a("td",{style:{"text-align":"center"}},"\u7981\u7528",-1),E=a("td",{style:{"text-align":"center"}},"boolean",-1),S=a("td",{style:{"text-align":"center"}},"false",-1),D={style:{"text-align":"center"}},G=t('<br><br><h3 id="\u590D\u9009\u6846\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u590D\u9009\u6846\u7EC4" aria-hidden="true">#</a> \u590D\u9009\u6846\u7EC4</h3><p>t-checkbox-group</p><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">v-model</td><td style="text-align:center;">\u5F53\u524D\u9009\u4E2D\u503C</td><td style="text-align:center;">Array</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><h3 id="\u590D\u9009\u6846-2" tabindex="-1"><a class="header-anchor" href="#\u590D\u9009\u6846-2" aria-hidden="true">#</a> \u590D\u9009\u6846</h3><p>t-checkbox</p><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr></tbody></table><br><br><h3 id="\u590D\u9009\u6846\u7EC4-1" tabindex="-1"><a class="header-anchor" href="#\u590D\u9009\u6846\u7EC4-1" aria-hidden="true">#</a> \u590D\u9009\u6846\u7EC4</h3><p>t-checkbox-group</p><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u53D8\u66F4\u4E8B\u4EF6</td><td style="text-align:center;">\u5F53\u524D\u9009\u4E2D\u503C</td></tr></tbody></table><br><br><br>',20);function H(I,J){const p=n("t-doc-color"),e=n("t-doc-size"),o=n("t-doc-rounded"),c=n("t-doc-boo");return l(),u(k,null,[g,a("table",null,[d,a("tbody",null,[h,a("tr",null,[x,q,b,v,a("td",m,[s(p)])]),a("tr",null,[y,_,f,w,a("td",z,[s(e)])]),a("tr",null,[j,B,N,V,a("td",F,[s(o)])]),a("tr",null,[A,C,E,S,a("td",D,[s(c)])])])]),G],64)}var M=i(r,[["render",H]]);export{M as default};
