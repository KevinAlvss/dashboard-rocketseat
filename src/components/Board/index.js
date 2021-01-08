import React from 'react';

import { Container } from './styles';

function Board(props) {
  return (
    <Container cor={props.cor} animacao={props.animacao}>
    </Container>
  );
}

export default Board;