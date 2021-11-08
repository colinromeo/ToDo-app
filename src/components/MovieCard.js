import React from 'react'
import { Image, StyleSheet, Pressable } from 'react-native'

const MovieCard = ({navigation, item}) => {
    return (
        <Pressable style={styles.card} onPress={() => navigation.navigate('MovieDetails')}>
            <Image style={styles.cardImage} source={require('../assets/images/movieposter.jpg')} />
        </Pressable>
    )
}

const styles= StyleSheet.create({
    card: {
        width: 240,
        height: 380,
        borderRadius: 20,
        marginRight: 25,
        elevation: 5,
    },
    cardImage: {
        width: 240,
        height: 380,
        borderRadius: 20,
    }
})

export default MovieCard;

