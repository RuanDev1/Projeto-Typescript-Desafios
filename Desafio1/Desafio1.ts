
//Desafio 1
let cadastro = {
    codigo: 15,
    name:"Ruan"
};

//Desafio2
let cadastro1:(code:number, nome:string)=> {
    codigo:15,
    nome:'Ruan'
}

//Desafio3
interface cadastro {
    codigo:number
    nome:string
}
//Desafio4
const cadastroobj = {} as cadastro ;
cadastroobj.codigo =15;
cadastroobj.nome ='Ruan';

const cadastroobj2: cadastro = {
    codigo:15,
    nome:'Ruan'
}
