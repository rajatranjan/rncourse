import React from "react";
import { Text, StyleSheet } from "react-native";

const mainText = props => (
  <Text style={styles.mainText}> {props.children} </Text>
);

const styles = StyleSheet.create({
  mainText: {
    color: "black",
    backgroundColor: "transparent"
  }
});
export default mainText;

//we can't use styles on container,View , but on indivisual text markup so to make
//uniform text styling we created this component. Now we can modify color from here
//or make font-family.
