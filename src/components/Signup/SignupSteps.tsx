import Link from 'next/link';

import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

import {
    SignUpSteps,
    StepsWrapper,

    StepImage,
    StepNumber,

    StepTitle,
    StepText,
    StepButton,

    StepForm,
    StepInput,

    StepErrorDiv,
    StepAlertIcon,
    StepErrorText,

    StepWarnLogin,
    StepGif,
} from './styles';

import { ErrorsData } from '../Home/Header/SignInInvite';
import LoginValidation from '../LoginValidation';

export const UserSignupSteps = () => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);

    const [errorAlert, setErrorAlert] = useState(false);

    const [errors, setErrors] = useState({} as ErrorsData);

    const {
        signupEmail, 
        setSignupEmail, 
        signupPassword, 
        setSignupPassword,
        SignUp
    } = useContext(LoginContext);
    
    async function handleSignup(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        try {
            await SignUp(signupEmail, signupPassword);

            setStepThree(true);
            setStepTwo(false);
            
        } catch (err){
            if(err.code === 'auth/email-already-in-use'){
                setErrorAlert(true);
            }
        }
    }

    useEffect(() => {
        setErrors(LoginValidation({ email: signupEmail, password: signupPassword }))

        if(errors.email === undefined && signupEmail !== '' && errors.password === undefined && signupPassword !== ''){
            setErrors({ email: '', password: '' });   
        }
    },[signupEmail, signupPassword])

    return (
        <>
        {stepOne && 
        <SignUpSteps>
            <StepsWrapper>
                <StepImage src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" />
                <StepNumber>
                    Passo <span>1</span> de <span>2</span>
                </StepNumber>
                <StepTitle>Termine de configurar sua conta.</StepTitle>
                <StepText>A Netflix é personalizada para você. Crie uma senha para assistir à Netflix em qualquer aparelho quando você quiser.</StepText>
                <StepButton 
                    onClick={() => {
                        setStepTwo(true),
                        setStepOne(false)
                    }}
                    size={110}
                >

                    Continuar
                </StepButton>
            </StepsWrapper>
        </SignUpSteps>
        }

        {stepTwo &&
            <SignUpSteps step={2}>
                <StepsWrapper step={2}>

                    {errorAlert &&
                    <StepErrorDiv>
                        <StepAlertIcon src='/assets/alert.svg'  alt='Icone de alerta'/>
                        <StepErrorText>	
                            <b>Parece que essa conta já existe. </b>
                            <Link href='/login'><span>Acesse essa conta </span></Link>
                            ou tente usar outro email.
                        </StepErrorText>
                    </StepErrorDiv>
                    }

                    <StepNumber>
                        Passo <span>2</span> de <span>2</span>
                    </StepNumber>
                    <StepTitle>Crie uma senha para iniciar sua assinatura.</StepTitle>
                    <StepText>Faltam só mais alguns passos!</StepText>
                    <StepText>Nós também detestamos formulários.</StepText>


                    <StepForm onSubmit={e => handleSignup(e)}>
                        <StepInput 
                            type="email" 
                            placeholder="Email" 
                            value={signupEmail} 
                            onChange={e => setSignupEmail(e.target.value)} 
                        />

                        {errors.email && 
                            <StepWarnLogin>{errors.email}</StepWarnLogin>
                        }                        

                        <StepInput 
                            type="password" 
                            placeholder="Adicione uma senha" 
                            value={signupPassword} 
                            onChange={e => setSignupPassword(e.target.value)}  
                        />

                        {errors.password && 
                            <StepWarnLogin>{errors.password}</StepWarnLogin>
                        }

                        <StepButton 
                            type="submit"
                            size={100}
                        >
                            Continuar
                        </StepButton>                        
                    </StepForm>

                </StepsWrapper>
            </SignUpSteps>
        }

        {stepThree && 
        <SignUpSteps>
            <StepsWrapper>
                <StepGif src="/assets/netflix_gif.gif" alt="gif"/>
                <StepTitle>Conta criada com sucesso!</StepTitle>

                <Link href="/browse">
                    <StepButton size={100}>
                        Comece a assistir
                    </StepButton>
                </Link>

            </StepsWrapper>
        </SignUpSteps>
        }
        </>
    )
}