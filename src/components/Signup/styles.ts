import styled from 'styled-components';
import {device} from '../../styles/components/device';

interface Props {
    step?: number;
    size?: number;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
`;

export const HeaderContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 0;
    border-bottom: 1px solid #e6e6e6;
    width: 100%;

        ${device.m1000}{
            margin: 1.5rem 1rem;
        }
`;
export const LoginButton = styled.a`
    color: #333;
    font-weight: 700;
    font-size: 1.1rem;

    border-radius: .35rem;
    margin-right: 3.5rem;
    padding: .6rem 1.3rem;

    text-decoration: none;
    cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
`;
export const LogoImage = styled.img`
    width: 10.4375rem;
    height: 2.8125rem;
    cursor: pointer;

    margin-left: 3.5rem;
        ${device.m1000}{
            width: 6.75rem;
            height: 2rem;
        }
`;


export const SignUpSteps = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${props => props.step != 2 ? '62%' : '50%' };
    width: 100%;
`;
export const StepsWrapper = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: ${props => props.step != 2 ? 'center' : 'flex-start' };
    flex-direction: column;

    text-align: ${props => props.step != 2 ? 'center' : 'flex-start' };
    width: ${props => props.step != 2 ? '300px' : '440px' };

    color: #333;
`;
export const StepImage = styled.img`
    width: 300px;
    margin-bottom: 2rem;
`;
export const StepNumber = styled.text`

    & span {
        font-weight: 700;
        font-size: .9rem;
    }
`;
export const StepTitle = styled.h2`
    margin-top: 0;
`;
export const StepText = styled.text`
    font-size: 1.1rem;
    margin: 0;
`;
export const StepButton = styled.button<Props>`
    background: var(--darker-red);
    color: #fff;

    margin-top: 1.5rem;
    padding: .9rem 2rem;
    font-size: 1.1rem;
    width: ${props => props.size === 110 ? '110%' : '100%'};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;
`;

export const StepForm = styled.form`
    & input:first-child {
        margin-top: 1rem;
    }
`
export const StepInput = styled.input`
    padding: 1.3rem .8rem;
    font-size: 1rem;
    border: solid 1px #8c8c8c;
    margin-bottom: 1rem;
    width: 100%;

    outline: none;
`