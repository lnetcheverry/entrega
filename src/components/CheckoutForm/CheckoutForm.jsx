import { useState } from "react"


const CheckoutForm = ({ createOrden, onconfirm }) => {
  const [Nombre, setName] = useState('')
  const [Telefono, setPhone] = useState('')
  const [Email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      Nombre, Telefono, Email
    }

    onconfirm(userData)
  }

  return (
    <div>
      <div>
        <form onSubmit={handleConfirm}>
          <label>Nombre</label>
          <input type="text" value={Nombre} onChange={({ target }) => setName(target.value)} placeholder="Escribe tu nombre Aqui" />
          <label>Telefono</label>
          <input  type="number" value={Telefono} onChange={({ target }) => setPhone(target.value)} min={0} placeholder="Escribe tu numero de Telefono" />
          <label>E-mail</label>
          <input  type="email" value={Email} onChange={({ target }) => setEmail(target.value)} required placeholder="Escribe tu E-mail Aqui" />
          <button onClick={createOrden}>Generar Orden</button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm