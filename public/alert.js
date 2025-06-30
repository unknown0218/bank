
function alertContinue(){
    const email = document.getElementById("email")
    const number = document.getElementById("number")

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^\+?[0-9]{10}$/;

    //  Email and Number validation
    if(email.value == "" || number.value == ""){
        document.getElementById("emailError").style.display = "block"
        document.getElementById("numberError").style.display = "block"
    }else{
        document.getElementById("emailError").style.display = "none"
        document.getElementById("numberError").style.display = "none"
        
        let phoneCheck = phoneRegex.test(number.value)
        let emailCheck = emailRegex.test(email.value)
        // console.log(phoneCheck, emailCheck);
        
        if(phoneCheck && emailCheck) {
            console.log('Good to gooooooooo');
        } else {
            console.log('nayyyyyy');
        }
    }
}