import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import LoginValidation from '../../LoginValidation';

import {
    SignUpDiv,
    SignUpInput,
    TextP,
    SignUpButton,
    ButtonChevronRight,
    ErrorsWarn
} from './styles';
import { LoginContext } from '../../../contexts/LoginContext';


export interface ErrorsData {
    email?: string
    password?: string;
    firebaseEmail?: string;
    firebasePass?: string;
};

export default function SignInInvite() {
    const router = useRouter();

    const { setSignupEmail } = useContext(LoginContext);

    const [inputEmail, setInputEmail] = useState(null);
    const [errors, setErrors] = useState<ErrorsData>({} as ErrorsData);

    function redirectSignUp(){
        setErrors(LoginValidation({email: inputEmail}))

        if(errors.email === undefined && inputEmail != ''){
            setSignupEmail(inputEmail);

            router.push('/signup');
        }
    }

    useEffect(() => {
        setErrors(LoginValidation({email: inputEmail}))

        if(errors.email === undefined && inputEmail != ''){
            setErrors({email: ''})
        }

    }, [inputEmail])

    return (
        <>
        <TextP>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </TextP>

        <SignUpDiv>
            <SignUpInput 
                type="email" 
                placeholder="Email" 
                onChange={e => setInputEmail(e.target.value)} 
                />
            <SignUpButton onClick={redirectSignUp}>
                Vamos Lá
                <ButtonChevronRight src='/assets/chevron-right.svg' />
            </SignUpButton>
        </SignUpDiv>
            <ErrorsWarn>{errors.email}</ErrorsWarn>
    </>
    )
}
