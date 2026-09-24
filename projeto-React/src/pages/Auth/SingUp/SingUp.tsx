import { HeaderAuth } from "../../../components/Header";
import '../../../Styles/SingUp.css';
import { SingUpIcon } from "./Components/SingUpIcon";
import { ErrorMessageCard } from "../../../components/ErrorMessageCard";
import { AuthFooter } from "../../../components/AuthFooter";
import { FormGroup } from "../../../components/FormGroup";


export function SingUpPage() {

    const isError = false;


    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        console.log('form sing-up');
    }



    return (
        <div className='container'>
            <div className='card'>

                <HeaderAuth title="Criar Conta" subtitle="Preencha os dados" Icon={<SingUpIcon/>} />

                {isError && <ErrorMessageCard title="Email ou senha inválidos."/> }


                <form onSubmit={handleSubmit}>

                    <FormGroup label='Nome' imputVariant='text' />

                    <FormGroup label='email' imputVariant='email' />

                    <FormGroup label='Senha' imputVariant='password' />

                    <FormGroup label='Senha' imputVariant='passwordAgain' />

                    <button type='submit' className='button button-singup'>Cadastrar</button>

                </form>

                <AuthFooter title="Já tem uma conta?" lableLink="entrar" />
           </div>
    </div>
    )
}
