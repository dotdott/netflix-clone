import { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

import {
    SignUpSteps,
    StepsWrapper,

    StepImage,
    StepNumber,

    StepTitle,
    StepText,
    StepButton,

    StepForm,
    StepInput,
} from './styles';

export const UserSignupSteps = () => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);

    const {signupEmail, setSignupEmail, signupPassword, setSignupPassword} = useContext(LoginContext)

    return (
        <>
        {stepOne && 
        <SignUpSteps>
            <StepsWrapper>
                <StepImage src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" />
                <StepNumber>
                    Passo <span>1</span> de <span>3</span>
                </StepNumber>
                <StepTitle>Termine de configurar sua conta.</StepTitle>
                <StepText>A Netflix é personalizada para você. Crie uma senha para assistir à Netflix em qualquer aparelho quando você quiser.</StepText>
                <StepButton 
                    onClick={() => {
                        setStepTwo(true),
                        setStepOne(false)
                    }}
                    size={110}
                >

                    Continuar
                </StepButton>
            </StepsWrapper>
        </SignUpSteps>
        }

        {stepTwo &&
            <SignUpSteps step={2}>
                <StepsWrapper step={2}>
                    <StepNumber>
                        Passo <span>1</span> de <span>3</span>
                    </StepNumber>
                    <StepTitle>Crie uma senha para iniciar sua assinatura.</StepTitle>
                    <StepText>Faltam só mais alguns passos!</StepText>
                    <StepText>Nós também detestamos formulários.</StepText>


                    <StepForm>
                        <StepInput 
                            type="email" 
                            value={signupEmail} 
                            onChange={e => setSignupEmail(e.target.value)} 
                        />
                        <StepInput 
                            type="password" 
                            value={signupPassword} 
                            onChange={e => setSignupPassword(e.target.value)}  
                        />
                        <StepButton 
                            onClick={() => {
                                setStepTwo(true),
                                setStepOne(false)
                            }}
                            size={100}
                            disabled
                        >
                            Continuar
                        </StepButton>                        
                    </StepForm>

                </StepsWrapper>
            </SignUpSteps>
        }
        </>
    )
}