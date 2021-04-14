import React, { useState } from 'react'

import {   
    QuestionText,
    SpanText,
    QuestionWrapperText,
    IconDisplay,

    QuestionAnswer,
} from './styles';

interface QuestionsProps{
    Text: string;
    Answer2?: string;
    Answer: string;
    id: string;
}

export default function Questions({Text, Answer, Answer2, id}: QuestionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState('/assets/plus-solid.svg');


    function handleIcon(e) {
        const key = e.target.id;

        if(isOpen === false && key === id){
            setIcon('/assets/close-solid.svg');
            return setIsOpen(true);
        }
        if(isOpen === true && key === e.target.id) {
            setIcon('/assets/plus-solid.svg');
            return setIsOpen(false);
        }
    }

    return (
        <>
            <QuestionWrapperText id={id} onClick={e => handleIcon(e)}>
                <QuestionText id={id}>{Text}</QuestionText>
                <IconDisplay id={id} src={icon} alt='icone abrir/fechar' />
            </QuestionWrapperText>
        {isOpen === true && id === id &&
            <QuestionAnswer>
                {Answer}

                <SpanText>
                    {Answer2}
                </SpanText>
            </QuestionAnswer>
        }

        </>
    )
}
