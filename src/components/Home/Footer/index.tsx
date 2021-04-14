import React from 'react'

import {
    Container,
    ContactText,
    ContactHref,

    LinkDirectWrapper,
    LinkTo,
    LinkColumn,
    ContactNetflix,
    SelectLanguage
} from './styles';

export default function index() {
    return (
       <Container>
           <ContactText>
                Dúvidas? Ligue 
                <ContactHref> 0800-761-4631</ContactHref>
           </ContactText>

           <LinkDirectWrapper>
                <LinkColumn>
                    <LinkTo>Perguntas frequentes</LinkTo>
                    <LinkTo>Relações com investidores</LinkTo>
                    <LinkTo>Formas de assistir</LinkTo>
                    <LinkTo>Informações corporativas</LinkTo>
                    <LinkTo>Originais Netflix</LinkTo>
                </LinkColumn>
                    
                    <LinkColumn>
                        <LinkTo>Centro de ajuda</LinkTo>
                        <LinkTo>Carreiras</LinkTo>
                        <LinkTo>Termos de uso</LinkTo>
                        <LinkTo>Entre em contato</LinkTo>
                    </LinkColumn>   

                    <LinkColumn>
                        <LinkTo>Conta</LinkTo>
                        <LinkTo>Resgatar cartão pré-pago</LinkTo>
                        <LinkTo>Privacidade</LinkTo>
                        <LinkTo>Teste de velocidade</LinkTo>
                    </LinkColumn>    

                    <LinkColumn>
                        <LinkTo>Imprensa</LinkTo>
                        <LinkTo>Comprar cartão pré-pago</LinkTo>
                        <LinkTo>Preferências de cookies</LinkTo>
                        <LinkTo>Avisos legais</LinkTo>
                    </LinkColumn>
           </LinkDirectWrapper>

           <SelectLanguage>
               <option value="pt-br">Português</option>
           </SelectLanguage>

           <ContactNetflix>Netflix Brasil</ContactNetflix>
       </Container>
    )
}
