import React, { useEffect } from 'react';
import Login from '../../components/Login';
import redirectUser from '../../RedirectUser';

export default function index() {
    redirectUser();

    return (
        <Login />
    )
}
