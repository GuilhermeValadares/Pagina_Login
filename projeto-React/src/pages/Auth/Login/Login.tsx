import '../../../Styles/login.css';
import { HeaderAuth } from '../../../components/Header';
import { LoginIcon } from './Components/LogInIcon';
import { ErrorMessageCard } from '../../../components/ErrorMessageCard';
import { AuthFooter } from '../../../components/AuthFooter';
import { FormGroup } from '../../../components/FormGroup';



export function LoginPage() {

    const isError =true;

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        console.log('form');
    }



    return (


        <div className='container'>
            <div className='card'>

                <HeaderAuth title="Bem Vindo!" subtitle="Faça login para continuar!" Icon={<LoginIcon/>} />

            {isError && <ErrorMessageCard title="Email ou senha inválidos."/> }
            <form onSubmit={handleSubmit}>

                <FormGroup label='email' imputVariant='email'/>
                <FormGroup label='Senha' imputVariant='password'/>

                    <button type='submit' className='button button-primary'>Entrar</button>

            </form>

            <AuthFooter title='Não tem uma conta?' lableLink='Cadastre-se' />

            </div>

        </div>
    );
}
