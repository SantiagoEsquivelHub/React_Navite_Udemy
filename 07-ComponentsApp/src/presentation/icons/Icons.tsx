import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  name: string;
  size: number;
  color: string;
  style?: object;
}

export const Icons = ({name, size, color, style}: Props) => {
  return <Icon name={name} size={size} color={color} style={{...style}} />;
};
