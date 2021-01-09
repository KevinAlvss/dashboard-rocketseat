import Board from "./components/Board";
import Header from "./components/Header";

import { Content, ImageContainer, Button } from './styles'

// imagens
import discovery from './images/discovery.svg'
import stack from './images/gostack.svg'
import expertsclub from './images/expertsclub.svg'

function App() {
  return (
    <>
      <Header />
      <Content>
        <Board cor="#8257E6" animacao={true}>
          <div>
            <ImageContainer>
              <img src={discovery} alt="discover" draggable={false}/>
            </ImageContainer>
            <p>Comunidade e conteúdo gratuito que te levarão para o próximo nível em programação</p>
          </div>
        </Board>
        <Board cor="#04D361" animacao={false}>
          <div>
            <ImageContainer>
              <img src={stack} alt="gostack" draggable={false}/>
            </ImageContainer>
            <p>Treinamento imersivo nas tecnologias mais modernas de desenvolvimento web e mobile</p>
          </div>
          <Button href="https://github.com/KevinAlvss"> <span>Garanta sua vaga</span> &nbsp;para a próxima turma!</Button>
        </Board>
        <Board cor="#D6AC4E" animacao={true}>
          <div>
            <ImageContainer>
              <img src={expertsclub} alt="expertsclub" draggable={false}/>
            </ImageContainer>
            <p>Aulas práticas e direto ao ponto com profissionais que respiram tecnologia diariamente</p>
          </div>
        </Board>
      </Content>
    </>
  );
}

export default App;
