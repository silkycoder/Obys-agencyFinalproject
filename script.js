function loadingAnimation(){
    
    var tl = gsap.timeline()
    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration: 0.6,
        delay: 0.5
    })
    tl.from('#line1-part1', {
        opacity: 0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0
    setInterval(() => {
        if(grow < 100){
           h5timer.innerHTML = grow++
        }else{
            h5timer.innerHTML = grow
        }
        
    }, 33);
        },
    })
    tl.to('.line h2',{
        opacity: 1,
        animationName: 'anime'
    })
    tl.to('#loader',{
        opacity:0,
        duration: 0.4,
        delay: 0
    })
    tl.from("#page1",{
        y: 1200,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        // ease: power4
    })
    tl.to("#loader",{
        display: "none"
    })
    tl.from(".hero h1, #hero3 h2",{
        y:120,
        stagger: 0.2
    })
    }
    function cursorAnimation(){
        document.addEventListener("mousemove", function(dets){
            gsap.to("#crsr",{
                left:dets.x,
                top:dets.y
            })
        })
        Shery.makeMagnet("#nav-part2 h4");
    }
    loadingAnimation()
    cursorAnimation()