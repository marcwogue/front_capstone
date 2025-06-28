import React from 'react';
// Importez des images pour la section About
import aboutImg1 from '../../assets/mains.jpg'; // Image inférieure
import aboutImg2 from '../../assets/specials.jpg'; // Image supérieure et gauche

const AboutSection: React.FC = () => {
  return (
    <section className="bg-primary py-16 text-base-content">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content - Text */}
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-warning mb-2">Little Lemon</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Chicago</h3>
          <p className="text-base md:text-lg mb-4">
            Little Lemon is a charming Mediterranean restaurant located in the heart of Chicago.
            Founded by two friends, Mario and Adrian, our restaurant brings together a passion for
            authentic Mediterranean flavors with a modern culinary twist.
          </p>
          <p className="text-base md:text-lg">
            We are dedicated to using the freshest local ingredients to create delicious and memorable
            dishes that transport you straight to the Mediterranean coast. Come and experience our warm
            hospitality and delightful cuisine.
          </p>
        </div>

        {/* Right content - Overlapping images */}
        <div className="relative w-full h-72 md:h-96">
          <img
            src={aboutImg1}
            alt="Restaurant interior"
            className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-box shadow-xl z-10"
          />
          <img
            src={aboutImg2}
            alt="Chefs Mario and Adrian"
            className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-box shadow-xl"
            style={{ transform: 'translate(10%, 10%)' }} // Ajuste le chevauchement
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;