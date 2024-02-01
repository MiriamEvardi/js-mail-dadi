
//creare array lista di email che possono accedere
const buttonElement = document.getElementById("run");

buttonElement.addEventListener("click",
    function () {
        const authorizedEmails = ["topolino@gmail.com", "paperino@gmail", "pluto@gmail.com"];


        //chiedere all'utente la sua email
        const userEmail = document.getElementById("insert-email").value;

        //controllo
        let authorized = false;

        for (let i = 0; i < authorizedEmails.length; i++) {
            if (userEmail === authorizedEmails[i]) {
                authorized = true;
            }
        }

        //stampa messaggio esito
        if (authorized) {
            document.getElementById("control-result").innerText = "Email autorizzata all'accesso.";
        } else {
            document.getElementById("control-result").innerText = "Email non autorizzata all'accesso. Si prega di inserire una email autorizzata.";
        }
    }
)
