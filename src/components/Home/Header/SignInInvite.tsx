import React from 'react'

import {
    SignUpDiv,
    SignUpInput,
    TextP,
    SignUpButton,
    ButtonChevronRight
} from './styles';

export default function SignInInvite() {
    return (
        <>
        <TextP>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </TextP>

        <SignUpDiv>
            <SignUpInput type="email" placeholder="Email" />
            <SignUpButton>
                Vamos Lá
                <ButtonChevronRight src='/assets/chevron-right.svg' />
            </SignUpButton>
        </SignUpDiv>
    </>
    )
}
