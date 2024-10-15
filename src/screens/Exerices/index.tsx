import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

const dayWiseData = numDays => {
  const videos = [];
  for (let i = 0; i < numDays; i++) {
    videos.push({
      id: `day-${i + 1}`, // Unique ID for each item (recommended)
      key: `day-${i + 1}`, // Key prop for FlatList
      url: `https://www.youtube.com/watch?v=Ev6yE55kYGw&list=PLmk21KJuZUM6_Gy9jxzF9sTO_6u_tYCOm&index=${
        i + 1
      }`,
      title: `Day ${i + 1} Exercise`, // Descriptive title for each exercise
    });
  }
  return videos;
};

const ExerciseItem = ({item, onItemPress}) => {
  return (
    <TouchableOpacity
      style={styles.exerciseItem}
      onPress={() => onItemPress(item.url)}>
      <Text style={styles.exerciseTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const Exerices = () => {
  const handleCloseWebView = () => {
    setSelectedUrl(null);
  };
  const [dayData, setDayData] = useState(dayWiseData(20)); // Pre-populate with 20 days of data
  const [selectedUrl, setSelectedUrl] = useState(null);
  console.log({selectedUrl});
  const handleItemPress = url => {
    setSelectedUrl(url);
  };
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
          EXERCISE SESSIONS
        </Text>
      </View>
      <FlatList
        data={dayData}
        renderItem={({item}) => (
          <ExerciseItem item={item} onItemPress={handleItemPress} />
        )}
        keyExtractor={item => item.id} // Key extractor using unique IDs
        numColumns={2} // 2 columns for the list view
      />
      {selectedUrl && (
        <View>
          <TouchableOpacity
            onPress={handleCloseWebView}
            style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={{height: '95%', width: '100%'}}>
            <WebView source={{uri: selectedUrl}} style={styles.webView} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
  },
  exerciseItem: {
    flex: 1, // Divide available space equally between items
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center', // Center title horizontally
  },
  exerciseTitle: {
    fontSize: 18,
  },
  webViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    // alignItems: 'center',
    // position: 'relative', // For positioning the close button
  },
  webView: {
    flex: 1, // Take up the remaining space below the list
  },
  closeButton: {
    // position: 'absolute',
    // top: 10,
    // right: 10,
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a424f',
    // padding: 5,
    // borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Exerices;
