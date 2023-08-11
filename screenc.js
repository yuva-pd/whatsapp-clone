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
        
//           <Text style={styles.text}>Screenc</Text>
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
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={styles.label}>
      
    <Image style={styles.image} source={require('./src/7.png')} />
      <View style={styles.all}>
        <Text style={styles.name}>My Status</Text>
        <Text style={styles.me}>Tap to add status update</Text>
      </View>
    </View>
    </View>
    <View>
        <Text style={{marginLeft:15}}>Recent updates </Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={styles.label}>
    <Image style={styles.image} source={require('./src/5.jpeg')} />
      <View style={styles.all}>
        <Text style={styles.name}>YUVA</Text>
        <Text style={styles.me}>31 minutes ago</Text>
      </View>
    </View>
    
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={styles.label}>
      
    <Image style={styles.image} source={require('./src/4.jpeg')} />
      <View style={styles.all}>
        <Text style={styles.name}>kavya</Text>
        <Text style={styles.me}>Today,13:33</Text>
      </View>
    </View>
    
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={styles.label}>
      
    <Image style={styles.image} source={require('./src/5.jpeg')} />
      <View style={styles.all}>
        <Text style={styles.name}>sravan</Text>
        <Text style={styles.me}>Today,15:03</Text>
      </View>
    </View>
    </View>
    <View>
        <Text style={{marginLeft:15,}}>Viewed updates</Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={styles.label}>
      
    <Image style={styles.image} source={require('./src/2.jpeg')} />
      <View style={styles.all}>
        <Text style={styles.name}>sai</Text>
        <Text style={styles.me}>Today,15:11</Text>
      </View>
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
    borderRadius:25,
    margin:11,
  },
  label: {
    flexDirection:'row',
  },
  name:{
    fontSize:17,
    fontWeight: "bold",
    marginLeft:3,
  },
  all:{
    margin:13,
    marginLeft:0,
  },
me:{
  margin:5,
},
date:{
  marginTop:17,
  marginRight:11,
}
});

