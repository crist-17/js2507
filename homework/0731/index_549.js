// let rowNum = 10
// let colNum = 5
// let menNum = 50

// for (let i = 0; i <rowNum; i++) {
//     for (let j = 1; j <= colNum; j++){
//         seatNo = i * colNum + j;
//         if(seatNo >menNum) break;
//         document.writeln(`좌석 ${seatNo}`) 
//     }
//     document.writeln(`<br>`)
// }

for (let i = 1; i<=54; i++) {
    document.writeln(`좌석 ${i}`)
    if (i % 5==0){
        document.writeln(`<br>`)
    }
    
}