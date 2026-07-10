import prisma from "../config/prisma.js";

export const checkout = async (req, res) => {
  try {
    const { customer, phone, address, items } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const result = await prisma.$transaction(async (tx) => {
      let total = 0;

      const orderItems = [];

      for (const item of items) {
        const product = await tx.product.findUnique({
          where: {
            id: Number(item.productId),
          },
        });

        if (!product) {
          throw new Error("Product not found");
        }

        if (product.stock < item.quantity) {
          throw new Error(`${product.name} stock is not enough`);
        }

        const subtotal = product.price * item.quantity;

        total += subtotal;

        orderItems.push({
          productId: product.id,
          quantity: item.quantity,
          subtotal,
        });

        await tx.product.update({
          where: {
            id: product.id,
          },
          data: {
            stock: product.stock - item.quantity,
          },
        });
      }

      const order = await tx.order.create({
        data: {
          customer,
          phone,
          address,
          total,
        },
      });

      for (const item of orderItems) {
        await tx.orderItem.create({
          data: {
            orderId: order.id,
            productId: item.productId,
            quantity: item.quantity,
            subtotal: item.subtotal,
          },
        });
      }

      return order;
    });

    res.status(201).json({
      message: "Checkout success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
