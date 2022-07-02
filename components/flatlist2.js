import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';

const DATA = [
  {

  
    Image:require('../img/waqas.jpeg'),
    title: 'Muhammad Waqas',
    color:"white",
    
  },
  {
    
    Image:require('../img/basil.jpeg'),
    title: 'Muhammad Basil',
    color:"white",
    
  },
  {

  
    Image:require('../img/waqas.jpeg'),
    title: 'Muhammad Waqas',
    color:"white",
    
  },
  {
    
    Image:require('../img/basil.jpeg'),
    title: 'Muhammad Basil',
    color:"white",
    
  },
  {

  
    Image:require('../img/waqas.jpeg'),
    title: 'Muhammad Waqas',
    color:"white",
    
  },
  {
    
    Image:require('../img/basil.jpeg'),
    title: 'Muhammad Basil',
    color:"white",
    
  },
  {

  
    Image:require('../img/waqas.jpeg'),
    title: 'Muhammad Waqas',
    color:"white",
    
  },
  {
    
    Image:require('../img/basil.jpeg'),
    title: 'Muhammad Basil',
    color:"white",
    
  },
  {

  
    Image:require('../img/waqas.jpeg'),
    title: 'Muhammad Waqas',
    color:"white",
    
  },
  {
    
    Image:require('../img/basil.jpeg'),
    title: 'Muhammad Basil',
    color:"white",
    
  },
  {

  
    Image:require('../img/waqas.jpeg'),
    title: 'Muhammad Waqas',
    color:"white",
    
  },
  {
    
    Image:require('../img/basil.jpeg'),
    title: 'Muhammad Basil',
    color:"white",
    
  },
  
];

const Components2 = () => {
  const renderItem = (item ) => {
return (
  <View style={{...styles.item,backgroundColor:item.color}}>
 
  <Image style={styles.Image} source={item.Image}/>  
  <Text style={styles.title}>{item.title}
  </Text>
 
 </View>
)
  } 
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item})=>renderItem(item)}
        keyExtractor={(item,index)=>index.toString}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#f9c2ff',
   padding: 10,
 
 
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
   alignItems:'center',
    // justifyContent:'space-between',
    borderRadius:20,
    borderWidth:1,
    borderColor:'skyblue'
    
    
   
  },
  title: {
    fontSize: 18,
    color:'skyblue',
    marginLeft:20
    
    
    
  },
  Image:{
    width:40,
    height:40,
    borderRadius:40
  }
});

export default Components2;