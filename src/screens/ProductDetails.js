import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { addToCart, fetchSingleProduct } from '../../store/slices/productsSlice';
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import * as _ from "lodash";

const ProductDetails = ({navigation, item}) => {
    const dispatch = useDispatch({});
    const { singleProduct, cart } = useSelector((state) => state.product);
    const [isAvailable, setIsAvailable] = useState(false)
    console.log("singleProduct====",cart)
    
    const addCart = async() => {
        // console.log("cart press====")
        if (isAvailable){
            navigation.navigate('Cart')
        }else{
            await dispatch(addToCart(singleProduct))
            navigation.navigate('Cart')
        }
        
    }

    

    useEffect(()=>{
        if (_.find(cart, { id: singleProduct?.id})) {
            setIsAvailable(true)
        }else{
            setIsAvailable(false)
        }
    },[])

    return (
        <View style={styles.container}>
            <Image 
                style={styles.productImage}  
                source={{uri:singleProduct?.image}}
                resizeMode={"cover"}
            />
            <Pressable onPress={()=>navigation.goBack()} style={styles.iconcontainer}>
                    <Icon name='chevron-back' size={25} />
            </Pressable>
            <Text style={styles.caption}>{singleProduct?.title}</Text>
            <Text>{singleProduct?.category}</Text>
            <Text style={styles.price}>$ {singleProduct?.price}</Text>
            <Text style={styles.des}>Description</Text>
            <Text>{singleProduct?.description}</Text>
            <Pressable onPress={addCart} style={styles.btn}>
                {isAvailable ? (
                    <Text style={styles.btntext}>Go To Cart</Text>
                ) : (
                    <Text style={styles.btntext}>Add To Cart</Text>
                )} 
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    productImage: {
        height: '45%',
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
    },
    iconcontainer: {
        backgroundColor: '#ffffff88',
        height: 30,
        width:30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        margin: 20
    }
})

export default ProductDetails
