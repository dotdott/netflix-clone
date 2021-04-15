import styled from 'styled-components';

import {device} from '../../../styles/components/device';

export const Container = styled.div`
    position: absolute;
    bottom: -1vh;

    width: 100%;
    height: 27vh;

    color: #757575;
    background: rgba(0,0,0,.8);

    font-family: sans-serif;
    overflow-x: hidden;

        ${device.m768}{
            bottom: 17vh;
            height: 30vh;

            background: #000;
            border-top: 2px solid var(--grey-border);
        }
`;


export const ContactText = styled.p`
    margin: 1.7rem 0 1.5rem 21%;
    font-size: 1rem;

    ${device.m1000}{
            margin-left: 15%;
        }
`
export const ContactHref = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`


export const LinkDirectWrapper = styled.div`
    display: flex;

    margin-left: 21%;

    gap: 6rem;
        ${device.m1000}{
            margin: 0 15%;
        }        
        ${device.m500}{
            gap: 2rem;
        }    
        ${device.m375}{
            gap: .2rem;
        }
`;
export const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;
export const LinkTo = styled(ContactHref)`
    font-size: .8rem;
`;

export const SelectLanguage = styled.select`    
    margin: 1.7rem 0 1.5rem 21%;

    color: #757575;
    background: #000;
    border: 1px solid #757575;

    font-size: 1rem;
    padding: 1rem;

        ${device.m1000}{
            margin-left: 15%;
        }
`