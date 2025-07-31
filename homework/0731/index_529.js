let userNumber = prompt('숫자를 입력하세요')
// if(userNumber != null) {
// //     if (parseInt(userNumber)%3 ===0)
// //         alert('3의 배수입니다.')
// //     else('3의 배수가 아닙니다.')
// // }
// // else
// //     alert('입력이 취소되었습니다.')

if(userNumber ===null || userNumber.trim()==='' ) {
    alert('입력이 취소되었습니다.')
}else {if(parseInt(userNumber)% 3 === 0){
    alert('3의배수 입니다.')
}else{
    alert('3의 배수가 아닙니다.')
}}