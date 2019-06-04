/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import placeImage from './src/assets/wallpaper.jpg'
export default class App extends Component { //<Props>
  state = {
    places: [],
    selectedPlace: null
  };
  

  placeAddedHandler = placeName => {
    this.setState(prevState => { //set state take a state as argument and prevstate is just a name for that state.
      return {
        places: prevState.places.concat({
          key: Math.random().toString(), //it throu warning because it expect string we send number, to convert number to string i added toString() method.
          name: placeName,
          image: {
            uri: "https://www.gstatic.com/webp/gallery3/1.png" //when using external image its important to give height and width in style.
          }
        })
      };
    });
  };
  placeDeletedHandler =() => {
    this.setState(prevState =>{
        return {
          places: prevState.places.filter(place =>{
            return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null,
        };
      });
  }
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    }
    )
    // this.setState(prevState =>{
    //   return {
    //     places: prevState.places.filter(place =>{
    //       return place.key !== key;
    //     })
    //   };
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
         places={this.state.places}
         onItemSelected={this.placeSelectedHandler}/>
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
  }
});
