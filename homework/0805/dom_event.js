function changeText(id) {
    id.innerHTML = "웁웁웁스!"
}
////////////////////////////////////////////////////////
function displayDate() {
    document.getElementById("time").innerHTML = Date()
}

//////////////////////////////////////////////////
document.getElementById("myBtn").onclick = displayDate

function displayDate() {
    document.getElementById("time2").innerHTML = Date()
}

////////////////////////////////////////////////////////////////
function checkCookies() {
    let text = ""
    if (navigator.cookieEnabled == true) {
        text = "쿠키가 활성되었"
    } else {
        text = "활성화 엑스"
    }
    document.getElementById("cook").innerHTML = text
}
///////////////////////////////////////////////////////////
function upperCase() {
    const x = document.getElementById("fname")
    x.value = x.value.toUpperCase()
    
}
////////////////////////////////////////
function mOver(obj) {
    obj.innerHTML = "감사합니다"
    }
    function mOut(obj) {
        obj.innerHTML = "마우스를 올려보세요"
    }

function mDown(obj) {
      obj.style.backgroundColor = "red"
    obj.innerHTML = "감사합니다"
    }
    function mUp(obj) {
        obj.style.backgroundColor = "blue"
        obj.innerHTML = "마우스를 올려보세요"
    }
