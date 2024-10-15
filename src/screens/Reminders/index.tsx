import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Reminders = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={{backgroundColor: '#E6ECEF'}}>
        <Text
          style={{
            color: ' #585F62',
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 6,
          }}>
          REMINDERS
        </Text>
      </View>
      <Text>REMINDERS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
  },
});

export default Reminders;
