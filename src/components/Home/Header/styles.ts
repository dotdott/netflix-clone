import styled from 'styled-components';
import {device} from '../../../styles/components/device';

export const Container = styled.div`
    width: 100vw;
    height: 80vh;
    overflow-x: hidden;
        ${device.m550}{
            height: 50vh;
            
            p:last-child{
                top: -6rem;
            }
        }

        ${device.m768}{
            & p:last-child {
                left: -10.5rem !important;
                top: -5.5rem;
            }
        }        
        ${device.m500}{
            & p:last-child {
                left: -8.5rem !important;
            }
        }

        & p:last-child{
            position: relative;
            left: -17.5rem;
            width: 30rem;
        }
`;


export const ContainerHeaderImage = styled.div`
    width: 100%;
    height: 100%;
`;
export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;

        ${device.m1600}{
            width: auto;
            height: 100%;
        }
`;

export const HeaderContent = styled.div`
    position: absolute;
    top: 0;

    background: rgba(0,0,0,.6);

    width: 100%;
    height: 80vh;
    border-bottom: .5rem solid var(--grey-border);
        ${device.m550}{
            height: 50vh;
        }
`;
export const HeaderContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.5rem 4rem;
        ${device.m1000}{
            margin: 1.5rem 1rem;
        }
`;
export const LoginButton = styled.button`
    background: var(--brighter-red);
    color: #fff;

    border-radius: .35rem;
    border: none;

    padding: .6rem 1.3rem;
    font-size: 1rem;

    cursor: pointer;
`;
export const LogoImage = styled.img`
    width: 10.4375rem;
    height: 2.8125rem;
        ${device.m1000}{
            width: 6.75rem;
            height: 2rem;
        }
`;

export const HeaderContentBody = styled.div`
    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;
    text-align: center;
        ${device.m550}{
            margin-top: 5rem;
        }
`;
export const TextH1 = styled.h1`
    font-size: 4rem;
    width: 35%;
    margin: .5rem 0;

        ${device.m1600}{
            width: 40%;     
            font-size: 3.2rem;   
        }
            ${device.m1280}{
                width: 65%;
            }

                ${device.m1000}{
                    width: 74%;
                }      
        
                    ${device.m550}{
                        width: 90%;
                        font-size: 1.8rem;
                    }

`;
export const TextH2 = styled.h2`
    font-weight: 500;
    margin: .5rem 0;

        ${device.m1600}{
            font-size: 2rem;
        }
             
            ${device.m550}{
                width: 90%;
                font-size: 1.5rem;
            }
`;
export const TextP = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;

        ${device.m550}{
            width: 90%;
            text-align: center;
        }
`;

export const SignUpDiv = styled.div`
    display: flex;
    
        ${device.m1000}{
            flex-direction: column;
        }
`;
export const SignUpInput = styled.input`
    padding: 1.5rem 1rem;
    font-size: 1rem;

    width: 30rem;

        ${device.m550}{
            padding: 1rem 1rem;
            width: calc(30rem - 4rem);
        }        
        
            ${device.m425}{
                width: calc(30rem - 9rem);
            }       
                ${device.m425}{
                    width: calc(30rem - 11rem);
                }

`;
export const SignUpButton = styled.button`
    background: var(--darker-red);
    color: #fff;

    padding: 1.5rem 2rem;
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;

        ${device.m1000}{
            width: 120px;
            padding: 1rem .5rem;
            font-size: 1rem;
            margin: 1rem auto;
        }
`;
export const ButtonChevronRight = styled.img`
    position: relative;
    left: .8rem;

    width: 25px;
    height: 25px;

        ${device.m1000}{
            width: 15px;
            height: 15px;
            left: .5rem;
        }
`;


export const ErrorsWarn = styled.p`
    position: relative;
    left: -6.5rem;
    width: 30rem;

    font-size: .9rem;
    color: #ffa00a;
    margin-bottom: -6px;

        ${device.m1000}{
            left: 0.5rem;
            top: -6rem;
        }        
        ${device.m500}{
            left: 2.5rem;
        }        
        ${device.m425}{
            left: 5.5rem;
        }
`;