const Super=document.querySelector(".navbar_title")
const Cars=document.querySelector(".navbar_title2")
const Background=document.querySelectorAll(".background")
const Tepaga=document.querySelector(".tepaga")
const Navbar=document.querySelector(".navbar")
const Top=document.querySelector(".top")

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
Background.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        item.style.width="97%"
        item.style.margin="auto"
        item.style.transition="1s"
        item.style.backgroundColor="rgba(0,0,0,0.5)"
        Top.style.marginTop="100px"
    })
    item.addEventListener("mouseout",()=>{
        item.style.width="80%"
        item.style.transition="1s"
        item.style.backgroundColor="rgba(255, 253, 253, 0)" 
    })
  
})
window.addEventListener("scroll",(e)=>{
    if (scrollY>200) {
        setTimeout(() => {
            Tepaga.style.marginBottom="60px"
        }, 100);
        Tepaga.classList.remove("hidden")
        Tepaga.style.transition="1s"

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