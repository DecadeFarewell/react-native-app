import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = (props) => {
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(
        fadeInAnim, // 动画中的变量值
      {
        toValue: 1, // 透明度最终变为1，即完全不透明
        duration: 10000, // 让动画持续一段时间
      },
    ).start();
  }, [fadeInAnim]);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeInAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FadeInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
        }}>
        <Text
          style={{
            fontSize: 28,
            textAlign: 'center',
            margin: 10,
          }}>
          Fade In
        </Text>
      </FadeInView>
    </View>
  );
};
