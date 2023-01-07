import react from "react";
import { View,Image, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer';


const DrawerHeader = (props)=>{
    return(
        <>
        <View >
        <View style={{borderWidth: 0,
            marginLeft: 60,
            marginRight: 50,
            marginTop: 20,
            backgroundColor: '#fcf8f6',
            borderRadius: 200,
            paddingTop: 1,
            paddingBottom: 0,}}>
            <Image source={require('../assets/img/Profile.png')} />
            <Text style={{textAlign: 'center', fontSize: 18}}>
            Jaykey del Mar
            </Text>
            <Text style={{textAlign: 'center', fontSize: 14, marginBottom: 20}}>
            janedone@gmail.com
            </Text>
        </View>
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        </>
    )
}

export default DrawerHeader;