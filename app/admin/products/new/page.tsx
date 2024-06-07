import AddProductForm from "@/components/products/AddProductForm";
import Heading from "@/components/ui/Heading";
import React from "react";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo producto</Heading>

      <AddProductForm />
    </>
  );
}
