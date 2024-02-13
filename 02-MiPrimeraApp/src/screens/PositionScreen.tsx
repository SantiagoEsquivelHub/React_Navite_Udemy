import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox}></View>
            <View style={styles.orangeBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#38CDD9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
    },
})
