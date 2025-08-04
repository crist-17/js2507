const x = document.querySelectorAll("p.intro")

document.getElementById("result").innerHTML = '블라블라블라' + x[0].innerHTML

document.getElementById("result2").innerHTML = '블라블라블라' + x[1].innerHTML

const p = document.querySelectorAll("p")
p[0].style.backgroundColor = "red"
p[1].style.backgroundColor = "yellow"
p[2].style.backgroundColor = "yellow"
p[3].style.backgroundColor = "yellow"
p[4].style.backgroundColor = "pink"
p[5].style.backgroundColor = "pink"
