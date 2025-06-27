import React from "react";
import { useCart } from "../../context/cardContext";

export interface Dish {
    id: number;
    name: string;
    desc: string;
    price: number;
  }

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Salads", image: "/salads.jpg" },
  { name: "Desserts", image: "/desserts.jpg" },
  { name: "Mains", image: "/mains.jpg" },
  { name: "Drinks", image: "/drinks.jpeg" },
  { name: "Specials", image: "/specials.jpg" },
  { name: "Sides", image: "/sides.jpg" },
];

const dishes: Dish[] = [
  {
    id: 1,
    name: "Greek Salad",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
  },
  {
    id: 2,
    name: "Brushetta",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 7.99,
  },
  {
    id: 3,
    name: "Grilled Fish",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 20.0,
  },
  {
    id: 4,
    name: "Pasta",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 18.99,
  },
  {
    id: 5,
    name: "Lemon Dessert",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 6.99,
  },
];



const OrderNow: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <>

      <section className="bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-4">Order Now</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="flex-shrink-0 w-32 cursor-pointer hover:scale-105 transition"
                >
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={category.image} alt={category.name} />
                    </div>
                  </div>
                  <p className="mt-2 text-center text-base-content">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {dishes.map((dish) => (
              <div key={dish.id} className="card bg-base-100 shadow flex flex-col justify-between">
                <div className="card-body">
                  <h3 className="card-title text-primary">{dish.name}</h3>
                  <p className="text-base-content">{dish.desc}</p>
                  <div className="text-right text-lg font-semibold text-secondary">${dish.price.toFixed(2)}</div>
                </div>
                <div className="card-footer p-4">
                  <button
                    onClick={() => addToCart(dish)}
                    className="btn btn-primary w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderNow;
