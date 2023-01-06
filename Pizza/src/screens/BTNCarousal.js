import React, { useState } from "react";
import { View, Image, FlatList, SafeAreaView,ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pepperoni",

  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Cheese",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Onions",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d622",
    title: "Olives",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <>
  
  <TouchableOpacity onPress={onPress} style={[styles.item,styles.sizeChoiceSML,styles.length,styles.sizeChoiceBTNDesign, backgroundColor]}>
    <Image
    style= {{width: 30,height: 60, flex: 0.5}}
    source={require('../assets/img/pepperoni.png')}
    />
    <View style={{flex: 0.5, alignItems: 'flex-end'}}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.title, textColor]}>$0.00</Text>
    </View>
  </TouchableOpacity>
  
</>
);

const BTNCarousal = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F8574A" : "rgba(255, 255, 255, 1)";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <>
  <ScrollView horizontal>
    <SafeAreaView style={styles.container}>
      
      <FlatList
      numColumns={7}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 18,
  },
  sizeChoiceBTNDesign: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
  },
  sizeChoiceBTN: {
    flexDirection: 'row',
  },
  length:{
    width: 230,
    height: 76,
    flexDirection: "row",
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

export default BTNCarousal;