import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {Button, ActivityIndicator} from 'react-native';
import Background from '../../components/Background';
import {Container, Title, List} from './styles';
import Fruit from '../../components/Fruit';
import api from '../../services/api';

export default function Product({route, navigation}) {
  const url = route.params;
  const [products, setProducts] = useState([]);
  global.listOfProducts = [['table_id', products.table_number]];
  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(url);
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  async function sendDemand() {
    const companyId = url.substring(
      url.lastIndexOf('company/') + 8,
      url.lastIndexOf('/table'),
    );
    const urlPost = `company/${companyId}/create_demand`;
    const response = await api.post(urlPost, global.listOfProducts);
  }

  function handleSubmit() {
    if (global.listOfProducts.length > 1) {
      sendDemand();
      global.listOfProducts = [['table_id', products.table_number]];
    }
    navigation.navigate('Home');
  }
  
  return (
    <Background>
      <Container>
        <Title>Produtos da mesa {products.table_number}</Title>
        <List
          data={products.products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <Fruit data={item} />}
        />
      </Container>
      <Button title="enviar" onPress={handleSubmit} />
    </Background>
  );
}
