// import * as React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   ImageBackgroundComponent,
//   Alert,
// } from 'react-native';
// import {
//   NavigationContainer,
//   PreventRemoveContext,
// } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// export default function Screen1({navigation}) {
//   return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

//           <Text style={styles.text}>Screend</Text>
//         {/* <Pressable onPress={onpress1}>
//           <Text style={styles.text}>hii</Text>
//         </Pressable> */}
//       </View>
//     );
//   }
//   const styles = StyleSheet.create({
//     text: {
//       fontSize: 31,
//     },
//   });

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  ImageBackgroundComponent,
  Alert,
} from 'react-native';
import {
  NavigationContainer,
  PreventRemoveContext,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Screen1({navigation}) {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/1.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>YUVA</Text>
            <View>
              <Text style={styles.me}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="red"
                  fontWeight="bold"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </Svg>
                (3) Today,13:00
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/2.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>salman</Text>
            <Text style={styles.me}>
            <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </Svg>Today, 13:33</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/3.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sai</Text>
            <Text style={styles.me}>
            
            <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="red"
                  fontWeight="bold"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </Svg>Today, 15:03</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sravan</Text>
            <Text style={styles.me}>
            <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </Svg>yesterday,13:33</Text>
          </View>
        </View>
        <View style={styles.phone}>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
         
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sailesh</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>
                August 31,13:33</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>viswa</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 31,15:03</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>kavya</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 31,13:05</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/2.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>salman</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 25,13:33</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sailesh</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 25,13:05</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sai</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 25,15:03</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>salman</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 25,15:00</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sravan</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 13,13:33</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>kavya</Text>
            <Text style={styles.me}>
            <Svg
    xmlns="http://www.w3.org/2000/svg"
color="green"
                  fontWeight="bold"
                  width={15}
                  height={15}
   viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </Svg>August 13,15:00</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            width={25}
            height={25}
            // viewBox="0 0 24 24"
            // strokeWidth={1.5}
            // stroke="currentColor"
            // className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
            />
          </Svg>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 31,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 11,
  },
  label: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  all: {
    margin: 13,
    marginLeft: 0,
  },
  me: {
    margin: 5,
  },
  date: {
    marginTop: 17,
    marginRight: 11,
  },
  phone: {
    margin: 11,
    marginTop: 25,
  },
});
