import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackgroundComponent,
  Alert,
} from 'react-native';
import {
  NavigationContainer,
  PreventRemoveContext,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Svg, {Path} from 'react-native-svg';

export default function Screen2({navigation}) {
    // const onpress2 = () => {
    //   navigation.navigate('Home1');
    // }
      return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <Path d="M16 10.86c-3.07 0-5.57 2.5-5.57 5.57S12.93 22 16 22s5.57-2.5 5.57-5.57-2.5-5.57-5.57-5.57Z" />
                    <Path d="M28.91 6h-7.69l-.87-1.5a1 1 0 0 0-.86-.5h-6.97c-.36 0-.69.19-.86.5L10.79 6h-7.7C1.94 6 1 6.94 1 8.09v16.82C1 26.06 1.94 27 3.09 27h25.82c1.15 0 2.09-.94 2.09-2.09V8.09C31 6.94 30.06 6 28.91 6ZM16 24c-4.17 0-7.57-3.4-7.57-7.57s3.4-7.57 7.57-7.57 7.57 3.4 7.57 7.57S20.17 24 16 24Z" />
                  </Svg> 
      {/* <Pressable onPress={onpress2}>
        <Text>GO TO 3</Text>
      </Pressable> */}
      </View>
  
    );
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 31,
    },
  });