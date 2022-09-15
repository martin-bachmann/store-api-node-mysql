const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { findAllReturn, findByIdErrorReturn, findByIdSuccessReturn, insertSuccessReturn } = require('./mocks/product.model.mock');

describe('Verifica a camada model de product', function () {
  afterEach(sinon.restore);

  describe('Verifica a função de listar todos os produtos', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([findAllReturn]);

      const result = await productModel.findAll();

      expect(result).to.been.deep.equal(findAllReturn);
    })
  })
  describe('Verifica a função de buscar produto por id', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([[findByIdSuccessReturn]]);

      const result = await productModel.findById();

      expect(result).to.been.deep.equal(findByIdSuccessReturn);
    })
    it('Produto não encontrado', async function () {
      sinon.stub(connection, 'execute').resolves([[findByIdErrorReturn]]);

      const result = await productModel.findById();

      expect(result).to.been.deep.equal(findByIdErrorReturn);
    })
  })
  describe('Verifica a função de adicionar um novo produto', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([insertSuccessReturn]);

      const result = await productModel.insert({ name: 'ProdutoX' });
      console.log(result);

      expect(result).to.been.deep.equal(insertSuccessReturn.insertId);
    })
  })
})
