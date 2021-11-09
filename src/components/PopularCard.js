import React from 'react'
import { View, Text, StyleSheet, Pressable , Image} from 'react-native'
import { fetchCategoryDetails } from '../../store/slices/movieSlice'


let img_url = 'https://image.tmdb.org/t/p/w200'

const PopularCard = ({navigation, item}) => {
// console.log('popular===',item)
    
    return (
        <Pressable onPress={()=> navigation.navigate('MovieDetails') }>
            <Image style={styles.poster} source={{uri: img_url+item?.poster_path}} />
            {/* <Image style={styles.poster} source={require('../assets/images/moonlight.jpg')} /> */}
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
