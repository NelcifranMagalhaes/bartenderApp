import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import Background from '../../components/Background';
import {CenterText, TextBold, ButtonText, ButtonTouchable} from './styles';

export default class Main extends Component {
  onSuccess = (e) => {
    const {navigation} = this.props;

    navigation.navigate('Details', e.data);
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };

  render() {
    return (
      <Background>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <CenterText>
              Go to <TextBold>wikipedia.org/wiki/QR_code</TextBold> on your
              computer and scan the QR code.
            </CenterText>
          }
          bottomContent={
            <ButtonTouchable>
              <ButtonText>OK. Got it!</ButtonText>
            </ButtonTouchable>
          }
        />
      </Background>
    );
  }
}
