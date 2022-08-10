import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." onChangeText={props.onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 5,
    borderRadius: 5,
  },
});

export default SearchBar;
