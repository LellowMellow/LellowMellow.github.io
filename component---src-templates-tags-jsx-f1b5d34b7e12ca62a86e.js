"use strict";(self.webpackChunklellowmellow_blog=self.webpackChunklellowmellow_blog||[]).push([[575],{7959:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(7294),a=n(5086),i=n(1882);const l=a.default.div.withConfig({displayName:"TabBar__TabBarWrapper",componentId:"sc-iq0kec-0"})(["display:flex;width:100%;height:2.5rem;box-shadow:",";user-select:none;-webkit-user-select:none;"],(e=>e.theme.tabBar)),o=a.default.div.withConfig({displayName:"TabBar__TabWrapper",componentId:"sc-iq0kec-1"})(["height:auto;display:flex;align-items:center;border-bottom:",";border-top:",";"],(e=>e.$isSelected?e.theme.tabBarSelected:"none"),(e=>e.$isSelected?"0.125rem solid #0000":"none")),m=a.default.button.withConfig({displayName:"TabBar__TabButton",componentId:"sc-iq0kec-2"})(["display:flex;align-items:center;flex:0 0 auto;white-space:nowrap;height:1.75rem;border-radius:0.25rem;font-size:0.875rem;line-height:1.2;padding:0 0.5rem;font-weight:500;gap:0.375rem;color:",";&:hover{background:",";}&:active{background:",";}transition:20ms ease-in 0s;"],(e=>e["aria-selected"]?e.theme.text:e.theme.weekText),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive));var s=e=>{let{isGridView:t,changeToGrid:n,changeToList:a,isSeries:s}=e;return r.createElement(l,{role:"tablist"},s||r.createElement(o,{$isSelected:t},r.createElement(m,{role:"tab","aria-selected":t,onClick:n},r.createElement(i.Z,{iconName:"TbLayoutGrid",size:"1rem"}),r.createElement("span",null,"Grid view"))),r.createElement(o,{$isSelected:!t},r.createElement(m,{role:"tab","aria-selected":!t,onClick:a},r.createElement(i.Z,{iconName:"TbList",size:"1rem"}),r.createElement("span",null,"List view"))))},c=n(1883);const d=a.default.div.withConfig({displayName:"CardBlock__CardWrapper",componentId:"sc-1mdsdpa-0"})(["width:100%;display:flex;color:",";text-decoration:none;line-height:1.5;cursor:pointer;box-shadow:",";border-radius:0.25rem;background:",";overflow:hidden;flex-direction:column;&:hover{background:",";}&:active{background:",";}transition:20ms ease-in 0s;user-select:none;-webkit-user-select:none;"],(e=>e.theme.text),(e=>e.theme.cardShadow),(e=>e.theme.cardBackground),(e=>e.theme.cardHover),(e=>e.theme.cardActive)),p=a.default.div.withConfig({displayName:"CardBlock__CardThumbnail",componentId:"sc-1mdsdpa-1"})(["width:100%;height:12rem;background:",";color:",";display:flex;align-items:center;justify-content:center;"],(e=>e.theme.text),(e=>e.theme.background)),h=a.default.p.withConfig({displayName:"CardBlock__Title",componentId:"sc-1mdsdpa-2"})(["font-size:0.875rem;width:100%;padding:0.5rem 0.625rem 0.375rem;line-height:1.5;font-weight:500;"]),g=a.default.div.withConfig({displayName:"CardBlock__InfoWrapper",componentId:"sc-1mdsdpa-3"})(["display:flex;flex-direction:column;gap:0.125rem;padding:0 0.375rem 0.75rem;"]),u=a.default.p.withConfig({displayName:"CardBlock__InfoText",componentId:"sc-1mdsdpa-4"})(["width:100%;font-size:0.75rem;padding:0 0.375rem;line-height:2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]),f=a.default.div.withConfig({displayName:"CardBlock__TagsWrapper",componentId:"sc-1mdsdpa-5"})(["display:flex;flex-direction:row;align-items:left;gap:0.375rem;padding:0.25rem 0.375rem;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;&:-webkit-scrollbar{display:none;}"]),w=a.default.button.withConfig({displayName:"CardBlock__Tag",componentId:"sc-1mdsdpa-6"})(["display:flex;align-items:center;flex-shrink:0;height:1.125rem;border-radius:0.25rem;padding:0 0.375rem;font-size:0.75rem;white-space:nowrap;background:",";outline:0.25rem solid #0000;color:",";&:hover{outline:0.25rem solid ",";}&:active{outline:0.25rem solid ",";}transition:20ms ease-in 0s;"],(e=>e.theme.tag),(e=>e.theme.text),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive));var b=e=>{let{to:t,title:n,date:a,icon:l,tags:o,detail:m}=e;return r.createElement(d,{onClick:()=>(0,c.navigate)(t)},r.createElement(p,null,r.createElement(i.Z,{iconName:l,size:"2rem"})),r.createElement(h,null,n),r.createElement(g,null,r.createElement(u,null,a),r.createElement(f,null,o&&o.map((e=>r.createElement(w,{key:e,onClick:t=>((e,t)=>{t.stopPropagation(),(0,c.navigate)("/tags/"+e+"/")})(e,t)},e)))),r.createElement(u,null,(b=200,(null==(s=m)?void 0:s.length)>b?s.slice(0,b-1)+"...":s))));var s,b};const x=a.default.a.withConfig({displayName:"ListBlock__BlockWrapper",componentId:"sc-ictx0u-0"})(["width:100%;height:1.875rem;display:flex;align-items:center;gap:0.25rem;cursor:pointer;border-radius:0.25rem;color:",";background:",";overflow:hidden;margin:0.0625rem 0;padding:0 0.25rem;flex-direction:row;&:hover{background:",";}&:active{background:",";}& > *{flex:0 0 auto;}transition:20ms ease-in 0s;"],(e=>e.theme.weekIcon),(e=>e.theme.background),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive)),v=a.default.span.withConfig({displayName:"ListBlock__Title",componentId:"sc-ictx0u-1"})(["font-size:1rem;line-height:1.5;font-weight:500;color:",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto;"],(e=>e.theme.text)),y=a.default.span.withConfig({displayName:"ListBlock__InfoText",componentId:"sc-ictx0u-2"})(["font-size:0.75rem;padding:0 0.375rem;line-height:1.5;color:",";"],(e=>e.theme.text));var k=e=>{let{to:t,title:n,date:a,icon:l,post:o}=e;return r.createElement(x,{as:c.Link,to:t},r.createElement(i.Z,{iconName:l,size:"1.375rem"}),r.createElement(v,null,n),r.createElement(y,null,a||o+" posts"))};const E=a.default.div.withConfig({displayName:"NoData__NoResult",componentId:"sc-12pc23e-0"})(["margin:3rem 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:0.875rem;line-height:1.5;text-align:center;span:nth-child(1){font-weight:500;color:",";}span:nth-child(2){color:",";}button{line-height:1.5;font-size:0.875rem;color:",";}"],(e=>e.theme.weekText),(e=>e.theme.searchText),(e=>e.theme.blue));var _=e=>{let{main:t,series:n}=e;return r.createElement(E,null,r.createElement("span",null,t&&"No Posts",n&&"No Series"),r.createElement("span",null,t&&"There are no posts in this blog.",n&&"There are no series in this blog."),r.createElement("button",{onClick:()=>(0,c.navigate)("/")},"Go to main page"))};const C=a.default.h2.withConfig({displayName:"Database__Title",componentId:"sc-5a1x9n-0"})(["flex:0 1 auto;margin-top:4rem;margin-bottom:0.25rem;padding:0.25rem 0.125rem;font-weight:600;font-size:1.875rem;color:",";line-height:1.3;"],(e=>e.theme.text)),T=a.default.div.withConfig({displayName:"Database__GridWrapper",componentId:"sc-5a1x9n-1"})(["margin-top:1rem;margin-bottom:0.25rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(16.25rem,1fr));gap:1rem;"]),N=a.default.div.withConfig({displayName:"Database__ListWrapper",componentId:"sc-5a1x9n-2"})(["margin-top:0.25rem;margin-bottom:0.25rem;display:flex;flex-direction:column;"]);var I=e=>{let{data:t,main:n=!1,series:a=!1,tags:i=!1,seriesPost:l=!1}=e;const{0:o,1:m}=(0,r.useState)(!a),{0:c,1:d}=(0,r.useState)(10),{0:p,1:h}=(0,r.useState)([]),g=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&d((e=>Math.min(e+10,t.length)))}),{root:null,rootMargin:"0px",threshold:1}),n=g.current;return n&&e.observe(n),()=>{n&&e.unobserve(n)}}),[t.length]),(0,r.useEffect)((()=>{const e=t.slice(0,c).map((e=>a?{key:e.fieldValue,to:"/series/"+e.fieldValue+"/",icon:"TbFolderOpen",title:e.fieldValue,post:e.totalCount}:{key:e.node.id,to:e.node.fields.slug,title:e.node.frontmatter.title,date:new Date(e.node.frontmatter.date).toLocaleDateString(),icon:e.node.frontmatter.icon,tags:e.node.frontmatter.tags,detail:e.node.excerpt}));h(e)}),[c,t,a]),r.createElement(r.Fragment,null,r.createElement(C,null,n&&"All Posts",a&&"All Series"),r.createElement(s,{isGridView:o,isSeries:a,changeToGrid:()=>m(!0),changeToList:()=>m(!1)}),!t.length&&r.createElement(_,{main:n,series:a}),o?r.createElement(T,null,p.map((e=>r.createElement(b,e)))):r.createElement(N,null,p.map((e=>r.createElement(k,e)))),c<t.length&&r.createElement("div",{ref:g,style:{height:"1rem",marginBottom:"10rem"}}))}},9439:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7294),a=n(5086),i=n(1882),l=n(9349),o=n(1883);const m=a.default.div.withConfig({displayName:"Property__PropertyConatainer",componentId:"sc-fn9kll-0"})(["display:flex;flex-direction:column;margin-top:1rem;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:",";"],(e=>e.theme.divider)),s=a.default.div.withConfig({displayName:"Property__PropertyWrapper",componentId:"sc-fn9kll-1"})(["width:100%;display:flex;flex-direction:row;align-items:center;height:2.125rem;margin-bottom:0.25rem;"]),c=a.default.div.withConfig({displayName:"Property__PropertyTitle",componentId:"sc-fn9kll-2"})(["width:10rem;height:100%;display:flex;flex-direction:row;align-items:center;gap:0.375rem;padding:0 0.375rem;color:",";font-size:0.875em;font-weight:500;& > svg{color:",";}"],(e=>e.theme.weekText),(e=>e.theme.weekIcon)),d=a.default.div.withConfig({displayName:"Property__PropertyValue",componentId:"sc-fn9kll-3"})(["flex:1 1 auto;height:100%;padding:0.375rem 0.5rem;display:flex;flex-direction:row;align-items:center;font-size:0.875em;color:",";gap:0.375rem;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;&:-webkit-scrollbar{display:none;}"],(e=>e.theme.text)),p=a.default.a.withConfig({displayName:"Property__PropertyLink",componentId:"sc-fn9kll-4"})(["flex:1 1 auto;height:100%;padding:0.375rem 0.5rem;display:flex;flex-direction:row;align-items:center;font-size:0.875em;color:",";text-decoration:",";cursor:",";"],(e=>e.theme.weekText),(e=>e.$isActive?"underline":"none"),(e=>e.$isActive?"pointer":"default")),h=a.default.button.withConfig({displayName:"Property__Tag",componentId:"sc-fn9kll-5"})(["height:100%;display:flex;align-items:center;color:",";background:",";padding:0 0.375rem;border-radius:0.25rem;&:hover{background:",";}&:active{background:",";}transition:20ms ease-in 0s;"],(e=>e.theme.text),(e=>e.theme.tag),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive));var g=e=>{let{date:t,tags:n,series:a}=e;return r.createElement(m,null,r.createElement(s,null,r.createElement(c,null,r.createElement(i.Z,{iconName:"TbUserEdit",size:"1rem"})," ",r.createElement("span",null,"Author")),r.createElement(d,null,"@",l.author)),r.createElement(s,null,r.createElement(c,null,r.createElement(i.Z,{iconName:"TbCalendarMonth",size:"1rem"})," ",r.createElement("span",null,"Date")),r.createElement(d,null,t)),r.createElement(s,null,r.createElement(c,null,r.createElement(i.Z,{iconName:"TbLayoutList",size:"1rem"})," ",r.createElement("span",null,"Series")),r.createElement(p,{$isActive:a,onClick:()=>(0,o.navigate)("/series/"+a+"/")},a||"-")),r.createElement(s,null,r.createElement(c,null,r.createElement(i.Z,{iconName:"TbHash",size:"1rem"})," ",r.createElement("span",null,"Tags")),r.createElement(d,null,n?n.map((e=>r.createElement(h,{key:e,onClick:()=>(0,o.navigate)("/tags/"+e+"/")},e))):"-")))};const u=(0,a.default)(i.Z).withConfig({displayName:"MainTitle__MainIcon",componentId:"sc-1wzqsqw-0"})(["margin-top:5.75rem;padding:0.25rem;color:",";"],(e=>e.theme.icon)),f=a.default.h1.withConfig({displayName:"MainTitle__Title",componentId:"sc-1wzqsqw-1"})(["margin-top:2.625rem;margin-bottom:0.5rem;font-weight:700;font-size:2.5rem;line-height:1.2;padding:0 0.125rem;color:",";white-space:pre-wrap;word-break:break-word;"],(e=>e.theme.text)),w=a.default.div.withConfig({displayName:"MainTitle__Callout",componentId:"sc-1wzqsqw-2"})(["width:100%;padding:1rem 1rem 1rem 0.75rem;margin:0.25rem 0;border-radius:0.25rem;border:",";color:",";background-color:transparent;display:flex;flex-direction:row;white-space:pre-wrap;word-break:break-word;flex-shrink:0;flex-grow:0;"],(e=>e.theme.calloutBorder),(e=>e.theme.icon)),b=a.default.div.withConfig({displayName:"MainTitle__CalloutTextWrapper",componentId:"sc-1wzqsqw-3"})(["display:flex;flex-direction:column;min-width:0px;width:100%;padding:0 0.125rem;margin-left:0.5rem;color:",";line-height:1.5;text-align:left;"],(e=>e.theme.text));var x=e=>{let{type:t,title:n,description:a,icon:l,date:o,tags:m,series:s}=e;return r.createElement(r.Fragment,null,r.createElement(u,{iconName:l,size:"4.875rem"}),r.createElement(f,null,n),"main"===t&&r.createElement(w,null,r.createElement(i.Z,{iconName:"TbCode",size:"1.5rem"}),r.createElement(b,null,a)),"post"===t&&r.createElement(g,{date:o,tags:m,series:s}))}},2810:function(e,t,n){n.r(t);var r=n(7294),a=n(9439),i=n(7959);t.default=e=>{let{data:t,pageContext:n}=e;const{tag:l}=n,o=t.allMarkdownRemark.edges;return r.createElement(r.Fragment,null,r.createElement(a.Z,{type:"main",title:"Tag ↘\n"+l,description:"There are "+o.length+" posts tagged with '"+l+"'",icon:"TbHash"}),r.createElement(i.Z,{data:o,tagPost:!0}))}}}]);
//# sourceMappingURL=component---src-templates-tags-jsx-f1b5d34b7e12ca62a86e.js.map