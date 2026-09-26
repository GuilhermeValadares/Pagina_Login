import { LoginPage } from './pages/Auth/Login/Login';
import { SingUpPage } from './pages/Auth/SingUp/SingUp';
import { useState } from 'react';
import type { User } from './types/User';

function App() {
  const [showSingUp, setShowSignUp] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  function onChangeRoute() {
    setShowSignUp((e) => !e);
  }

  function handleRegister(newUser: User) {
    setUsers((prev) => [...prev, newUser]);
    setShowSignUp(false);
  }

  return (
    <>
      {showSingUp ? (
        <SingUpPage handleGoSignIn={onChangeRoute} onRegister={handleRegister} users={users} />
      ) : (
        <LoginPage handleGoSignUp={onChangeRoute} users={users} />
      )}
    </>
  );
}

export default App;
