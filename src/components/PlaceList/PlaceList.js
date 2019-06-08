import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name} //item is a property on the info object, that's where it's coming from.
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default PlaceList;
