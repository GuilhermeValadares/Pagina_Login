import { createContext } from 'react';
import { useState } from 'react';

//Interface do contexto de autenticação
interface IAuthContext{
  userName: string;
  setUsername: (username: string) => void;
}


//Contexto de autenticação
const AuthContext = createContext<IAuthContext | null>({
  userName: '',
  setUsername: () => {},
});

//Componente que fornece o contexto para os componentes filhos
export function Authprovider({ children }: { children: React.ReactNode }) {
  const [userName, setUsername] = useState("");

  return (
    <AuthContext.Provider value={{ userName, setUsername }}>
      {children}
    </AuthContext.Provider>
  )
}
