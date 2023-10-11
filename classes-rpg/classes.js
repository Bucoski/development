/**
 * ## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 */

class Heroi{

    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }
    desbloquearAtaque(tipo){
        if(this.tipo == "Guerreiro"){
            this.ataque = "Ataque de Espada"
        }
        else if(this.tipo == "Mago"){
            this.ataque = "Ataque usando Magia"
        }
        else if(this.tipo == "Monge"){
            this.ataque = "Ataque de Bastão"
        }
        else if(this.tipo == "Ninja"){
            this.ataque = "Ataque de Kunai"
        }
    }


    atacar(){
        if (this.tipo == "Guerreiro"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
        else if (this.tipo == "Mago"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
        else if (this.tipo == "Monge"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
        else if (this.tipo == "Ninja"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
    }
}

let Mago1 = new Heroi("Carlos", 81, "Mago")
let Guerreiro1 = new Heroi("Matheus", 25, "Guerreiro")
let Ninja1 = new Heroi("Wagner", 24, "Ninja")
let Monge1 = new Heroi("Samantha", 35, "Monge")


Mago1.desbloquearAtaque()
Guerreiro1.desbloquearAtaque()
Ninja1.desbloquearAtaque()
Monge1.desbloquearAtaque()

Mago1.atacar()
Guerreiro1.atacar()
Ninja1.atacar()
Monge1.atacar()

