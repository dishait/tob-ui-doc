import{a as t,b as p,e as n,t as e,F as o,j as a}from"./app.8b970407.js";const c=a(`<h1 id="\u6302\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6302\u4EF6" aria-hidden="true">#</a> \u6302\u4EF6</h1><div class="custom-container tip"><p class="custom-container-title">\u66F4\u901A\u7528</p><p>\u6302\u4EF6\u662F\u6BD4\u5FBD\u6807\u66F4\u901A\u7528\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5F80\u56DB\u5468\u5404\u4E2A\u4F4D\u7F6E\u6302\u5143\u7D20</p></div><br><br><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><h3 id="\u5728\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF" aria-hidden="true">#</a> \u5728\u7EBF</h3><p>\u4F7F\u7528 <code>t-pendant</code> \u5305\u88F9\u5185\u5BB9\uFF0C\u540C\u65F6\u7528 <code>t-pendant-item</code> \u5305\u88F9\u60F3\u8981\u6302\u7684\u5143\u7D20</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- \u88AB\u5305\u88F9\u5185\u5BB9\u5C06\u88AB\u6302\u8F7D\u5230\u5DE6\u4E0A\u89D2 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">,</span> less<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.custom</span> <span class="token punctuation">{</span>
    .w-3<span class="token punctuation">;</span>
    .h-3<span class="token punctuation">;</span>
    .bg-success<span class="token punctuation">;</span>
    .rounded-full<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
	.h-28<span class="token punctuation">;</span>
	.w-32<span class="token punctuation">;</span>
	.flex<span class="token punctuation">;</span>
	.bg-base<span class="token punctuation">;</span>
	.text-base<span class="token punctuation">;</span>
	.rounded-md<span class="token punctuation">;</span>
	.items-center<span class="token punctuation">;</span>
	.bg-opacity-10<span class="token punctuation">;</span>
	.justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u5FBD\u6807" tabindex="-1"><a class="header-anchor" href="#\u5FBD\u6807" aria-hidden="true">#</a> \u5FBD\u6807</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">,</span> less<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.custom</span> <span class="token punctuation">{</span>
    .px-1<span class="token punctuation">;</span> 
    .text-sm<span class="token punctuation">;</span> 
    .text-white<span class="token punctuation">;</span> 
    .rounded-xl<span class="token punctuation">;</span>
    .bg-secondary<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
	.h-28<span class="token punctuation">;</span>
	.w-32<span class="token punctuation">;</span>
	.flex<span class="token punctuation">;</span>
	.bg-base<span class="token punctuation">;</span>
	.text-base<span class="token punctuation">;</span>
	.rounded-md<span class="token punctuation">;</span>
	.items-center<span class="token punctuation">;</span>
	.bg-opacity-10<span class="token punctuation">;</span>
	.justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u65B0\u95FB" tabindex="-1"><a class="header-anchor" href="#\u65B0\u95FB" aria-hidden="true">#</a> \u65B0\u95FB</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">,</span> less<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.custom</span> <span class="token punctuation">{</span>
    .px-1<span class="token punctuation">;</span> 
    .text-sm<span class="token punctuation">;</span> 
    .bg-accent<span class="token punctuation">;</span> 
    .rounded-xl<span class="token punctuation">;</span>
    .text-white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
	.h-28<span class="token punctuation">;</span>
	.w-32<span class="token punctuation">;</span>
	.flex<span class="token punctuation">;</span>
	.bg-base<span class="token punctuation">;</span>
	.text-base<span class="token punctuation">;</span>
	.rounded-md<span class="token punctuation">;</span>
	.items-center<span class="token punctuation">;</span>
	.bg-opacity-10<span class="token punctuation">;</span>
	.justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cloud-download<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">,</span> less<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.custom</span> <span class="token punctuation">{</span>
    .w-5<span class="token punctuation">;</span> 
    .h-5<span class="token punctuation">;</span> 
    .flex<span class="token punctuation">;</span> 
    .shadow-sm<span class="token punctuation">;</span> 
    .rounded-full<span class="token punctuation">;</span> 
    .items-center<span class="token punctuation">;</span> 
    .justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
	.h-28<span class="token punctuation">;</span>
	.w-32<span class="token punctuation">;</span>
	.flex<span class="token punctuation">;</span>
	.bg-base<span class="token punctuation">;</span>
	.text-base<span class="token punctuation">;</span>
	.rounded-md<span class="token punctuation">;</span>
	.items-center<span class="token punctuation">;</span>
	.bg-opacity-10<span class="token punctuation">;</span>
	.justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h3 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h3><p>\u8BBE\u7F6E <code>t-pendant-item</code> \u7684 <code>position</code> \u5373\u53EF\uFF0C\u9ED8\u8BA4\u4E3A <code>right-top</code>\u3002\u53EF\u9009\u503C\u5982\u4E0B:</p><ul><li>left-top \u5DE6\u4E0A</li><li>center-top \u4E2D\u4E0A</li><li>right-top \u53F3\u4E0A</li><li>left-middle \u5DE6\u4E2D</li><li>center-middle \u4E2D</li><li>right-middle \u53F3\u4E2D</li><li>left-bottom \u5DE6\u4E0B</li><li>center-bottom \u4E2D\u4E0B</li><li>right-bottom \u53F3\u4E0B</li></ul><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-pendant-item</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant-item</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-pendant</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">,</span> less<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.custom</span> <span class="token punctuation">{</span>
    .px-1<span class="token punctuation">;</span> 
    .bg-info<span class="token punctuation">;</span> 
    .text-sm<span class="token punctuation">;</span> 
    .rounded<span class="token punctuation">;</span>
    .text-white<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
	.h-28<span class="token punctuation">;</span>
	.w-32<span class="token punctuation">;</span>
	.flex<span class="token punctuation">;</span>
	.bg-base<span class="token punctuation">;</span>
	.text-base<span class="token punctuation">;</span>
	.rounded-md<span class="token punctuation">;</span>
	.items-center<span class="token punctuation">;</span>
	.bg-opacity-10<span class="token punctuation">;</span>
	.justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><br><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027 \u{1F9D0}</h2><h3 id="\u6302\u4EF6\u9879" tabindex="-1"><a class="header-anchor" href="#\u6302\u4EF6\u9879" aria-hidden="true">#</a> \u6302\u4EF6\u9879</h3><p>t-pendant-item</p>`,33),l=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),u=n("td",{style:{"text-align":"center"}},"position",-1),k=n("td",{style:{"text-align":"center"}},"\u4F4D\u7F6E",-1),i=n("td",{style:{"text-align":"center"}},"string",-1),g=n("td",{style:{"text-align":"center"}},"right-top",-1),r=a('<br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><h3 id="\u6302\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#\u6302\u4EF6-1" aria-hidden="true">#</a> \u6302\u4EF6</h3><p>t-pendant</p><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr></tbody></table><br><br><h3 id="\u6302\u4EF6\u9879-1" tabindex="-1"><a class="header-anchor" href="#\u6302\u4EF6\u9879-1" aria-hidden="true">#</a> \u6302\u4EF6\u9879</h3><p>t-pendant-item</p><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr></tbody></table><br><br><br>',15),q={setup(d){const s="left-top | center-top | right-top | left-middle | center-middle | right-middle | left-bottom | center-bottom | right-bottom";return(m,h)=>(t(),p(o,null,[c,n("table",null,[l,n("tbody",null,[n("tr",null,[u,k,i,g,n("td",{style:{"text-align":"center"}},e(s))])])]),r],64))}};export{q as default};
