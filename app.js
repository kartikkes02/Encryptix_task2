gsap.from("#box",{

    x:450,
    duration:2,
    delay:1
})

gsap.from(".name2",{

    x:-370,
    duration:3,
    delay:1
})

gsap.from(".name1",{

    y:-370,
    duration:3,
    delay:1,
    stagger:1
})

gsap.from(".pic1",{

    y:370,
    duration:4,
    delay:1
})

gsap.from(".part1 #c1",{

    x:-520,
    duration:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 50%"
    }
},"anim")
gsap.from(".part2 #c4",{

    x:990,
    duration:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 50%"
    }
},"anim")

gsap.from(".part1 #c2",{

    x:-520,
    duration:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 40%"
    }
},"an")
gsap.from(".part2 #c5",{

    x:990,
    duration:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 40%"
    }
},"an")

gsap.from(".part1 #c3",{

    x:-520,
    duration:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 20%"
    }
},"a")
gsap.from(".part2 #c6",{

    x:990,
    duration:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 20%"
    }
},"a")

gsap.from(".line2",{

    y:590,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 50%"
    }
},"anime")
gsap.from(".pro1",{

    x:1200,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 50%"
    }
},"anime")

gsap.from(".line3",{

    y:590,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 20%"
    }
},"animm")
gsap.from(".pro2",{

    x:-500,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 20%"
    }
},"animm")

gsap.from(".line4",{

    y:590,
    duration:4,
    delay:1,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 10%"
    }
},"animmm")
gsap.from(".pro3",{

    x:1200,
    duration:4,
    delay:1,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 10%"
    }
},"animmm")

gsap.from(".line5",{

    y:590,
    duration:5,
    delay:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 20%"
    }
},"animm")
gsap.from(".pro4",{

    x:-500,
    duration:5,
    delay:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 20%"
    }
},"animm")

gsap.from(".line6",{

    y:590,
    duration:7.8,
    delay:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 10%"
    }
},"animm")
gsap.from(".pro5",{

    x:1200,
    duration:7.8,
    delay:3,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"bottom 10%"
    }
},"animm")