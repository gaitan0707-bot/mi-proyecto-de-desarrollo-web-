import { ProductRepository } from "../domain/repositories/productRepository";
import { Product } from "../domain/entities/product";

export class GetProductListUseCase {
  constructor(private repository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.repository.getAll();
  }
}
