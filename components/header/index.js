import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const TopBar = () => (
  <View style={styles.nav}>
    <View>
      <Icon
    name='rowing' />
    </View>
    <Text>Shopping List</Text>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TopBar;
