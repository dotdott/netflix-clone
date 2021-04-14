import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #000;
    color: #757575;
    padding: 2rem 0;
    margin: 2rem 0;
`
export const ContactText = styled.p`
    position: relative;
    left: -14.5%;

    font-size: 1.2rem;
`
export const ContactHref = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`


export const LinkDirectWrapper = styled.div`
    display: flex;
    justify-content: center;

    gap: 4rem;
`;
export const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;
export const LinkTo = styled(ContactHref)``;

export const ContactNetflix = styled.p`
    margin-top: 2rem;

    position: relative;
    left: -18.5%;

    font-size: 1rem;
`;

export const SelectLanguage = styled.select`    
    position: relative;
    left: -17%;

    margin-top: 1rem;

    color: #757575;
    background: #000;
    border: 1px solid #757575;

    font-size: 1.2rem;
    padding: 1rem;

`