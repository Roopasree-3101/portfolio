(() => {
 const root=document.documentElement, theme=document.getElementById("themeToggle");
 const menu=document.getElementById("menuToggle"), links=document.getElementById("navLinks");
 let saved=null; try{saved=localStorage.getItem("portfolio-theme")}catch(e){}
 if(saved==="dark")root.setAttribute("data-theme","dark");
 function refresh(){if(!theme)return;const dark=root.getAttribute("data-theme")==="dark";theme.textContent=dark?"☀":"☾";theme.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme");}
 refresh();
 if(theme)theme.addEventListener("click",()=>{const dark=root.getAttribute("data-theme")==="dark";if(dark)root.removeAttribute("data-theme");else root.setAttribute("data-theme","dark");try{localStorage.setItem("portfolio-theme",dark?"light":"dark")}catch(e){}refresh()});
 if(menu&&links){menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"✕":"☰"});links.querySelectorAll("a").forEach(a=>{if(a.getAttribute("href")===(location.pathname.split("/").pop()||"index.html"))a.classList.add("active");a.addEventListener("click",()=>{links.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰"})})}
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
})();
