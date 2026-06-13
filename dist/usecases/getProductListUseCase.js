"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductListUseCase = void 0;
class GetProductListUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.getAll();
    }
}
exports.GetProductListUseCase = GetProductListUseCase;
