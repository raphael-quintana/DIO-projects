class Hero {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    
        if (this.tipo == "mago"){
            this.ataque = "magia"
        } else if (this.tipo == "guerreiro"){
            this.ataque = "espada"
        } else if (this.tipo == "monge") {
            this.ataque = "artes marciais"
        } else if (this.tipo == "ninja") {
            this.ataque = "shuriken"
        }
       
    }

    atacar(){
        console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${this.ataque}.`)
    }

}


let doomSlayer = new Hero("Hellwalker", 23, "mago")
let hideoKojima = new Hero("Solid Snake", 55, "ninja")


hideoKojima.atacar()
doomSlayer.atacar()

