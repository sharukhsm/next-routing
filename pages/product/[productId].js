import React from "react";
import { useRouter } from "next/router";
const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h2>Details about product {productId}</h2>
    </div>
  );
};

export default ProductDetail;
