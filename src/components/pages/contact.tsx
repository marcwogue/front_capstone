import React from 'react';

const ContactPage: React.FC = () => {
  return (
    // Conteneur principal: fond gris clair couvrant toute la hauteur, sans centrage de contenu "boîte"
    <div className="bg-primary-content py-12 min-h-screen">
      {/* Conteneur pour le contenu, avec max-width pour la lisibilité mais large padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre de la page */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12">
          Contactez Little Lemon
        </h1>

        {/* Grille pour organiser les différentes sections d'information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Section Où nous trouver */}
          <section className="bg-primary-content p-8 rounded-xl shadow-md flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Où nous trouver ?</h2>
            <p className="text-lg md:text-xl text-neutral mb-2">
              Little Lemon Restaurant
            </p>
            <address className="not-italic text-lg md:text-xl text-neutral mb-4">
              123 Main Street <br />
              Chicago, IL 60601
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Little+Lemon+Restaurant,+123+Main+Street,+Chicago,+IL+60601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info hover:underline text-lg md:text-xl font-medium mt-auto" // mt-auto pour aligner en bas
            >
              Voir sur Google Maps →
            </a>
          </section>

          {/* Section Informations de contact */}
          <section className="bg-primary-content p-8 rounded-xl shadow-md flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Informations de contact</h2>
            <p className="text-lg md:text-xl text-neutral mb-2">
              Téléphone : {" "}
              <a href="tel:+11234567890" className="text-info hover:underline">
                (123) 456-7890
              </a>
            </p>
            <p className="text-lg md:text-xl text-neutral mb-2">
              Email : {" "}
              <a href="mailto:info@littlelemon.com" className="text-info hover:underline">
                info@littlelemon.com
              </a>
            </p>
          </section>

          {/* Section Heures d'ouverture */}
          <section className="bg-primarycontent p-8 rounded-xl shadow-md flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Nos heures d'ouverture</h2>
            <ul className="text-lg md:text-xl text-neutral list-none p-0">
              <li className="mb-1">Lundi - Vendredi : 11h00 - 22h00</li>
              <li className="mb-1">Samedi : 12h00 - 23h00</li>
              <li className="mb-1">Dimanche : Fermé</li>
            </ul>
          </section>

          {/* Section Réseaux Sociaux (peut s'étendre sur plusieurs colonnes si nécessaire) */}
          <section className="bg-primarycontent p-8 rounded-xl shadow-md col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Suivez-nous !</h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl font-medium">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-info hover:underline">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-info hover:underline">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-info hover:underline">Twitter</a>
            </div>
          </section>

        </div> 

      </div> 
    </div> 
  );
};

export default ContactPage;