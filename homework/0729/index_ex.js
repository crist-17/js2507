let userNumber = prompt('숫자를 입력하세요');

if (userNumber===null || userNumber.trim()===""){
    alert('입력이 취소되었습니다.');
}
else {
    let num = parseInt(userNumber);
if(isNaN(num)) {
    alert('숫자가 아닙니다.');
}else {
    (num % 3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다');
}
}