import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Background from '../../components/Background';
import {Container, Title, List} from './styles';
import Fruit from '../../components/Fruit';

export default function Product({route}) {
  const url = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(url);
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Produtos</Title>
        <List
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <Fruit data={item} />}
        />
      </Container>
    </Background>
  );
}
