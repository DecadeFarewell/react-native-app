import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Features = () => {
  const data = [
    {
      uri:
        'https://filesvr.shencom.cn/gov_sc/files/nG4IdwsTMEFl3ea7cf5124dc4ae67e08a16b514ede42.jpg',
      text: '投递指南',
    },
    {
      uri:
        'https://filesvr.shencom.cn/gov_sc/files/nG4IdwsTMEFl3ea7cf5124dc4ae67e08a16b514ede42.jpg',
      text: '分类指南',
    },
    {
      uri:
        'https://filesvr.shencom.cn/gov_sc/files/nG4IdwsTMEFl3ea7cf5124dc4ae67e08a16b514ede42.jpg',
      text: '附近设备',
    },
    {
      uri:
        'https://filesvr.shencom.cn/gov_sc/files/nG4IdwsTMEFl3ea7cf5124dc4ae67e08a16b514ede42.jpg',
      text: '个人中心',
    },
  ];
  const renderText = data.map((item, index) => {
    return (
      <View style={styles.boxWrapper} key={index}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: item.uri}} style={styles.image}></Image>
          {/* <View style={styles.image}></View> */}
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  });
  return <View style={styles.container}>{renderText}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 120,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  boxWrapper: {
    width: '25%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageWrapper: {
    width: '70%',
    paddingBottom: '70%',
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  image: {
    // width: '100%',
    // height: '100%',
    // position: 'absolute',
    // left: 0,
    // top: 0,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    resizeMode: 'stretch',
  },
  text: {
    textAlign: 'center',
  },
});

export default Features;
