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
                document.getElementById('result').innerText = "addicted";
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
        }, 400)
    }, 400)
}