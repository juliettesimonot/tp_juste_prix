//Données du DOM
const initPrice = document.querySelector('.price');
const input = document.querySelector('input');
const button = document.querySelector('button')
const message = document.querySelector('.message');


//Variables
let countTour = 0;
const gameBoyPrice = 117;
let victory = false;


//Charger un prix aléatoire au chargement de la page
function getRandomPrice() {
    let randomPrice = Math.floor(Math.random() * 1000);
    initPrice.textContent = randomPrice+" euros"; 
}

window.onload = getRandomPrice();


//Modifier texte bouton 
function buttonTryAgain(){
    if(countTour>0){
        button.textContent = "Essayer encore";
    }else{
        button.textContent = "Démarrer le jeux";
    }
}


//Verifier si input plus grand/ plus petit ou juste prix
function isGoodPrice(input){
    message.textContent ="Message : ";
    if(input>gameBoyPrice){
        message.textContent += "Trop grand!";
    }else if(input<gameBoyPrice){
        message.textContent += "Trop petit";
    }else if(input == 117){
        message.textContent += "Bravo c'est le juste prix";
        victory = true;
    }
}

//Afficher message victoire si juste prix
function isVictory(){
    if(victory==true){
        alert("Bravo vous avez trouvé le juste prix en "+countTour+" coups!\nLe prix d'une GameBoy est de 117euros!");
        input.value = "";
        message.textContent="Message : "
        victory = false;
        button.textContent="Démarrer le jeux";
        countTour=0;
        getRandomPrice();
    }else{
        input.value=""; 
    }
}


//Verifier input correct
function isNumber(input){
    try {
        if(isNaN(Number(input))==true){
            alert("Veuillez saisir un nombre entier");
        }else{
            isGoodPrice(input);
            initPrice.textContent = input+" euros"; 
            countTour++;
            message.textContent+= "   | Nombre de coup :"+countTour;
        }
    } catch (error) {
        alert("Saisie inconnue, veuillez saisir un nombre entier");
    }
   
}


//Mettre a jour les données au click

button.addEventListener('click', e=>{
    e.preventDefault();
    let userInput = Number(input.value);
    isNumber(userInput);
    buttonTryAgain();
    isVictory();
})


