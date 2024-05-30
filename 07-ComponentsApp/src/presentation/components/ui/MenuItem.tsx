import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {Icons} from '../../icons/Icons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: Props) => {
  const natigation = useNavigation();

  return (
    <Pressable onPress={() => console.log('click')}>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.cardBackground,
          ...(isFirst && {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 10,
          }),
          ...(isLast && {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingBottom: 10,
          }),
        }}>
        <Icons name={icon} size={25} color={colors.primary} />
        <Text style={{color: colors.text}}>{name}</Text>
        <Icons
          name="chevron-forward-outline"
          size={25}
          color={colors.primary}
          style={{marginLeft: 'auto', color: colors.primary}}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
