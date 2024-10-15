import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [whatsappNumber, setWhatsappNumber] = useState('');

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#2a424f',
        paddingHorizontal: 6,
      }}>
      <View style={{width: '100%', alignItems: 'center', marginTop: '20%'}}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontFamily: 'Inter_600',
            marginBottom: 2,
            textAlign: 'center',
          }}>
          Sign Up
        </Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 8,
            padding: 4,
            paddingVertical: 3,
            color: '#949494',
            fontSize: 14,
            width: '70%',
            marginBottom: 6,
          }}
          placeholder="username"
          value={whatsappNumber}
          placeholderTextColor={'#949494'}
          onChangeText={setWhatsappNumber}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 8,
            padding: 4,
            paddingVertical: 3,
            color: '#949494',
            fontSize: 14,
            width: '70%',
            marginBottom: 6,
          }}
          placeholder="password"
          value={whatsappNumber}
          placeholderTextColor={'#949494'}
          onChangeText={setWhatsappNumber}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 8,
            padding: 4,
            paddingVertical: 3,
            color: '#949494',
            fontSize: 14,
            width: '70%',
            marginBottom: 6,
          }}
          placeholder="confirm password"
          value={whatsappNumber}
          placeholderTextColor={'#949494'}
          onChangeText={setWhatsappNumber}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 8,
            padding: 4,
            paddingVertical: 3,
            color: '#949494',
            fontSize: 14,
            width: '70%',
            marginBottom: 6,
          }}
          placeholder="password"
          value={whatsappNumber}
          placeholderTextColor={'#949494'}
          onChangeText={setWhatsappNumber}
        />
      </View>
      <View style={{width: '100%', alignItems: 'center', marginBottom: 4}}>
        <TouchableOpacity
          style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 14, color: '#919191'}}>
            Don't have an account?
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_500',
              fontSize: 14,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
