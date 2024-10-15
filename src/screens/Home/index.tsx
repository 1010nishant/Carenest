import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  AssistantBlackIcon,
  BellBlackIcon,
  ExerciseBlackIcon,
  MedDropBlackIcon,
  ReminderBlackIcon,
  TipsBlackIcon,
} from '../../assets/icons';

const Home = ({navigation}) => {
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
          HOME
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/couple.png')}
        />
      </View>
      <View style={{gap: 20}}>
        <Pressable
          onPress={() => navigation.navigate('ASSISTANT')}
          style={styles.commonFlexContainer}>
          <View
            style={{
              backgroundColor: '#9AC09E',
              borderBottomLeftRadius: 25,
              ...styles.commonAcrossBox,
            }}>
            <AssistantBlackIcon width={80} height={80} />
            <Text style={styles.boxText}>ASSISTANCE</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('REMINDERS')}
            style={{
              backgroundColor: '#E7E391',
              borderBottomRightRadius: 25,
              ...styles.commonAcrossBox,
            }}>
            <ReminderBlackIcon width={80} height={80} />
            <Text style={styles.boxText}>Reminders</Text>
          </Pressable>
        </Pressable>
        <View style={styles.commonFlexContainer}>
          <Pressable
            onPress={() => navigation.navigate('EXERCISES')}
            style={{
              backgroundColor: '#E7E391',
              borderBottomLeftRadius: 25,
              ...styles.commonAcrossBox,
            }}>
            <ExerciseBlackIcon width={80} height={80} />
            <Text style={styles.boxText}>Exercise Sessions</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('TIPS')}
            style={{
              backgroundColor: '#9AC09E',
              borderBottomRightRadius: 25,
              ...styles.commonAcrossBox,
            }}>
            <TipsBlackIcon width={80} height={80} />
            <Text style={styles.boxText}>Daily Tips</Text>
          </Pressable>
        </View>
        <View style={styles.commonFlexContainer}>
          <Pressable
            onPress={() => navigation.navigate('MEDDROP')}
            style={{
              backgroundColor: '#9AC09E',
              borderBottomLeftRadius: 25,
              ...styles.commonAcrossBox,
            }}>
            <MedDropBlackIcon width={80} height={80} />
            <Text style={styles.boxText}>Med Drop</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('SOS')}
            style={{
              backgroundColor: '#E7E391',
              borderBottomRightRadius: 25,
              ...styles.commonAcrossBox,
            }}>
            <BellBlackIcon width={80} height={80} />
            <Text style={styles.boxText}>SOS</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '90%',
    height: 240,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
  },
  boxText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  commonAcrossBox: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 130,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  commonFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
  },
});

export default Home;
