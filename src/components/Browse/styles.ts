import styled from 'styled-components';

export const ContainerMovies = styled.div`
    background: #141414;
    z-index: -4;
    overflow: hidden;

    font-family: sans-serif;
    max-height: 235vh;
`;

export const MoviesWrapper = styled.div`
    position: relative;
    top: -11rem;
`;

export const MoviesTitle = styled.h1`
    color: #fff;

    font-size: 1.8em;
    padding-left: 2rem;
    margin: 2rem 1rem 1rem 1rem;
    max-width: 400px;

    cursor: pointer;
`;