import 'react-native-gesture-handler';
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './screena';
import Screen2 from './screenb';
import Screen3 from './screenc';
import Screen4 from './screend';
import Svg, {Path} from 'react-native-svg';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  tabBarBadge,
  Button,
  Header,
  Pressable,
  useColorScheme,
  View,
} from 'react-native';

const tab = createMaterialTopTabNavigator();
function hello() {
  return <Text>hii</Text>;
}
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.text}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable onpress={hello}>
              <Text style={styles.tex}>WhatsApp</Text>
            </Pressable>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {/* <Image style={{color:"#fff"}} source={require('./assets/icon.svg')} /> */}
              {/* <Searchicon /> */}
              <View style={styles.tex}>
                <Svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}>
                  <Path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
                </Svg>
              </View>
              <Pressable onpress={hello}>
                <View style={styles.tex}>
                  <Svg
                    fill="#fff"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    y={0}
                    viewBox="0 0 512 512"
                    width={25}
                    height={25}
                    style={{
                      enableBackground: 'new 0 0 512 512',
                    }}
                    xmlSpace="preserve">
                    <Path
                      className="st0"
                      d="M320 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zM320 64c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zM320 448c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z"
                    />
                  </Svg>
                </View>
              </Pressable>
            </View>
          </View>
          <NavigationContainer>
            <View style={{height: 700}}>
              <tab.Navigator
                screenOptions={{tabBarStyle: {backgroundColor: 'green'}}}>
                <tab.Screen
                  name="hi"
                  component={Screen1}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Svg
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32">
                        <Path d="M16 10.86c-3.07 0-5.57 2.5-5.57 5.57S12.93 22 16 22s5.57-2.5 5.57-5.57-2.5-5.57-5.57-5.57Z" />
                        <Path d="M28.91 6h-7.69l-.87-1.5a1 1 0 0 0-.86-.5h-6.97c-.36 0-.69.19-.86.5L10.79 6h-7.7C1.94 6 1 6.94 1 8.09v16.82C1 26.06 1.94 27 3.09 27h25.82c1.15 0 2.09-.94 2.09-2.09V8.09C31 6.94 30.06 6 28.91 6ZM16 24c-4.17 0-7.57-3.4-7.57-7.57s3.4-7.57 7.57-7.57 7.57 3.4 7.57 7.57S20.17 24 16 24Z" />
                      </Svg>
                    ),
                    tabBarLabel: () => {
                      return null;
                    },
                  }}
                  // options={{tabBarBadge:3}}
                >
                  {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <Path d="M16 10.86c-3.07 0-5.57 2.5-5.57 5.57S12.93 22 16 22s5.57-2.5 5.57-5.57-2.5-5.57-5.57-5.57Z" />
                    <Path d="M28.91 6h-7.69l-.87-1.5a1 1 0 0 0-.86-.5h-6.97c-.36 0-.69.19-.86.5L10.79 6h-7.7C1.94 6 1 6.94 1 8.09v16.82C1 26.06 1.94 27 3.09 27h25.82c1.15 0 2.09-.94 2.09-2.09V8.09C31 6.94 30.06 6 28.91 6ZM16 24c-4.17 0-7.57-3.4-7.57-7.57s3.4-7.57 7.57-7.57 7.57 3.4 7.57 7.57S20.17 24 16 24Z" />
                  </Svg> */}
                </tab.Screen>

                <tab.Screen name="CHATS" component={Screen2} />
                <tab.Screen name="STATUS" component={Screen3} />

                <tab.Screen name="CALLS" component={Screen4} />
              </tab.Navigator>
            </View>
          </NavigationContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
  tex: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'normal',
    backgroundColor: 'green',
    margin: 21,
  },
  search: {},
  text: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'normal',
    backgroundColor: 'green',
  },
});
export default App;
