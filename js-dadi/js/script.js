const buttonElement = document.getElementById("run");

buttonElement.addEventListener("click",
    function () {
        const userChoice = document.getElementById("number").value;
        const computerNumber = Math.floor(Math.random() * 6 + 1);
        const userNumbers = [1, 2, 3, 4, 5, 6];

        document.getElementById("user").innerText = "Hai scelto: " + userNumbers[userChoice - 1];
        document.getElementById("computer").innerText = "Il computer ha scelto: " + computerNumber;

        // Controllo numero
        if (userChoice < 1 || userChoice > 6) {
            document.getElementById("invalid-choice").innerText = "Numero non valido. Inserisci un valore da 1 a 6."
        }

        //SE lo user fa un punteggio superiore a computer VINCE
        if (userChoice > computerNumber) {

            document.getElementById("result").innerText = "Hai VINTO!";

            //ALTRIMENTI SE ha un numero inferiore lo user PERDE
        } else if (userChoice < computerNumber) {

            document.getElementById('result').innerHTML = "Fai schifo, cambia gioco..";


            //ALTRIMENTI un punteggio uguale PAREGGIA
        } else {
            document.getElementById('result').innerHTML = "Pareggio!";
        }
    }
)





