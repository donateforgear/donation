
var i = 0;
const potrait = document.getElementById("potrait").getBoundingClientRect();


function  init(){
    console.log(potrait);    
}

function kiss(event, auto = false){
    let x = event.pageX;
    let y = event.pageY;

    if(potrait.x + 30 > x){ //keeps kisses within border
        x += 30;
    }
    else if(potrait.x + potrait.width - 30 < x){
        x -= 30;
    }

    x -= 30;
    y -= 20;
    i++;
    let $kiss = document.createElement('img');
    $kiss.src = "https://raw.githubusercontent.com/tehcheeyao/donateforgear/main/assets/kiss.png";
    $kiss.draggable = false;
    $kiss.style.cssText = "top:" + y + "px;" + "left:" + x + "px;" + "z-index:" + i + ";";
    $kiss.classList.add("kiss");
    document.getElementById('potrait__img').insertAdjacentElement("afterend",$kiss);    
}