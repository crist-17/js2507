let now = new Date()
document.writeln("현재시각은" + now) 
document.writeln(`<br>현재시각은 ${now.toLocaleString()}`)

let arr1 = new Array()
let arr2 = new Array(4)

let arr3 = ["one","two","three","four",]
let arr4 = Array("one","two","three","four")

let numbers = ["one","two","three","four",]

for (let i = 0;i<numbers.length; i++) {
    document.writeln(`<p>${numbers[i]}<p>`)
}

