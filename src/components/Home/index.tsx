import styled from 'styled-components';
import Header from "./Header";
import Body from "./Body";
import PopQuestions from "./PopQuestions";
import Footer from "./Footer";


const Container = styled.div`
    background: #000;
    overflow-x: hidden;
`;

export default function Homepage() {
    return (
        <Container>
            <Header />

            <Body 
                h1="Aproveite na TV."
                h2="      Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
                imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                trailerURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type={1}
                />    
            <Body 
                h1="Baixe séries para assistir offline."
                h2="Salve seus títulos favoritos e sempre tenha algo para assistir."
                imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                subImgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                trailerURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                type={2}
                />    
            <Body 
                h1="Assista quando quiser."
                h2="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
                imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                trailerURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type={3}
            />

            <PopQuestions />

            <Footer />
        </Container>
    )
}
