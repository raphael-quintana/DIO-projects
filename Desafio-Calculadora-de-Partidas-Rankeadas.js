//Desafio DIO - Calculadora de Partidas Rankeadas


//Definindo e populando as variáveis vitorias e derrotas.

let derrotas = 25
let vitorias = 75


//Criando a função calcularSaldo para executar o calculo necessário. Logo após,
//defino a variável e já faço a chamada da função.

function calcularSaldo(vitorias, derrotas){
   return vitorias - derrotas
}

let saldoVitorias = calcularSaldo(vitorias, derrotas)


//Criando a função calcularNivel para fazer a análise relacional entre os itens,
//, logo após já definindo a variável e chamando a função.

function calcularNivel(vitorias){
    if (vitorias >= 101){
        let nivelHeroi = "Imortal"
        return nivelHeroi
    } else if (vitorias >= 91){
        let nivelHeroi = "Lendário"
        return nivelHeroi
    } else if (vitorias >= 81){
        let nivelHeroi = "Diamante"
        return nivelHeroi
    } else if (vitorias >= 51){
        let nivelHeroi = "Ouro"
        return nivelHeroi
    } else if (vitorias >= 21){
        let nivelHeroi = "Prata"
        return nivelHeroi 
    } else if (vitorias >= 11){
        let nivelHeroi = "Bronze"
        return nivelHeroi
    } else {
        let nivelHeroi = "Ferro"
        return nivelHeroi
    }
}

let nivelHeroi = calcularNivel(vitorias)


//Informando o resultado ao usuário.

console.log("\nO Herói tem o saldo de " + saldoVitorias +
      " vitórias e está no nível " + nivelHeroi + "!")


//Aqui fiz um pequeno while para deixar uma mensagem especial para o jogador que
//atingir o nível máximo.

while(nivelHeroi == "Imortal"){
        console.log("\nParabéns, você é um jogador de elite!")
    break
}