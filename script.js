
// Maxime Carrière
// Site web évaluation
// 2026-11-04

// MESSAGE DANS LA CONSOLE
console.log("Bienvenue sur mon site !");

// VÉRIFICATION DE L'ÂGE
function verifier() {

    let naissance = Number(document.getElementById("naissance").value);
    let annee = new Date().getFullYear(); // Va rester à jour

    if (naissance == "" || isNaN(naissance) || naissance < 1900 || naissance > annee) {

        document.getElementById("message").textContent =
            "Entre une année valide !";

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

            document.getElementById("message").innerHTML =
                "Tu dois avoir plus de 12 ans !";

            console.log("Accès refusé !");

        }

    }

}

// SYSTÈME DE TABS

function showTab(tabId) {

    // Trouver toutes les sections
    let tabs = document.querySelectorAll(".tab-content");

    // Cacher toutes les sections
    tabs.forEach(function(tab) {

        tab.style.display = "none";

    });

    // Afficher la section sélectionnée
    document.getElementById(tabId).style.display = "block";

    console.log("Onglet ouvert : " + tabId);

}

// FORMULAIRE EMAIL ET JEU PRÉFÉRÉ

document.getElementById("formulaire").onsubmit = function(event) {

    // Empêcher la page de se recharger
    event.preventDefault();

    // Récupérer les informations
    let email = document.getElementById("email").value;
    let jeu = document.getElementById("jeu").value;
    let plateforme = document.getElementById("plateforme").value;

    // Afficher les informations dans la console
    console.log("Nouvelle réponse !");
    console.log("Email : " + email);
    console.log("Jeu préféré : " + jeu);
    console.log("Plateforme : " + plateforme);

    // Message de confirmation
    document.getElementById("confirmation").innerHTML =
        "Merci pour ta réponse !";

};
