import{r as n,o as s,c as a,a as e,b as t,F as l,e as c}from"./app.dafb6a14.js";const o={},p=e("h1",{id:"【第-6-章】证书管理篇",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#【第-6-章】证书管理篇","aria-hidden":"true"},"#"),c(" 【第 6 章】证书管理篇")],-1),r=e("h2",{id:"_6-1-申请-tls-证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-1-申请-tls-证书","aria-hidden":"true"},"#"),c(" 6.1 申请 TLS 证书")],-1),u=e("p",null,"接下来我们要做的，是为我们的域名申请一个真实的 TLS 证书，使网站具备标准 TLS 加密的能力及 HTTPS 访问的能力。这就是 Xray 等现阶段安全代理工具确保流量充分加密最重要的工具。",-1),i=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"请不要轻易使用自签证书。它并没有让操作简单太多，但增加了无谓的风险（如中间人攻击）。")],-1),m=c("这里我会使用一个叫做 "),b={href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"acme.sh",-1),d=c(" 的证书管理工具，它简单、轻量、高效，并可完成证书自动更新。"),h=e("p",null,"另外，我相信，现在你已经逐渐熟悉了 Linux 的基础操作，所以已经多次出现的命令从本章开始不再重复截图、只做简单的描述。如果实在想不起来怎么用的话，就稍微复习一下前面的章节吧。",-1),g=e("h2",{id:"_6-2-安装-acme-sh",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-2-安装-acme-sh","aria-hidden":"true"},"#"),c(" 6.2 安装 "),e("code",null,"acme.sh")],-1),y=e("ol",null,[e("li",null,[e("p",null,"小小白白 Linux 基础命令："),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"编号"),e("th",{style:{"text-align":"center"}},"命令名称"),e("th",{style:{"text-align":"center"}},"命令说明")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"cmd-12")]),e("td",{style:{"text-align":"center"}},[e("code",null,"wget")]),e("td",{style:{"text-align":"center"}},"访问（或下载）某个网页文件")]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"cmd-13")]),e("td",{style:{"text-align":"center"}},[e("code",null,"acme.sh")]),e("td",{style:{"text-align":"center"}},"acme.sh 证书管理相关的命令")])])])]),e("li",null,[e("p",null,"运行安装脚本"),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"wget"),c(" -O -  https://get.acme.sh "),e("span",{class:"token operator"},"|"),c(),e("span",{class:"token function"},"sh"),c("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])])]),e("li",null,[e("p",null,[c("让 "),e("code",null,"acme.sh"),c(" 命令生效")]),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"."),c(" .bashrc\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])])]),e("li",null,[e("p",null,[c("开启 "),e("code",null,"acme.sh"),c(" 的自动升级")]),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,"acme.sh --upgrade --auto-upgrade\n")]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])])]),e("li",null,[e("p",null,"到这一步的完整流程如下图："),e("p",null,[e("img",{src:"/Xray-docs-next/assets/ch06-img01-acme-install.809938be.gif",alt:"acme.sh安装演示"})])])],-1),E=e("h2",{id:"_6-3-测试证书申请",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-3-测试证书申请","aria-hidden":"true"},"#"),c(" 6.3 测试证书申请")],-1),M=e("p",null,[c("在正式申请证书之前，我们先用测试命令("),e("code",null,"--issue --test"),c(")来验证是否可以成功申请，这样可以避免在本地配置有误时，反复申请证书失败，超过 Let's Encrypt 的频率上限（比如，每小时、每个域名、每个用户失败最多 5 次），导致后面的步骤无法进行。")],-1),T=e("ol",null,[e("li",null,[e("p",null,[c("测试证书申请的命令如下（本文均以 "),e("code",null,"ECC"),c(" 证书为例，因为时至今日，实在没什么理由不用它）：")]),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,"acme.sh --issue --test -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256\n")]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])]),e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"说明"),e("p",null,[e("code",null,"ECC"),c("证书的主要优势在于它的 Keysize 更小，意味着同等大小下安全性的提升和加密解密速度的加快。如 ECC-256bit 的强度大约相当于 RSA-3072bit，何乐而不为呢？当然，有人说 ECC 证书握手会明显更快，这我觉得就有些夸张了，因为 RSA 握手也没有太慢，就算有差别应该也是毫秒级，很难直接感知。")]),e("p",null,[c("另外，如果有些网站确实需要兼容某些古老设备的，那也还是请按需选择"),e("code",null,"RSA"),c("证书。")])])]),e("li",null,[e("p",null,"你最终应该看到类似这样的提示："),e("div",{class:"language-log ext-log line-numbers-mode"},[e("pre",{class:"language-log"},[e("code",null,[e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:12"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"Using ACME_DIRECTORY:"),c(),e("span",{class:"token url"},"https://acme-staging-v02.api.letsencrypt.org/directory"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"Using CA:"),c(),e("span",{class:"token url"},"https://acme-staging-v02.api.letsencrypt.org/directory"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Create account key ok"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"Registering account:"),c(),e("span",{class:"token url"},"https://acme-staging-v02.api.letsencrypt.org/directory"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Registered\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" ACCOUNT_THUMBPRINT"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'CU6qmPKuRqhyTAIrF4swosR375194z_1ddUlWef8xDc'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Creating domain key\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"The domain key is here:"),c(),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Single domain"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'二级域名.你的域名.com'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:13"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Getting domain auth token for each domain\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:14"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Getting webroot for domain"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'二级域名.你的域名.com'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:14"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"Verifying:"),c(" 二级域名"),e("span",{class:"token punctuation"},"."),c("你的域名"),e("span",{class:"token punctuation"},"."),c("com\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:23"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Pending\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:25"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Success\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:25"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Verify finished"),e("span",{class:"token punctuation"},","),c(" start to sign"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:25"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Lets finalize the order"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:25"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Le_OrderFinalize"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'https://acme-staging-v02.api.letsencrypt.org/acme/finalize/490205995/7730242871'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:25"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Downloading cert"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"04:25:25"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Le_LinkCert"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'https://acme-staging-v02.api.letsencrypt.org/acme/cert/xujss5xt8i38waubafz2xujss5xt8i38waubz2'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:21:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Cert success"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("BEGIN CERTIFICAT"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("\nsxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN\ncTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp\nwAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC\n2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid\nSjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb\nwXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX\ntOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK\n0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA\n1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG\n0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV\n7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY\nIeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX\nTnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0\niMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF\ntYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos\nhaiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg\n0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2\nYO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV\nFmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc\nG6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd\nAm65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6\nNZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0\nx6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp\nyiLKcBFc5H7dgJCImo7us7aJeftC44uWkPIjw9AKH"),e("span",{class:"token operator"},"="),c("\n"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("END CERTIFICAT"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:21:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Your cert is in  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.cer"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:21:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Your cert key is in  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:21:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" The intermediate CA cert is in  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/ca.cer"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:21:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"And the full chain certs is there:"),c("  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/fullchain.cer"),c("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br"),e("span",{class:"line-number"},"30"),e("br"),e("span",{class:"line-number"},"31"),e("br"),e("span",{class:"line-number"},"32"),e("br"),e("span",{class:"line-number"},"33"),e("br"),e("span",{class:"line-number"},"34"),e("br"),e("span",{class:"line-number"},"35"),e("br"),e("span",{class:"line-number"},"36"),e("br"),e("span",{class:"line-number"},"37"),e("br"),e("span",{class:"line-number"},"38"),e("br"),e("span",{class:"line-number"},"39"),e("br"),e("span",{class:"line-number"},"40"),e("br"),e("span",{class:"line-number"},"41"),e("br"),e("span",{class:"line-number"},"42"),e("br"),e("span",{class:"line-number"},"43"),e("br"),e("span",{class:"line-number"},"44"),e("br"),e("span",{class:"line-number"},"45"),e("br"),e("span",{class:"line-number"},"46"),e("br"),e("span",{class:"line-number"},"47"),e("br"),e("span",{class:"line-number"},"48"),e("br"),e("span",{class:"line-number"},"49"),e("br"),e("span",{class:"line-number"},"50"),e("br")])])]),e("li",null,[e("p",null,[c("注意：这里申请的是测试证书，没办法直接用的，只是用来证明你的域名、配置全都正确。仔细观察，你会发现给你发证书的域名是 "),e("code",null,"https://acme-staging-v02.api.letsencrypt.org"),c("，这个 "),e("code",null,"staging"),c(" 你就理解成【测试服】吧！")])]),e("li",null,[e("p",null,"如果这一步出错的话，你可以运行下面的命令，来查看详细的申请过程和具体的错误。（看不懂就隐藏掉敏感信息后，去 Xray 群里问吧）"),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,"acme.sh --issue --test -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256 --debug\n")]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])]),e("p",null,[c("嗯没错，就是在命令的最后加了一个 "),e("code",null,"--debug"),c(" 参数")])]),e("li",null,[e("p",null,"这一步确定成功之后，就可以申请正式的证书了。（测试证书不需要删除，它会自动被正式证书覆盖）")])],-1),A=e("h2",{id:"_6-4-正式证书申请",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-4-正式证书申请","aria-hidden":"true"},"#"),c(" 6.4 正式证书申请")],-1),f=e("ol",null,[e("li",null,[e("p",null,[c("申请正式证书的命令如下（即删掉 "),e("code",null,"--test"),c(" 参数，并在最后加入 "),e("code",null,"--force"),c("参数）：")]),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,"acme.sh --issue -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256 --force\n")]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])]),e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"说明"),e("p",null,[e("code",null,"--force"),c(" 参数的意思就是，在现有证书到期前，手动（强行）更新证书。上一步我们从“测试服”申请的证书虽然不能直接用，但是它本身是尚未过期的，所以需要用到这个参数。")])])]),e("li",null,[e("p",null,"你最终应该看到跟上面很像的提示："),e("div",{class:"language-log ext-log line-numbers-mode"},[e("pre",{class:"language-log"},[e("code",null,[c("vpsadmin"),e("span",{class:"token operator"},"@"),c("vps"),e("span",{class:"token operator"},"-"),c("server"),e("span",{class:"token operator"},":"),e("span",{class:"token operator"},"~"),e("span",{class:"token operator"},"$"),c(),e("span",{class:"token domain constant"},"acme.sh"),c(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("issue "),e("span",{class:"token operator"},"-"),c("d 二级域名"),e("span",{class:"token punctuation"},"."),c("你的域名"),e("span",{class:"token punctuation"},"."),c("com "),e("span",{class:"token operator"},"-"),c("w "),e("span",{class:"token file-path string"},"/home/vpsadmin/www/webpage"),c(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("keylength ec"),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"256"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"Using CA:"),c(),e("span",{class:"token url"},"https://acme-v02.api.letsencrypt.org/directory"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Creating domain key\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"The domain key is here:"),c(),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Single domain"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'二级域名.你的域名.com'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Getting domain auth token for each domain\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Getting webroot for domain"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'二级域名.你的域名.com'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"Verifying:"),c(" 二级域名"),e("span",{class:"token punctuation"},"."),c("你的域名"),e("span",{class:"token punctuation"},"."),c("com\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Pending\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Success\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Verify finished"),e("span",{class:"token punctuation"},","),c(" start to sign"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Lets finalize the order"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Le_OrderFinalize"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'https://acme-v02.api.letsencrypt.org/acme/finalize/490205996/7730242872'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Downloading cert"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Le_LinkCert"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'https://acme-v02.api.letsencrypt.org/acme/cert/vsxvk0oldnuobe51ayxz4dms62sk2dwmw9zhuw'"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:51"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Cert success"),e("span",{class:"token punctuation"},"."),c("\n"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("BEGIN CERTIFICAT"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("\nsxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN\ncTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp\nwAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC\n2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid\nSjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb\nwXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX\ntOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK\n0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA\n1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG\n0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV\n7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY\nIeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX\nTnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0\niMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF\ntYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos\nhaiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg\n0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2\nYO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV\nFmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc\nG6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd\nAm65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6\nNZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0\nx6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp\nyiLKcBFc5H7dgJCImo7us7aJeftC44uWkPM"),e("span",{class:"token operator"},"="),c("\n"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("END CERTIFICAT"),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Your cert is in  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.cer"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" Your cert key is in  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(" The intermediate CA cert is in  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/ca.cer"),c("\n"),e("span",{class:"token punctuation"},"["),e("span",{class:"token date number"},"Wed 30"),c(" Dec "),e("span",{class:"token number"},"2022"),c(),e("span",{class:"token time number"},"15:22:52"),c(" AM EST"),e("span",{class:"token punctuation"},"]"),c(),e("span",{class:"token property"},"And the full chain certs is there:"),c("  "),e("span",{class:"token file-path string"},"/home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/fullchain.cer"),c("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br"),e("span",{class:"line-number"},"30"),e("br"),e("span",{class:"line-number"},"31"),e("br"),e("span",{class:"line-number"},"32"),e("br"),e("span",{class:"line-number"},"33"),e("br"),e("span",{class:"line-number"},"34"),e("br"),e("span",{class:"line-number"},"35"),e("br"),e("span",{class:"line-number"},"36"),e("br"),e("span",{class:"line-number"},"37"),e("br"),e("span",{class:"line-number"},"38"),e("br"),e("span",{class:"line-number"},"39"),e("br"),e("span",{class:"line-number"},"40"),e("br"),e("span",{class:"line-number"},"41"),e("br"),e("span",{class:"line-number"},"42"),e("br"),e("span",{class:"line-number"},"43"),e("br"),e("span",{class:"line-number"},"44"),e("br"),e("span",{class:"line-number"},"45"),e("br"),e("span",{class:"line-number"},"46"),e("br")])])]),e("li",null,[e("p",null,[c("仔细观察，你会发现这次给你发证书的域名是 "),e("code",null,"https://acme-v02.api.letsencrypt.org"),c("，少了 "),e("code",null,"staging"),c("，自然就是【正式服】了！")])])],-1),v=e("h2",{id:"_6-5-证书安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-5-证书安装","aria-hidden":"true"},"#"),c(" 6.5 证书安装")],-1),C=e("ol",null,[e("li",null,[e("p",null,"证书申请完成后，需要安装，安装到指定位置，并在配置文件中引用即可："),e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[c("vpsadmin@vps-server:~$ acme.sh --installcert -d 二级域名.你的域名.com --cert-file /你要安装到的位置/cert.crt --key-file /你要安装到的位置/cert.key --fullchain-file /你要安装到的位置/fullchain.crt --ecc\n"),e("span",{class:"token punctuation"},"["),c("Mon "),e("span",{class:"token number"},"14"),c(" Feb "),e("span",{class:"token number"},"2022"),c(" 03:00:25 PM CST"),e("span",{class:"token punctuation"},"]"),c(" Installing cert to: /etc/xray/cert/cert.crt\n"),e("span",{class:"token punctuation"},"["),c("Mon "),e("span",{class:"token number"},"14"),c(" Feb "),e("span",{class:"token number"},"2022"),c(" 03:00:25 PM CST"),e("span",{class:"token punctuation"},"]"),c(" Installing key to: /etc/xray/cert/cert.key\n"),e("span",{class:"token punctuation"},"["),c("Mon "),e("span",{class:"token number"},"14"),c(" Feb "),e("span",{class:"token number"},"2022"),c(" 03:00:25 PM CST"),e("span",{class:"token punctuation"},"]"),c(" Installing full chain to: /etc/xray/cert/fullchain.crt\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br")])])])],-1),D=e("h2",{id:"_6-6-你的进度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-6-你的进度","aria-hidden":"true"},"#"),c(" 6.6 你的进度")],-1),S=e("p",null,"至此，Xray 所需要的两个基础设施终于全部就位！千呼万唤始出来的 Xray 马上就要揭开面纱，我们终于要进入最激动人心章节啦！",-1),x=e("blockquote",null,[e("p",null,"⬛⬛⬛⬛⬛⬛⬜⬜ 75%")],-1);o.render=function(c,o){const W=n("OutboundLink");return s(),a(l,null,[p,r,u,i,e("p",null,[m,e("a",b,[k,t(W)]),d]),h,g,y,E,M,T,A,f,v,C,D,S,x],64)};export default o;