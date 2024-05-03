// VARIABILI GLOBALI
let inizia = document.querySelector(".inizia")
let difficolta
const griglia = document.querySelector(".griglia")

// BOTTONE PER FAR INIZIARE LA PARTITA
inizia.addEventListener("click", function () {

    function creaGioco(griglia, difficolta,) {


        // VARIABILI PER GESTIRE IL GIOCO
        difficolta = document.getElementById("difficolta").value
        let nCelle
        let nomeClasse
        const boxDifficolta = document.getElementById("difficolta")
        let bombe = []
        let punteggio = 0
        let gameOver = false
        const sfondoScuro = document.getElementById("sfondo")
        const bannerGO = document.getElementById("banner")
        let punteggioMax = nCelle - bombe.length

        // SVUOTARE ELEMENTI FINE GIOCO
        sfondoScuro.classList.remove("sfondo")
        bannerGO.classList.remove("banner")
        bannerGO.innerHTML = ""

        // INSERIRE I VALORI NELLE VARIABILI A SECONDA DELLA DIFFICOLTA' SCELTA
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

        // FUNZIONE PER GENERARE LA GRIGLIA IN BASE ALLA DIFFICOLTA' SCELTA
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
                        gameOver = true
                        console.log("hai perso")
                    }

                    else {
                        quadrato.classList.add("clicked-safe")
                        punteggio++
                        console.log("Ora il tuo punteggio è:" + punteggio)
                    }

                    if (gameOver) {
                        finePartitaL(sfondoScuro, bannerGO, punteggio)
                    }

                    else if (punteggioMax == punteggio) {
                        finePartitaW(sfondoScuro, bannerGO, punteggio)
                    }
                })
            }
        }

        // FUNZIONE PER GENERARE 16 BOMBE CASUALI
        function genBombe(array) {
            while (array.length < 16) {
                numRandom = Math.floor(Math.random() * nCelle + 1)
                if (array.includes(numRandom)) {
                }
                else {
                    array.push(numRandom)
                }
            }
            console.log(array)
        }

        function finePartitaL(sfondo, banner, punteggio) {
            sfondo.classList.add("sfondo")
            banner.classList.add("banner")
            const ricomincia = document.createElement("button")
            const punteggioUser = document.createElement("p")
            punteggioUser.classList.add("testo")
            punteggioUser.innerHTML = "Il tuo punteggio è: " + punteggio
            ricomincia.innerHTML = "GIOCA"
            ricomincia.classList.add("fine-gioco")
            const titBanner = document.createElement("h2")
            titBanner.innerHTML = "HAI PERSO!"
            banner.append(titBanner)
            banner.append(punteggioUser)
            banner.append(ricomincia)
            ricomincia.addEventListener("click", function () {
                creaGioco(griglia, difficolta)
            })
        }

        function finePartitaW(sfondo, banner, punteggio) {
            sfondo.classList.add("sfondo")
            banner.classList.add("banner")
            const ricomincia = document.createElement("button")
            const punteggioUser = document.createElement("p")
            punteggioUser.classList.add("testo")
            punteggioUser.innerHTML = "Il tuo punteggio è: " + punteggio
            ricomincia.innerHTML = "GIOCA"
            ricomincia.classList.add("fine-gioco")
            const titBanner = document.createElement("h2")
            titBanner.innerHTML = "CONGRATULAZIONI HAI VINTO!"
            banner.append(titBanner)
            banner.append(punteggioUser)
            banner.append(ricomincia)
            ricomincia.addEventListener("click", function () {
                creaGioco(griglia, difficolta)
            })
        }
    }

    creaGioco(griglia, difficolta)
})