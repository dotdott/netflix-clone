import Link  from 'next/link';

import {
    Container,
    HeaderContentTop,
    LogoImage,
    LoginButton,
} from './styles';

import {
    Footer,
    ContactText,
    ContactHref,
    
    LinkDirectWrapper,
    LinkTo,
    LinkColumn,
    SelectLanguage
} from './footerStyles';

import { UserSignupSteps } from './SignupSteps';

export default function index() {
    return (
        <Container>
            <HeaderContentTop>
                <Link href='/'><LogoImage src='/assets/logo.svg' /></Link>
                <Link href='/login'><LoginButton href='#'>Entrar</LoginButton></Link>
            </HeaderContentTop>

        <UserSignupSteps />

        <Footer>
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

       </Footer>
        </Container>
    )
}
