(this.webpackJsonpurlshortner=this.webpackJsonpurlshortner||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r=n(3),l=n.n(r),o=n(16),s=n.n(o),c=(n(23),n(6)),a=n(2),i=n(18),j=(n(24),n(17)),h=n.n(j),b=n(0);var u=function(){var t=Object(r.useState)({url:"",isInValidUrl:!1,errMsg:"",shortUrl:"",showShortUrl:!1,showWhat:1}),e=Object(i.a)(t,2),n=e[0],o=e[1],s=function(t){console.log(t),h.a.post("http://localhost:5000/url",{urlToConvert:t},{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"}).then((function(t){console.log(t),200==t.status?o(Object(a.a)(Object(a.a)({},n),{},{shortUrl:t.data.shortUrl,showShortUrl:!0,showWhat:2})):o(Object(a.a)(Object(a.a)({},n),{},{errMsg:t.data.err}))})).catch((function(t){o(Object(a.a)(Object(a.a)({},n),{},{errMsg:t.response.data.err,isInValidUrl:!0}))}))};return Object(b.jsx)("div",{id:"main-registration-container",children:Object(b.jsxs)("div",{id:"app",children:[1==n.showWhat&&Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsx)("h3",{children:"URL Shortner"}),Object(b.jsxs)("form",{method:"post",name:"url",onSubmit:s,children:[Object(b.jsx)("label",{id:"enterUrl",style:{"font-weight":"bold"},children:"Enter Url"}),Object(b.jsx)("input",{type:"text",name:"url",value:n.url,onChange:function(t){o(Object(a.a)(Object(a.a)({},n),{},Object(c.a)({isInValidUrl:!1},t.target.name,t.target.value)))}}),Object(b.jsx)("div",{className:"errorMsg",children:n.isInValidUrl&&Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:n.errMsg})})}),Object(b.jsx)("input",{type:"submit",className:"button",value:"Generate Url",onClick:function(t){t.preventDefault(),console.log(t),s(n.url)}})]})]}),2==n.showWhat&&Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsx)("h3",{children:"URL Shortner"}),Object(b.jsxs)("form",{method:"post",name:"url",onSubmit:s,children:[Object(b.jsx)("label",{id:"enterUrl",style:{"font-weight":"bold"},children:"Short Url"}),Object(b.jsx)("input",{type:"text",style:{"margin-bottom":"12px"},name:"url",value:n.shortUrl}),Object(b.jsx)("input",{type:"submit",style:{"margin-bottom":"12px"},className:"button",value:"Click To Visit",onClick:function(t){t.preventDefault(),console.log(t),window.open(n.shortUrl,"_blank")}}),Object(b.jsx)("input",{type:"submit",className:"button",value:"Go Back",onClick:function(t){t.preventDefault(),o(Object(a.a)(Object(a.a)({},n),{},{showWhat:1}))}})]})]})]})})};s.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b3b69631.chunk.js.map