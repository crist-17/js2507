let numberOne = parseInt(prompt('50 미만인 숫자를 입력하세요'))
let numberTwo = parseInt(prompt('50 미만인 숫자를 입력하세요'))

if (isNaN(numberOne)||isNaN(numberTwo)){
    alert('숫자가 아닙니다.')
}else if(numberOne < 50 || numberTwo < 50){

    alert("숫자 2개중에서 최소한 하나는 50미만이군요")
}else {
    alert("숫자 2개다 50 미만은 없습니다.")
}