import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailsScreen = ({route, navigation }: Props) => {

  const { movieId } = route.params;
  console.log("🚀 ~ DetailsScreen ~ movieId:", movieId)

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};
