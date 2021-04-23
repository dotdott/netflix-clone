import styled from 'styled-components';

export const Container = styled.div`
    background: #141414;
    overflow-x: hidden;

    & img {
        cursor: pointer;
        object-fit: cover;
    }
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

    @media screen and (max-width: 768px){
        width: 20px;
        height: 30px;
    }
`;