import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MicIcon} from '../../assets/icons';

const Assistant = () => {
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
          ASSISTANCE
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#B3CEB5',
          borderRadius: 25,
          marginHorizontal: 20,
          paddingHorizontal: 14,
          paddingVertical: 14,
          height: '70%',
          flexDirection: 'column',
          gap: 15,
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '65%',
            paddingBottom: 10,
            alignSelf: 'flex-end',
          }}>
          <View>
            <Text
              style={{
                padding: 10,
                paddingLeft: 20,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              your speech will convert into text shortly
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#46856B',
            width: '80%',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#B7BEC1',
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 30,
              paddingLeft: 20,
            }}>
            Response Generated
          </Text>
          <Text
            style={{
              fontSize: 46,
              color: 'white',
              alignSelf: 'flex-end',
              marginRight: 20,
            }}>
            ...
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 110,
          height: 110,
          backgroundColor: '#5d6440',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 120,
          alignSelf: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E7E391',
            borderRadius: 100,
            width: 80,
            height: 80,
          }}>
          <MicIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
    gap: 20,
  },
});

export default Assistant;
