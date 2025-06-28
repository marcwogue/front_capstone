import React from 'react';
import { Link, NavLink } from 'react-router-dom';


// Définition de l'interface pour un plat
interface Dish {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

// Données des plats pour la section "Specials"
const specialDishes: Dish[] = [
    {
        id: 1,
        name: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: 'desserts.jpg',
    },
    {
        id: 2,
        name: "Bruschetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: 'mains.jpg',
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: 'specials.jpg',
    },
];

const Special: React.FC = () => {
    return (
        <section className="bg-base-100 py-16 md:py-20"> {/* Adjusted padding for spacing */}
            <div className="container mx-auto px-4">
                {/* Header section with title and button */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0">Specials</h2>
                    <NavLink
                        to="/menu"
                        className="btn bg-gray-800 text-white hover:bg-gray-700 border-none rounded-md px-8 py-3 text-lg font-semibold"
                    >
                        Online Menu
                    </NavLink>
                </div>

                {/* Grid for the special dish cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialDishes.map((dish) => (
                        <div key={dish.id} className="card bg-white shadow-lg rounded-xl overflow-hidden">
                            {/* Image placeholder */}
                            <figure className="h-48 overflow-hidden rounded-t-xl">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <div className="card-body p-6">
                                {/* Dish Name and Price */}
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{dish.name}</h3>
                                    <span className="text-lg font-semibold text-orange-500">${dish.price.toFixed(2)}</span>
                                </div>

                                {/* Dish Description */}
                                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                    {dish.description}
                                </p>

                                {/* Order a delivery link/button */}
                                <div className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer hover:text-primary transition-colors">
                                    <Link to="menu" >Order a delivery
                                    {/* SVG for the right arrow icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 ml-2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Special;