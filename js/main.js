let inizia = document.querySelector(".inizia")
let difficolta
const griglia = document.querySelector(".griglia")

inizia.addEventListener("click", function () {
    difficolta = document.getElementById("difficolta").value
    let nCelle
    let nomeClasse

    if (difficolta == "facile") {
        nCelle = 100
        nomeClasse = "q-easy"
        genGriglia(nCelle, nomeClasse)
    }
    else if (difficolta == "media") {
        nCelle = 81
        nomeClasse = "q-medium"
        genGriglia(nCelle, nomeClasse)
    }
    else {
        nCelle = 49
        nomeClasse = "q-difficult"
        genGriglia(nCelle, nomeClasse)
    }
    
    function genGriglia(nCelle, nomeClasse) {
        griglia.innerHTML = ""

        for (let i = 1; i <= nCelle; i++) {
            const quadrato = document.createElement("div");
            quadrato.classList.add(nomeClasse)

            griglia.append(quadrato)

            quadrato.addEventListener("click", function () {
                quadrato.classList.add("clicked")
                console.log(i)
            })
        }
    }

})