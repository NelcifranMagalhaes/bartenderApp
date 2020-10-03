import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const CenterText = styled.Text`
  font-size: 18px;
  color: #333;
`;
export const TextBold = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
export const ButtonText = styled.Text`
  font-size: 15px;
  color: 'rgb(0,122,255)';
`;

export const ButtonTouchable = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #DFB42B;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
