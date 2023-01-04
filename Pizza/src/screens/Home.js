import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Pizza1 from '../assets/img/Pizza_1'


const Home = ({navigation}) => {

  function screenHandler (){
    navigation.navigate('Crust')
  }

  return (
    <>
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

      <View
        style={{
          borderWidth: 0,
          marginLeft: 30,
          marginRight: 30,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          marginTop: -120,
          borderRadius: 200,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <View
          style={{
            borderWidth: 0,
            marginLeft: 30,
            marginRight: 30,
            backgroundColor: '#fcf8f6',
            borderRadius: 200,
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={styles.MainPizza}
              source={require('../assets/img/Pizza_1.png')}
            />
          </View>
        </View>
      </View>

      <View style={styles.pizzaSizesBTNContainer}>
        <View style={{flex: 0.3}}></View>
        <TouchableOpacity style={styles.pizzaSizesBTN}>
          <Text>12*</Text>
        </TouchableOpacity>
        <View style={{flex: 0.3}}></View>
      </View>

      <View style={styles.pizzaSize}>

        <Text style={styles.pizzaSizeHeading}>Choose your Size</Text>

        <Text style={styles.pizzaSizeHeading}>Choose your size</Text>

        <View style={styles.sizeChoiceBTN}>
          <TouchableOpacity style={styles.sizeChoiceSML}>
            <Text>Small</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sizeChoiceSML, styles.sizeChoiceBTNDesign]}>
            <LinearGradient
              colors={['#F5313F', '#FFA360']}
              style={[styles.sizeChoiceBTNDesign, styles.mainBanner]}
              start={{x: 0, y: 0.9}}
              end={{x: 1, y: 0.2}}>
              <Text style={{color: 'white'}}>Medium</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sizeChoiceSML]}>
            <Text>Large</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>

        <TouchableOpacity 
         onPress={() => screenHandler()}
        style={{marginTop: 20}}
        >
          
        

          <LinearGradient
          colors={['#F5313F', '#FFA360']}
          style={[styles.nextBTN]}
          start={{x: 0, y: 0.9}}
          end={{x: 1, y: 0.2}}
          >
          <Text  style={{color: 'white', fontSize: 20,}}>
            Next
          </Text>
          </LinearGradient>
          
          </TouchableOpacity>
      </View>
    </>
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
    height: 250,
    width: '100%',
  },
  mainBox1: {
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
  mainBox2: {
    flex: 0.3,
  },
  mainPricing: {
    marginTop: 20,
    marginLeft: 26,
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    // fontWeight: 300,
    fontSize: 26,
    lineHeight: 29,
    letterSpacing: -0.3,
  },
  MainPizza: {
    width: 200,
    height: 200,
  },
  pizzaSizesBTNContainer: {
    // flex: 0.5,
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
  },
  pizzaSizesBTN: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: '#dddddd',
  },
  pizzaSize: {
    backgroundColor: '#fff',
    height: 120,
    marginHorizontal: 20,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3.84,
    shadowRadius: 0.84,
    elevation: 1,
  },
  pizzaSizeHeading: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  sizeChoiceBTN: {
    flexDirection: 'row',
  },
  sizeChoiceSML: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  sizeChoiceBTNDesign: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  nextBTN:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  }
});

export default Home;
