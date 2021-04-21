import styled from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));

    font-family: sans-serif; 
    z-index: 2;
`;

export const NavbarBrowseSection = styled.div`
    margin-left: 3rem;
    gap: 1rem;

    display: flex;
    align-items: center;
`;
export const LogoImg = styled.img`
    margin-right: 1rem;
    width: 100px;
    height: 65px;
`;
export const BrowseSection = styled.a`
    color: #e5e5e5;
    cursor: pointer;
    font-size: .85rem;

        &:hover {
            opacity: .7;
            filter: brightness(150%);
            transition: ease .5s all;
        }
`;


export const NavbarUserSection = styled.div`
    margin-right: 4rem;
    display: flex;
    align-items: center;

    gap: 1.5rem;
    color: #e5e5e5;
`;
export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;
`;
export const ChildsBrowse = styled.p`
    font-size: .9rem;
    cursor: pointer;
    color: #fff;
`;
export const GiftIcon = styled(SearchIcon)``;
export const BellIcon = styled(SearchIcon)``;
export const ProfileIcon = styled(SearchIcon)`
    width: 30px;
    height: 30px;
    background: #e5cdc8;

    border-radius: 5px;
`;