enum Trabalho {
  Enfermeira,
  Medico
}

type Humano = {
  nome: string,
  idade: number,
  profissao: Trabalho
}

let pessoa1: Humano = {
  nome: 'maria',
  idade: 29,
  profissao: Trabalho.Enfermeira
};

let pessoa2: Humano = {
  nome: 'roberto',
  idade: 19,
  profissao: Trabalho.Medico
};

let pessoa3: Humano = {
  nome: 'laura',
  idade: 32,
  profissao: Trabalho.Enfermeira
};