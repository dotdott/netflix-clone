import styled from 'styled-components';

import { device } from '../../../styles/components/device';

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

        ${device.m1600}{
            justify-content: space-around;
        }

        ${device.m1000} {
            flex-direction: column;
        }
`;


export const WrapperTextDiv = styled.div`
    width: 30%;
    z-index: 9;
        ${device.m1000}{
            width: 80%;
            text-align: center;
            margin-top: 2rem;
        }
`;

export const TextH1 = styled.h1`
    font-size: 3rem;
        ${device.m550}{
            font-size: 2rem;
        }
`;
export const TextH2 = styled.h2`
    font-size: 1.6rem;
        ${device.m550}{
            font-size: 1.3rem;
            font-weight: 500;
        }
`;



export const WrapperTrailerDiv = styled.div`
    z-index: 999;
`;

export const TrailerHackImg = styled.img`
    z-index: -1;

        ${device.m550}{
            width: 97vw;
        }
`;

export const TrailerVideo = styled.video`
    position: relative;
    right: 0.5%;
    top: -24.5rem;

    z-index: -2;

        ${device.m550}{
            top: -19.5rem;
            width: 73vw;
        }

            ${device.m450}{
                top: -16.5rem;
            }         
                ${device.m425}{
                    top: -14.5rem;
                }      
                    ${device.m375}{
                        top: -13.5rem;
                    }    
                        ${device.m325}{
                            top: -12rem;
                        }
`;

export const TrailerVideo2 = styled.video`
    position: relative;
    right: 0.5%;
    top: -27rem;
    width: 412px;
    z-index: -2;

        ${device.m550}{                    
            top: -22rem;
            width: 60vw;
            }       
            ${device.m500}{                    
                top: -19rem;
                }
                ${device.m450}{
                    top: -18rem;
                    }         
                    ${device.m425}{
                        top: -17.5rem;
                        }      
                        ${device.m375}{
                            top: -15.5rem;
                            }    
                            ${device.m325}{
                                top: -13rem;
                            }
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
            ${device.m550}{                            
                left: 4rem;
            }      
                ${device.m450}{                            
                    width: 77%;
                    left: 3rem;
                }      
                    ${device.m375}{                          
                        width: 71%;
                        left: 2rem;
                    }
`;

export const TrailerSubImg = styled.img`
    width: 15%;
`;
export const TrailerGifImg = styled.img`
    height: 5em;
        ${device.m375}{
            height: 4em;
        }
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