var heading = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500
})

heading.add({
    targets: '#nav-section',
    opacity: 0
})
.add({
    targets: '.one',
    translateX: 1100,
    delay: anime.stagger(100)
})
.add({
    targets: '.two',
    translateX: 1200,
    delay: anime.stagger(100)
})
.add({
    targets: '.three',
    translateX: 1300,
    delay: anime.stagger(100)
})
.add({
    targets: '.heading-logo',
    translateY: -450,
    translateX: 1000,
    rotate: 1080
})
.add({
    targets: '.heading-div',
    opacity: 0,
    duration: 2000
})
.add({
    targets: '#nav-section',
    opacity: 100,
    duration: 100000
})







