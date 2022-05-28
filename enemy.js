// class Enemy {
  
// }
const button = document.querySelector("#btnstart");
const field = document.querySelector("#bg");
const hero = document.querySelector("#hero");
const countBox = document.querySelector(".count");  
const timeBox = document.querySelector("#time");
let times = 0, count = 0, z = 100;

button.addEventListener('click',function(){
    button.style.backgroundColor = "red";
    button.style.color = "black";
    button.innerHTML = "Playing";

    ghostAll();
    gamePlay = setInterval(ghostAll, 2000);
    timePlay = setInterval(time,1000);
}); 
function time(){
    times = times + 1;
    z = z - 1;
    timeBox.innerHTML =  z; 
    if(z === 0){
        alert("끝");
        clearInterval(timePlay);
        clearInterval(gamePlay);
        countBox.style.display = "block";
    }
}

function ghostAll(){

    let ghost = document.createElement('div');
    ghost.className = 'ghost';
    document.querySelector("#bg").appendChild(ghost);
    ghost.style.left = Math.random() * 550 + 'px';

    let gameStart = setInterval(ghostMove, 20)


    function ghostMove() {
        ghost.style.top = ghost.offsetTop + 3 + "px";

        if (ghost.offsetTop > 400){
            clearInterval(gameStart);
            setTimeout(function(){ghost.style.display = "none"}, 100)
        }
        if(ghost.offsetTop > 330 && hero.offsetLeft - 50 <= ghost.offsetLeft && hero.offsetLeft + 50 >= ghost.offsetLeft){
            ghost.style.backgroundPosition = "47px";
            clearInterval(gameStart);
            count++;
            countBox.innerHTML = count;
            for(i=0;i<11;i++){
                setTimeout(zzz,(i+1)*10);
            }
            setTimeout(back ,120);
            setTimeout(function(){ghost.style.display="none"}, 4000);
        }
    }

    function zzz(){
        hero.style.backgroundImage = " url('./images/kill.png') ";
        hero.style.backgroundPosition = "0";
        hero.style.width = "80px";
        hero.style.height = "92px";
    }

    function back(){
        hero.style.backgroundImage = " url('./images/hero.png') ";
        hero.style.width = "35px";
        hero.style.height = "54px";
    }
}
//인터벌 사용해라 ~

//버튼을 클릭하면 ? o

//유령이 x 축에 대해서 랜덤 생성 o

//유령을 absolute top에 배치 o

//시간 차이를 두고 추가로 생성 

//유령이 밑으로 1px씩 이동

//유령이 용사와 닿으면 정지

//유령 이미지 스프라이트

//5초뒤 유령 이미지 삭제

//유령이 바닥에 닿을때 조건 생성

//용사 캐릭터 삭제

//유령 이벤트 중지

//game over 메세지 출력

//게임중 버튼 변경




