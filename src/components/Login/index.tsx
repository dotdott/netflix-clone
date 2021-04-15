import React from 'react'
import LoginFooter from './Footer';
import Link from 'next/link';

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

    LoginWarnText,
    LoginWarnSpan,
} from './styles'


export default function index() {
    return (
        <Container>
            <BackgroundImage src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="netflix background image" />
                <Link href="/"><LogoImage src='/assets/logo.svg' /></Link>
            <LoginArea>
                <LoginWrapper>
                    <LoginTitle>Entrar</LoginTitle>
                        <LoginEmailInput placeholder="Email ou número de telefone" />
                        <LoginPasswordInput placeholder="Senha" />
                        
                        <LoginButton>Entrar</LoginButton>

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

                <LoginWarnText>
                    Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                    <LoginWarnSpan>
                        Saiba mais.
                    </LoginWarnSpan>
                </LoginWarnText>

                </LoginWrapper>
            <LoginFooter />
            </LoginArea>

        </Container>
    )
}
