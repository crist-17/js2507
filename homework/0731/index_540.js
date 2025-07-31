for (let i = 1; i <= 9; i++) {
    document.writeln(` ${i}단 <br>`)
    document.writeln(`--------<br>`)
    for (let j = 2; j <= 9; j++) {

        document.writeln(`${i} x ${j} = ${i*j} `)
        document.writeln(`<br>`)

    }
    document.writeln(`<br>`)
}