function getRandomInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max-min + 1))+min;
}

const dado1 = getRandomInclusive(1,6)
const dado2 = getRandomInclusive(1,6)

const dadoEscolhido1 = `images/dice${dado1}.png`
const dadoEscolhido2 = `images/dice${dado2}.png`

document.getElementsByClassName("img1")[0].setAttribute("src",dadoEscolhido1)
document.getElementsByClassName("img2")[0].setAttribute("src",dadoEscolhido2)

if (dado1 === dado2) {
    document.querySelector("h1").innerHTML = "Empate !"
} else if ( dado1 > dado2){
    document.querySelector("h1").innerHTML = "Player 1 ganhou !! &#x1F6A9;" 
} else {
    document.querySelector("h1").innerHTML = "Player 2 ganhou !! &#x1F6A9;"
}