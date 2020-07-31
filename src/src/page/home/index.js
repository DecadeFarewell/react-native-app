import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Header from './components/index/header';
import Swiper from './components/index/swiper';
import Features from './components/index/features';
import Account from './components/index/account';
import Question from './components/index/question';
import Order from './components/index/order';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Swiper />
        <Features />
      </View>
      <View style={styles.user}>
        <Account />
      </View>
      <View style={styles.question}>
        <Question />
      </View>
      <View style={styles.order}>
        <Order />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  header: {
    padding: 8,
    backgroundColor: '#fff',
  },
  user: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  question: {
    backgroundColor: '#fff',
  },
  order: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
});
