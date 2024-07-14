import { ChangeEvent, FormEvent, useState } from "react"
import { FormUsuarioProps, Usuario } from "./interfaces"


const FormUsuario = ({handleAddUsuario} : FormUsuarioProps) => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome:'',
    idade:0,
    email:'',
    hobbies: []
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setUsuario(
      prevUsuario => ({
        ...prevUsuario,
        [name] : name === 'idade' ? parseInt(value) : value
      })
    ) 
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(usuario.nome != ''){
      handleAddUsuario(usuario)
    }
    
    setUsuario({
      nome:'',
      idade:0,
      email:'',
      hobbies: []
    })

  }

  return (
    <div>
      <h2>Adicionar Usuários</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={usuario.nome} onChange={handleChange}/>
        </div>
        <div>
          <label>Idade:</label>
          <input type="number" name="idade" value={usuario.idade} onChange={handleChange}/>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={usuario.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Hobbies:</label>
          <input 
            type="text" 
            name="hobbies" 
            value={usuario.hobbies.join(',')} 
            onChange={(e) => {
              const { value } = e.target;
                setUsuario(prevUsuario => ({
                  ...prevUsuario,
                  hobbies: value.split(',').map(hobby => hobby.trim())
                }));
            }} 
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
} 

export default FormUsuario