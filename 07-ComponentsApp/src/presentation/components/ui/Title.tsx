import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({text, safe, white}: Props) => {
    
  const {top} = useSafeAreaInsets();

  return (
    <View>
      <Text
        style={{
          ...globalStyles.title,
          marginTop: safe ? top : 0,
          marginBottom: 10,
          color: white ? 'white' : 'black',
        }}>
        {text}
      </Text>
    </View>
  );
};
