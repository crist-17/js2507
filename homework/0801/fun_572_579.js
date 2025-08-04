function multiple (a,b=5,c=10) {
    return a*b+c
}

let result = multiple(5, 10, 20)
let result2 =multiple (10, 20,)
let result3 =multiple (30)

document.writeln(`${result}`)
document.writeln(`${result2}`)
document.writeln(`${result3}`)
//=------------------------------------------
function calcSum(n) {
    let sum = 0
    for (let i=1; i<=n; i++) {
        sum+= i
    }
    document.writeln(`1부터 ${n}까지 더하면 ${sum}`)
}
calcSum(6)