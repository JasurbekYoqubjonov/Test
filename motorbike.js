const Super=document.querySelector(".navbar_title")
const Cars=document.querySelector(".navbar_title2")
const Tepaga=document.querySelector(".tepaga")
const Down=document.querySelectorAll(".dow")
// const Down2=document.querySelector(".down4")
// const Down3=document.querySelectorAll(".down5")
// const Down4=document.querySelector(".down6")
// const Down5=document.querySelector(".down7")
const linearText=document.querySelectorAll(".texts")
// const linearText2=document.querySelector(".linear_text2")
// const linearText3=document.querySelectorAll(".linear_text3")
// const linearText4=document.querySelector(".linear_text4")
// const linearText5=document.querySelector(".linear_text5")
const overlay=document.querySelectorAll(".line")
// const overlay2=document.querySelector(".overlay2")
// const overlay3=document.querySelector(".overlay3")
// const overlay4=document.querySelector(".overlay4")
// const overlay5=document.querySelector(".overlay5")
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
// Down.addEventListener("click",()=>{
//     overlay.classList.remove("hidden")
//     setTimeout(() => {
//         linearText.classList.toggle("hidden")
//     }, 500);
//     if (!linearText.classList.contains("hidden")) {
//         Down.style.transform="rotate(-180deg)"
//     }
//     else{
//         overlay.classList.add("hidden")
//         Down.style.transform="rotate(0deg)"
//     }
// })
// Down2.addEventListener("click",()=>{
//     overlay2.classList.remove("hidden")
//     setTimeout(() => {
//         linearText2.classList.toggle("hidden")
//     }, 500);
//     if (linearText2.classList.contains("hidden")) {
//         overlay2.classList.add("hidden")
//         Down2.style.transform="rotate(0deg)"
//     }
//     else{
//         Down2.style.transform="rotate(-180deg)"
//     }
// })
// Down3.addEventListener("click",()=>{
//     overlay3.classList.remove("hidden")
//     setTimeout(() => {
//         linearText3.classList.toggle("hidden")
//     }, 500);
//     if (linearText3.classList.contains("hidden")) {
//         overlay3.classList.add("hidden")
//         Down3.style.transform="rotate(0deg)"
//     }
//     else{
//         Down3.style.transform="rotate(-180deg)"
//     }
// })
// Down4.addEventListener("click",()=>{
//     overlay4.classList.remove("hidden")
//     setTimeout(() => {
//         linearText4.classList.toggle("hidden")
//     }, 500);
//     if (linearText4.classList.contains("hidden")) {
//         overlay4.classList.add("hidden")
//         Down4.style.transform="rotate(0deg)"
//     }
//     else{
//         Down4.style.transform="rotate(-180deg)"
//     }
// })
// Down3.forEach(down=>{
//     down.addEventListener("click",()=>{
//         linearText3.forEach(text=>{
//             if (down.id===text.id) {
//                 text.classList.remove("hidden")
//             }
//         })
//     })
// })
// Down5.addEventListener("click",()=>{
//     overlay5.classList.remove("hidden")
//     setTimeout(() => {
//         linearText5.classList.toggle("hidden")
//     }, 500);
//     if (linearText5.classList.contains("hidden")) {
//         overlay5.classList.add("hidden")
//         Down5.style.transform="rotate(0deg)"
//     }
//     else{
//         Down5.style.transform="rotate(-180deg)"
//     }
// })
Down.forEach(dow => {
    dow.addEventListener("click",()=>{
        linearText.forEach(text=>{
            overlay.forEach(line=>{
                if (dow.id===text.id && dow.id===line.id) {
                    line.classList.remove("hidden")
                    setTimeout(() => {
                        text.classList.toggle("hidden")
                    }, 500);
                    if (!text.classList.contains("hidden")) {
                        dow.style.transform="rotate(-180deg)"
                    }
                    else{
                        line.classList.add("hidden")
                        dow.style.transform="rotate(0deg)"
                    }
                    
                }
            })
        })
    })
});