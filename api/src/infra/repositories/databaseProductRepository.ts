import { ProductRepository } from "../../domain/repositories/productRepository";
import { Product } from "../../domain/entities/product";
import { pool } from "../database/mysqlConnection";

export class DatabaseProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const [rows] = await pool.query("SELECT * FROM product");
    return rows as Product[];
  }
}