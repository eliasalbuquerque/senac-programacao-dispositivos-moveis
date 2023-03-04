class Aluno {
    nome = ""
    matricula = 0
    ativo = true

    constructor(nome){
        this.nome = nome
        console.log("- log: aluno",this.nome ,"criado")
    }

    responderChamada(){
        console.log("aluno", this.nome, "presente")
    }
}

// instancias sem construtor
// const alunoJoao = new Aluno()
// alunoJoao.nome = "Joao"
// const alunoMaria = new Aluno()
// alunoMaria.nome = "Maria"

// instancias com costrutor
const alunoJoao = new Aluno("Joao")
const alunoMaria = new Aluno("Maria")

alunoJoao.responderChamada()
alunoMaria.responderChamada()