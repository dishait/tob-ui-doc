import{r as p,a as c,b as l,e as n,d as a,w as u,F as k,j as o,i as s}from"./app.579e6d86.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},d=o(`<h1 id="\u4E3A\u4EC0\u4E48\u7EC4\u4EF6\u5E93\u8981\u6709\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u7EC4\u4EF6\u5E93\u8981\u6709\u6838\u5FC3" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u7EC4\u4EF6\u5E93\u8981\u6709\u6838\u5FC3</h1><h2 id="\u52A8\u673A" tabindex="-1"><a class="header-anchor" href="#\u52A8\u673A" aria-hidden="true">#</a> \u52A8\u673A \u{1F407}</h2><p>\u5148\u8BF4\u539F\u56E0\uFF0C\u4E3B\u8981\u662F\u6709\u4EE5\u4E0B\u4E09\u70B9</p><ol><li>\u63D0\u9AD8\u7EC4\u4EF6\u5F00\u53D1\u6548\u7387</li><li>\u964D\u4F4E\u7EC4\u4EF6\u7684\u7EF4\u62A4\u6210\u672C</li><li>\u62BD\u79BB\u91CD\u590D\u903B\u8F91\uFF0C\u7F29\u5C0F\u5305\u4F53\u79EF</li></ol><br><br><br><h2 id="\u8D77\u56E0" tabindex="-1"><a class="header-anchor" href="#\u8D77\u56E0" aria-hidden="true">#</a> \u8D77\u56E0 \u{1F98C}</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><p>\u8FD9\u5F97\u4ECE <code>props</code> \u8BF4\u8D77\uFF0C\u4F8B\u5982\u73B0\u5728\u6709\u4E00\u4E2A\u5E74\u9F84\u7684 <code>prop</code> \u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u53EA\u58F0\u660Eage\u7684\u5B58\u5728</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,11),g=s("\u5728\u7ED9\u522B\u4EBA\u7528\u7684\u7EC4\u4EF6\u4E2D\u4E0A\u8FB9\u7684\u8FD9\u79CD\u6CA1\u6709\u5BF9\u8FDB\u884C\u7EA6\u675F\u7C7B\u578B\u7684 "),h=n("code",null,"prop",-1),m=s(" \u5199\u6CD5\u662F "),b=s("\u975E\u5E38\u5371\u9669"),y=s(" \u7684\u3002"),w=o(`<p>\u8FD9\u610F\u5473\u7740\u7528\u6237\u53EF\u4EE5\u968F\u4FBF\u4F20\u4EFB\u4F55\u7C7B\u578B\u7684\u53C2\u6570\u3002\u4F8B\u5982\u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6B64\u65F6\u7528\u6237\u4F20\u4E86\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4E5F\u4E0D\u4F1A\u62A5\u9519</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">incAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u90A3\u4E48\u6700\u7EC8\u5728\u8FD0\u884C\u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0\u83AB\u540D\u5947\u5999\u7684\u9519\u8BEF</span>
                <span class="token keyword">const</span> newAge <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">++</span>      
                <span class="token keyword">return</span> newAge
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6240\u4EE5\u4E3A\u4E86\u907F\u514D\u7C7B\u578B\u9519\u8BEF\uFF0C\u4E00\u822C\u4F1A\u9650\u5236 <code>prop</code> \u7684\u7C7B\u578B\u3002\u4F8B\u5982 \u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">{</span>
            age<span class="token operator">:</span> Number <span class="token comment">// \u7EA6\u675F age \u4E3A\u6570\u5B57\u7C7B\u578B</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u8FD9\u6837\u53C8\u65E0\u6CD5\u7075\u6D3B\u7684\u8BBE\u7F6E <code>age</code> \u7684\u9ED8\u8BA4\u503C\uFF0C\u6240\u4EE5\u4E00\u822C\u4F1A\u8FD9\u6837\u5199 \u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">{</span>
            age<span class="token operator">:</span> <span class="token punctuation">{</span>
                type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u8BBE\u7F6E\u4E3A 18</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u662F\u8FD9\u6837\u53C8\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u4F60\u9700\u8981\u6BCF\u6B21\u90FD\u5199 <code>type</code> \u548C <code>default</code>\u3002</p><p>\u8FD9\u5728\u5C11\u91CF\u7684 <code>prop</code> \u9700\u6C42\u65F6\u662F\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u7684\uFF0C\u4F46\u5F53\u7EC4\u4EF6\u6709\u5927\u91CF\u7684 <code>prop</code> \u65F6\uFF0C\u4F60\u9700\u8981\u82B1\u8D39\u5927\u91CF\u7684\u65F6\u95F4\u5728\u8FD9\u4E0A\u8FB9\uFF0C\u540C\u65F6\u4F1A\u4F7F\u5F97\u4EE3\u7801\u5757\u8D85\u7EA7\u65E0\u654C\u957F\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u6709\u4E00\u4E2A\u65B0\u7684\u65B9\u6848\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u6070\u5DE7\u5728 <code>typescript</code> \u4E2D\u6709\u4E00\u79CD\u7B80\u4FBF\u7684\u7C7B\u578B\u63A8\u65AD\uFF0C\u4F8B\u5982 \u{1F447}</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span> <span class="token comment">// age \u5C06\u88AB\u63A8\u65AD\u4E3A\u6570\u5B57\u7C7B\u578B\uFF0C\u540C\u65F6\u9ED8\u8BA4\u503C\u4E3A 18 </span>
</code></pre></div><p>\u8FD9\u8DDF\u7EC4\u4EF6\u7684 <code>prop</code> \u5341\u8DB3\u7684\u50CF\uFF0C\u6240\u4EE5\u6700\u7EC8\u6211\u4EEC\u7528 <code>js</code> \u5B9E\u73B0\u4E86\u7C7B\u4F3C\u7684\u7B80\u5355 <code>prop</code> \u751F\u6210\u5668 \u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        age<span class="token operator">:</span> <span class="token number">18</span> <span class="token comment">// age\u5C06\u662F\u4E00\u4E2A\u6570\u5B57\u7C7B\u578B\u4E14\u9ED8\u8BA4\u503C\u4E3A18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p>\u7B49\u4EF7\u4E8E</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        age<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">18</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p>\u5F53\u4F60\u6709\u5F88\u591A <code>prop</code> \u65F6\uFF0C\u8FD9\u79CD\u5DEE\u5F02\u5C31\u66F4\u660E\u663E\u3002\u4F8B\u5982 \u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">18</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        disbaled<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        jobs<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Array<span class="token punctuation">,</span>
            <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        others<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Object<span class="token punctuation">,</span>
            <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        action<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Function<span class="token punctuation">,</span>
            <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u800C\u7528 <code>prop</code> \u751F\u6210\u5668\u53EA\u9700\u8981\u8FD9\u6837 \u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        disbaled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        jobs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        others<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u53EF\u4EE5\u53D1\u73B0\u901A\u8FC7\u7B80\u5355\u7684\u751F\u6210\u5668\u5C31\u53EF\u4EE5\u628A\u91CD\u590D\u7684\u5DE5\u4F5C\u8BA9\u4EE3\u7801\u53BB\u505A\uFF0C\u63D0\u9AD8\u7EC4\u4EF6\u7684\u5F00\u53D1\u6548\u7387\u7684\u540C\u65F6\u964D\u4F4E\u4EE3\u7801\u91CF\uFF0C\u800C\u4E14\u7EF4\u62A4\u6027\u66F4\u9AD8\u3002</p><br><br><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h3><p>\u6709\u4E86 <code>props</code> \u751F\u6210\u5668\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u8FD9\u4E9B\u751F\u6210\u5668\u7684 <code>idea</code> \u6269\u5C55\u5230\u5176\u4ED6\u7684\u4F4D\u7F6E\uFF0C\u4F8B\u5982\u8BA1\u7B97\u5C5E\u6027\u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- foo\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[applyDisabled]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u4E00\u4E2A\u5360\u4F4D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        disabled<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">applyDisabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> disabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token comment">// disabled \u4E3A true \u65F6\uFF0C\u5E94\u7528 foo-disabled</span>
            <span class="token keyword">return</span> disabled <span class="token operator">?</span> <span class="token string">&#39;foo-disabled&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.foo-disabled</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div></div><p>\u5982\u679C\u4F60\u5199\u8FC7\u5F88\u591A\u7EC4\u4EF6\u5C31\u4F1A\u53D1\u73B0\u4E0A\u8FB9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u4F8B\u5B50\uFF0C\u5F53\u7528\u6237\u5E0C\u671B\u7981\u7528\u65F6\uFF0C\u8BA9\u5143\u7D20\u900F\u660E\u4E00\u70B9\u3002\u800C\u8FD9\u4E9B\u903B\u8F91\u5904\u7406\u90FD\u4F1A\u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u5B9E\u73B0\u3002</p><p>\u90A3\u4E48\u8FD9\u4E9B\u903B\u8F91\u80FD\u5426\u7528\u751F\u6210\u5668\u5B9E\u73B0\u5462\uFF1F\uFF1F</p><p>\u7B54\u6848\u5F53\u7136\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u5C31\u50CF\u8FD9\u6837\u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- foo\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[Disabled]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u4E00\u4E2A\u5360\u4F4D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">C</span><span class="token punctuation">,</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        disabled<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> $<span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// \u5B83\u5C06\u81EA\u52A8\u83B7\u53D6 this.disabled\uFF0C\u5E76\u5728\u5176\u4E3A\u771F\u65F6\u8FD4\u56DE foo-disabled</span>
        Disabled<span class="token operator">:</span> <span class="token string">&#39;foo-disabled&#39;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.foo-disabled</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div></div><p>\u8BA1\u7B97\u5C5E\u6027\u751F\u6210\u5668\u4E2D\u7684\u5927\u5199 <code>key</code> \u5728\u5185\u90E8\u4F1A\u627E\u5230 <code>this</code> \u4E0A\u5C0F\u5199\u7684 <code>key</code>\uFF0C\u4F8B\u5982\u4E0A\u8FB9\u7684\u5927\u5199\u7684 <code>Disabled</code> \u4F1A\u627E\u5C0F\u5199\u7684 <code>disabled</code>\uFF0C\u5373 <code>this.disabled</code>\u3002</p><p>\u5F53\u7136\u8BA1\u7B97\u5C5E\u6027\u8FD8\u6709\u975E\u5E38\u591A\u7684\u901A\u7528\u7684\u903B\u8F91\u5904\u7406\uFF0C\u4F8B\u5982\u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">C</span><span class="token punctuation">,</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        rounded<span class="token operator">:</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        theme<span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
        size<span class="token operator">:</span> <span class="token string">&#39;base&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">Rounded</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> rounded <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rounded-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>rounded<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">Disabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> disabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">return</span> disabled <span class="token operator">?</span> <span class="token string">&#39;foo-disabled&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">Visible</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> visible <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">return</span> visible <span class="token operator">?</span> <span class="token string">&#39;foo-show&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;foo-hidden&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">Theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> theme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">const</span> isDark <span class="token operator">=</span> theme <span class="token operator">===</span> <span class="token string">&#39;dark&#39;</span>
            <span class="token keyword">return</span> isDark <span class="token operator">?</span> <span class="token string">&#39;text-white&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;text-primary&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> sizes <span class="token operator">=</span> <span class="token punctuation">{</span>
                lg<span class="token operator">:</span> <span class="token string">&#39;text-lg&#39;</span><span class="token punctuation">,</span>
                md<span class="token operator">:</span> <span class="token string">&#39;text-md&#39;</span><span class="token punctuation">,</span>
                sm<span class="token operator">:</span> <span class="token string">&#39;text-sm&#39;</span><span class="token punctuation">,</span>
                xs<span class="token operator">:</span> <span class="token string">&#39;text-xs&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">return</span> sizes<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">||</span> size
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u800C\u7528\u8BA1\u7B97\u5C5E\u6027\u751F\u6210\u5668\u53BB\u505A\u5C31\u975E\u5E38\u7684\u7B80\u5355\u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">C</span><span class="token punctuation">,</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        rounded<span class="token operator">:</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        theme<span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
        size<span class="token operator">:</span> <span class="token string">&#39;base&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> $<span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        Rounded<span class="token operator">:</span> <span class="token string">&#39;rounded-$&#39;</span><span class="token punctuation">,</span>
        Disabled<span class="token operator">:</span> <span class="token string">&#39;foo-disabled&#39;</span><span class="token punctuation">,</span>
        Visible<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo-show&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foo-hidden&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        Theme<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text-white&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text-primary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        Size<span class="token operator">:</span> <span class="token punctuation">{</span>
            lg<span class="token operator">:</span> <span class="token string">&#39;text-lg&#39;</span><span class="token punctuation">,</span>
            md<span class="token operator">:</span> <span class="token string">&#39;text-md&#39;</span><span class="token punctuation">,</span>
            sm<span class="token operator">:</span> <span class="token string">&#39;text-sm&#39;</span><span class="token punctuation">,</span>
            xs<span class="token operator">:</span> <span class="token string">&#39;text-xs&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53\u7136\u8FD8\u6709\u5F88\u591A\u590D\u6742\u7684\u60C5\u51B5\u53EA\u80FD\u4F9D\u8D56\u539F\u751F\u7684\u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0\uFF0C\u6240\u4EE5\u751F\u6210\u5668\u5BF9\u539F\u751F\u8BA1\u7B97\u5C5E\u6027\u662F\u517C\u5BB9\u7684\u{1F447}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">C</span><span class="token punctuation">,</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        counter<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> $<span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> counter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">return</span> counter <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7B49\u4EF7\u4E8E</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> $<span class="token constant">C</span><span class="token punctuation">,</span> $<span class="token constant">P</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;...&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> $<span class="token constant">P</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        counter<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> counter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">return</span> counter <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><br><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3 \u{1F43F}\uFE0F</h2><p>\u6240\u4EE5\u4F60\u4F1A\u53D1\u73B0\u4E3A\u5565\u7EC4\u4EF6\u5E93\u9700\u8981\u6709\u4E00\u4E2A\u6838\u5FC3\uFF1F\uFF1F</p><p>\u65E0\u4ED6\uFF0C\u5C31\u662F\u56E0\u4E3A\u5F00\u5934\u7684\u90A3\u4E09\u4E2A\u539F\u56E0\u3002</p><ol><li>\u63D0\u9AD8\u7EC4\u4EF6\u5F00\u53D1\u6548\u7387</li><li>\u964D\u4F4E\u7EC4\u4EF6\u7684\u7EF4\u62A4\u6210\u672C</li><li>\u62BD\u79BB\u91CD\u590D\u903B\u8F91\uFF0C\u7F29\u5C0F\u5305\u4F53\u79EF</li></ol><p>\u6240\u4EE5\u5982\u679C\u4F60\u5E0C\u671B\u5FEB\u901F\u5F00\u53D1\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5E93\uFF0C\u4E0D\u59A8\u5C1D\u8BD5\u5148\u6784\u5EFA\u4E00\u4E2A\u6838\u5FC3\u7684\u5E93\u3002</p><p>\u5F53\u7136\u7EC4\u4EF6\u5E93\u7684\u6838\u5FC3\u4E0D\u4EC5\u4EC5\u5305\u542B\u4E0A\u8FB9\u751F\u6210\u5668\uFF0C\u8FD8\u6709\u975E\u5E38\u591A\u7684\u6709\u7528\u7684\u5DE5\u5177\u3002</p><p>\u66F4\u5177\u4F53\u7684\u5B9E\u73B0\u4E0E\u67B6\u6784\u5C06\u4F1A\u5728\u540E\u7EED\u7684\u6587\u7AE0\u4E2D\u8BB2\u89E3\u3002</p><br><br><br><h2 id="\u542F\u53D1" tabindex="-1"><a class="header-anchor" href="#\u542F\u53D1" aria-hidden="true">#</a> \u542F\u53D1 \u{1F433}</h2><p>\u8BE5\u6A21\u5757\u53D7\u4EE5\u4E0B\u6280\u672F\u542F\u53D1</p>`,53),f={href:"https://www.tslang.cn/",target:"_blank",rel:"noopener noreferrer"},v=s("Typescript"),x={href:"https://www.npmjs.com/package/@vue/reactivity",target:"_blank",rel:"noopener noreferrer"},_=s("@vue/reactivity");function $(j,q){const e=p("t-tag"),t=p("ExternalLinkIcon");return c(),l(k,null,[d,n("p",null,[g,h,m,a(e,{color:"error"},{default:u(()=>[b]),_:1}),y]),w,n("ol",null,[n("li",null,[n("a",f,[v,a(t)])]),n("li",null,[n("a",x,[_,a(t)])])])],64)}var z=i(r,[["render",$]]);export{z as default};
