const hi = function() {
    return "하이"
}
console.log(hi)
console.log(typeof hi)


//상수형 에로우 함수
const hi2 = () => {return "하이2"}
console.log(hi2)

const hi3 = () => "하이3"
console.log(hi3)

//매게변수 
let hi4 = function(user) {
    document.writeln(user)
}
hi4("홍길동")

let hi5 = user => {document.writeln(`${user}님 어서오세요`)}
hi5("창일")