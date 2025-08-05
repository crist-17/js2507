function validateForm() {
    let x = document.forms["myForm"]["fname"].value
    if(x == "") {
        alert("name must be filled out")
        return false
    }
}