import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import { useDispatch } from 'react-redux';
import { fetchSingleProduct, removeFromCart } from '../../store/slices/productsSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ProductItems = ({ navigation, item, cartFlag=false }) => {

    const dispatch = useDispatch({});
    
    const showAlert=()=> {  
        Alert.alert(  
            'Warning',  
            'Do want to remove item from cart?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: ()=>{dispatch(removeFromCart(item?.id))}},  
            ]  
        );  
    }  

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
            {cartFlag &&
            <Pressable onPress={showAlert} style={styles.iconcontainer}>
                <Icon name='close-circle' size={25} color='#a01020' />
            </Pressable>
            }
            
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
        paddingRight: 2,
        width: '55%'
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
    },
    iconcontainer:{
        alignSelf: 'flex-start',

    }
})

export default ProductItems
