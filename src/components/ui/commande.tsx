import React from "react";

interface Dish {
  id: number;
  name: string;
  desc: string;
  price: number;
}

interface CardCommandeProps {
  dish: Dish;
  quantity: number;
}

const CardCommande: React.FC<CardCommandeProps> = ({ dish, quantity }) => {
  const totalPrice = dish.price * quantity;

  return (
    <div className="card bg-base-100 shadow mb-4">
      <div className="card-body">
        <h3 className="card-title text-primary flex justify-between items-center">
          {dish.name}
          <span className="badge badge-secondary badge-lg">{quantity}</span>
        </h3>
        <p className="text-base-content mb-2">{dish.desc}</p>
        <div className="flex justify-between font-semibold text-secondary">
          <span>Unit Price: ${dish.price.toFixed(2)}</span>
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardCommande;
