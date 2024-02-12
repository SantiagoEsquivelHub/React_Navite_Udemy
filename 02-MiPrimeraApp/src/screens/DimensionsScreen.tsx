import React from 'react'
import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions(); // Scroll down to see the difference between this and the previous line

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.2
                    }}></View>
                <View style={styles.orangeBox}></View>
            </View>
            <Text style={styles.title}>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    purpleBox: {
        // width: '50%',
        height: '50%',
        backgroundColor: 'purple'
    },
    orangeBox: {
        width: '50%',
        height: '50%',
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 30,
    }
})
