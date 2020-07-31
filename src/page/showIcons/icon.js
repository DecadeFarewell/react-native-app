import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const icon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconItem}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          finger-print-outline
        </Text>
        <Ionicons name="finger-print-outline" size={100} />
      </View>
      <View style={styles.iconItem}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>earth-outline</Text>
        <Ionicons name="earth-outline" size={100} />
      </View>
    </View>
  );
};

export default icon;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'center',
  },
  iconItem: {
    alignItems: 'center',
  },
});
