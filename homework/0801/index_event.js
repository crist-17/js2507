const btn = document.getElementById("btn")

const eventName = "mouseout"

btn.addEventListener(eventName, function() {
    alert (`${eventName}이벤트가 실행됨!`)

})