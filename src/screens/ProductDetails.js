import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'

const ProductDetails = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.productImage}  
                source={require('../assets/images/homedecorationpot.jpg')}
            />
            <Text style={styles.caption}>Home Decoration Pot</Text>
            <Text>by Jarvis Pepperspray</Text>
            <Text style={styles.price}>$125.00</Text>
            <Text style={styles.des}>Description</Text>
            <Text>Fingers are not the most precise instruments, 
                and it is common for users to accidentally activate 
                the wrong element or miss the activation area. To help, 
            </Text>
            <Pressable style={styles.btn}><Text style={styles.btntext}>Add To Cart</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    productImage: {
        height: 350,
        width: '100%'
    },
    caption: {
        fontWeight: '600',
        color: '#000',
        marginTop: 25,
        fontSize: 18
    },
    price: {
        fontSize: 20,
        marginVertical: 25,
        color: '#ff5555'
    },
    des: {
        fontWeight: '600',
        color: '#000'
    },
    btn: {
        backgroundColor: '#ff7777',
        margin: 20,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntext: {
        color: '#fff',
        fontWeight: '600',
    }
})

export default ProductDetails
