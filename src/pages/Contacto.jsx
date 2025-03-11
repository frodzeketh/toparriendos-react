import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Contacto() {
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState("")
  const location = useLocation()

  useEffect(() => {
    // Obtener la localidad de los parámetros de la URL
    const searchParams = new URLSearchParams(location.search)
    const localidad = searchParams.get("localidad")
    if (localidad) {
      setLocalidadSeleccionada(localidad)
    }
  }, [location])

  return (
    <main className="contacto-main">
      <h1 className="page-title">Publica tu Propiedad</h1>

      {localidadSeleccionada && <h2>Vende tu propiedad en: {localidadSeleccionada}</h2>}

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección de la propiedad:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="form-input"
              value={localidadSeleccionada}
              onChange={(e) => setLocalidadSeleccionada(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" className="form-textarea"></textarea>
          </div>

          <button type="submit" className="form-submit-button">
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contacto
