let activitesFamiliales = document.getElementById("activitesFamiliales")
let activitesFamilialesSection = document.getElementById("activitesFamilialesSection")

activitesFamilialesSection.style.display = "none"

activitesFamiliales.addEventListener("click", () => {
    if (activitesFamilialesSection.style.display === "none") {
        activitesFamilialesSection.style.display = "block"
        }
    else {
        activitesFamilialesSection.style.display = "none"
    }
    })