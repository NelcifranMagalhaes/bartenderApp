import React, {useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Info, Name} from './styles';

export default function Fruit({data}) {
  const [count, setCount] = useState(0);

  function onPressMore(name, countProduct) {
    setCount((prevCount) => prevCount + 1);
    let exist = 0;
    for (let i = 0; i < global.listOfProducts.length; i += 1) {
      if (global.listOfProducts[i][0] == name) {
        global.listOfProducts[i][1] += 1; // se ja estiver na lista, adiciona mais 1
      }
      if (global.listOfProducts[i].includes(name)) {
        exist += 1; // se o nome esta em alguma lista, aumenta o contador
      }
    }
    if (exist == 0) {
      global.listOfProducts.push([name, countProduct]); // se nao encontrou nenhum nome igual, cria
    }
  }

  function onPressLess(name) {
    setCount((prevCount) => prevCount - 1);
    for (let i = 0; i < global.listOfProducts.length; i += 1) {
      if (global.listOfProducts[i][0] == name) {
        if (global.listOfProducts[i][1] > 0) {
          global.listOfProducts[i][1] -= 1; // se ja estiver na lista, adiciona mais 1
        }
      }
    }
  }

  return (
    <Container>
      <Left>
        <Info>
          <Name>{data.name} - </Name>
        </Info>
      </Left>
      <Name>{data.quantity}</Name>

      <TouchableHighlight
        onPress={() => onPressMore(data.name, count + 1)}
        underlayColor="#afdf2b">
        <Icon name="add" size={25} color="#DFB42B" />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => onPressLess(data.name)}
        underlayColor="#df312b">
        <Icon name="remove" size={25} color="#DFB42B" />
      </TouchableHighlight>
      <Text>Quant: {count}</Text>
    </Container>
  );
}
