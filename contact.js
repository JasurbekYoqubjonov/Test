const Super=document.querySelector(".navbar_title")
const Cars=document.querySelector(".navbar_title2")
const Tepaga=document.querySelector(".tepaga")
const Btn=document.querySelector(".rightbox_btn")
const Form=document.querySelector("form")
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
Btn.addEventListener("click",()=>{
    Btn.style.padding="10px 15px"
})