let myDate = new Date()
let myHour = myDate.getHours()
let greeting = ""
//가데이터 : 가상의 가짜값으로 테스트를 해보세요
// let time = 12
let timeAm = 9
let timePm = 18
myHour = 17
// ---------------------------------------------------

console.log(myHour)
console.log(myDate)

if(myHour < timeAm) {
 greeting = "등원"
}else if (myHour>timePm) {
  greeting =  "귀가"
}
else{
    greeting = "공부"
}
console.log(greeting)