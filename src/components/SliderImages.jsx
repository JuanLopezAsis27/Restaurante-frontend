import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SliderImages = () => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      className='min-w-full 2xl:min-h-screen'
    >
      <div>
        <img
          className='w-full object-cover opacity-70'
          src='https://hips.hearstapps.com/hmg-prod/images/restaurantes-moda-madrid-ceferino-65aa5b0e3160a.jpeg'
          alt='Interior del restaurante'
        />
      </div>
      <div>
        <img
          className='w-full object-cover opacity-50'
          src='https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/04/03/mesa-llena-de-comida-arabe.jpeg'
          alt='Gastronomía regional'
        />
      </div>
      <div>
        <img
          className='w-full object-cover opacity-60'
          src='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/08/07/16283202517103.jpg'
          alt='Ambiente del restaurante'
        />
      </div>
    </Carousel>
  );
};

export default SliderImages;
