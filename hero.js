// class Hero {

// }
const man = document.querySelector("#hero");
const manstyle = document.querySelector('#hero').style;
let position = 300;

window.addEventListener('keydown', function(event) {    

    if(event.code=="ArrowRight"&& man.offsetLeft <= 560 ){
        position = position + 8;
        man.style.left = position + "px";
    }

    if(event.code=="ArrowLeft"&& man.offsetLeft >= 10){
        position = position - 8;
        man.style.left = position + "px";
    }

    if(event.code=="ArrowRight"){
        man.style.backgroundPosition = "35px 0px";
    }

    if(event.code=="ArrowLeft"){
        man.style.backgroundPosition = "70px 0px";
    }

});

window.addEventListener('keyup',function(event){

    man.style.backgroundPosition = "0px 0px";
})