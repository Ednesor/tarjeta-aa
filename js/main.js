let tl = gsap.timeline()

tl.to(".sello", {
    duration: 2,
    x: "600px",
    transform: "scaleX(-1)",
})
tl.to(".tapa", {
    duration: 2,
    y: "-100%",
    transform: "scaleY(-1)",
})
tl.to(".tapa", {
    duration: 0,
    zIndex: 1,
})
tl.to(".carta", {
    duration: 2,
    y: "-80%",
})
tl.to(".carta", {
    zIndex: 10,
    duration: 2,
    y: "0%",
    x: "-20%",
    width: "50%",
})

