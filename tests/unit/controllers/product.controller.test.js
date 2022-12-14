const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const { getProductsReturn, getProductByIdSucessReturn, getProductByIdErrorReturn, addNewProductSuccessReturn, deleteProductErrorReturn, deleteProductSuccessReturn, updateProductInput, updateProductErrorReturn, updateProductSuccessReturn, getProductByQuerySuccessReturn, getProductByQueryErrorReturn } = require('./mocks/product.controller.mock');

describe('Verifica a camada controller de product', function () {
  afterEach(sinon.restore);

  describe('Verifica a função de listar todos os produtos', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getProducts')
        .resolves(getProductsReturn)
      
      await productController.getProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getProductsReturn.message);
    })
  })
  describe('Verifica a função de buscar produto por id', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { params: { id: 1 }};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getProductById')
        .resolves(getProductByIdSucessReturn)
      
      await productController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getProductByIdSucessReturn.message);
    })
    it('Produto não encontrado', async function () {
      const res = {};
      const req = { params: { id: 9999 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res.message);

      sinon.stub(productService, 'getProductById')
        .resolves(getProductByIdErrorReturn)
      
      await productController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: getProductByIdErrorReturn.message });
    })
  })
  describe('Verifica a função de buscar produto por query', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { query: { q: 'Martelo' }};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getProductByQuery')
        .resolves(getProductByQuerySuccessReturn)
      
      await productController.getProductByQuery(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getProductByQuerySuccessReturn.message);
    })
  })
  describe('Verifica a função de adicionar um novo produto', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { body: { name: 'ProdutoX' } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res.message);

      sinon.stub(productService, 'addNewProduct')
        .resolves(addNewProductSuccessReturn)
      
      await productController.addNewProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(addNewProductSuccessReturn.message);
    })
  })
  describe('Verifica a função de editar produto', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { params: { id: 1 }, body: updateProductInput };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'updateProduct')
        .resolves(updateProductSuccessReturn);
      
      await productController.updateProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(updateProductSuccessReturn.message);
    })
    it('Produto não encontrado', async function () {
      const res = {};
      const req = { params: { id: 1 }, body: updateProductInput };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'updateProduct')
        .resolves(updateProductErrorReturn);
      
      await productController.updateProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: updateProductErrorReturn.message });
    })
  })
  describe('Verifica a função de deletar produto', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.end = sinon.stub().returns();

      sinon.stub(productService, 'deleteProduct')
        .resolves(deleteProductSuccessReturn);
      
      await productController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(204);
    })
    it('Produto não encontrado', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'deleteProduct')
        .resolves(deleteProductErrorReturn);
      
      await productController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: deleteProductErrorReturn.message });
    })
  }) 
})