var d = document
let num1 = 3;
let num2 = 4;
let num3 = "3";
let result

result = (num1==num3)
d.getElementById("result1").innerHTML = `== ${result}`;

result = (num1 === num3)
d.getElementById("result2").innerHTML = `=== ${result}`;

result = (num1 != num3)
d.getElementById("result3").innerHTML = `!= ${result}`;

result = (num1 !== num3)
d.getElementById("result4").innerHTML = `!== ${result}`;

result = (num1 < num2)
d.getElementById("result5").innerHTML = `< ${result}`;

result = (num1 <= num2)
d.getElementById("result6").innerHTML = `<= ${result}`;

result = num1 > num2
d.getElementById("result7").innerHTML = `> ${result}`;

result = num1 >= num2
d.getElementById("result8").innerHTML = `>= ${result}`;

