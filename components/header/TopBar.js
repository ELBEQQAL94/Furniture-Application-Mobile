import React from 'react';

import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements'

const TopBar = () => (
  <View style={styles.nav}>
    <View>
      <Icon.Button
      name="bars"
      backgroundColor="#643296"
    >
      Menu
    </Icon.Button>
    </View>
    <View style={styles.items}>
      <Badge value="10" status="success" />
      <Icon
        name="shopping-cart"
        size={30}
        color="#643296"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    color: "red",
  }
});

export default TopBar;
