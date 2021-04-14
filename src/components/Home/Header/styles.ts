import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 80vh;
    overflow-x: hidden;
`;

export const ContainerHeaderImage = styled.div`
    width: 100%;
    height: 100%;
`;
export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const HeaderContent = styled.div`
    position: absolute;
    top: 0;

    background: rgba(0,0,0,.6);

    width: 100%;
    height: 80vh;
    border-bottom: .5rem solid var(--grey-border);
`;
export const HeaderContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.5rem 4rem;
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
`;

export const HeaderContentBody = styled.div`
    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;
    text-align: center;
`;
export const TextH1 = styled.h1`
    font-size: 4rem;
    width: 35%;
    margin: .5rem 0;
    `;
export const TextH2 = styled.h2`
    font-weight: 500;
    margin: .5rem 0;
`;
export const TextP = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
`;

export const SignUpDiv = styled.div`
    display: flex;
`;
export const SignUpInput = styled.input`
    padding: 1.5rem 1rem;
    font-size: 1rem;

    width: 30rem;
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
`;
export const ButtonChevronRight = styled.img`
    position: relative;
    left: .8rem;

    width: 25px;
    height: 25px;
`;