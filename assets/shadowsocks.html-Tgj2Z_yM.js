import{_ as r,r as a,o as i,c,a as e,b as s,d as n,w as p,e as l}from"./app-dBv2wqfG.js";const d={},u=e("h1",{id:"shadowsocks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shadowsocks"},[e("span",null,"Shadowsocks")])],-1),h={href:"https://en.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},k=l("<p>Here are the features and compatibility of Shadowsocks:</p><ul><li>It supports TCP and UDP packet forwarding, with the option to disable UDP.</li><li>Recommended encryption methods: <ul><li>2022-blake3-aes-128-gcm</li><li>2022-blake3-aes-256-gcm</li><li>2022-blake3-chacha20-poly1305</li></ul></li><li>Other encryption methods: <ul><li>aes-256-gcm</li><li>aes-128-gcm</li><li>chacha20-poly1305 (also known as chacha20-ietf-poly1305)</li><li>none or plain</li></ul></li></ul><p>The new protocol format of Shadowsocks 2022 improves performance and includes full replay protection, addressing security issues present in the old protocol:</p>",3),m={href:"https://github.com/shadowsocks/shadowsocks-org/issues/183",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"Increasing false-positive rate of TCP replay filters over time",-1),v=e("li",null,"Lack of replay protection for UDP",-1),q=e("li",null,"TCP behaviors that can be used for active probing",-1),g=l(`<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>Using the &quot;none&quot; encryption method will transmit traffic in plaintext. It is not recommended to use &quot;none&quot; encryption on public networks to ensure security.</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
      <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;encryption method&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>servers</code>: [<a href="#serverobject">ServerObject</a>]</p></blockquote><p>An array representing a group of Shadowsocks server settings, where each item is a <a href="#serverobject">ServerObject</a>.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject"><span>ServerObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;encryption method&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>email</code>: string</p></blockquote><p>Email address (optional) used to identify the user.</p><blockquote><p><code>address</code>: address</p></blockquote><p>The address of the Shadowsocks server, supporting IPv4, IPv6, and domain names. Required.</p><blockquote><p><code>port</code>: number</p></blockquote><p>The port of the Shadowsocks server. Required.</p><blockquote><p><code>method</code>: string</p></blockquote><p>Encryption method. Required.</p><blockquote><p><code>password</code>: string</p></blockquote><p>Password. Required.</p><blockquote><p><code>uot</code>: bool</p></blockquote><p>When enabled, UDP over TCP (UOT) will be used.</p><ul><li>Shadowsocks 2022</li></ul><p>Use a pre-shared key (PSK) similar to WireGuard as the password.</p><p>To generate a compatible key with shadowsocks-rust, use <code>openssl rand -base64 &lt;length&gt;</code>, where the length depends on the encryption method used.</p><table><thead><tr><th>Encryption Method</th><th style="text-align:right;">Key Length</th></tr></thead><tbody><tr><td>2022-blake3-aes-128-gcm</td><td style="text-align:right;">16</td></tr><tr><td>2022-blake3-aes-256-gcm</td><td style="text-align:right;">32</td></tr><tr><td>2022-blake3-chacha20-poly1305</td><td style="text-align:right;">32</td></tr></tbody></table><p>In the Go implementation, a 32-byte key always works.</p><ul><li>Other encryption methods</li></ul><p>Any string can be used as a password. There is no limit on the password length, but shorter passwords are more susceptible to cracking. It is recommended to use a password of 16 characters or longer.</p><blockquote><p><code>level</code>: number</p></blockquote>`,27),y=e("code",null,"level",-1),f=e("code",null,"level",-1);function w(_,j){const o=a("ExternalLinkIcon"),t=a("RouterLink");return i(),c("div",null,[u,e("p",null,[e("a",h,[s("Shadowsocks"),n(o)]),s(" protocol is compatible with most other implementations.")]),k,e("ul",null,[e("li",null,[e("a",m,[s("Serious vulnerabilities in Shadowsocks AEAD encryption methods that compromise the integrity of communications"),n(o)])]),b,v,q]),g,e("p",null,[s("User level. Connections will use the corresponding "),n(t,{to:"/en/config/policy.html#levelpolicyobject"},{default:p(()=>[s("local policy")]),_:1}),s(" associated with this user level.")]),e("p",null,[s("The "),y,s(" value corresponds to the "),f,s(" value in the "),n(t,{to:"/en/config/policy.html#policyobject"},{default:p(()=>[s("policy")]),_:1}),s(". If not specified, the default value is 0.")])])}const S=r(d,[["render",w],["__file","shadowsocks.html.vue"]]);export{S as default};