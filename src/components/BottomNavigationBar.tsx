import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {
  HomeBlackIcon,
  HomeRedIcon,
  ExerciseBlackIcon,
  ExerciseRedIcon,
  ReminderBlackIcon,
  ReminderRedIcon,
  TipsBlackIcon,
  TipsRedIcon,
  MedDropBlackIcon,
  MedDropRedIcon,
  BellBlackIcon,
  BellRedIcon,
  AssistantBlackIcon,
  AssistantRedIcon,
} from '../assets/icons';

const BottomNavigationBar = ({state, descriptors, navigation}) => {
  const tabItems: Record<string, {focused: React.FC; unfocused: React.FC}> = {
    HOME: {
      // label: 'Home',
      focused: HomeRedIcon,
      unfocused: HomeBlackIcon,
    },
    ASSISTANT: {
      // label: 'Explore',
      focused: AssistantRedIcon,
      unfocused: AssistantBlackIcon,
    },
    REMINDERS: {
      // label: 'Coupons',
      focused: ReminderRedIcon,
      unfocused: ReminderBlackIcon,
    },
    TIPS: {
      // label: 'Profile',
      focused: TipsRedIcon,
      unfocused: TipsBlackIcon,
    },
    EXERCISES: {
      // label: 'Profile',
      focused: ExerciseRedIcon,
      unfocused: ExerciseBlackIcon,
    },
    MEDDROP: {
      // label: 'Profile',
      focused: MedDropRedIcon,
      unfocused: MedDropBlackIcon,
    },
    SOS: {
      // label: 'Profile',
      focused: BellRedIcon,
      unfocused: BellBlackIcon,
    },
  };

  return (
    <View key={state.key} style={styles.outerMostContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const Icon = tabItems[label];
        // const title = tabItems[label].label;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.pressableStyle}>
            {isFocused ? <Icon.focused /> : <Icon.unfocused />}
            {/* <Text
              className={`text-[10px] text-center ${
                isFocused
                  ? 'text-primary font-inter_600'
                  : 'text-offGray-100 font-inter_500'
              }`}>
              {title}
            </Text> */}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  outerMostContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    paddingVertical: 3,
  },
  pressableStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
});

export default BottomNavigationBar;
