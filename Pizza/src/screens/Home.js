import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View>
      <LinearGradient
        colors={['#F5313F', '#FFA360']}
        style={[styles.linearGradient, styles.mainBanner]}
        start={{x: 0, y: 0.9}}
        end={{x: 1, y: 0.2}}>
          <View style={styles.mainBox1}>
        <Text style={styles.mainHeading}>Create Your Pizza</Text>
        <Text style={styles.subHeading}>SIZE, CRUST, TOPPINGS</Text>
          </View>
          <View style={styles.mainBox2}>
        <Text style={styles.mainPricing}>$10</Text>
          </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBanner: {
    fontFamily: 'Cochin',
    flexDirection: 'row',
  },
  linearGradient: {
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: '100%',
  },
  mainBox1:{
    flex: 0.7,
  },
  mainHeading: {
    
    marginTop: 20,
    marginLeft: 26,
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    // fontWeight: 300,
    fontSize: 25,
    lineHeight: 29,
    letterSpacing: -0.3,
  },
  subHeading: {
    
    marginTop: 0,
    marginLeft: 26,
    color: '#EAEAEA',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    // fontWeight: 300,
    fontSize: 13,
    lineHeight: 29,
    letterSpacing: -0.3,
  },
  mainBox2:{
    flex: 0.3,
  },
  mainPricing:{
    marginTop: 20,
    marginLeft: 26,
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    // fontWeight: 300,
    fontSize: 26,
    lineHeight: 29,
    letterSpacing: -0.3,
  }
});

export default Home;
