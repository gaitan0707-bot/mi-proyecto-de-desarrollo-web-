"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const getProductListUseCase_1 = require("../../usecases/getProductListUseCase");
const databaseProductRepository_1 = require("../../infra/repositories/databaseProductRepository");
class ProductController {
    async getAll(req, res) {
        const repository = new databaseProductRepository_1.DatabaseProductRepository();
        const useCase = new getProductListUseCase_1.GetProductListUseCase(repository);
        const products = await useCase.execute();
        res.json(products);
    }
}
exports.ProductController = ProductController;
