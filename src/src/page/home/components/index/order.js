import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Order = () => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 16}}>
        投递订单
        <Text style={{fontSize: 14, color: 'darkgrey'}}>(最近七天)</Text>
      </Text>
      <Text style={{color: 'darkgrey'}}>查看更多</Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'dodgerblue',
  },
});
