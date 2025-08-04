function myF(p1, p2) {
    return p1*p2
}
let result = myF(4, 5) 
document.writeln(`${result}`)
//-------------------------------------
function toC (f) {
return (5/9)*(f-32)
}
let value = toC(77)
document.writeln(`${value}`)
//-------------------------------------

function toCe (f) {
return (5/9)*(f-32)
}
let value1 = toCe()
document.writeln(`${value1}`)
//-------------------------------------
function toCel (f) {
return (5/9)*(f-32)
}
let value2 = toCel
document.writeln(`${value2}`)
//-------------------------------------Arrow 함수
let myfuction = function(a,b){
    return a*b
}
let result1 = myfuction(4, 3)
document.writeln(`${result1}`)


myFunction = (a,b) => a+b
let result2 = myFunction(4,5)
document.writeln(`${result2}`)

//---------------------------------지역변수

let text = "outside" + typeof carName 
document.writeln(text)

function myFFunction() {
    let carName = "Volvo"
    let text = "inside:" + typeof carName + " " + carName
    document.writeln(text)
}
myFFunction()



























