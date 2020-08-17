import React from 'react';

import { StyleSheet, Text, View, } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import {
  Container} from 'native-base';

import { TopBar, SearchForm } from "./components/header";
import { Home, Details } from "./pages";

const Routers = () => (
  <NativeRouter>
    <Container style={styles.container}>
      <TopBar />
      <SearchForm />
      <Route exact path="/" component={Home} />
      <Route path="/details/:productId" component={Details} />
    </Container>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default Routers;
