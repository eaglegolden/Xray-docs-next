import{a as n}from"./array.999c8e45.js";import{p as t,c as o}from"./constant.4f073c13.js";import{o as r}from"./mermaid.core.be785434.js";function u(n){return n[0]}function e(n){return n[1]}function f(f,i){var l=o(!0),c=null,a=r,p=null;function s(o){var r,u,e,s=(o=n(o)).length,m=!1;for(null==c&&(p=a(e=t())),r=0;r<=s;++r)!(r<s&&l(u=o[r],r,o))===m&&((m=!m)?p.lineStart():p.lineEnd()),m&&p.point(+f(u,r,o),+i(u,r,o));if(e)return p=null,e+""||null}return f="function"==typeof f?f:void 0===f?u:o(f),i="function"==typeof i?i:void 0===i?e:o(i),s.x=function(n){return arguments.length?(f="function"==typeof n?n:o(+n),s):f},s.y=function(n){return arguments.length?(i="function"==typeof n?n:o(+n),s):i},s.defined=function(n){return arguments.length?(l="function"==typeof n?n:o(!!n),s):l},s.curve=function(n){return arguments.length?(a=n,null!=c&&(p=a(c)),s):a},s.context=function(n){return arguments.length?(null==n?c=p=null:p=a(c=n),s):c},s}export{f as l};
