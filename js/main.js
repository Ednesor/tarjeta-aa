let tl = gsap.timeline()

var selector = document.getElementById("clickarea");
console.log("selector", window.screen.width)

var size = {};
if (window.screen.width > 1000) {
    size = {
        width: "50%",
        y: "0%",
        x: "-20%",
        sello: "600px"
    }
}else{
    size = {
        width: "90%",
        y: "-20%",
        x: "-35%",
        sello: "150px",
    }
}

selector.addEventListener("click", onPress);

function onPress() {

    tl.to(".clickArea", {
        duration: 0,
        display: "none",
    })
    tl.to(".sello", {
        duration: 2,
        x: size.sello,
        transform: "scaleX(-1)",
        ease: "power2.inOut",
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
        ease: "back.inOut(1.7)"
    })
    tl.to(".carta", {
        zIndex: 10,
        duration: 2,
        y: size.y,
        x: size.x,
        width: size.width,
        ease: "power3.inOut",
    })
}

