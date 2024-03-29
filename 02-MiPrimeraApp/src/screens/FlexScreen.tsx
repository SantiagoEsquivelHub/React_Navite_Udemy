import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box1: {
        // flex: 4, // 40% of the screen
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    box2: {
        // flex: 4, // 40% of the screen
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    box3: {
        // flex: 2, // 20% of the screen
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
})