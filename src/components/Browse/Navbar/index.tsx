import React from 'react'

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
            </NavbarUserSection>            
        </Container>
    )
}
