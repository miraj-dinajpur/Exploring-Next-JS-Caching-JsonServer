import React from "react";
import ProductCard from "../components/ProductCard";

const getProducts = async () => {
  const res = await fetch("http://localhost:5001/products");
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products Page</h2>
      <h2 className="text-2xl font-bold mb-4">
        Total Products: {products.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
