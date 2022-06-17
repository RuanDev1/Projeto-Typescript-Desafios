"use strict";
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Vigilante"] = 0] = "Vigilante";
    Profissoes[Profissoes["ControladorAcesso"] = 1] = "ControladorAcesso";
})(Profissoes || (Profissoes = {}));
;
let Profissoes1 = {
    nome: "Priscila",
    idade: 32,
    profissao: Profissoes.Vigilante
};
let Profissoes2 = {
    nome: "Ruan",
    idade: 19,
    profissao: Profissoes.ControladorAcesso
};
let Profissoes4 = {
    nome: "welligton",
    idade: 19,
    profissao: Profissoes.Vigilante
};
let Profissoes5 = {
    nome: "Arthur",
    idade: 19,
    profissao: Profissoes.ControladorAcesso
};
console.log(Profissoes);
