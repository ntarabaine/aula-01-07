import { useEffect, useState } from "react"
import './App.css'
import { Usuario } from "./interfaces"
import usuariosRegistrados from './users.json'
import DadosUsuario from "./dadosUsuario"
import FormUsuario from "./formUsuario"

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    setUsuarios(usuariosRegistrados.usuarios)
  },[]);

  const handleAddUsuario = (usuario: Usuario) => {
    setUsuarios(prev => [...prev, usuario])
  }

  return (
    <div>
      <FormUsuario handleAddUsuario={handleAddUsuario}/>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <DadosUsuario usuario={usuario}/>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default App
