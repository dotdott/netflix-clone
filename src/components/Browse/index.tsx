import React, { useContext } from 'react';

import { useRouter } from 'next/router';
import { LoginContext } from '../../contexts/LoginContext';

import Navbar from './Navbar';
import Header  from './Header';

import {
    Container
} from './styles';


export default function index({movie}) {
    const { SignOut } = useContext(LoginContext);
    const router = useRouter();

    async function redirectSignOut(){
        await SignOut();
        return router.push('/login');
    }

    return (
        <Container>
           {/* <p onClick={redirectSignOut}> logout</p> */}
            <Navbar />
            <Header movie={movie}/>
        </Container>
    )
}