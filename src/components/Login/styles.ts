import styled from 'styled-components';

import { device } from '../../styles/components/device';

export const Container = styled.div`
    width: auto;
    min-height: 100vh;
    overflow-x: hidden;
    background: #000;

    font-family: sans-serif;
`;

export const BackgroundImage = styled.img`
    width: 100vw;
    height: 117vh;

        ${device.m1600}{
            width: auto;
        }
`;

export const LogoImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin: -3rem 0 0 4rem;

    z-index: 999;

    height: 200px;
    width: 165px;
    cursor: pointer;

        ${device.m768}{
            margin: -3rem 0 0 1rem;
        }
`;


export const LoginArea = styled.div`
    position: absolute;
    top: 0;

    background: rgba(0,0,0,.5);

    width: 100%;
    height: 117vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 450px;

    background: rgba(0,0,0,.7);
    padding: 3rem 4rem;

    margin-bottom: 15rem;
        
    ${device.m768} {
        position: absolute;
        top: 0;
        width: 100%;
        height: 60%;
        background: #000;

        border-bottom: 2px solid var(--grey-border);
        padding: 3rem 1rem;
    }
`;

export const LoginTitle = styled.h1`
    color: #fff;
    margin-bottom: .8rem;
`
export const LoginEmailInput = styled.input`
    background: #333;
    color: #fff;

    padding: 1rem;
    font-size: 1rem;

    width: 323px;

    border-radius: .25rem;
    border: none;
    outline: none;
        &:focus {
            filter: brightness(1.4);
        }

        ${device.m768}{
            width: auto;
        }
`
export const LoginPasswordInput = styled(LoginEmailInput)``
export const LoginButton = styled.button`
    margin-top: 1.5rem;
    background: var(--brighter-red);
    color: #fff;

    border-radius: .35rem;
    border: none;

    padding: 1rem 1.3rem;
    font-size: 1rem;
    font-weight: bold;
    width: 323px;

    cursor: pointer;
        ${device.m768}{
                width: auto;
            }
`


export const LoginInstructions = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const LoginRememberMeCheckbox = styled.input`
`;

export const LoginLabelCheckbox = styled.label`
    font-size: .8rem;
    color: #b3b3b3;
`;
export const LoginNeedHelp = styled.a`
    font-size: .8rem;
    color: #b3b3b3;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const LoginFacebook = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
    margin-top: 2rem;
    cursor: pointer;
`;
export const LoginFacebookIcon = styled.img`
    width: 20px;
    height: 20px;
`;
export const LoginFacebookText = styled.p`
    color: #737373;
    font-size: .8rem;
`;

export const LoginSignUpText = styled.p`
    margin: 0;
    color: #737373;
`
export const LoginSignUpSpan = styled.span`
    color: #fff;
    cursor: pointer;

    &::before {
        content: ' ';
    }

    &:hover {
        text-decoration: underline;
    }
`

export const LoginMessageText = styled.p`
    margin: 0;
    font-size: .9rem;
    color: #8c8c8c;

    padding-bottom: 5rem;
`
export const LoginMessageSpan = styled(LoginSignUpSpan)`
    color: #0071eb;
`;

export const ErrorsWarn = styled.p`
    position: relative;
    left: 0.5rem;
    top: -1.5rem;
    width: 30rem;

    font-size: .9rem;
    color: #e87c03;
    margin-bottom: -6px;

        ${device.m1000}{
            left: 0.5rem;
        }        
        ${device.m500}{
            left: 0rem;
            width: 50%;
        }        
        ${device.m425}{
            left: 0rem;
        }
`;

export const ErrorsWarnFirebase = styled.p`
    position: relative;
    left: 0rem;
    top: -1.5rem;
    width: 20rem;

    font-size: .9rem;
    margin-bottom: -6px;
    padding: 1rem;

    background: #e87c03;
    color: #fff;

        & span {
            text-decoration: underline;   
            cursor: pointer;
        }

        ${device.m1000}{
            left: 0.5rem;
        }        
        ${device.m500}{
            left: 0rem;
            width: 50%;
        }        
        ${device.m425}{
            left: 0rem;
        }
`;