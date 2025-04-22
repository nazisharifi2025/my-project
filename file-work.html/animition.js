const Divs = document. querySelectorAll(".mine");
const obsever = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("opacity-100");
        entry.target.classList.add("rotate-y-100")
    })
},{
    threshold:1
});
Divs.forEach(div=>{
    obsever.observe(div);
})