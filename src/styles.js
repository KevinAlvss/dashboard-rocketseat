import styled from 'styled-components';

export const Content = styled.div`
  max-width:100vw;
  height: calc(100% - 72px);

  display:flex;
  justify-content:space-between;


  padding: 30px 85px;
`;

export const ImageContainer = styled.div`
   width:100%;
   height: 80%;

   display:flex;
   align-items:center;
   justify-content:center;
`;

export const Button = styled.a`
  background-color:#04D361;
  height:47px;
  width:295px;
  border-radius:3px;

  display:flex;
  align-items:center;
  justify-content:center;

  text-decoration:none;
  color:#000;

  font-size:15px;

  > span{
    font-weight:700;
  }

  transition: all .3s ease-in-out;

  &:hover{
    background-color:transparent;
    color:#FFF;
  }

  &:hover::after{
    visibility:visible;
    opacity: 1;
    transform:scale3d(1, 1, 1);
  }

  &::after{
    content: "";
    position: absolute;
    width: 300px;
    height: 50px;
    transform: scale3d(1.06, 1.4, 1);
    box-shadow:#04D361 0px 0px 0px 2px inset;
    border-radius: 3px;
    transition: all 0.3s cubic-bezier(0.75, 0, 0.12, 1) 0s;

    visibility: hidden;
    opacity: 0;
  }
`;