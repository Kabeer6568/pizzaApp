import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';






const ButtonTest = ()=>{

    const BTNData = [
        {
            id: "1",
            title: " Pepperoni ",
        },
        {
            id: "2",
            title: " Cheese ",
        },
        {
            id: "3",
            title: " Sause ",
        },
        {
            id: "4",
            title: " Onions ",
        }
    ]


    return(
        
        <FlatList 
        style={styles.sizeChoiceBTN}
        data={BTNData}
        renderItem={({item})=>{
            console.log(item.title);
            return (
            
            <>
            <Text>{item.title}</Text>

            
        
          {/* <TouchableOpacity style={styles.sizeChoiceSML}>
            <Text>{item.title}</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={[styles.sizeChoiceSML, styles.sizeChoiceBTNDesign]}>
            <LinearGradient
              colors={['#F5313F', '#FFA360']}
              style={[styles.sizeChoiceBTNDesign,]}
              start={{x: 0, y: 0.9}}
              end={{x: 1, y: 0.2}}>
              <Text style={{color: 'white'}}>{item.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
          
        
      
            </>
            )
        }}
        >
            
        </FlatList>
        
    )
}



const styles = StyleSheet.create({
    
   
    
    sizeChoiceBTN: {
      flexDirection: 'row',
    },
    sizeChoiceSML: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 3,
    },
    sizeChoiceBTNDesign: {
      paddingVertical: 8,
      paddingHorizontal: 18,
      borderRadius: 20,
    },
    
  });

export default ButtonTest