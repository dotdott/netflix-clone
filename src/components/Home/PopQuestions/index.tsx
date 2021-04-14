import React, { useState } from 'react'
import SignInInvite from '../Header/SignInInvite';
import Questions from './Questions';
import {
    Container,
    QuestionsWrapper,
    QuestionTitle,
} from './styles';


export default function index() {


    return (
        <Container>
            <QuestionsWrapper>
                <QuestionTitle>Perguntas frequentes.</QuestionTitle>

                <Questions 
                    Text="O que é a Netflix?"
                    Answer="A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet."
                    Answer2="Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
                    id="1"             
                />
                <Questions 
                    Text="Quanto custa a Netflix?"
                    Answer="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras." 
                    id="2"                
                />        
                <Questions 
                    Text="Onde posso assistir?"
                    Answer="Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
                    Answer2="Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar." 
                    id="3"                
                />    
                <Questions 
                    Text="Como faço para cancelar?"
                    Answer="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento." 
                    id="4"                
                />    
                <Questions 
                    Text="O que eu posso assistir na Netflix?"
                    Answer="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser." 
                    id="5"                
                />

                <SignInInvite />

            </QuestionsWrapper>
        </Container>
    )
}
