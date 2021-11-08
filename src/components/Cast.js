import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Cast = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.img} source={require('../assets/images/ridley.jpg')}/>
            <Text style={styles.name}>Daisy Ridly</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    name: {
        fontSize: 14,
    }
})

export default Cast
