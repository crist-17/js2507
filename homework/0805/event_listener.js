let myBtn = document.getElementById("myBtn")
let result = document.getElementById("result")
let myBtn2 = document.getElementById("myBtn2")
let result2 = document.getElementById("result2")

//이벤트리스너가 클릭이벤트를 듣고 있다가.
//이벤트가 발생하면 displayDate 함수를 실행한다.
myBtn.addEventListener("click", displayDate)
function displayDate() {
    result.innerHTML = Date()
}
//이벤트리스너가 클릭이벤트를 듣고 있다가,
//이벤트가 발생하면 익명함수를 즉각실행한다.
document.getElementById("myBtn").addEventListener("click", function () {
    alert("Hello World!");
});

//이벤트리스너가 클릭이벤트를 듣고 있다가,
//이벤트가 발생하면 흐름의 순서대로 함수를 실행시킨다.

myBtn.addEventListener("click", myFunction);
myBtn.addEventListener("click", someOtherFunction);


function myFunction() {
    alert("헬러월드!");
}

function someOtherFunction() {
    alert("This function was also executed!");
}



//오버, 아웃, 클릭이벤트를 리스너에 등록
myBtn2.addEventListener("mouseover", myFunction2);
myBtn2.addEventListener("click", mySecondFunction);
myBtn2.addEventListener("mouseout", myThirdFunction);

function myFunction2() {
    document.getElementById("result2").innerHTML = "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("result2").innerHTML = "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("result2").innerHTML = "Moused out!<br>";
}

//window handler

window.addEventListener("resize", function () {
    this.document.getElementById("win").innerHTML = Math.random()
})

//매게변수 전달

let p1 = 5
let p2 = 7
document.getElementById("myBtn3").addEventListener("click", function () {
    myF(p1, p2)
})

function myF(a,b) {
    document.getElementById("result3").innerHTML = a*b
}

//버블링 , 캡쳐링 /// 한번 확인해볼것

document.getElementById("myP1").addEventListener("click", function() {
    alert("희ㄴ색을 선택해ㅆ")
},false)

document.getElementById("myDiv1").addEventListener("click", function() {
    alert("초록을 선택")
},false)

document.getElementById("myP2").addEventListener("click", function() {
    alert("희ㄴ색을 선택해ㅆ")
},true)

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("초록을 선택")
},true)


//remove 사용

document.getElementById("myDiv").addEventListener("mousemove",myF1)

function myF1() {
    document.getElementById("result4").innerHTML = Math.random()
}
function removeHandler() {
    document.getElementById("myDiv").removeEventListener("mousemove", myF1)
}