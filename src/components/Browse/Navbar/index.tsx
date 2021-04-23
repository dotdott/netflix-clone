import React, { useContext, useState } from 'react'

import { useRouter } from 'next/router';
import { LoginContext } from '../../../contexts/LoginContext';

import {
    Container,
    NavbarBrowseSection,
    LogoImg,

    NavbarUserSection,
    SearchIcon,
    GiftIcon,
    BellIcon,
    ProfileIcon,

    UserDropdown,
    UserActions,
} from './styles';


export default function index() {
    const { SignOut } = useContext(LoginContext);
    const router = useRouter();

    async function redirectSignOut(){
        await SignOut();
        return router.push('/login');
    }

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Container onMouseLeave={() => setShowDropdown(false)}>
            <NavbarBrowseSection>
                <LogoImg src="/assets/logo.svg" />
            </NavbarBrowseSection>

            <NavbarUserSection>
                <SearchIcon src="/assets/search.svg"/>

                <GiftIcon src="/assets/gift.svg" />

                <BellIcon src="/assets/bell.svg"/>

                <ProfileIcon 
                    src="/assets/user.svg" 
                    onMouseEnter={() => setShowDropdown(true)}
                    onClick={() => setShowDropdown(!showDropdown)}
                />
            <UserDropdown  
                onMouseLeave={() => setShowDropdown(false)}
                dropdown={showDropdown}        
            >
                <UserActions>Conta</UserActions>
                <UserActions onClick={redirectSignOut}>Sair da Netflix</UserActions>
            </UserDropdown>            
            </NavbarUserSection>

        </Container>
    )
}
