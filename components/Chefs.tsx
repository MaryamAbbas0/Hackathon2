import React from "react";
import Profile from "../components/Profile";
import Image from "next/image";

const chefs = [
  {
    name: "D. Estwood",
    title: "Chief Chef",
    image: "/d.jpg", // Replace with your image paths
  },
  {
    name: "Gordon Ramsay",
    title: "Assistant Chef",
    image: "/d2.jpg",
  },
  {
    name: "M. William",
    title: "Advertising Chef",
    image: "/d3.jpg",
  },
  {
    name: "Bobby Flay",
    title: "Chef",
    image: "/d4.jpg",
  },
];

const ChefSection = () => {
  return (
    <section className="py-16 bg-black text-center">
      <p className="text-orange-300 italic py-2">Chefs</p>
      <h2 className="text-3xl font-bold text-white mb-10">Meet Our Chefs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-orange-500 shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={chef.image}
              alt={chef.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{chef.name}</h3>
            <p className="text-white">{chef.title}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-orange-800 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
        See More
      </button>
      <div className="mt-10">
        <Profile />
      </div>
    </section>
  );
};

export default ChefSection;
