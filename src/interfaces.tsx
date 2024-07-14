export interface Usuario {
  nome: string;
  idade: number;
  email:string;
  hobbies: string[];
}

export interface DadosUsuarioProps {
  usuario: Usuario
}

export interface FormUsuarioProps {
  handleAddUsuario: (usuario: Usuario) => void
}