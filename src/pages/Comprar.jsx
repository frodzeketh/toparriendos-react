import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Comprar() {
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
    <main className="comprar-main">
      <h1>Propiedades en Venta</h1>

      {localidadSeleccionada && <h2>Resultados para: {localidadSeleccionada}</h2>}

      <div className="properties-grid">
        {/* Aquí se mostrarían las propiedades en venta */}
        <p>Lista de propiedades en venta</p>
      </div>
    </main>
  )
}

export default Comprar
