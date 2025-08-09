let form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    gererFormulaire()
})


function gererFormulaire () {
    let baliseNom = document.getElementById("nom")
    let nom = baliseNom.value
    let balisePrenom = document.getElementById("prenom")
    let prenom = balisePrenom.value
    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value
    let baliseDu = document.getElementById("du")
    let du = baliseDu.value
    let baliseAu = document.getElementById("au")
    let au = baliseAu.value
    let baliseGite = document.getElementById("gite")
    let gite = baliseGite.value
    let baliseNbpersonnes = document.getElementById("nbpersonnes")
    let nbpersonnes = baliseNbpersonnes.value
    let baliseTexte = document.getElementById("texte")
    let texte = baliseTexte.value

    envoyerMail (nom, prenom, email, du, au, gite, nbpersonnes, texte)
}


function envoyerMail (nom, prenom, email, du, au, gite, nbpersonnes, texte) {
    let mailto = `mailto:vernet.de.danton@gmail.com?subject=Demande de réservation&body=Bonjour, nous souhaiterions réserver le gîte ${gite} du ${du} au ${au} pour ${nbpersonnes} personnes.%0D%0A%0D%0APrécisions : ${texte}%0D%0A%0D%0A${prenom} ${nom}%0D%0A${email}`
    location.href = mailto
}