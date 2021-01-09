import styled from 'styled-components';

export const Container = styled.div`
  height: 94.21%;
  width: 32.15%;
  position: relative;
  top:0;

  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

  padding:64px 0;

  background-color:#202024;

  border-top-left-radius:8px;
  border-top-right-radius:8px;

  border-bottom: 2px solid ${props => props.cor  || '#202024'};

  cursor: pointer;

  transition: all .1s ease-in-out;

  :hover{

    top: ${props => props.animacao === true ? '-5px' : 'unset' };
  }

  > div{
    width:100%;
    height:60%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    text-align:center;

    > p {
      max-width:270px;
      line-height:26px;
    }

    > img{
      margin-bottom:30px;
    }
  }
`;
