import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  name: string;
  size: number;
  color: string;
}

export const Icons = ({name, size, color}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
