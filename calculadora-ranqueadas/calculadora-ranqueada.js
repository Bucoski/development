/**
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */

win = 55
defeat = 6
result = winDefeat(win, defeat)

// condicionais para seleção da rank
let level = " "
if(result < 10){
    level = "Ferro"
} else if(result < 20){
    level = "Bronze"
} else if(result < 50){
    level = "Prata"
} else if(result < 80){
    level = "Ouro"
} else if(result < 90){
    level = "Diamante"
} else if(result < 100){
    level = "Lendário"
} else if(result <= 101){
    level = "Imortal"
}

console.log("O herói tem um saldo de vitórias igual a " + win + " e está no nível " + level)



// cálculo de vitória - derrota
function winDefeat(w, d){
    let diference = w - d
    return diference
}
