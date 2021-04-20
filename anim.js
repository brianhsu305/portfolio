gsap.registerPlugin(ScrollTrigger);
tl = gsap.timeline();

tl.from('.stagger1', {
    y: '-30%',
    opacity: 0,
    duration: 3,
    stagger: .3,
    ease: Power4.easeOut  
})



gsap.from('.transition2', {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom',
        toggleActions: "restart",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: .3
})

gsap.from('.transition3', {
    scrollTrigger: {
        trigger: '.transition3',
        start: 'top bottom',
        toggleActions: "restart",
    },
    opacity: 0,
    x: -50,
    duration: 1.2,
    stagger: .3
})

gsap.from('.transition4', {
    scrollTrigger: {
        trigger: '.transition4',
        start: 'top bottom',
        toggleActions: "restart",
    },
    opacity: 0,
    scale: .1,
    ease: Power3.easeOut,
    duration: 2,
    stagger: .3
})


//navbar smooth scrolling using jquery
$('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        },800);
    }
})