"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProductRepository = void 0;
const mysqlConnection_1 = require("../database/mysqlConnection");
class DatabaseProductRepository {
    async getAll() {
        const [rows] = await mysqlConnection_1.pool.query("SELECT * FROM product");
        return rows;
    }
}
exports.DatabaseProductRepository = DatabaseProductRepository;
