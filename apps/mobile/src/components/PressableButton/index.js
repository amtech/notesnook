import React from 'react';
import {Pressable} from 'react-native';
import {br} from '../../common/common';
import {hexToRGBA, RGB_Linear_Shade} from '../../utils/utils';

export const PressableButton = ({
  color,
  selectedColor,
  borderless,
  radius,
  children,
  onPress,
  customStyle,
  alpha = -0.1,
  opacity = 1,
  onLongPress,
  hitSlop,
  testID,
}) => {
  return (
    <Pressable
      testID={testID}
      hitSlop={hitSlop}
      activeOpacity={opacity}
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? RGB_Linear_Shade(alpha, hexToRGBA(selectedColor, opacity))
            : color !== 'transparent'
            ? hexToRGBA(color, opacity - 0.02)
            : color,
          width: '100%',
          alignSelf: 'center',
          borderRadius: br,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 0,
        },
        customStyle,
      ]}>
      {children}
    </Pressable>
  );
};
