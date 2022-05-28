// class Hero {
//     constructor(){
//         this.man = document.querySelector('#hero'); 
//     }

// }
const man = document.querySelector("#hero");
let position = 300;

function moveManRight(){
    position = position + 1;
    man.style.left = position + "px";
}
function moveManLeft(){
    position = position - 1;
    man.style.left = position + "px";
}

window.addEventListener('keydown', function(event) {    
    if(event.code=="ArrowRight"&& man.offsetLeft <= 556 ){
        for(i=0;i<10;i++){
            setTimeout(moveManRight,(i+1)*10)
        }
    }

    if(event.code=="ArrowLeft"&& man.offsetLeft >= 10){
        for(i=0;i<10;i++){
            setTimeout(moveManLeft,(i+1)*10)
        }
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