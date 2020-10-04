import React from 'react';

import {Container, Left, Info, Name} from './styles';

export default function Fruit({data}) {
  console.tron.logImportant(data);
  return (
    <Container>
      <Left>
        <Info>
          <Name>{data.name}</Name>
        </Info>
      </Left>
      <Name>{data.quantity}</Name>
    </Container>
  );
}
