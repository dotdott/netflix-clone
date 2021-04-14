import React from 'react'

import {
    Container,

    WrapperTextDiv,
    TextH1,
    TextH2,

    WrapperTrailerDiv,
    TrailerHackImg,
    TrailerVideo,
    TrailerVideo2,

    TrailerWrapperDiv,
    TrailerWrapperDiv2,

    TrailerSubImg,
    TrailerGifImg,

    TrailerWrapperText,
    TrailerTextH2,
    TrailerBlueText,
} from './styles';


export interface BodyVideoTrailerProps {
    h1: string;
    h2: string;
    imgURL: string;
    subImgURL?: string;
    trailerURL: string;
    type: number;
}

const TrailerVideos = (imgURL: string, trailerURL: string, type: number) =>  (
    <TrailerWrapperDiv>
        <TrailerHackImg src={imgURL} />
        {type === 1 ?
        <TrailerVideo autoPlay playsInline muted loop> 
            <source src={trailerURL} type="video/mp4"/>                    
        </TrailerVideo>   
        :     
        <TrailerVideo2 autoPlay playsInline muted loop>  
            <source src={trailerURL} type="video/mp4"/>                    
        </TrailerVideo2>  
        }
          
    </TrailerWrapperDiv>
)

const divTrailer = (type: number, imgURL: string, trailerURL: string, subImgURL: string ) => {
    if(type === 1){
        return (
         TrailerVideos(imgURL, trailerURL, type)
        )
    }

    if(type === 2){
        return(
            <WrapperTrailerDiv>
                <TrailerHackImg src={imgURL} />
                    <TrailerWrapperDiv2>

                        <TrailerGifImg src={trailerURL}/>

                        <TrailerWrapperText>                        
                        <TrailerTextH2>Stranger Things</TrailerTextH2>
                        <TrailerBlueText>Download em andamento...</TrailerBlueText>
                        </TrailerWrapperText>

                        <TrailerSubImg src={subImgURL} />

                    </TrailerWrapperDiv2>
            </WrapperTrailerDiv>
        )
    }

    if(type === 3){
        return (
            TrailerVideos(imgURL, trailerURL, type)
        )
    }
}


export default function BodyVideoTrailer({h1, h2, imgURL, trailerURL, subImgURL, type}: BodyVideoTrailerProps) {
    const trailer = divTrailer(type, imgURL, trailerURL, subImgURL)

    return (
        <Container type={type}>
            <WrapperTextDiv>
                <TextH1>{h1}</TextH1>
                <TextH2>{h2}</TextH2>
            </WrapperTextDiv>

            {trailer}

        </Container>
    )
}
