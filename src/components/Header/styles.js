import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;

  padding:0 80px;
  
  width:100%;
  height:72px;
  background-color:#202024;
`;

export const Left = styled.div`
   display:flex;
   align-items:center;
   height:100% ;
   width:50%;
`;

export const Right = styled.div`
   display:flex;
   align-items:center;
   justify-content:flex-end;

   height:100% ;
   width:50%;

   > div{
       
        :first-child{
           margin-right:14px;
           height:45px;
            width:45px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:5px;

            transition: background-color 200ms;
            
            &:hover{
            background-color:#141316;
            }
       }

        :nth-child(2){
            height:45px;
            width:45px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:5px;
            margin:0 14px;

            transition: background-color 200ms;
            
            &:hover{
            background-color:#141316;
            }
        }

        :nth-child(3){
            height:45px;
            width:45px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:5px;
            margin:0 14px;

            transition: background-color 200ms;
            
            &:hover{
            background-color:#141316;
            }
        }
     
    }
`;

export const UserContainer = styled.div`
  display:flex;
  align-items:center;

  &:hover{
      background-color:unset;
  }

  > strong{
      font-weight:700;
      color:#E1E1E6;
      margin-right:16px;
  }

  > div{
      display:flex;
      align-items:center;
      justify-content:center;
      height:50px;
      width:50px;
      background-color:#E1E1E6;
      border-radius:50%;
  }
`;
