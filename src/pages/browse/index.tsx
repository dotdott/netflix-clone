import React, { useContext, useEffect } from 'react'
import Browse from '../../components/Browse';

import { LoginContext } from '../../contexts/LoginContext';
import { useRouter } from 'next/router';


export default function index() {
    const { currentUser } = useContext(LoginContext);

    const router = useRouter();
    useEffect(() => {
       (currentUser === null) && router.push('/login')
    }, [])
    

    return (
        <Browse />
    )
}
