import {
  BGit,
  BLinkedin,
  CLinkButton,
  CRulesObje,
  CollegeLogo,
  CreditsContainer,
  Description,
  RulesObej,
  TeamMember,
  TeamMemberImage,
  TeamMembersContainer,
  Title,
} from "./credits.styles";

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs"

import Sandro from "../../../assets/png/sandro.png";
import Douglas from "../../../assets/png/douglas.png";
import Natalie from "../../../assets/png/natalie.png";
import Joao from "../../../assets/png/joao.png";
import Bruno from "../../../assets/png/bruno.png";
import Thiago from "../../../assets/png/Thiago.png"
import Cesmac from "../../../assets/png/LogoCesmac.png";

const Credits = () => {

  const redirecionarParaGitHub = () => {
    window.open('https://github.com/sandromatiass/HangmanGame', '_blank');
  };
  
  const redirecionarParaLinkedIn = () => {
    window.open('https://www.linkedin.com/posts/sandro-matias_educaaexaeto-tecnologia-aprendizadointerativo-activity-7108829834113380353-04jh?utm_source=share&utm_medium=member_desktop', '_blank');
  };

  return (
    <CreditsContainer>
      <CRulesObje>
        <Description>
        <Title>Equipe M3_POWER</Title>
          <p>
            O <strong>Jogo da Forca - Rede e Tecnologia</strong> é uma emocionante
            reinvenção do jogo clássico da forca com um toque moderno. Este jogo
            icônico se baseia em termos e equipamentos relacionados a redes de
            comunicação e computadores, proporcionando uma experiência educativa e
            divertida para entusiastas de tecnologia e aspirantes a profissionais
            de TI.
          </p>
          <br />
          <p>
            Desafie seu conhecimento em tecnologia enquanto se diverte adivinhando
            palavras e termos específicos relacionados à área. Este é um jogo
            único que combina entretenimento com aprendizado, permitindo que você
            explore o emocionante mundo da tecnologia da informação enquanto joga
            o clássico "Jogo da Forca".
          </p>
          <br />
          <p>
            Utilizamos uma combinação de tecnologias de ponta para tornar o 
            <strong> Projeto "Jogo da Forca - Rede e Tecnologia"</strong> uma
            realidade. Essas ferramentas modernas nos permitem criar uma
            experiência de jogo envolvente e educativa.
          </p>
          <br />
          <p>
            Aqui estão algumas das principais tecnologias que impulsionam nosso
            projeto:
          </p>
          <br />
          <ul>
            <li>
              A espinha dorsal do nosso projeto é o <strong>React</strong>, uma
              biblioteca JavaScript amplamente reconhecida por sua eficiência na
              criação de interfaces de usuário interativas. Usamos React para
              criar a lógica de jogo, gerenciar o estado e renderizar os
              componentes da interface.
            </li>
            <br />
            <li>
              Para garantir a segurança e a confiabilidade do código, adotamos o 
              <strong>TypeScript</strong>. Com a adição de tipagem estática,
              podemos detectar erros mais cedo no processo de desenvolvimento e
              fornecer uma base sólida para a construção do jogo.
            </li>
            <br />
            <li>
              A estilização é crucial para criar uma experiência visual atraente.
              Utilizamos o <strong>Styled Components</strong> para estilizar os
              elementos do jogo, permitindo-nos criar uma interface de usuário
              atraente e altamente personalizável.
            </li>
            <br />
          </ul>
          <br />
          <p>
            No "Jogo da Forca - Rede e Tecnologia", as palavras e termos
            utilizados são baseados em equipamentos, conceitos e jargões
            relacionados a redes de comunicação e computadores. Os jogadores terão
            a oportunidade de expandir seu conhecimento em tecnologia enquanto se
            divertem.
          </p>
          <br />
          <p>
            Os jogadores podem esperar uma experiência de jogo envolvente, onde
            terão que adivinhar palavras e termos específicos relacionados à
            tecnologia. Este jogo desafiador é uma oportunidade perfeita para
            testar seu conhecimento em TI, aprender novos conceitos e se divertir
            ao mesmo tempo.
          </p>
          <br />
          <p>
            Estamos empolgados em apresentar o "Jogo da Forca - Rede e Tecnologia"
            e esperamos que ele proporcione diversão e aprendizado para
            entusiastas de tecnologia, estudantes e profissionais de TI. Este é um
            jogo único que combina entretenimento com conhecimento, permitindo que
            os jogadores explorem o emocionante mundo da tecnologia da informação
            enquanto jogam o clássico "Jogo da Forca". Prepare-se para desafiar
            seu cérebro com palavras e termos tecnológicos!
          </p>
          <br />
        </Description>
        <RulesObej>
          <h2>Regras e objetivos do jogo</h2>
            <ul>
              <li>Você tem <span>8</span> chances para adivinhar a palavra sorteada.</li>
              <li>Você pode solicitar ajuda clicando no botão de dicas.</li>
              <li>A complexidade das palavras fica cada vez mais difícil à medida que você avança nos níveis.</li>
              <li>Existem <span>3</span> níveis até chegar à vitória:</li>
              <ul>
                <li>Você começa no <span>nível 1</span>.</li>
                <li>Para atingir o <span>nível 2</span>, você precisa de <span>30 pontos</span>.</li>
                <li>Para atingir o <span>nível 3</span>, você precisa de <span>60 pontos</span>.</li>
                <li>Para vencer o jogo, você precisará de <span>90 pontos</span>.</li>
              </ul>
              <li>Cada palavra vale <span>5 pontos</span>.</li>
              <li>Se por acaso você não acertar a palavra, pode tentar novamente sem perder os pontos.</li>
              <li>Você também pode optar por reiniciar o jogo ou voltar ao início.</li>
            </ul>
          <CLinkButton>
            <span>Se você gostou do jogo, peço que deixe seu comentário no LinkedIn. Isso ajudará bastante nosso projeto.</span>
            <BLinkedin onClick={redirecionarParaLinkedIn}><FaLinkedinIn/>LinkedIn</BLinkedin>

            <span>Visite nosso repositório no GitHub e veja todo o código.</span>
            <BGit onClick={redirecionarParaGitHub}><BsGithub/>GitHub</BGit>

            <span>Agradecemos a todos por chegarem até aqui. Muito obrigado!</span>
          </CLinkButton>
        </RulesObej>
      </CRulesObje>
      
      <TeamMembersContainer>
        <TeamMember>
          <TeamMemberImage src={Sandro} alt="Membro da equipe 1" />
          <p>Sandro Matias</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={Douglas} alt="Membro da equipe 2" />
          <p>Douglas Marinho</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={Natalie} alt="Membro da equipe 2" />
          <p>Natalie Cavalcante</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={Joao} alt="Membro da equipe 2" />
          <p>João P. Lima</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={Bruno} alt="Membro da equipe 2" />
          <p>Bruno A. Botto</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={Thiago} alt="Membro da equipe 2" />
          <p>Thiago J. Oliveira</p>
        </TeamMember>
      </TeamMembersContainer>
      <CollegeLogo src={Cesmac} alt="Logo da Faculdade"/>
    </CreditsContainer>
  );
};

export default Credits;
