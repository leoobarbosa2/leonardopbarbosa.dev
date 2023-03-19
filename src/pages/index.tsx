import { SEOContainer } from '@/templates/seo';
import Image from 'next/image';
import { BookOpen } from 'phosphor-react';
import { DateText, Description, GreetingsMessage, IndexContainer, ReadArticlesButton, Role, RoleContainer } from '../styles/home/styles';

export default function Index() {
  return (
    <SEOContainer 
      title='Home | Leonardo Barbosa: Desenvolvedor front end'
      description='Blog pessoal criado para me conectar com outros desenvolvedores e compartilhar conhecimento, verifique as postagens na aba blog.'
    >
    <IndexContainer>
      <article>
      <Image 
          quality={100} 
          src='https://avatars.githubusercontent.com/u/54908803?v=4' 
          height={250}
          width={250} 
          alt="" 
          />
        <GreetingsMessage>Olá! 👋 <br /> Eu sou o 
        <span>
          Leonardo Barbosa
        </span>
        </GreetingsMessage> 
        <RoleContainer>
          <Role>Desenvolvedor front-end</Role>
          <DateText>3 anos +</DateText>
        </RoleContainer>

        <Description>
          Olá, me chamo Leonardo Barbosa. Trabalho como desenvolvedor front-end desde 2020,
          de lá pra cá participei em vários projetos front sempre utilizando Javascript e Typescript e muita
          coisa que o universo do React tem a oferecer. <br/>
          Criei esse projeto pra facilitar o contato com as pessoas, mas principalmente com o intuito de compartilhar 
          conhecimento com o passar do tempo. Separei uma aba de blog exclusiva para conteúdo e pretendo atualizá-los
          quando possivel
        </Description>
        <div>
        <Description>
           Encontre o projeto do github <a href='https://github.com/leoobarbosa2/leonardopbarbosa.dev' target="_blank">aqui</a>
        </Description>
        
        </div>

        <ReadArticlesButton href="/posts">
          Ler posts
          <BookOpen size={24}/>
        </ReadArticlesButton>
      </article>
    </IndexContainer>
    </SEOContainer>
  )
}
