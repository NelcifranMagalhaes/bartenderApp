import React, { useState } from "react";
import {Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Info, Name} from './styles';

export default function Fruit({data}) {
  const [count, setCount] = useState(0);

  const onPressMore = () => setCount((prevCount) => prevCount + 1);
  const onPressLess = () => setCount((prevCount) => prevCount - 1);
  return (
    <Container>
      <Left>
        <Info>
          <Name>{data.name} - </Name>
        </Info>
      </Left>
      <Name>{data.quantity}</Name>
      <TouchableHighlight onPress={onPressMore} underlayColor="#afdf2b">
        <Icon name="add" size={25} color="#DFB42B" />
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressLess} underlayColor="#df312b">
        <Icon name="remove" size={25} color="#DFB42B" />
      </TouchableHighlight>
      <Text>Quant: {count}</Text>
    </Container>
  );
}
