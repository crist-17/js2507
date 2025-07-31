let numberOne = parseInt(prompt('50 미만인 숫자를 입력하세요'))
let numberTwo = parseInt(prompt('50 미만인 숫자를 입력하세요'))

// if(numberOne < 50 && numberTwo < 50){

//     alert("숫자 2개 모두 50미만이군요")
// }else {
//     alert("조건에 맞지않는 숫자가 있습니다.")
// }



if (isNaN(numberOne) || isNaN(numberTwo)){
    alert('숫자가 아닌값이 포함되어 있습니다.')
}else if(numberOne < 50 && numberTwo < 50){

    alert("숫자 2개 모두 50미만이군요")
}else {
    alert("조건에 맞지않는 숫자가 있습니다.")
}


// if (!isNaN(numberOne) && !isNaN(numberTwo))
//     if(numberOne < 50 && numberTwo < 50)
//         alert("숫자 2개 모두 50미만이군요")
//     else
//         alert("조건에 맞지않는 숫자가 있습니다.")