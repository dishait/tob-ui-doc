import{r as s,a as k,b as d,e as n,d as a,t as e,F as g,j as p}from"./app.a10a9e6c.js";const h=p(`<h1 id="\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875" aria-hidden="true">#</a> \u5206\u9875</h1><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><p>\u5229\u7528 <code>v-model</code> \u7ED1\u5B9A\u5F53\u524D\u9875\u7801\uFF0C<code>total</code> \u8BBE\u7F6E\u603B\u9875\u6570</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u7B80\u6613\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u6A21\u5F0F" aria-hidden="true">#</a> \u7B80\u6613\u6A21\u5F0F</h3><p>\u8BA9 <code>simple</code> \u4E3A <code>true</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h3><p>\u8BBE\u7F6E <code>color</code> \u5373\u53EF\uFF0C\u540C\u65F6\u53EF\u4EE5\u8BA9 <code>light</code> \u4E3A <code>true</code> \u53D8\u4E3A\u9AD8\u4EAE\uFF0C\u6216\u8005\u8BA9 <code>outline</code> \u4E3A <code>true</code> \u53D8\u4E3A\u8F6E\u5ED3\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">light</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">outline</span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u5706\u89D2" tabindex="-1"><a class="header-anchor" href="#\u5706\u89D2" aria-hidden="true">#</a> \u5706\u89D2</h3><p>\u8BBE\u7F6E <code>rounded</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71" aria-hidden="true">#</a> \u9634\u5F71</h3><p>\u8BBE\u7F6E <code>shadow</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">3</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8" aria-hidden="true">#</a> \u5C3A\u5BF8</h3><p>\u8BBE\u7F6E <code>size</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><br><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027 \u{1F9D0}</h2>`,35),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),y=n("tr",null,[n("td",{style:{"text-align":"center"}},"v-model"),n("td",{style:{"text-align":"center"}},"\u5F53\u524D\u6240\u5904\u9875\u6570"),n("td",{style:{"text-align":"center"}},"number"),n("td",{style:{"text-align":"center"}},"0"),n("td",{style:{"text-align":"center"}})],-1),x=n("td",{style:{"text-align":"center"}},"color",-1),m=n("td",{style:{"text-align":"center"}},"\u989C\u8272",-1),v=n("td",{style:{"text-align":"center"}},"string",-1),q=n("td",{style:{"text-align":"center"}},"base",-1),b={style:{"text-align":"center"}},w=n("td",{style:{"text-align":"center"}},"light",-1),f=n("td",{style:{"text-align":"center"}},"\u9AD8\u4EAE",-1),j=n("td",{style:{"text-align":"center"}},"boolean",-1),z=n("td",{style:{"text-align":"center"}},"false",-1),S={style:{"text-align":"center"}},B=n("td",{style:{"text-align":"center"}},"outline",-1),D=n("td",{style:{"text-align":"center"}},"\u8F6E\u5ED3",-1),N=n("td",{style:{"text-align":"center"}},"boolean",-1),V=n("td",{style:{"text-align":"center"}},"false",-1),E={style:{"text-align":"center"}},F=n("td",{style:{"text-align":"center"}},"size",-1),C=n("td",{style:{"text-align":"center"}},"\u5C3A\u5BF8",-1),A=n("td",{style:{"text-align":"center"}},"string",-1),G=n("td",{style:{"text-align":"center"}},"md",-1),H={style:{"text-align":"center"}},I=n("td",{style:{"text-align":"center"}},"rounded",-1),J=n("td",{style:{"text-align":"center"}},"\u5706\u89D2",-1),K=n("td",{style:{"text-align":"center"}},"string",-1),L=n("td",{style:{"text-align":"center"}},"base",-1),M={style:{"text-align":"center"}},O=n("td",{style:{"text-align":"center"}},"shadow",-1),P=n("td",{style:{"text-align":"center"}},"\u9634\u5F71",-1),Q=n("td",{style:{"text-align":"center"}},"string",-1),R=n("td",{style:{"text-align":"center"}},"none",-1),T={style:{"text-align":"center"}},U=n("td",{style:{"text-align":"center"}},"total",-1),W=n("td",{style:{"text-align":"center"}},"\u603B\u8BB0\u5F55\u6570",-1),X=n("td",{style:{"text-align":"center"}},"number",-1),Y=n("td",{style:{"text-align":"center"}},"4",-1),Z=n("td",{style:{"text-align":"center"}},"pageSize",-1),$=n("td",{style:{"text-align":"center"}},"\u4E00\u6B21\u663E\u793A\u591A\u5C11\u9875",-1),nn=n("td",{style:{"text-align":"center"}},"number",-1),an=n("td",{style:{"text-align":"center"}},"4",-1),sn=n("td",{style:{"text-align":"center"}},"simple",-1),tn=n("td",{style:{"text-align":"center"}},"\u7B80\u5355\u6A21\u5F0F",-1),en=n("td",{style:{"text-align":"center"}},"boolean",-1),pn=n("td",{style:{"text-align":"center"}},"false",-1),on={style:{"text-align":"center"}},cn=p('<br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u53D8\u66F4\u4E8B\u4EF6</td><td style="text-align:center;">pageDetail</td></tr></tbody></table><br><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><h4 id="change" tabindex="-1"><a class="header-anchor" href="#change" aria-hidden="true">#</a> change</h4><p><code>pageDetail</code> \u{1F449} \u9875\u9762\u4FE1\u606F\u5BF9\u8C61\uFF0C\u952E\u5982\u4E0B</p><ul><li>current \u5F53\u524D\u6240\u5904\u9875</li><li>isStart \u662F\u5426\u662F\u7B2C\u4E00\u9875</li><li>isEnd \u662F\u5426\u662F\u6700\u540E\u4E00\u9875</li></ul><br><br><br>',13),dn={setup(ln){const o="\u4FDD\u6301\u572899\u4EE5\u5185\u4F1A\u66F4\u7F8E\u89C2\uFF0C\u5927\u6570\u636E\u60C5\u51B5\u5C3D\u91CF\u7528\u7B80\u5355\u6A21\u5F0F\u4F1A\u66F4\u7F8E\u89C2",c="\u4FDD\u6301\u57285\u4EE5\u5185\u4F1A\u7F8E\u89C2";return(un,rn)=>{const l=s("t-doc-color"),t=s("t-doc-boo"),u=s("t-doc-size"),i=s("t-doc-rounded"),r=s("t-doc-shadow");return k(),d(g,null,[h,n("table",null,[_,n("tbody",null,[y,n("tr",null,[x,m,v,q,n("td",b,[a(l)])]),n("tr",null,[w,f,j,z,n("td",S,[a(t)])]),n("tr",null,[B,D,N,V,n("td",E,[a(t)])]),n("tr",null,[F,C,A,G,n("td",H,[a(u)])]),n("tr",null,[I,J,K,L,n("td",M,[a(i)])]),n("tr",null,[O,P,Q,R,n("td",T,[a(r)])]),n("tr",null,[U,W,X,Y,n("td",{style:{"text-align":"center"}},e(o))]),n("tr",null,[Z,$,nn,an,n("td",{style:{"text-align":"center"}},"3 | 4 | 5, "+e(c))]),n("tr",null,[sn,tn,en,pn,n("td",on,[a(t)])])])]),cn],64)}}};export{dn as default};
