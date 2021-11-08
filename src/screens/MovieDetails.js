import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Cast from '../components/Cast'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d80',
        title: 'Forth Item',
      },
  ];

const MovieDetails = () => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.wallpaper} source={require('../assets/images/movieposter.jpg')}/>
            <View style={styles.head}>
                <Image style={styles.cardImage} source={require('../assets/images/moonlight.jpg')} />
                <View>
                    <Text style={styles.title} numberOfLines={2}>Star Wars: The Rise of Skywalker (2019</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='calendar' size={25} />
                        <Text>date</Text>
                    </View>
                </View>
               
            </View>
            <View style={styles.details}>
                <Text style={styles.heading}>OverView</Text>
                <Text>Well I think it is evident you are not including everything 
                    in the photos page. Please update your code with all of the code 
                    from both files so we can see what is missing.
                </Text>
                <Text style={styles.heading}>Top Billed Cast</Text>
                <FlatList horizontal={true} 
                data={DATA}
                    renderItem={()=><Cast />}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wallpaper: {
        width: '100%',
        height: 340
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        width: '80%',
        padding: 10,
        color: '#000'
    },
    details: {
        marginTop: 90,
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    head: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        marginTop: 280,
        padding: 10,
        alignItems: 'flex-end'
    },
    cardImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
        elevation: 5
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 15,
        color: '#000',
    }
})

export default MovieDetails
