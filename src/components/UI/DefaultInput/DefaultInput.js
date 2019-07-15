import React from "react";
import { TextInput, StyleSheet } from "react-native";
const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]} //here we are using outside and internal style by using this array
    //so first the internal style is used, then style we get from props [ from Auth.js file input field] is used.
    //So we can have default styling and custom styleing for a component.
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});

export default defaultInput;
