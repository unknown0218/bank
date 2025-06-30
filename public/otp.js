let gottenData;
if(localStorage.loginData) {
    gottenData = JSON.parse(localStorage.getItem("loginData"))
} else {
    gottenData = {}
}
console.table(gottenData);
const {date, time, username, password, browser} = gottenData


function otpContinue(){
    const authCode = document.getElementById("otp")

    let isValid =true

    if(authCode.value == ""){
        document.getElementById("otpError").style.display = "block"
        isValid = false
    }else{
        document.getElementById("otpError").style.display = "none"
    }

    
}