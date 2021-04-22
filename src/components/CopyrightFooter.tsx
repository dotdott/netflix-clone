import styled from 'styled-components';

const CopyrightDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    bottom: 0;

    width: 100%;
    height: 60px;

    background: #4E4E4E;
`
const Copyright = styled.p`
    text-align: center;
    width: 50%;

    & a {
        color: #D80000;
    }
`;

export function CopyrightFooter() {
    return (
        <CopyrightDiv>
            <Copyright>
                Este site foi criado como uma brincadeira, todos os direitos de marca e logo/posters são da <a href="netflix.com">Netflix</a> , as imagens de posters dos filmes são da API <a href="themoviedb.org">The Movie Database</a>
            </Copyright>
        </CopyrightDiv>
    )
}
