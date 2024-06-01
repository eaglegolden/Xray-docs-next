import{_ as s,r as a,o as t,c,a as e,b as n,d as l,w as p,e as i}from"./app-IW2Utqb_.js";const d={},r=e("h1",{id:"blackhole",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blackhole"},[e("span",null,"Blackhole")])],-1),u=i(`<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>response</code>: <a href="#responseobject">ResponseObject</a></p></blockquote><p>配置黑洞的响应数据。</p><p>Blackhole 会在收到待转发数据之后，发送指定的响应数据，然后关闭连接，待转发的数据将被丢弃。 如不指定此项，Blackhole 将直接关闭连接。</p><h3 id="responseobject" tabindex="-1"><a class="header-anchor" href="#responseobject"><span>ResponseObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>type</code>: &quot;http&quot; | &quot;none&quot;</p></blockquote><p>当 <code>type</code> 为 <code>&quot;none&quot;</code>（默认值）时，Blackhole 将直接关闭连接。</p><p>当 <code>type</code> 为 <code>&quot;http&quot;</code> 时，Blackhole 会发回一个简单的 HTTP 403 数据包，然后关闭连接。</p>`,10);function h(b,k){const o=a("RouterLink");return t(),c("div",null,[r,e("p",null,[n("Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 "),l(o,{to:"/config/routing.html"},{default:p(()=>[n("路由配置")]),_:1}),n(" 一起使用，可以达到禁止访问某些网站的效果。")]),u])}const m=s(d,[["render",h],["__file","blackhole.html.vue"]]);export{m as default};