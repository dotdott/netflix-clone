import React, { useEffect } from 'react';
import Login from '../../components/Login';
import redirectUser from '../../RedirectUser';

export default function index() {
    useEffect(() => {
        redirectUser();
    }, [])

    return (
        <Login />
    )
}
