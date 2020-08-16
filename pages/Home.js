import React from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert, ImageBackground } from "react-native";

const Home = () => {
  const GridListItems = [
    { key: image },
    { key: image },
    { key: image },
    { key: image },
    { key: image },
    { key: image },
    { key: image },
    { key: image },
    { key: image },
  ];

  const GetGridViewItem = (item) => {
    Alert.alert(item);
  }

  const image = { uri: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" };
    return (

        <View style={styles.container}>
         <FlatList
            data={ GridListItems }
            renderItem={ ({item}) =>
            <View style={styles.imageContainer} >
                      <ImageBackground source={image} style={styles.image} imageStyle={{ borderRadius: 10}}>
                         <Text style={styles.text}>Inside</Text>
                       </ImageBackground>
                     </View> }
            numColumns={2}
         />
       </View>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: 'stretch',
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 400,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  GridViewContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
 },
});


export default Home;
