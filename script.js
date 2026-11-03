
// Message dans la console
console.log("Bienvenue sur mon site");

// Vérification de l'âge
function verifier() {

    let naissance = document.getElementById("naissance").value;
    let annee = 2026;

    if (naissance == "" || isNaN(naissance) || naissance < 1900 || naissance > annee) {
        document.getElementById("message").innerHTML = "Entre une année valide";
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
            document.getElementById("message").innerHTML = "Tu dois avoir plus de 12 ans";
            console.log("Accès refusé");
        }
    }
}
