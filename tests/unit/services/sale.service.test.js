const { expect } = require('chai');
const sinon = require('sinon');

const { saleService } = require('../../../src/services');
const { saleModel, productModel } = require('../../../src/models');
const { findAllSalesReturn, findByIdSaleSuccessReturn, findByIdSaleErrorReturn, getSaleByIdErrorReturn, validateProductsFindAllSuccess, validateProductsFindAllError, addNewSaleErrorReturn, addNewSaleInput } = require('./mocks/sale.service.mock');

describe('Verifica a camada service de sale', function () {
  afterEach(sinon.restore);

  describe('Verifica a função de listar todas as compras', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(saleModel, 'findAll').resolves(findAllSalesReturn);

      const result = await saleService.getSales();

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(findAllSalesReturn);
    })
  })
  describe('Verifica a função de buscar compra por id', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleSuccessReturn);

      const result = await saleService.getSaleById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(findByIdSaleSuccessReturn);
    })
    it('Compra não encontrada', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleErrorReturn);

      const result = await saleService.getSaleById(9999);

      expect(result.type).to.equal(getSaleByIdErrorReturn.type);
      expect(result.message).to.equal(getSaleByIdErrorReturn.message);
    })
  })
  describe('Verifica a função de adicionar nova compra', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(saleModel, 'insert').resolves(2);
      sinon.stub(productModel, 'findAll').resolves(validateProductsFindAllSuccess);

      const result = await saleService.addNewSales(addNewSaleInput);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal({ id: 2, itemsSold: addNewSaleInput });
    })
    it('Produto não encontrado', async function () {
      sinon.stub(saleModel, 'insert').resolves(2);
      sinon.stub(productModel, 'findAll').resolves(validateProductsFindAllError);

      const result = await saleService.addNewSales(addNewSaleInput);

      expect(result.type).to.equal(addNewSaleErrorReturn.type);
      expect(result.message).to.deep.equal(addNewSaleErrorReturn.message);
    })
  })
  describe('Verifica a função de editar compra', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleSuccessReturn);
      sinon.stub(productModel, 'findAll').resolves(validateProductsFindAllSuccess);
      sinon.stub(saleModel, 'updateById').resolves(2);

      const result = await saleService.updateSale(2, addNewSaleInput);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal({ saleId: 2, itemsUpdated: addNewSaleInput });
    })
    it('Produto não encontrado', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleSuccessReturn);
      sinon.stub(productModel, 'findAll').resolves(validateProductsFindAllError);

      const result = await saleService.updateSale(2, addNewSaleInput);

      expect(result.type).to.equal(addNewSaleErrorReturn.type);
      expect(result.message).to.deep.equal(addNewSaleErrorReturn.message);
    })
    it('Compra não encontrada', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleErrorReturn);

      const result = await saleService.updateSale(2, addNewSaleInput);

      expect(result.type).to.equal(getSaleByIdErrorReturn.type);
      expect(result.message).to.deep.equal(getSaleByIdErrorReturn.message);
    })
  })
  describe('Verifica a função de deletar compra', function () {
    it('Caso de sucesso', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleSuccessReturn);
      sinon.stub(saleModel, 'deleteById').resolves();

      const result = await saleService.deleteSale(2);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(undefined);
    })
    it('Compra não encontrada', async function () {
      sinon.stub(saleModel, 'findById').resolves(findByIdSaleErrorReturn);

      const result = await saleService.deleteSale(2);

      expect(result.type).to.equal(getSaleByIdErrorReturn.type);
      expect(result.message).to.deep.equal(getSaleByIdErrorReturn.message);
    })
  })  
})
