import styled from 'styled-components';

export const Container = styled.div`
  height: 93.5%;
  width: 32.15%;
  position: relative;
  top:0;

  background-color:#202024;

  border-top-left-radius:8px;
  border-top-right-radius:8px;

  border-bottom: 2px solid ${props => props.cor  || '#202024'};

  cursor: pointer;

  transition: all .1s ease-in-out;

  :hover{

    top: ${props => props.animacao === true ? '-5px' : 'unset' };
  }
`;
