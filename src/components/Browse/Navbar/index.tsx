import React, { useContext } from 'react'

import { useRouter } from 'next/router';
import { LoginContext } from '../../../contexts/LoginContext';

import {
    Container,
    NavbarBrowseSection,
    LogoImg,
    BrowseSection,

    NavbarUserSection,
    SearchIcon,
    ChildsBrowse,
    GiftIcon,
    BellIcon,
    ProfileIcon,
} from './styles';


export default function index() {
    const { SignOut } = useContext(LoginContext);
    const router = useRouter();

    async function redirectSignOut(){
        await SignOut();
        return router.push('/login');
    }
    return (
        <Container>
            <NavbarBrowseSection>
                <LogoImg src="/assets/logo.svg" />
                <BrowseSection>Inicio</BrowseSection>
                <BrowseSection>Séries</BrowseSection>
                <BrowseSection>Filmes</BrowseSection>
                <BrowseSection>Bombando</BrowseSection>
                <BrowseSection>Minha Lista</BrowseSection>
            </NavbarBrowseSection>

            <NavbarUserSection>
                <SearchIcon src="/assets/search.svg"/>

                <ChildsBrowse>INFANTIL</ChildsBrowse>

                <GiftIcon src="/assets/gift.svg" />

                <BellIcon src="/assets/bell.svg"/>

                <ProfileIcon src="/assets/user.svg"/>
                <ChildsBrowse onClick={redirectSignOut}>SAIR</ChildsBrowse>
            </NavbarUserSection>            
        </Container>
    )
}
