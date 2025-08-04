
//즉시수행- 익명함수
// (function() {
//     let userName = prompt("이름을 입력하세요")
//     document.writeln(`<p>안녕하세요!<span class="accent">${userName}</span>님!</p>`)
// }());

(function(a,b) {
    sum = a+b
   
}(100,400));
 document.writeln(`함수실행결과: ${sum}`)