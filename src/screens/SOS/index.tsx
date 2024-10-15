import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SOS = () => {
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
          SOS
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
        }}>
        <View>
          <Text
            style={{
              color: '#F4B9B9',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Are You In Emergency?
          </Text>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Press the SOS Button here
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#C32A2A',
            height: 120,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#CD9C9C',
          }}>
          <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>
            SOS
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
  },
});

export default SOS;
