import styled from 'styled-components';

interface Props {
    type: number;
}

export const Container = styled.div<Props>`
    width: 100%;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.type != 2 ? 'row' : 'row-reverse'};
    
    background: #000;
    color: #fff;

    border-bottom: .5rem solid var(--grey-border);
`;


export const WrapperTextDiv = styled.div`
    width: 30%;
    z-index: 9;
`;

export const TextH1 = styled.h1`
    font-size: 3rem;
`;
export const TextH2 = styled.h2`
    font-size: 1.6rem;
`;



export const WrapperTrailerDiv = styled.div`
    z-index: 999;
`;

export const TrailerHackImg = styled.img`
    z-index: -1;
`;

export const TrailerVideo = styled.video`
    position: relative;
    right: 0.5%;
    top: -24rem;
    width: 82%;
    z-index: -2;
`;

export const TrailerVideo2 = styled.video`
    position: relative;
    right: 0.5%;
    top: -27rem;
    width: 69%;
    z-index: -2;
`;

export const TrailerWrapperDiv = styled.div`
    width: 30%;
    height: 500px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TrailerWrapperDiv2 = styled.div`
    position: relative;
    bottom: 9rem;
    left: 9rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: .25rem solid var(--grey-border);
    border-radius: 1rem;

    height: auto;
    width: 350px;
    padding: .5rem;

    background: #000;
`;

export const TrailerSubImg = styled.img`
    width: 15%;
`;
export const TrailerGifImg = styled.img`
    height: 5em;
`;



export const TrailerWrapperText = styled.div`
`;
export const TrailerTextH2 = styled.h2`
    margin: 0;
    font-size: 1.2em;
`;
export const TrailerBlueText = styled.p`
    margin: 0;
    color: #0071eb;
    font-size: 1em;
`;