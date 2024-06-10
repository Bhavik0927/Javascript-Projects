let box = document.querySelector('.rectangle');

box.addEventListener('mousemove', (details)=> {

    let reactangleLocation = box.getBoundingClientRect();
    // Jaha pe mouse hai
    let insideBoxval = Math.floor(details.clientX - reactangleLocation.left);

    if (insideBoxval < reactangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, reactangleLocation.width / 2, 255, 0, insideBoxval);
        gsap.to(box, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })
    } else {
        var blueColor = gsap.utils.mapRange(
            reactangleLocation.width / 2,
            reactangleLocation.width,
            0,
            255,
            insideBoxval
        );
        gsap.to(box, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
})

box.addEventListener('mouseleave',()=>{
    gsap.to(box, {
        backgroundColor:"#fff",
        ease:Power4
    })
})