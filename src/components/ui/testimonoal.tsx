import React from 'react';
// Importez des images pour les avatars des témoignages
import avatar1 from '../../assets/testimonial1.jpeg'; 
import avatar2 from '../../assets/testimonial2.jpeg'; 
import avatar3 from '../../assets/testimonial3.jpeg';
import avatar4 from '../../assets/testimonial4.jpeg'; 

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Alice J.", rating: 5, text: "Absolutely loved the Greek salad! Fresh ingredients and wonderful flavor.", avatar: avatar1 },
  { id: 2, name: "Bob K.", rating: 4, text: "The bruschetta was perfect, and the service was incredibly friendly.", avatar: avatar2 },
  { id: 3, name: "Charlie L.", rating: 5, text: "A truly authentic Mediterranean experience. The grilled fish was superb!", avatar: avatar3 },
  { id: 4, name: "Diana M.", rating: 5, text: "My new favorite spot in Chicago. Every dish was a delight!", avatar: avatar4 }, // Vérifiez si c'est bien testimonial3.jpeg ou s'il manque une image
];

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <input
        key={i}
        type="radio"
        name={`rating-${rating}`}
        className={`mask mask-star-2 ${i < rating ? 'bg-orange-400' : 'bg-gray-300'}`}
        disabled
        checked={i === rating - 1}
      />
    ));
  };

  return (
    <section className="bg-base-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">What our customers say!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="rating rating-md mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                </div>
                <h3 className="card-title text-secondary mt-4">{testimonial.name}</h3>
                <p className="text-base-content text-sm italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;