import Image from 'next/image';
import Menu from "../components/Menu";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h3 className="text-orange-500 font-bold uppercase mb-2">About us</h3>
          <h2 className="text-4xl font-bold mb-4">
            We <span className="text-orange-500">Create</span> the best foody product
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus.
          </p>
          <ul className="text-gray-400 mb-6 space-y-2">
            <li>✔️ Lacus nisi, et ac dapibus consequat.</li>
            <li>✔️ Quisque diam pellentesque bibendum non dui volutpat fringilla.</li>
            <li>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600">
            Read More
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          <div className="relative">
            <Image  src="/about1.jpg"
              alt="Delicious Food"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
          <div className="relative">
            <Image
              src="/about2.jpg"
              alt="Healthy Food"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
          <div className="relative">
            <Image
              src="/about6.jpg"
              alt="Healthy Food"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        {/* Choose Food Item Section */}
        <div className="text-center mb-8">
          <p className="text-orange-300 italic">Food Categories</p>          
          <h2 className="text-4xl font-bold text-white">Choose Food Item</h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div>
            <Image
              src="/food1.jpg"
              alt="Fast Food Dish"
              className="rounded-lg object-cover"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/food2.jpg"
              alt="Burger"
              className="rounded-lg object-cover"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/food3.jpg"
              alt="Salad"
              className="rounded-lg object-cover"
              width={300}
              height={300}/>
              </div>
              <div>
                <Image
                  src="/food4.jpg"
                  alt="Dessert"
                  className="rounded-lg object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
    
          {/* Why Choose Us Section */}
          <div className="mt-12 text-center">
            <h3 className="text-lg italic text-orange-400">Why Choose Us</h3>
            <h2 className="text-4xl font-bold text-orange-500 mt-2">
              Extraordinary Taste <br /> And Experienced
            </h2> <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
        </p>
        <div className="flex flex-wrap justify-center mt-8 space-x-4">
          <div className="text-center mb-4">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
              🍔
            </div>
            <p className="text-white">Fast Food</p>
          </div>
          <div className="text-center mb-4">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
              🍴
            </div>
            <p className="text-white">Lunch</p>
          </div>
          <div className="text-center mb-4">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
              🍕
            </div>
            <p className="text-white">Dinner</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <span className="text-5xl font-bold text-orange-500">30+</span>
          <p className="text-gray-300">Years of Experienced</p>
        </div>
      </div>  <div className="bg-orange-500 text-white mt-12">
        {/* Header Section */}
        <section className="py-10">
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">420</div>
              <div className="mt-2 text-sm">Professional Chefs</div>
            </div>
            <div>
              <div className="text-3xl font-bold">320</div>
              <div className="mt-2 text-sm">Items Of Food</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30+</div>
              <div className="mt-2 text-sm">Years Of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">220</div>
              <div className="mt-2 text-sm">Happy Customers</div>
            </div>
          </div>
        </section>
      </div>
      <Menu />
    </section>
  );
};

export default AboutUs;
