import { HeaderAuth } from '../../../components/Header';
import '../../../Styles/SingUp.css';
import { SingUpIcon } from './Components/SingUpIcon';
import { ErrorMessageCard } from '../../../components/ErrorMessageCard';
import { AuthFooter } from '../../../components/AuthFooter';
import { FormGroup } from '../../../components/FormGroup';
import { useState } from 'react';
import type { User } from '../../../types/User';

type PropsSingUpPage = {
  handleGoSignIn: () => void;
  onRegister: (user: User) => void;
  users: User[];
};

export function SingUpPage({ handleGoSignIn, onRegister, users }: PropsSingUpPage) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      return setError('Preencha todos os dados!');
    }

    if (password !== confirmPassword) {
      return setError('A senha de confirmação está incorreta');
    }

    if (users.some((user) => user.email === email)) {
      return setError('Este email já está cadastrado');
    }

    const newUser: User = {
      name,
      email,
      password,
    };

    onRegister(newUser);
  }

  return (
    <div className="container">
      <div className="card">
        <HeaderAuth title="Criar Conta" subtitle="Preencha os dados" Icon={<SingUpIcon />} />

        {error && <ErrorMessageCard title={error} />}

        <form onSubmit={handleSubmit}>
          <FormGroup label="Nome" imputVariant="text" value={name} setValue={setName} />

          <FormGroup label="email" imputVariant="email" value={email} setValue={setEmail} />

          <FormGroup
            label="Senha"
            imputVariant="password"
            value={password}
            setValue={setPassword}
          />

          <FormGroup
            label="Confirmar senha"
            imputVariant="passwordAgain"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />

          <button type="submit" className="button button-singup">
            Cadastrar
          </button>
        </form>

        <AuthFooter title="Já tem uma conta?" lableLink="entrar" onRedirect={handleGoSignIn} />
      </div>
    </div>
  );
}
