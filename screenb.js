/* eslint-disable react-native/no-inline-styles */
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
  requireNativeComponent,
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
            <Text style={styles.me}>hii</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/2.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>Manoj</Text>
            <Text style={styles.me}>hello bro</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/3.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sailesh</Text>
            <Text style={styles.me}>how are you?</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>salman</Text>
            <Text style={styles.me}>good🤗</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>sravan</Text>
            <Text style={styles.me}>ok</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>kavya</Text>
            <Text style={styles.me}>aat laga denge</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/2.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>adharsh</Text>
            <Text style={styles.me}>react next</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>om prakash</Text>
            <Text style={styles.me}>hii raa</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/2.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>mama</Text>
            <Text style={styles.me}>macha</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/4.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>rashmika</Text>
            <Text style={styles.me}>hii babe</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/2.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>pulka</Text>
            <Text style={styles.me}>hii darling</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/1.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>praveen</Text>
            <Text style={styles.me}>hii</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.label}>
          <Image style={styles.image} source={require('./src/3.jpeg')} />
          <View style={styles.all}>
            <Text style={styles.name}>kalibogu</Text>
            <Text style={styles.me}>Hii</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>13:33</Text>
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
});
