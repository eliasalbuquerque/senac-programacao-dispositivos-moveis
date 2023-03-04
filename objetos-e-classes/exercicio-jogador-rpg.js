class Jogador {
    nome = ""
    hp = 100
    xp = 10
    poison = false

    constructor(nome){
        this.nome = nome
    }
    
    cura(){
        console.log(this.nome, "usou cura");
        if (this.hp < 90) {
            this.hp = this.hp + 10
            console.log("- ganhou 10 de cura")
        } else {
            this.hp = 100
            console.log("- vida cheia!")
        }
        
        if (this.poison == true) {
            this.poison = false
            console.log("- fim do envenenamento!")
        }
        this.status()
    }
    
    experiencia(){
        this.xp = this.xp + 10
        console.log("- ganhou 10 de experiencia")
    }
    
    ataque(oponente){
        console.log(this.nome, "ataca", oponente.nome)
        this.experiencia()
        oponente.dano()
        this.status()
        oponente.status()
    }
    
    dano(){
        this.hp = this.hp - 15
        console.log(this.nome, "recebe dano (-15 HP)")
        let damage = Math.random() * 100
        if (damage > 80) {
            this.envenenamento()
        }
    }
    
    envenenamento(){
        this.poison = true
        this.hp = this.hp - 5
        console.log("- dano por envenenamento (-5 HP)")
    }
    
    descansa(){
        if (this.nome == "Gandalf") {
            console.log(this.nome, "descansa e fuma seu cachimbo")
        } else {
            console.log(this.nome, "descansa")
        }
    }

    status(){
        if (this.poison == true) {
            console.log(
                this.nome, 
                "- HP", this.hp, 
                ": XP", this.xp, 
                ": ENV"
                )
        } else {
            console.log(
                this.nome, 
                "- HP", this.hp, 
                ": XP", this.xp
                )
        }
    }
}

/**
 * status: nome, hp, xp, (poison)
 * 
 * jogador1 ataca outro jogador2
 * - ataque
 * - dano
 * - status: 
 * jogador1 ataca outro jogador2(envenado)
 * - ataque
 * - dano
 * - envenenamento
 * - status:
 * jogador2 usa cura
 * - cura
 * - status:
 */

const jogador1 = new Jogador("Boromir")
const jogador2 = new Jogador("Legolas")
const jogador3 = new Jogador("Gandalf")

jogador1.ataque(jogador2)
jogador1.ataque(jogador2)
jogador2.cura()
jogador2.ataque(jogador1)
jogador3.descansa()