let nome = "Wagner"
let elo = 7002
const de = "O elo de "

if(elo > 500 && elo < 1000){
    console.log(de + nome + " é FERRO!")
} 
else if (elo >= 1001 && elo <= 2000){
    console.log(de + nome + " é BRONZE!")
} 
else if (elo >= 2001 && elo <= 5000){
    console.log(de + nome + " é PRATA!")
}
else if (elo >= 5001 && elo <= 7000){
    console.log(de + nome + " é OURO")
}
else if (elo >= 7001 && elo <= 8000){
    console.log(de + nome + " é PLATINA!")
}
else if (elo >= 8001 && elo >= 9000){
    console.log(de + nome + " é ASCENDENTE!")
}
else if (elo >= 9001 && elo >= 10000){
    console.log(de + nome + " é IMORTAL!!!!")
}
else if (elo >= 10001){
    console.log(de + nome + " é DESAFIANTE!!!!!!!")
} else {console.log("Você ainda não é um jogador ranqueado :c")}
