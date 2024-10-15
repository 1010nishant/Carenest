import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {PhoneIcon, EmailIcon} from '../../assets/icons';
import call from 'react-native-phone-call';

const details = [
  {
    id: '1',
    name: 'Ram kumar',
    bgColor: '#E7E391',
    phone: '+91 9876543210',
    email: 'n6n6j@gmail.com',
  },
  {
    id: '2',
    name: 'Shyam kumar',
    bgColor: '#9AC09E',
    phone: '+91 9876543210',
    email: 'n6n6j@gmail.com',
  },
  {
    id: '3',
    name: 'Aam kumar',
    bgColor: '#E7E391',
    phone: '+91 9876543210',
    email: 'n6n6j@gmail.com',
  },
  {
    id: '4',
    name: 'Jaam kumar',
    bgColor: '#9AC09E',
    phone: '+91 9876543210',
    email: 'n6n6j@gmail.com',
  },
  {
    id: '5',
    name: 'Gaam kumar',
    bgColor: '#E7E391',
    phone: '+91 9876543210',
    email: 'n6n6j@gmail.com',
  },
  {
    id: '6',
    name: 'Daam kumar',
    bgColor: '#9AC09E',
    phone: '+91 9876543210',
    email: 'n6n6j@gmail.com',
  },
];

const MedDrop = () => {
  const handleCall = ({number}) => {
    const args = {
      number,
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={{backgroundColor: '#E6ECEF'}}>
        <Text
          style={{
            color: ' #585F62',
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 6,
          }}>
          MED DROP
        </Text>
      </View>
      <View
        style={{flex: 1, gap: 20, marginHorizontal: 20, marginVertical: 20}}>
        {details.map(item => (
          <View
            key={item.id}
            style={{
              backgroundColor: item.bgColor,
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                color: '#001524',
                fontWeight: 'bold',
                fontSize: 22,
                marginBottom: 10,
              }}>
              {item.name}
            </Text>
            <Pressable
              onPress={() => handleCall({number: item.phone})}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <PhoneIcon width={16} height={16} />
              <Text style={{fontSize: 16, color: '#001524'}}>{item.phone}</Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <EmailIcon width={16} height={16} />
              <Text style={{fontSize: 16, color: '#001524'}}>{item.email}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
  },
});
export default MedDrop;
