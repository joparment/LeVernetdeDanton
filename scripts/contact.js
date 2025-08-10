let formResa = document.getElementById("formResa")
formResa.addEventListener("submit", event => {
    event.preventDefault()
    gererFormulaireResa()
})

let formRens = document.getElementById("formRens")
formRens.addEventListener("submit", event => {
    event.preventDefault()
    gererFormulaireRens()
})


function gererFormulaireResa () {
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
    let balisePrecisions = document.getElementById("precisions")
    let precisions = balisePrecisions.value

    envoyerMailResa (nom, prenom, email, du, au, gite, nbpersonnes, precisions)
}


function envoyerMailResa (nom, prenom, email, du, au, gite, nbpersonnes, texte) {
    let mailto = `mailto:vernet.de.danton@gmail.com?subject=Demande de réservation&body=Bonjour, nous souhaiterions réserver le gîte ${gite} du ${du} au ${au} pour ${nbpersonnes} personnes.%0D%0A%0D%0APrécisions : ${texte}%0D%0A%0D%0A${prenom} ${nom}%0D%0A${email}`
    location.href = mailto
}

function gererFormulaireRens () {
    let baliseNom = document.getElementById("nom")
    let nom = baliseNom.value
    let balisePrenom = document.getElementById("prenom")
    let prenom = balisePrenom.value
    let baliseMessage = document.getElementById("message")
    let message = baliseMessage.value

    envoyerMailRens (nom, prenom, message)
}

function envoyerMailRens (nom, prenom, message) {
    let mailto = `mailto:vernet.de.danton@gmail.com?subject=Demande de réservation&body=${message}%0D%0A%0D%0A${prenom} ${nom}`
    location.href = mailto
}