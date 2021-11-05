import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../store/slices/productsSlice';


const ProductItems = ({ navigation, item }) => {

    const dispatch = useDispatch({});

    const gotoDetails = async(data) => {
      const resultAction =  await dispatch(fetchSingleProduct({id:data}))
      if(fetchSingleProduct.fulfilled.match(resultAction)){
        navigation.navigate('Details')
      }else{
          console.log("error in api")
      }
    }
    
    return (
        <Pressable onPress={() => gotoDetails(item?.id)} style={styles.card}>
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

const styles= StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        elevation: 5,
        margin: 10,
        backgroundColor: 'white',
        borderRadius:5,
        padding: 5
    },
    productImage: {
        height: 120,
        width: 120,
        marginRight: 10
    },
    cardtxt: {
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingRight: 30,
        width: '70%'
    },
    productCaption: {
        color: '#333',
        fontSize: 18,
        width: '90%',
        fontWeight: '600'
    },
    price: {
        fontWeight: '700',
        color: '#444',
        fontSize: 18
    }
})

export default ProductItems
