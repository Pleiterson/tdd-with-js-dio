const should = require('should');
const findCrushs = require('../findCrushs');

describe('find crushs', () => {
  it('Soma crushs', () => {
    findCrushs.somaCrush(2,3).should.be.equal(5);
  })
  
  it('Deve somar dois números e retornar 30', () => {
    findCrushs.somaCrush(10,20).should.be.equal(30);
  })

  it('Passar um nome e deve retornar a mensagem de que a pessoa não foi encontrada', () => {
    findCrushs.encontrarCrush('Joventilana Joaquina').should.be.equal('Crush não encontrado');
  })

  it('Retorna a mensagem de que o nome é obrigatório', () => {
    findCrushs.encontrarCrush().should.be.equal('Campo nome está vazio');
  })

  it('Retorna mensagem de tipo inválido', () => {
    findCrushs.encontrarCrush(123).should.be.equal('Tipo inválido');
  })

  it('Deve retornar um nome da lista', () => {
    findCrushs.encontrarCrush('Joventilana Joaquina').should.be.equal('Joventilana Joaquina').and.be.a.String();
  })
})
