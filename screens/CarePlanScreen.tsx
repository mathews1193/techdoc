import * as React from 'react';
import { Button, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import CarePlans from '../components/CarePlan/carePlans';

import { Text, View} from '../components/Themed';

export default function CarePlanScreen( { navigation } ) {
  return (
    <View style={styles.container}>
     <Appbar style={styles.top}>
    <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
  </Appbar>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Welcome, Patient Name</Text>
      <CarePlans />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:100,
    marginBottom: 20,
  },
  button: {
    marginTop:5,
    height: 90,
    width: '80%',
  },
  logo: {
    marginBottom: 30,
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: '80%',
  },
});
