import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/prisma";

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: { include: { product: true } },
    },
  });

  return orders;
}

export default async function ProductsPage() {
  const orders = await getPendingOrders();

  return (
    <>
      <Heading>Administrar productos</Heading>
    </>
  );
}
