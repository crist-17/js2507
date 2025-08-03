document.addEventListener("DOMContentLoaded",function() {
    alert("문서 로딩 완료! (html 구조 준비됨)")
})

const form = document.getElementById("myForm")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("폼 제출 이벤트 발생!")
})

const btn = document.getElementById("btn")
btn.addEventListener("click",function() {
    alert ("버튼 클릭 이벤트 발생!")
})