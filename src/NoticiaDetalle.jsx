import React from 'react';
import noticiaunohome from './img/noticia-1-home.jpg';


const NoticiaDetalle = () => {
  return (
    <div className="noticias-top-container">
      <div className="noticias-top-header">
        <h1 className="noticias-top-titulo">
          
Los cambios que traerá la nueva Certificación de Vivienda Sustentable
        </h1>
        <p className="noticias-top-subtitulo">
        Simplificación del sistema: Se busca que más constructoras, inmobiliarias y personas naturales se motiven a certificar sus proyectos.
        </p>
      </div>

      <div className="noticias-top-metadata">
        <span className="noticias-top-fecha">10 Mar 2025 03:48 p.m. CL</span>
      </div>

      <div className="noticias-top-imagen-container">
        
         <img className='noticias-top-imagen-container' src={noticiaunohome} alt="Certificación de Vivienda Sustentable" />
          
        
        <p className="noticias-top-imagen-caption">
          La inflación de marzo comenzó con un impacto continuado de los aumentos de la carne. REUTERS
        </p>
      </div>

      <div className="noticias-top-contenido">
        <p className="noticias-top-parrafo">
        A cinco años del lanzamiento del programa de Certificación de Vivienda Sustentable (CVS), el Ministerio de Vivienda y Urbanismo está preparando la entrada en operación de una nueva versión del instrumento. Esto, con el fin de incorporar cambios en materia de administración, en su estructura y en los requisitos de validación.
        </p>

        <p className="noticias-top-parrafo">
        El jefe (S) de la División Técnica de Estudio y Fomento Habitacional (Ditec) Marcelo Soto, destacó que para el Ministerio de Vivienda y Urbanismo es una tarea fundamental liderar cambios en el sector construcción que apunten a mejorar las políticas en materia socioambiental. “En este objetivo es fundamental trabajar en conjunto con todos los actores que movilizamos el sector construcción, dada la importancia de contar con herramientas como la CVS, cuyo aporte va directamente en beneficio de toda la industria, y finalmente, del bienestar de las personas. De ahí la importancia de este proceso de revisión y ajuste, en un contexto cambiante y exigente que requiere respuestas apropiadas”, señaló.
        </p>

        <p className="noticias-top-parrafo">
        Precisamente en ese contexto, y directamente vinculado al desarrollo de la CVS, cabe mencionar que el Centro Tecnológico para la Innovación en la Construcción (CTEC) se ha configurado como un socio estratégico relevante para el Minvu, jugando un rol central en varias iniciativas, como en la primera etapa de este instrumento de certificación sustentable de viviendas, participando en su implementación, marcha blanca y administración inicial.
        </p>
      </div>
    </div>
  );
};

export default NoticiaDetalle;