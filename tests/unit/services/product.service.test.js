const { expect } = require('chai');
const sinon = require('sinon');

const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { findAllReturn, findByIdSuccessReturn, findByIdErrorReturn, getProductByIdErrorReturn, insertSuccessReturn } = require('./mocks/product.service.mock');

describe('Verifica a camada service de product', function () {
  afterEach(sinon.restore);

  describe('Verifica a função de listar todos os produtos', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'findAll').resolves(findAllReturn);

      const result = await productService.getProducts();

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(findAllReturn);
    })
  })
  describe('Verifica a função de buscar produto por id', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'findById').resolves(findByIdSuccessReturn);

      const result = await productService.getProductById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(findByIdSuccessReturn);
    })
    it('Produto não encontrado', async function () {
      sinon.stub(productModel, 'findById').resolves(findByIdErrorReturn);

      const result = await productService.getProductById(9999);

      expect(result.type).to.equal(getProductByIdErrorReturn.type);
      expect(result.message).to.equal(getProductByIdErrorReturn.message);
    })
  })
  describe('Verifica a função de adicionar um novo produto', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'insert').resolves(insertSuccessReturn);

      const result = await productService.addNewProduct({ name: 'ProdutoX' });

      expect(result.type).to.equal(null);
      expect(result.message).to.equal({ name: 'ProdutoX', id: insertSuccessReturn.insertId });
    })
  })
})
