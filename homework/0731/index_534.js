let session = prompt("관심세션을 선택해주세요. 1-마케팅, 2-개발, 3-디자인")

switch (session) {
    case "1": document.writeln("<p>마케팅 세션은 <strong> 201호 </strong>에서<p>")
        break
    case "2": document.writeln("<p>개발 세션은 <strong> 203호 </strong>에서<p>")
        break
    case "3": document.writeln("<p>디자인 세션은 <strong> 205호 </strong>에서<p>")
        break
        default: alert("잘못입력되었습니다.")
}
