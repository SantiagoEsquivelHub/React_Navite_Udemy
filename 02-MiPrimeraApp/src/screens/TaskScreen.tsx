import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TaskScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox}></View>
            <View style={styles.orangeBox}></View>
            <View style={styles.blueBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
    },
    purpleBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'center',
    },
    blueBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        position: 'absolute',
        bottom: 0,
    },
});