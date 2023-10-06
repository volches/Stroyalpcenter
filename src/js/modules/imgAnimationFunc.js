import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function imgAnimationFunc() {
    gsap.to('.directions__img', {
        scale: 1.3,
        rotation:5,
        duration:5,
        scrollTrigger: {
            trigger:'.directions__img',
            start:"top 90%",
            end: "bottom 1%",
            scrub: 4,
            toggleActions: "restart none none none",
            // markers: true
        } 
    })
    
    
    gsap.to('.projects__img', {
        scale: 1.3,
        rotation:3,
        duration:5,
        scrollTrigger: {
            trigger:'.projects__img',
            start:"top 90%",
            end: "bottom 1%",
            scrub: 4,
            toggleActions: "restart none none none",
            // markers: true
        } 
    })

    gsap.to('.contacts__img', {
        scale: 1.3,
        rotation:3,
        duration:5,
        scrollTrigger: {
            trigger:'.contacts__img',
            start:"top 90%",
            end: "bottom 1%",
            scrub: 4,
            toggleActions: "restart none none none",
            // markers: true
        } 
    })
    
}

export default imgAnimationFunc;