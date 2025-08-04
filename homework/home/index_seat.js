let memNum = parseInt(prompt("입장객은 몇명입니까"))
let colNum = parseInt(prompt("한줄에 몇명씨 앉겠습니까"))
let rowNum = 0

if (memNum % colNum === 0 ) {
    rowNum = memNum / colNum
}else {
 rowNum  = parseInt(memNum/colNum)+1
}

document.writeln(`모두${rowNum}개의 줄이 필요합니다.<br>`)


//좌석표
document.writeln(`<table>`)
for (let i = 0; i< rowNum; i++) {
    document.writeln(`<tr>`)
    for (let j = 1; j<= colNum; j++){
        seatNo = i*colNum+j
        if(seatNo >memNum) break
        document.writeln(`<td>좌석${seatNo}</td>`)
    }
    document.writeln(`</tr>`)
}
document.writeln(`</table>`)