const aluno = {
    nome: "Joao Carlos",
    matricula: 22001,
    ativo: true,
    responderChamada: () => {
        console.log("aluno", aluno.nome, "presente")
    }
}

console.log(aluno.nome);
aluno.responderChamada();