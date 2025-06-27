import React from "react";
import CardCommande from "../ui/commande";
import { useCart, } from "../../context/cardContext"; // Attention au bon chemin selon ton projet

const PanierDetail: React.FC = () => {
  const { cart } = useCart();
  const {clearCart} = useCart()

  // Grouper les plats identiques pour calculer les quantités
  const grouped = cart.reduce<Record<number, { dish: typeof cart[0]; quantity: number }>>(
    (acc, dish) => {
      if (!acc[dish.id]) {
        acc[dish.id] = { dish, quantity: 0 };
      }
      acc[dish.id].quantity += 1;
      return acc;
    },
    {}
  );

  const groupedArray = Object.values(grouped);

  // Calcul du total global
  const totalPrice = groupedArray.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Votre panier</h2>
      {groupedArray.length === 0 && <p>Votre panier est vide.</p>}
      {groupedArray.map(({ dish, quantity }) => (
        <CardCommande key={dish.id} dish={dish} quantity={quantity} />
      ))}
      {groupedArray.length > 0 && (
        <div className="text-right font-bold text-lg mt-4">
          Total : ${totalPrice.toFixed(2)}
        </div>
      )}
      <div className="items-center text-center">
      <button onClick={clearCart} className="btn btn-primary mx-auto ">
        empty
      </button>
      </div>
    </div>
  );
};

export default PanierDetail;
