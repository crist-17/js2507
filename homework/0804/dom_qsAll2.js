
//선언부
const x = document.forms["frm1"]
let text = ""

//구현부
for (let i = 0;i < x.length ;i++) {
text += x.elements[i].value + "<br>"
}
//출력부
document.getElementById("result").innerHTML = text