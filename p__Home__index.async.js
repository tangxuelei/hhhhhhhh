"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{86587:function(S,x,r){r.r(x);var y=r(15009),_=r.n(y),M=r(99289),c=r.n(M),O=r(5574),j=r.n(O),B=r(39531),A=r(97269),i=r(5966),Z=r(97462),U=r(4393),K=r(42867),v=r(96074),R=r(71230),d=r(15746),T=r(14726),m=r(67294),e=r(85893);x.default=function(){var I=(0,m.useState)([]),f=j()(I,2),g=f[0],F=f[1],L=(0,m.useState)([]),C=j()(L,2),h=C[0],P=C[1],a=(0,m.useRef)();window.form=a;var D=.45,p=.15,W=[{title:"\u7269\u54C1\u540D\u79F0",dataIndex:"item",request:function(){var s=c()(_()().mark(function t(){return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",[{value:"65\u7BB1\u5B50",label:"65\u7BB1\u5B50"},{value:"55\u7BB1\u5B50",label:"55\u7BB1\u5B50"},{value:"\u7EB3\u5361",label:"\u7EB3\u5361"},{value:"\u4E71\u6597",label:"\u4E71\u6597"}]);case 1:case"end":return u.stop()}},t)}));function n(){return s.apply(this,arguments)}return n}(),editable:function(n,t,l){return!0},width:"15%"},{title:"\u62CD\u5356\u4EF7\u683C",dataIndex:"price",editable:function(n,t,l){return!0},width:"15%"},{title:"\u8C01\u62CD\u7684",dataIndex:"person",editable:function(n,t,l){return!0},width:"15%"},{title:"\u662F\u5426\u5185\u90E8\u4EBA\u5458\u62CD",dataIndex:"isneibu",request:function(){var s=c()(_()().mark(function t(){return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",[{value:"\u662F",label:"\u662F"},{value:"\u5426",label:"\u5426"}]);case 1:case"end":return u.stop()}},t)}));function n(){return s.apply(this,arguments)}return n}(),editable:function(n,t,l){return!0},width:"15%"},{title:"\u5E94\u9000\u6B3E",render:function(n,t){return console.log(t),t.isneibu==="\u5426"?"-":t.price*(1-D)},editable:function(n,t,l){return!1},width:"15%"},{title:"\u64CD\u4F5C",valueType:"option",width:200,render:function(n,t,l,u){return[(0,e.jsx)("a",{onClick:function(){var o;u==null||(o=u.startEditable)===null||o===void 0||o.call(u,t.id)},children:"\u7F16\u8F91"},"editable"),(0,e.jsx)("a",{onClick:function(){P(h.filter(function(o){return o.id!==t.id}))},children:"\u5220\u9664"},"delete")]}}],w=function(){var n=0,t=0;h.forEach(function(l){n+=l.price*1,l.isneibu==="\u662F"&&(t+=l.price*(1-D))}),a.current.setFieldValue("p2",n*(1-p)),a.current.setFieldValue("p3",n*(1-p)+a.current.getFieldValue("p1")*1),a.current.setFieldValue("p6",(n*(1-p)+a.current.getFieldValue("p1")*1)/a.current.getFieldValue("p5")),a.current.setFieldValue("p8",t),a.current.setFieldValue("p7",(n*(1-p)+a.current.getFieldValue("p1")*1-t)/(a.current.getFieldValue("p5")*1+1))};return(0,e.jsxs)(U.Z,{extra:(0,e.jsx)(K.default,{}),bordered:!0,hoverable:!0,style:{padding:0},children:[(0,e.jsx)(v.Z,{dashed:!0,orientation:"center",children:"\u62CD\u5356\u7EDF\u8BA1 "}),(0,e.jsx)(B.Z,{defaultSize:"small",rowKey:"id",recordCreatorProps:{position:"bottom",record:function(){return{id:(Math.random()*1e6).toFixed(0)}}},columns:W,request:c()(_()().mark(function s(){return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{data:[{id:"112023",index:0,item:"65\u7BB1\u5B50",price:"1000",person:"\u5FD8\u5DDD",isneibu:"\u662F"},{id:"112024",index:0,item:"65\u7BB1\u5B50",price:"2000",person:"\u5FD8\u5DDD",isneibu:"\u5426"}],success:!0});case 1:case"end":return t.stop()}},s)})),value:h,onChange:P,editable:{type:"multiple",editableKeys:g,onSave:function(){var s=c()(_()().mark(function t(l,u,E){return _()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:case"end":return b.stop()}},t)}));function n(t,l,u){return s.apply(this,arguments)}return n}(),onChange:F}}),(0,e.jsx)(v.Z,{dashed:!0,orientation:"center",children:"\u94B1\u7684\u7EDF\u8BA1"}),(0,e.jsxs)(A.A,{style:{padding:20},submitter:!1,size:"small",formRef:a,initialValues:{p1:1e4,p0:D,p4:p},children:[(0,e.jsxs)(R.Z,{gutter:12,children:[(0,e.jsxs)(d.Z,{span:8,children:["  ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u6D3B\u52A8\u4EBA\u6570",name:"p5"})]}),(0,e.jsxs)(d.Z,{span:8,children:["  ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u5185\u62CD\u603B\u4EF7",name:"p1"})]}),(0,e.jsxs)(d.Z,{span:8,children:[" ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u516C\u62CD\u603B\u4EF7(\u9664\u7B11\u4E66\u7A0E)",name:"p2",disabled:!0})]}),(0,e.jsxs)(d.Z,{span:8,children:[" ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u5185\u62CD+\u516C\u62CD",name:"p3",disabled:!0})]}),(0,e.jsxs)(d.Z,{span:8,children:["  ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u5185\u90E8\u4EF7",name:"p0",disabled:!0})]}),(0,e.jsxs)(d.Z,{span:8,children:[" ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u7B11\u4E66\u7A0E",name:"p4",disabled:!0})]}),(0,e.jsxs)(d.Z,{span:8,children:["  ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u8865\u8D34\u603B\u989D",name:"p8",disabled:!0})]}),(0,e.jsxs)(d.Z,{span:8,children:["  ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u5BA2\u670D\u5E94\u53D1/\u6E29\u67D4\u5E94\u56DE\u6536",name:"p6",disabled:!0})]}),(0,e.jsxs)(d.Z,{span:8,children:["  ",(0,e.jsx)(i.Z,{style:{width:"100%"},label:"\u5B9E\u9645\u5DE5\u8D44(\u8D22\u52A11.5,\u6307\u63251.5)",name:"p7",disabled:!0})]})]}),(0,e.jsx)(T.ZP,{type:"primary",onClick:w,children:"\u8BA1\u7B97"}),(0,e.jsx)(Z.Z,{name:["p6","p7","p8","p5"],children:function(n){var t=n.p6,l=n.p7,u=n.p8,E=n.p5;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("h1",{children:["\u5BA2\u670D\u53D1\u5DE5\u8D44:",(0,e.jsx)("span",{style:{color:"red"},children:t})]}),(0,e.jsxs)("h1",{children:["\u5B9E\u9645\u5DE5\u8D44:",(0,e.jsx)("span",{style:{color:"red"},children:l})]}),(0,e.jsxs)("h1",{children:["\u9000\u7ED9\u6E29\u67D4:",(0,e.jsx)("span",{style:{color:"red"},children:u/E})]}),(0,e.jsxs)("h1",{children:["\u6307\u6325/\u8D22\u52A1\u5DE5\u8D44:",(0,e.jsx)("span",{style:{color:"red"},children:l*1.5})]})]})}})]})]})}}}]);
