import React from 'react'

import {
    Container,
    ContactText,
    ContactHref,
    
    LinkDirectWrapper,
    LinkTo,
    LinkColumn,
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
                    <LinkTo>Informações corporativas</LinkTo>
                </LinkColumn>
                    
                    <LinkColumn>
                        <LinkTo>Centro de ajuda</LinkTo>
                        <LinkTo>Informações corporativas</LinkTo>
                    </LinkColumn>   

                    <LinkColumn>
                        <LinkTo>Termos de uso</LinkTo>
                    </LinkColumn>    

                    <LinkColumn>
                        <LinkTo>Privacidade</LinkTo>
                    </LinkColumn>
           </LinkDirectWrapper>

           <SelectLanguage>
               <option value="pt-br">Português</option>
           </SelectLanguage>

       </Container>
    )
}
