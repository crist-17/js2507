//p528

// let userNumber = parseInt(prompt('숫자를 입력하세요.'));
// let result = 0
// if (userNumber % 3 === 0)
//     result = '3의 배수입니다.';
// else 
//   result = '3의 배수가 아닙니다.';

// alert(result)

let userNumber = prompt('숫자를 입력하세요.');
if(userNumber !== null && userNumber !== '')
    (parseInt(userNumber) % 3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.');
else
    alert('입력이 취소되었습니다.');
