var heading = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500
})

heading.add({
    targets: '#nav-section, .heading-logo',
    opacity: 0
})
.add({
    targets: '.one',
    translateX: 1625,
    delay: anime.stagger(100)
})
.add({
    targets: '.heading-logo',
    opacity: 100,
    translateX: 575,
    rotate: 1080
})
.add({
    targets: '.heading-div',
    opacity: 0,
    duration: 3500
})
.add({
    targets: '#nav-section',
    opacity: 100,
    duration: 100000
})







