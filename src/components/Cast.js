import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

let img_url = 'https://image.tmdb.org/t/p/w200'

const Cast = ({item}) => {
    return (
        <View style={styles.root}>
            <Image resizeMode={'contain'} style={styles.img} source={{uri: img_url+item?.logo_path}}/>
            <Text style={styles.name}>{item?.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
        alignItems: 'center'
    },
    img: {
        width: 90,
        height: 70,

    },
    name: {
        fontSize: 14,
    }
})

export default Cast
