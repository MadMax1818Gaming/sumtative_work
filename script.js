//Maxime Carrière
//site web évaluation
//2026-11-04

// Message dans la console
console.log("Bienvenue sur mon site !");

// Vérification de l'âge
function verifier() {

    let naissance = document.getElementById("naissance").value;
    let annee = new Date().getFullYear(); //vas rester a date

    if (naissance == "" || isNaN(naissance) || naissance < 1900 || naissance > annee) {

        document.getElementById("message").innerHTML = "Entre une année valide !";

    }
    else {

        let age = annee - naissance;

        // Calcul dans la console
        console.log("Année : " + naissance);
        console.log("Calcul : " + annee + " - " + naissance);
        console.log("Âge : " + age);

        if (age > 12) {

            document.getElementById("verification").style.display = "none";
            document.getElementById("site").style.display = "block";

            console.log("Accès accepté !");

        }
        else {

            document.getElementById("message").innerHTML = "Tu dois avoir plus de 12 ans !";
            console.log("Accès refusé !");

        }
    }
}

// Formulaire email et jeu préféré
document.getElementById("formulaire").onsubmit = function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let jeu = document.getElementById("jeu").value;

    console.log("Nouvelle réponse !");
    console.log("Email : " + email);
    console.log("Jeu préféré : " + jeu);

    document.getElementById("confirmation").innerHTML = "Merci pour ta réponse !";

};
