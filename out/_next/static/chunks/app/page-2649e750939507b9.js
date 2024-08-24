(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5964:function(e,a,t){Promise.resolve().then(t.bind(t,7853))},7853:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var s=t(3827),r=t(1975),n=e=>{let{toggleDark:a,resumeLink:t}=e;return(0,s.jsxs)("nav",{className:"mb-10 flex justify-between p-5 w-full",children:[(0,s.jsx)("div",{className:"bg-neutral-50 shadow-md shadow-neutral-300 p-3 text-white rounded-md dark:bg-slate-700 dark:shadow-slate-950",children:(0,s.jsx)("h1",{className:"bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-bold",children:"J H"})}),(0,s.jsxs)("ul",{className:"flex items-center",children:[(0,s.jsx)("li",{className:"bg-neutral-200 dark:bg-slate-800 w-10 p-1 rounded-3xl shadow-inner shadow-gray-600 dark:shadow-black cursor-pointer",onClick:()=>a(),children:(0,s.jsx)(r.gLD,{className:"transition fill-black dark:fill-white dark:translate-x-4"})}),(0,s.jsx)("li",{className:"transition ease-in-out hover:scale-95",children:(0,s.jsx)("a",{href:t||"#",className:"bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-6",children:"Resume"})})]})]})},l=()=>(0,s.jsx)("footer",{className:"p-5 pt-12 bg-gradient-to-b dark:from-slate-800 from from-neutral-200 via-black to-black",children:(0,s.jsxs)("div",{className:"text-xs text-center",children:["This website was made and is maintained by Johan Hernandez.",(0,s.jsx)("br",{}),"For any questions, comments, or concerns, please email me at:",(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"mailto:johannjo2000@gmail.com",className:"text-sky-500 hover:text-sky-300",children:"johannjo2000@gmail.com"})]})}),i=t(6128),o=t(703),d={src:"/_next/static/media/error.cb743ba5.png",height:228,width:402,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAALklEQVR42mP49//v/Qd///9j+Pf/1a2br8GMd9euvQcz/j9/8R/M+Pv+/Z///wBZ1yZRARtmAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5};function c(e){let{project:a}=e,t=a.tags.map(e=>(0,s.jsx)("div",{className:"bg-sky-500 text-xs rounded-full py-1 px-3 inline-block m-1 text-white transition-transform transform hover:scale-105",children:e.name},e.name));return(0,s.jsx)("div",{className:"bg-gradient-to-br from-neutral-100 dark:from-slate-900 dark:to-slate-800 max-w-screen-xl overflow-hidden rounded-3xl my-12 mx-auto shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl",children:(0,s.jsxs)("div",{className:"md:flex group",children:[(0,s.jsx)("div",{className:"md:shrink-0 p-2 overflow-hidden",children:(0,s.jsx)(o.default,{src:a.img||d,alt:a.name,className:"rounded-3xl h-48 w-full object-cover md:h-full md:w-56 transition-transform transform group-hover:scale-110",width:1,height:1})}),(0,s.jsxs)("div",{className:"flex flex-col justify-between p-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{className:"text-3xl text-black dark:text-white font-sans font-bold transition-colors duration-200 group-hover:text-sky-500 flex items-center justify-between",children:[a.name,(0,s.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(i.RrF,{className:"scale-150 transition-transform transform hover:scale-175"})})]}),(0,s.jsx)("p",{className:"mt-4 text-md font-sans text-gray-700 dark:text-gray-300 leading-relaxed",children:a.description})]}),(0,s.jsx)("div",{className:"mt-4 flex flex-wrap",children:t})]})]})})}var h=t(4090);function m(){let[e,a]=(0,h.useState)([]),[t,r]=(0,h.useState)(""),[d,m]=(0,h.useState)(""),[x,f]=(0,h.useState)(!0);(0,h.useEffect)(()=>{(async()=>{m(await fetch("/api/images/johan").then(e=>e.json())),r(await fetch("/api/images/resume").then(e=>e.json())),a(await fetch("/api/projects").then(e=>e.json()))})()},[]);let u=e.sort((e,a)=>a.order-e.order).map(e=>(0,s.jsx)(c,{project:e},e.id));return(0,s.jsxs)("main",{className:x?"dark":"",children:[(0,s.jsxs)("section",{className:"transition bg-neutral-200 dark:bg-slate-800",children:[(0,s.jsx)(n,{toggleDark:()=>{f(!x)},resumeLink:t}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"font-mono text-black dark:text-white",children:"Hi, my name is"}),(0,s.jsx)("h2",{className:"text-5xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent p-2 font-bold animate-gradient-wave",children:"Johan Hernandez"}),(0,s.jsx)("h3",{className:"text-2xl p-2 text-black dark:text-white",children:"Aspiring Software Engineer"}),(0,s.jsx)("p",{className:"text-md p-5 leading-8 text-gray-600 dark:text-gray-400 ",children:"I am a Computer Science student at the University of Washington and Passionate about programming and solving problems alongside others. I love to learn new things every day and facing different kinds of challenges along the way. Connect with me and get to know me better!"})]}),(0,s.jsxs)("div",{className:"text-3xl flex justify-center gap-14 py-3 text-gray-700 dark:text-gray-400",children:[(0,s.jsx)("a",{href:"https://www.linkedin.com/in/johan253/",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(i._iD,{className:"transition hover:scale-105 hover:fill-blue-600"})}),(0,s.jsx)("a",{href:"https://github.com/johan253",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(i.RrF,{className:"transition hover:scale-105 hover:fill-black"})}),(0,s.jsx)("a",{href:"mailto:johannjo2000@gmail.com",children:(0,s.jsx)(i.Uh$,{className:"transition hover:scale-105 hover:fill-red-600"})})]}),(0,s.jsx)("div",{className:"relative mx-auto bg-gradient-to-b from-blue-900 rounded-full w-80 h-80 mt-4",children:(0,s.jsx)(o.default,{className:"scale-75 -translate-y-10 -translate-x-1.5 w-auto h-auto",src:d,alt:"Animated Image of Johan",width:1,height:1})})]}),(0,s.jsxs)("section",{className:"p-10 bg-neutral-200 dark:bg-slate-800 ",children:[(0,s.jsx)("h1",{className:"text-3xl text-left text-black dark:text-white font-bold",children:"Projects"}),u||"Projects failed to load... :("]}),(0,s.jsx)(l,{})]})}}},function(e){e.O(0,[779,259,570,971,69,744],function(){return e(e.s=5964)}),_N_E=e.O()}]);