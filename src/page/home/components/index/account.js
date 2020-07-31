import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Account = () => {
  const uri = 'https://filesvr.shencom.cn/gov_sc/files/1052684452764246016.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.accountBox}>
        <Image source={{uri}} style={styles.avater}></Image>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>用户名</Text>
          <Text style={styles.integral}>365积分</Text>
        </View>
      </View>
      <View style={styles.qrCodeBox}>
        <View style={styles.qrCode}></View>
        <Text>我的二维码</Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  accountBox: {
    // flex: 1,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
  },
  avater: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    paddingTop: 15,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  integral: {
    marginTop: 5,
  },
  qrCodeBox: {
    // flex: 1,
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  qrCode: {
    width: 30,
    height: 30,
    backgroundColor: '#eee',
  },
});
