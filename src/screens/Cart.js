import React from 'react'
import { View, Text, Pressable } from 'react-native'

const Cart = () => {
    return (
        <Pressable  style={styles.card}>
            <Image 
                style={styles.productImage}  
                source={{uri:item?.image}}
                resizeMode={"cover"}
            />
            <View style= {styles.cardtxt}>
                <Text>{item?.category}</Text>
                <Text numberOfLines={2} style={styles.productCaption}>{item?.title}</Text>
                <Text>Rating {item?.rating?.rate}/5</Text>
                <Text style={styles.price}>$ {item?.price}</Text>
            </View>
                
        </Pressable>
    )
}

export default Cart
