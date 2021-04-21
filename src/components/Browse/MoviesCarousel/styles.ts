import styled from 'styled-components';

export const Container = styled.div`
    background: #141414;
    overflow-x: hidden;
`;

export const MovieImg = styled.img`
    width: 300px;
    margin: 0 2rem;

    cursor: pointer;
`;

export const ArrowIcon = styled.img`
    cursor: pointer;

    width: 40px;
    height: 40px;
    background: #141414;

        &:hover {
            width: 50px;
            height: 50px;

            transition: ease .5s all;
        }
`;