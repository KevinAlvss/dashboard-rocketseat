import Board from "./components/Board";
import Header from "./components/Header";

import { Content } from './styles'

function App() {
  return (
    <>
      <Header />
      <Content>
        <Board cor="#8257E6" animacao={true}/>
        <Board cor="#04D361" animacao={false}/>
        <Board cor="#D6AC4E" animacao={true}/>
      </Content>
    </>
  );
}

export default App;
