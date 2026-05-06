import React from 'react';

const GALLERY = [
  {
    src: 'https://hips.hearstapps.com/hmg-prod/images/restaurantes-moda-madrid-ceferino-65aa5b0e3160a.jpeg',
    alt: 'Interior del restaurante',
    caption: 'Nuestro salón principal',
  },
  {
    src: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/04/03/mesa-llena-de-comida-arabe.jpeg',
    alt: 'Variedad de platos',
    caption: 'Gastronomía regional',
  },
  {
    src: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/08/07/16283202517103.jpg',
    alt: 'Experiencia gastronómica',
    caption: 'Sabores auténticos',
  },
  {
    src: 'https://ca-times.brightspotcdn.com/dims4/default/094a1c6/2147483647/strip/true/crop/6720x4480+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa4%2F1c%2F99b744e84e8c80ed20f7654f537f%2Fla-photos-1staff-632159-la-fo-101-hippo-rrd-07-1.jpg',
    alt: 'Ambiente acogedor',
    caption: 'Ambiente y decoración',
  },
  {
    src: 'https://theoctopusguide.discefa.com/wp-content/uploads/2021/06/como-iniciarse-cocina-de-autor-preparar-propias-recetas.jpg',
    alt: 'Cocina de autor',
    caption: 'Cocina salteña',
  },
  {
    src: 'https://thumbs.dreamstime.com/b/c%C3%B3cteles-en-barra-bebidas-contador-120401840.jpg',
    alt: 'Barra de cócteles',
    caption: 'Nuestra barra',
  },
];

const Images = () => {
  return (
    <div className='pt-20 md:pt-24'>
      {/* Header */}
      <section className='bg-zinc-900 py-14 px-4 text-center'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold'>Galería</h1>
        <p className='mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>
          Una mirada a nuestra cocina, ambiente y los platos que hacemos con pasión
        </p>
      </section>

      {/* Gallery grid */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {GALLERY.map((item, i) => (
            <div key={i} className='group relative overflow-hidden rounded-xl bg-zinc-800 gallery-item'>
              <img
                className='w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110'
                src={item.src}
                alt={item.alt}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5'>
                <p className='text-white font-semibold text-lg'>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Images;
