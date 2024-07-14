import { DadosUsuarioProps } from "./interfaces"


const DadosUsuario = ({usuario}: DadosUsuarioProps) => {

  return (
    <div className="card">
      <h3>{usuario.nome}</h3>
      <p><strong>Idade:</strong> {usuario.idade}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <strong>Hobbies:</strong> 
        {usuario.hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p>
      ))}
      
    </div>
  )
}

export default DadosUsuario;