function emailContinue(){
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    
    //  Email and Password validation
    if(email.value == "" || password.value == ""){
        document.getElementById("emailError").style.display = "block"
        document.getElementById("passwordError").style.display = "block"
    }else{
        document.getElementById("emailError").style.display = "none"
        document.getElementById("passwordError").style.display = "none"
}
}