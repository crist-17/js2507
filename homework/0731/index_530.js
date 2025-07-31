let userNumber = prompt('숫자를 입력하세요')

if (userNumber === "") {
    alert('공백이 입력되었습니다')
} else if (userNumber !== null) {
    // 삼항연산자 __조건__?__참_:__거짓_
    (parseInt(userNumber) % 3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.')
} else {
    alert('입력이 취소되었습니다.')
} 

 