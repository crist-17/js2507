let myText
let myRandom = Math.random()
let d = document

console.log(myRandom)

if(myRandom < 0.5) {
    myText = "0.5보다 작다"
}else{
    myText = "0.5보다 작지않다."
}

d.getElementById("result").innerHTML = `<h2>결과는 ${myText}</h2>`