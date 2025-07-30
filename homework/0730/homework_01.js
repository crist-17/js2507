let d = document
const but = d.getElementById("result")
const output = d.getElementById("output")

but.addEventListener("click", function() {
    

let myDate = new Date()
let myHour = myDate.getHours()
let greeting = ""
///////////////////////////////
let timeAm = 9
let timePm = 18
myHour = 17


if(myHour < 9) {

    output.innerHTML = '<img src="./images/morning.png" alt="등교">'

}else if(myHour > 18) {
    output.innerHTML = '<img src="./images/gohme.png" alt="귀가">'
}
else{
    output.innerHTML = '<img src="./images/study.png" alt="공부">'
}


})