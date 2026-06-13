import { Request, Response } from "express";
import { GetProductListUseCase } from "../../usecases/getProductListUseCase";
import { DatabaseProductRepository } from "../../infra/repositories/databaseProductRepository";

export class ProductController {
  async getAll(req: Request, res: Response): Promise<void> {
    const repository = new DatabaseProductRepository();
    const useCase = new GetProductListUseCase(repository);
    const products = await useCase.execute();
    res.json(products);
  }
}