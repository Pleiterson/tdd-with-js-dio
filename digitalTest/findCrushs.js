const listaDeCrush = [
  'Robert Downey Jr.',
  'Joventilana Joaquina',
  'Steve Jobs',
  'Bill Gates'
];

const somaCrush = (n1,n2) => {
  return n1 + n2;
}

const encontrarCrush = nome => {
  try {
    validacao(nome);
    const crushFind = listaDeCrush.find((crush) => crush === nome);

    return crushFind ? crushFind : 'Crush não encontrado';
  } catch (erro) {
    return erro;
  }
}

const validacao = nome => {
  if (!nome) throw 'Campo nome está vazio';
  if (typeof nome !== 'string') throw 'Tipo inválido';
}

module.exports = {
  somaCrush,
  encontrarCrush
}
