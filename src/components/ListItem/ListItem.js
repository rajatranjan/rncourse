import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const listItem = (props) => (                    //Here using Parenthesis "()" instead of "{}"" to immediatly return.
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem} >
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});
export default listItem;