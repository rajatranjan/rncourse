/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component { //<Props>
  state = {
    placeName: "",
    places: []
  };
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val,
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>  
          <TextInput
            style={styles.placeInput}
            placeholder="an Awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            />
          <Button
           title="ADD"
           style={styles.placeButton}
           onPress={this.placeSubmitHandler}/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    // flex: 1,
    width:"100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:"center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%",

  }
});
