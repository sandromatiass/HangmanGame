import {
  CollegeLogo,
  CreditsContainer,
  Description,
  TeamMember,
  TeamMemberImage,
  TeamMembersContainer,
  Title,
} from "./credits.styles";

import Sandro from "../../../assets/png/sandro.png";
import UserImage from "../../../assets/png/user.png"
import Cesmac from "../../../assets/png/LogoCesmac.png";

const Credits = () => {
  return (
    <CreditsContainer>
      <Title>Equipe M3_POWER</Title>
      <Description>
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
          <strong>Projeto "Jogo da Forca - Rede e Tecnologia"</strong> uma
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
      <TeamMembersContainer>
        {/* Substitua as URLs das imagens pelos URLs reais */}
        <TeamMember>
          <TeamMemberImage src={Sandro} alt="Membro da equipe 1" />
          <p>Sandro Matias</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={UserImage} alt="Membro da equipe 2" />
          <p>Douglas</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={UserImage} alt="Membro da equipe 2" />
          <p>Natalie</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={UserImage} alt="Membro da equipe 2" />
          <p>Thiago</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={UserImage} alt="Membro da equipe 2" />
          <p>João</p>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src={UserImage} alt="Membro da equipe 2" />
          <p>Bruno</p>
        </TeamMember>
      </TeamMembersContainer>
      <CollegeLogo src={Cesmac} alt="Logo da Faculdade"/>
    </CreditsContainer>
  );
};

export default Credits;
