import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcon = ({name, size = 30, color = ''}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
