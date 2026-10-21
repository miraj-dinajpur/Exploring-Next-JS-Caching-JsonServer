import React from "react";

const ProductCard = ({product}) => {
  return (
    <div>
      <div className="card bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>
            {product.description}
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">${product.price.toFixed(2)}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
