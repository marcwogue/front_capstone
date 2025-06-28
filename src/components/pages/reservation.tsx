import React from 'react';
import { Formik, Form, Field, ErrorMessage,type FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Définition de l'interface pour les valeurs du formulaire
interface ReservationFormValues {
  fullName: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  date: string;
  time: string;
  notes: string;
}

// Schéma de validation Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Le nom doit contenir au moins 3 caractères.')
    .required('Le nom complet est requis.'),
  email: Yup.string()
    .email('Adresse email invalide.')
    .required('L\'adresse email est requise.'),
  phone: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, 'Numéro de téléphone invalide.')
    .required('Le numéro de téléphone est requis.'),
  numberOfGuests: Yup.number()
    .typeError('Doit être un nombre.')
    .min(1, 'Minimum 1 invité.')
    .max(10, 'Maximum 10 invités par réservation en ligne.')
    .required('Le nombre d\'invités est requis.'),
  date: Yup.date()
    .min(new Date(new Date().setHours(0,0,0,0)), 'La date ne peut pas être dans le passé.')
    .required('La date est requise.'),
  time: Yup.string()
    .required('L\'heure est requise.'),
  notes: Yup.string()
    .max(200, 'Maximum 200 caractères.'),
});

// Valeurs initiales du formulaire
const initialValues: ReservationFormValues = {
  fullName: '',
  email: '',
  phone: '',
  numberOfGuests: 1,
  date: '',
  time: '',
  notes: '',
};

function ReservationForm() {
  const [reservationSuccess, setReservationSuccess] = React.useState(false);

  const handleSubmit = async (
    values: ReservationFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ReservationFormValues>
  ) => {
    setSubmitting(true);

    console.log('Données de réservation envoyées :', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setReservationSuccess(true);
    resetForm();
    setSubmitting(false);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 22; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 22) {
        slots.push(`${hour}:30`);
      }
    }
    return slots;
  };

  return (
    // Utilisation d'un fond clair pour le corps comme le header (si bg-primary est clair)
    // et flexbox pour centrer le contenu
    <div className="flex justify-center items-center min-h-screen bg-accent-content py-10">
      {reservationSuccess ? (
        // Message de succès avec des styles cohérents
        <div className="max-w-md mx-auto p-8 rounded-xl shadow-xl bg-accent-content border border-accent text-center text-neutral">
          <h2 className="text-primary text-4xl font-extrabold mb-4">Félicitations ! 🎉</h2>
          <p className="text-lg leading-relaxed mb-6 text-neutral">Votre réservation chez Little Lemon a été confirmée avec succès.</p>
          <p className="text-lg leading-relaxed mb-8 text-neutral">Un email de confirmation avec les détails vous sera envoyé sous peu.</p>
          {/* Bouton "nouvelle réservation" stylisé comme btn-secondary */}
          <button
            onClick={() => setReservationSuccess(false)}
            // Recréation de btn btn-secondary (si ce n'est pas DaisyUI)
            className="inline-block px-6 py-3 rounded-lg font-semibold text-center
                       bg-primary text-base-100 cursor-pointer text-lg
                       transition-all duration-300 hover:bg-primary
                       focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Faire une nouvelle réservation
          </button>
        </div>
      ) : (
        // Formulaire de réservation avec styles cohérents
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-lg w-full bg-base-100 p-8 rounded-xl shadow-xl">
              {/* Titre du formulaire */}
              <h2 className="text-center text-3xl font-bold text-neutral mb-8">Réservez votre table chez Little Lemon</h2>

              {/* Champ Nom complet */}
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-neutral text-lg font-semibold mb-2">Nom complet</label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-primary focus:ring-2 focus:ring-accent outline-none
                             transition-all duration-300"
                />
                <ErrorMessage name="fullName" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Champ Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-neutral text-lg font-semibold mb-2">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-primary focus:ring-2 focus:ring-accent outline-none
                             transition-all duration-300"
                />
                <ErrorMessage name="email" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Champ Téléphone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-neutral text-lg font-semibold mb-2">Téléphone</label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-primary focus:ring-2 focus:ring-accent outline-none
                             transition-all duration-300"
                />
                <ErrorMessage name="phone" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Champ Nombre d'invités */}
              <div className="mb-6">
                <label htmlFor="numberOfGuests" className="block text-neutral text-lg font-semibold mb-2">Nombre d'invités</label>
                <Field
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-primary focus:ring-2 focus:ring-accent outline-none
                             transition-all duration-300"
                />
                <ErrorMessage name="numberOfGuests" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Champ Date */}
              <div className="mb-6">
                <label htmlFor="date" className="block text-neutral text-lg font-semibold mb-2">Date</label>
                <Field
                  type="date"
                  id="date"
                  name="date"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-primary focus:ring-2 focus:ring-accent outline-none
                             transition-all duration-300"
                />
                <ErrorMessage name="date" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Champ Heure */}
              <div className="mb-6">
                <label htmlFor="time" className="block text-neutral text-lg font-semibold mb-2">Heure</label>
                <Field
                  as="select"
                  id="time"
                  name="time"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-primary focus:ring-2 focus:ring-accent outline-none
                             transition-all duration-300"
                >
                  <option value="">Sélectionnez une heure</option>
                  {generateTimeSlots().map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="time" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Champ Notes spéciales */}
              <div className="mb-8">
                <label htmlFor="notes" className="block text-neutral text-lg font-semibold mb-2">Notes spéciales (allergies, demandes...)</label>
                <Field
                  as="textarea"
                  id="notes"
                  name="notes"
                  rows="4"
                  className="w-full py-3 px-4 border border-info rounded-lg text-base
                             focus:border-info focus:ring-2 focus:ring-l-info outline-none
                             transition-all duration-300"
                />
                <ErrorMessage name="notes" component="div" className="text-error text-sm mt-1" />
              </div>

              {/* Bouton de soumission stylisé comme un bouton primaire de Little Lemon */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary tex-tbase rounded-lg text-xl font-bold cursor-pointer
                           transition-all duration-300 hover:bg-success hover:-translate-y-1
                           disabled:bg-neutral disabled:cursor-not-allowed
                           focus:outline-none focus:ring-2 focus:ring-success"
              >
                {isSubmitting ? 'Réservation en cours...' : 'Réserver la table'}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ReservationForm;