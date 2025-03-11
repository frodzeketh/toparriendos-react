import React from 'react';
import { Link } from 'react-router-dom';


const TyC = () => {
  return (
    <div className="noticias-top-container">
      <div className="noticias-top-header">
        <h1 className="noticias-top-titulo">
          Términos y Condiciones de Uso
        </h1>
        <p className="noticias-top-subtitulo">
          Bienvenido al sitio web [insertar URL] (en adelante, el “Sitio”). Este documento describe los términos y condiciones de uso del Sitio (en adelante, “T&C”). Se deja constancia que cualquier persona que no acepte estos términos y condiciones, que son de carácter obligatorio y vinculante, deberá abstenerse de utilizar el Sitio.
        </p>
      </div>

      <div className="noticias-top-metadata">
        <span className="noticias-top-fecha">Última actualización: [insertar fecha]</span>
      </div>

     

      <div className="noticias-top-contenido">
        <h2 className="noticias-top-subtitulo">1. Sobre Top Arriendos</h2>
        <p className="noticias-top-parrafo">
          Top Arriendos es una plataforma dedicada a la publicación de avisos de propiedades en arriendo y venta, facilitando la conexión entre personas interesadas en arrendar o comprar inmuebles y corredores de propiedades debidamente autorizados en Chile.
        </p>
        <p className="noticias-top-parrafo">
          Se deja aclarado y entendido que Top Arriendos no ejerce el corretaje de propiedades y, por ende, no intermedia directamente entre las partes en una operación inmobiliaria. Cada propiedad que Ud. verá en el Sitio es publicada por un corredor de propiedades debidamente autorizado y matriculado en Chile (en adelante, el/los “Corredor/es”).
        </p>
        <p className="noticias-top-parrafo">
          En este sentido, Usted acepta que el Sitio es simplemente una plataforma y que Top Arriendos es ajena a cualquier relación que pudiere entablarse entre Usted y quienes publiquen avisos, anuncios y/o propuestas en el Sitio.
        </p>

        <h2 className="noticias-top-subtitulo">2. Los Corredores</h2>
        <h3 className="noticias-top-subtitulo">2.1.</h3>
        <p className="noticias-top-parrafo">
          Cada Corredor que realiza publicaciones en el Sitio es de gestión independiente y se encuentra debidamente autorizado y matriculado conforme a la legislación chilena. Por consiguiente, Top Arriendos no tiene injerencia ni participación alguna en la actividad de cada Corredor y, por ende, en ninguna de las publicaciones que estos realizan en el Sitio.
        </p>
        <h3 className="noticias-top-subtitulo">2.2.</h3>
        <p className="noticias-top-parrafo">
          Usted reconoce expresamente que Top Arriendos:
        </p>
        <ul className="noticias-top-lista">
          <li>No realiza actividades de corretaje de propiedades.</li>
          <li>No actúa en representación de los Corredores.</li>
          <li>No es propietario, poseedor, titular, depositario, administrador ni tiene ningún derecho sobre los inmuebles publicados en el Sitio.</li>
          <li>No comercializa por sí ni por cuenta ajena los inmuebles publicados en el Sitio.</li>
          <li>No realiza tasaciones.</li>
          <li>No cobra comisiones por las operaciones inmobiliarias que se realicen.</li>
        </ul>
        <p className="noticias-top-parrafo">
          Cada publicación que Ud. verá en el Sitio fue realizada por un Corredor debidamente autorizado. Todas las operaciones inmobiliarias son objeto de intermediación y conclusión por parte de un Corredor, cuyos datos se exhiben en cada publicación.
        </p>

        <h2 className="noticias-top-subtitulo">3. Aceptación</h2>
        <h3 className="noticias-top-subtitulo">3.1.</h3>
        <p className="noticias-top-parrafo">
          Toda persona que utilice el Sitio acepta todos y cada uno de los T&C, sus modificaciones y documentos complementarios. Se deja constancia que los T&C tienen carácter obligatorio y vinculante, por lo que es importante que los lea con detenimiento.
        </p>
        <h3 className="noticias-top-subtitulo">3.2.</h3>
        <p className="noticias-top-parrafo">
          El Sitio se reserva el derecho, a su entera discreción, de actualizar estos T&C en cualquier momento. Al utilizar este Sitio luego de dichas modificaciones, usted acepta estar sujeta a las mismas, así como también a sus modificaciones y/o actualizaciones. Por ello, es importante que Ud. revise los T&C previo a navegar el presente sitio web.
        </p>

        <h2 className="noticias-top-subtitulo">4. El Sitio</h2>
        <h3 className="noticias-top-subtitulo">4.1.</h3>
        <p className="noticias-top-parrafo">
          El Sitio es una plataforma de publicación de avisos de inmuebles que Top Arriendos provee a los Corredores autorizados, para que estos puedan publicar las propiedades que se encuentran comercializando. Por ende, Top Arriendos no participa en ninguna de las publicaciones del Sitio y cualquier interacción que Ud. realice en el Sitio será directamente con el Corredor que efectuó la publicación y en ningún caso con Top Arriendos.
        </p>
        <h3 className="noticias-top-subtitulo">4.2.</h3>
        <p className="noticias-top-parrafo">
          En el Sitio, conectamos a las personas interesadas en adquirir o arrendar inmuebles con Corredores que cuentan con propiedades a su cargo. La persona interesada se pondrá en contacto con el Corredor para las negociaciones que consideren. Es decir que todas las negociaciones se realizan única y exclusivamente entre el Corredor correspondiente, cuyos datos se exhiben en la publicación, y la persona interesada.
        </p>

        <h2 className="noticias-top-subtitulo">5. Publicaciones</h2>
        <h3 className="noticias-top-subtitulo">5.1.</h3>
        <p className="noticias-top-parrafo">
          Cada propiedad que Ud. verá publicada en el Sitio es realizada directamente por un Corredor debidamente autorizado.
        </p>
        <h3 className="noticias-top-subtitulo">5.2.</h3>
        <p className="noticias-top-parrafo">
          La información provista en cada publicación fue provista exclusivamente por el Corredor (cuyos datos se exhiben en cada publicación). Por cualquier inquietud respecto a la eventual actualización de las medidas, descripciones arquitectónicas y funcionales, valores de gastos comunes, servicios, impuestos, precios y demás información que se requiera a sus efectos -cuyos valores son aproximados- deberá consultar al Corredor responsable de la operación y publicación.
        </p>
        <h3 className="noticias-top-subtitulo">5.3.</h3>
        <p className="noticias-top-parrafo">
          El Corredor cuyo nombre y datos de autorización se exhiben en cada publicación es responsable del contenido de la publicación y de sus condiciones, tales como precio, descripción, fotos, calidad, garantía, entre otros.
        </p>

        <h2 className="noticias-top-subtitulo">6. Datos de Contacto</h2>
        <h3 className="noticias-top-subtitulo">6.1.</h3>
        <p className="noticias-top-parrafo">
          Los datos de contacto que se exhiben en cada publicación corresponden al Corredor debidamente autorizado y/o a las personas que colaboran con el mencionado. Cualquier persona que se comunique con Ud. actúa bajo el liderazgo de un Corredor responsable de cada publicación.
        </p>
        <h3 className="noticias-top-subtitulo">6.2.</h3>
        <p className="noticias-top-parrafo">
          En todas las publicaciones del Sitio Usted podrá encontrar el nombre y datos de autorización del Corredor responsable de la correspondiente publicación.
        </p>

        <h2 className="noticias-top-subtitulo">7. Registro de Usuario</h2>
        <h3 className="noticias-top-subtitulo">7.1.</h3>
        <p className="noticias-top-parrafo">
          El visitante del sitio podrá registrarse como Usuario, pero este no es un requisito para poder acceder y visualizar los anuncios publicados por los Corredores. El registro como Usuario les permitirá a los visitantes acceder a funcionalidades adicionales, tales como la posibilidad de guardar los avisos que resulten de su interés en un catálogo de favoritos al cual podrán acceder cada vez que se inicie sesión como Usuario.
        </p>
        <h3 className="noticias-top-subtitulo">7.2.</h3>
        <p className="noticias-top-parrafo">
          El visitante para registrarse como Usuario deberá:
        </p>
        <ul className="noticias-top-lista">
          <li>Completar el formulario de registración en todos sus campos con datos válidos, exactos, precisos, verdaderos y completos.</li>
          <li>Aceptar los términos y condiciones y las políticas de privacidad del Sitio.</li>
        </ul>
        <h3 className="noticias-top-subtitulo">7.3.</h3>
        <p className="noticias-top-parrafo">
          El Usuario dispondrá de una cuenta con su correo electrónico y contraseña que le permitirá el acceso personalizado, confidencial y seguro del sitio. El Usuario tendrá la posibilidad de cambiar la clave de acceso, para la cual deberá sujetarse al procedimiento establecido en el sitio.
        </p>
        <h3 className="noticias-top-subtitulo">7.4.</h3>
        <p className="noticias-top-parrafo">
          Top Arriendos podrá negarse a conceder al visitante el registro como Usuario cuando:
        </p>
        <ul className="noticias-top-lista">
          <li>El correo electrónico utilizado pertenece a otro Usuario registrado previamente.</li>
          <li>Se proporcione un correo electrónico inválido o inexistente.</li>
        </ul>
        <h3 className="noticias-top-subtitulo">7.5.</h3>
        <p className="noticias-top-parrafo">
          El Usuario es completamente responsable de todas las interacciones en el sitio que se produzcan en relación con su cuenta, y deberá notificar inmediatamente a Top Arriendos cualquier uso no autorizado de su cuenta o contraseña.
        </p>
        <h3 className="noticias-top-subtitulo">7.6.</h3>
        <p className="noticias-top-parrafo">
          Top Arriendos no se hace responsable por la certeza o falsedad de los datos suministrados por los Usuarios. El Usuario es quien garantiza y responde por la veracidad, exactitud, vigencia y autenticidad de los datos suministrados.
        </p>
        <h3 className="noticias-top-subtitulo">7.7.</h3>
        <p className="noticias-top-parrafo">
          El registro como Usuario no garantiza, en ninguna circunstancia, que su solicitud de información o interés sea tratada de forma preferente por ninguno de los Corredores.
        </p>
        <h3 className="noticias-top-subtitulo">7.8.</h3>
        <p className="noticias-top-parrafo">
          El Usuario reconoce que Top Arriendos podrá eliminar o suspender su cuenta como Usuario en caso de incumplir con alguna de las disposiciones y obligaciones establecidas en los presentes Términos y Condiciones.
        </p>
        <h3 className="noticias-top-subtitulo">7.9.</h3>
        <p className="noticias-top-parrafo">
          El Usuario podrá eliminar su cuenta a través de la opción que se habilite a tal fin en su perfil de usuario.
        </p>

        <h2 className="noticias-top-subtitulo">8. Modificaciones de los T&C</h2>
        <p className="noticias-top-parrafo">
          Top Arriendos podrá modificar, a su entera discreción, estos T&C en cualquier momento. El uso del Sitio y/o sus servicios implica la aceptación de estos Términos y Condiciones.
        </p>

        <h2 className="noticias-top-subtitulo">9. Datos Personales</h2>
        <p className="noticias-top-parrafo">
          Top Arriendos mantendrá bajo estricta confidencialidad los Datos Personales suministrados en el Sitio, salvo en los casos en los que la Ley de Protección de Datos Personales de Chile permita su divulgación. Para conocer el detalle de los términos y condiciones sobre las Políticas de Privacidad que se aplican al Sitio, lo invitamos a revisar el siguiente link: <Link to="/informacion">Política de Privacidad</Link>.
        </p>

        <h2 className="noticias-top-subtitulo">10. Indemnidad</h2>
        <h3 className="noticias-top-subtitulo">10.1.</h3>
        <p className="noticias-top-parrafo">
          La aceptación de los T&C implica en forma expresa e irrevocable reconocer que Top Arriendos no ejerce el corretaje de propiedades y que el Sitio es una plataforma utilizada por los Corredores. En consecuencia, Ud. se obliga a mantener indemne a Top Arriendos respecto a cualquier reclamo relacionado a una publicación realizada en el Sitio por un Corredor.
        </p>
        <h3 className="noticias-top-subtitulo">10.2.</h3>
        <p className="noticias-top-parrafo">
          Usted acepta mantener indemne a Top Arriendos de y contra cualquier cargo, acción o demanda, incluyendo, pero no limitándose a, los gastos legales razonables, que resulten del uso que Usted haga del Sitio.
        </p>

        <h2 className="noticias-top-subtitulo">11. Información correspondiente a las propiedades</h2>
        <h3 className="noticias-top-subtitulo">11.1.</h3>
        <p className="noticias-top-parrafo">
          Top Arriendos no es titular, propietario, poseedor, depositario, administrador ni tenedor de los inmuebles ofrecidos, ni tampoco interviene en la confección de las publicaciones ni el perfeccionamiento de las operaciones ni en las condiciones estipuladas en cada publicación.
        </p>
        <h3 className="noticias-top-subtitulo">11.2.</h3>
        <p className="noticias-top-parrafo">
          Toda la información acerca de los inmuebles ofrecidos en el Sitio es proporcionada por los Corredores, siendo -por ende- de su exclusiva responsabilidad.
        </p>
        <h3 className="noticias-top-subtitulo">11.3.</h3>
        <p className="noticias-top-parrafo">
          Top Arriendos no ofrece garantía alguna ni será responsable por la calidad, precio, condiciones de venta, estado, vicios ocultos o redhibitorios ni por las consecuencias que deriven de la compraventa y/o uso de los inmuebles que pueda adquirir a raíz de las publicaciones realizadas por los Corredores.
        </p>

        <h2 className="noticias-top-subtitulo">12. Seguridad física</h2>
        <p className="noticias-top-parrafo">
          Top Arriendos no garantiza las condiciones de seguridad y protección a quienes pauten con un Corredor la visita de un inmueble publicado en el Sitio o cualquier otro tipo de encuentro con un Corredor.
        </p>

        <h2 className="noticias-top-subtitulo">13. Ley aplicable y tribunal competente</h2>
        <p className="noticias-top-parrafo">
          Los presentes T&C y las normas que lo complementan se regirán por las leyes de la República de Chile, siendo competentes para cualquier controversia que pudiere llegar a suscitarse, los Tribunales de Justicia de Chile.
        </p>

        <p className="noticias-top-parrafo">
          <strong>Fecha de última actualización:</strong> [insertar fecha]
        </p>
        <p className="noticias-top-parrafo">
          Para cualquier consulta, puede contactarnos a [insertar correo electrónico de contacto].
        </p>
      </div>
    </div>
  );
};

export default TyC;