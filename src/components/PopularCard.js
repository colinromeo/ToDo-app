import React from 'react'
import { View, Text, StyleSheet, Pressable , Image} from 'react-native'

const PopularCard = ({navigation}) => {
    return (
        <Pressable onPress={()=>navigation.navigate('MovieDetails') }>
            <Image style={styles.poster} source={require('../assets/images/movieposter.jpg')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    poster: {
        width: 150,
        height: 150,
        marginRight: 20,
        borderRadius: 10,
        elevation: 3,
    }
})

export default PopularCard
