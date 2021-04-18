import React, { useContext, useEffect, useState } from 'react'
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

    ErrorsWarn,
    ErrorsWarnFirebase
} from './styles'

import { ErrorsData } from '../Home/Header/SignInInvite';
import LoginValidation from '../LoginValidation';
import { LoginContext } from '../../contexts/LoginContext';

export default function index() {
    const router = useRouter();

    const { SignIn } = useContext(LoginContext);

    const [inputEmail, setInputEmail] = useState<string | null>(null);
    const [inputPassword, setInputPassword] = useState<string | null>(null);
    const [errors, setErrors] = useState<ErrorsData>({} as ErrorsData);

    function handleFirebaseError(error: string){
        if(error === 'auth/user-not-found'){
            setErrors(LoginValidation({ firebaseEmail: error }))
        }        
        
        if(error === 'auth/wrong-password'){
            setErrors(LoginValidation({ firebasePass: error }))
        }
    }

    async function handleLogin(){
        setErrors(LoginValidation({email: inputEmail, password: inputPassword}))
        if(errors.email === undefined && inputEmail != '' && errors.password === undefined && inputPassword != ''){
            try{
                await SignIn(inputEmail, inputPassword);
                
                return router.push('/browse');

            } catch (err) {
                handleFirebaseError(err.code);
            }
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

                            {errors.firebaseEmail ? 
                                <ErrorsWarnFirebase>
                                    {errors.firebaseEmail} 
                                    <Link href='signup'><span>crie um nova conta.</span></Link>
                                </ErrorsWarnFirebase>
                            :
                            errors.firebasePass != undefined ||
                                <ErrorsWarn>{errors.email}</ErrorsWarn>
                            }

                        <LoginPasswordInput 
                            type="password"
                            placeholder="Senha" 
                            onChange={e => setInputPassword(e.target.value)} 
                            />

                            {errors.firebasePass ?
                                <ErrorsWarnFirebase>
                                    {errors.firebasePass} 
                                    <Link href='forget_password'><span>redefina sua senha.</span></Link>
                                </ErrorsWarnFirebase>
                            :
                            errors.firebaseEmail != undefined || 
                                <ErrorsWarn>{errors.password}</ErrorsWarn>                            
                            }

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
                    <LoginSignUpSpan  onClick={() => router.push('/')}>
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
