import express from "express";
import cors from "cors";
import categoryRoute from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import orderRoute from "./routes/orderRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);
app.use("/categories", categoryRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/orders", orderRoute);
app.use("/uploads", express.static("src/uploads"));

app.get("/", (req, res) => {
  res.send("TeaHouse API");
});

export default app;
