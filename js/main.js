let inizia = document.querySelector(".inizia")
let difficolta
const griglia = document.querySelector(".griglia")


inizia.addEventListener("click", function () {
    difficolta = document.getElementById("difficolta").value
    let nCelle
    let nomeClasse
    const boxDifficolta = document.getElementById("difficolta")
    let bombe = []
    let punteggio = 0

    if (difficolta == "") {
        console.log("ciao")
        boxDifficolta.classList.add("nessuna-scelta")
    }

    else if (difficolta == "facile") {
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
        genBombe(bombe)

        for (let i = 1; i <= nCelle; i++) {
            const quadrato = document.createElement("div");
            quadrato.classList.add(nomeClasse)

            griglia.append(quadrato)

            quadrato.addEventListener("click", function () {
                if (bombe.includes(i)) {
                    quadrato.classList.add("clicked-bomb")
                }

                else {
                    quadrato.classList.add("clicked-safe")
                    punteggio++
                    console.log("Ora il tuo punteggio è:" + punteggio)
                }

            })
        }

    }

    function genBombe(array) {
        while (array.length < 16) {
            numRandom = Math.floor(Math.random() * 99 + 1)
            if (array.includes(numRandom)) {
            }
            else {
                array.push(numRandom)
            }
            console.log(array)
        }
    }
})