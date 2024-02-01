const buttonElement = document.getElementById("run");

buttonElement.addEventListener("click",
    function () {

        const computerNumber = Math.floor(Math.random() * 6 + 1);
        const userNumbers = Math.floor(Math.random() * 6 + 1);

        document.getElementById("user").innerText = "Hai scelto: " + userNumbers;
        document.getElementById("computer").innerText = "Il computer ha scelto: " + computerNumber;

        //SE lo user fa un punteggio superiore a computer VINCE
        if (userNumbers > computerNumber) {

            document.getElementById("result").innerText = "Hai VINTO!";

            //ALTRIMENTI SE ha un numero inferiore lo user PERDE
        } else if (userNumbers < computerNumber) {

            document.getElementById('result').innerHTML = "Fai schifo, cambia gioco..";


            //ALTRIMENTI un punteggio uguale PAREGGIA
        } else {
            document.getElementById('result').innerHTML = "Pareggio!";
        }
    }
)





