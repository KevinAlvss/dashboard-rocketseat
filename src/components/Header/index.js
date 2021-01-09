import React from 'react';

import { Container, Left, Right, UserContainer } from './styles';

// imagens
import logo from '../../images/logo-header.svg'
import lupa from '../../images/lupa.svg'
import conection from '../../images/conection.svg'
import sino from '../../images/sino.svg'
import user from '../../images/user.svg'

function Header() {
  return (
      <Container>
        <Left>
          <img draggable={false} src={logo} alt="logo-rocketseat" />
        </Left>
        <Right>
           <div id="lupa">
             <img draggable={false} src={lupa} alt="search" />
           </div>

           <div id="conexao">
            <img draggable={false} src={conection} alt="conexão" />
           </div>

           <div id="sino">
           <img draggable={false} src={sino} alt="notificações" />
           </div>

           <UserContainer>
             <strong>Kevin Alves</strong>
             <div>
              <img draggable={false} src={user} alt="userphoto" />
             </div>
           </UserContainer>

        </Right>
      </Container>
  );
}

export default Header;