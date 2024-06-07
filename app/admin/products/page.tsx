import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/prisma";

async function getProducts() {
  const products = await prisma.product.findMany();

  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Heading>Administrar productos</Heading>

      <ProductTable products={products} />
    </>
  );
}
