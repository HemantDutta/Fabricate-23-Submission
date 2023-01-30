//Addiction Page
let business = false;
let hours;
let apps;
function next1() {
    let val = document.getElementById('ques-1').value;
    let warn = document.getElementById('warn1');
    if(val<0){
        warn.classList.remove('d-none');
        warn.innerText = "Please take this seriously..."
    }
    else {
        apps = val;
        warn.classList.add('d-none');
        warn.innerText = ""

        document.getElementById('quesbox1').style.transform = "translateY(50px)";
        document.getElementById('quesbox1').style.opacity = "0%";


        setTimeout(()=>{
            document.getElementById('quesbox1').classList.add('d-none');
            document.getElementById('quesbox2').classList.remove('d-none');
            setTimeout(()=>{
                document.getElementById('quesbox2').style.transform = "translateY(0px)";
                document.getElementById('quesbox2').style.opacity = "100%";
            }, 100)
        }, 400)
    }
}

function next2() {
    let val = document.getElementById('ques-2').value;
    let warn = document.getElementById('warn2');
    if(val<0){
        warn.classList.remove('d-none');
        warn.innerText = "Please take this seriously..."
    }
    else {
        hours = val;
        warn.classList.add('d-none');
        warn.innerText = ""

        document.getElementById('quesbox2').style.transform = "translateY(50px)";
        document.getElementById('quesbox2').style.opacity = "0%";


        setTimeout(()=>{
            document.getElementById('quesbox2').classList.add('d-none');
            document.getElementById('quesbox3').classList.remove('d-none');
            setTimeout(()=>{
                document.getElementById('quesbox3').style.transform = "translateY(0px)";
                document.getElementById('quesbox3').style.opacity = "100%";
            }, 100)
        }, 400)
    }
}

function next3() {
    let val = document.getElementById('ques-3').value;

    if(val === "#"){
        document.getElementById('warn3').classList.remove('d-none');
        document.getElementById('warn3').innerText = "Please choose an option...";
    }
    else if(val === "y"){
        business = true;
        getResult();
    }
    else{
        getResult();
    }
}

function getResult(){
    document.getElementById('quesbox3').style.transform = "translateY(50px)";
    document.getElementById('quesbox3').style.opacity = "0%";

    setTimeout(()=>{
        document.getElementById('quesbox3').classList.add('d-none');
        document.getElementById('ad-sect1').style.transform = "translateX(150px)";
        document.getElementById('ad-sect1').style.opacity = "0%";
        setTimeout(()=>{
            document.getElementById('ad-sect1').classList.add('d-none');
            document.getElementById('ad-sect3').classList.remove('d-none');

            if(hours>=2 && business){
                console.log('working');
                document.getElementById('result').innerText = " not addicted";
                document.getElementById('hope').innerHTML = `You're good! But if you still want to know more about this, click <a href="help.html" class="hope-link">here</a>`;
            }
            else if(hours>=2 && !business){
                document.getElementById('result').innerText = " addicted";
                document.getElementById('hope').innerHTML = `But don't worry, there's still <a href="help.html" class="hope-link">hope</a>`;
            }
            else if(hours<2 && business){
                document.getElementById('result').innerText = " not addicted";
                document.getElementById('hope').innerHTML = `You're good! But if you still want to know more about this, click <a href="help.html" class="hope-link">here</a>`;
            }
            else if(hours<2 && !business){
                document.getElementById('result').innerText = " not addicted";
                document.getElementById('hope').innerHTML = `You're good! But if you still want to know more about this, click <a href="help.html" class="hope-link">here</a>`;
            }

            setTimeout(()=>{
                document.getElementById('ad-sect3').style.opacity = "100";
                document.getElementById('ad-sect3').style.transform = "translateY(0px)";
            }, 400)

        }, 400)
    }, 400)
}


//Animation
gsap.registerPlugin(ScrollTrigger);

//Home Page

gsap.from("#sect1", {
    scrollTrigger: {
        trigger: "#sect1",
    },
    y: 50,
    opacity: 0,
    duration: 2
});

gsap.from(".sa1", {
    scrollTrigger: {
        trigger: "#sect1",
    },
    y:10,
    stagger: 1,
    opacity: 0,
    duration: 2
})

gsap.from("#sect2", {
    scrollTrigger: {
        trigger: "#sect2",
    },
    y: 50,
    opacity: 0,
    duration: 2
});

gsap.from("#sect3", {
    scrollTrigger: {
        trigger: "#sect3",
    },
    y: 100,
    opacity: 0,
    duration: 2
});

gsap.to(".topicons", {
    scrollTrigger: {
        trigger: ".topicons",
        scrub: 1
    },
    x:200,
    rotation:360,
    duration: 1
})

gsap.to(".boticons", {
    scrollTrigger: {
        trigger: ".boticons",
        scrub: 1
    },
    x:-200,
    rotation:360,
    duration: 1
})

gsap.from(".sa4", {
    scrollTrigger: {
        trigger: ".sa4",
    },
    y: 50,
    stagger: 1,
    opacity: 0,
    duration: 0.2
});


gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
    },
    delay: 1,
    y: 50,
    stagger: 1,
    opacity: 0,
    duration: 1
});

gsap.from("#sect7", {
    scrollTrigger: {
        trigger: "#sect7",
    },
    y: 50,
    opacity: 0,
    duration: 2
});

gsap.from("#bars", {
    scrollTrigger: {
        trigger: "#bars",
        start: "top center",
        scrub: 1
    },
    opacity: 0,
    duration: 0.5
})

gsap.from(".sect9", {
    scrollTrigger: {
        trigger: ".sect9"
    },
    y: 20,
    opacity: 0,
    duration: 1
});


//Addiction Animation


gsap.from(".asa1", {
    scrollTrigger: {
        trigger: ".asa1",
    },
    y: 50,
    stagger: 1,
    opacity: 0,
    duration: 1
});

gsap.from(".asa2", {
    scrollTrigger: {
        trigger: ".asa2",
    },
    y: 50,
    stagger: 1,
    opacity: 0,
    duration: 1
});


//Help Page

gsap.from(".hsa1", {
    scrollTrigger: {
        trigger: ".hsa1",
    },
    y:10,
    stagger: 1,
    opacity: 0,
    duration: 1
});

gsap.from(".h-sect2", {
    scrollTrigger: {
        trigger: ".h-sect2"
    },
    y: 20,
    opacity: 0,
    duration: 1
});

gsap.from(".h-sect3", {
    scrollTrigger: {
        trigger: ".h-sect3"
    },
    y: 20,
    opacity: 0,
    duration: 1
});

gsap.from(".hsa4", {
    scrollTrigger: {
        trigger: ".hsa4",
    },
    y:10,
    stagger: 0.5,
    opacity: 0,
    duration: 0.5
});

gsap.to(".plus", {
    scrollTrigger: {
        trigger: ".plus",
        start: "bottom 40px",
        marker: true,
        scrub: 5
    },
    y: 1100,
    rotate: 720,
    duration: 2
})

gsap.from(".h-sect5", {
    scrollTrigger: {
        trigger: ".h-sect5"
    },
    y: 20,
    opacity: 0,
    duration: 2
});



