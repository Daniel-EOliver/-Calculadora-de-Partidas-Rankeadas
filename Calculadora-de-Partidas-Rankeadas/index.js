let sV = 0; // Saldo de vitória
let sD = 0; // Saldo de Derrota

for (let i = 0; i < 0; i++) { //Quantidade de Vitorias
    sV += 1;
}

for (let i = 0; i < 0; i++) { //Quantidade de Derrotas
    sD +=1;
}
function resultado (){
    return sV - sD
}

let saldo = resultado ();
let nivel = "";

if (saldo <=10) {
    nivel = "Ferro"

}else if (saldo <=20){
    nivel = "Bronze"

}else if (saldo <=50){
    nivel = "Prata"

}else if (saldo <=80){
    nivel = "Ouro"

}else if (saldo <=90){
    nivel = "Diamante"

}else if (saldo <=100){
    nivel = "Lendário"

}else if (saldo <=101){
    nivel = "Imortal"
}
console.log ("O Herói tem de saldo de " + saldo + " pontos e está no nível de " + nivel)