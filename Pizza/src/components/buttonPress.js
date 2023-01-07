import React, { useState } from "react";
import { FlatList, SafeAreaView,ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
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
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
  
</>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000" : "#f9c2ff";
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
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

export default App;