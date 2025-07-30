let text = ""
const cars = ["bmw", "볼보", "사브", "포드", "피아트", "아우디","bmw", "볼보", "사브", "포드", "피아트", "아우디"]
let d = document

for(let i = 0; i < cars.length; i++) {
    console.log(i)
    console.log(cars[i])
 text += (i+1)+" " + cars[i] + "<hr>";
} 
d.getElementById("text").innerHTML = text;

// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";



// console.log(text)