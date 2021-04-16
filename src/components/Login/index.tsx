import React, { useEffect, useState } from 'react'
import LoginFooter from './Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { 
    Container,
    BackgroundImage,
    LogoImage,

    LoginArea,
    LoginWrapper,
    LoginTitle,
    LoginEmailInput,
    LoginPasswordInput,
    LoginButton,

    LoginInstructions,
    LoginRememberMeCheckbox,
    LoginLabelCheckbox,
    LoginNeedHelp,

    LoginFacebook,
    LoginFacebookIcon,
    LoginFacebookText,

    LoginSignUpText,
    LoginSignUpSpan,

    LoginMessageText,
    LoginMessageSpan,
    ErrorsWarn
} from './styles'

import { ErrorsData } from '../Home/Header/SignInInvite';
import LoginValidation from '../LoginValidation';

export default function index() {
    const router = useRouter();

    const [inputEmail, setInputEmail] = useState(null);
    const [inputPassword, setInputPassword] = useState(null);
    const [errors, setErrors] = useState<ErrorsData>({} as ErrorsData);

    function handleLogin(){
        setErrors(LoginValidation({email: inputEmail, password: inputPassword}))

        if(errors.email === undefined && inputEmail != '' && errors.password === undefined && inputPassword != ''){
            alert('Você supostamente já pode logar!!!')
        }
    }

    useEffect(() => {
        setErrors(LoginValidation({ email: inputEmail, password: inputPassword }))

        if(errors.email === undefined && inputEmail !== '' && errors.password === undefined && inputPassword !== ''){
            setErrors({ email: '', password: '' });   
        }

    }, [inputEmail, inputPassword])    
    

    return (
        <Container>
            <BackgroundImage src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="netflix background image" />
                <Link href="/"><LogoImage src='/assets/logo.svg' /></Link>
            <LoginArea>
                <LoginWrapper>
                    <LoginTitle>Entrar</LoginTitle>

                        <LoginEmailInput 
                            type="email"
                            placeholder="Email ou número de telefone" 
                            onChange={e => setInputEmail(e.target.value)} 
                        />
                            <ErrorsWarn>{errors.email}</ErrorsWarn>
                        <LoginPasswordInput 
                            type="password"
                            placeholder="Senha" 
                            onChange={e => setInputPassword(e.target.value)} 
                            />
                            <ErrorsWarn>{errors.password}</ErrorsWarn>
                        
                        <LoginButton onClick={handleLogin}>Entrar</LoginButton>

                <LoginInstructions>
                        <LoginLabelCheckbox htmlFor="confirm">
                            <LoginRememberMeCheckbox type="checkbox" id="confirm" />
                            Lembre-se de mim
                        </LoginLabelCheckbox>

                    <LoginNeedHelp>
                        Precisa de ajuda?
                    </LoginNeedHelp>
                </LoginInstructions>

                <LoginFacebook>
                    <LoginFacebookIcon src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
                    <LoginFacebookText>Conectar com facebook</LoginFacebookText>
                </LoginFacebook>

                <LoginSignUpText>
                    Novo por aqui? 
                    <LoginSignUpSpan>
                        Assine agora.
                    </LoginSignUpSpan>
                </LoginSignUpText>

                <LoginMessageText>
                    Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                    <LoginMessageSpan>
                        Saiba mais.
                    </LoginMessageSpan>
                </LoginMessageText>

                </LoginWrapper>
            <LoginFooter />
            </LoginArea>

        </Container>
    )
}