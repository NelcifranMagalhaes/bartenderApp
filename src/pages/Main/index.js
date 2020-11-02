import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import Background from '../../components/Background';
import {CenterText, TextBold} from './styles';

export default class Main extends Component {
  onSuccess = (e) => {
    const {navigation} = this.props;

    navigation.navigate('Details', e.data);
  };

  render() {
    return (
      <Background>
        <QRCodeScanner
          reactivate
          showMarker
          ref={(node) => {
            this.scanner = node;
          }}
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <CenterText>
              Escaneie o <TextBold>QRCODE</TextBold> e faça o seu Pedido.
            </CenterText>
          }
          bottomContent={
            <Background>
              <CenterText>
                Somente nos <TextBold>Estabelecimentos</TextBold> Cadastrados.
              </CenterText>
            </Background>
          }
        />
      </Background>
    );
  }
}
