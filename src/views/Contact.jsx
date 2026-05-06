import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CONTACT_INFO = [
  {
    icon: 'bx bx-map',
    title: 'Dirección',
    lines: ['Av. Belgrano 123', 'Salta, Argentina'],
  },
  {
    icon: 'bx bx-time',
    title: 'Horarios',
    lines: ['Lun–Vie: 12:00–15:30 / 20:00–00:00', 'Sáb–Dom: 12:00–16:00 / 20:00–01:00'],
  },
  {
    icon: 'bx bx-phone',
    title: 'Teléfono',
    lines: ['+54 387 421-0000'],
  },
];

const Contact = () => {
  const validateLettersAndSpaces = (value) => {
    return /^[A-Za-z\s]*$/.test(value) || 'Solo se permiten letras y espacios';
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(() => {
    Swal.fire({
      title: 'Mensaje enviado con éxito!',
      icon: 'success',
      background: '#393939',
      color: '#fafafa',
    });
    reset();
  });

  return (
    <div className='pt-20 md:pt-24'>
      {/* Header */}
      <section className='bg-zinc-900 py-14 px-4 text-center'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold'>Contáctenos</h1>
        <p className='mt-4 text-gray-400 text-base sm:text-lg'>
          Estamos aquí para ayudarte. Escribinos o visitanos.
        </p>
      </section>

      <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Info cards */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
          {CONTACT_INFO.map((info, i) => (
            <div key={i} className='bg-zinc-800 rounded-xl p-7 text-center'>
              <i className={`${info.icon} text-4xl text-orange-400 mb-3 block`} />
              <h3 className='text-lg font-bold mb-3'>{info.title}</h3>
              {info.lines.map((line, j) => (
                <p key={j} className='text-gray-400 text-sm'>{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className='flex flex-col md:flex-row gap-8 lg:gap-12'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold mb-6'>Envianos un mensaje</h2>
            <form className='text-white' onSubmit={onSubmit}>
              <div className='flex flex-col mb-4'>
                <label htmlFor='nombre' className='mb-1 text-sm font-semibold text-gray-300'>Nombre</label>
                <input
                  {...register('nombre', {
                    required: 'El nombre es requerido',
                    validate: validateLettersAndSpaces,
                  })}
                  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  type='text'
                  name='nombre'
                  id='nombre'
                  placeholder='Nombre y Apellido'
                />
                <p className='text-red-500 text-sm mt-1'>{errors.nombre?.message}</p>
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor='correo' className='mb-1 text-sm font-semibold text-gray-300'>Correo</label>
                <input
                  type='email'
                  name='email'
                  id='correo'
                  {...register('email', {
                    required: 'El email es requerido',
                    maxLength: { value: 100, message: 'No debe tener más de 100 caracteres' },
                  })}
                  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Correo Electrónico'
                />
                <p className='text-red-500 text-sm mt-1'>{errors.email?.message}</p>
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor='telefono' className='mb-1 text-sm font-semibold text-gray-300'>Teléfono</label>
                <input
                  {...register('telefono', {
                    required: 'El teléfono es requerido',
                    minLength: { value: 7, message: 'Mínimo 7 dígitos' },
                    maxLength: { value: 12, message: 'Número no válido' },
                    min: { value: 0, message: 'Número no válido' },
                  })}
                  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  type='number'
                  name='telefono'
                  id='telefono'
                  step='1'
                  placeholder='Número de Teléfono'
                />
                <p className='text-red-500 text-sm mt-1'>{errors.telefono?.message}</p>
              </div>

              <div className='flex flex-col mb-5'>
                <label htmlFor='mensaje' className='mb-1 text-sm font-semibold text-gray-300'>Mensaje</label>
                <textarea
                  {...register('mensaje', {
                    required: 'El mensaje es requerido',
                    maxLength: { value: 550, message: 'No debe tener más de 550 caracteres' },
                  })}
                  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  name='mensaje'
                  id='mensaje'
                  rows='6'
                  placeholder='Escribe tu mensaje aquí'
                />
                <p className='text-red-500 text-sm mt-1'>{errors.mensaje?.message}</p>
              </div>

              <input
                type='submit'
                className='bg-orange-500 hover:bg-orange-400 text-black font-bold px-6 py-3 rounded-md cursor-pointer transition-colors duration-200 w-full text-base'
                value='Enviar Mensaje'
              />
            </form>
          </div>

          <div className='md:w-1/2 flex flex-col'>
            <h2 className='text-2xl font-bold mb-6'>Dónde encontrarnos</h2>
            <iframe
              className='rounded-xl w-full flex-1 min-h-80'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14243.97386517194!2d-65.28107813612048!3d-26.80833666860651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d21d44f2a2d%3A0xf6c3c38b90eb2370!2sMi%20Nueva%20Estancia!5e0!3m2!1ses-419!2sar!4v1723606563700!5m2!1ses-419!2sar'
              width='100%'
              height='100%'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
