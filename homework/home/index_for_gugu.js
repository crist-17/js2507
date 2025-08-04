
for (let i=2; i<=9; i++) {
    document.writeln(`<div class="times">`)
    document.writeln(`<h3>${i}단</h3>`)
    for (let j = 1; j <= 9; j++) {
        document.writeln(`${i}x${j} = ${i*j}<br>`)
}
document.writeln(`</div>`)
}