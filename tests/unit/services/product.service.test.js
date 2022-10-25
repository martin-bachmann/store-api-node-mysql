const { expect } = require('chai');
const sinon = require('sinon');

const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { findAllReturn, findByIdSuccessReturn, findByIdErrorReturn, getProductByIdErrorReturn, insertSuccessReturn, findByQuerySuccessReturn, updateByIdSuccessReturn, deleteByIdSuccessReturn } = require('./mocks/product.service.mock');

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
  describe('Verifica a função de buscar produto por query', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'findByQuery').resolves(findByQuerySuccessReturn);

      const result = await productService.getProductByQuery('Martelo');

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(findByQuerySuccessReturn);
    })
    it('Query não informada', async function () {
      sinon.stub(productModel, 'findAll').resolves(findAllReturn);

      const result = await productService.getProductByQuery();

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(findAllReturn);
    })
  })
  describe('Verifica a função de adicionar um novo produto', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'insert').resolves(insertSuccessReturn);

      const result = await productService.addNewProduct({ name: 'ProdutoX' });

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal({ id: insertSuccessReturn, name: 'ProdutoX' });
    })
  })
  describe('Verifica a função de atualizar produto', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'findById').resolves(findByIdSuccessReturn);
      sinon.stub(productModel, 'updateById').resolves(updateByIdSuccessReturn);

      const result = await productService.updateProduct(1, 'Martelo de Thor');

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal({ id: 1, name: updateByIdSuccessReturn.name });
    })
    it('Produto não encontrado', async function () {
      sinon.stub(productModel, 'findById').resolves(findByIdErrorReturn);

      const result = await productService.updateProduct(9999, 'Martelo de Thor');

      expect(result.type).to.equal(getProductByIdErrorReturn.type);
      expect(result.message).to.equal(getProductByIdErrorReturn.message);
    })
  })
  describe('Verifica a função de deletar produto', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(productModel, 'findById').resolves(findByIdSuccessReturn);
      sinon.stub(productModel, 'deleteById').resolves(deleteByIdSuccessReturn);

      const result = await productService.deleteProduct(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal({ name: deleteByIdSuccessReturn.name });
    })
    it('Produto não encontrado', async function () {
      sinon.stub(productModel, 'findById').resolves(findByIdErrorReturn);

      const result = await productService.deleteProduct(9999);

      expect(result.type).to.equal(getProductByIdErrorReturn.type);
      expect(result.message).to.equal(getProductByIdErrorReturn.message);
    })
  })
})
