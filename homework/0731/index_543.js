let stars = parseInt(prompt('별을 몇개 펴시할까요?'))

//while() 조건에 맞는동안 수행
while (stars > 0){
    document.writeln('*')
    stars--
}
document.writeln(`<br>`)
// do ~ 일단실행하고.  while() 그다음에 조건을 맞는동안 수행
let stars2 = parseInt(prompt('별을 몇개 펴시할까요?'))

do {
    document.writeln("$")
    stars2--
}while(stars2 > 0)