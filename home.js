const Super=document.querySelector(".navbar_title")
const Cars=document.querySelector(".navbar_title2")
const Content=document.querySelector(".content")
const Tepaga=document.querySelector(".tepaga")
const Category=document.querySelectorAll(".category")
const body=document.querySelector("body")
window.addEventListener("DOMContentLoaded",()=>{
    Tepaga.style.marginBottom="190px"
})
Category.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        item.style.width="270px"
        item.style.height="200px"
        item.style.transition="1s"
    })
    item.addEventListener("mouseout",()=>{
        item.style.width="250px"
        item.style.height="180px"
        item.style.transition="1s"

    })
})
const mouseOver=()=>{
    Super.classList.remove("car")
    Cars.classList.remove("car")
    Cars.style.transition="1s"
    Super.style.transition="1s"

}
Super.addEventListener("mouseover",()=>{
    Cars.classList.remove("car")
    Super.classList.add("car")
    Super.style.transition="1s"

    
})
Cars.addEventListener("mouseover",()=>{
    Super.classList.remove("car")
    Cars.classList.toggle("car")
    Cars.style.transition="1s"


})
Cars.addEventListener("mouseout",()=>{
    mouseOver()

})
Super.addEventListener("mouseout",()=>{
    mouseOver()
})
Content.addEventListener("click",()=>{
    Content.classList.add("black")
})
window.addEventListener("scroll",()=>{
    Content.classList.remove("black")
})
window.addEventListener("scroll",(e)=>{
    if (scrollY>200) {
        setTimeout(() => {
            Tepaga.style.marginBottom="60px"
        }, 100);
        Tepaga.classList.remove("hidden")
        // Tepaga.style.transition="1s"

    }
    else{
        Tepaga.style.marginBottom="190px"
        Tepaga.style.transition="1s"
        setTimeout(() => {
            Tepaga.classList.add("hidden")
        }, 100);
    }

})
Tepaga.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        transition:"1s"
    })
})