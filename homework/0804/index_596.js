//concat
let nums = [1,2,3]
let chars = ['a','b','c','d']

let numsChars = nums.concat(chars)
let charsNums = chars.concat(nums)

document.writeln(`nums에 chars를 합치면 ${numsChars},<br> chars에서 nums를 합친것은 ${charsNums}`)
document.writeln(`<hr>`)

//join
let nums2 = [1,2,3]
let chars2 = ['a','b','c','d']
let string1 = nums2.join()
document.writeln(`구분자없이: ${string1}<br>`)
let string2 = chars2.join('/')
document.writeln(`/ 구분자지정: ${string2}`)

document.writeln(`<hr>`)

//push

let nums3 = [1,2,3]
let chars3 = ['a','b','c','d']

let push1 = nums3.push(4,5)
document.writeln(`length: ${push1} | 배열: ${nums3}<br>`)
let push2 = nums3.unshift(0)
document.writeln(`length: ${push2} | 배열: ${nums3}`)

document.writeln(`<hr>`)
//pop

let nums4 = [1,2,3]
let chars4 = ['a','b','c','d']

let popped1 = chars4.pop()
document.writeln(`꺼낸요소: ${popped1} | 배열: ${chars4}<br>`)
let popped2 = chars4.shift()
document.writeln(`꺼낸요소: ${popped2} | 배열: ${chars4}`)

document.writeln(`<hr>`)

//splice

let study = ['html','css','javascript','jquery','react','nodjs']

//인수가1개
let js = study.splice(2)
document.writeln(`반환된 배열: ${js}<br>`)
document.writeln(`변경된 배열: ${study}`)
document.writeln(`<hr>`)

//인수가 2개

let jquery = js.splice(1,1)
document.writeln(`반환된 배열: ${jquery}<br>`)
document.writeln(`변경된 배열: ${js}`)
document.writeln(`<hr>`)

//인수가 3개
let modernJs = js.splice(1,0,'typescript')
document.writeln(`반환된 배열: ${modernJs}<br>`)
document.writeln(`변경된 배열: ${js}`)

document.writeln(`<hr>`)

//slice
let colors = ['red','green','blue','white','black']

document.writeln(colors.slice(2))
document.writeln(`<br>`)
document.writeln(colors.slice(2,4))