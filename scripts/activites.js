
let activitesList = ["activitesFamiliales", "naturePlanEau", "resto", "produits"]


for (let i = 0; i < activitesList.length; i++) {
    let activitesSection = document.getElementById(activitesList[i] + "Section")
    activitesSection.style.display = "none"
    let activite = document.getElementById(activitesList[i])
    activite.addEventListener("click", (event) => {
        console.log(event.target.id)
        console.log(event.target.id + "Section")
        let activitesSectionAGerer = document.getElementById(event.target.id + "Section")
        console.log(activitesSectionAGerer)
        OuvrirOuFermer(activitesSectionAGerer)
        })
    }



function OuvrirOuFermer (activitesSectionAGerer) {
    if (activitesSectionAGerer.style.display === "none") {
        activitesSectionAGerer.style.display = "block"
        }
    else {
        activitesSectionAGerer.style.display = "none"
    }
    }
