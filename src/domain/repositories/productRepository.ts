import { Product } from "../entities/product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
}
