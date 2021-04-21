import styled from 'styled-components';

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
`;

export const MovieDetails = styled.div`
    position: absolute;
    top: 32%;

    display: flex;
    flex-direction: column;

    color: #fff;
    width: 40%;
    margin-left: 3rem;
`;
export const MovieTitle = styled.h1`
    font-size: 4rem;
    margin: 0;
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
`;
export const ExclamationIcon = styled(PlayIcon)``;