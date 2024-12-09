import React from 'react';
import Footer from "../components/Footer";
import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
      date: '10 February 2022',
      image: '/burger.jpg',
    },
    {
      id: 2,
      title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
      date: '10 February 2022',
      image: '/pizza4.jpg',
    },
    {
      id: 3,
      title: 'Curabitur Rutrum Velit Ac Congue Malesuada',
      date: '10 February 2022',
      image: '/tacos.jpg',
    },
  ];

  return (
    <section className="bg-black text-white py-14 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-orange-400 italic text-center py-2">Blogs Post</p>
        <h2 className="text-center text-4xl font-bold mb-8 text-white">
          Latest News & Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-sm text-orange-400 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold mb-4 text-white">{post.title}</h3>
                <button className='mt-auto text-sm text-orange-500 hover:text-orange-600'>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </section>
  );
};

export default BlogSection;