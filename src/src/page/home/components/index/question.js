import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Question = () => {
  const data = [
    {
      title: '如何找到深分类回收箱？',
    },
    {
      title: '回收箱支持哪些物品投递？',
    },
    {
      title: '没带手机可以投递吗？',
    },
    {
      title: '积分何时可以到账？',
    },
    {
      title: '首次使用如何投递？',
    },
  ];
  const scrollItem = data.map((item, index) => {
    return (
      <View style={styles.scrollItem} key={index}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  });
  return (
    <View>
      <View style={styles.header}>
        <Text style={{fontSize: 16}}>投递问答</Text>
        <Text style={{color: 'darkgrey'}}>更多问答</Text>
      </View>
      <ScrollView
        horizontal={true} // 横向
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {scrollItem}
      </ScrollView>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  scrollView: {
    paddingVertical: 10,
    // overflow: 'scroll',
    // flexDirection: 'row',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'dodgerblue',
  },
  scrollItem: {
    width: '12%',
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'dodgerblue',
  },
  itemText: {
    textAlign: 'center',
  },
});
