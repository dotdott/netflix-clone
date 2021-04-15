import React from 'react'
import SignInInvite from './SignInInvite';
import Link from 'next/link'


import {
    Container,
    ContainerHeaderImage,
    BackgroundImage,
    
    HeaderContent,
    HeaderContentTop,
    LogoImage,
    LoginButton,

    HeaderContentBody,
    TextH1,
    TextH2,
} from './styles';


export default function Header() {
    return (

        <Container>
            <ContainerHeaderImage>
                <BackgroundImage src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="netflix background image" />
            </ContainerHeaderImage>

            <HeaderContent>
                <HeaderContentTop>
                    <LogoImage src='/assets/logo.svg' /> 
                    <Link href='/login'><LoginButton>Entrar</LoginButton></Link>
                </HeaderContentTop>

            <HeaderContentBody>
                <TextH1>Filmes, séries e muito mais. Sem limites.</TextH1>
                <TextH2>Assista onde quiser. Cancele quando quiser.</TextH2>
                
                <SignInInvite />

            </HeaderContentBody>

            </HeaderContent>
        </Container>

    )
}
