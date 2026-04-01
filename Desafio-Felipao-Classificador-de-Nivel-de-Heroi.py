#Classificador de Nível de Herói - Projeto DIO - Lógica de Programação

#O curso é dado em JavaScript, mas por limitações entre o Node e o ato de input
#no VSCode, preferi fazer em Python.

#Fiz um loop while para manter o programa rodando enquanto o usuário não digitar
#sair, e já definindo a variável nomeHeroi.

while True:
    nomeHeroi = input("Qual o nome do seu herói? (ou 'sair' para encerrrar)\n")
    if nomeHeroi.lower() == "sair":
        break

#Definindo variavel nivelXP e nivelHeroi que está vazia, e só será preenchida
#após a validação if/elif/else seguinte.

    nivelXP = input("\nQuanto seu herói tem de XP?\n")
    nivelHeroi = ""

#Fazendo a comparação relacional do nivelXP, repare que transformei a string que
#veio pelo input para int antes de fazer as validações do if/elif.

    nivelXP = int(nivelXP)

    if nivelXP >= 10001:
        nivelHeroi = "Radiante"
    elif nivelXP >= 9001:
        nivelHeroi = "Imortal"
    elif nivelXP >= 8001:
        nivelHeroi = "Ascendente"
    elif nivelXP >= 7001:
        nivelHeroi = "Platina"  
    elif nivelXP >= 5001:
        nivelHeroi = "Ouro"
    elif nivelXP >= 2001:
        nivelHeroi = "Prata"
    elif nivelXP >= 1001:
        nivelHeroi = "Bronze"
    else:
        nivelHeroi = "Ferro"

#Imprimindo frase solicitada no desafio.

    print("\nO herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + ".\n")

