const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const { getProductsReturn, getProductByIdSucessReturn, getProductByIdErrorReturn } = require('./mocks/product.controller.mock');

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
      const req = { params: { id: 9999 }};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res.message);

      sinon.stub(productService, 'getProductById')
        .resolves(getProductByIdErrorReturn)
      
      await productController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(getProductByIdErrorReturn.message);
    })
  })
})