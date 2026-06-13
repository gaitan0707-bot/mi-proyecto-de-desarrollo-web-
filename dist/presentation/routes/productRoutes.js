"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
const controller = new productController_1.ProductController();
router.get("/", (req, res) => controller.getAll(req, res));
exports.default = router;
