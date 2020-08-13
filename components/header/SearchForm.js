import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { SearchBar } from 'react-native-elements';

const SearchForm = () => {

  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
    console.log("search: ", search);
  };


  return (
    <View style={styles.searchContainer}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "red",
    marginTop: 30
  }
});

export default SearchForm;
