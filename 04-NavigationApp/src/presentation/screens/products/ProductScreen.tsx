import {Text, View} from 'react-native';
import {
  type RouteProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';
import {type RootStackParam} from '../../routes/StackNavigator';
import {useEffect} from 'react';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const {id, name, price} =
    useRoute<RouteProp<RootStackParam, 'Product'>>().params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 20,
        }}>
        {id} - {name} - {price}
      </Text>
    </View>
  );
};
