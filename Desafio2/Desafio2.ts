enum Profissoes {
    Vigilante,
    ControladorAcesso
};

type pessoa = {
    nome :string,
    idade : number,
    profissao : Profissoes
}

let Profissoes1:pessoa = {
    nome: "Priscila",
    idade: 32,
    profissao: Profissoes.Vigilante
};

let Profissoes2:pessoa = {
    nome :"Ruan",
    idade: 19,
    profissao:Profissoes.ControladorAcesso
};
let Profissoes4:pessoa = {
    nome :"welligton",
    idade: 19,
    profissao:Profissoes.Vigilante
};
let Profissoes5:pessoa = {
    nome :"Arthur",
    idade: 19,
    profissao:Profissoes.ControladorAcesso
};
console.log(Profissoes)