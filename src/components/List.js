import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PopularCard from './PopularCard'


const List = ({category, navigation}) => {
    const Popular = () => (
            <PopularCard navigation={navigation} />
        )
    return (
        <View>
            <Text style={styles.heading2}>{category?.name}</Text>
            <FlatList horizontal={true} data={[1,2,3]} renderItem={Popular}  />
        </View>
    )
}

const styles = StyleSheet.create({
    heading2: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 20,
        color: '#000',
    },
})

export default List
