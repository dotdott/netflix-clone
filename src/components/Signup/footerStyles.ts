import styled from 'styled-components';

import {device} from '../../styles/components/device';

export const Footer = styled.div`
    position: absolute;
    bottom: -1vh;

    width: 100%;
    height: 27vh;

    color: #757575;
    background: #f3f3f3;
    border-top: 1px solid #e6e6e6;

    font-family: sans-serif;
    overflow-x: hidden;
`;


export const ContactText = styled.p`
    margin: 1.7rem 0 1.5rem 5%;
    font-size: 1rem;
`
export const ContactHref = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`


export const LinkDirectWrapper = styled.div`
    display: flex;

    margin-left: 5%;

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
    margin: 1.7rem 0 1.5rem 5%;

    color: #757575;
    background: #fff;
    border: 1px solid #757575;

    font-size: 1rem;
    padding: 1rem;

        ${device.m1000}{
            margin-left: 15%;
        }
`