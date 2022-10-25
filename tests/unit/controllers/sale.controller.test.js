const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { saleController } = require('../../../src/controllers');
const { saleService } = require('../../../src/services');
const { getSalesReturn, getSaleByIdSuccessReturn, getSaleByIdErrorReturn, addNewSalesInput, addNewSalesSuccessReturn, addNewSalesErrorReturn, updateSaleInput, updateSaleSuccessReturn, updateSaleErrorReturn, deleteSaleSuccessReturn, deleteSaleErrorReturn } = require('./mocks/sale.controller.mock');

describe('Verifica a camada controller de sale', function () {
  afterEach(sinon.restore);

  describe('Verifica a função de listar todas as compras', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'getSales')
        .resolves(getSalesReturn);
      
      await saleController.getSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getSalesReturn.message);
    })
  })
  describe('Verifica a função de buscar compra por id', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'getSaleById')
        .resolves(getSaleByIdSuccessReturn);
      
      await saleController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getSaleByIdSuccessReturn.message);
    })
    it('Compra não encontrada', async function () {
      const res = {};
      const req = { params: { id: 9999 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res.message);

      sinon.stub(saleService, 'getSaleById')
        .resolves(getSaleByIdErrorReturn)
      
      await saleController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: getSaleByIdErrorReturn.message });
    })
  })
  describe('Verifica a função de adicionar nova compra', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { body: addNewSalesInput };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'addNewSales')
        .resolves(addNewSalesSuccessReturn);
      
      await saleController.addNewSales(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(addNewSalesSuccessReturn.message);
    })
    it('Produto não encontrado', async function () {
      const res = {};
      const req = { body: addNewSalesInput };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res.message);

      sinon.stub(saleService, 'addNewSales')
        .resolves(addNewSalesErrorReturn);
      
      await saleController.addNewSales(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: addNewSalesErrorReturn.message });
    })
  })
  describe('Verifica a função de editar compra', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { params: { id: 1 }, body: updateSaleInput };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'updateSale')
        .resolves(updateSaleSuccessReturn);
      
      await saleController.updateSale(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(updateSaleSuccessReturn.message);
    })
    it('Compra não encontrada', async function () {
      const res = {};
      const req = { params: { id: 1 }, body: updateSaleInput };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'updateSale')
        .resolves(updateSaleErrorReturn);
      
      await saleController.updateSale(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: updateSaleErrorReturn.message });
    })
  })
  describe('Verifica a função de deletar compra', function () {
    it('Caso de sucesso', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.end = sinon.stub().returns();

      sinon.stub(saleService, 'deleteSale')
        .resolves(deleteSaleSuccessReturn);
      
      await saleController.deleteSale(req, res);

      expect(res.status).to.have.been.calledWith(204);
    })
    it('Compra não encontrada', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'deleteSale')
        .resolves(deleteSaleErrorReturn);
      
      await saleController.deleteSale(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: deleteSaleErrorReturn.message });
    })
  })  
})
