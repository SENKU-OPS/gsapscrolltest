gsap.registerPlugin("ScrollTrigger");

const anim1 = document.querySelectorAll(".anim1");
const anim2 = document.querySelectorAll(".anim2");
const anim3 = document.querySelectorAll(".anim3");
const anim4 = document.querySelectorAll(".anim4");
const anim5 = document.querySelectorAll(".anim5");
const anim6 = document.querySelectorAll(".anim6");
const anim7 = document.querySelectorAll(".anim7");
const anim8 = document.querySelectorAll(".anim8");
const anim9 = document.querySelectorAll(".anim9");
const anim10 = document.querySelectorAll(".anim10");
const anim11 = document.querySelectorAll(".anim11");
const anim12 = document.querySelectorAll(".anim12");
const anim13 = document.querySelectorAll(".anim13");
const anim14 = document.querySelectorAll(".anim14");
const anim15 = document.querySelectorAll(".anim15");
const anim16 = document.querySelectorAll(".anim16");
const dec = document.querySelector(".dec");
const card = document.querySelector(".third__card");
const cardHeader = document.querySelector(".third__card-header");
const cardContent = document.querySelector(".third__card-content");









const t1 = gsap.timeline();

t1.from(anim1, { duration: .6, x: "100%", opacity: 0, stagger: .2 })
    .from(anim3, { duration: .6, y: "100%", opacity: 0, stagger: .2 })
    .from(anim4, { duration: .3, opacity: 0, stagger: .2 })



const t2 = gsap.timeline({

    scrollTrigger: {
        trigger: anim6,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse"

    }
})



t2.from(anim6, {
        x: "100%",
        duration: .7,

        opacity: 0,


    })
    .from(anim7, {
        y: "100%",
        duration: .2,
        opacity: 0
    })
    .from(anim8, {
        y: "100%",
        duration: .2,
        opacity: 0
    })




gsap.from(anim9, {
    scrollTrigger: {
        trigger: anim9,
        start: "top 50%",
        end: "top 20%",
        scrub: 2,

    },
    x: "-100%",
    opacity: 0
})
gsap.from(anim11, {
    scrollTrigger: {
        trigger: anim11,
        start: "top 80%",
        end: "top 40%",
        scrub: 2,


    },
    x: "-100%",
    opacity: 0,
    ease: "back.out(3)"

})
gsap.from(anim12, {
    scrollTrigger: {
        trigger: anim12,
        start: "top 80%",
        end: "top 40%",
        scrub: 2,


    },
    x: "-100%",
    opacity: 0,
    ease: "back.out(8)"

})
gsap.from(anim13, {
    scrollTrigger: {
        trigger: anim13,
        start: "top 80%",
        end: "top 40%",
        scrub: 2,


    },
    x: "-100%",
    y: "-120%",
    opacity: 0,
    ease: "back.out(4)"

})

const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: anim14,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play reverse play reverse",

    }
})

t3.from(anim14, { x: "-100%", duration: .7, opacity: 0 })
    .from(anim15, { duration: .5, x: "-50%", opacity: 0 })
    .from(anim16, { duration: .5, y: "100%", opacity: 0 })


card.addEventListener("mouseover", () => {
    dec.style.transform = "translateY(0%) scaleX(1) scaleY(1)";
    dec.style.transition = "transform .3s ease 0s";
    cardHeader.style.transition = "transform .3s ease 0s";
    cardHeader.style.transform = "translateY(0%)";
    card.style.boxShadow = ".6rem .6rem 0rem var(--red-color)";
    card.style.transition = "box-shadow .3s ease .25s";
    cardContent.style.transition = "color .5s ease ";
    cardContent.style.color = "var(--white-color)";


});
card.addEventListener("mouseout", () => {
    dec.style.transform = "translateY(-20%) scaleX(.2) scaleY(.4)";
    cardHeader.style.transform = "translateY(-50%)";
    card.style.boxShadow = "0rem 0rem 0rem var(--red-color)";
    cardContent.style.color = "var(--blue-color)";
    cardHeader.style.transition = "transform .3s ease .2s";
    dec.style.transition = "transform .3s ease .2s";
    card.style.transition = "box-shadow .3s ease ";

})