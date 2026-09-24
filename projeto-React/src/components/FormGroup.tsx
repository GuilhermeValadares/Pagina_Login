type PropsFormGroup = {
  label: string;
  imputVariant: 'email' | 'password' | 'passwordAgain' | 'text';
  placeholder?: string;
};

export function FormGroup({ label, imputVariant, placeholder }: PropsFormGroup) {
  const PropsImput = {
    email: {
      type: 'email',
      placeholder: 'exemplo@email.com',
    },
    password: {
      type: 'password',
      placeholder: 'Digite sua senha',
    },
    passwordAgain: {
      type: 'passwordAgain',
      placeholder: 'Digite sua senha novamente',
    },
    text: {
      type: 'text',
      placeholder: 'Digite seu nome completo',
    },
  };

  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={PropsImput[imputVariant].type}
        className="form-input"
        placeholder={placeholder || PropsImput[imputVariant].placeholder}
      />
    </div>
  );
}
