import React, { useEffect } from 'react';
import Signup from '../../components/Signup';
import redirectUser from '../../RedirectUser';


export default function index() {
    redirectUser();

    return (
        <Signup />
    )
}
