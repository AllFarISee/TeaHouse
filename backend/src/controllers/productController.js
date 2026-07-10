import prisma from "../config/prisma.js";

export const getProducts = async (req, res) => {
  try {
    const host = `${req.protocol}://${req.get("host")}`;

    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });

    const result = products.map((product) => ({
      ...product,

      image: product.image ? `${host}/uploads/${product.image}` : null,
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        category: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const host = `${req.protocol}://${req.get("host")}`;

    res.json({
      ...product,
      image: product.image ? `${host}/uploads/${product.image}` : null,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image, categoryId } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        image: req.file ? req.file.filename : null,
        categoryId: Number(categoryId),
      },
    });

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId } = req.body;

    const oldProduct = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        categoryId: Number(categoryId),
        image: req.file ? req.file.filename : oldProduct.image,
      },
    });

    res.json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await prisma.product.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
