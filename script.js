// Message dans la console
console.log("Bienvenue sur mon site !");

// Petit calcul avec des variables
let nombreDeJeux = 5;
let prix = 20;
let total = nombreDeJeux * prix;

console.log("Le prix total est de " + total + " dollars.");

// Le formulaire affiche une réponse
document.getElementById("formulaire").onsubmit = function(event) {
    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let jeu = document.getElementById("jeu").value;

    document.getElementById("message").innerHTML =
        "Merci " + nom + "! Ton jeu préféré est " + jeu + ".";
};
