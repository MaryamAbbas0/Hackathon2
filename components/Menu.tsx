import React from 'react';
import Chefs from "../components/Chefs";
import Image from 'next/image';

const Menu = () => {
  const menuItems = [
    { name: "Lettuce Leaf", price: "12.5$", image: "/lettuce.jpg" },
    { name: "Fresh Breakfast", price: "14.5$", image: "/breakfast.jpeg" },
    { name: "Mild Butter", price: "12.5$", image: "/butter.webp" },
    { name: "Fresh Bread", price: "12.5$", image: "/bread.jpg" },
    { name: "Glow Cheese", price: "12.5$", image: "/glow.jpg" },
    { name: "Italian Pizza", price: "14.5$", image: "/pizza1.webp" },
    { name: "Slice Beef", price: "12.5$", image: "/beef.jpg" },
    { name: "Mushroom Pizza", price: "12.5$", image: "/pizza2.jpg" },
    { name: "Neapolitan pizza", price: "12.5$", image: "/pizza3.jpg" },
  ]

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <p className="text-orange-300 italic text-center py-2">Chosse & Pick</p>
      <h1 className="text-center text-4xl font-bold mb-8">From Our Menu</h1>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-6 mb-8 flex-wrap">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
          <button
            key={category}
            className="text-orange-400 hover:text-white transition py-2 px-4"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-orange-500 rounded-lg p-4">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{item.name}</h3>
            <p className="text-white font-medium text-center">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Chefs Section */}
      <Chefs />
    </section>
  );
};

export default Menu;
