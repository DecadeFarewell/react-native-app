import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 18, fontWeight: '700'}}>早上好</Text>
        <Text style={{fontSize: 14, color: 'darkgrey'}}>小主，出门记得投递垃圾哦</Text>
      </View>
      <View style={styles.imageBox}>{/* <Image></Image> */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBox: {
    width: 50,
    height: 50,
    backgroundColor: 'aqua',
  },
});

export default Header;
