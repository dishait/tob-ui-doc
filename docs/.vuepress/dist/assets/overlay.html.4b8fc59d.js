import{r as p,a as c,b as l,e as n,d as a,F as u,j as s,i as t}from"./app.68324ee7.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=s(`<h1 id="\u906E\u7F69" tabindex="-1"><a class="header-anchor" href="#\u906E\u7F69" aria-hidden="true">#</a> \u906E\u7F69</h1><br><br><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><p>\u76F4\u63A5\u8C03\u7528 <code>ref</code> \u7684 <code>show</code> \u663E\u793A\u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C55\u793A<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F604}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-overlay</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>overlay<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>overlay<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div></div><br><br><h3 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h3>`,11),d=t("\u76F4\u63A5\u5D4C\u5165\u4F60\u60F3\u8981\u7684\u5185\u5BB9\u5373\u53EF\uFF0C\u5F53\u7136\u8FD9\u91CC\u66F4\u63A8\u8350\u4F60\u4F7F\u7528 "),g={href:"/components/base/popup/",target:"_blank",rel:"noopener noreferrer"},h=t("\u5F39\u51FA\u5C42"),b=t(" \u7EC4\u4EF6"),_=s(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell-group</span> <span class="token attr-name">inset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C55\u793A<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F600}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-cell-group</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-overlay</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>overlay<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-white rounded h-20 w-25<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-overlay</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>overlay<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><br><br><br><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027 \u{1F9D0}</h2>`,5),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),x=n("tr",null,[n("td",{style:{"text-align":"center"}},"zIndex"),n("td",{style:{"text-align":"center"}},"\u5C42\u7EA7"),n("td",{style:{"text-align":"center"}},"number"),n("td",{style:{"text-align":"center"}},"100"),n("td",{style:{"text-align":"center"}})],-1),y=n("td",{style:{"text-align":"center"}},"slotCenter",-1),q=n("td",{style:{"text-align":"center"}},"\u5D4C\u5165\u5185\u5BB9\u5C45\u4E2D",-1),m=n("td",{style:{"text-align":"center"}},"boolean",-1),f=n("td",{style:{"text-align":"center"}},"true",-1),w={style:{"text-align":"center"}},j=n("td",{style:{"text-align":"center"}},"closeOnClickMask",-1),N=n("td",{style:{"text-align":"center"}},"\u70B9\u51FB\u8499\u7248\u5173\u95ED",-1),V=n("td",{style:{"text-align":"center"}},"boolean",-1),B=n("td",{style:{"text-align":"center"}},"true",-1),C={style:{"text-align":"center"}},E=s('<br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr></tbody></table><br><br><br>',8);function I(F,L){const o=p("ExternalLinkIcon"),e=p("t-doc-boo");return c(),l(u,null,[k,n("p",null,[d,n("a",g,[h,a(o)]),b]),_,n("table",null,[v,n("tbody",null,[x,n("tr",null,[y,q,m,f,n("td",w,[a(e)])]),n("tr",null,[j,N,V,B,n("td",C,[a(e)])])])]),E],64)}var M=i(r,[["render",I]]);export{M as default};
