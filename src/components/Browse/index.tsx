import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

import {
    Container
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
           <Link href='/'>Browser</Link>
           <p onClick={redirectSignOut}> logout</p>
        </Container>
    )
}
