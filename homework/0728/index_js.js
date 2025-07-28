var d = document

let num1 = 3;
let num2 = 5;
let result
result = num1 + num2
d.getElementById("result1").innerHTML =`<b>${result}</b>` 
result = num2 - num1
d.getElementById("result2").innerHTML = `<b>${result}</b>` 
result = num1 * num2
d.getElementById("result3").innerHTML = `<b>${result}</b>` 
result = (num2 / num1).toFixed(2)
d.getElementById("result4").innerHTML = `<b>${result}</b>` 
result = num2 % num1
d.getElementById("result5").innerHTML = `<b>${result}</b>` 

//선언부

let num01 = 10; let num02 = 10; let num03 = 10; let num04 = 10; 

//++선행(num01)
result = ++num01
d.getElementById("result6").innerHTML = `<b>변수는${result}</b><i>변수는${num01}</i>`
//--선행(num02)
result = --num02
d.getElementById("result7").innerHTML = `<b>변수는${result}</b><i>변수는${num02}</i>`
//후행++(num03)
result = num03++
d.getElementById("result8").innerHTML = `<b>변수는${result}</b><i>변수는${num03}</i>`

result = num04--
d.getElementById("result9").innerHTML = `<b>변수는${result}</b><i>변수는${num04}</i>`