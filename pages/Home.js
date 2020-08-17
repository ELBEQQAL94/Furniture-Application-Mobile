import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from "react-router-native";

// mock data
import { GridListItems } from "../db/data";

const Home = () => {

  return (

      <View style={styles.container}>
        <FlatList
          data={ GridListItems }
          renderItem={ ({item}) =>
            <View style={styles.imageContainer} >
              <ImageBackground key={item.id} source={item.image} style={styles.image} imageStyle={{ borderRadius: 20}}>
                  <Text style={styles.text}>{item.title}</Text>
                  <Text style={styles.text}>$ {item.price}</Text>
                  <View style={styles.items}>
                    <Link to={`/details/${item.id}`}>
                      <Icon
                        name="shopping-cart"
                        size={30}
                      />
                    </Link>
                </View>
              </ImageBackground>
            </View>}
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
    marginRight: 5,
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    height: 400,
    padding: 10,
  },
  text: {
    color: "grey",
    fontSize: 20,
    textTransform: "capitalize",
    color: "#fff",
    marginBottom: 12,
  },
  GridViewContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
 },
 items: {
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  right: "50%",
  left: "50%",
  marginBottom: -30,
 }
});


export default Home;
