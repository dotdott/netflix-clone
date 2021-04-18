export interface ErrosProps {
    email?: string;
    password?: string;
    firebasePass?: string;
    firebaseEmail?: string;
}

const Erros = (values: ErrosProps) => {
    const errors = {} as ErrosProps;

    if(!values.email){
        errors.email = 'O email é obrigatório.';
    }   else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Insira um email válido.';
    }    


    if(!values.password){
        errors.password = 'Você precisa digitar sua senha.';
    } else if (values.password.length < 6){
        errors.password = 'Sua senha precisa ter no mínimo 6 caracteres';
    }


    if(values.firebaseEmail === 'auth/user-not-found'){
        errors.firebaseEmail =  'Desculpe, não encontramos uma conta com esse endereço de email. Tente novamente ou ';
    }  
    
    if (values.firebasePass === 'auth/wrong-password'){
        errors.firebasePass = 'Senha incorreta. Tente novamente ou ';
    }

    return errors;
}

export default Erros;