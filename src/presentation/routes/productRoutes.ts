import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();
const controller = new ProductController();

router.get("/", (req, res) => controller.getAll(req, res));

export default router;