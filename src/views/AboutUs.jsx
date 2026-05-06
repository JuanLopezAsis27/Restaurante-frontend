import React from 'react';
import { Link } from 'react-router-dom';

const VALUES = [
  {
    title: 'Pasión',
    desc: 'Cocinamos con el corazón en cada plato, poniendo dedicación y amor en cada preparación que sale de nuestra cocina.',
  },
  {
    title: 'Tradición',
    desc: 'Mantenemos vivas las recetas y técnicas que han definido la cocina salteña por generaciones.',
  },
  {
    title: 'Calidad',
    desc: 'Seleccionamos los mejores ingredientes locales y de temporada para garantizar sabores auténticos e inigualables.',
  },
  {
    title: 'Calidez',
    desc: 'Te recibimos como a un miembro más de nuestra familia, porque cada visita es especial para nosotros.',
  },
];

const AboutUs = () => {
  return (
    <div className='pt-20 md:pt-24'>
      {/* Header */}
      <section className='bg-zinc-900 py-14 px-4 text-center'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold'>¿Quiénes Somos?</h1>
        <p className='mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>
          Descubrí la historia detrás de Mi Nueva Estancia y nuestra pasión por la gastronomía argentina
        </p>
      </section>

      {/* Main story */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='flex flex-col lg:flex-row gap-10 items-center max-w-5xl mx-auto'>
          <div className='lg:w-1/2'>
            <img
              className='w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg'
              src='https://hips.hearstapps.com/hmg-prod/images/restaurantes-moda-madrid-ceferino-65aa5b0e3160a.jpeg'
              alt='Interior Mi Nueva Estancia'
            />
          </div>
          <div className='lg:w-1/2 space-y-5'>
            <h2 className='text-2xl sm:text-3xl font-bold text-orange-400 h1-card'>Nuestra Historia</h2>
            <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
              Somos un restaurante nacido de la pasión por la buena comida y el disfrute de los pequeños momentos.
              Creemos que cada plato cuenta una historia y que compartir una mesa es una de las mejores formas
              de conectar con las personas.
            </p>
            <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
              Por eso, trabajamos cada día para ofrecer una experiencia gastronómica que combine sabor,
              calidad y calidez en cada detalle. Desde nuestras empanadas salteñas hasta el asado a las brasas,
              cada receta es un tributo a la riqueza culinaria de nuestra tierra.
            </p>
            <Link
              to='/contacto'
              className='inline-block mt-2 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-bold px-6 py-2 rounded-full transition-colors duration-200'
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='bg-zinc-900 py-16 px-4'>
        <div className='container mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl h1-card text-center text-orange-400 mb-12'>
            Nuestros Valores
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {VALUES.map((value, i) => (
              <div key={i} className='bg-zinc-800 rounded-xl p-7 text-center border-t-4 border-orange-500 feature-card'>
                <h3 className='text-xl font-bold mb-4 text-white'>{value.title}</h3>
                <p className='text-gray-400 text-sm leading-relaxed'>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <div className='bg-zinc-800 rounded-xl p-8'>
            <h3 className='text-2xl font-bold text-orange-400 mb-4'>Nuestra Misión</h3>
            <p className='text-gray-300 leading-relaxed'>
              Brindar una experiencia gastronómica auténtica que celebre los sabores y tradiciones de la cocina salteña,
              utilizando ingredientes frescos y locales con el mayor estándar de calidad y servicio.
            </p>
          </div>
          <div className='bg-zinc-800 rounded-xl p-8'>
            <h3 className='text-2xl font-bold text-orange-400 mb-4'>Nuestra Visión</h3>
            <p className='text-gray-300 leading-relaxed'>
              Ser el referente gastronómico de Salta, reconocidos por preservar y difundir la riqueza culinaria
              del norte argentino, creando momentos memorables alrededor de la mesa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-zinc-900 py-16 px-4 text-center'>
        <h2 className='text-2xl sm:text-3xl font-bold mb-4'>¿Listo para vivir la experiencia?</h2>
        <p className='text-gray-400 mb-8 max-w-xl mx-auto'>
          Reservá tu mesa y viví una noche inolvidable en Mi Nueva Estancia
        </p>
        <Link
          to='/add-reserves'
          className='bg-orange-500 hover:bg-orange-400 text-black font-bold px-10 py-3 rounded-full transition-colors duration-200 text-lg inline-block'
        >
          Hacer una Reserva
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
