function getMessage(){
    let username = document.getElementById("uName").value;
    let password = document.getElementById("pWord").value;
    alert("Hello Validation " + password);

    let RegEx = /[a-z A-Z \-/{8,15}]/; //1 upper case, 3 lower case, 3 letters, 2 digits

    if (regEx.test(passWord)){
        alert("valid");
    }

}


document.getElementById('btnLogin').addEventListener("click" , getMessage);