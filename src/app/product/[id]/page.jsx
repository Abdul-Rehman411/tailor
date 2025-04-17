"use client";

import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <ProductDetails productId={id} />
    </div>
  );
};

export default ProductPage;