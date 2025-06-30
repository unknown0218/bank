function cardContinue(){
    const cardHolder = document.getElementById("cardholder")
    const cardNumber = document.getElementById("cardnumber")
    const expiry = document.getElementById("expiry")
    const cvv = document.getElementById("cvv")

    if(cardHolder.value == "" || cardNumber.value == "" || expiry.value == "" || cvv.value == ""){
        document.getElementById("cardError").style.display = "block"
        document.getElementById("cardnumberError").style.display = "block"
        document.getElementById("expiryError").style.display = "block"
        document.getElementById("cvvError").style.display = "block"
    }else{
        document.getElementById("cardError").style.display = "none"
        document.getElementById("cardnumberError").style.display = "none"
        document.getElementById("expiryError").style.display = "none"
        document.getElementById("cvvError").style.display = "none"
    }
}