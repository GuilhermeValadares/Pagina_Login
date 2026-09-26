import '../../../Styles/login.css';
import { HeaderAuth } from '../../../components/Header';
import { LoginIcon } from './Components/LogInIcon';
import { ErrorMessageCard } from '../../../components/ErrorMessageCard';
import { AuthFooter } from '../../../components/AuthFooter';
import { FormGroup } from '../../../components/FormGroup';
import { useState } from 'react';
import type { User } from '../../../types/User';

type PropsLoginPage = {
  handleGoSignUp: () => void;
  users: User[];
};

export function LoginPage({ handleGoSignUp, users }: PropsLoginPage) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      return setError('Preencha todos os dados!');
    }

    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return setError('Email ou senha inválidos.');
    }
  }

  return (
    <div className="container">
      <div className="card">
        <HeaderAuth title="Bem Vindo!" subtitle="Faça login para continuar!" Icon={<LoginIcon />} />

        {error && <ErrorMessageCard title={error} />}

        <form onSubmit={handleSubmit}>
          <FormGroup label="email" imputVariant="email" value={email} setValue={setEmail} />
          <FormGroup label="Senha" imputVariant="password" value={password} setValue={setPassword} />

          <button type="submit" className="button button-primary">
            Entrar
          </button>
        </form>

        <AuthFooter title="Não tem uma conta?" lableLink="Cadastre-se" onRedirect={handleGoSignUp} />
      </div>
    </div>
  );
}
