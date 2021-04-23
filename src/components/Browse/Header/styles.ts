import styled from 'styled-components';

import { device } from '../../../styles/components/device';

export const Container = styled.div`
    width: 100vw;
    height: 90vh;

    font-family: sans-serif;
`;


export const BackgroundImage = styled.img`
    position: relative;
    top: -4.1rem;
    z-index: 0;

    width: 100vw;
    height: 100%;
    object-fit: cover;
`;

export const MovieDetails = styled.div`
    position: absolute;
    top: 32%;

    display: flex;
    flex-direction: column;

    color: #fff;
    width: 40%;
    margin-left: 3rem;

    ${device.m1280}{
        width: 55%;
    }    
    ${device.m550}{
        width: 90%;
        margin-left: 1rem;
    }
`;
export const MovieTitle = styled.h1`
    font-size: 4rem;
    margin: 0;

    ${device.m550}{
        font-size: 3rem;
    }
`;

export const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;
export const MovieOverview = styled.p`
    font-size: 1.5rem;
    width: 70%;
    margin-top: 0;
    margin-bottom: 2rem;

    ${device.m1280}{
        width: 100%;
    }
`;

export const MovieScore = styled.h2`

    & span {
        color: #f28123;
    }
`;
export const MovieReleaseDate = styled.p`
    font-size: 1rem;

    & b {
        color: #f28123;
    }
` 
export const MovieButtons = styled.div`
    display: flex;
    gap: 2rem;
`;
export const MovieWatchButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 7px;

    cursor: pointer;
    border: none;
    font-weight: bold;

        &:hover {
            filter: brightness(80%);
        }
    
        ${device.m550}{
            padding: 1rem 1rem;
            font-size: 1rem;
        }
        ${device.m325}{
            padding: .5rem;
        }
`;
export const MovieInfoButton = styled(MovieWatchButton)`
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;

    &:hover {
        filter: brightness(100%);
        background-color: rgba(109, 109, 110, 0.4);
    }
`;

export const PlayIcon = styled.img`
    width: 30px;
    height: 30px;

    ${device.m550}{
        width: 25px;
        height: 25px;
    }
`;
export const ExclamationIcon = styled(PlayIcon)``;