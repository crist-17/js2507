const box = document.getElementById('box')

let posi = "left"

box.addEventListener("click", function() {
    switch(posi) {
        case "left" : 
        box.style.left = "300px"
        box.style.top = "100px"
        posi = "right"
        break

        case "right" : 
        box.style.left = "150px"
        box.style.top = "250px"
        posi = "center"
        break

        case "center" : 
        box.style.left = "50px"
        box.style.top = "100px"
        posi = "left"
        break
        default:
            posi = "left"
    }
})