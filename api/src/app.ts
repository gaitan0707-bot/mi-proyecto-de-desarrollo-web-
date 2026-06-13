import express from "express";
import productRoutes from "./presentation/routes/productRoutes";

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});

