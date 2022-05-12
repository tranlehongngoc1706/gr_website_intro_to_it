//homepage
let tl_1 = gsap.timeline({
    ScrollTrigger:{
        trigger: ".homepage_main"
    }
}) 

tl_1.from(".homepage_cover img" , {x:200,opacity:0,duration:1.5})
tl_1.from(".homepage_cover h1" , {x:300,opacity:0,duration:1},"=-1")


//cookie
const tl_2 = gsap.timeline({defaults:{
    duration: 0.75, 
    ease:"power2.out"}}) 

tl_2.fromTo('.cookie-container', 
         {scale:0}, 
         {scale: 1, 
          ease: "elastic.out(1,0.4)", 
          duration:1.0})

  .fromTo('.cookie',
         {opacity:0,
          x:-60, 
          rotation:'20deg'},
         {opacity:1,
          x:0,
          rotation:'0deg'},'<')

  .fromTo('.text',
         {opacity:0, 
          x:30}, 
         {opacity:1,
         x:0},'<')

const button = document.querySelector('button');
button.addEventListener('click',() =>{
    gsap.to('.cookie-container',
           {opacity:0,
            y:100,
            duration:0.9,
            ease:"power1.out"})
})


//