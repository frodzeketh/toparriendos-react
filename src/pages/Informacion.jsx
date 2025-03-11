import React from 'react';
import { Link } from 'react-router-dom';


const Informacion = () => {
  return (
    <div className="noticias-top-container">
      <div className="noticias-top-header">
        <h1 className="noticias-top-titulo">
          Quiénes Somos
        </h1>
        <p className="noticias-top-subtitulo">
          En Top Arriendos, nos dedicamos a brindar servicios complementarios a la actividad inmobiliaria, con un fuerte enfoque en el cliente.
        </p>
      </div>

      <div className="noticias-top-metadata">
        <span className="noticias-top-fecha">Última actualización: [insertar fecha]</span>
      </div>

      

      <div className="noticias-top-contenido">
        <p className="noticias-top-parrafo">
          No somos una inmobiliaria en sí; no estamos en el negocio de la venta o arriendo de inmuebles. Nos gusta decir que nuestro negocio no se trata de propiedades, sino de relaciones personales.
        </p>

        <h2 className="noticias-top-subtitulo">Nuestro enfoque en el cliente</h2>
        <p className="noticias-top-parrafo">
          En el caso del cliente externo, el consumidor final, nuestro objetivo es brindarle la mayor calidad de servicio posible, a través de una atención cálida y personalizada. La misión de los equipos de Top Arriendos no es venderle o arrendarle una propiedad; nuestra misión consiste en ayudarlo a encontrar lo que está buscando y asesorarlo para que pueda tomar la mejor decisión.
        </p>
        <p className="noticias-top-parrafo">
          Conocer sus deseos, sus necesidades, contenerlo, educarlo y acompañarlo durante todo el proceso que implica una decisión tan importante en su vida, como es la búsqueda de un nuevo hogar. Por eso, para nosotros, “Encuentra el lugar que mereces” es mucho más que un slogan. Muchos clientes se han enamorado de esta pasión por el servicio y han decidido confiar en nosotros para encontrar su próximo hogar.
        </p>

        <h2 className="noticias-top-subtitulo">Nuestro enfoque en los profesionales</h2>
        <p className="noticias-top-parrafo">
          En el caso del cliente interno, los corredores de propiedades y profesionales del rubro que eligen nuestros servicios complementarios a su actividad profesional, nuestro objetivo es brindarles todas las herramientas necesarias para que puedan potenciar su negocio y llevarlo a otro nivel. Al adherirse a Top Arriendos, acceden a herramientas y servicios que les permiten destacarse en el mercado:
        </p>
        <ul className="noticias-top-lista">
          <li>
            <strong>Una plataforma confiable y reconocida:</strong> Top Arriendos es una marca que se ha posicionado como una opción confiable y familiar para los clientes en Chile.
          </li>
          <li>
            <strong>Herramientas de gestión y administración:</strong> Ofrecemos soluciones de probada eficiencia para optimizar su trabajo y mejorar la experiencia del cliente.
          </li>
          <li>
            <strong>Capacitación constante:</strong> Nos enfocamos en la innovación y la formación continua para garantizar un servicio de calidad y excelencia.
          </li>
          <li>
            <strong>Marketing y visibilidad:</strong> Brindamos apoyo en comunicación, marketing y publicidad, con un alcance que individualmente sería difícil de igualar.
          </li>
          <li>
            <strong>Eventos y networking:</strong> Organizamos eventos de alto nivel donde los profesionales pueden conectarse, aprender y recibir reconocimiento por su trabajo.
          </li>
        </ul>
        <p className="noticias-top-parrafo">
          Por eso decimos que con Top Arriendos, los profesionales pueden gestionar su negocio con autonomía, pero sin estar solos. Es una opción ideal para emprendedores que buscan trabajar con independencia, pero al mismo tiempo desean contar con el respaldo de una plataforma sólida y reconocida.
        </p>

        <h2 className="noticias-top-subtitulo">Nuestra filosofía</h2>
        <p className="noticias-top-parrafo">
          En Top Arriendos, creemos en el poder de las relaciones y en la importancia de acompañar a nuestros clientes y profesionales en cada paso del camino. ¡Bienvenido a nuestra comunidad!
        </p>
      </div>
    </div>
  );
};

export default Informacion;