let names = ['창', '일']
let string = ['고객님', '안녕하십니까']

let nameStr = names.concat(string)
document.writeln(`"${nameStr}"`)

document.writeln(`<hr>`)
//////////////////////////////////////////
let nameJo = nameStr.join('_')
document.writeln(`"${nameJo}"`)

document.writeln(`<hr>`)
////////////////////////////////////////////

let namePu = nameStr.push('!')
document.writeln(`"${nameStr}"`)

document.writeln(`<hr>`)
//////////////////////////////////////////////
let nameUs = nameStr.unshift('수원역지점- ')
document.writeln(`"${nameStr}"`)

document.writeln(`<hr>`)
/////////////////////////////////////////////////////
let namePop = nameStr.pop('!')
document.writeln(`"${nameStr}"`)

document.writeln(`<hr>`)
///////////////////////////////////////////
let nameSh = nameStr.shift('수원역지점-')
document.writeln(`"${nameStr}"`)

document.writeln(`<hr>`)
/////////////////////////////////////////////
let nameSpl = nameStr.splice(3, 0, '좋은하루')
document.writeln(`"${nameStr}"`)

document.writeln(`<hr>`)
//////////////////////////////////////////////

// let nameStr2 = names.concat(string) 
    let nameSli = nameStr.slice(0, 2)
document.writeln(`"${nameSli}"`)

document.writeln(`<hr>`)

let nameJo2 = nameSli.join('_')
document.writeln(`"${nameJo2}"`)

document.writeln(`<hr>`)



