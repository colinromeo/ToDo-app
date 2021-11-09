import React from 'react'
import { Image, StyleSheet, Pressable } from 'react-native'

let img_url = 'https://image.tmdb.org/t/p/w200'

const MovieCard = ({navigation, item}) => {
    // console.log("item===",item)
    return (
        <Pressable style={styles.card} onPress={() => navigation.navigate('MovieDetails')}>
            <Image style={styles.cardImage} source={{uri: img_url+item?.poster_path}} />
        </Pressable>
    )
}

const styles= StyleSheet.create({
    card: {
        width: 240,
        height: 380,
        elevation: 5,
        borderRadius: 20,
        marginRight: 25,
        
    },
    cardImage: {
        width: 240,
        height: 380,
        borderRadius: 20,
    }
})

export default MovieCard;

