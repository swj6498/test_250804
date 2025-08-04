// 아이디가 circle인 요소 찾아서 저장
const circle = document.querySelector("#circle");
// 태그명이 article인 요소 찾아서 저장
const article = document.querySelectorAll("article");

// article의 전체 갯수만큼 반복을 돌면서 mouseenter, mouseleave이벤트 연결
for (let el of article){
    el.addEventListener("mouseenter", e=>{
        // article에 마우스를 올리면 부모인 #circle의 animationPlayState 값을 "paused로 변경"
        circle.style.animationPlayState="paused"
    });
    el.addEventListener("mouseleave", e=>{
        // article에 마우스를 올리면 부모인 #circle의 animationPlayState 값을 "running으로 변경"
        circle.style.animationPlayState="running";
    });
}