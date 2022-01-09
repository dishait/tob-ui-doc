import{r as t,a as p,b as e,e as n,d as o,F as c,j as a}from"./app.3408002f.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=a(`<h1 id="\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#\u901A\u77E5" aria-hidden="true">#</a> \u901A\u77E5</h1><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u7A0B\u5E8F\u5DEE\u5F02</p><p>\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u7AEF\u539F\u751F\u9876\u90E8\u6709\u906E\u6321\uFF0C\u6240\u4EE5\u5C06\u901A\u77E5\u4E0B\u79FB\u5230 <code>nav-bar</code> \u5E95\u90E8\u3002</p></div><br><br><br><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><p>\u5728\u8C03\u7528 <code>ref</code> \u7684 <code>show</code> \u65F6\u53EF\u4F20\u5165\u914D\u7F6E\uFF0C<code>content</code> \u7528\u4E8E\u663E\u793A\u5185\u5BB9\u3002</p><p>\u8BBE\u7F6E <code>delay</code> \u5EF6\u8FDF\u591A\u5C11\u6BEB\u79D2\u540E\u5173\u95ED\uFF0C\u9ED8\u8BA4\u4E3A3\u79D2\u540E\u5173\u95ED\u3002</p><p><code>manual</code> \u8BBE\u7F6E\u624B\u52A8\u5173\u95ED\uFF0C\u540C\u65F6\u53EF\u4EE5\u8C03\u7528 <code>ref</code> \u7684 <code>hidden</code> \u5173\u95ED\u5F53\u524D\u7684 <code>notify</code>\u3002</p><p>\u8BBE\u7F6E <code>change</code> \u4E8B\u4EF6\u53EF\u4EE5\u83B7\u53D6\u5230\u5F53\u524D <code>notify</code> \u662F\u9690\u85CF\u8FD8\u662F\u663E\u793A\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell-group</span> <span class="token attr-name">inset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u7840\u7528\u6CD5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F602}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openBase<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u624B\u52A8\u5173\u95ED<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F60A}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleOpen<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81EA\u5B9A\u4E49\u5EF6\u8FDF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F61C}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openDelay<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-cell-group</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-notify</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>notify<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u76D1\u542C notify \u662F\u663E\u793A\u8FD8\u662F\u9690\u85CF</span>
            <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> v
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">openBase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    content<span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840\u7528\u6CD5&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">openDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    delay<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// \u5EF6\u8FDF 1 \u79D2</span>
                    content<span class="token operator">:</span> <span class="token string">&#39;1\u79D2\u540E\u5173\u95ED&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">toggleOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u8C03\u7528 hidden \u9690\u85CF\u6389</span>
                    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>notify<span class="token punctuation">.</span><span class="token function">hidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> 
                <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
                    manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u624B\u52A8\u5173\u95ED</span>
                    content<span class="token operator">:</span> <span class="token string">&#39;\u518D\u70B9\u5173\u95ED&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div></div><br><br><h3 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h3><p>\u8BBE\u7F6E <code>show</code> \u7684\u914D\u7F6E <code>color</code> \u5373\u53EF</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell-group</span> <span class="token attr-name">inset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E3B\u8981<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u4E3B\u8981<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6B21\u8981<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u6B21\u8981<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>secondary<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5F3A\u8C03<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u5F3A\u8C03<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>accent<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E2D\u548C<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u4E2D\u548C<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>neutral<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u7840<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u57FA\u7840<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>base<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4FE1\u606F<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u4FE1\u606F<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>info<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6210\u529F<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u6210\u529F<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>success<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8B66\u544A<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u8B66\u544A<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>warning<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9519\u8BEF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F914}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>\u9519\u8BEF<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>error<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-cell-group</span><span class="token punctuation">&gt;</span></span>

       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-notify</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>notify<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">open</span><span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    color<span class="token punctuation">,</span>
                    content
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div></div><br><br><br><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027 \u{1F9D0}</h2><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;">\u5C42\u7EA7</td><td style="text-align:center;">number</td><td style="text-align:center;">100</td><td style="text-align:center;"></td></tr></tbody></table><br><h3 id="show-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#show-\u914D\u7F6E" aria-hidden="true">#</a> show \u914D\u7F6E</h3><p>\u5728\u8C03\u7528 <code>ref</code> \u7684 <code>show</code> \u65F6\u53EF\u4F20\u5165\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4EE5\u4E0B\u662F\u5BF9\u8C61\u5C5E\u6027\u7684\u5177\u4F53\u8BF4\u660E</p>`,26),k=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),r=n("tr",null,[n("td",{style:{"text-align":"center"}},"content"),n("td",{style:{"text-align":"center"}},"\u5185\u5BB9"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"center"}}),n("td",{style:{"text-align":"center"}})],-1),d=n("tr",null,[n("td",{style:{"text-align":"center"}},"delay"),n("td",{style:{"text-align":"center"}},"\u5EF6\u8FDF"),n("td",{style:{"text-align":"center"}},"number"),n("td",{style:{"text-align":"center"}},"3000"),n("td",{style:{"text-align":"center"}})],-1),g=n("td",{style:{"text-align":"center"}},"color",-1),h=n("td",{style:{"text-align":"center"}},"\u989C\u8272",-1),q=n("td",{style:{"text-align":"center"}},"string",-1),b=n("td",{style:{"text-align":"center"}},"success",-1),v={style:{"text-align":"center"}},m=a('<br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u53D8\u66F4\u4E8B\u4EF6</td><td style="text-align:center;">\u53EF\u89C1\u6027</td></tr></tbody></table><br><br><br>',8);function y(x,f){const s=t("t-doc-color");return p(),e(c,null,[i,n("table",null,[k,n("tbody",null,[r,d,n("tr",null,[g,h,q,b,n("td",v,[o(s)])])])]),m],64)}var j=l(u,[["render",y]]);export{j as default};
