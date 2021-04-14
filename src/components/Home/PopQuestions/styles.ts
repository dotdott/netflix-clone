import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4rem 0;
    width: 100%;

    color: #fff;

    border-bottom: .5rem solid var(--grey-border);
    /* padding-bottom: 2rem; */
`;

export const QuestionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50%;
`;
export const QuestionTitle = styled.h1`

`;
export const QuestionWrapperText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    height: 80px;
    padding: 0 1.5rem;
    margin-bottom: 8px;

    cursor: pointer;
    background: #303030;
`
export const QuestionText = styled.h2`
    font-size: 2em;
`;
export const IconDisplay = styled.img`
    width: 30px;
    height: 30px;
`
export const QuestionAnswer = styled.p`
    background: #303030;
    width: 80%;

    font-size: 1.7rem;
    margin: 1px;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
`;

export const SpanText = styled.span`
    margin-top: 1rem;
`;